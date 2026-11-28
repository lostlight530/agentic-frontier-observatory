# 2026-11-28 F4｜智能体、Runtime、Harness 与协议

- logical_date: 2026-11-28 Asia/Shanghai
- execution_started_at: 2026-11-28 08:30 Asia/Shanghai（分钟精度）
- observation_cutoff: 2026-11-28T08:31:27+08:00 / 2026-11-28T00:31:27Z
- observed_at: 2026-11-28 08:30–08:31:27 Asia/Shanghai（采集窗口，单请求精确时间未保留）
- preflight_main: d21874062347713f033ff55d9bb9938ef3934547
- task_id: Global-Native-2026-11-28 / role: Native Producer / run_id: manual-20261128-global-0830
- research_status: NEW_ISSUER_RELEASE_OBSERVED / PARTIAL
- state_transition_date: UNVERIFIED FOR DEPLOYMENT AND RUNTIME
- delivery: DRAFT_PROPOSAL_NOT_MERGED

## 观察与证据
Registry 的 publisher/workload identity 与 Agent 调用主体、委托 authority、session identity 是不同对象；OIDC 类型验证和 package ownership 边界不证明跨 Agent 撤销或外部效果恢复；ADK 流输出及 alpha 审批恢复仍为既有发行方证据

## 证据等级与反证
Release 元数据为可核事实，修复、生产推进与运行行为为发行方陈述；草案及机构项目为各自文档对象；外部独立执行、部署、TCK、模型基准 NOT_EXECUTED，未观察不等于不存在

## 下一观察条件
追踪身份映射、动态撤销、冻结 TCK、操作查询和 effect ledger

## 一手来源
- G-R17｜MCP registry v1.8.17｜published_at 2026-11-27T10:54:32Z｜北京时间 2026-11-27 18:54:32+08:00｜发行方描述 staging/production usage jobs 工作负载身份迁移与共享凭证退役；包括远程 URL 校验修订，未独立确认生产执行或旧凭证失效｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.17
- G-R19｜MCP registry v1.8.19｜published_at 2026-11-27T17:20:16Z｜北京时间 2026-11-28 01:20:16+08:00｜发布和编辑的 distinct package ownership checks 资源边界；不能从检查存在推断所有权真实性｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.19
- G-R20｜MCP registry v1.8.20｜published_at 2026-11-27T20:16:57Z｜北京时间 2026-11-28 04:16:57+08:00｜generic OIDC extra claim 类型匹配前校验；不证明跨公司委托授权或撤销传播｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.20
- G-R21｜MCP registry v1.8.21｜published_at 2026-11-27T21:30:24Z｜北京时间 2026-11-28 05:30:24+08:00｜发布及编辑的 server record/嵌套字符串大小限制，两个 API 版本的 /validate 应用发布限制；不证明所有准入路径的独立一致性｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.21
- G-A｜ADK Python v2.15.1｜published_at 2026-11-25T01:01:43Z｜https://github.com/google/adk-python/releases/tag/v2.15.1
- G-P｜Agents SDK v1.0.0-alpha.2｜prerelease，published_at 2026-11-23T20:11:07Z｜https://github.com/openai/openai-agents-python/releases/tag/v1.0.0-alpha.2
- G-M｜MCP Protocol 2026-07-28｜stable revision｜https://github.com/modelcontextprotocol/modelcontextprotocol/releases/tag/2026-07-28
- G-B｜A2A v1.0.1｜stable release｜https://github.com/a2aproject/A2A/releases/tag/v1.0.1
- G-I｜IETF draft-07｜Active Internet-Draft｜https://datatracker.ietf.org/doc/html/draft-agentic-ai-usecases-requirements-07
