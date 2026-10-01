# 2026-10-02 NIST / MCP Evidence Reconciliation

## Purpose
This record preserves a forward correction/reconciliation discovered on 2026-10-02 Asia/Shanghai without rewriting earlier point-in-time observations.

## 1｜NIST chronology
Historical repository observations remain:
- 2026-09-29 observation cut: NIST NCCoE project retained as `Reviewing Comments`.
- 2026-09-30 observation cut: authoritative project page observed as `Soliciting Comments`; comments-summary resource newly observed.
- 2026-10-01 observation cut: current display and summary availability rechecked; summary publication date still retained as `UNVERIFIED`.

New evidence recovered on 2026-10-02:
- NIST publication notice is dated `2026-09-29`.
- The notice explicitly states NCCoE released the comments summary.
- Therefore comments-summary `publication_date=2026-09-29`.
- `later_correction_date=2026-10-02`.
- The project display `state_transition_date` remains `UNVERIFIED`.

```text
SUMMARY_PUBLICATION_DATE = 2026-09-29
PROJECT_STATE_TRANSITION_DATE = UNVERIFIED
LATER_CORRECTION_DATE = 2026-10-02
```

A publication date for one resource does not establish the exact transition time or sequence of the project status display.

## 2｜MCP Tasks chronology
Current official surfaces require a correction to the prior undifferentiated statement that the Tasks specification "remains Draft".

Recovered official repository chronology:
- `2026-08-24`: commit `0d0a6bd4c258b35caa3c810a1dd506cf105b1501` locks the `2026-07-28` specification/schema snapshot.
- Current official `ext-tasks` README labels `2026-07-28` as `Stable` and `draft` as `Development`.
- `2026-09-23`: commit `6c0997fbc040e6145c5cbd1e757aef9debb94303` introduces the TypeScript extension SDK; release `v0.2.0` is published the same date.
- `2026-09-30T22:23:51Z`: prerelease `v0.2.2` is published; its changelog is release-pipeline maintenance, not a new Tasks semantic maturity transition.
- 2026-10-02 current Python SDK roadmap still lists `io.modelcontextprotocol/tasks` as not yet implemented/deferred.

These facts were recovered by this observatory on 2026-10-02. Their original event/publication dates remain unchanged.

## 3｜Interpretation boundary
```text
SEP_FINAL_EXTENSIONS_TRACK
!= CORE_PROTOCOL_MATURITY

STABLE_VERSIONED_SCHEMA
!= CROSS_SDK_IMPLEMENTATION

TYPESCRIPT_EXTENSION_SDK
!= PYTHON_SDK_SUPPORT

SDK_SUPPORT
!= OPERATIONAL_CONFORMANCE

DURABLE_TASK_HANDLE
!= COMMITTED_EFFECT_INVENTORY
!= ROLLBACK_COMPENSATION
!= ACCEPTED_RECOVERY_COMPLETION
```

No portable successor-authority, complete durable-effect recovery, cross-SDK conformance or deployment claim is promoted.

## 4｜Repository mutations justified
- `SOURCE_REGISTRY.md`: durable current-state correction
- `ledger/events/2026.jsonl`: append-only correction/reconciliation events
- 2026-10-02 Daily / F1–F7: current observation
- W40 / October Monthly: current period reconciliation
- `watchlist/ACTIVE.md`: unchanged; open research questions remain open

## 5｜Sources
- NIST NCCoE project: https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization
- NIST dated publication notice: https://www.nist.gov/news-events/news/2026/09/comments-software-and-agentic-ai-identity-concept-paper
- NIST comments summary: https://pages.nist.gov/nccoe-ai-identity/summary-of-comments.html
- MCP SEP-2663: https://tasks.extensions.modelcontextprotocol.io/seps/2663-tasks-extension
- MCP ext-tasks repository: https://github.com/modelcontextprotocol/ext-tasks
- Stable snapshot commit: https://github.com/modelcontextprotocol/ext-tasks/commit/0d0a6bd4c258b35caa3c810a1dd506cf105b1501
- TypeScript SDK commit: https://github.com/modelcontextprotocol/ext-tasks/commit/6c0997fbc040e6145c5cbd1e757aef9debb94303
- Python SDK roadmap: https://github.com/modelcontextprotocol/python-sdk/blob/main/ROADMAP.md

## 6｜Historical preservation
No 2026-09-29, 2026-09-30 or 2026-10-01 Daily is rewritten. Later evidence changes current repository interpretation only through this forward correction chain.
