# F6｜开源生态与社会 / Native 2026-11-11

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
本轮发行方版本发布能否证明 开源生态与社会 的规范成熟度或运行保证，必须保留哪些不可跨越的证据层

## 2｜Direct first-party observations / 第一方观察
版本清单冻结 0.4 的 spec/extension/guides 指纹，GitHub 显示发行方发布 PR 后又更改公开规格内的 draft wording，这些均属一方公开源工件，并未自动证明独立 Company/Personal Agent 已完成一致实现

## 3｜Judgment / 判断
- ISSUER_VERSION_ARTIFACT_NOT_INDEPENDENT_ADOPTION / SAME_REPO_COMMITS_NOT_INDEPENDENT_CORROBORATION
- observed_at: 2026-11-11 16:37:06 Asia/Shanghai
- publication_date: 2026-11-10 as publisher-declared for Poppy 0.4，does not prove exact state_transition_date
- independent test or deployment evidence: NOT_OBSERVED

## 4｜Falsifier and next check / 后续反证
寻找不同发行方应用、独立 client/server 对接与可信度受限的真实用户操作证据

## 5｜Primary source anchors / 来源
- poppy_manifest: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/ed474089d0fdeafae9584a95cfcc485209d8b124/content/versions/versions.json
- poppy_postrelease_commit: https://github.com/personal-agent-protocol/personal-agent-protocol/commit/ed474089d0fdeafae9584a95cfcc485209d8b124
- poppy_changelog: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/ed474089d0fdeafae9584a95cfcc485209d8b124/content/shared/changelog.mdx

## 6｜Execution boundary / 执行边界
本轮执行版本清单与 Git compare 阅读，不执行外部运行时、validator、TCK 或 CI，零结果不得标为 PASS
