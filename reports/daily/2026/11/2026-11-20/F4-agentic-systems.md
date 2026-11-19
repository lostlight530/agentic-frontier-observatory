# 2026-11-20 F4｜Agent Runtime、身份、权限、Harness

- logical_date: 2026-11-20 Asia/Shanghai
- actual_execution_time: 2026-11-20 05:02:06 Asia/Shanghai / 2026-11-19T21:02:06.269Z
- observation_cutoff: 2026-11-20 05:02:06 Asia/Shanghai / 2026-11-19T21:02:06.269Z
- observed_at: 2026-11-19T21:02:06.269Z
- preflight_main: `7580445d2274240f17485f16a66904a8b336ac31`
- status: NO MATERIAL CHANGE IN BOUNDED PRIMARY SOURCES / PARTIAL
- source_scope: SELECTED_FIRST_PARTY_OBJECTS / NOT_A_GLOBAL_CENSUS
- producer_delivery: PROPOSED_ONLY_UNTIL_DRAFT_PR_MERGED

## Falsifiable Question / 可证伪问题
Poppy Draft operator signatures 及 ID 迁移能否证明长期授权闭环

## Verified Source and Clock / 来源与时钟
- S1 Poppy issuer pinned revision 589743afa5｜commit time 2026-11-18T14:30:27Z / 2026-11-18 22:30:27 Asia/Shanghai｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/589743afa56ee02bea71d1509c29b0b4ca5b3e50
- S2 Poppy issuer pinned versions manifest｜1.1 draft / 1.0 published 2026-11-14, both publisher current metadata at S1｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/589743afa56ee02bea71d1509c29b0b4ca5b3e50/content/versions/versions.json
- S3 MCP Servers v2.5.0 issuer release｜published_at 2026-11-18T09:13:14Z / 2026-11-18 17:13:14 Asia/Shanghai｜https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
- S4 MCP Registry v1.8.9 issuer release｜published_at 2026-11-10T11:08:07Z / different repo, discovery layer｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9
- S5 Google ADK Python v2.14.1 issuer release｜published_at 2026-11-12T21:30:11Z / product-local tracing fix｜https://github.com/google/adk-python/releases/tag/v2.14.1

## Domain-Specific Finding / 本域发现
S1 对应 11-18 新的 1.1 草案文档序列，同一发行方另有 operator signature 与 User ID replacement 草案提交，S2 标明仍 Draft；S5 ADK Python v2.14.1 是 11-12 对 Agent Engine tracing 的维护发行

## Boundaries and Counterevidence / 对立证据与限定
Operator signature != User approval，identity != credential != authority，签名要求文档不证实撤销传播、跨公司 session replay、失联后的 durable effect compensation

## Falsifier and Carry-Forward / 反证条件与交接
需冻结两提供者版本、授权拒绝、revoke、effect ledger、恢复证据与独立 TCK，W47-1/3 OPEN

## Evidence Status / 执行口径
- 当前源复核：EXECUTED，source state NO MATERIAL CHANGE in bounded scope
- 独立端到端运行、conformance、外部安全复现、科学 Agent 实验：NOT_EXECUTED
- 原始发行事件时间不等于本仓 2026-11-19T21:02:06.269Z 的观察时间，当前页面可见不代表 11-20 新发布
- W47 11-17..19 共 3/7 original Native 已在 main，11-16 的 retrospective complete content 独立于原生执行回执，今天的唯一新 Daily Draft 未合并前不能计入 main，W47-1..4 OPEN，November OPEN
- [Integrated Daily](../2026-11-20.md)｜[Daily pack navigation](README.md)
