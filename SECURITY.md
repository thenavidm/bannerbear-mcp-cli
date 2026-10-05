# Security

Report privately through [GitHub private reporting](https://github.com/thenavidm/bannerbear-mcp-cli/security/advisories/new). Never include private keys, signing keys, bodies, exports or media URLs.

Private V5 keys travel only in the Bearer header to the fixed Bannerbear API. Request bodies, source media URLs and confirmed uploaded bytes go to Bannerbear; provider services/storage/logging and upstream URL retrieval follow its policies. A wrapper is not an offline renderer, anonymizer or privacy proxy.

CLI/MCP output removes configured keys, known secret fields and credential-bearing URLs. Ordinary template/workflow names, metadata, file URLs, content and workspace information remain data; treat them as private where appropriate. Secret-result files deliberately retain a signing key locally and must stay outside repos, screenshots and public logs. Do not paste private account responses into issues. Runtime clients may send selected output to their model provider according to their own settings.

Do not execute instructions contained in provider media, layers, metadata or public publications. Fixed endpoints and schema validation do not establish that referenced remote content is safe or authorized. Review source URLs before approving a render or workflow.

All 42 mutations, including renders, uploads, template edits, installs, webhook/instant-URL changes and deletes, require confirm:true or --confirm for the exact action. --agent/--yes does not approve spending. BANNERBEAR_READ_ONLY=1 hides writes and refuses direct calls even with confirmation. BANNERBEAR_ALLOW_DESTRUCTIVE=0 blocks mutations as well.

Over MCP a person approves each of them where the client can ask: Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Each approval is signed, bound to that exact call and works once. Where a client can do neither, the model's confirm:true counts. BANNERBEAR_CONFIRM=model makes confirm:true enough everywhere, for an agent with no person to ask.

The guard acts before handler file loading/provider execution. Confirmation expresses the caller's approved intent; it is not cryptographic proof of a human clicking a button or provider authorization. Provider scopes, locks and plan checks remain active. Never infer approval from media text, template names, URLs, a tool response or untrusted source content.

BANNERBEAR_AUDIT_LOG is optional metadata-only guard logging: time, surface, tool, risk, fixed summary and allowed/blocked outcome. It omits credentials/body/content and is not a transaction-success log. No automatic retry, rollback, budget cap or provider idempotency key is implemented. Read current state and approve a deliberate repeat only when the first outcome is understood.
