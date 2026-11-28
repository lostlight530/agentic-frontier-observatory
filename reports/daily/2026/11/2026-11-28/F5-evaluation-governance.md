# 2026-11-28 F5｜评测、安全、治理与标准

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
Servers v2.6.0 报告八项修复与补齐两项既有修复；Registry 的记录与声明校验是实现层约束，不能以发行证明安全回归、生产升级或协议合规；NIST 项目仍征求意见，Build 3 实际验证未取得

## 证据等级与反证
Release 元数据为可核事实，修复、生产推进与运行行为为发行方陈述；草案及机构项目为各自文档对象；外部独立执行、部署、TCK、模型基准 NOT_EXECUTED，未观察不等于不存在

## 下一观察条件
追踪精确包版本、独立回归、部署回执与审计证据

## 一手来源
- G-R18｜MCP registry v1.8.18｜published_at 2026-11-27T16:20:22Z｜北京时间 2026-11-28 00:20:22+08:00｜编辑时执行 publisher metadata 大小限制；发行方称前版进入生产，非本轮生产验证｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.18
- G-R20｜MCP registry v1.8.20｜published_at 2026-11-27T20:16:57Z｜北京时间 2026-11-28 04:16:57+08:00｜generic OIDC extra claim 类型匹配前校验；不证明跨公司委托授权或撤销传播｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.20
- G-R21｜MCP registry v1.8.21｜published_at 2026-11-27T21:30:24Z｜北京时间 2026-11-28 05:30:24+08:00｜发布及编辑的 server record/嵌套字符串大小限制，两个 API 版本的 /validate 应用发布限制；不证明所有准入路径的独立一致性｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.21
- G-S26｜MCP servers v2.6.0｜published_at 2026-11-27T09:51:35Z｜北京时间 2026-11-27 17:51:35+08:00｜发行方报告三类 server 的八项漏洞修复及补齐 v2.5.0 两项修复；建议更新 git、memory、fetch，Windows filesystem 另有版本；未执行安全回归｜https://github.com/modelcontextprotocol/servers/releases/tag/v2.6.0
- G-N｜NIST NCCoE｜Soliciting Comments｜https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization
