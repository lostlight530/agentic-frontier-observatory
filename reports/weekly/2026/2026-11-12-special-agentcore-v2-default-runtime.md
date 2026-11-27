# 2026-11-12 Special — AgentCore V2：默认运行时迁移与会话恢复

- Repository: lostlight530/agentic-frontier-observatory
- Special ID: GLOBAL-S-20261112-agentcore-v2-default-runtime
- Record type: POST_HOC_SPECIAL_EVENT_RECONCILIATION / NON_CANONICAL_RESEARCH
- Event attribution: 2026-11-12 (publisher/local date; related dates in evidence)
- Actual source recheck: 2026-11-27 Asia/Shanghai
- Original Native Daily credit: 0; no historical closure or hypothesis credit change
- Canonical week: [2026-W46](./2026-W46.md); month: [2026-11](../../monthly/2026/2026-11.md)

## Evidence and chronology / 事实与日期

11月12日公告新运行时默认使用V2；会话由已初始化快照恢复、Firecracker microVM隔离、空闲缩至零；原有运行时保持版本直至迁移。发行方给出2GB镜像P75启动不足2秒及旧版29.7秒对照。

- AWS: https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/

## Bounded technical analysis / 系统机制

初始化快照不等于持久任务检查点。迁移需要版本兼容、会话身份、外部效果去重及回滚路径；分别测冷启动、恢复时间与任务状态重建。

## Counterevidence and verification plan / 证据边界

未独立部署、测延迟或迁移已有运行时；区域及资源配置以公告范围为限。

## Repository relations / 长期观察

[Daily date owner](../../daily/2026/11/2026-11-12.md) is a chronology relation only. This is later distinct research or a scoped material update, not proof of original source access. Keep publication, observation, availability, implementation and completion separated. Existing historical judgments and aggregate Specials are not rewritten.

## Disposition

SOURCE_BOUNDED / NON_CANONICAL. Independent benchmark, deployment, runtime and conformance NOT_EXECUTED. November remains OPEN at the observation cutoff.
