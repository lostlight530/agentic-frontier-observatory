# 2026-10-03 A2A CLI Evidence Reconciliation

## Purpose

Preserve a forward, source-grounded reconciliation observed on 2026-10-03 Asia/Shanghai without rewriting the historical A2A CLI release date or inflating tooling evidence into protocol maturity.

## 1｜Repository truth before this reconciliation

The observatory already tracked A2A protocol semantics, task lifecycle/reference boundaries and selected SDK authorization evidence. The durable Source Registry did not yet admit the official A2A CLI as its own implementation/tooling source.

This record changes current repository interpretation prospectively. It does not modify earlier Daily observations.

## 2｜External evidence

### A2A main documentation integration

A2A main commit:

- SHA: `27860f6444aea9b27961fdf51a00a567ea59068f`
- upstream commit/delivery timestamp: `2026-10-02T21:18:43Z`
- Asia/Shanghai equivalent: `2026-10-03T05:18:43+08:00`
- change: official A2A CLI blog/home-page entry

The commit is therefore inside the 2026-10-03 Asia/Shanghai observation window, while its upstream source timestamp remains 2026-10-02 UTC.

### A2A CLI release chronology

The official `a2aproject/a2a-cli` repository identifies the CLI as maintained by the A2A Project Team. Release history places `v0.3.0` at `2026-09-24T09:01:27Z`.

Documented CLI surfaces include Agent Card discovery, messaging, streaming, task lifecycle interaction, protocol-native structured output, built-in JSON-RPC/REST/gRPC support, custom transport plugins and an Agent Skill integration.

## 3｜Date/status interpretation

```text
CLI_V0_3_0_EVENT_DATE = 2026-09-24
CLI_V0_3_0_OBSERVED_AT = 2026-10-03
A2A_MAIN_DOCS_DELIVERY_MERGE = 2026-10-02T21:18:43Z
LOCAL_OBSERVATION_DATE = 2026-10-03 Asia/Shanghai
WEBSITE_PUBLICATION_TIMESTAMP = UNVERIFIED
PROTOCOL_TRANSITION_FROM_THIS_EVIDENCE = NOT_ESTABLISHED
```

The historical CLI release is not relabeled as a 2026-10-03 release. The docs integration is not converted into an A2A protocol-version transition.

## 4｜Capability and trust boundaries

The CLI provides a real first-party execution/client surface, so it is stronger evidence than a roadmap-only item. It does not by itself establish:

- independent cross-provider interoperability
- portable delegated authority
- cross-system revocation
- committed external-effect inventory
- rollback / compensation
- accepted recovery-completion proof
- independent operational conformance

```text
TOOL_IMPLEMENTATION
!= PROTOCOL_RELEASE
!= CROSS_PROVIDER_INTEROPERABILITY
!= PORTABLE_AUTHORITY
!= DURABLE_EFFECT_RECOVERY
```

The A2A main docs commit, CLI repository and CLI release page share one publisher/project lineage and are not counted as independent corroboration.

## 5｜Adjacent current-state rechecks

- NIST NCCoE current display remains `Soliciting Comments`; comments-summary `publication_date=2026-09-29`; project transition timestamp remains `UNVERIFIED`.
- MCP `ext-tasks` still separates Stable `2026-07-28` schema from Development `draft`.
- MCP Python SDK current `ROADMAP.md` still lists Tasks as not yet implemented/deferred.

An indexed experimental Tasks documentation page is not used to override the current-main Python SDK repository truth.

## 6｜Repository mutations justified

- `SOURCE_REGISTRY.md`: add `G-A2A-CLI` and correct stale MCP split-state prose
- `ledger/events/2026.jsonl`: append historical CLI release reconciliation and A2A docs-integration chronology
- 2026-10-03 Daily / F1–F7: record bounded material reconciliation
- W40 / October Monthly: update current coverage and relationship state
- `watchlist/ACTIVE.md`: unchanged

## 7｜Runner / validation boundary

Executed: first-party repository, release and current-main documentation inspection; date conversion; main/open-PR/period-state reconciliation.

Not executed here: running the CLI against independent third-party A2A agents; protocol TCK/conformance testing; cross-provider authorization/recovery experiments.

## 8｜Sources

- https://github.com/a2aproject/A2A/commit/27860f6444aea9b27961fdf51a00a567ea59068f
- https://github.com/a2aproject/a2a-cli
- https://github.com/a2aproject/a2a-cli/releases/tag/v0.3.0
- https://github.com/a2aproject/A2A/releases
- https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization
- https://www.nist.gov/news-events/news/2026/09/comments-software-and-agentic-ai-identity-concept-paper
- https://github.com/modelcontextprotocol/ext-tasks
- https://github.com/modelcontextprotocol/python-sdk/blob/main/ROADMAP.md
