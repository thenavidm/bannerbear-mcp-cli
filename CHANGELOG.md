# Changelog

## 3.0.0, 2026-10-05

Built on [Slipway](https://github.com/thenavidm/slipway) 0.1.12. The 75 tools keep their names and arguments, and every difference below was measured against 2.0.1, the last version on npm, before release.

- **A person approves each mutation over MCP.** All 42 renders, uploads, edits, installs and deletes still need confirmation. Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Approvals are signed, bound to the exact call and work once. Where a client can do neither, the model's `confirm: true` still counts, and `BANNERBEAR_CONFIRM=model` makes it enough everywhere. The audit log records who approved each write.
- **`BANNERBEAR_ALLOW_DESTRUCTIVE=0` still refuses every mutation**, confirmed or not, as 2.0 did.
- **Bannerbear's status and its own code pick the exit code.** A body Bannerbear rejects (400 or 422) exits 2 instead of 5, running out of credits (402) 7 instead of 5, as a rate limit does, and a deleted resource (410) 3 instead of 5. 401 and 403 still exit 4, 404 3, 429 7, a server error 5, and an unknown profile or nothing configured 10. 1 now means an unexpected error.
- **`which <words>` finds a command**, and `agent-context` describes every command, flag and setting as JSON. In Codex 0.159.3, finding the command that renders one image from a template took a median of 107,521 input tokens over the CLI instead of 151,819 (five runs each): no 3.0.0 run hit a failed command, where three 2.0.1 runs tried `schema` without a command or repeated the help.
- **`install <client>`** adds the server to Claude Code, Codex, Claude Desktop, Cursor, VS Code or Gemini CLI in each one's own format, and **`bannerbear-mcp --http`** serves the same tools over Streamable HTTP, on 127.0.0.1:8787 unless told otherwise.
- **Much less work to start.** The validators for the 75 input schemas and the native bodies compiled at load in 2.0; each now compiles on its first use, and the entry turns on Node's compile cache. The server spends 184 ms of CPU before its first answer where 2.0.1 spent 950, and answers in 128 ms of wall time instead of 553 (median of 21 runs, taking turns on one busy Mac). npx installs 10 dependencies instead of 94. A test still compiles every schema.
- **The same tool list for the model.** 216,285 tokens in Claude Code with every tool loaded, against 216,552, and 1,147 with tool search, as before: the confirm argument's description is shorter. On the wire the list is 357 tokens longer (o200k), because each of the 42 mutations carries `_meta: {"anthropic/requiresUserInteraction": true}`, which Claude Code reads to show its own approval prompt and does not send to the model.
- **Docs.** README section 7 has the measured Claude Code and Codex costs, where 2.0 said they were pending, and the troubleshooting tables say what to do when `which` does not name the command.

### Upgrading

Over MCP, expect an approval prompt or form before any render, upload, edit, install or delete; a headless agent that should do them with `confirm: true` alone needs `BANNERBEAR_CONFIRM=model`. A script that read exit 5 as a rejected body should read 2, as out of credits 7, and as a deleted resource 3. With `BANNERBEAR_READ_ONLY=1`, a client that calls a hidden mutation gets "tool not found" instead of a refusal naming `BANNERBEAR_READ_ONLY`; the CLI still names it. The audit log's lines gain `confirmed_by`, and each allowed write is followed by a `done` or `failed` line. A script that pipes JSON-RPC into the server must keep stdin open until it reads the answer: the server now stops when its input ends, as the MCP stdio binding asks. `--http` refuses a page from another site unless `BANNERBEAR_HTTP_ALLOWED_ORIGINS` lists it. Some terminal screens grew: the general help by 217 tokens, for `which`, `install`, the flags and the exit codes it now lists; the command list by 16; and a missing argument's error by 14, for its code and a hint. `SKILL.md` is 56 tokens longer in Claude Code, because it says how approval works over MCP and lists every exit code.

## 2.0.1, 2026-10-04

- **`npx -y @thenavidm/bannerbear-mcp-cli` starts the MCP server whatever order npm keeps.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order. For this package that happened to be the server; for 23 others it was the CLI. A third binary named after the package, on its own file, now always starts the server, and npx picks it by name.

Use the native terminal capture at 1040 source pixels with lossless GIF optimization, displayed at 520 pixels, matching the Bluesky/Substack reference. Original assets remain available.

## 2.0.0 - 2026-10-03

- Refresh the private V2 MCP using the shared V5 CLI/local MCP/desktop framework.
- Add 67 current native operations and eight helpers: 75 tools, 33 reads/helpers and 42 confirmed mutations.
- Enforce shared direct-call read-only policy, isolated workspace keys, bounded JSON/files and fixed async origin without request replay.
- Deliver one-time creation signing keys to exclusive private files. Add exact ordered image-batch review and bounded existing-job polling.
- Document complete native arguments/layer definitions, current official comparisons, every client/OS, version history and maintenance gates. Preserve AGPL/private legacy history.
- Record explicit local correction of AI-video duration to the pinned numeric enum; provider account acceptance remains unverified.

## 1.0.0 - private legacy source

Earlier 17-tool V2 MCP-only package. No earlier public npm/tag release is assumed; private history retained separately.

| Component | Reviewed version / source |
| --- | --- |
| Owned wrapper / manifest | 2.0.0; source, npm and desktop versions must match |
| Bannerbear API | V5 / OpenAPI info 5.0 |
| OpenAPI snapshot | SHA-256 745da36239a30e6f2bdd2f4f99f6810ac33ec55e40a222cc22c1b5f9e044d04b, Oct3 2026 |
| Official local MCP | @bannerbear/mcp 0.13.0; npm archive/source pinned in comparison evidence |
| @modelcontextprotocol/sdk | 1.32.0 |
| ajv | 8.20.0 |
| ajv-formats | 3.0.1 |
| typescript | 7.0.2 |
| vitest | 5.0.3 |
| vite | 8.3.2 |
| @anthropic-ai/mcpb | 2.1.2 |
