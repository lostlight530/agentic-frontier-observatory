# 2026-11-18 后验研究重建｜2026-11-16 F3｜基础设施和部署可用性

- record_type: RETROSPECTIVE_EVIDENCE_FACET / NOT_ORIGINAL_NATIVE_F1_F7
- target_event_date: 2026-11-16 Asia/Shanghai
- reconstruction_observed_at: 2026-11-18T17:40:21+08:00
- original_run_receipt: NOT_RECOVERED; original_daily_cutoff: UNKNOWN
- issuer_git_time: 2026-11-16T10:25:05Z
- evidence_scope: FIRST_PARTY_SOURCE_DIFF / NOT_INDEPENDENT_RUNTIME

## Question / 研究对象
Demo 文档标注与 Registry 发行能否证明实际线上系统的 availability、discovery 和 SDK 兼容？

## Verified source boundary / 可验证事实
#200 作者声称演示所用版本匹配 live，修改仅在 content/shared/demos.mdx，三个 Demo 链接不等于三个独立可重放测试；Registry v1.8.9 的索引分页优化和 Servers v2.4.0 的补丁是不同产品对象，已在 11-15 报告作为历史基线

## Source lineage / 来源
- [Poppy #200 fixed issuer commit](https://github.com/personal-agent-protocol/personal-agent-protocol/commit/656185321142da654fc255da5a9be6ef87c9de89) — one Git commit, one publisher
- [Poppy 1.0 version manifest observed 11-15](https://github.com/personal-agent-protocol/personal-agent-protocol/blob/85b41ff27e8f6a098d06b71f14d83b1513c728a5/content/versions/versions.json) — same issuer, historical baseline
- [11-15 original Native integrated](../../../reports/daily/2026/11/2026-11-15.md) — dated repository baseline
- [11-17 original Native integrated](../../../reports/daily/2026/11/2026-11-17.md) — later repository baseline, not original 11-16 execution

## Falsifier and missing evidence / 反证与缺口
需要 Demo 部署版本、端点、SDK revision、发现链路响应、可用性时间窗和失败案例，不能从徽标推断运行状态

## Hypothesis handoff / 周报交接
W47-1 / W47-3 OPEN

## Execution and publication boundary
2026-11-18 GitHub issuer commit/diff and repository reads EXECUTED；original 11-16 scheduler run output NOT_RECOVERED；TCK, SDK execution, deployed service behavior, external effect and independent replication NOT_EXECUTED / NOT_VERIFIED
- This is a later archival reconstruction, not an accepted Native Daily and not counted in W47 native coverage

