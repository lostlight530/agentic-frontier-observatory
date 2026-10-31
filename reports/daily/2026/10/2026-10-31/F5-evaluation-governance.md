# F5｜评测、安全、治理与标准 — 2026-10-31
- logical_date: 2026-10-31 Asia/Shanghai
- execution_started_at: 2026-10-31 05:02:51 Asia/Shanghai
- observation_cutoff: 2026-10-31 05:04:36 Asia/Shanghai
- observation_utc: 2026-10-30T21:04:36Z
- research_base_main: f17cafe548635b1670d5e60a446eff590b58183d
- record_class: NATIVE_DAILY_RESEARCH
- evidence_scope: Poppy 0.3 first-party GitHub revision/issuer changelog + NIST NCCoE，other global AI domains NOT_ASSESSED
- result: MATERIAL_FIRST_PARTY_DRAFT_REVISION / BOUNDED_INTERPRETATION
- evidence_class: FIRST_PARTY_SOURCE_FACT / ATTRIBUTED_PUBLISHER_CLAIM / OBSERVATORY_ANALYSIS / UNCERTAIN
- external_previous_observed_main: 3e9bada9ec8f66777b43e429d49574131dc2f67e
- external_current_observed_main: 1de1990e4978b42179fe0e3e0ae554271808c308
- external_compare: ahead_by=6 behind_by=0 from previous observed anchor
- independent_conformance: NOT_OBSERVED
- external_runtime_TCK_CI_benchmark: NOT_EXECUTED
- same_issuer_multi_surface: NOT_INDEPENDENT_CORROBORATION

## Finding / 观察
NIST NCCoE 当前仍 Soliciting Comments，Poppy 0.3 是可变草案而非已执行的安全认证

## Evidence and interpretation / 证据与解释
Web Bot Auth SHOULD 与 browser MUST 是发行方规范文本，未见独立 TCK/CI、policy denial→runtime stop 验证

## Boundary and next check / 边界与下一轮
继续寻找日期化 NIST 交付和独立权限/恢复测试

## Primary sources / 一手来源
- Restored agent-controlled browser boundary｜committer 2026-10-30T16:00:54Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/999722afbf4fb089e4a2be6db74accaf69d30453
- Incremental Company adoption and signed-out no-OAuth mode｜committer 2026-10-30T16:00:54Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/850a46dbe72bfb092734671c0d99cf5e1c37083b
- Recommended Web Bot Auth operator HTTP signatures｜committer 2026-10-30T16:00:54Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/14eba30675c44f90d333bdae4bb1be2c2ba86049
- Browser join with existing login rules｜committer 2026-10-30T16:00:54Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/ec16efa4459aaf98b1b82a1a5973504f4fd75fd9
- Mirroring workflow source committed to public main｜committer 2026-10-30T20:43:43Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/1de1990e4978b42179fe0e3e0ae554271808c308
- Poppy 0.3 Draft / In progress｜https://personalagentprotocol.org/docs/changelog
- Poppy 0.3 versioned spec｜https://personalagentprotocol.org/docs/0.3/spec
- Poppy versions manifest 0.3 without published date｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/1de1990e4978b42179fe0e3e0ae554271808c308/content/versions/versions.json
- NIST NCCoE Soliciting Comments｜https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization
