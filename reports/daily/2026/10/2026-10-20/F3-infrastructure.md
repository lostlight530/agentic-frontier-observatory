# F3｜基础设施 — 2026-10-20

## Native observation contract

- logical_date: 2026-10-20 Asia/Shanghai
- observed_at_cutoff: 2026-10-20 05:04:00 Asia/Shanghai
- research_start_main: 13f33fc84db01a7f7b2e690272e73f83c690fc92
- record_class: NATIVE_DAILY_WORKSTREAM_COMPONENT
- evidence_scope: Poppy 官方规范/changelog/manifest，NIST NCCoE SI，A2A Python SDK 与 MCP ext-tasks 官方 release，其他全球事件 NOT_ASSESSED
- statement_class: FACT（发行方页面与版本元数据） / ATTRIBUTED_EXTERNAL_CLAIM（规范声称的预期行为） / OBSERVATORY_ANALYSIS（层次判断）
- event_date != publication_date != effective_date != observed_at != state_transition_date
- draft_0_2_publication_date: UNVERIFIED
- NIST_status_transition_date: UNVERIFIED
- external_TCK_runtime_benchmark: NOT_EXECUTED

- integrated_daily: ../2026-10-20.md
- component_of: 2026-10-20 F1–F7 one native observation

## Direct evidence

A2A Python v1.2.2 官方 release 包含 SSE shutdown grace period、REST error 处理和兼容修复等发行方变更记录

## Evidence/date classification

Poppy 是官方工作草案及版本元数据，NIST 是当前治理展示，A2A/MCP 为发行方 release metadata，以上均非独立运行或跨实现一致性验证

## Limits

SDK release 不是外部部署证据，也不证明跨 SDK parity 或 conformance

## Falsifiable next check

追踪独立运行记录与可复核互操作性

## Disposition

PARTIAL BOUNDED COVERAGE / NO VERIFIED NEW LIFECYCLE TRANSITION，W43 H43-1~3 OPEN / UNCHANGED，October Monthly OPEN

## Primary sources

- Poppy Draft 0.2 specification｜当前页面显示 Draft 0.2，明确可变更且可能不向后兼容｜本轮一手来源复核｜https://personalagentprotocol.org/docs/0.2/spec
- Poppy official changelog｜Draft 0.2 In progress，含 Breaking 变更条目｜本轮一手来源复核｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/main/content/shared/changelog.mdx
- Poppy versions manifest｜0.1 published=2026-10-09，0.2 未列 published 字段｜本轮一手来源复核｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/main/content/versions/versions.json
- NIST NCCoE SI｜Software and SI Agent Identity and Authorization 当前显示 Soliciting Comments｜本轮一手来源复核｜https://www.nccoe.nist.gov/si
- A2A Python SDK v1.2.2｜GitHub published_at 2026-10-05T09:50:04Z，发行方元数据｜本轮一手来源复核｜https://github.com/a2aproject/a2a-python/releases/tag/v1.2.2
- MCP ext-tasks v0.2.2｜GitHub published_at 2026-09-30T22:23:51Z，prerelease=true｜本轮一手来源复核｜https://github.com/modelcontextprotocol/ext-tasks/releases/tag/v0.2.2
