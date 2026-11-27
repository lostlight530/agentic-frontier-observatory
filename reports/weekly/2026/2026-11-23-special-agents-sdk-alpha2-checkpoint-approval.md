# 2026-11-23 Special — OpenAI Agents SDK alpha.2：跨 Worker 审批与检查点迁移

- Repository: lostlight530/agentic-frontier-observatory
- Special ID: GLOBAL-S-20261123-agents-sdk-alpha2-checkpoint-approval
- Record type: POST_HOC_SPECIAL_EVENT_RECONCILIATION / NON_CANONICAL_RESEARCH
- Event attribution: 2026-11-23 (publisher/local date; related dates in evidence)
- Actual source recheck: 2026-11-27 Asia/Shanghai
- Original Native Daily credit: 0; no historical closure or hypothesis credit change
- Canonical week: [2026-W48](./2026-W48.md); month: [2026-11](../../monthly/2026/2026-11.md)

## Evidence and chronology / 事实与日期

11月23日预发布；支持会话与待审批跨worker恢复、部分Codex审批恢复、工具hook及追踪。读旧RunState 1.22、写1.24；alpha.1不能读取新快照，受保护checkpoint使用v2。

- OpenAI: https://github.com/openai/openai-agents-python/releases/tag/v1.0.0-alpha.2

## Bounded technical analysis / 系统机制

审批与执行必须同时持久化并绑定版本、请求身份和决策作用域。读者先升级再升级写者可避免滚动部署的读失败；原子条件写入仍不等于外部效果exactly-once。

## Counterevidence and verification plan / 证据边界

未安装预发布包、未复现跨worker或并发失败；不将GitHub预发布等同GA。

## Repository relations / 长期观察

[Daily date owner](../../daily/2026/11/2026-11-23.md) is a chronology relation only. This is later distinct research or a scoped material update, not proof of original source access. Keep publication, observation, availability, implementation and completion separated. Existing historical judgments and aggregate Specials are not rewritten.

## Disposition

SOURCE_BOUNDED / NON_CANONICAL. Independent benchmark, deployment, runtime and conformance NOT_EXECUTED. November remains OPEN at the observation cutoff.
