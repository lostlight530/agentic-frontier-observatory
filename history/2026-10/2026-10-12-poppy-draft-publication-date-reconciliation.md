# Poppy draft publisher-date correction — 2026-10-12 (Asia/Shanghai)

## Evidence
- Sierra first-party publisher-dated post (2026-10-09): https://sierra.ai/blog/poppy
- Poppy specification Draft 0.1, site Updated 2026-10-09: https://personalagentprotocol.org/docs/spec
- Earlier initiative announcement (2026-10-06): https://sierra.ai/blog/introducing-personal-agent-protocol
- Prior observatory cut: history/2026-10/2026-10-11-poppy-draft-0-1-reconciliation.md and 2026-10-11 Daily

## Temporal contract
| Field | Supported value | Boundary |
| --- | --- | --- |
| initiative announcement event_date / publication_date | 2026-10-06 | announcement, not draft release |
| publisher-declared draft publication_date | 2026-10-09 | Sierra says it publishes the draft that day |
| draft site Updated label | 2026-10-09 | not independently a first-access timestamp |
| observed_at / later correction | 2026-10-12 Asia/Shanghai | late discovery, not new external publication |
| initial public-access timestamp / earlier availability | UNVERIFIED | no timestamp or proof of earliest availability |
| effective_date | NOT_APPLICABLE_DRAFT | draft, not effective standard |
| stable protocol / deployed implementation / conformance / recovery state_transition_date | UNVERIFIED | no established transition |
| delivery / merge | separate GitHub metadata | maintainer review pending |

## Forward correction
The 2026-10-11 record correctly noted unknown initial draft publication at that observation cut. The 2026-10-12 check finds a dated first-party publisher claim supporting 2026-10-09 as the publisher-declared draft publication date, without proving the exact first-access timestamp. Preserve the October 9 Daily, October 11 Daily/history/ledger and W41 final unchanged; this correction is additive and does not backfill a producer-native Daily.

Sierra also attributes 35 additional design partners and a live demo to its initiative. These are publisher claims, not independent adoption, conformance, at-most-once durable-effect or recovery proof. Sierra and Poppy project pages share one initiative lineage; zero independent-source strengthening.

ANNOUNCEMENT_DATE != DRAFT_PUBLICATION_DATE != OBSERVATION_DATE
PUBLISHER_DATE != EXACT_FIRST_ACCESS_TIMESTAMP
DRAFT_REQUIREMENT != EXECUTED_CONFORMANCE
SECURITY != EXECUTION != DURABLE EFFECTS != RECOVERY

Durable effects: new publisher source identity, additive ledger correction, explicit history. G-W73 remains OPEN. External SDK/runtime/security/effect/recovery/TCK: NOT_EXECUTED.
