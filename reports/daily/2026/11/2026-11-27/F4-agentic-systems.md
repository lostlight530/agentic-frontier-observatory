# 2026-11-27 F4｜智能体、Runtime、Harness 与协议

- logical_date: 2026-11-27 Asia/Shanghai
- execution_started_at: 2026-11-27 09:39 Asia/Shanghai（分钟精度）
- observation_cutoff: 2026-11-27T09:40:02+08:00 / 2026-11-27T01:40:02Z
- observed_at: 本轮来源读取窗口 09:39–09:40:02 Asia/Shanghai，单请求精确时刻未保留
- preflight_main: 75cc41bc88169ca0a01d4b2b630a6621131ccd28
- task_id: Global-Native-2026-11-27 / role: Native Producer / run_id: manual-20261127-global-0939
- research_status: NO MATERIAL CHANGE IN BOUNDED SOURCES / PARTIAL
- state_transition_date: UNVERIFIED WHERE NOT EXPLICIT
- delivery: DRAFT_PROPOSAL_NOT_MERGED

## 观察与证据
draft-07 第6节分析单跳 context/session 标识与跨跳 dialog 关联缺口，第4.2节要求恢复时复核身份、当前状态及授权；ADK 流式持久化与 alpha 审批恢复是实现方描述，非跨供应商运行证明

## 反证与范围
仅限下列已标明的来源与取得方式；未执行外部项目、独立评测、TCK 或部署，未观察到不等于不存在

## 下一观察条件
追踪跨跳标识、撤销传播、故障注入与 effect ledger

## 一手来源与检索状态
- G-S1｜ADK Python v2.15.1，published_at 2026-11-25T01:01:43Z｜https://github.com/google/adk-python/releases/tag/v2.15.1
- G-S3｜Agents SDK v1.0.0-alpha.2，prerelease，published_at 2026-11-23T20:11:07Z｜https://github.com/openai/openai-agents-python/releases/tag/v1.0.0-alpha.2
- G-S6｜MCP Protocol 2026-07-28，published_at 2026-07-28T16:47:49Z｜https://github.com/modelcontextprotocol/modelcontextprotocol/releases/tag/2026-07-28
- G-S7｜A2A v1.0.1，published_at 2026-05-28T11:34:36Z｜https://github.com/a2aproject/A2A/releases/tag/v1.0.1
- G-S8｜IETF draft-07，published 2026-11-02，Active Internet-Draft，sections 4.2, 5–7｜https://datatracker.ietf.org/doc/html/draft-agentic-ai-usecases-requirements-07
