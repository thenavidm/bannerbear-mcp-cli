/**
 * The CLI, now built by Slipway from the same tools as the MCP server.
 *
 * Parsing, help and output shapes are Slipway's and tested there. These cover
 * what this repo promises: confirmation that agent mode never grants,
 * read-only mode, the setup exit code, Bannerbear's errors keeping their exit
 * codes, and the docs staying in step with the code.
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { checkApp, cli } from "@thenavidm/slipway/testing";
import { BannerbearClient } from "../src/api/client.js";
import { app, createApp } from "../src/app.js";
import { loadConfig } from "../src/config.js";

const key = { BANNERBEAR_API_KEY: "fixture-key-not-a-provider-secret" };

/** The app with Bannerbear answering every request with `status` and `body`, so nothing leaves the test. */
function answering(status: number, body: unknown = { message: "failure" }) {
  return createApp({
    context: (env) => {
      const config = loadConfig({ ...env, BANNERBEAR_MIN_REQUEST_INTERVAL_MS: "0" });
      const fetcher = async () => new Response(JSON.stringify(body), { status });
      return { config, client: new BannerbearClient(config, fetcher as typeof fetch) };
    },
  });
}

describe("Bannerbear CLI on Slipway", () => {
  it("lists 75 commands, 42 of them needing confirmation, and 33 in read-only mode", async () => {
    const all = JSON.parse((await cli(app, ["agent-context", "--brief"], { env: {} })).stdout);
    const reads = JSON.parse((await cli(app, ["agent-context", "--brief"], { env: { BANNERBEAR_READ_ONLY: "1" } })).stdout);
    expect(all.commands).toHaveLength(75);
    expect(all.commands.filter((c: { requires_confirm: boolean }) => c.requires_confirm)).toHaveLength(42);
    expect(reads.commands).toHaveLength(33);
  });

  it("refuses a delete without --confirm, also in agent mode, before any network", async () => {
    for (const extra of [[], ["--agent"], ["--yes"]]) {
      const run = await cli(answering(200), ["delete-image-template", "--uid", "fixture_template", ...extra], { env: key });
      expect(run.code).toBe(2);
      expect(JSON.parse(run.stderr).code).toBe("refused");
      // 2.x's words for what the call can do, not a generic warning.
      expect(JSON.parse(run.stderr).error).toContain("may affect workspace media,");
    }
  });

  it("hides writes in read-only mode", async () => {
    const run = await cli(app, ["delete-image-template", "--uid", "fixture_template", "--confirm"], { env: { ...key, BANNERBEAR_READ_ONLY: "1" } });
    expect(run.code).toBe(2);
    expect(run.stderr).toContain("BANNERBEAR_READ_ONLY");
  });

  it("reports a missing argument by its flag", async () => {
    const run = await cli(app, ["get-image"], { env: key });
    expect(run.code).toBe(2);
    expect(JSON.parse(run.stderr).error).toContain("--uid");
  });

  it("exits 10 when nothing is configured, on a call and from doctor", async () => {
    expect((await cli(app, ["get-account"], { env: {} })).code).toBe(10);
    expect((await cli(app, ["doctor", "--json"], { env: {} })).code).toBe(10);
  });

  it("keeps the exit codes scripts branch on", async () => {
    // 2.x gave 5 for 400, 402, 410 and 422; Bannerbear's own code now picks 7 for running out of credits.
    for (const [status, code] of [[400, 2], [401, 4], [402, 7], [403, 4], [404, 3], [410, 3], [422, 2], [429, 7], [500, 5]]) {
      const run = await cli(answering(status), ["get-image", "--uid", "fixture"], { env: key });
      expect(run.code, `HTTP ${status}`).toBe(code);
    }
    const unknown = await cli(app, ["get-image", "--uid", "fixture", "--account", "absent"], { env: key });
    expect(unknown.code).toBe(10);
  });

  it("passes slipway check in both policy modes", async () => {
    for (const env of [{}, { BANNERBEAR_READ_ONLY: "1" }]) {
      const report = await checkApp(app, { env });
      expect(report.findings.filter((finding) => finding.level === "error")).toEqual([]);
    }
  });
});

describe("documentation stays in step with the code", () => {
  const read = (p: string): string => readFileSync(new URL(p, import.meta.url), "utf-8");
  const names = (text: string): Set<string> => new Set((text.match(/BANNERBEAR_[A-Z_]+/g) ?? []).filter((name) => !name.endsWith("_")));
  const source = (dir: string): string =>
    readdirSync(new URL(dir, import.meta.url), { withFileTypes: true })
      .map((entry) => (entry.isDirectory() ? source(`${dir}${entry.name}/`) : entry.name.endsWith(".ts") ? read(`${dir}${entry.name}`) : ""))
      .join("\n");

  /** Every variable the server reads: this repo's code, and Slipway's as agent-context lists them. */
  const used = async (): Promise<Set<string>> => {
    const context = JSON.parse((await cli(app, ["agent-context"], { env: {} })).stdout);
    return new Set([...names(source("../src/")), ...context.settings.map((setting: { env: string }) => setting.env)]);
  };

  it("documents every environment variable the code reads", async () => {
    const documented = names(read("../README.md"));
    expect([...(await used())].filter((v) => !documented.has(v))).toEqual([]);
  });

  it.each(["../README.md", "../INSTALL.md"])("has no dead in-page anchors in %s", (file) => {
    if (!existsSync(new URL(file, import.meta.url))) return; // repo may ship one doc
    const md = read(file).replace(/```[\s\S]*?```/g, "");
    // GitHub's slug keeps letters, marks, numbers and connector punctuation, so an
    // emoji's variation selector (U+FE0F) stays in the anchor and a link has to carry it.
    const slugs = new Set(
      [...md.matchAll(/^#{1,6} (.+)$/gm)].map(([, heading]) =>
        (heading as string).trim().toLowerCase().replace(/[^\p{L}\p{M}\p{N}\p{Pc}\s-]/gu, "").replace(/ /g, "-"),
      ),
    );
    const dead = [...md.matchAll(/\[[^\]]+\]\(#([^)]+)\)/g)]
      .map((m) => decodeURIComponent(m[1] as string))
      .filter((a) => !slugs.has(a));
    expect(dead).toEqual([]);
  });
});
