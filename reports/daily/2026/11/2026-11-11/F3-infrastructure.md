# F3｜算力和基础设施 / Native 2026-11-11

- logical_date: 2026-11-11 Asia/Shanghai
- actual_execution_at: 2026-11-11 16:32:50 Asia/Shanghai
- actual_execution_utc: 2026-11-11T08:32:50Z
- observation_cutoff: 2026-11-11 16:37:06 Asia/Shanghai
- observation_cutoff_utc: 2026-11-11T08:37:06.113Z
- repository_preflight_main: 6d2a6c1f3f078afa5d02adc27f02f2a23761b6f7
- observation_window: 单次有界第一方版本清单、Changelog 与版本化 Git compare，非全天全球新闻扫描
- evidence_temporality: publisher_publication_date、git_commit_date、observed_at、state_transition_date、delivery_or_merge_date 各自独立
- execution_boundary: no external validator、TCK、CI、runtime deployment、independent conformance or benchmark execution

## 1｜Falsifiable research question / 可证伪问题
本轮发行方版本发布能否证明 算力和基础设施 的规范成熟度或运行保证，必须保留哪些不可跨越的证据层

## 2｜Direct first-party observations / 第一方观察
Poppy 0.4 的版本发布与现存 Agent Substrate v1.0.0 的 sandbox/actor snapshot 是不同发行方和不同证据对象，release metadata 不验证节点故障后的权限继承及外部效果补偿

## 3｜Judgment / 判断
- RELEASE_STATE_CHANGED_ONLY_FOR_PROTOCOL / NO_PORTABLE_RUNTIME_RECOVERY
- observed_at: 2026-11-11 16:37:06 Asia/Shanghai
- publication_date: 2026-11-10 as publisher-declared for Poppy 0.4，does not prove exact state_transition_date
- independent test or deployment evidence: NOT_OBSERVED

## 4｜Falsifier and next check / 后续反证
需要可复核的 actor resume、fresh identity、tool-call fencing、effect ledger 和验收 trace

## 5｜Primary source anchors / 来源
- agent_substrate: https://github.com/agent-substrate/substrate/releases/tag/v1.0.0
- poppy_manifest: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/ed474089d0fdeafae9584a95cfcc485209d8b124/content/versions/versions.json

## 6｜Execution boundary / 执行边界
本轮执行版本清单与 Git compare 阅读，不执行外部运行时、validator、TCK 或 CI，零结果不得标为 PASS
