# 2026-11-18 后验研究重建｜2026-11-16 F1｜协议历史与发行时序

- record_type: RETROSPECTIVE_EVIDENCE_FACET / NOT_ORIGINAL_NATIVE_F1_F7
- target_event_date: 2026-11-16 Asia/Shanghai
- reconstruction_observed_at: 2026-11-18T17:40:21+08:00
- original_run_receipt: NOT_RECOVERED; original_daily_cutoff: UNKNOWN
- issuer_git_time: 2026-11-16T10:25:05Z
- evidence_scope: FIRST_PARTY_SOURCE_DIFF / NOT_INDEPENDENT_RUNTIME

## Question / 研究对象
11-16 #200 是否意味着 Poppy 1.0 新发布，或仅是 Demo 协议版本标注更新？

## Verified source boundary / 可验证事实
1.0 的发行方 published=11-14 先于 #200；#200 在 11-16 10:25:05Z 只修改 demos.mdx，Cliffside Retail 0.4→1.0，其他两个 Demo 0.3→0.4；#201 1.1 Draft 的 Git 时间为 11-17 14:27:23Z，不能回填 11-16

## Source lineage / 来源
- [Poppy #200 fixed issuer commit](https://github.com/personal-agent-protocol/personal-agent-protocol/commit/656185321142da654fc255da5a9be6ef87c9de89) — one Git commit, one publisher
- [Poppy 1.0 version manifest observed 11-15](https://github.com/personal-agent-protocol/personal-agent-protocol/blob/85b41ff27e8f6a098d06b71f14d83b1513c728a5/content/versions/versions.json) — same issuer, historical baseline
- [11-15 original Native integrated](../../../reports/daily/2026/11/2026-11-15.md) — dated repository baseline
- [11-17 original Native integrated](../../../reports/daily/2026/11/2026-11-17.md) — later repository baseline, not original 11-16 execution

## Falsifier and missing evidence / 反证与缺口
需可证明的版本清单、官网部署时间与规范变更提交，若将 Demo 卡片与规范发布混为一体则反证成立

## Hypothesis handoff / 周报交接
W47-1 OPEN

## Execution and publication boundary
2026-11-18 GitHub issuer commit/diff and repository reads EXECUTED；original 11-16 scheduler run output NOT_RECOVERED；TCK, SDK execution, deployed service behavior, external effect and independent replication NOT_EXECUTED / NOT_VERIFIED
- This is a later archival reconstruction, not an accepted Native Daily and not counted in W47 native coverage

