# 2026-11-14 F2 — 模型与算法 / 原生研究分任务

- logical_date: 2026-11-14 Asia/Shanghai
- observation_cutoff: 2026-11-14 08:28:00 Asia/Shanghai
- actual_execution_time: 2026-11-14 08:31:20 Asia/Shanghai
- preflight_main: `d3e2c0e8e1856740995a61dfddb8d0f98291adea`
- record_provenance: NATIVE / FIRST_PARTY_PINNED_SOURCE_READ
- result: PARTIAL / SOURCE_STATE_BOUNDED / NO_INDEPENDENT_RUNTIME

## Research question / 研究问题

本轮新可核查的源身份是否真正改变 模型与算法 领域的证据状态

## Observation / 原始观察

本轮未执行模型 benchmark，所查两个 protocol 工程发行方亦不提供新的独立模型能力实测

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

协议源材料不能借用为模型性能或多模态运行证明

需要新的独立 runtime、跨提供者 conformance、真实 delegated action trace 或已确定的发行方状态变化才能提升成熟度

## Executed versus unexecuted / 执行

仅执行原始来源的只读核验；外部代码、TCK、bench、运行时恢复实验 NOT_EXECUTED；当前 F 组件不增加额外研究窗口
