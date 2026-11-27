# 2026-09-29 Special — A2A JS 1.3.0：持久任务存储与恢复合同

- Repository: lostlight530/agentic-frontier-observatory
- Record type: POST_HOC_SPECIAL_EVENT_RECONCILIATION / NON_CANONICAL_RESEARCH
- Special ID: GLOBAL-S-20260929-a2a-js-database-store-contract
- Event attribution: 2026-09-29 (publisher/local date, where exact time absent no conversion inferred)
- Actual source recheck: 2026-11-27 Asia/Shanghai
- Scope: F3/F4/F5; source-bounded retrospective research; Native Daily credit: 0
- Canonical week: [2026-W40](./2026-W40.md); month: [2026-09](../../monthly/2026/2026-09.md)
- Original observation, historical closure and hypothesis credit unchanged

## Research question

持久化 Task 与通知配置能否证明 worker crash recovery？

## Primary evidence / 来源与事实

v1.3.0 的9月29日 release notes 列出 database-backed task 与 push notification stores，PR #756；版本对应 SDK，不是新协议版本

- A2A Project: https://github.com/a2aproject/a2a-js/releases/tag/v1.3.0 — public page inspected 2026-11-27

## Technical analysis / 技术机制

存储 task state 只是其中一层。比较任务已写入/工具已提交/通知已发送/ACK丢失四种状态，恢复必须以目标 effect receipt 和当前 authority 做判定，而不是仅靠 Task 记录。

## Counterevidence and independent validation boundary

未执行数据库迁移、故障注入、跨 SDK TCK 或 webhook 幂等验证。要求 pin schema 与 SDK commit，测试事务边界、租户隔离和恢复。

## Cross-system relations and long-term observation

W38 已研究协议语义；本篇是不同日期的 SDK 具体实现对象，连接已有 Registry，不重复计协议发布。 The event belongs to its own source and date identity. Rechecking a publisher is not a second independent scientific proof. Relate to the existing [Daily](../../daily/2026/09/2026-09-29.md) only as chronology; no claim that its original producer inspected this Special.

## Disposition

ADMITTED / SOURCE_BOUNDED. No new historical Native run, no canonical weekly reopening, no new original month closure, independent benchmark/conformance/runtime NOT_EXECUTED. The next verification must target the specific missing artifact above.
