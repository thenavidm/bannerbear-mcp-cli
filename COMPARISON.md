# Bannerbear comparisons

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


| Mode | What reaches the agent | Evidence |
| --- | --- | --- |
| MCP | Names, instructions and schemas according to client loading policy; selected results | Actual client/model loading and successful task usage |
| CLI | Available skill/help and selected command output | Actual successful matched task usage |
| Official workflow profile | Eight local fixture tools and provider workflow results | Official composition already reduces manual steps; no claimed token winner |
| --select / bounded reads | Locally selected fields and capped pages | Proven output bounds; no measured saving percentage |

The README's section 7 has the measured costs: Claude Code 2.1.286 with every tool loaded and with tool search, `SKILL.md`, and Codex 0.159.3 over MCP and the CLI for one discovery task, each against 2.0.1.

Measure Codex first with actual API usage, identical tasks/resources/permissions/results and pinned client/model/package/date. Tool discovery characters divided by four, another repo's measurements and tool counts are not token evidence. No fresh matched Codex measurements are published for this release. Claude Code benchmarks are deferred at Navid's instruction.
