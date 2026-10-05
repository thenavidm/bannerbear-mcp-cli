# Install Bannerbear MCP Server & CLI

One npm package includes both binaries and all **75 tools**. Requires Node.js 22 or newer for CLI/manual MCP installs. Discovery works before account authentication. Account operations need eligible Bannerbear V5 API access; provider workspace plans, key permissions and API quota apply.

| Route | Program | Use |
| --- | --- | --- |
| Terminal | bannerbear-cli | Scripts and agents with a shell |
| Local MCP | bannerbear-mcp | AI clients supporting stdio |
| Desktop archive | bannerbear-2.0.0.mcpb | Compatible Claude Desktop custom extensions |
| Bannerbear-hosted alternative | https://mcp.bannerbear.com/ | Official remote provider-hosted access |

## Contents

[Requirements](#requirements) · [CLI](#cli) · [Private account setup](#private-account-setup) · [Claude Code](#claude-code) · [Codex](#codex) · [Claude Desktop](#claude-desktop) · [Cursor](#cursor) · [VS Code and Copilot](#vs-code-and-copilot) · [Windsurf](#windsurf) · [Zed](#zed) · [Gemini CLI](#gemini-cli) · [Docker](#docker) · [Verify](#verify) · [Multiple accounts](#multiple-accounts) · [Updates and removal](#updates-and-removal) · [Troubleshooting](#troubleshooting) · [Development](#development)

## Requirements

Install Node from [nodejs.org](https://nodejs.org/en/download). Open a new terminal and check `node --version` and `npm --version`. The desktop host needs a compatible Node runtime; dependencies are bundled. A GUI app may not inherit your terminal's environment. Check your account's current API access and quota with Bannerbear instead of assuming npm installation provides it.

## CLI

On macOS/Linux, use Terminal. On Windows, use PowerShell or Command Prompt:

```bash
npm install -g @thenavidm/bannerbear-mcp-cli@latest
bannerbear-cli --version
bannerbear-cli
bannerbear-cli list-image-templates --help
bannerbear-cli schema create-image
bannerbear-cli login
```

If PowerShell blocks npm.ps1, use npm.cmd or Command Prompt according to your policy. If a binary is missing, check `npm prefix -g`, ensure its executable directory is on PATH and open a new terminal. Avoid sudo as a workaround for PATH problems.

For one command without a global install:

```bash
npx -y --package @thenavidm/bannerbear-mcp-cli@latest bannerbear-cli tools
```

Make [SKILL.md](./SKILL.md) available in your agent's supported skill location. The installed file is `<npm root -g>/@thenavidm/bannerbear-mcp-cli/SKILL.md`. npm does not automatically register client skills. Your agent should read the actual schema and use --agent/--select for compact output.

## Private account setup

### Private V5 workspace keys

1. Sign in to the intended Bannerbear workspace and open [V5 API Keys](https://app.bannerbear.com/v5/api_keys). Create a key restricted to the resource/action scopes needed for your task.
2. Store the secret outside all repositories. Set BANNERBEAR_TOKEN_FILE to an absolute owner-only token-only file, or configure BANNERBEAR_API_KEY privately. A V2 key cannot authenticate V5.
3. Run bannerbear-cli doctor for local presence/settings, then deliberately run doctor --network to read GET /v5/account. This prints current scope/quota metadata and proves only that account read, not every operation.
4. Read the actual template/workflow, inspect its layers/inputs and save the exact requested native body privately. Preview it locally and approve only the intended render or change.

A key belongs to a workspace. It is not scoped to an individual template; separate workspaces are the provider isolation route when an integration must reach only a subset. Provider template/workflow ownership and api_write_access locks still apply. READ_ONLY is an additional local control, not a replacement for restricted provider scopes.

The 22 current scopes pair :read and :write for images, image_templates, animations, animation_templates, tools, workflows, batches, webhooks, instant_urls, publications and assets. An empty returned scopes array means full access. allowed_origins restricts browser-origin use; it does not make a local CLI key template-scoped. Request only the necessary grants. This wrapper does not create/roll keys, implement OAuth/refresh, load .env automatically or reuse official saved sessions. login prints instructions only.

On macOS/Linux, use an existing 0700 directory and a regular 0600 token file owned by your user. It must be absolute, non-symlink and at most 64 KiB. File credentials override environment keys and are cached until restart. On Windows, restrict the file/directory ACL to your user; POSIX mode checks do not validate Windows ACLs. GUI apps can have different environments from your shell.

### Plans, credits and limits

The AGPL wrapper is free; Bannerbear subscriptions, render/AI credits, storage and workspace permissions remain separate. The provider currently advertises a 30-credit trial without a credit card. Check the current dashboard and [pricing](https://www.bannerbear.com/v5/pricing/) before approval; do not infer that every model or operation has the same cost. A workflow charges for its individual steps; a batch reduces request count, not render credits.

The current [V5 reference](https://developers.bannerbear.com/v5/) states 60 POST requests per ten-second window. Official 0.13.0 source still uses a conservative 28-POST window and older 30-request wording. This package's default 200 ms spacing is per profile/process across calls, not a reservation or globally coordinated quota. Other clients using the key share provider limits. No request retries automatically after 429, 5xx, network failures or timeouts.

Native image batches are 1–100 items. This package limits JSON bodies/files to 1 MiB, raw uploads to 5,000,000 bytes and each response to 5 MiB; these are separate caps. Source describes a 20-asset trial allowance and content-hash deduplication within a workspace; check returned provider policy. Supported upload Content-Types come from the pinned V5 schema, including image/video/audio/PDF/JSON types. The provider validates actual media and MIME compatibility.

### Rotation and revocation

Create/rotate/revoke the intended V5 key in Bannerbear, update private settings and restart clients. Uninstalling npm does not revoke a key or undo a queued render. Keep account records, render metadata, media URLs, signing keys and private output files out of public issues.


```bash
export BANNERBEAR_TOKEN_FILE='/absolute/private/bannerbear.txt'
bannerbear-cli doctor --network
```

```powershell
$env:BANNERBEAR_TOKEN_FILE = 'C:\Users\YOUR_USER\Private\bannerbear.txt'
bannerbear-cli doctor --network
```

### Agent-guided installation

> Help me install Bannerbear MCP Server & CLI with INSTALL.md. Check Node and the binary, let me configure my account credentials privately, then run discovery and doctor --network. Do not change or mutate accounts during setup.

## Codex

Codex is the current validation priority. Private token paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add bannerbear -- npx -y @thenavidm/bannerbear-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.bannerbear]
command = "npx"
args = ["-y", "@thenavidm/bannerbear-mcp-cli@latest"]
env_vars = ["BANNERBEAR_API_KEY", "BANNERBEAR_TOKEN_FILE", "BANNERBEAR_ACCOUNTS", "BANNERBEAR_DEFAULT_ACCOUNT", "BANNERBEAR_READ_ONLY", "BANNERBEAR_ALLOW_DESTRUCTIVE"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user bannerbear -- npx -y @thenavidm/bannerbear-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

1. Download `bannerbear-2.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/bannerbear-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Enter a private API key in the sensitive setting, or an absolute private token-file path. Leave the unused credential method empty. Requests use Authorization: Bearer at the fixed Bannerbear endpoint. Use the intended workspace key; named profiles are configured separately in private client environments.
4. Enable read-only if you want only the 33 read operations. Reconnect and ask for account verification.

The bundle includes production dependencies and no credentials. Use a regular private token-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "bannerbear": {
      "command": "npx",
      "args": ["-y", "@thenavidm/bannerbear-mcp-cli@latest"],
      "env": {
        "BANNERBEAR_API_KEY": "YOUR_PRIVATE_API_KEY",
        "BANNERBEAR_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/bannerbear-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "bannerbear": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/bannerbear-mcp-cli@latest"],
      "env": {
        "BANNERBEAR_API_KEY": "${env:BANNERBEAR_API_KEY}",
        "BANNERBEAR_TOKEN_FILE": "${env:BANNERBEAR_TOKEN_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project's .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type": "promptString", "id": "bannerbear-api-token", "description": "Bannerbear API key (leave empty for a private token file)", "password": true},
    {"type": "promptString", "id": "bannerbear-token-file", "description": "Optional private token-file path (leave empty for API key)"}
  ],
  "servers": {
    "bannerbear": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/bannerbear-mcp-cli@latest"],
      "env": {
        "BANNERBEAR_API_KEY": "${input:bannerbear-api-token}",
        "BANNERBEAR_TOKEN_FILE": "${input:bannerbear-token-file}"
      }
    }
  }
}
~~~

Start Bannerbear through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Bannerbear in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "bannerbear": {
      "command": "npx",
      "args": ["-y", "@thenavidm/bannerbear-mcp-cli@latest"],
      "env": {
        "BANNERBEAR_API_KEY": "YOUR_PRIVATE_API_KEY",
        "BANNERBEAR_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/bannerbear-mcp-cli.git
cd bannerbear-mcp-cli
docker build -t bannerbear-mcp-cli .
docker run --rm -i -e BANNERBEAR_API_KEY bannerbear-mcp-cli
```


## Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/bannerbear-mcp-cli@latest`, stdio transport, and private local BANNERBEAR_API_KEY or BANNERBEAR_TOKEN_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; use Bannerbear's official server rather than this local stdio command.

## Verify

```bash
bannerbear-cli doctor
bannerbear-cli doctor --network
bannerbear-cli list-accounts --agent
bannerbear-cli get-account --agent --select quota,api_key.scopes
bannerbear-cli list-image-templates --page 1 --agent
```

Local doctor checks settings/presence. Network doctor checks the selected V5 account response. Then inspect the exact template/workflow you intend to use. Do not render/upload/delete merely to test installation. Full discovery returns 75; read-only returns 33 and direct confirmed mutation calls still refuse.

## Multiple accounts

Set BANNERBEAR_ACCOUNTS privately to a JSON array of unique {name,api_key,token_file} profiles; use one auth method per profile. Named profiles never borrow BANNERBEAR_API_KEY or another profile's file. Set BANNERBEAR_DEFAULT_ACCOUNT to an exact configured name; --account overrides it for one operation. Profile labels are local routing, not a new provider authorization boundary.

```json
[{"name":"personal","token_file":"/absolute/private/bannerbear-personal.txt"},{"name":"work","token_file":"/absolute/private/bannerbear-work.txt"}]
```

list_accounts returns labels, default and auth method only. It omits keys, private paths and workspace identity. get_account is a deliberate provider read, which can expose plan/quota/scope/workspace metadata. Keep profile JSON and its files outside every repository. Reconnect after key/file changes; cached keys remain until restart.

## Updates and removal

```bash
npm install -g @thenavidm/bannerbear-mcp-cli@latest
bannerbear-cli --version
npm uninstall -g @thenavidm/bannerbear-mcp-cli
codex mcp remove bannerbear
```

npx @latest resolves on process startup; reconnect/restart to use the new version. Global installs and desktop archives need explicit updates. Install the new versioned .mcpb separately, retain private settings and confirm the reported version. Remove the client entry/extension when disconnecting, then revoke the provider key if access should end. Uninstalling does not cancel jobs, undo provider changes or delete private output files.

## Troubleshooting

| Symptom | Check / next action |
| --- | --- |
| Missing binary / npm.ps1 blocked | Node22+, npm global PATH/new terminal; npm.cmd or permitted shell |
| Exit10 | Private key/file, exact profile label, owner permissions, GUI environment; local doctor |
| 401 | V5 workspace key; V2 keys do not authenticate V5 |
| 402 / exit7 | Current provider credits/asset allowance; retry cannot replenish balance |
| 403 | Resource/action scopes, intended workspace and ownership lock |
| 404 | Exact UID and selected workspace; never guess another account |
| 408 / network timeout / 5xx | Outcome may be unknown; inspect existing resources before repetition |
| 413 / 415 | Provider and local size cap; actual media MIME compatibility |
| 422 | Native V5 schema, object/layer names, model-specific valid options |
| 423 | Template api_write_access locked; owner must decide any unlock |
| 429 | Current provider window; other clients share quota, no replay |
| Refused render/delete | Explicit approval, READ_ONLY and ALLOW_DESTRUCTIVE policy |
| Old V2 body rejected | Use object-shaped V5 modifications and actual V5 endpoint schemas |
| Secret result file rejected | New absolute canonical path, existing private directory, no overwrite |
| Still pending / polling cap | Continue reading the same UID or use provider webhooks |
| `which` does not name the command | Bannerbear's operation descriptions name the endpoint, not the task; read the command list or a command's `--help` |

Share sanitized error/status, package/Node/client versions and operation name; omit keys, private IDs, bodies, media URLs and secret files.

## Development

```bash
git clone https://github.com/thenavidm/bannerbear-mcp-cli.git
cd bannerbear-mcp-cli
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run build:mcpb
```

Source mode: configure private env, then register `node /absolute/path/bannerbear-mcp-cli/dist/index.js` as the MCP command. Build before registration and after source changes. No local credentials are packaged. [CONTRIBUTING.md](./CONTRIBUTING.md), [SECURITY.md](./SECURITY.md) and [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) cover contributions, disclosures and licensing.
