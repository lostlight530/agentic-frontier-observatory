# Active Watchlist / 活跃观察清单

Updated: 2026-08-25 · resource-side revocation evidence applied

| ID | Question / 问题 | Status | Next evidence |
|---|---|---|---|
| G-W01 | How quickly do MCP implementations converge on the 2026-07-28 specification? | OPEN | SDK releases and production adoption |
| G-W02 | Does A2A 1.x produce cross-vendor conformance evidence? | OPEN | TCK and interoperability events |
| G-W03 | Which identity and authorization model becomes reusable across agent ecosystems? | **STRENGTHENED / open** | NIST outputs and crosswalks |
| G-W04 | Can benchmarks measure long-horizon recovery and authority boundaries? | OPEN | Public methods |
| G-W05 | How do DNS-AID, registries, MCP, A2A and ARD compose? | OPEN | Crosswalks and deployments |
| G-W06 | Which harness layers become standardized versus model-native? | OPEN | Runtime and model APIs |
| G-W07 | Can observability reconstruct delegation, revocation and recovery? | **STRENGTHENED / open** | Session traces, audit methods, cross-system correlation |
| G-W08 | Are standalone agent surfaces being absorbed into core AI products? | **DURABLE TREND / monitor** | Product transitions |
| G-W09 | Can enterprise authorization span browser actions, MCP, A2A, cloud IAM and human approvals? | **STRENGTHENED / open** | Cross-system demonstrations |
| G-W10 | Can ARD, DNS-AID, A2A Agent Cards and registries compose without collapsing policy boundaries? | OPEN | Federation tests |
| G-W11 | Can discovery expose authority and provenance before invocation? | OPEN | Signed metadata |
| G-W12 | Can first-class agent identities remain accountable across cloud and protocol boundaries? | **STRENGTHENED / open** | Portable attestation and crosswalks |
| G-W13 | How should sponsor, owner and delegator relationships be represented across open protocols? | OPEN | Standards and governance guidance |
| G-W14 | Can revocation propagate across delegated subagents and external tools? | **OPEN / W35 PRIORITY** | Lifecycle and incident evidence |
| G-W15 | Can cloud agent identity map to Web Bot Auth request identity without creating a second disconnected identity namespace? | OPEN | Provider mappings, key binding, protocol profiles |
| G-W16 | How is end-user delegation represented alongside service-level signed agent traffic? | OPEN | Privacy-preserving delegation and authorization evidence |
| G-W17 | Do Web Bot Auth drafts converge into a stable standard implemented consistently across providers? | OPEN | IETF revisions and conformance evidence |
| G-W18 | Can key rotation and revocation reach origins quickly enough for incident response? | **OPEN / W35 PRIORITY** | Operational key lifecycle evidence |
| G-W19 | Does draft → publish become a stable execution boundary for shared Agents? | **DURABLE / monitor** | Rollback and incident evidence |
| G-W20 | How do end-user and agent-owned connections preserve downstream accountability? | OPEN | Identity mapping and audit evidence |
| G-W21 | Can write approval, action constraints and data-return governance be composed without blind spots? | **STRENGTHENED / open** | Product controls, security guidance and incidents |
| G-W22 | Do schedule, API, Slack and IDE triggers preserve the same authority envelope? | OPEN | Cross-channel execution evidence |
| G-W23 | Can owner/sponsor accountability survive agent handoff, employee departure and autonomous execution? | **STRENGTHENED / open** | Lifecycle workflows and production cases |
| G-W24 | Can vendor-local workspace governance map to MCP/A2A/Web trust primitives? | **OPEN / W35 PRIORITY** | Formal mappings and cross-platform demonstrations |
| G-W25 | Can session evidence identify the exact published Agent definition and policy version that executed? | OPEN | Version IDs in telemetry, replay and incident tooling |
| G-W26 | Can runtime traces distinguish end-user, Agent-owned, delegated and service identities? | OPEN | Identity fields and cross-system correlation |
| G-W27 | Can MCP/A2A calls preserve correlation IDs across Agent and tool boundaries? | OPEN | Trace-context mappings and multi-system demonstrations |
| G-W28 | Can failed or risky sessions drive auditable revocation or policy changes? | **STRENGTHENED / open** | Incident-to-policy workflows |
| G-W29 | What retention and privacy boundaries apply to prompt / response / tool-call telemetry? | OPEN | Enterprise controls, privacy guidance and retention settings |
| G-W30 | Do vendors converge on a portable Agent session evidence schema? | OPEN | Cross-platform schemas, standards or conformance work |
| G-W31 | Can durable artifacts identify the exact Agent session and human initiator that produced them? | **STRENGTHENED / open** | Session-to-artifact linkage across products |
| G-W32 | Can one correlation ID span session, MCP/A2A calls, commit, PR, review and audit events? | **OPEN / W35 PRIORITY** | Trace-context mappings and implementations |
| G-W33 | Can Agent definition and policy versions be reconstructed from a later commit or PR? | OPEN | Provenance metadata and replay tooling |
| G-W34 | Can subagent contributions remain attributable inside one final artifact? | OPEN | Nested provenance and delegation traces |
| G-W35 | Can non-code Agents attach equivalent provenance to documents, tickets, CRM changes and infrastructure updates? | OPEN | Durable business-artifact examples |
| G-W36 | Do review failures and check failures feed back into Agent policy or definition changes? | OPEN | Closed-loop incident and policy evidence |
| G-W37 | Can a build attestation preserve the exact Agent session, initiator and reviewed PR that produced its source commit? | **STRENGTHENED / open** | Custom predicates, provenance mappings, production examples |
| G-W38 | Can artifact attestations carry Agent identity or delegated-authority metadata without overloading build provenance? | **OPEN / W35 PRIORITY** | Provenance schemas and policy profiles |
| G-W39 | How are Agent-generated artifacts revoked, rebuilt and re-attested after a security or policy incident? | **STRENGTHENED / open** | Attestation deletion, rebuild and runtime propagation evidence |
| G-W40 | Can deployment systems enforce both valid attestation and separate Agent-specific authorization policy? | **STRENGTHENED / open** | Admission policies combining provenance and authority evidence |
| G-W41 | Do non-code Agent outputs gain equivalent cryptographic provenance primitives? | OPEN | Document, dataset, ticket and infrastructure attestations |
| G-W42 | Does open Sigstore/SLSA provenance become a bridge from vendor-local Agent governance to cross-platform evidence portability? | **STRENGTHENED / open** | Cross-vendor Agent provenance mappings and conformance |
| G-W43 | Can an admission controller verify Agent-session or sponsor metadata in addition to ordinary build provenance? | OPEN | Custom predicates, policy examples and deployments |
| G-W44 | Can one policy decision correlate Agent definition, session, reviewed source, artifact digest and runtime workload? | **OPEN / W35 PRIORITY** | End-to-end correlation IDs and evidence graphs |
| G-W45 | How are policy exceptions represented, approved, expired and audited without becoming a permanent bypass? | **OPEN / W35 PRIORITY** | Exception workflows and incident evidence |
| G-W46 | Does attestation deletion or revocation automatically stop already-running or cached workloads? | **OPEN / W35 PRIORITY** | Runtime revocation and re-admission implementations |
| G-W47 | Can OPA / Sigstore / cloud admission systems converge on portable Agent-specific provenance profiles? | OPEN | Shared schemas and cross-platform policy packs |
| G-W48 | Can non-code Agent outputs be subject to an equivalent machine-enforced admission / publication gate? | OPEN | Document, dataset, ticket and infrastructure examples |
| G-W49 | Can continuous runtime policy evaluation consume Agent-specific identity, delegation and risk state rather than only workload/user state? | **STRENGTHENED / W35 PRIORITY** | Agent-specific CAE / policy implementations and schemas |
| G-W50 | Which enforcement point can actually limit or terminate a running Agent session after trust changes? | **STRONGLY STRENGTHENED / open** | Resource-side CAE exists; need Agent-runtime termination / safe-degradation evidence |
| G-W51 | Can artifact provenance be correlated with SPIFFE-style live workload identity without collapsing their semantics? | **NEW / W35 PRIORITY** | Provenance-to-workload mappings and deployment examples |
| G-W52 | Do short-lived workload credentials reduce Agent incident blast radius without masking stale delegated authority? | **NEW / W35 PRIORITY** | Rotation and authorization-lifecycle evidence |
| G-W53 | Can break-glass Agent exceptions carry owner, scope, reason, expiry and audit evidence end to end? | **NEW / W35 PRIORITY** | Exception schemas, temporary access workflows and incidents |
| G-W54 | Do non-code Agent outputs gain publication, admission, supersession and revocation primitives? | **NEW / W35 PRIORITY** | Durable document/ticket/CRM/infrastructure examples |
| G-W55 | Can one incident correlation chain span Agent definition, identity, session, tool calls, artifact and runtime state? | **NEW / W35 PRIORITY** | Cross-system trace IDs and evidence graphs |
| G-W56 | Can resource-side token denial reliably trigger Agent-runtime cancellation or safe degradation rather than repeated failure loops? | **NEW / W35 PRIORITY** | Agent runtime cancellation APIs, retry policies and production incidents |
| G-W57 | Can CAE-style claims challenges preserve user delegation and Agent identity semantics across MCP, A2A and third-party SaaS resources? | **NEW / W35 PRIORITY** | Cross-protocol claims / authorization mappings and pilots |
| G-W58 | What happens to unsupported resources when the issuer revokes trust but no continuous-evaluation channel exists? | **NEW / W35 PRIORITY** | Mixed-resource incident evidence, token-lifetime and fallback policies |
