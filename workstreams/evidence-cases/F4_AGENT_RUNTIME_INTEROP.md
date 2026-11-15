# F4 — Agent runtime and protocol interoperability evidence cases

**Subject class:** F4 domain-method companion, **not** a new F-series workstream or current vendor-state claim  
**Source owner:** [F4 Agents, Runtimes, Harnesses, and Protocols](../04-agentic-systems.md)  
**Research cutoff:** 2026-11-15, method derived from current F4/Methodology/Taxonomy, no new external deployment observed

## 1 — Tested object, not a label / 被测对象与系统身份

An interoperability proposition must identify **both implementations**, not only protocol families

`(client implementation + commit/version, server implementation + commit/version, transport/security profile, protocol version and extensions, tool and task schemas, principal/credential, delegated authorization, data and state store, evaluator, runtime environment)`

The same nominal protocol may be configured with different task persistence, authentication, approval or retry policies, so "implements protocol X" does not by itself identify comparable behavior

## 2 — Evidence layers / 可判别的证据层

| Layer | What would actually support it | Does not by itself establish |
| --- | --- | --- |
| `SPEC_DEFINED` | Exact official revision, clause and stated capability | Shipping code or real deployment |
| `SDK_PATH_LOCATED` | Exact source revision and implementing entrypoint | Correct invocation under the deployed configuration |
| `INTEROP_EXCHANGE_OBSERVED` | Versioned two-endpoint transcript, negotiated profile, messages, statuses, failures | External effect completion or security |
| `AUTH_DECISION_OBSERVED` | Authenticated subject, resolved resource, requested operation, scope/expiry and enforcement result | Effect sink completed the operation |
| `EFFECT_VERIFIED` | Provider-side read-back or authoritative effect receipt, target identity and comparison criterion | Compensation, idempotency or future authorization |
| `RESTART_RECOVERY_VERIFIED` | Restart fixture, durable state identity, pending-effect reconciliation and observed terminal condition | Universal exactly-once semantics |
| `DEPLOYMENT_OBSERVED` | Named deployment configuration, population, period, metric and independent context | All implementations are mature or interoperable |

None of these stages is automatically implied by the existence of the one above it

## 3 — Source-derived negative research cases / 必须能识别的反例

**F4-A: discovery without authority** — a service announces a tool and caller can resolve an endpoint, but the authenticated principal has no permitted action on the selected target, describe discovery as observed and authorization as denied or unknown, not as operational access

**F4-B: handshake without task durability** — two endpoints exchange valid protocol messages but the server keeps the task only in process memory, restart and loss of the task are possible, protocol exchange does not prove durable execution

**F4-C: idempotency key without effect-side guarantee** — an agent sends the same key twice after a timeout but the external sink does not durably deduplicate the operation, repeated effects remain possible, caller-side retry policy is insufficient

**F4-D: cancelled task after irreversible effect** — the task runner reports cancellation, but the remote tool had already committed a purchase, edit or external mutation, cancellation is not compensation or completed remediation

**F4-E: version skew** — release documentation shows one protocol revision while a particular SDK/server pair negotiates or implements a subset, judge that pair and configuration, not the name of the protocol family

**F4-F: agreement without external validation** — independent agents reach the same statement after consuming one incorrect primary lineage, convergence of language does not establish factual correctness

These are **research fixtures to construct**, not claims that the observatory executed or discovered particular products in these states

## 4 — Minimum retained observation / 复核最小证据封套

Record `source_version, repository_SHA, endpoint_A_and_B_versions, protocol_profile, task_ID_and_store, authenticated_actor, delegated_authority, resolved_target, command_and_input, exact_message_trace, acknowledgement, effect_receipt, retry/cancel/restart_events, observed_terminal_state, unknown_outcomes, negative_case, comparison_basis, observation_date`

Only include a field as observed when the owning evidence exists, explicitly label missing information `UNKNOWN` rather than manufacturing a pass/fail status

## 5 — Handoff ownership

F4 owns the **mechanism-specific** proposition and negative cases, F2 owns model-level comparison, F5 owns security/evaluation/governance evidence, F6 owns adoption denominators, F7 reconciles reused source lineage

This method does not reclassify any historical report or establish current MCP/A2A/vendor interoperability, fresh external source checks and live endpoint trials are `NOT_EXECUTED`
