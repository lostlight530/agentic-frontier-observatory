# 2026-10-12 Special — AgentCore Memory：记忆保留、计量与权限

- Repository: lostlight530/agentic-frontier-observatory
- Special ID: GLOBAL-S-20261012-agentcore-memory-economics
- Record type: POST_HOC_SPECIAL_EVENT_RECONCILIATION / NON_CANONICAL_RESEARCH
- Event attribution: 2026-10-12 (publisher/local date; separate related dates below)
- Actual source recheck: 2026-11-27 Asia/Shanghai
- Original Native Daily credit: 0; no reopening of historical closure
- Canonical week: [2026-W42](./2026-W42.md); month: [2026-10](../../monthly/2026/2026-10.md)

## Evidence and chronology / 事实与日期

10月12日短期记忆改为按摄取、检索、存储计费，分别1美元/GB、0.20美元/GB、0.10美元/GB月；事件摄取检索有12KB下限与64KB上限。13日长期记忆新增 TTL 及独立权限。

- AWS: https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-consumption-based-pricing/
- AWS: https://aws.amazon.com/about-aws/whats-new/2026/10/agentcore-memory-long-term-memory-ttl/

## Bounded technical analysis / 系统机制

用事件大小分布和读取频率而非 token 数直接估算费用。TTL 属于数据生命周期而不是删除证据，必须验证过期、索引清理、备份和审计权。

## Counterevidence and verification plan / 证据边界

两条公告同一发行方，不是独立账单验证；实际删除时延、费用与重放未测。

## Repository relations / 长期观察

[Daily date owner](../../daily/2026/10/2026-10-12.md) serves as chronology only, not proof of original source access. This is a distinct research object or explicitly scoped deeper mechanism analysis, not a new original observation. Preserve source lineage, date identity, original judgment and existing Special aggregates; later evidence is not silently propagated backwards.

## Disposition

SOURCE_BOUNDED / NON_CANONICAL. Independent benchmark, deployment, runtime, and conformance NOT_EXECUTED. No new Native, independent original workstream, or historical hypothesis credit.
