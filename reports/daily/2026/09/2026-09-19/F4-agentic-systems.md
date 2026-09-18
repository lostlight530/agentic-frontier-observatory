# F4 — Agentic Systems

**Objects:** AWS AgentCore Consent Portal; AWS Agent Registry; MCP Tasks; A2A task-reference surfaces.

**Versions / state:** AWS current documentation; MCP SEP-2663 remains Final / Extensions Track; checked A2A task-reference semantics remain contextual rather than typed recovery lineage.

**Evidence class:** FACT for documented product/protocol surfaces; no independent interoperability execution was performed.

**Identity / authority model:** AgentCore Consent Portal authenticates end users through an OIDC IdP and gathers consent before an agent accesses a downstream resource on their behalf. Agent Registry separates record approval/discovery state from other lifecycle states.

**State / recovery semantics:** Registry APPROVED controls discoverability in the documented product model; it is not proof of runtime authorization, task completion, durable effects, compensation or successor authority. Consent is scoped product evidence, not a portable recovery-authority contract.

**Implementation / deployment evidence:** first-party AWS product documentation only; no cross-provider deployment verification.

**Conflict / counterevidence:** richer product-local consent/registry semantics do not close the existing portable recovery gaps.

**Explicit non-claims:** Consent Portal != universal delegated-authority standard; Registry Approval != runtime execution authorization; referenceTaskIds != typed recovery lineage.

**Handoff to F7:** execution/control surfaces are becoming more explicit while successor authority and recovery completion remain open.

Primary sources:
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity-consent-portal.html
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-record-lifecycle.html
- https://tasks.extensions.modelcontextprotocol.io/seps/2663-tasks-extension
- https://a2a-protocol.org/dev/specification/
