# F4｜智能体 Runtime、Harness 与协议 / Native 2026-11-11

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
本轮发行方版本发布能否证明 智能体 Runtime、Harness 与协议 的规范成熟度或运行保证，必须保留哪些不可跨越的证据层

## 2｜Direct first-party observations / 第一方观察
发行方 main 从 a2f16ec4 前进到 ed474089 共 9 commits、50 changed files、behind_by=0，新增 sign-in 限制、Operations declining approval 等修订，0.4 manifest published=2026-11-10；发布提交 4803900 的 UTC 2026-11-11 02:36:55，与发行方回填的 publication_date 分离；0.4 frozen at /docs/0.4/spec

## 3｜Judgment / 判断
- PUBLISHER_REPORTED_0_4_RELEASE_CANDIDATE_PUBLICATION_CONFIRMED / EXACT_TRANSITION_TIME_UNVERIFIED / NO_CROSS_PROVIDER_CONFORMANCE
- observed_at: 2026-11-11 16:37:06 Asia/Shanghai
- publication_date: 2026-11-10 as publisher-declared for Poppy 0.4，does not prove exact state_transition_date
- independent test or deployment evidence: NOT_OBSERVED

## 4｜Falsifier and next check / 后续反证
以 0.4 frozen version 执行外部多方 TCK、approval/replay/revocation 和真正的 durable external effect recovery 校验

## 5｜Primary source anchors / 来源
- poppy_manifest: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/ed474089d0fdeafae9584a95cfcc485209d8b124/content/versions/versions.json
- poppy_changelog: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/ed474089d0fdeafae9584a95cfcc485209d8b124/content/shared/changelog.mdx
- poppy_release_commit: https://github.com/personal-agent-protocol/personal-agent-protocol/commit/48039002795c9ebb390f1966fb70f82e4790efb6
- poppy_compare: https://github.com/personal-agent-protocol/personal-agent-protocol/compare/a2f16ec4c38e111289c12d7fbd8fec57b8aba06e...ed474089d0fdeafae9584a95cfcc485209d8b124

## 6｜Execution boundary / 执行边界
本轮执行版本清单与 Git compare 阅读，不执行外部运行时、validator、TCK 或 CI，零结果不得标为 PASS
