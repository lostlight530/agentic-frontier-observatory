# 2026-11-14 F7 — 综合与判断校准 / 原生研究分任务

- logical_date: 2026-11-14 Asia/Shanghai
- observation_cutoff: 2026-11-14 08:28:00 Asia/Shanghai
- actual_execution_time: 2026-11-14 08:31:20 Asia/Shanghai
- preflight_main: `d3e2c0e8e1856740995a61dfddb8d0f98291adea`
- record_provenance: NATIVE / FIRST_PARTY_PINNED_SOURCE_READ
- result: PARTIAL / SOURCE_STATE_BOUNDED / NO_INDEPENDENT_RUNTIME

## Research question / 研究问题

本轮新可核查的源身份是否真正改变 综合与判断校准 领域的证据状态

## Observation / 原始观察

新固定对象是 Poppy Draft 1.0 的 manifest 和正文及 MCP Registry 的既有发行记录，均属当日首次本观察窗口复核旧日期的外部对象

## Evidence identity / 来源身份

- Poppy manifest：https://github.com/personal-agent-protocol/personal-agent-protocol/blob/31c87cc353933907157b18f06bf31ac3f168f415/content/versions/versions.json
- Poppy draft 1.0：https://github.com/personal-agent-protocol/personal-agent-protocol/blob/31c87cc353933907157b18f06bf31ac3f168f415/content/versions/1.0/spec.mdx
- MCP Registry issuer Release：https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9
- 0.4 publication_date：2026-11-10（发行方 manifest）
- Registry v1.8.9 publication_date：2026-11-10T11:08:07Z
- observed_at：2026-11-14 08:28:00 Asia/Shanghai
- Poppy 1.0 first_publication_and_transition_time：UNVERIFIED
- source_grade：G2 PROJECT_FACT for documented revision and release metadata

## Separation and falsifier / 证据边界

H46-1~4 仍 OPEN，SECURITY != EXECUTION != DURABLE EFFECTS != RECOVERY，PERSISTENT_TASK_STORE != DURABLE_EFFECT_RECOVERY

需要新的独立 runtime、跨提供者 conformance、真实 delegated action trace 或已确定的发行方状态变化才能提升成熟度

## Executed versus unexecuted / 执行

仅执行原始来源的只读核验；外部代码、TCK、bench、运行时恢复实验 NOT_EXECUTED；当前 F 组件不增加额外研究窗口
