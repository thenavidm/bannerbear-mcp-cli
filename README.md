<img src="https://cdn.navid.me/tools/bannerbear-icon.png" alt="Bannerbear" width="88">

# Bannerbear MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/bannerbear-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/bannerbear-mcp-cli)
[![CI](https://github.com/thenavidm/bannerbear-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/bannerbear-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

Bannerbear V5 MCP server and CLI for Codex and AI agents. 75 shared tools for templates, images, animations, media jobs, workflows, assets, publications, webhooks and Instant URLs, with explicit mutation approval and isolated private workspace profiles.

One package gives you a task CLI, local stdio MCP and versioned desktop bundle. Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=bannerbear-mcp-cli&utm_content=readme). Complete setup: [navid.me](https://navid.me/mcp-servers/bannerbear?utm_source=github&utm_medium=referral&utm_campaign=bannerbear-mcp-cli&utm_content=guide).

<img src="https://cdn.navid.me/repos/bannerbear-mcp-cli-retina.gif" alt="Illustrated Bannerbear workflow using the same terminal component as navid.me" width="520">

The terminal is an illustration of shipped command names and review/confirmation. It is not a recorded paid render. The official MCP already exists and is compared fairly below. Provider outcomes, desktop GUI and matched token/task measurements remain separately pending.

## Two ways to use it

### Command line

```bash
bannerbear-cli tools
bannerbear-cli get-account --agent
bannerbear-cli get-image-template --uid YOUR_TEMPLATE_UID --agent
bannerbear-cli preview-render-batch --payload-file /absolute/private/approved-batch.json --agent
bannerbear-cli create-image --payload-file /absolute/private/approved-image.json --confirm --agent
```

### MCP server, for your AI app

```bash
codex mcp add bannerbear --env BANNERBEAR_TOKEN_FILE=/absolute/private/bannerbear.txt -- npx -y @thenavidm/bannerbear-mcp-cli@latest
```

### Which one

| Where you work | Route |
| --- | --- |
| Codex/Cursor/agents with a shell | CLI, local MCP or both |
| Claude Desktop | Bundled custom extension or local stdio |
| Scripts / cron / CI | Same task CLI and shared policies |
| Remote-only chat client | Official hosted Bannerbear OAuth MCP |

## Features

| Capability | CLI command | MCP tool |
| --- | --- | --- |
| Templates / layers | get-image-template / get-layer-schema | get_image_template / get_layer_schema |
| Explicit render / batch | create-image / create-batch | create_image / create_batch |
| Exact batch review | preview-render-batch / apply-render-batch | preview_render_batch / apply_render_batch |
| Workflows / media | get-workflow / run-workflow / poll-job | get_workflow / run_workflow / poll_job |
| Confirmed local upload | upload-asset | upload_asset |
| Private creation keys | create-webhook / create-instant-url | create_webhook / create_instant_url |
| Schema / profiles | get-operation-schema / list-accounts | get_operation_schema / list_accounts |

## Contents

| Number | Section | What it covers |
| --- | --- | --- |
| 1 | [What you can ask it](#1-what-you-can-ask-it) | What you can ask it |
| 2 | [Quick install](#2-quick-install) | Quick install |
| 3 | [Set up Bannerbear access](#3-set-up-bannerbear-access) | Set up Bannerbear access |
| 4 | [Connect your client](#4-connect-your-client) | Connect your client |
| 5 | [Check it works](#5-check-it-works) | Check it works |
| 6 | [Output, flags and exit codes](#6-output-flags-and-exit-codes) | Output, flags and exit codes |
| 7 | [MCP or CLI and token cost](#7-mcp-or-cli-and-token-cost) | MCP or CLI and token cost |
| 8 | [Every tool and argument](#8-every-tool-and-argument) | Every tool and argument |
| 9 | [Image, animation and workflow tasks](#9-image-animation-and-workflow-tasks) | Image, animation and workflow tasks |
| 10 | [Jobs, batches and local files](#10-jobs-batches-and-local-files) | Jobs, batches and local files |
| 11 | [Several private workspaces](#11-several-private-workspaces) | Several private workspaces |
| 12 | [Writing safely](#12-writing-safely) | Writing safely |
| 13 | [How the two surfaces work](#13-how-the-two-surfaces-work) | How the two surfaces work |
| 14 | [Your data](#14-your-data) | Your data |
| 15 | [Environment variables](#15-environment-variables) | Environment variables |
| 16 | [Updates and removal](#16-updates-and-removal) | Updates and removal |
| 17 | [Troubleshooting](#17-troubleshooting) | Troubleshooting |
| 18 | [API coverage and comparisons](#18-api-coverage-and-comparisons) | API coverage and comparisons |
| 19 | [Versions and migration](#19-versions-and-migration) | Versions and migration |
| 20 | [FAQ](#20-faq) | FAQ |

## 1. What you can ask it

- Find the intended image template and inspect every layer before changing text.
- Preview the exact image body and approve one render.
- Review an ordered image batch, then submit only the same profile and body.
- Read workflow inputs and trigger only the requested run after approval.
- Resume an existing image, animation, batch, media job or workflow run without submitting again.
- Upload the chosen local asset only after approval.
- Create a webhook/instant URL and save its one-time signing key privately.

Actual stdio discovery provides **75 shared tools: 33 reads/helpers and 42 confirmed mutations**. Sixty-seven native operations derive from a pinned V5 OpenAPI snapshot; eight helpers add local profiles/schema/layers/preview, bounded pages/job polling and exact image-batch review/apply. This is a V5 refresh, not a V2 request-body rename.

## 2. Quick install

```bash
npm install -g @thenavidm/bannerbear-mcp-cli@latest
bannerbear-cli --version
bannerbear-cli tools
bannerbear-cli schema create-image
bannerbear-cli login
```

Node 22+ is required for manual installs. Discovery and local previews work without keys. Provider calls need a private V5 key; see INSTALL.md for every client/OS and desktop setup. Use the versioned source and desktop release linked below.

## 3. Set up Bannerbear access

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

## 4. Connect your client

Codex is the primary documented agent. Use private file paths rather than placing keys in shell history:

```bash
codex mcp add bannerbear --env BANNERBEAR_TOKEN_FILE=/absolute/private/bannerbear.txt -- npx -y @thenavidm/bannerbear-mcp-cli@latest
codex mcp list
```

INSTALL.md includes private env_vars TOML, separate Windows paths, Claude Desktop bundled/manual setup, Claude Code, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Cline/other stdio clients and Docker. GUI environment forwarding and an actual installed desktop extension are different from protocol discovery. A remote-only chat client can use official hosted OAuth; this package exposes no public HTTP listener.

## 5. Check it works

```bash
bannerbear-cli doctor
bannerbear-cli doctor --network
bannerbear-cli list-accounts --agent
bannerbear-cli get-account --agent --select quota,api_key.scopes
bannerbear-cli list-image-templates --page 1 --agent
```

Local doctor checks settings/presence. Network doctor checks the selected V5 account response. Then inspect the exact template/workflow you intend to use. Do not render/upload/delete merely to test installation. Full discovery returns 75; read-only returns 33 and direct confirmed mutation calls still refuse.

## 6. Output, flags and exit codes

MCP uses underscore names; CLI uses hyphens from the same catalogue. Path/query flags are top-level; native JSON bodies use --payload or --payload-file exclusively. Output retains provider shapes: list endpoints return arrays, creates return queued objects and helper wrappers report their explicit bounds.

| Flag / command | Contract |
| --- | --- |
| tools / no command | Actual current commands, writes marked |
| COMMAND --help / schema COMMAND | Derived flags / complete JSON Schema |
| --agent | --json --compact --no-input --no-color --yes; never confirmation |
| --select a,b.c | Local selection only; does not change upstream quota or fields |
| --account NAME | Exact private workspace profile label |
| --confirm | Exact selected mutation approval |
| --payload / --payload-file | Native V5 body / regular local JSON file |
| --asset-file / --content-type | Confirmed raw bytes and declared provider MIME type |
| --secret-result-file | Exclusive private result for creation signing keys |

| Exit | Meaning |
| --- | --- |
| 0 | Success |
| 2 | Invalid input or refused mutation |
| 3 | Not found |
| 4 | Authentication/permission failure |
| 5 | Provider/transport failure |
| 7 | Rate limit or exhausted credit quota |
| 10 | Missing/invalid private configuration |

A queued UID is not a completed render. A failed media result is retained for inspection. No formatting or --yes flag changes the WriteGuard policy.

## 7. MCP or CLI and token cost

| Mode | What reaches the agent | Evidence |
| --- | --- | --- |
| MCP | Names, instructions and schemas according to client loading policy; selected results | Actual client/model loading and successful task usage |
| CLI | Available skill/help and selected command output | Actual successful matched task usage |
| Official workflow profile | Eight local fixture tools and provider workflow results | Official composition already reduces manual steps; no claimed token winner |
| --select / bounded reads | Locally selected fields and capped pages | Proven output bounds; no measured saving percentage |

Measure Codex first with actual API usage, identical tasks/resources/permissions/results and pinned client/model/package/date. Tool discovery characters divided by four, another repo's measurements and tool counts are not token evidence. No fresh matched Codex measurements are published for this release. Claude Code benchmarks are deferred at Navid's instruction.

## 8. Every tool and argument

All 75 sections below come from actual stdio discovery. Payload validation also applies when a body is loaded from a file. Mandatory confirmation is enforced outside the ordinary required-key list. Native nested shapes, allowed values, references and local limits follow the tool tables.

| MCP tool | CLI command | Policy |
| --- | --- | --- |
| `get_account` | `bannerbear-cli get-account` | Read / local helper |
| `list_image_templates` | `bannerbear-cli list-image-templates` | Read / local helper |
| `create_image_template` | `bannerbear-cli create-image-template` | Explicit confirmation required |
| `get_image_template` | `bannerbear-cli get-image-template` | Read / local helper |
| `update_image_template` | `bannerbear-cli update-image-template` | Explicit confirmation required |
| `delete_image_template` | `bannerbear-cli delete-image-template` | Explicit confirmation required |
| `list_images` | `bannerbear-cli list-images` | Read / local helper |
| `create_image` | `bannerbear-cli create-image` | Explicit confirmation required |
| `get_image` | `bannerbear-cli get-image` | Read / local helper |
| `list_batches` | `bannerbear-cli list-batches` | Read / local helper |
| `create_batch` | `bannerbear-cli create-batch` | Explicit confirmation required |
| `get_batch` | `bannerbear-cli get-batch` | Read / local helper |
| `list_webhooks` | `bannerbear-cli list-webhooks` | Read / local helper |
| `create_webhook` | `bannerbear-cli create-webhook` | Explicit confirmation required |
| `get_webhook` | `bannerbear-cli get-webhook` | Read / local helper |
| `update_webhook` | `bannerbear-cli update-webhook` | Explicit confirmation required |
| `delete_webhook` | `bannerbear-cli delete-webhook` | Explicit confirmation required |
| `list_assets` | `bannerbear-cli list-assets` | Read / local helper |
| `upload_asset` | `bannerbear-cli upload-asset` | Explicit confirmation required |
| `get_asset` | `bannerbear-cli get-asset` | Read / local helper |
| `check_assets` | `bannerbear-cli check-assets` | Read / local helper |
| `list_publications` | `bannerbear-cli list-publications` | Read / local helper |
| `get_publication` | `bannerbear-cli get-publication` | Read / local helper |
| `install_publication` | `bannerbear-cli install-publication` | Explicit confirmation required |
| `list_instant_urls` | `bannerbear-cli list-instant-urls` | Read / local helper |
| `create_instant_url` | `bannerbear-cli create-instant-url` | Explicit confirmation required |
| `get_instant_url` | `bannerbear-cli get-instant-url` | Read / local helper |
| `update_instant_url` | `bannerbear-cli update-instant-url` | Explicit confirmation required |
| `delete_instant_url` | `bannerbear-cli delete-instant-url` | Explicit confirmation required |
| `list_animations` | `bannerbear-cli list-animations` | Read / local helper |
| `create_animation` | `bannerbear-cli create-animation` | Explicit confirmation required |
| `get_animation` | `bannerbear-cli get-animation` | Read / local helper |
| `list_animation_templates` | `bannerbear-cli list-animation-templates` | Read / local helper |
| `create_animation_template` | `bannerbear-cli create-animation-template` | Explicit confirmation required |
| `get_animation_template` | `bannerbear-cli get-animation-template` | Read / local helper |
| `update_animation_template` | `bannerbear-cli update-animation-template` | Explicit confirmation required |
| `delete_animation_template` | `bannerbear-cli delete-animation-template` | Explicit confirmation required |
| `animate_template` | `bannerbear-cli animate-template` | Explicit confirmation required |
| `remove_bg` | `bannerbear-cli remove-bg` | Explicit confirmation required |
| `generate_ai_image` | `bannerbear-cli generate-ai-image` | Explicit confirmation required |
| `generate_ai_video` | `bannerbear-cli generate-ai-video` | Explicit confirmation required |
| `video_thumbnails` | `bannerbear-cli video-thumbnails` | Explicit confirmation required |
| `subtitle_video` | `bannerbear-cli subtitle-video` | Explicit confirmation required |
| `generate_voiceover` | `bannerbear-cli generate-voiceover` | Explicit confirmation required |
| `create_pdf` | `bannerbear-cli create-pdf` | Explicit confirmation required |
| `trim_video` | `bannerbear-cli trim-video` | Explicit confirmation required |
| `concat_videos` | `bannerbear-cli concat-videos` | Explicit confirmation required |
| `resize_video` | `bannerbear-cli resize-video` | Explicit confirmation required |
| `crop_video` | `bannerbear-cli crop-video` | Explicit confirmation required |
| `overlay_video` | `bannerbear-cli overlay-video` | Explicit confirmation required |
| `overlay_image` | `bannerbear-cli overlay-image` | Explicit confirmation required |
| `add_audio` | `bannerbear-cli add-audio` | Explicit confirmation required |
| `add_cover_art` | `bannerbear-cli add-cover-art` | Explicit confirmation required |
| `create_video_slideshow` | `bannerbear-cli create-video-slideshow` | Explicit confirmation required |
| `apply_color_filter` | `bannerbear-cli apply-color-filter` | Explicit confirmation required |
| `soften_video` | `bannerbear-cli soften-video` | Explicit confirmation required |
| `create_gif_preview` | `bannerbear-cli create-gif-preview` | Explicit confirmation required |
| `list_tool_jobs` | `bannerbear-cli list-tool-jobs` | Read / local helper |
| `get_tool_job` | `bannerbear-cli get-tool-job` | Read / local helper |
| `list_workflows` | `bannerbear-cli list-workflows` | Read / local helper |
| `create_workflow` | `bannerbear-cli create-workflow` | Explicit confirmation required |
| `update_workflow` | `bannerbear-cli update-workflow` | Explicit confirmation required |
| `delete_workflow` | `bannerbear-cli delete-workflow` | Explicit confirmation required |
| `get_workflow` | `bannerbear-cli get-workflow` | Read / local helper |
| `list_workflow_runs` | `bannerbear-cli list-workflow-runs` | Read / local helper |
| `run_workflow` | `bannerbear-cli run-workflow` | Explicit confirmation required |
| `get_workflow_run` | `bannerbear-cli get-workflow-run` | Read / local helper |
| `list_accounts` | `bannerbear-cli list-accounts` | Read / local helper |
| `get_operation_schema` | `bannerbear-cli get-operation-schema` | Read / local helper |
| `get_layer_schema` | `bannerbear-cli get-layer-schema` | Read / local helper |
| `preview_operation` | `bannerbear-cli preview-operation` | Read / local helper |
| `query_pages` | `bannerbear-cli query-pages` | Read / local helper |
| `poll_job` | `bannerbear-cli poll-job` | Read / local helper |
| `preview_render_batch` | `bannerbear-cli preview-render-batch` | Read / local helper |
| `apply_render_batch` | `bannerbear-cli apply-render-batch` | Explicit confirmation required |

#### get_account

`bannerbear-cli get-account`

GET /v5/account. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/account`. No JSON request body.

#### list_image_templates

`bannerbear-cli list-image-templates`

GET /v5/image_templates. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/image_templates`. No JSON request body.

#### create_image_template

`bannerbear-cli create-image-template`

POST /v5/image_templates. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/image_templates`. Native JSON body is required via payload/payload_file.

#### get_image_template

`bannerbear-cli get-image-template`

GET /v5/image_templates/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/image_templates/{uid}`. No JSON request body.

#### update_image_template

`bannerbear-cli update-image-template`

PATCH /v5/image_templates/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `PATCH /v5/image_templates/{uid}`. Native JSON body is required via payload/payload_file.

#### delete_image_template

`bannerbear-cli delete-image-template`

DELETE /v5/image_templates/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |

Native operation: `DELETE /v5/image_templates/{uid}`. No JSON request body.

#### list_images

`bannerbear-cli list-images`

GET /v5/images. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/images`. No JSON request body.

#### create_image

`bannerbear-cli create-image`

POST /v5/images. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | ImageCreateRequest | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/images`. Native JSON body is required via payload/payload_file.

#### get_image

`bannerbear-cli get-image`

GET /v5/images/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/images/{uid}`. No JSON request body.

#### list_batches

`bannerbear-cli list-batches`

GET /v5/batches. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/batches`. No JSON request body.

#### create_batch

`bannerbear-cli create-batch`

POST /v5/batches. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/batches`. Native JSON body is required via payload/payload_file.

#### get_batch

`bannerbear-cli get-batch`

GET /v5/batches/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/batches/{uid}`. No JSON request body.

#### list_webhooks

`bannerbear-cli list-webhooks`

GET /v5/webhooks. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/webhooks`. No JSON request body.

#### create_webhook

`bannerbear-cli create-webhook`

POST /v5/webhooks. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |
| `secret_result_file` | Yes | string | New absolute JSON file in an existing private directory; exclusive 0600 creation before the API request. No overwrite; signing key never appears in output. minLength: `1`. |

Native operation: `POST /v5/webhooks`. Native JSON body is required via payload/payload_file.

#### get_webhook

`bannerbear-cli get-webhook`

GET /v5/webhooks/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/webhooks/{uid}`. No JSON request body.

#### update_webhook

`bannerbear-cli update-webhook`

PATCH /v5/webhooks/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `PATCH /v5/webhooks/{uid}`. Native JSON body is required via payload/payload_file.

#### delete_webhook

`bannerbear-cli delete-webhook`

DELETE /v5/webhooks/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |

Native operation: `DELETE /v5/webhooks/{uid}`. No JSON request body.

#### list_assets

`bannerbear-cli list-assets`

GET /v5/assets. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/assets`. No JSON request body.

#### upload_asset

`bannerbear-cli upload-asset`

POST /v5/assets. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `asset_file` | Yes | string | Regular non-symlink local file, at most 5,000,000 bytes. Uploaded only after confirmation. minLength: `1`. |
| `content_type` | Yes | string | Exact documented Content-Type for these raw file bytes. Values: `image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/svg+xml`, `video/mp4`, `video/webm`, `video/quicktime`, `audio/mpeg`, `audio/wav`, `audio/mp4`, `audio/webm`, `audio/ogg`, `application/pdf`, `application/json`. |

Native operation: `POST /v5/assets`. Raw local bytes required.

#### get_asset

`bannerbear-cli get-asset`

GET /v5/assets/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/assets/{uid}`. No JSON request body.

#### check_assets

`bannerbear-cli check-assets`

POST /v5/assets/check. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/assets/check`. Native JSON body is required via payload/payload_file.

#### list_publications

`bannerbear-cli list-publications`

GET /v5/publications. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `kind` | No; body and guard rules apply | string | See the full input schema. Values: `image`, `animation`, `workflow`. |
| `category` | No; body and guard rules apply | string | See the full input schema. Values: `announcements & news`, `beauty & fashion`, `business & finance`, `education & coaching`, `employee highlights`, `events & weddings`, `film & movies`, `food & drinks`, `gaming & e-sports`, `home & real estate`, `marketing & sales`, `motivational quotes`, `podcasts & publishing`, `product showcase`, `reviews & testimonials`, `social media`, `tech & crypto`, `travel & nature`. |
| `q` | No; body and guard rules apply | string | See the full input schema. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/publications`. No JSON request body.

#### get_publication

`bannerbear-cli get-publication`

GET /v5/publications/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/publications/{uid}`. No JSON request body.

#### install_publication

`bannerbear-cli install-publication`

POST /v5/publications/{uid}/install. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |

Native operation: `POST /v5/publications/{uid}/install`. No JSON request body.

#### list_instant_urls

`bannerbear-cli list-instant-urls`

GET /v5/instant_urls. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/instant_urls`. No JSON request body.

#### create_instant_url

`bannerbear-cli create-instant-url`

POST /v5/instant_urls. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |
| `secret_result_file` | Yes | string | New absolute JSON file in an existing private directory; exclusive 0600 creation before the API request. No overwrite; signing key never appears in output. minLength: `1`. |

Native operation: `POST /v5/instant_urls`. Native JSON body is required via payload/payload_file.

#### get_instant_url

`bannerbear-cli get-instant-url`

GET /v5/instant_urls/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/instant_urls/{uid}`. No JSON request body.

#### update_instant_url

`bannerbear-cli update-instant-url`

PATCH /v5/instant_urls/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `PATCH /v5/instant_urls/{uid}`. Native JSON body is required via payload/payload_file.

#### delete_instant_url

`bannerbear-cli delete-instant-url`

DELETE /v5/instant_urls/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |

Native operation: `DELETE /v5/instant_urls/{uid}`. No JSON request body.

#### list_animations

`bannerbear-cli list-animations`

GET /v5/animations. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/animations`. No JSON request body.

#### create_animation

`bannerbear-cli create-animation`

POST /v5/animations. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/animations`. Native JSON body is required via payload/payload_file.

#### get_animation

`bannerbear-cli get-animation`

GET /v5/animations/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/animations/{uid}`. No JSON request body.

#### list_animation_templates

`bannerbear-cli list-animation-templates`

GET /v5/animation_templates. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/animation_templates`. No JSON request body.

#### create_animation_template

`bannerbear-cli create-animation-template`

POST /v5/animation_templates. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/animation_templates`. Native JSON body is required via payload/payload_file.

#### get_animation_template

`bannerbear-cli get-animation-template`

GET /v5/animation_templates/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/animation_templates/{uid}`. No JSON request body.

#### update_animation_template

`bannerbear-cli update-animation-template`

PATCH /v5/animation_templates/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `PATCH /v5/animation_templates/{uid}`. Native JSON body is required via payload/payload_file.

#### delete_animation_template

`bannerbear-cli delete-animation-template`

DELETE /v5/animation_templates/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |

Native operation: `DELETE /v5/animation_templates/{uid}`. No JSON request body.

#### animate_template

`bannerbear-cli animate-template`

POST /v5/animation_templates/{uid}/animate. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/animation_templates/{uid}/animate`. Native JSON body is required via payload/payload_file.

#### remove_bg

`bannerbear-cli remove-bg`

POST /v5/tools/remove_bg. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/remove_bg`. Native JSON body is required via payload/payload_file.

#### generate_ai_image

`bannerbear-cli generate-ai-image`

POST /v5/tools/generate_ai_image. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/generate_ai_image`. Native JSON body is required via payload/payload_file.

#### generate_ai_video

`bannerbear-cli generate-ai-video`

POST /v5/tools/generate_ai_video. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/generate_ai_video`. Native JSON body is required via payload/payload_file.

#### video_thumbnails

`bannerbear-cli video-thumbnails`

POST /v5/tools/video_thumbnails. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/video_thumbnails`. Native JSON body is required via payload/payload_file.

#### subtitle_video

`bannerbear-cli subtitle-video`

POST /v5/tools/subtitle_video. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/subtitle_video`. Native JSON body is required via payload/payload_file.

#### generate_voiceover

`bannerbear-cli generate-voiceover`

POST /v5/tools/generate_voiceover. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/generate_voiceover`. Native JSON body is required via payload/payload_file.

#### create_pdf

`bannerbear-cli create-pdf`

POST /v5/tools/create_pdf. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/create_pdf`. Native JSON body is required via payload/payload_file.

#### trim_video

`bannerbear-cli trim-video`

POST /v5/tools/trim_video. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/trim_video`. Native JSON body is required via payload/payload_file.

#### concat_videos

`bannerbear-cli concat-videos`

POST /v5/tools/concat_videos. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/concat_videos`. Native JSON body is required via payload/payload_file.

#### resize_video

`bannerbear-cli resize-video`

POST /v5/tools/resize_video. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/resize_video`. Native JSON body is required via payload/payload_file.

#### crop_video

`bannerbear-cli crop-video`

POST /v5/tools/crop_video. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/crop_video`. Native JSON body is required via payload/payload_file.

#### overlay_video

`bannerbear-cli overlay-video`

POST /v5/tools/overlay_video. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/overlay_video`. Native JSON body is required via payload/payload_file.

#### overlay_image

`bannerbear-cli overlay-image`

POST /v5/tools/overlay_image. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/overlay_image`. Native JSON body is required via payload/payload_file.

#### add_audio

`bannerbear-cli add-audio`

POST /v5/tools/add_audio. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/add_audio`. Native JSON body is required via payload/payload_file.

#### add_cover_art

`bannerbear-cli add-cover-art`

POST /v5/tools/add_cover_art. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/add_cover_art`. Native JSON body is required via payload/payload_file.

#### create_video_slideshow

`bannerbear-cli create-video-slideshow`

POST /v5/tools/create_video_slideshow. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/create_video_slideshow`. Native JSON body is required via payload/payload_file.

#### apply_color_filter

`bannerbear-cli apply-color-filter`

POST /v5/tools/apply_color_filter. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/apply_color_filter`. Native JSON body is required via payload/payload_file.

#### soften_video

`bannerbear-cli soften-video`

POST /v5/tools/soften_video. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/soften_video`. Native JSON body is required via payload/payload_file.

#### create_gif_preview

`bannerbear-cli create-gif-preview`

POST /v5/tools/create_gif_preview. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/tools/create_gif_preview`. Native JSON body is required via payload/payload_file.

#### list_tool_jobs

`bannerbear-cli list-tool-jobs`

GET /v5/tool_jobs. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/tool_jobs`. No JSON request body.

#### get_tool_job

`bannerbear-cli get-tool-job`

GET /v5/tool_jobs/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/tool_jobs/{uid}`. No JSON request body.

#### list_workflows

`bannerbear-cli list-workflows`

GET /v5/workflows. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/workflows`. No JSON request body.

#### create_workflow

`bannerbear-cli create-workflow`

POST /v5/workflows. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/workflows`. Native JSON body is required via payload/payload_file.

#### update_workflow

`bannerbear-cli update-workflow`

PATCH /v5/workflows/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `PATCH /v5/workflows/{uid}`. Native JSON body is required via payload/payload_file.

#### delete_workflow

`bannerbear-cli delete-workflow`

DELETE /v5/workflows/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |

Native operation: `DELETE /v5/workflows/{uid}`. No JSON request body.

#### get_workflow

`bannerbear-cli get-workflow`

GET /v5/workflows/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/workflows/{uid}`. No JSON request body.

#### list_workflow_runs

`bannerbear-cli list-workflow-runs`

GET /v5/workflow_runs. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/workflow_runs`. No JSON request body.

#### run_workflow

`bannerbear-cli run-workflow`

POST /v5/workflow_runs. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Mandatory confirmation before provider execution; one submission only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

Native operation: `POST /v5/workflow_runs`. Native JSON body is required via payload/payload_file.

#### get_workflow_run

`bannerbear-cli get-workflow-run`

GET /v5/workflow_runs/{uid}. Current Bannerbear V5 operation; provider scopes, locks and credits apply. Read operation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

Native operation: `GET /v5/workflow_runs/{uid}`. No JSON request body.

#### list_accounts

`bannerbear-cli list-accounts`

Local profile labels, default and auth method only; no keys, paths or provider identity. No network.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| None | No | None | No arguments |

#### get_operation_schema

`bannerbear-cli get-operation-schema`

Return the complete current path/query/body schema for a selected operation. Local only.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | See the full input schema. Values: `get_account`, `list_image_templates`, `create_image_template`, `get_image_template`, `update_image_template`, `delete_image_template`, `list_images`, `create_image`, `get_image`, `list_batches`, `create_batch`, `get_batch`, `list_webhooks`, `create_webhook`, `get_webhook`, `update_webhook`, `delete_webhook`, `list_assets`, `upload_asset`, `get_asset`, `check_assets`, `list_publications`, `get_publication`, `install_publication`, `list_instant_urls`, `create_instant_url`, `get_instant_url`, `update_instant_url`, `delete_instant_url`, `list_animations`, `create_animation`, `get_animation`, `list_animation_templates`, `create_animation_template`, `get_animation_template`, `update_animation_template`, `delete_animation_template`, `animate_template`, `remove_bg`, `generate_ai_image`, `generate_ai_video`, `video_thumbnails`, `subtitle_video`, `generate_voiceover`, `create_pdf`, `trim_video`, `concat_videos`, `resize_video`, `crop_video`, `overlay_video`, `overlay_image`, `add_audio`, `add_cover_art`, `create_video_slideshow`, `apply_color_filter`, `soften_video`, `create_gif_preview`, `list_tool_jobs`, `get_tool_job`, `list_workflows`, `create_workflow`, `update_workflow`, `delete_workflow`, `get_workflow`, `list_workflow_runs`, `run_workflow`, `get_workflow_run`. |

#### get_layer_schema

`bannerbear-cli get-layer-schema`

Return a complete selected native layer or animation keyframe schema from the pinned V5 definitions. No network.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `layer` | Yes | string | See the full input schema. Values: `Layer`, `LayerSvgShape`, `LayerBarCode`, `LayerLottie`, `LayerQrCode`, `LayerAnimatedBackground`, `LayerCircle`, `LayerCircleImageContainer`, `LayerImage`, `LayerRectangleImageContainer`, `LayerGroup`, `LayerText`, `LayerRating`, `LayerRectangle`, `LayerAudioWave`, `Keyframes`. |

#### preview_operation

`bannerbear-cli preview-operation`

Validate and preview an exact local named request. No authentication, provider validation or quota estimate. Raw asset previews reveal only byte count/hash.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | See the full input schema. Values: `get_account`, `list_image_templates`, `create_image_template`, `get_image_template`, `update_image_template`, `delete_image_template`, `list_images`, `create_image`, `get_image`, `list_batches`, `create_batch`, `get_batch`, `list_webhooks`, `create_webhook`, `get_webhook`, `update_webhook`, `delete_webhook`, `list_assets`, `upload_asset`, `get_asset`, `check_assets`, `list_publications`, `get_publication`, `install_publication`, `list_instant_urls`, `create_instant_url`, `get_instant_url`, `update_instant_url`, `delete_instant_url`, `list_animations`, `create_animation`, `get_animation`, `list_animation_templates`, `create_animation_template`, `get_animation_template`, `update_animation_template`, `delete_animation_template`, `animate_template`, `remove_bg`, `generate_ai_image`, `generate_ai_video`, `video_thumbnails`, `subtitle_video`, `generate_voiceover`, `create_pdf`, `trim_video`, `concat_videos`, `resize_video`, `crop_video`, `overlay_video`, `overlay_image`, `add_audio`, `add_cover_art`, `create_video_slideshow`, `apply_color_filter`, `soften_video`, `create_gif_preview`, `list_tool_jobs`, `get_tool_job`, `list_workflows`, `create_workflow`, `update_workflow`, `delete_workflow`, `get_workflow`, `list_workflow_runs`, `run_workflow`, `get_workflow_run`. |
| `arguments` | Yes | object | See the full input schema. |

#### query_pages

`bannerbear-cli query-pages`

Read 1–5 pages of a selected native paginated read. Stop at an empty page; report a resume page at the cap. No completeness assumption from a short page.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | See the full input schema. Values: `list_image_templates`, `list_images`, `list_batches`, `list_webhooks`, `list_assets`, `list_publications`, `list_instant_urls`, `list_animations`, `list_animation_templates`, `list_tool_jobs`, `list_workflows`, `list_workflow_runs`. |
| `arguments` | Yes | object | See the full input schema. |
| `max_pages` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `5`. default: `1`. |

#### poll_job

`bannerbear-cli poll-job`

Read only an existing image, animation, batch, tool job or workflow run. At most 20 GETs, no create/resubmit. Completed/failed terminal states stop; missing/unrecognised state stops as unknown.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `resource` | Yes | string | See the full input schema. Values: `images`, `animations`, `batches`, `tool_jobs`, `workflow_runs`. |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | See the full input schema. |
| `max_polls` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `20`. default: `3`. |
| `interval_ms` | No; body and guard rules apply | integer | See the full input schema. minimum: `100`. maximum: `5000`. default: `1000`. |

#### preview_render_batch

`bannerbear-cli preview-render-batch`

Local schema-validated 1–100 native image payload review. Digest binds exact order, method/path, profile label and body. No provider state or price validation.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `payload` | No; body and guard rules apply | object | See the full input schema. |
| `payload_file` | No; body and guard rules apply | string | See the full input schema. minLength: `1`. |
| `account` | No; body and guard rules apply | string | See the full input schema. |

#### apply_render_batch

`bannerbear-cli apply-render-batch`

Validate the same reviewed digest plus explicit confirmation, then submit one native batch. Direct create_batch also needs confirmation but does not require a digest. No retry.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `payload` | No; body and guard rules apply | object | See the full input schema. |
| `payload_file` | No; body and guard rules apply | string | See the full input schema. minLength: `1`. |
| `account` | No; body and guard rules apply | string | See the full input schema. |
| `preview_sha256` | Yes | string | See the full input schema. pattern: `^[0-9a-f]{64}$`. |
| `confirm` | No; body and guard rules apply | boolean | See the full input schema. |

### Nested native input definitions

Identical object shapes appear once. Complete union/reference validation remains available through schema COMMAND and get_operation_schema. Root/native declared objects reject unknown keys. Dynamic workflow inputs and keyframe maps retain their documented open structure. Provider validation, ownership locks and credit decisions still apply.

##### get_account

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

##### list_image_templates

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

##### create_image_template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_image_template.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | See the full input schema. |
| `description` | No; body and guard rules apply | string/null | See the full input schema. |
| `tags` | No; body and guard rules apply | array | See the full input schema. Items: string. |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `height` | No; body and guard rules apply | integer | See the full input schema. |
| `config` | No; body and guard rules apply | object | See the full input schema. |

##### create_image_template.payload.config

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `objects` | No; body and guard rules apply | array | See the full input schema. Items: Layer. |

##### get_image_template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

##### update_image_template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### update_image_template.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `description` | No; body and guard rules apply | string/null | See the full input schema. |
| `tags` | No; body and guard rules apply | array | See the full input schema. Items: string. |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `height` | No; body and guard rules apply | integer | See the full input schema. |
| `config` | No; body and guard rules apply | object | See the full input schema. |

##### delete_image_template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |

##### create_image

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | ImageCreateRequest | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_batch

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_batch.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | See the full input schema. Values: `images`. |
| `items` | Yes | array | See the full input schema. minItems: `1`. maxItems: `100`. Items: ImageCreateRequest. |

##### create_webhook

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |
| `secret_result_file` | Yes | string | New absolute JSON file in an existing private directory; exclusive 0600 creation before the API request. No overwrite; signing key never appears in output. minLength: `1`. |

##### create_webhook.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | See the full input schema. |
| `url` | Yes | string | See the full input schema. format: `uri`. |
| `resource` | No; body and guard rules apply | string | See the full input schema. Values: `image`, `batch`, `tool_job`, `workflow_run`, `animation`. |
| `event` | No; body and guard rules apply | string | See the full input schema. Values: `all_events`, `completed`, `failed`. |
| `status` | No; body and guard rules apply | string | See the full input schema. Values: `active`, `disabled`. |

##### update_webhook

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### upload_asset

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `asset_file` | Yes | string | Regular non-symlink local file, at most 5,000,000 bytes. Uploaded only after confirmation. minLength: `1`. |
| `content_type` | Yes | string | Exact documented Content-Type for these raw file bytes. Values: `image/jpeg`, `image/png`, `image/webp`, `image/gif`, `image/svg+xml`, `video/mp4`, `video/webm`, `video/quicktime`, `audio/mpeg`, `audio/wav`, `audio/mp4`, `audio/webm`, `audio/ogg`, `application/pdf`, `application/json`. |

##### check_assets

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### check_assets.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `content_hashes` | Yes | array | See the full input schema. maxItems: `100`. Items: string. |

##### list_publications

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `page` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `1000000`. |
| `kind` | No; body and guard rules apply | string | See the full input schema. Values: `image`, `animation`, `workflow`. |
| `category` | No; body and guard rules apply | string | See the full input schema. Values: `announcements & news`, `beauty & fashion`, `business & finance`, `education & coaching`, `employee highlights`, `events & weddings`, `film & movies`, `food & drinks`, `gaming & e-sports`, `home & real estate`, `marketing & sales`, `motivational quotes`, `podcasts & publishing`, `product showcase`, `reviews & testimonials`, `social media`, `tech & crypto`, `travel & nature`. |
| `q` | No; body and guard rules apply | string | See the full input schema. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |

##### create_instant_url

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |
| `secret_result_file` | Yes | string | New absolute JSON file in an existing private directory; exclusive 0600 creation before the API request. No overwrite; signing key never appears in output. minLength: `1`. |

##### create_instant_url.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | See the full input schema. |
| `template` | Yes | string | See the full input schema. |
| `mode` | No; body and guard rules apply | string | See the full input schema. Values: `encoded`, `named_params`. |
| `security` | No; body and guard rules apply | string | See the full input schema. Values: `signed`, `open`. |
| `status` | No; body and guard rules apply | string | See the full input schema. Values: `active`, `disabled`. |
| `scale` | No; body and guard rules apply | integer | See the full input schema. Values: `1`, `2`, `3`, `4`. |
| `rate_limit` | No; body and guard rules apply | boolean | See the full input schema. |
| `template_version` | No; body and guard rules apply | integer/null | See the full input schema. |
| `max_renders` | No; body and guard rules apply | integer/null | See the full input schema. |
| `expires_at` | No; body and guard rules apply | string/null | See the full input schema. format: `date-time`. |

##### update_instant_url

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_animation

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_animation.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `template` | Yes | string | See the full input schema. |
| `formats` | No; body and guard rules apply | array | See the full input schema. default: `['mp4']`. Items: string. |
| `modifications` | Yes | object | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### create_animation.payload.modifications

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `objects` | No; body and guard rules apply | array | See the full input schema. Items: Layer. |
| `template` | No; body and guard rules apply | object | See the full input schema. |

##### create_animation.payload.modifications.template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `height` | No; body and guard rules apply | integer | See the full input schema. |
| `fps` | No; body and guard rules apply | integer | See the full input schema. Values: `24`, `30`, `60`. |
| `transparent` | No; body and guard rules apply | boolean | See the full input schema. |

##### create_animation_template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_animation_template.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | See the full input schema. |
| `description` | No; body and guard rules apply | string/null | See the full input schema. |
| `tags` | No; body and guard rules apply | array | See the full input schema. Items: string. |
| `width` | No; body and guard rules apply | integer | See the full input schema. minimum: `100`. maximum: `5000`. |
| `height` | No; body and guard rules apply | integer | See the full input schema. minimum: `100`. maximum: `5000`. |
| `frame_rate` | No; body and guard rules apply | integer | See the full input schema. Values: `24`, `30`, `60`. |
| `config` | No; body and guard rules apply | object | See the full input schema. |

##### create_animation_template.payload.config

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `objects` | No; body and guard rules apply | array | See the full input schema. Items: Layer. |
| `keyframes` | No; body and guard rules apply | Keyframes | See the full input schema. |

##### update_animation_template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### update_animation_template.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `description` | No; body and guard rules apply | string/null | See the full input schema. |
| `tags` | No; body and guard rules apply | array | See the full input schema. Items: string. |
| `width` | No; body and guard rules apply | integer | See the full input schema. minimum: `100`. maximum: `5000`. |
| `height` | No; body and guard rules apply | integer | See the full input schema. minimum: `100`. maximum: `5000`. |
| `frame_rate` | No; body and guard rules apply | integer | See the full input schema. Values: `24`, `30`, `60`. |
| `config` | No; body and guard rules apply | object | See the full input schema. |

##### animate_template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### animate_template.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `preset` | Yes | string | See the full input schema. Values: `FadeIn`, `FadeOut`, `ZoomIn`, `ZoomOut`, `GetBigger`, `GetSmaller`, `ScaleIn`, `ScaleOut`, `PopIn`, `PopOut`. |
| `objects` | No; body and guard rules apply | array | See the full input schema. Items: string. |
| `duration` | No; body and guard rules apply | integer | See the full input schema. default: `400`. |
| `stagger` | No; body and guard rules apply | integer | See the full input schema. default: `0`. |
| `easing` | No; body and guard rules apply | string | See the full input schema. |
| `merge` | No; body and guard rules apply | boolean | See the full input schema. default: `False`. |

##### remove_bg

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### remove_bg.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `image_url` | Yes | string | See the full input schema. format: `uri`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### generate_ai_image

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### generate_ai_image.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `prompt` | Yes | string | See the full input schema. |
| `model` | Yes | string | See the full input schema. Values: `flux_schnell`, `flux_1_1_pro`, `nano_banana`, `gpt_image_2`. default: `flux_schnell`. |
| `aspect_ratio` | No; body and guard rules apply | string | See the full input schema. Values: `1:1`, `16:9`, `9:16`, `4:3`, `3:4`. default: `1:1`. |
| `reference_image_url` | No; body and guard rules apply | string | See the full input schema. format: `uri`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### generate_ai_video

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### generate_ai_video.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `prompt` | Yes | string | See the full input schema. |
| `model` | Yes | string | See the full input schema. Values: `seedance_1_lite`, `seedance_2`, `kling_2_5_turbo_pro`, `veo_3_1_fast`. default: `seedance_1_lite`. |
| `duration` | No; body and guard rules apply | integer | See the full input schema. Values: `4`, `5`, `6`, `8`, `10`. default: `5`. |
| `resolution` | No; body and guard rules apply | string | See the full input schema. Values: `480p`, `720p`, `1080p`. default: `720p`. |
| `aspect_ratio` | No; body and guard rules apply | string | See the full input schema. Values: `16:9`, `9:16`, `1:1`, `4:3`, `3:4`. default: `16:9`. |
| `image_url` | No; body and guard rules apply | string | See the full input schema. format: `uri`. |
| `audio` | No; body and guard rules apply | string | See the full input schema. Values: `on`, `off`. default: `on`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### video_thumbnails

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### video_thumbnails.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `count` | No; body and guard rules apply | integer | See the full input schema. default: `3`. |
| `interval` | No; body and guard rules apply | number | See the full input schema. default: `1`. |
| `start` | No; body and guard rules apply | number | See the full input schema. default: `0`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### subtitle_video

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### subtitle_video.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `language` | No; body and guard rules apply | string | See the full input schema. Values: ``, `en`, `es`, `fr`, `de`, `it`, `pt`, `nl`, `ru`, `pl`, `tr`, `ar`, `hi`, `zh`, `ja`, `ko`, `id`, `vi`, `th`. |
| `words_per_segment` | No; body and guard rules apply | integer/null | See the full input schema. Values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`. |
| `font` | No; body and guard rules apply | string | See the full input schema. Values: `inter`, `roboto`, `open-sans`, `noto-sans`, `montserrat`, `poppins`, `bebas-neue`, `anton`, `oswald`, `playfair-display`. default: `inter`. |
| `font_size` | No; body and guard rules apply | integer | See the full input schema. |
| `color` | No; body and guard rules apply | string | See the full input schema. default: `#ffffff`. |
| `bold` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `on`. |
| `italic` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `on`. |
| `alignment` | No; body and guard rules apply | string | See the full input schema. Values: `2`, `1`, `3`, `5`, `4`, `6`, `8`, `7`, `9`. |
| `outline_width` | No; body and guard rules apply | integer | See the full input schema. default: `0`. |
| `outline_color` | No; body and guard rules apply | string | See the full input schema. default: `#000000`. |
| `shadow_size` | No; body and guard rules apply | integer | See the full input schema. default: `0`. |
| `shadow_color` | No; body and guard rules apply | string | See the full input schema. default: `#000000`. |
| `background_style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `box`. default: `none`. |
| `background_color` | No; body and guard rules apply | string | See the full input schema. |
| `background_opacity` | No; body and guard rules apply | integer | See the full input schema. default: `100`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### generate_voiceover

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### generate_voiceover.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `text` | Yes | string | See the full input schema. |
| `voice` | Yes | string | See the full input schema. Values: `rachel`, `adam`, `antoni`, `bella`, `domi`, `elli`, `josh`, `arnold`, `charlie`, `freya`. default: `rachel`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### create_pdf

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_pdf.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `urls` | Yes | array | See the full input schema. Items: string. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### trim_video

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### trim_video.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `start` | Yes | number | See the full input schema. |
| `end` | Yes | number | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### concat_videos

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### concat_videos.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_urls` | Yes | array | See the full input schema. Items: string. |
| `transition` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `fade`, `dissolve`, `wipeleft`, `slideleft`. |
| `transition_duration` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `height` | No; body and guard rules apply | integer | See the full input schema. |
| `fps` | No; body and guard rules apply | integer | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### resize_video

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### resize_video.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `width` | Yes | integer | See the full input schema. |
| `height` | Yes | integer | See the full input schema. |
| `fit` | No; body and guard rules apply | string | See the full input schema. Values: `cover`, `contain`, `blur`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### crop_video

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### crop_video.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `x` | Yes | integer | See the full input schema. |
| `y` | Yes | integer | See the full input schema. |
| `width` | Yes | integer | See the full input schema. |
| `height` | Yes | integer | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### overlay_video

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### overlay_video.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `base_video_url` | Yes | string | See the full input schema. format: `uri`. |
| `overlay_video_url` | Yes | string | See the full input schema. format: `uri`. |
| `position` | No; body and guard rules apply | string | See the full input schema. Values: `top_left`, `top_center`, `top_right`, `center`, `bottom_left`, `bottom_center`, `bottom_right`. |
| `margin` | No; body and guard rules apply | integer | See the full input schema. |
| `x` | No; body and guard rules apply | integer | See the full input schema. |
| `y` | No; body and guard rules apply | integer | See the full input schema. |
| `scale` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `shape` | No; body and guard rules apply | string | See the full input schema. Values: `rectangle`, `circle`. default: `rectangle`. |
| `border_width` | No; body and guard rules apply | integer | See the full input schema. |
| `border_color` | No; body and guard rules apply | string | See the full input schema. default: `#ffffff`. |
| `shadow` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `on`. default: `off`. |
| `audio` | No; body and guard rules apply | string | See the full input schema. Values: `base`, `overlay`, `mix`. default: `base`. |
| `start` | No; body and guard rules apply | number | See the full input schema. |
| `when_finished` | No; body and guard rules apply | string | See the full input schema. Values: `freeze`, `hide`, `loop`. default: `freeze`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### overlay_image

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### overlay_image.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `image_url` | Yes | string | See the full input schema. format: `uri`. |
| `position` | No; body and guard rules apply | string | See the full input schema. Values: `top_left`, `top_center`, `top_right`, `center`, `bottom_left`, `bottom_center`, `bottom_right`. |
| `margin` | No; body and guard rules apply | integer | See the full input schema. |
| `x` | No; body and guard rules apply | integer | See the full input schema. |
| `y` | No; body and guard rules apply | integer | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### add_audio

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### add_audio.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `audio_url` | Yes | string | See the full input schema. format: `uri`. |
| `mode` | Yes | string | See the full input schema. Values: `mix`, `replace`. default: `mix`. |
| `volume` | No; body and guard rules apply | number | See the full input schema. default: `1`. |
| `loop` | No; body and guard rules apply | string | See the full input schema. Values: `on`, `off`. default: `on`. |
| `ducking` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `subtle`, `medium`, `heavy`. default: `off`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### add_cover_art

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### add_cover_art.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `image_url` | Yes | string | See the full input schema. format: `uri`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### create_video_slideshow

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_video_slideshow.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `image_urls` | Yes | array | See the full input schema. Items: string. |
| `slide_duration` | No; body and guard rules apply | number | See the full input schema. |
| `transition` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `fade`, `dissolve`, `wipeleft`, `slideleft`. |
| `transition_duration` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `height` | No; body and guard rules apply | integer | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### apply_color_filter

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### apply_color_filter.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `filter` | Yes | string | See the full input schema. Values: `black-and-white`, `sepia`, `invert`, `warm`, `cool`, `vivid`, `muted`, `dark-and-moody`, `faded`, `vintage`, `cross-process`, `teal-and-orange`, `bleach-bypass`. default: `vintage`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### soften_video

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### soften_video.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `strength` | Yes | string | See the full input schema. Values: `subtle`, `medium`, `strong`. default: `medium`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### create_gif_preview

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_gif_preview.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `video_url` | Yes | string | See the full input schema. format: `uri`. |
| `fps` | No; body and guard rules apply | integer | See the full input schema. |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `duration` | No; body and guard rules apply | number | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### create_workflow

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### create_workflow.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | See the full input schema. |
| `description` | No; body and guard rules apply | string/null | See the full input schema. |
| `tags` | No; body and guard rules apply | array | See the full input schema. Items: string. |
| `inputs` | No; body and guard rules apply | object | See the full input schema. |
| `steps` | No; body and guard rules apply | array | See the full input schema. Items: object. |

##### create_workflow.payload.inputs.*

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | No; body and guard rules apply | string | See the full input schema. Values: `string`, `url`, `number`, `boolean`. |
| `required` | No; body and guard rules apply | boolean | See the full input schema. |

##### create_workflow.payload.steps[]

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `key` | Yes | string | See the full input schema. pattern: `^[a-z0-9_]+$`. |
| `type` | Yes | string | See the full input schema. Values: `tool`, `image`, `animation`. |
| `ref` | Yes | string | See the full input schema. |
| `inputs` | No; body and guard rules apply | object | See the full input schema. |

##### update_workflow

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### update_workflow.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `description` | No; body and guard rules apply | string/null | See the full input schema. |
| `tags` | No; body and guard rules apply | array | See the full input schema. Items: string. |
| `inputs` | No; body and guard rules apply | object | See the full input schema. |
| `steps` | No; body and guard rules apply | array | See the full input schema. Items: object. |

##### run_workflow

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body and guard rules apply | string | Exact private workspace profile label; no fallback to another profile key. |
| `confirm` | No; body and guard rules apply | boolean | Must be true for this exact requested render, upload, edit, install or delete. |
| `payload` | No; body and guard rules apply | object | Complete current native JSON body. Use payload or payload_file exclusively. |
| `payload_file` | No; body and guard rules apply | string | Regular non-symlink local JSON file, at most 1 MiB. minLength: `1`. |

##### run_workflow.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `workflow` | Yes | string | See the full input schema. |
| `inputs` | No; body and guard rules apply | object | See the full input schema. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |

##### get_operation_schema

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | See the full input schema. Values: `get_account`, `list_image_templates`, `create_image_template`, `get_image_template`, `update_image_template`, `delete_image_template`, `list_images`, `create_image`, `get_image`, `list_batches`, `create_batch`, `get_batch`, `list_webhooks`, `create_webhook`, `get_webhook`, `update_webhook`, `delete_webhook`, `list_assets`, `upload_asset`, `get_asset`, `check_assets`, `list_publications`, `get_publication`, `install_publication`, `list_instant_urls`, `create_instant_url`, `get_instant_url`, `update_instant_url`, `delete_instant_url`, `list_animations`, `create_animation`, `get_animation`, `list_animation_templates`, `create_animation_template`, `get_animation_template`, `update_animation_template`, `delete_animation_template`, `animate_template`, `remove_bg`, `generate_ai_image`, `generate_ai_video`, `video_thumbnails`, `subtitle_video`, `generate_voiceover`, `create_pdf`, `trim_video`, `concat_videos`, `resize_video`, `crop_video`, `overlay_video`, `overlay_image`, `add_audio`, `add_cover_art`, `create_video_slideshow`, `apply_color_filter`, `soften_video`, `create_gif_preview`, `list_tool_jobs`, `get_tool_job`, `list_workflows`, `create_workflow`, `update_workflow`, `delete_workflow`, `get_workflow`, `list_workflow_runs`, `run_workflow`, `get_workflow_run`. |

##### get_layer_schema

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `layer` | Yes | string | See the full input schema. Values: `Layer`, `LayerSvgShape`, `LayerBarCode`, `LayerLottie`, `LayerQrCode`, `LayerAnimatedBackground`, `LayerCircle`, `LayerCircleImageContainer`, `LayerImage`, `LayerRectangleImageContainer`, `LayerGroup`, `LayerText`, `LayerRating`, `LayerRectangle`, `LayerAudioWave`, `Keyframes`. |

##### preview_operation

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | See the full input schema. Values: `get_account`, `list_image_templates`, `create_image_template`, `get_image_template`, `update_image_template`, `delete_image_template`, `list_images`, `create_image`, `get_image`, `list_batches`, `create_batch`, `get_batch`, `list_webhooks`, `create_webhook`, `get_webhook`, `update_webhook`, `delete_webhook`, `list_assets`, `upload_asset`, `get_asset`, `check_assets`, `list_publications`, `get_publication`, `install_publication`, `list_instant_urls`, `create_instant_url`, `get_instant_url`, `update_instant_url`, `delete_instant_url`, `list_animations`, `create_animation`, `get_animation`, `list_animation_templates`, `create_animation_template`, `get_animation_template`, `update_animation_template`, `delete_animation_template`, `animate_template`, `remove_bg`, `generate_ai_image`, `generate_ai_video`, `video_thumbnails`, `subtitle_video`, `generate_voiceover`, `create_pdf`, `trim_video`, `concat_videos`, `resize_video`, `crop_video`, `overlay_video`, `overlay_image`, `add_audio`, `add_cover_art`, `create_video_slideshow`, `apply_color_filter`, `soften_video`, `create_gif_preview`, `list_tool_jobs`, `get_tool_job`, `list_workflows`, `create_workflow`, `update_workflow`, `delete_workflow`, `get_workflow`, `list_workflow_runs`, `run_workflow`, `get_workflow_run`. |
| `arguments` | Yes | object | See the full input schema. |

##### query_pages

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | See the full input schema. Values: `list_image_templates`, `list_images`, `list_batches`, `list_webhooks`, `list_assets`, `list_publications`, `list_instant_urls`, `list_animations`, `list_animation_templates`, `list_tool_jobs`, `list_workflows`, `list_workflow_runs`. |
| `arguments` | Yes | object | See the full input schema. |
| `max_pages` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `5`. default: `1`. |

##### poll_job

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `resource` | Yes | string | See the full input schema. Values: `images`, `animations`, `batches`, `tool_jobs`, `workflow_runs`. |
| `uid` | Yes | string | See the full input schema. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9_-]+$`. |
| `account` | No; body and guard rules apply | string | See the full input schema. |
| `max_polls` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `20`. default: `3`. |
| `interval_ms` | No; body and guard rules apply | integer | See the full input schema. minimum: `100`. maximum: `5000`. default: `1000`. |

##### preview_render_batch

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `payload` | No; body and guard rules apply | object | See the full input schema. |
| `payload_file` | No; body and guard rules apply | string | See the full input schema. minLength: `1`. |
| `account` | No; body and guard rules apply | string | See the full input schema. |

##### preview_render_batch.payload

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `type` | Yes | string | See the full input schema. Values: `images`. |
| `items` | Yes | array | See the full input schema. minItems: `1`. maxItems: `100`. Items: ImageCreateRequest. |

##### apply_render_batch

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `payload` | No; body and guard rules apply | object | See the full input schema. |
| `payload_file` | No; body and guard rules apply | string | See the full input schema. minLength: `1`. |
| `account` | No; body and guard rules apply | string | See the full input schema. |
| `preview_sha256` | Yes | string | See the full input schema. pattern: `^[0-9a-f]{64}$`. |
| `confirm` | No; body and guard rules apply | boolean | See the full input schema. |

##### LayerSvgShape

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `svg_shape`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-color-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient-direction` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `right`, `top`, `bottom`. |
| `basic-shape` | No; body and guard rules apply | string | See the full input schema. Values: `triangle`, `scalene`, `pentagon`, `right`, `trapeze`, `kite`, `polygon`, `parallelogram`, `ellipse`, `trefoil`, `star`, `semicircle`, `hexagon`, `crescent`, `octagon`, `cross`, `ring`, `heart`, `arrow`, `rhombus`, `custom`. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `fill` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `stroke` | No; body and guard rules apply | string | See the full input schema. |
| `stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `svg-url` | No; body and guard rules apply | string | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerBarCode

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `bar_code`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `barcode-color` | No; body and guard rules apply | string | See the full input schema. |
| `barcode-data` | No; body and guard rules apply | string | See the full input schema. |
| `barcode-format` | No; body and guard rules apply | string | See the full input schema. Values: `CODE128`, `EAN13`, `UPC`, `EAN8`. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerLottie

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `lottie`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `aspect-ratio-locked` | No; body and guard rules apply | boolean | See the full input schema. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `lottie-delay` | No; body and guard rules apply | number | See the full input schema. |
| `lottie-loop` | No; body and guard rules apply | boolean | See the full input schema. |
| `lottie-url` | No; body and guard rules apply | string | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerQrCode

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `qr_code`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `qr-color` | No; body and guard rules apply | string | See the full input schema. |
| `qr-target` | No; body and guard rules apply | string | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerAnimatedBackground

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `animated_background`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `aspect-ratio-locked` | No; body and guard rules apply | boolean | See the full input schema. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-image` | No; body and guard rules apply | string | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `motion-blur` | No; body and guard rules apply | number | See the full input schema. |
| `motion-color` | No; body and guard rules apply | string | See the full input schema. |
| `motion-cycle` | No; body and guard rules apply | number | See the full input schema. |
| `motion-hue` | No; body and guard rules apply | number | See the full input schema. |
| `motion-preset` | No; body and guard rules apply | string | See the full input schema. Values: `aurora`, `mesh`, `conic`, `pulse`. |
| `motion-spread` | No; body and guard rules apply | number | See the full input schema. |
| `motion-travel` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerCircle

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `circle`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `aspect-ratio-locked` | No; body and guard rules apply | boolean | See the full input schema. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-color-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient-direction` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `right`, `top`, `bottom`. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerCircleImageContainer

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `circle_image_container`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `ai-background-generate` | No; body and guard rules apply | string | See the full input schema. Values: `disabled`, `enabled`. |
| `ai-background-remove` | No; body and guard rules apply | string | See the full input schema. Values: `disabled`, `enabled`. |
| `ai-detect` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `face`, `subject`. |
| `ai-detect-anchor` | No; body and guard rules apply | string | See the full input schema. |
| `ai-detect-focus` | No; body and guard rules apply | string | See the full input schema. Values: `first`, `largest`, `group`. |
| `ai-detect-on-fail` | No; body and guard rules apply | string | See the full input schema. Values: `fallback_cover`, `fallback_contain`. |
| `ai-detect-zoom` | No; body and guard rules apply | string | See the full input schema. Values: `auto`, `50%`, `60%`, `70%`, `80%`, `90%`. |
| `ai-model` | No; body and guard rules apply | string | See the full input schema. Values: `flux_schnell`, `flux_1_1_pro`, `nano_banana`, `gpt_image_2`. |
| `ai-prompt` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `aspect-ratio-locked` | No; body and guard rules apply | boolean | See the full input schema. |
| `background-blend-mode` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-color-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-crop` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient-direction` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `right`, `top`, `bottom`. |
| `background-image` | No; body and guard rules apply | string | See the full input schema. |
| `background-position` | No; body and guard rules apply | string | See the full input schema. Values: `center`, `top`, `right`, `bottom`, `left`, `top left`, `top right`, `bottom left`, `bottom right`. |
| `background-size` | No; body and guard rules apply | string | See the full input schema. Values: `cover`, `contain`. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `brightness` | No; body and guard rules apply | number | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `contrast` | No; body and guard rules apply | number | See the full input schema. |
| `grayscale` | No; body and guard rules apply | number | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `png-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `png-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `png-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `saturate` | No; body and guard rules apply | number | See the full input schema. |
| `sepia` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerImage

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `image`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `aspect-ratio-locked` | No; body and guard rules apply | boolean | See the full input schema. |
| `background-blend-mode` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-crop` | No; body and guard rules apply | string | See the full input schema. |
| `background-image` | No; body and guard rules apply | string | See the full input schema. |
| `background-size` | No; body and guard rules apply | string | See the full input schema. Values: `cover`, `contain`. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `brightness` | No; body and guard rules apply | number | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `contrast` | No; body and guard rules apply | number | See the full input schema. |
| `grayscale` | No; body and guard rules apply | number | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `png-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `png-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `png-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `saturate` | No; body and guard rules apply | number | See the full input schema. |
| `sepia` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerRectangleImageContainer

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `rectangle_image_container`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `ai-background-generate` | No; body and guard rules apply | string | See the full input schema. Values: `disabled`, `enabled`. |
| `ai-background-remove` | No; body and guard rules apply | string | See the full input schema. Values: `disabled`, `enabled`. |
| `ai-detect` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `face`, `subject`. |
| `ai-detect-anchor` | No; body and guard rules apply | string | See the full input schema. |
| `ai-detect-focus` | No; body and guard rules apply | string | See the full input schema. Values: `first`, `largest`, `group`. |
| `ai-detect-on-fail` | No; body and guard rules apply | string | See the full input schema. Values: `fallback_cover`, `fallback_contain`. |
| `ai-detect-zoom` | No; body and guard rules apply | string | See the full input schema. Values: `auto`, `50%`, `60%`, `70%`, `80%`, `90%`. |
| `ai-model` | No; body and guard rules apply | string | See the full input schema. Values: `flux_schnell`, `flux_1_1_pro`, `nano_banana`, `gpt_image_2`. |
| `ai-prompt` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-blend-mode` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-color-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-crop` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient-direction` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `right`, `top`, `bottom`. |
| `background-image` | No; body and guard rules apply | string | See the full input schema. |
| `background-position` | No; body and guard rules apply | string | See the full input schema. Values: `center`, `top`, `right`, `bottom`, `left`, `top left`, `top right`, `bottom left`, `bottom right`. |
| `background-size` | No; body and guard rules apply | string | See the full input schema. Values: `cover`, `contain`. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `brightness` | No; body and guard rules apply | number | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `contrast` | No; body and guard rules apply | number | See the full input schema. |
| `grayscale` | No; body and guard rules apply | number | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `png-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `png-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `png-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `saturate` | No; body and guard rules apply | number | See the full input schema. |
| `sepia` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerGroup

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `group`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `collapsed` | No; body and guard rules apply | boolean | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerText

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `text`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `align-items` | No; body and guard rules apply | string | See the full input schema. Values: `start`, `center`, `end`. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `color` | No; body and guard rules apply | string | See the full input schema. |
| `color-secondary` | No; body and guard rules apply | string | See the full input schema. |
| `direction` | No; body and guard rules apply | string | See the full input schema. Values: `ltr`, `rtl`. |
| `font-family` | No; body and guard rules apply | string | See the full input schema. |
| `font-family-secondary` | No; body and guard rules apply | string | See the full input schema. |
| `font-size` | No; body and guard rules apply | number | See the full input schema. |
| `font-style` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `italic`. |
| `font-style-secondary` | No; body and guard rules apply | string/null | See the full input schema. Values: `normal`, `italic`. |
| `font-weight` | No; body and guard rules apply | number | See the full input schema. Values: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`. |
| `font-weight-secondary` | No; body and guard rules apply | number/null | See the full input schema. Values: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `letter-spacing` | No; body and guard rules apply | number | See the full input schema. |
| `line-height` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `skewX` | No; body and guard rules apply | number | See the full input schema. |
| `skewY` | No; body and guard rules apply | number | See the full input schema. |
| `text` | No; body and guard rules apply | string | See the full input schema. |
| `text-align` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `center`, `right`, `justify`, `start`, `end`. |
| `text-background-image-mask` | No; body and guard rules apply | string | See the full input schema. |
| `text-decoration` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `underline`, `overline`. |
| `text-decoration-secondary` | No; body and guard rules apply | string/null | See the full input schema. Values: `none`, `underline`, `line-through`. |
| `text-ellipsis` | No; body and guard rules apply | boolean | See the full input schema. |
| `text-fit` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `auto_fit`, `resize_overflow`. |
| `text-highlight-border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `text-highlight-color` | No; body and guard rules apply | string | See the full input schema. |
| `text-highlight-padding-horizontal` | No; body and guard rules apply | number | See the full input schema. |
| `text-highlight-padding-vertical` | No; body and guard rules apply | number | See the full input schema. |
| `text-highlight-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `text-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `text-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `text-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `text-transform` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `uppercase`, `lowercase`, `capitalize`. |
| `text-transform-secondary` | No; body and guard rules apply | string/null | See the full input schema. Values: `none`, `uppercase`, `lowercase`, `capitalize`. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `white-space` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line`. |
| `width` | No; body and guard rules apply | number | See the full input schema. |
| `word-break` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `break-all`, `keep-all`, `break-word`. |

##### LayerRating

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `rating`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `rating-background-color` | No; body and guard rules apply | string | See the full input schema. |
| `rating-color` | No; body and guard rules apply | string | See the full input schema. |
| `rating-count` | No; body and guard rules apply | number | See the full input schema. |
| `rating-gap` | No; body and guard rules apply | number | See the full input schema. |
| `rating-score` | No; body and guard rules apply | number | See the full input schema. |
| `rating-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `rating-shape` | No; body and guard rules apply | string | See the full input schema. Values: `star`, `cute_star`, `heart`, `circle`, `diamond`, `square`, `hexagon`. |
| `rating-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `rating-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerRectangle

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `rectangle`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-color-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient-direction` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `right`, `top`, `bottom`. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### LayerAudioWave

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | string | See the full input schema. |
| `type` | Yes | string | See the full input schema. Values: `audio_wave`. |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-to` | No; body and guard rules apply | string | See the full input schema. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `aspect-ratio-locked` | No; body and guard rules apply | boolean | See the full input schema. |
| `audio-url` | No; body and guard rules apply | string | See the full input schema. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `background-image` | No; body and guard rules apply | string | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `clip-to` | No; body and guard rules apply | string | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `wave-bars` | No; body and guard rules apply | number | See the full input schema. |
| `wave-color` | No; body and guard rules apply | string | See the full input schema. |
| `wave-envelope` | No; body and guard rules apply | string | See the full input schema. |
| `wave-gap` | No; body and guard rules apply | number | See the full input schema. |
| `wave-min-height` | No; body and guard rules apply | number | See the full input schema. |
| `wave-mirror` | No; body and guard rules apply | boolean | See the full input schema. |
| `wave-offset` | No; body and guard rules apply | number | See the full input schema. |
| `wave-radius` | No; body and guard rules apply | number | See the full input schema. |
| `wave-sensitivity` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |

##### ImageCreateRequest

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `template` | Yes | string | See the full input schema. |
| `modifications` | Yes | object | See the full input schema. |
| `formats` | No; body and guard rules apply | array | See the full input schema. default: `['jpg']`. Items: string. |
| `scale` | No; body and guard rules apply | integer | See the full input schema. Values: `1`, `2`, `3`, `4`. default: `1`. |
| `dpi` | No; body and guard rules apply | integer | See the full input schema. minimum: `72`. maximum: `600`. |
| `quality` | No; body and guard rules apply | integer | See the full input schema. minimum: `1`. maximum: `100`. |
| `proxy` | No; body and guard rules apply | boolean | See the full input schema. default: `False`. |
| `metadata` | No; body and guard rules apply | string | See the full input schema. |
| `version` | No; body and guard rules apply | integer | See the full input schema. |

##### ImageCreateRequest.modifications

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `template` | No; body and guard rules apply | object | See the full input schema. |
| `objects` | No; body and guard rules apply | array | See the full input schema. Items: object. |

##### ImageCreateRequest.modifications.template

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `width` | No; body and guard rules apply | integer | See the full input schema. |
| `height` | No; body and guard rules apply | integer | See the full input schema. |
| `transparent` | No; body and guard rules apply | boolean | See the full input schema. |

##### ImageCreateRequest.modifications.objects[]

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body and guard rules apply | string | See the full input schema. |
| `id` | No; body and guard rules apply | string | See the full input schema. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. |
| `height` | No; body and guard rules apply | number | See the full input schema. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. |
| `hidden` | No; body and guard rules apply | boolean | See the full input schema. |
| `padding` | No; body and guard rules apply | number | See the full input schema. |
| `background-color` | No; body and guard rules apply | string | See the full input schema. |
| `box-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `border-style` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `solid`. |
| `border-color` | No; body and guard rules apply | string | See the full input schema. |
| `border-width` | No; body and guard rules apply | number | See the full input schema. |
| `clip-mode` | No; body and guard rules apply | string | See the full input schema. Values: `outline`, `alpha`. |
| `anchor-point` | No; body and guard rules apply | string | See the full input schema. Values: `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `anchor-type` | No; body and guard rules apply | string | See the full input schema. Values: `container`, `text`. |
| `anchor-gap-x` | No; body and guard rules apply | number | See the full input schema. |
| `anchor-gap-y` | No; body and guard rules apply | number | See the full input schema. |
| `responsive-position` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `center-x`, `center-y`, `center`, `pin-right`, `pin-bottom`, `pin-right-bottom`, `center-x-pin-bottom`, `center-y-pin-right`. |
| `responsive-size` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `stretch-x`, `stretch-y`, `stretch`. |
| `responsive-aspect-ratio` | No; body and guard rules apply | string | See the full input schema. Values: `free`, `locked`. |
| `responsive-anchor-gap` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `scale`, `scale-x`, `scale-y`, `stretch`, `stretch-x`, `stretch-y`. |
| `text` | No; body and guard rules apply | string | See the full input schema. |
| `color` | No; body and guard rules apply | string | See the full input schema. |
| `text-highlight-color` | No; body and guard rules apply | string | See the full input schema. |
| `text-highlight-padding-vertical` | No; body and guard rules apply | number | See the full input schema. |
| `text-highlight-padding-horizontal` | No; body and guard rules apply | number | See the full input schema. |
| `text-highlight-border-radius` | No; body and guard rules apply | number | See the full input schema. |
| `text-highlight-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `text-background-image-mask` | No; body and guard rules apply | string | See the full input schema. |
| `font-size` | No; body and guard rules apply | number | See the full input schema. |
| `font-weight` | No; body and guard rules apply | number | See the full input schema. Values: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`. |
| `font-style` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `italic`. |
| `line-height` | No; body and guard rules apply | number | See the full input schema. |
| `text-decoration` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `underline`, `overline`. |
| `text-transform` | No; body and guard rules apply | string | See the full input schema. Values: `none`, `uppercase`, `lowercase`, `capitalize`. |
| `text-align` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `center`, `right`, `justify`, `start`, `end`. |
| `align-items` | No; body and guard rules apply | string | See the full input schema. Values: `start`, `center`, `end`. |
| `direction` | No; body and guard rules apply | string | See the full input schema. Values: `ltr`, `rtl`. |
| `word-break` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `break-all`, `keep-all`, `break-word`. |
| `white-space` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line`. |
| `letter-spacing` | No; body and guard rules apply | number | See the full input schema. |
| `skewX` | No; body and guard rules apply | number | See the full input schema. |
| `skewY` | No; body and guard rules apply | number | See the full input schema. |
| `text-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `text-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `text-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `font-family-secondary` | No; body and guard rules apply | string | See the full input schema. |
| `color-secondary` | No; body and guard rules apply | string | See the full input schema. |
| `font-weight-secondary` | No; body and guard rules apply | number/null | See the full input schema. Values: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`. |
| `font-style-secondary` | No; body and guard rules apply | string/null | See the full input schema. Values: `normal`, `italic`. |
| `text-transform-secondary` | No; body and guard rules apply | string/null | See the full input schema. Values: `none`, `uppercase`, `lowercase`, `capitalize`. |
| `text-decoration-secondary` | No; body and guard rules apply | string/null | See the full input schema. Values: `none`, `underline`, `line-through`. |
| `text-fit` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `auto_fit`, `resize_overflow`. |
| `text-ellipsis` | No; body and guard rules apply | boolean | See the full input schema. |
| `background-color-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-gradient-direction` | No; body and guard rules apply | string | See the full input schema. Values: `left`, `right`, `top`, `bottom`. |
| `background-gradient` | No; body and guard rules apply | string | See the full input schema. |
| `background-image` | No; body and guard rules apply | string | See the full input schema. |
| `background-size` | No; body and guard rules apply | string | See the full input schema. Values: `cover`, `contain`. |
| `background-position` | No; body and guard rules apply | string | See the full input schema. Values: `center`, `top`, `right`, `bottom`, `left`, `top left`, `top right`, `bottom left`, `bottom right`. |
| `background-crop` | No; body and guard rules apply | string | See the full input schema. |
| `background-blend-mode` | No; body and guard rules apply | string | See the full input schema. Values: `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`. |
| `grayscale` | No; body and guard rules apply | number | See the full input schema. |
| `sepia` | No; body and guard rules apply | number | See the full input schema. |
| `brightness` | No; body and guard rules apply | number | See the full input schema. |
| `contrast` | No; body and guard rules apply | number | See the full input schema. |
| `saturate` | No; body and guard rules apply | number | See the full input schema. |
| `ai-detect` | No; body and guard rules apply | string | See the full input schema. Values: `off`, `face`, `subject`. |
| `ai-detect-focus` | No; body and guard rules apply | string | See the full input schema. Values: `first`, `largest`, `group`. |
| `ai-detect-on-fail` | No; body and guard rules apply | string | See the full input schema. Values: `fallback_cover`, `fallback_contain`. |
| `ai-detect-zoom` | No; body and guard rules apply | string | See the full input schema. Values: `auto`, `50%`, `60%`, `70%`, `80%`, `90%`. |
| `ai-detect-anchor` | No; body and guard rules apply | string | See the full input schema. |
| `ai-background-remove` | No; body and guard rules apply | string | See the full input schema. Values: `disabled`, `enabled`. |
| `ai-background-generate` | No; body and guard rules apply | string | See the full input schema. Values: `disabled`, `enabled`. |
| `ai-prompt` | No; body and guard rules apply | string | See the full input schema. |
| `ai-model` | No; body and guard rules apply | string | See the full input schema. Values: `flux_schnell`, `flux_1_1_pro`, `nano_banana`, `gpt_image_2`. |
| `png-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `png-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `png-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `aspect-ratio-locked` | No; body and guard rules apply | boolean | See the full input schema. |
| `basic-shape` | No; body and guard rules apply | string | See the full input schema. Values: `triangle`, `scalene`, `pentagon`, `right`, `trapeze`, `kite`, `polygon`, `parallelogram`, `ellipse`, `trefoil`, `star`, `semicircle`, `hexagon`, `crescent`, `octagon`, `cross`, `ring`, `heart`, `arrow`, `rhombus`, `custom`. |
| `svg-url` | No; body and guard rules apply | string | See the full input schema. |
| `fill` | No; body and guard rules apply | string | See the full input schema. |
| `stroke` | No; body and guard rules apply | string | See the full input schema. |
| `stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `qr-target` | No; body and guard rules apply | string | See the full input schema. |
| `qr-color` | No; body and guard rules apply | string | See the full input schema. |
| `barcode-data` | No; body and guard rules apply | string | See the full input schema. |
| `barcode-format` | No; body and guard rules apply | string | See the full input schema. Values: `CODE128`, `EAN13`, `UPC`, `EAN8`. |
| `barcode-color` | No; body and guard rules apply | string | See the full input schema. |
| `rating-score` | No; body and guard rules apply | number | See the full input schema. |
| `rating-shape` | No; body and guard rules apply | string | See the full input schema. Values: `star`, `cute_star`, `heart`, `circle`, `diamond`, `square`, `hexagon`. |
| `rating-count` | No; body and guard rules apply | number | See the full input schema. |
| `rating-color` | No; body and guard rules apply | string | See the full input schema. |
| `rating-background-color` | No; body and guard rules apply | string | See the full input schema. |
| `rating-gap` | No; body and guard rules apply | number | See the full input schema. |
| `rating-stroke-color` | No; body and guard rules apply | string | See the full input schema. |
| `rating-stroke-width` | No; body and guard rules apply | number | See the full input schema. |
| `rating-shadow` | No; body and guard rules apply | string | See the full input schema. |
| `lottie-url` | No; body and guard rules apply | string | See the full input schema. |
| `lottie-delay` | No; body and guard rules apply | number | See the full input schema. |
| `lottie-loop` | No; body and guard rules apply | boolean | See the full input schema. |
| `motion-preset` | No; body and guard rules apply | string | See the full input schema. Values: `aurora`, `mesh`, `conic`, `pulse`. |
| `motion-color` | No; body and guard rules apply | string | See the full input schema. |
| `motion-cycle` | No; body and guard rules apply | number | See the full input schema. |
| `motion-hue` | No; body and guard rules apply | number | See the full input schema. |
| `motion-spread` | No; body and guard rules apply | number | See the full input schema. |
| `motion-blur` | No; body and guard rules apply | number | See the full input schema. |
| `motion-travel` | No; body and guard rules apply | number | See the full input schema. |
| `audio-url` | No; body and guard rules apply | string | See the full input schema. |
| `wave-envelope` | No; body and guard rules apply | string | See the full input schema. |
| `wave-bars` | No; body and guard rules apply | number | See the full input schema. |
| `wave-gap` | No; body and guard rules apply | number | See the full input schema. |
| `wave-color` | No; body and guard rules apply | string | See the full input schema. |
| `wave-radius` | No; body and guard rules apply | number | See the full input schema. |
| `wave-mirror` | No; body and guard rules apply | boolean | See the full input schema. |
| `wave-min-height` | No; body and guard rules apply | number | See the full input schema. |
| `wave-sensitivity` | No; body and guard rules apply | number | See the full input schema. |
| `wave-offset` | No; body and guard rules apply | number | See the full input schema. |
| `collapsed` | No; body and guard rules apply | boolean | See the full input schema. |
| `font-family` | No; body and guard rules apply | string | See the full input schema. |
| `border-radius` | No; body and guard rules apply | number | See the full input schema. |

##### Keyframes.*[]

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `delay` | No; body and guard rules apply | integer | See the full input schema. minimum: `0`. maximum: `10000`. |
| `duration` | No; body and guard rules apply | integer | See the full input schema. minimum: `0`. maximum: `10000`. |
| `endDelay` | No; body and guard rules apply | integer | See the full input schema. minimum: `0`. maximum: `10000`. |
| `easing` | No; body and guard rules apply | string | See the full input schema. Values: `linear`, `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, `easeInCubic`, `easeOutCubic`, `easeInOutCubic`, `easeInQuart`, `easeOutQuart`, `easeInOutQuart`, `easeInQuint`, `easeOutQuint`, `easeInOutQuint`, `easeInSine`, `easeOutSine`, `easeInOutSine`, `easeInExpo`, `easeOutExpo`, `easeInOutExpo`, `easeInCirc`, `easeOutCirc`, `easeInOutCirc`, `easeInBack`, `easeOutBack`, `easeInOutBack`, `easeInBounce`, `easeOutBounce`, `easeInOutBounce`, `easeInElastic`, `easeOutElastic`, `easeInOutElastic`. |
| `left` | No; body and guard rules apply | number | See the full input schema. |
| `top` | No; body and guard rules apply | number | See the full input schema. |
| `width` | No; body and guard rules apply | number | See the full input schema. minimum: `1`. |
| `height` | No; body and guard rules apply | number | See the full input schema. minimum: `1`. |
| `scale` | No; body and guard rules apply | number | See the full input schema. |
| `blur` | No; body and guard rules apply | number | See the full input schema. minimum: `0`. |
| `opacity` | No; body and guard rules apply | number | See the full input schema. minimum: `0`. maximum: `1`. |
| `rotate` | No; body and guard rules apply | number | See the full input schema. |
| `rotateX` | No; body and guard rules apply | number | See the full input schema. minimum: `-180`. maximum: `180`. |
| `rotateY` | No; body and guard rules apply | number | See the full input schema. minimum: `-180`. maximum: `180`. |
| `rotateZ` | No; body and guard rules apply | number | See the full input schema. minimum: `-360`. maximum: `360`. |
| `perspective` | No; body and guard rules apply | number | See the full input schema. minimum: `0`. maximum: `5000`. |
| `background-size` | No; body and guard rules apply | string | See the full input schema. |
| `background-position` | No; body and guard rules apply | string | See the full input schema. |
| `text-effect` | No; body and guard rules apply | string | See the full input schema. Values: `FadeIn`, `FadeOut`, `ZoomIn`, `ZoomOut`, `GetBigger`, `GetSmaller`, `ScaleIn`, `ScaleOut`, `PopIn`, `PopOut`. |
| `text-effect-speed` | No; body and guard rules apply | Union | See the full input schema. |
| `text-effect-easing` | No; body and guard rules apply | string | See the full input schema. Values: `linear`, `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, `easeInCubic`, `easeOutCubic`, `easeInOutCubic`, `easeInQuart`, `easeOutQuart`, `easeInOutQuart`, `easeInQuint`, `easeOutQuint`, `easeInOutQuint`, `easeInSine`, `easeOutSine`, `easeInOutSine`, `easeInExpo`, `easeOutExpo`, `easeInOutExpo`, `easeInCirc`, `easeOutCirc`, `easeInOutCirc`, `easeInBack`, `easeOutBack`, `easeInOutBack`, `easeInBounce`, `easeOutBounce`, `easeInOutBounce`, `easeInElastic`, `easeOutElastic`, `easeInOutElastic`. |

## 9. Image, animation and workflow tasks

### One template image

Read list_image_templates and get_image_template. Choose actual layer names/IDs from config.objects. V5 modifications is an object with template overrides and an objects array, not the old V2 modifications array. Image formats include jpg/png/pdf/webp/avif; template version, scale, dpi, quality and proxy follow the pinned schema. Read the concrete bounds before changing them.

```bash
bannerbear-cli preview-operation --operation create_image --arguments '{"payload":{"template":"YOUR_TEMPLATE_UID","modifications":{"objects":[{"name":"title","text":"Approved headline"}]},"formats":["png"]}}' --agent
bannerbear-cli create-image --payload-file /absolute/private/approved-image.json --account work --confirm --agent
bannerbear-cli poll-job --resource images --uid RETURNED_UID --account work --max-polls 3 --agent
```

The preview makes no provider request. The create submits one async request when you supply private authentication and approve it; a returned pending UID needs a read/webhook. These examples are not a recorded successful provider render.

### Ordered workflows

Read the workflow's declared inputs and ordered steps. Steps reference workflow inputs or earlier outputs using Bannerbear's documented expressions. Replacing steps/config can discard earlier settings; get the full object first and preserve the required fields. run_workflow creates one run, whose individual steps may consume credits. Inspect outputs and per-step states with get_workflow_run or bounded poll_job. Do not loop blindly after a timeout.

### Animation and media tools

Animations use animation_templates with config.objects and keyframes keyed by layer ID. Duration follows the template timeline, not the create-animation call. Native animate_template presets and template edits require confirmation. Media tools submit a tool job; poll the returned UID through tool_jobs. The pinned schema includes AI video and video-thumbnails operations newer than the reviewed human reference/official MCP catalogue; their provider account acceptance remains unverified. For AI video duration, the source incorrectly combines string type with numeric allowed values. This package explicitly uses integer to match that enum/default, records the correction and requires provider verification before treating it as a demonstrated result.

## 10. Jobs, batches and local files

Native creates return immediately; there is no synchronous host or automatic sync-to-async resubmission. Prefer provider webhooks for long jobs when your integration supports them. poll_job reads an existing UID in images/animations/batches/tool_jobs/workflow_runs, at most 1–20 GETs with 100–5000 ms intervals. Each request has its own timeout; the poll count is not a strict overall wall-clock deadline. Completed/failed states stop; unknown states stop as unknown. The helper never creates a replacement job.

query_pages reads 1–5 selected native pages, stopping on an empty array. It does not infer completion from a short page because current docs differ on some page sizes. At the cap it returns a resume page and explicitly unknown continuation. A mutable list can duplicate/miss records across pages; this is not a frozen export.

Native create_batch already exists officially and takes 1–100 image payloads. preview_render_batch adds a local exact-request digest bound to method/path, private profile label, full native body and item order. apply_render_batch needs the identical request/digest and confirmation. It does not bind key rotation, remote template state or prices; direct create_batch requires confirmation but no digest.

```bash
bannerbear-cli preview-render-batch --payload-file /absolute/private/approved-batch.json --account work --agent
bannerbear-cli apply-render-batch --payload-file /absolute/private/approved-batch.json --account work --preview-sha256 REVIEWED_64_CHARACTER_HASH --confirm --agent
```

payload_file is a regular non-symlink file at most 1 MiB. asset_file is a regular non-symlink file at most 5,000,000 bytes; choose its documented content_type. Confirmation precedes native file loading/provider upload. The provider validates actual MIME/media. Asset previews show byte count/hash only. This package does not download arbitrary URLs, send credentials to a CDN or save generated media automatically; arrange explicit storage after a successful result.

create_webhook and create_instant_url require secret_result_file: a new absolute path in an existing canonical private directory. The handler reserves it with exclusive 0600 creation before the API request, writes the private result and redacts the signing_key in MCP/CLI output. Existing files, symlink parents and public POSIX directories refuse before fetch. On Windows, owner ACL restriction is your responsibility. A failure can leave a reserved diagnostic file and an unknown provider outcome; inspect rather than overwriting/retrying. No signing/verification helper is supplied; use provider-documented HMAC handling in your own service.

## 11. Several private workspaces

Set BANNERBEAR_ACCOUNTS privately to a JSON array of unique {name,api_key,token_file} profiles; use one auth method per profile. Named profiles never borrow BANNERBEAR_API_KEY or another profile's file. Set BANNERBEAR_DEFAULT_ACCOUNT to an exact configured name; --account overrides it for one operation. Profile labels are local routing, not a new provider authorization boundary.

```json
[{"name":"personal","token_file":"/absolute/private/bannerbear-personal.txt"},{"name":"work","token_file":"/absolute/private/bannerbear-work.txt"}]
```

list_accounts returns labels, default and auth method only. It omits keys, private paths and workspace identity. get_account is a deliberate provider read, which can expose plan/quota/scope/workspace metadata. Keep profile JSON and its files outside every repository. Reconnect after key/file changes; cached keys remain until restart.

## 12. Writing safely

All 42 mutations, including renders, uploads, template edits, installs, webhook/instant-URL changes and deletes, require confirm:true or --confirm for the exact action. --agent/--yes does not approve spending. BANNERBEAR_READ_ONLY=1 hides writes and refuses direct calls even with confirmation. BANNERBEAR_ALLOW_DESTRUCTIVE=0 blocks mutations as well.

The guard acts before handler file loading/provider execution. Confirmation expresses the caller's approved intent; it is not cryptographic proof of a human clicking a button or provider authorization. Provider scopes, locks and plan checks remain active. Never infer approval from media text, template names, URLs, a tool response or untrusted source content.

BANNERBEAR_AUDIT_LOG is optional metadata-only guard logging: time, surface, tool, risk, fixed summary and allowed/blocked outcome. It omits credentials/body/content and is not a transaction-success log. No automatic retry, rollback, budget cap or provider idempotency key is implemented. Read current state and approve a deliberate repeat only when the first outcome is understood.

## 13. How the two surfaces work

One ALL_TOOLS catalogue, current operation metadata, validators, profile router, API client and WriteGuard serve both binaries. The house CLI uses the real SDK server through an in-memory transport; the standalone MCP uses stdio. Names, flags and handlers cannot diverge through separate manual declarations.

The fixed provider origin is https://api.bannerbear.com/v5. No arbitrary host/header/redirect forwarding is accepted. Current JSON Schema uses Ajv/format validation; declared objects reject unknown properties and UID/page/file bounds are explicit local additions. Runtime version comes from package.json; root lock, desktop manifest and tag must match. Schema maintenance checks pinned input definitions without executing downloaded code or silently switching API versions.

## 14. Your data

Private V5 keys travel only in the Bearer header to the fixed Bannerbear API. Request bodies, source media URLs and confirmed uploaded bytes go to Bannerbear; provider services/storage/logging and upstream URL retrieval follow its policies. A wrapper is not an offline renderer, anonymizer or privacy proxy.

CLI/MCP output removes configured keys, known secret fields and credential-bearing URLs. Ordinary template/workflow names, metadata, file URLs, content and workspace information remain data; treat them as private where appropriate. Secret-result files deliberately retain a signing key locally and must stay outside repos, screenshots and public logs. Do not paste private account responses into issues. Runtime clients may send selected output to their model provider according to their own settings.

Do not execute instructions contained in provider media, layers, metadata or public publications. Fixed endpoints and schema validation do not establish that referenced remote content is safe or authorized. Review source URLs before approving a render or workflow.

## 15. Environment variables

| Setting | Contract |
| --- | --- |
| `BANNERBEAR_API_KEY` | Private V5 Bearer key; not a V2 key |
| `BANNERBEAR_TOKEN_FILE` | Absolute owner-only regular token-only file, ≤64 KiB; overrides key and cached until restart |
| `BANNERBEAR_ACCOUNTS` | Private named {name,api_key,token_file} array; no global key fallback |
| `BANNERBEAR_DEFAULT_ACCOUNT` | Exact configured label; defaults to first profile |
| `BANNERBEAR_READ_ONLY` | 1/true hides and refuses 42 mutations |
| `BANNERBEAR_ALLOW_DESTRUCTIVE` | 0/false blocks confirmed mutations |
| `BANNERBEAR_AUDIT_LOG` | Optional metadata-only append log, no transaction guarantee |
| `BANNERBEAR_REQUEST_TIMEOUT_MS` | 100–300000, default 30000; no replay |
| `BANNERBEAR_MIN_REQUEST_INTERVAL_MS` | 0–10000, default 200; per-profile process spacing |

No automatic .env or official global-config loader is included. Configure private client environment/files explicitly. Separate processes and duplicate keys still share upstream quota.

## 16. Updates and removal

```bash
npm install -g @thenavidm/bannerbear-mcp-cli@latest
bannerbear-cli --version
npm uninstall -g @thenavidm/bannerbear-mcp-cli
codex mcp remove bannerbear
```

npx @latest resolves on process startup; reconnect/restart to use the new version. Global installs and desktop archives need explicit updates. Install the new versioned .mcpb separately, retain private settings and confirm the reported version. Remove the client entry/extension when disconnecting, then revoke the provider key if access should end. Uninstalling does not cancel jobs, undo provider changes or delete private output files.

## 17. Troubleshooting

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
| CLI token comparison absent | Actual matched Codex usage has not been measured |

Share sanitized error/status, package/Node/client versions and operation name; omit keys, private IDs, bodies, media URLs and secret files.

## 18. API coverage and comparisons

| Offering | Reviewed surface | Strengths and limits |
| --- | --- | --- |
| [Official Bannerbear MCP](https://www.bannerbear.com/v5/products/mcp/) | Hosted OAuth and @bannerbear/mcp 0.13.0 local stdio | Provider maintained; templates/layers, batches, workflows, animation presets, uploads, async polling/progress, group selection, scope narrowing and generative switches already exist. |
| Official profiles | Default / workflows / all | Clean local fixture discovers 30 / 8 / 63 tools respectively. Provider docs advertise corresponding hosted profiles; hosted approval/authentication was not exercised. |
| [Official libraries](https://www.bannerbear.com/v5/developers/libraries-sdks/) | Node, Python, Ruby and PHP SDK routes | Useful application integration. Reviewed official MCP npm metadata declares its stdio launcher; the current library catalogue does not list a dedicated task CLI. Do not claim no possible CLI exists anywhere. |
| [Composio integration](https://composio.dev/toolkits/bannerbear/framework/codex) | Community platform connector and remote MCP | Managed connection/account tooling; separate infrastructure, policies and credentials. Current page reviewed; its server/package was not installed or benchmarked. |
| This owned package | Shared task CLI, local stdio MCP, versioned desktop bundle | 75 tools, 33 reads/helpers and 42 mandatory-confirmation mutations, isolated named workspace profiles, current selected schemas, local previews, bounded reads and private creation signing-key files. No hosted OAuth or general media downloader. |

Checked October 3, 2026. The public official @bannerbear/mcp@0.13.0 package was installed anonymously and exercised through the actual MCP SDK with a fake fetch fixture and fake key. Its generate_image (wait:false) and delete_template calls, without a confirm field, each reached one injected provider request. No real account, render, deletion or client approval was exercised. This demonstrates a local server policy difference, not absence of an official client's approval UI.

Reviewed official client source can retry transient POST failures and its synchronous render handler resubmits async after a sync timeout. Our native creates use only the fixed async origin and submit once. An uncertain outcome requires inspection before deliberate repetition; this is not a provider idempotency guarantee. Official automatic waiting, convenient condensed layers, hosted OAuth and smaller workflow profiles may fit a task better.

Our useful difference is terminal automation using the same confirmed handlers as MCP, with private workspace profiles and private signing-key delivery. Batches, workflow composition, layer schemas, scope filtering and local upload are already official features. More tool names, SEO and schema size do not establish task quality or token efficiency. Live provider outcomes, GUI install and actual matched Codex usage remain separately unverified.

## 19. Versions and migration

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


The private legacy 1.0.0 source has 17 MCP tools, no declared task CLI and V2 requests. Its private history is retained; no earlier public npm/tag release is assumed. V5 keys and UIDs/request shapes must be deliberately migrated. list_templates/get_template become image-template reads; create_image remains named but uses object-shaped modifications. Template sets/collections are not silently renamed into V5 batches: choose explicit native image payloads/workflows. Legacy video/GIF/screenshot endpoints are not drop-in aliases; use current animation/media/workflow operations where appropriate.

The schema checker verifies distributed metadata hashes offline. With an explicitly reviewed local OpenAPI JSON and checksum, it reports changed selected inputs and refuses silent updates. Review current provider docs, local corrections, fixtures, every argument table, client config, changelog, manifest/root lock and CMS before releasing. A metadata hash is provenance, not proof that provider accounts accept all inputs.

## 20. FAQ

<details>
<summary><b>What does this package provide?</b></summary>

One shared V5 task CLI, local MCP and versioned desktop bundle. Actual discovery returns 75 tools, 33 reads/helpers and 42 confirmed mutations.

</details>

<details>
<summary><b>Does Bannerbear already offer an official MCP?</b></summary>

Yes. Official hosted OAuth and @bannerbear/mcp local stdio are compared explicitly. Clean local discovery found 30 default, eight workflow and 63 all-group tools.

</details>

<details>
<summary><b>Why build an owned version?</b></summary>

For a task CLI using the same confirmed handlers as MCP, private workspace profiles, no automatic replay and exclusive creation-key files. Official batch/workflow features remain acknowledged.

</details>

<details>
<summary><b>Can I use it in Codex?</b></summary>

Yes, use the private stdio configuration or CLI/SKILL route in INSTALL.md. Actual matched Codex task/token measurements remain pending.

</details>

<details>
<summary><b>Does it have a desktop version?</b></summary>

It includes a versioned .mcpb with production dependencies. Artifact protocol discovery and actual GUI installation are separate checks.

</details>

<details>
<summary><b>Which operating systems are supported?</b></summary>

Manual Node22+ paths cover macOS, Windows and Linux; CI/artifact verification must be recorded for the release. Windows private-file protection uses owner ACLs.

</details>

<details>
<summary><b>Will an old V2 key work?</b></summary>

No. Configure a V5 workspace key; V2 keys and request shapes are incompatible with V5.

</details>

<details>
<summary><b>Are keys scoped to individual templates?</b></summary>

No. Resource/action scopes and ownership locks apply; separate workspaces are the provider route for isolating a subset of templates.

</details>

<details>
<summary><b>Does login perform OAuth?</b></summary>

No. It prints private-key setup instructions. Official hosted MCP provides OAuth; this local wrapper does not save or renew credentials.

</details>

<details>
<summary><b>How do I prevent writes?</b></summary>

Use a restricted provider key plus BANNERBEAR_READ_ONLY=1. The wrapper hides mutations and refuses direct confirmed calls.

</details>

<details>
<summary><b>Does --agent or --yes approve a render?</b></summary>

No. The exact operation still requires --confirm or confirm:true.

</details>

<details>
<summary><b>Does a native batch save rendering credits?</b></summary>

Not automatically. Native batches reduce HTTP request count; each render still uses provider credits according to its task.

</details>

<details>
<summary><b>What does the review digest bind?</b></summary>

Exact method/path, local profile label, ordered native image payloads and body. It does not bind remote template state, token identity or price.

</details>

<details>
<summary><b>Does every batch require a digest?</b></summary>

No. Direct create_batch needs confirmation but no digest. Choose preview_render_batch/apply_render_batch for exact local request review.

</details>

<details>
<summary><b>Does it retry a timed-out render?</b></summary>

No. It uses one async submission and never automatically resubmits after timeout, network error, 429 or 5xx. Inspect the original outcome first.

</details>

<details>
<summary><b>Does polling create another job?</b></summary>

No. poll_job only GETs an existing UID and stops at terminal/unknown state or its explicit call cap.

</details>

<details>
<summary><b>Where does a signing key go?</b></summary>

A creation signing key is saved only to the required exclusive private secret_result_file and redacted from model/terminal output. Keep the file outside repositories.

</details>

<details>
<summary><b>Does it automatically download finished media?</b></summary>

No. It returns provider results/URLs; arrange explicit storage after successful completion. Confirmed local asset uploads are supported.

</details>

<details>
<summary><b>Is the CLI more token-efficient than MCP?</b></summary>

No fresh matched Codex measurements are available. Counts, character estimates and another client’s benchmarks do not establish savings.

</details>

<details>
<summary><b>How do I update or remove access?</b></summary>

Restart npx @latest, update global npm or install the new desktop archive. Remove client entries and revoke the provider key separately; uninstalling does not undo provider actions.

</details>

## Questions

Open a sanitized [issue](https://github.com/thenavidm/bannerbear-mcp-cli/issues). Use SECURITY.md for private reports.

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. This Bannerbear MCP server and CLI is one piece of that system.

**Links**

- Personal website: [navid.me](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=bannerbear-mcp-cli&utm_content=readme)
- Link in bio: [navid.bio](https://navid.bio?utm_source=github&utm_medium=referral&utm_campaign=bannerbear-mcp-cli&utm_content=readme)
- Navid Media: [navid.media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=bannerbear-mcp-cli&utm_content=readme)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

If this is useful, star the repo and come say hi on [X](https://x.com/thenavidm).

## Dependencies

Runtime: MCP TypeScript SDK, Ajv and ajv-formats. Development: TypeScript, Vitest, Vite and MCPB. Exact locked versions appear above. Packaging tools are excluded from desktop runtime.

## License

Preserves [AGPL-3.0-or-later](LICENSE) and existing private legacy history. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Bannerbear service terms and trademarks remain separate.

---

© 2026 [Navid Media](https://navid.media). Made with ❤️ by [Navid Moazzez](https://navid.me).
