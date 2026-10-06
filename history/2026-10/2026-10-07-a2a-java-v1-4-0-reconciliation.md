# 2026-10-07 A2A Java v1.4.0.Final Reconciliation

## Identity
- Repository: `lostlight530/agentic-frontier-observatory`
- Record type: `SDK_RUNTIME_TEST_IMPLEMENTATION_RECONCILIATION`
- External object: `a2aproject/a2a-java v1.4.0.Final`
- Observed at: `2026-10-07 Asia/Shanghai`

## Date planes
- event date: `2026-09-28`
- GitHub publication/state transition to public SDK release: `2026-09-28T17:07:49Z`
- observatory observation/reconciliation date: `2026-10-07`
- repository delivery/merge date: separate GitHub plane

## Verified release content
- ACTS SUT behavior implementation for the ITK agent
- SSE parser configuration/runtime changes
- complete TaskAuthorizationProvider example
- failed terminal-enqueue recovery handling
- multiple compatibility/runtime fixes

Primary source:
https://github.com/a2aproject/a2a-java/releases/tag/v1.4.0.Final

## Boundary
```text
SDK_RELEASE != PROTOCOL_RELEASE
ACTS_SUT_BEHAVIOR != PASSED_CONFORMANCE
RUNTIME_RECOVERY_FIX != DURABLE_EFFECT_RECOVERY_COMPLETION
SAME_A2A_PROJECT_LINEAGE != INDEPENDENT_SUPPORT
```

## Durable effects
- Source Registry: admit `G-A2A-JAVA-1-4-0`
- Ledger: append `G-2026-A2A-JAVA-1-4-0`
- W41 H41-1: further strengthened within A2A lineage / remains OPEN
- G-W02: remains OPEN
- October Monthly: remains OPEN
