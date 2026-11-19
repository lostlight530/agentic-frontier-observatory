# 2026-11-16 F4｜Agent 身份、授权与执行（2026-11-19 10:18:56 事后补齐）

- target_logical_date: 2026-11-16 Asia/Shanghai
- record_type: RETROSPECTIVE_COMPLETION / CANONICAL_DATE_PATH / NOT_ORIGINAL_NATIVE_RUN
- produced_at: 2026-11-19 10:18:56 Asia/Shanghai / 2026-11-19T02:18:56.389Z
- original_native_observation_cutoff: UNKNOWN / DO_NOT_INFER
- original_scheduler_invocation: OPERATOR_REPORTED_RUN / RUN_ID_AND_RESULT_NOT_RECOVERED
- native_producer_delivery_2026-11-16: NOT_RETAINED
- historical_source_first_observed: 2026-11-18 17:40:21 Asia/Shanghai
- source_reverified_at: 2026-11-19T02:18:56.389Z
- preflight_main: `4331c2faec92b3a38cc279690e5ba76cfdcdb3e8`
- result: RETROSPECTIVE_CONTENT_COMPLETE / SOURCE_BOUND / NO_INDEPENDENT_EXECUTION

## Falsifiable question / 可证伪问题
Poppy 1.0 的 Demo badge 是否隐含安全授权与工具操作闭环

## Source identity / 一手来源和时间
- S1 Poppy issuer #200 pinned diff; Git committer 2026-11-16T10:25:05Z = 2026-11-16 18:25:05 Asia/Shanghai; `https://github.com/personal-agent-protocol/personal-agent-protocol/commit/656185321142da654fc255da5a9be6ef87c9de89`
- S2 Poppy 1.0 pinned publisher version manifest, published 2026-11-14; `https://github.com/personal-agent-protocol/personal-agent-protocol/blob/85b41ff27e8f6a098d06b71f14d83b1513c728a5/content/versions/versions.json` (same publisher lineage as S1)
- S3 MCP Registry v1.8.9, release published 2026-11-10T11:08:07Z; `https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9` (separate repo / discovery domain)
- S4 MCP Servers v2.4.0, release published 2026-11-11T07:07:16Z; `https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0` (server implementation / security patch domain)
- EXCLUDED from 11-16 logical event attribution: Poppy #199 committed 2026-11-16T18:13:05Z = **2026-11-17 02:13:05 Asia/Shanghai**, so it is next-day Beijing evidence, not a Nov16 event; `https://github.com/personal-agent-protocol/personal-agent-protocol/commit/67647328c0d88d58cfa84b1d852d5b1852cf0eb9`
- Poppy #201 1.1 Draft began 2026-11-17T14:27:23Z, also later than the target logical date, never counted as Nov16 evidence
- S5 earlier repository retrospective dossier: https://github.com/lostlight530/agentic-frontier-observatory/blob/main/history/2026-11/2026-11-18-global-nov16-research-reconstruction/INTEGRATED.md; 2026-11-18 study, not an independent external witness or original Nov16 run output

## Domain evidence / 分任务证据
S1 仅标注 Demo version；Poppy 1.0 规范包含 Discovery、Session、Account Access 与 Company Interaction 等不同阶段，但没有由 S1 提供的 session JWT、OAuth token、调用审计或 user approval 轨迹

## Counterexample and confidence / 反证及限定
身份是稳定识别对象，不是权限本身；credential 不等于 authority，protocol_version 标签不能证明跨浏览器/API/Company Agent 会话的一致授权和 effect recovery

## Falsifier / 下一轮实证条件
需要两种独立实现的身份-凭据-批准-撤销-调用-effect-恢复全链路固定版本 TCK，W47-1/3 OPEN

## Run vs content vs delivery / 三种状态
- `SOURCE_GIT_EVENT`: 2026-11-16 18:25:05 Asia/Shanghai
- `REPOSITORY_FIRST_RECONSTRUCTION`: 2026-11-18 17:40:21 Asia/Shanghai
- `THIS_RETROSPECTIVE_CONTENT`: 2026-11-19T02:18:56.389Z
- `ORIGINAL_NATIVE_RUN`: OPERATOR_REPORTED / RECEIPT_UNAVAILABLE，原生产成功与否 UNKNOWN
- `ORIGINAL_NATIVE_DELIVERY`: GAP，不能因为日期路径现在出现就修改过去的生产事实
- `TODAY_EXECUTED`: GitHub issuer commit/releases inspection and static repository review only
- `NOT_EXECUTED`: external TCK/CI/Runtime/experimental replication
- W47-1..4 OPEN，November OPEN

## Cross-links / 资料链
- [Integrated retrospectively completed Daily](../2026-11-16.md)
- [11-18 historical evidence reconstruction](../../../../../history/2026-11/2026-11-18-global-nov16-research-reconstruction/INTEGRATED.md)
- [W47](../../../../weekly/2026/2026-W47.md)
