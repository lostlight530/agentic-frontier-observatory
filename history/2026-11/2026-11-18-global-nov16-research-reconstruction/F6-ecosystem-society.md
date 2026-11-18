# 2026-11-18 后验研究重建｜2026-11-16 F6｜生态与发行方 Demo 采纳

- record_type: RETROSPECTIVE_EVIDENCE_FACET / NOT_ORIGINAL_NATIVE_F1_F7
- target_event_date: 2026-11-16 Asia/Shanghai
- reconstruction_observed_at: 2026-11-18T17:40:21+08:00
- original_run_receipt: NOT_RECOVERED; original_daily_cutoff: UNKNOWN
- issuer_git_time: 2026-11-16T10:25:05Z
- evidence_scope: FIRST_PARTY_SOURCE_DIFF / NOT_INDEPENDENT_RUNTIME

## Question / 研究对象
Cliffside Retail、Poppy Demo Agent 与 Print with Poppy 的三条发行方列表是否构成三个独立采纳证人？

## Verified source boundary / 可验证事实
三条标签在同一 Poppy #200 Git commit 的同一 demos.mdx 中变化，发行方称 Cliffside Retail 1.0、其他两项 0.4，不能据此声称三方独立运行通过、用户/企业采纳数量或 Poppy 1.0 通用部署

## Source lineage / 来源
- [Poppy #200 fixed issuer commit](https://github.com/personal-agent-protocol/personal-agent-protocol/commit/656185321142da654fc255da5a9be6ef87c9de89) — one Git commit, one publisher
- [Poppy 1.0 version manifest observed 11-15](https://github.com/personal-agent-protocol/personal-agent-protocol/blob/85b41ff27e8f6a098d06b71f14d83b1513c728a5/content/versions/versions.json) — same issuer, historical baseline
- [11-15 original Native integrated](../../../reports/daily/2026/11/2026-11-15.md) — dated repository baseline
- [11-17 original Native integrated](../../../reports/daily/2026/11/2026-11-17.md) — later repository baseline, not original 11-16 execution

## Falsifier and missing evidence / 反证与缺口
需每个 Demo 独立维护方的 commit/release、可复核 live 协议证据、使用分母和相互独立的验证结论

## Hypothesis handoff / 周报交接
W47-1 OPEN

## Execution and publication boundary
2026-11-18 GitHub issuer commit/diff and repository reads EXECUTED；original 11-16 scheduler run output NOT_RECOVERED；TCK, SDK execution, deployed service behavior, external effect and independent replication NOT_EXECUTED / NOT_VERIFIED
- This is a later archival reconstruction, not an accepted Native Daily and not counted in W47 native coverage

