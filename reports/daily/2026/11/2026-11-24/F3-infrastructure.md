# 2026-11-24 Global F3｜基础设施和运营证据
- logical_date: 2026-11-24 Asia/Shanghai
- execution_started_at: 2026-11-24 14:24:23 Asia/Shanghai
- observation_cutoff: 2026-11-24 14:28:51 Asia/Shanghai / 2026-11-24T06:28:51.417Z
- preflight_main: `6e60957d86dbe7e33b5d0a69940d8149153ba337`
- task_id: Global-Native-2026-11-24 / role: Native Producer / run_id: manual-20261124-global
- research_status: NEW_ISSUER_RELEASE_IDENTITIES / PARTIAL_INDEPENDENT_RUNTIME_EVIDENCE
- source_scope: BOUNDED_GITHUB_ISSUER_RELEASE_API_NOT_ECOSYSTEM_CENSUS
- deployment_state_transition_date: UNVERIFIED
- delivery: DRAFT_PROPOSAL_NOT_MERGED

## Research question
Registry v1.8.14–v1.8.16 宣称的运维变更达到何种证据等级

## Primary issuer evidence
- G-S1：发行方说明推进生产 v1.8.13、增加 staging malware sweep 按需执行并修正监控事件计数
- G-S2：发行方说明在发送恶意软件扫描发现前复核缺失包，调整生产 imageTag 使用方式
- G-S3：发行方说明推进生产 v1.8.15、减少编辑数据库工作、分离用量收集与备份的阶段身份

## Changed versus stable
- NEW: G-S1/G-S2/G-S3 本轮首次纳入版本身份，发布时间均为2026-11-23北京时间
- STABLE: 发行说明是 PROJECT_FACT about release + ISSUER_CLAIM about production transition

## Counterevidence and unknown
未独立读取生产部署日志、数据库负载或 backup 隔离效果，精确环境转换时点 UNVERIFIED

## Falsifier / next step
取得可核的版本化 deployment trace 和观测指标而不是假设生产已验证

## Native handoff
W48-H1..4 OPEN / UNCHANGED，November OPEN，11-25..29 NOT_DUE，PR 未合并前只属于 proposed research
