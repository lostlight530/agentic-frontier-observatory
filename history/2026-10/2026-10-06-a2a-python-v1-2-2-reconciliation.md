# 2026-10-06 A2A Python SDK v1.2.2 Reconciliation

## Identity
- Repository: `lostlight530/agentic-frontier-observatory`
- Record type: `SDK_RUNTIME_RELEASE_RECONCILIATION`
- External object: `a2aproject/a2a-python v1.2.2`
- Observed at: `2026-10-06 Asia/Shanghai`

## Date planes
- Release-note version date: `2026-10-03`
- GitHub release publication: `2026-10-05T09:50:04Z`
- `state_transition_date` for public SDK release: `2026-10-05T09:50:04Z` (directly evidenced by the release object)
- Observatory observation: `2026-10-06`
- Repository delivery/merge date: separate GitHub repository plane

## Verified release content
- configurable SSE shutdown grace periods
- REST error-body handling fix
- v0.3 conversion compatibility fixes
- terminal-state error reporting fix
- push-notification config stored-id fix
- malformed JSON-RPC traceback suppression

Primary source: https://github.com/a2aproject/a2a-python/releases/tag/v1.2.2

## Interpretation
The release is durable SDK/runtime implementation evidence. It is not a new A2A protocol release, independent cross-SDK conformance result, portable authority model or durable-effect recovery proof.

```text
RELEASE_NOTE_DATE != PUBLICATION_TIMESTAMP != OBSERVED_AT != REPOSITORY_MERGE_DATE
SDK_RELEASE != PROTOCOL_RELEASE
GRACEFUL_SHUTDOWN != REVOCATION != ROLLBACK != RECOVERY_COMPLETION
```

## Durable effects
- Source Registry: admit `G-A2A-PYTHON-1-2-2`
- Ledger: append `G-2026-A2A-PYTHON-1-2-2`
- History: this record
- Watchlist: unchanged
- W41 H41-1: strengthened within same project lineage; no independent-source credit
- October Monthly: remains OPEN
