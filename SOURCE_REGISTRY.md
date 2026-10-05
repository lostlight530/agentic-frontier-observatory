> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `SOURCE REGISTRY`
> - **Role:** Current admitted source-identity registry and bounded current-state notes for recurring observatory evidence surfaces
> - **Authority:** Current registry authority for the source identities actually listed here
> - **Current meaning:** `Updated through` is a registry-cutoff statement, not a claim that the entire observatory or external world was last observed on that date. Newer periodic sources may exist before formal registry admission
> - **Evidence boundary:** Registry presence does not equal independent corroboration, truth, current deployment or universal authority. Each source remains proposition-, version-, date- and scope-bounded
> - **Cross-document relation:** Methodology defines source levels and independence; reports may cite newer time-scoped sources; durable admission here should occur only when identity/ownership/relevance are clear
> - **Update trigger:** Update when a source becomes a recurring durable evidence surface, when identity/status notes need correction, or when a listed current-state note is materially stale
> - **Preservation rule:** The existing subject remains the owning repository document. Dated origin/status statements keep their original time boundary; later evidence changes current interpretation through explicit edits rather than silent historical rewrite

# Source Registry / 权威信源注册表

Updated through: **2026-10-06**

| ID | Level | Source | Coverage | URL |
|---|---|---|---|---|
| G-DARTMOUTH-STORY | G1 | Dartmouth AI | 1956 field formation | https://ai.dartmouth.edu/our-story |
| G-STANFORD-INDEX-2026 | G1 | Stanford HAI | 2026 global AI index | https://hai.stanford.edu/ai-index/2026-ai-index-report |
| G-TRANSFORMER | G3 | Original paper | Transformer architecture | https://arxiv.org/abs/1706.03762 |
| G-OPENAI-RELEASE-NOTES | G2 | OpenAI | ChatGPT product chronology | https://help.openai.com/en/articles/6825453-chatgpt-release-notes |
| G-OPENAI-DOTS-2026-09-29 | G2 | OpenAI | Dots always-on ChatGPT agent surface; cloud computer + connected-app execution under product controls; product implementation != portable protocol/authority | https://help.openai.com/en/articles/6825453-chatgpt-release-notes |
| G-OPENAI-API-CHANGELOG | G2 | OpenAI API | Dated API/model implementation chronology; 2026-09-29 includes Agents API computer use and GPT-6.1 Sol/multi-agent beta changes | https://developers.openai.com/api/docs/changelog |
| G-ANTHROPIC-SONNET-5-5 | G2 | Anthropic | Claude Sonnet 5.5 first-party release dated 2026-09-28; model/provider evidence, not protocol or independent reproduction | https://www.anthropic.com/claude-sonnet-5-5 |
| G-OPENAI-PRESENCE | G2 | OpenAI | Production-agent policy and escalation | https://openai.com/index/introducing-openai-presence/ |
| G-OPENAI-AGENT-SIGNED-REQUESTS | G2 | OpenAI | ChatGPT agent signed outbound HTTP requests and allowlisting | https://help.openai.com/en/articles/11845367 |
| G-OPENAI-WORKSPACE-AGENTS | G2 | OpenAI | Workspace Agent publishing, RBAC, connections, schedules, API triggers, approvals and constraints | https://help.openai.com/en/articles/20001143-chatgpt-workspace-agents-for-enterprise-and-business |
| G-OPENAI-CODEX-REVIEW | G2 | OpenAI | Codex PR review, intent-vs-diff reasoning and test execution | https://openai.com/index/introducing-upgrades-to-codex/ |
| G-OPENAI-REALTIME-CANCEL | G0 | OpenAI API | In-progress response cancellation; cancelled response state while Realtime session remains | https://platform.openai.com/docs/api-reference/realtime-client-events |
| G-GITHUB-AGENT-CONTROL-PLANE | G2 | GitHub | Enterprise Agent sessions, audit, policies and MCP governance | https://github.blog/changelog/2026-02-26-enterprise-ai-controls-agent-control-plane-now-generally-available/ |
| G-GITHUB-SESSION-STREAMING | G2 | GitHub | Agent session prompts, responses, tool calls, streaming and REST usage records | https://github.blog/changelog/2026-07-02-copilot-agent-session-streaming-is-now-in-public-preview/ |
| G-GITHUB-AGENT-COMMIT-PROVENANCE | G2 | GitHub | Agent-authored commits and back-link to session logs | https://github.blog/changelog/2026-03-20-trace-any-copilot-coding-agent-commit-to-its-session-logs/ |
| G-GITHUB-COPILOT-APP-POLICY | G2 | GitHub | Isolated Agent workspaces landing changes through PR reviews, checks and audit history | https://github.blog/changelog/2026-07-27-manage-github-copilot-app-access-with-a-dedicated-policy/ |
| G-GITHUB-CHAT-SESSION-LOGS | G2 | GitHub | Session search and session-log retrieval from PR-associated Agent work | https://github.blog/changelog/2026-06-10-copilot-chat-now-sees-your-agent-sessions/ |
| G-GITHUB-AGENT-SESSION-MANAGEMENT | G0 | GitHub Docs | Monitor, steer and stop Agent sessions; Stop session ends Actions run while preserving pushed commits | https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents |
| G-GITHUB-PR-REVERT | G0 | GitHub Docs | Reverting a merged pull request creates a new PR that reverts the original merge commit | https://docs.github.com/en/enterprise-cloud@latest/pull-requests/how-tos/merge-and-close-pull-requests/reverting-a-pull-request |
| G-GITHUB-ARTIFACT-ATTESTATIONS | G0 | GitHub Docs | Signed build provenance, artifact digest, source SHA, workflow, environment and triggering event | https://docs.github.com/en/actions/concepts/security/artifact-attestations |
| G-GITHUB-ATTESTATION-USAGE | G0 | GitHub Docs | Generating and verifying artifact attestations | https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations |
| G-GITHUB-SLSA-L3 | G0 | GitHub Docs | Reusable workflows + artifact attestations for SLSA v1 Build Level 3 | https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/increase-security-rating |
| G-GITHUB-ATTESTATION-ADMISSION | G0 | GitHub Docs | Kubernetes admission enforcement for artifact attestations with Sigstore Policy Controller | https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/enforce-artifact-attestations |
| G-GITHUB-K8S-ADMISSION | G0 | GitHub Docs | TrustRoot, ClusterImagePolicy and image-admission verification model | https://docs.github.com/en/actions/concepts/security/kubernetes-admissions-controller |
| G-GITHUB-ATTESTATION-LIFECYCLE | G0 | GitHub Docs | Finding, deleting and lifecycle-managing attestations | https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/manage-attestations |
| G-GITHUB-OPA-ATTESTATION | G2 | GitHub Changelog | OPA Gatekeeper support for attestation-based Kubernetes admission policy | https://github.blog/changelog/2025-06-24-enforce-admission-policies-with-artifact-attestations-in-kubernetes-using-opa-gatekeeper/ |
| G-MS-FOUNDRY-HOSTED-SESSION-MANAGEMENT | G0 | Microsoft Learn | Hosted Agent session stop; terminate running compute while preserving persistent filesystem state for resume | https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/manage-hosted-sessions |
| G-GOOGLE-COMPUTER-USE | G2 | Google | Built-in computer use | https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/ |
| G-ANTHROPIC-MCP | G2 | Anthropic | MCP launch | https://www.anthropic.com/news/model-context-protocol |
| G-MCP-2026-07-28 | G0 | Model Context Protocol | 2026-07-28 specification; stateless core and formal extension framework including Tasks | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| G-MCP-TASKS-EXTENSION | G0 | Model Context Protocol Tasks Extension | `SEP-2663` is Final on the Extensions Track; official `ext-tasks` publishes an immutable Stable `2026-07-28` schema while `draft` remains the Development track; extension/schema status != core-protocol maturity | https://tasks.extensions.modelcontextprotocol.io/seps/2663-tasks-extension |
| G-MCP-TASKS-EXT-TASKS | G0 | Model Context Protocol `ext-tasks` | Official Tasks extension schema/TypeScript SDK repository; Stable `2026-07-28` schema locked 2026-08-24; TypeScript extension SDK introduced 2026-09-23; GitHub `v0.2.2` published 2026-09-30T22:23:51Z and marked prerelease while npm exposes public package `0.2.2`; release label, package availability, extension status, cross-SDK implementation and operational conformance remain separate | https://github.com/modelcontextprotocol/ext-tasks |
| G-MCP-EMA | G0 | Model Context Protocol | Enterprise-Managed Authorization | https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/ |
| G-A2A | G0 | A2A Project | Agent interoperability specification | https://a2a-protocol.org/latest/ |
| G-A2A-DEFINITIONS | G0 | A2A Project | Normative protocol definitions; Message `referenceTaskIds` / `reference_task_ids` references Task IDs for additional context | https://a2a-protocol.org/latest/definitions/ |
| G-A2A-TASK-LIFECYCLE | G0 | A2A Project | Stateful task IDs, terminal task states, artifacts/history and context continuity across related tasks | https://a2aproject.github.io/A2A/latest/topics/life-of-a-task/ |
| G-A2A-CLI | G2 | A2A Project | Official A2A command-line client; v0.3.0 released 2026-09-24; official A2A main docs/home integration observed 2026-10-03 Asia/Shanghai; tooling implementation != protocol transition/conformance | https://github.com/a2aproject/a2a-cli |
| G-A2A-PYTHON-1-2-2 | G2 | A2A Project Python SDK | `v1.2.2`; release-note version date 2026-10-03; GitHub published 2026-10-05T09:50:04Z; SSE shutdown grace-period configuration plus REST/compatibility/terminal-state/push-config fixes; SDK/runtime implementation != protocol release != cross-SDK conformance | https://github.com/a2aproject/a2a-python/releases/tag/v1.2.2 |
| G-A2A-JAVA-1.2-AUTH | G2 | A2A Project Java SDK | 1.2.0.Final released 2026-08-07; read-authorization hardening for referenced-task lookups; first observed by this repository 2026-08-31 | https://a2aproject.github.io/a2a-java/posts/a2a-java-sdk-1-2-0-final-released/ |
| G-A2A-JAVA-TASK-AUTH | G2 | A2A Project Java SDK | Per-user Task read/write/create authorization model across Task operations | https://a2aproject.github.io/a2a-java/1_2_0_Final/authorization/ |
| G-ITU-F74893 | G0 | ITU-T SG21 | F.748.93 Framework and Requirements for AI Agent Interoperability; Approved 2026-08-29; current status `In force (prepublished)`; English files available 2026-09-09; implementation/conformance unverified | https://www.itu.int/rec/T-REC-F.748.93-202608-P/en |
| G-ARD-SPEC | G0 | ARD Project | Federated discovery draft | https://github.com/ards-project/ard-spec |
| G-GITHUB-AGENT-FINDER | G2 | GitHub | Governed resource discovery | https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/ |
| G-MS-ENTRA-AGENT-ID | G2 | Microsoft | First-class agent identity and governance | https://learn.microsoft.com/en-us/entra/agent-id/ |
| G-MS-ENTRA-AGENT-GOVERNANCE | G2 | Microsoft | Agent sponsors, access packages, expiry and Conditional Access | https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview |
| G-MS-ENTRA-AGENT-CA | G2 | Microsoft | Conditional Access subject/audience semantics for Agents and resource-scoped access | https://learn.microsoft.com/en-us/entra/identity/conditional-access/agent-id |
| G-MS-ENTRA-WORKLOAD-CAE | G2 | Microsoft | Continuous Access Evaluation for workload identities; resource-side token rejection, revocation events and claims challenges | https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-continuous-access-evaluation-workload |
| G-GCP-AGENT-IDENTITY | G2 | Google Cloud | Attested Agent Identity | https://docs.cloud.google.com/iam/docs/agent-identity-overview |
| G-AWS-AGENTCORE-IDENTITY | G2 | AWS | AgentCore Identity, credential and consent surfaces | https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity.html |
| G-AWS-AGENTCORE-RUNTIME | G2 | AWS | AgentCore Runtime product architecture and 2026-09-18 Runtime V2 announcement | https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts/ |
| G-AWS-AGENT-REGISTRY | G2 | AWS | Agent Registry record lifecycle, approval and discoverability semantics | https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-record-lifecycle.html |
| G-RFC-9421 | G0 | IETF / RFC Editor | HTTP Message Signatures | https://www.rfc-editor.org/rfc/rfc9421 |
| G-IETF-WEB-BOT-AUTH | G0 | IETF Internet-Draft | HTTP Message Signatures for automated traffic architecture | https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/ |
| G-CLOUDFLARE-WEB-BOT-AUTH | G2 | Cloudflare | Operational Web Bot Auth verification for bots and agents | https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/ |
| G-CLOUDFLARE-VERIFIED-AGENTS | G2 | Cloudflare | Verified bots and signed-agent handling | https://developers.cloudflare.com/bots/concepts/bot/verified-bots/ |
| G-NIST-IDENTITY | G1 | NIST NCCoE | Historical concept-paper identity remains Software and AI Agent Identity and Authorization; current NCCoE project surface observed 2026-10-03 displays Software and SI Agent Identity and Authorization with status `Soliciting Comments`; exact naming-display transition timestamp and project status-transition timestamp remain unverified | https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization |
| G-NIST-IDENTITY-COMMENTS-SUMMARY | G1 | NIST NCCoE | Summary of Comments on the Concept Paper; publication_date `2026-09-29` verified by NIST publication notice; first repository observation 2026-09-30; later correction 2026-10-02; feedback synthesis, not normative conformance | https://pages.nist.gov/nccoe-ai-identity/summary-of-comments.html |
| G-NIST-ZTA-RUNTIME | G1 | NIST | Continuous access evaluation; continue, limit or revoke active sessions | https://pages.nist.gov/zero-trust-architecture/VolumeB/architecture.html |
| G-NIST-ZTA-207A | G1 | NIST | Identity-tier policy enforcement for cloud-native multi-cloud applications | https://csrc.nist.gov/pubs/sp/800/207/a/final |
| G-SPIFFE-CONCEPTS | G0 | SPIFFE | Short-lived workload identity, automatic credential rotation and trust bundles | https://spiffe.io/docs/latest/spiffe/concepts/ |

## Current-state notes / 当前状态注记

- F.748.93 was **Approved on 2026-08-29**; the Recommendation surface now reports **`In force (prepublished)`**, with English files available **2026-09-09**. Publication availability is standards-lifecycle evidence, not proof of implementation, conformance or deployed interoperability.
- A2A normative definitions include generic `referenceTaskIds` for additional context. This is not typed predecessor/supersedes/repairs/compensates recovery lineage.
- A2A Java SDK 1.2.0.Final hardened read authorization on referenced-task lookup. **Task reference ≠ Task authority.**
- The official A2A CLI is admitted as a G2 tooling source. Release `v0.3.0` remains dated 2026-09-24; A2A main integrated an official CLI docs/home entry in commit `27860f6444aea9b27961fdf51a00a567ea59068f`, observed 2026-10-03 Asia/Shanghai. **Official CLI implementation != new protocol release != independent interoperability/conformance evidence.**
- NIST NCCoE Software and AI Agent Identity and Authorization was retained historically as **Reviewing Comments** through the 2026-09-29 observation cut. On 2026-09-30 the authoritative project page displays **Soliciting Comments** and exposes a comments-summary resource hub. The exact state-transition timestamp remains unverified. The summary publication date is now verified as 2026-09-29 by a dated NIST publication notice; this date correction was observed on 2026-10-02 and does not rewrite the earlier point-in-time observation.
- A later 2026-10-03 authoritative recheck observes the current NCCoE project surface under **Software and SI Agent Identity and Authorization**, while the lifecycle display remains **Soliciting Comments**. NIST's CSRC concept-paper page separately states that, per the 2026-09-29 Executive Order on Inaugurating the Era of Super Intelligence, NIST is updating communications to use the term `super intelligence`. Preserve the historical AI-titled concept paper and earlier point-in-time observations; the exact project-page naming/display transition timestamp remains **UNVERIFIED**. These NIST surfaces share one institutional lineage and do not add independent-evidence credit.
- A later 2026-09-19 independent recheck recovered AWS first-party evidence absent from the initial Daily: a Runtime announcement dated 2026-09-18, an AWS-managed end-user Consent Portal, and Agent Registry approval/discovery lifecycle documentation. These are product-local AWS surfaces. Runtime performance/adoption statements remain provider claims unless independently reproduced; consent and registry approval do not establish portable successor authority, runtime authorization or recovery completion.
- MCP `SEP-2663` is **Final on the Extensions Track**. The official `ext-tasks` repository now distinguishes an immutable **Stable `2026-07-28` schema** from a separate **Development `draft`** track; repository chronology shows the stable snapshot was locked 2026-08-24 and the TypeScript extension SDK was introduced 2026-09-23. The Python SDK still lists Tasks as not yet implemented. `EXTENSION/SCHEMA STATUS != SDK IMPLEMENTATION != CORE-PROTOCOL MATURITY != OPERATIONAL CONFORMANCE`.

- A2A Python SDK `v1.2.2` is a durable G2 implementation/runtime source. Preserve its release-note version date (`2026-10-03`), GitHub publication timestamp (`2026-10-05T09:50:04Z`) and observatory observation (`2026-10-06`) separately. SSE shutdown grace-period configuration and compatibility/error-handling fixes are SDK evidence only; they do not establish a new A2A protocol release, cross-SDK conformance, portable authority, durable-effect rollback or recovery completion.

## Maintenance rule / 维护规则

A source enters this registry only when its identity, ownership, and relevance are clear. Draft status and implementation status must remain explicit. Architecture convergence must not be mislabeled protocol convergence. Product-local workspace governance must not be mislabeled open cross-platform governance. Session telemetry must be distinguished from correctness and authorization proof. Product-specific commit/session linkage must not be mislabeled a universal Agent provenance standard. Artifact attestations establish build provenance and integrity evidence, not software safety, delegated-authority validity, or deployment authorization. Admission enforcement proves that configured policy can gate runtime entry; it does not prove ongoing runtime compliance. NIST Zero Trust runtime guidance is a general access-control architecture, not an Agent-specific revocation standard. SPIFFE workload identity must not be conflated with Agent delegation, build provenance or business authority. Microsoft Entra workload-identity CAE is strong implementation evidence for resource-side revocation enforcement in its documented scope; it must not be generalized to all resources, all identities, or universal Agent runtime termination. GitHub and Microsoft Foundry stop controls prove explicit runtime termination but not automatic policy-to-stop propagation. OpenAI Realtime cancellation is operation-level evidence, not Agent-session termination. GitHub revert semantics are code-change remediation evidence and must not be generalized into automatic rollback of arbitrary Agent side effects. A2A terminal-task semantics and MCP durable task identity strengthen recovery-state modeling, but neither proves a universal recovery protocol, automatic compensation, complete side-effect discovery, or inherited authority for a new recovery task. MCP Tasks extension detail must preserve the split state: `SEP-2663` Final on the Extensions Track, immutable Stable `2026-07-28` extension schema, separate Development `draft`, and SDK-specific implementation status; none of those facts alone establishes finalized core-protocol maturity or operational conformance. **Consent, approval, publication, implementation and conformance are separate protocol/standards states. Generic A2A Task references prove contextual linkage exists; they do not define typed recovery lineage, and referencing a Task does not authorize reading or controlling it.**

## 2026-09-30 NIST identity/governance current-state update

The newly observed NIST comments summary synthesizes stakeholder feedback around existing identity foundations, stable trust anchors with ephemeral/scoped credentials, task/context-aware authorization, delegation/accountability, signed intent and logically separate governance/control layers. It is admitted as a G1 project/governance source, not as a normative standard, cross-provider implementation, operational conformance result or recovery-completion proof.


## 2026-10-04 W40 post-hoc special-event admission
A post-settlement special reconciliation admitted three durable first-party source identities relevant to the W40 omission review: OpenAI dots, the dated OpenAI API changelog, and Anthropic Sonnet 5.5.

The events retain original external dates while repository observation/reconciliation remains 2026-10-04.

```text
EXTERNAL_EVENT_DATE != REPOSITORY_OBSERVATION_DATE
SOURCE_REGISTRY_ADMISSION != INDEPENDENT_CORROBORATION
PRODUCT_IMPLEMENTATION != PROTOCOL_CONFORMANCE
```

See `reports/weekly/2026/2026-W40-special-reconciliation-2026-10-04.md`.
