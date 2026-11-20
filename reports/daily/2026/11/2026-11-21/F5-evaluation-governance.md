# 2026-11-21 F5｜评测、安全、治理与独立审计

- logical_date: 2026-11-21 Asia/Shanghai
- actual_execution_started: 2026-11-21 04:55:02 Asia/Shanghai
- observation_cutoff: 2026-11-21 04:57:19 Asia/Shanghai
- observed_at: 2026-11-20T20:57:19Z
- preflight_main: `642209f8a53719dadab7cdeadc34b3d66c7db827`
- status: TWO_NEW_ISSUER_RELEASES / PARTIAL
- evidence_scope: BOUNDED_FIRST_PARTY_RELEASES_AND_PINNED_GIT / NOT_GLOBAL_CENSUS
- state_transition_date: UNVERIFIED_FOR_DOWNSTREAM_DEPLOYMENTS
- producer_delivery: DRAFT_PROPOSAL_PENDING_INDEPENDENT_REVIEW

## Falsifiable Question / 可证伪问题
安全强化发行与发布记录可否当作运行 TCK PASS

## First-party objects / 发行方来源与独立日期
- S1 Google ADK Python v2.15.0 issuer stable release｜publication_or_commit_date 2026-11-20 06:59:36 Asia/Shanghai｜UTC 2026-11-19T22:59:36Z｜https://github.com/google/adk-python/releases/tag/v2.15.0
- S2 Model Context Protocol Registry v1.8.10 issuer stable release｜publication_or_commit_date 2026-11-20 17:31:49 Asia/Shanghai｜UTC 2026-11-20T09:31:49Z｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.10
- S3 MCP Servers v2.5.0 prior first-party release｜publication_or_commit_date 2026-11-18 17:13:14 Asia/Shanghai｜UTC 2026-11-18T09:13:14Z｜https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
- S4 Poppy same-issuer latest observed revision 589743afa56ee02bea71d1509c29b0b4ca5b3e50, 1.1 draft｜publication_or_commit_date 2026-11-18 22:30:27 Asia/Shanghai｜UTC 2026-11-18T14:30:27Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/589743afa56ee02bea71d1509c29b0b4ca5b3e50

## Verifiable Bounded Finding / 有界新证据
S1 明示 McpInstructionProvider 需显式传入参数来减少与 session.state 不相关键的外泄风险，移除 ADK Web 交互式 Visual Agent Builder，保留配置 YAML 入口；S2 包含 HTTP auth retry、多证明校验修复与发布者私钥文件／环境支持

## Counterevidence and Trust Boundary / 反证与可托付边界
发行方产品安全修复说法与独立攻击面回归、功能兼容性、权限闭环及标准认证不同，现有证据只支持发布元数据和 issuer description
发布者原始 Release 的特性与测试声明本身不构成独立运行回执，必须保留同一发行方来源依赖

## Retest Condition / 复验条件
需同一确定版本的负例、最小权限日志、回归测试与独立 review，W47-1/2/3 OPEN

## Cross-workstream Handoff / 汇总交接
本日统一研究日期 2026-11-21，仅观察之前 11-20 发行事件，W47-1..4 OPEN，November OPEN，独立 TCK/Runtime/CI NOT_EXECUTED
[Integrated](../2026-11-21.md)｜[Pack index](README.md)
