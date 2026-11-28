# 2026-11-28 F6｜开源、产业、经济与社会

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
六个新发行版本属于 MCP 生态两仓，同一上游多版本不构成独立验证；协议稳定 revision 仍为 2026-07-28，A2A 仍为 v1.0.1；发布、安装、生产采用和市场覆盖必须分离

## 证据等级与反证
Release 元数据为可核事实，修复、生产推进与运行行为为发行方陈述；草案及机构项目为各自文档对象；外部独立执行、部署、TCK、模型基准 NOT_EXECUTED，未观察不等于不存在

## 下一观察条件
追踪版本安装证据、独立使用与跨供应商验证

## 一手来源
- G-R17｜MCP registry v1.8.17｜published_at 2026-11-27T10:54:32Z｜北京时间 2026-11-27 18:54:32+08:00｜发行方描述 staging/production usage jobs 工作负载身份迁移与共享凭证退役；包括远程 URL 校验修订，未独立确认生产执行或旧凭证失效｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.17
- G-R18｜MCP registry v1.8.18｜published_at 2026-11-27T16:20:22Z｜北京时间 2026-11-28 00:20:22+08:00｜编辑时执行 publisher metadata 大小限制；发行方称前版进入生产，非本轮生产验证｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.18
- G-R19｜MCP registry v1.8.19｜published_at 2026-11-27T17:20:16Z｜北京时间 2026-11-28 01:20:16+08:00｜发布和编辑的 distinct package ownership checks 资源边界；不能从检查存在推断所有权真实性｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.19
- G-R20｜MCP registry v1.8.20｜published_at 2026-11-27T20:16:57Z｜北京时间 2026-11-28 04:16:57+08:00｜generic OIDC extra claim 类型匹配前校验；不证明跨公司委托授权或撤销传播｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.20
- G-R21｜MCP registry v1.8.21｜published_at 2026-11-27T21:30:24Z｜北京时间 2026-11-28 05:30:24+08:00｜发布及编辑的 server record/嵌套字符串大小限制，两个 API 版本的 /validate 应用发布限制；不证明所有准入路径的独立一致性｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.21
- G-S26｜MCP servers v2.6.0｜published_at 2026-11-27T09:51:35Z｜北京时间 2026-11-27 17:51:35+08:00｜发行方报告三类 server 的八项漏洞修复及补齐 v2.5.0 两项修复；建议更新 git、memory、fetch，Windows filesystem 另有版本；未执行安全回归｜https://github.com/modelcontextprotocol/servers/releases/tag/v2.6.0
- G-M｜MCP Protocol 2026-07-28｜stable revision｜https://github.com/modelcontextprotocol/modelcontextprotocol/releases/tag/2026-07-28
- G-B｜A2A v1.0.1｜stable release｜https://github.com/a2aproject/A2A/releases/tag/v1.0.1
