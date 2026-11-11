# F5｜评测、安全与治理 / Native 2026-11-11

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
本轮发行方版本发布能否证明 评测、安全与治理 的规范成熟度或运行保证，必须保留哪些不可跨越的证据层

## 2｜Direct first-party observations / 第一方观察
Operations v3 的 approval exact terms、user-vs-agent approval、declining approval 是规范语义，Browser Control 的控制指示不等于服务器端独立人类操作证明；版本发布并未伴随本轮可核验的跨企业运行、独立测试报告或 conformance PASS

## 3｜Judgment / 判断
- PROTOCOL_TEXT_PUBLISHED / SECURITY_CONFORMANCE_NOT_VERIFIED；at-most-once 规范不等于 exactly-once 外部效果
- observed_at: 2026-11-11 16:37:06 Asia/Shanghai
- publication_date: 2026-11-10 as publisher-declared for Poppy 0.4，does not prove exact state_transition_date
- independent test or deployment evidence: NOT_OBSERVED

## 4｜Falsifier and next check / 后续反证
确认权限委托、服务器端强制验证、重放防护、Revocation 与拒绝后的不会执行 trace

## 5｜Primary source anchors / 来源
- poppy_operations: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/ed474089d0fdeafae9584a95cfcc485209d8b124/content/versions/0.4/extensions/operations.mdx
- poppy_frozen: https://personalagentprotocol.org/docs/0.4/spec

## 6｜Execution boundary / 执行边界
本轮执行版本清单与 Git compare 阅读，不执行外部运行时、validator、TCK 或 CI，零结果不得标为 PASS
