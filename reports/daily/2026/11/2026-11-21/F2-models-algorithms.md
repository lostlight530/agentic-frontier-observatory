# 2026-11-21 F2｜模型、算法、多模态与评测

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
ADK 新增 pass@k 和 pass^k 是否等于模型可靠性已独立验证

## First-party objects / 发行方来源与独立日期
- S1 Google ADK Python v2.15.0 issuer stable release｜publication_or_commit_date 2026-11-20 06:59:36 Asia/Shanghai｜UTC 2026-11-19T22:59:36Z｜https://github.com/google/adk-python/releases/tag/v2.15.0
- S2 Model Context Protocol Registry v1.8.10 issuer stable release｜publication_or_commit_date 2026-11-20 17:31:49 Asia/Shanghai｜UTC 2026-11-20T09:31:49Z｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.10
- S3 MCP Servers v2.5.0 prior first-party release｜publication_or_commit_date 2026-11-18 17:13:14 Asia/Shanghai｜UTC 2026-11-18T09:13:14Z｜https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
- S4 Poppy same-issuer latest observed revision 589743afa56ee02bea71d1509c29b0b4ca5b3e50, 1.1 draft｜publication_or_commit_date 2026-11-18 22:30:27 Asia/Shanghai｜UTC 2026-11-18T14:30:27Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/589743afa56ee02bea71d1509c29b0b4ca5b3e50

## Verifiable Bounded Finding / 有界新证据
S1 发行方文档引入 multi_run_config 的 pass@k 与 pass^k 统计、每例多轮汇总和 tool_parameter_match 部分参数得分，属于评测框架功能变更，S1 也宣布 Live/语音工具调用后台化

## Counterevidence and Trust Boundary / 反证与可托付边界
评测框架存在并不证明实际运行了基准、模型分数提升、任务成功率或跨模型泛化，未获取数据集或独立实验回执
发布者原始 Release 的特性与测试声明本身不构成独立运行回执，必须保留同一发行方来源依赖

## Retest Condition / 复验条件
冻结具体 agent/model/evalset 版本并运行对照评测，分别记录 pass@k 与 pass^k 的分母和置信不确定性

## Cross-workstream Handoff / 汇总交接
本日统一研究日期 2026-11-21，仅观察之前 11-20 发行事件，W47-1..4 OPEN，November OPEN，独立 TCK/Runtime/CI NOT_EXECUTED
[Integrated](../2026-11-21.md)｜[Pack index](README.md)
