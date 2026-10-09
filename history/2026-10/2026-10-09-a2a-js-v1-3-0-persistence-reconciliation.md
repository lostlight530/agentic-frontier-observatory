# 2026-10-09 — A2A JavaScript SDK v1.3.0 persistence late reconciliation

## Identity and chronology
- Object: `a2aproject/a2a-js` GitHub release `v1.3.0`.
- Release-note version date: **2026-09-29**.
- GitHub `published_at`: **2026-09-29T10:40:16Z**.
- Observatory `observed_at`: **2026-10-09 Asia/Shanghai**.
- Current README/persistent-stores guide: observed **2026-10-09**, exact first-publication/change date of each documentation statement **UNVERIFIED**.
- No new `state_transition_date` is assigned to protocol, deployment or conformance.

## Direct publisher evidence
- Release: https://github.com/a2aproject/a2a-js/releases/tag/v1.3.0 — feature: database-backed task and push-notification stores.
- Current guide: https://github.com/a2aproject/a2a-js/blob/main/docs/persistent-stores.md — `DatabaseTaskStore`, `DatabasePushNotificationStore`, database drivers, `a2a-db` migrations, `ownerResolver` scoping, plaintext webhook credentials and completed-task config retention.
- README: https://github.com/a2aproject/a2a-js — current implementation and documented database support.

## Narrow admitted claim
`PROJECT_FACT`: the A2A JS SDK added database-backed task/push configuration store implementations in the 2026-09-29 release. Current docs describe persistence of task snapshots, status, message history and artifacts, with optional configured storage. The current guide also documents plaintext storage of webhook credentials and retention until client deletion. No live database, restart behavior or attack was independently executed by the observatory.

## Strong counterexample / boundary
```text
PERSISTENT_TASK_RECORD != ACTIVE_WORKER_RESUMPTION
TASK_STATE != COMMITTED_EXTERNAL_EFFECT_INVENTORY
PERSISTENT_CREDENTIAL != CURRENT_DELEGATED_AUTHORITY
SAME_PROJECT_SDK_BREADTH != INDEPENDENT_CONFORMANCE
SECURITY != EXECUTION != DURABLE EFFECTS != RECOVERY
```

A database can retain a task record while an external side effect has already committed and is not enumerated in the record; a fresh recovery actor may require reauthorization. An ownerResolver change can make existing rows unreachable. These are bounded counterexample scenarios, not claims that the SDK suffered a production failure.

## W41 and durability disposition
- H41-1: further implementation breadth **within the A2A lineage**, remains `STRENGTHENED_WITHIN_A2A_LINEAGE / OPEN`.
- H41-2/H41-3: unchanged.
- Source Registry: add exact recurring source identity `G-A2A-JS-1-3-0`.
- Ledger: append durable SDK release event `G-2026-A2A-JS-1-3-0`, preserving 2026-09-29 release time and 2026-10-09 observation separately.
- Watchlist: unchanged; no verified watch-state closure, protocol transition, conformance result or accepted recovery transition.
- External deployment/conformance/security tests: `NOT_EXECUTED`.
