> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `EXTENSION / WORKSTREAM`
> - **Role:** F4 durable responsibility contract for agents, runtimes, harnesses, protocols, discovery, identity, authorization, task state, recovery, and long-horizon execution
> - **Authority:** Current F4 subject-boundary authority
> - **Current meaning:** Resolve every claim to the exact layer—model, harness, runtime, protocol, identity, credential, authority, task service, or application—and preserve state/recovery/authorization ownership
> - **Evidence boundary:** discovery != identity != credential != authority; request accepted != task completed; runtime stop != rollback; state continuity != authority continuity; protocol publication != operational maturity
> - **Cross-document relation:** Workstream findings are normalized by Taxonomy and governed by Methodology; source identities remain in Source Registry; F7 may synthesize but cannot upgrade evidence strength by aggregation
> - **Update trigger:** Update only when this workstream's durable responsibility, comparison layer, or evidence boundary changes—not for routine Daily/Weekly/Monthly findings
> - **Preservation rule:** Periodic observations remain in their dated artifacts. This file owns the stable research responsibility only

# F4｜Agents, Runtimes, Harnesses, and Protocols / 智能体、运行时、Harness 与协议

F4 owns the observatory's agentic-systems surface: tool use, memory, sandboxes, computer use, orchestration, durable tasks, recovery, MCP, A2A and related protocols, discovery, identity, credentials, authorization, delegation, consent, revocation, and long-horizon execution.

## Core questions

- What exact layer is being described: model, harness, runtime, protocol, identity system, authorization layer, task service, or application?
- Who can discover whom, identify whom, authenticate whom, authorize what, and revoke what?
- Does the mechanism describe a declaration/interface, or an executed/observed effect?
- Which state is durable, who owns it, and what survives process/session/task boundaries?
- What are the stop, cancellation, rollback, retry, recovery, and compensation semantics?
- Which claims are protocol requirements versus implementation choices or deployment policy?

## Preferred evidence

Prefer official protocol/specification text, maintainers' release material, versioned SDK/runtime documentation, source repositories, security models, and named production/implementation evidence. Independent security/evaluation research strengthens deployment-risk claims when its system assumptions match.

## Agentic boundary vocabulary

```text
capability != deployability
discovery != identity != credential != authority
authorization decision != successful invocation
protocol consent != organizational approval
request accepted != task completed
runtime stop != rollback
termination != remediation
state continuity != authority continuity
task reference != task authority
```

A protocol version can establish protocol semantics. It does not prove every SDK, runtime, application, or deployment has implemented that version correctly.

## Interoperability discipline

MCP, A2A, identity/auth standards, task protocols, payment/commerce layers, and vendor runtimes may be complementary, overlapping, or independent. Do not invent a universal stack ordering without primary support.

A compatibility claim should name both sides, relevant versions, directionality, required extensions/profile, and the evidence showing actual interoperability.

## Handoff to F7

F4 contributes the exact system/protocol/version, layer, maturity state, identity/authority model, state/recovery semantics, implementation/deployment evidence, conflicts, and explicit non-claims.

F4 does not infer security, autonomy, operational maturity, or real-world adoption merely from a protocol/specification existing.
