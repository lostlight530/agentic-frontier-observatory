# F4｜Agent、Runtime、Harness 与协议｜2026-11-07

- logical_date: 2026-11-07 Asia/Shanghai
- observed_at: 2026-11-07 13:39:15 Asia/Shanghai
- observation_cutoff: 2026-11-07 13:39:15 Asia/Shanghai
- observation_utc: 2026-11-07T05:39:15.425Z
- repository_base_main: 9afbc25a74e1cf825b7598de4c83d6a82f004140
- record_class: NATIVE_DAILY_WORKSTREAM
- result: VERIFIED_0_4_DRAFT_REVISION / PARTIAL_BOUNDED
- source_old: 77e01796bfffa0176ec5b2c17822570ee0386303
- source_new: 46beb2139417ad7b990dbf9b2dc84ddc3dd494d9
- compare: ahead=5 behind=0 42_changed_files
- event_date: source Git commits 2026-11-06T13:57:12Z..2026-11-06T19:52:27Z
- publication_date: issuer 0.3 published=2026-11-04 / 0.4 NOT_PUBLISHED
- state_transition_date: Git timestamps KNOWN / web deployment UNVERIFIED
- checker_CI_TCK_Runtime_conformance: NOT_EXECUTED

## 一手研究观察
0.4 草案将会话状态分为 responder、working、handoff、closed，并补充 request ID 冲突处理、资源元数据匹配、supported_versions 文档校验、delegated key 与 User ID 约束

## 边界与反证
request_id 可以限制部分重试重复，但不自动保证外部效果 exactly-once、权限传播、撤销或 durable recovery，草案协议文本不等于 Runtime trace

## 来源强度与时间
- provenance: FIRST_PARTY_GIT_FACT / PUBLISHER_DRAFT_REQUIREMENT / OBSERVATORY_ANALYSIS
- source_independence: ONE_PUBLISHER_LINEAGE_NOT_INDEPENDENT_CORROBORATION
- website_deployment_date: UNVERIFIED
- other_global_domains: NOT_ASSESSED / PARTIAL
- runner_tests: NOT_EXECUTED

## Primary Sources / 一手来源
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/46beb2139417ad7b990dbf9b2dc84ddc3dd494d9/content/versions/0.4/spec.mdx
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/46beb2139417ad7b990dbf9b2dc84ddc3dd494d9/content/versions/0.4/extensions/operations.mdx
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/46beb2139417ad7b990dbf9b2dc84ddc3dd494d9/content/shared/changelog.mdx
