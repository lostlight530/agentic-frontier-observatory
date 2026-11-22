# 2026-11-22 Global F5｜治理与安全测试

- logical_date: 2026-11-22 Asia/Shanghai
- execution_started: 2026-11-22 15:06:14 Asia/Shanghai / 2026-11-22T07:06:14Z
- observation_cutoff: 2026-11-22 15:12:16 Asia/Shanghai / 2026-11-22T07:12:16.309Z
- observed_at: 2026-11-22T07:12:16.309Z
- preflight_main: `7ba400bfa6aae9303c24a4f132ab851f9cbf063b`
- status: NEW_ISSUER_RELEASE_OBSERVED / PARTIAL
- evidence_scope: BOUNDED_FIRST_PARTY_RELEASES / NOT_GLOBAL_CENSUS
- deployment_state_transition_date: UNVERIFIED
- delivery: DRAFT_PROPOSAL_NOT_MERGED

## Falsifiable Question / 可证伪问题
Registry 告警及凭据修复可否算独立 CI/TCK PASS

## Evidence Clock / 来源与时间
- S1 MCP Registry v1.8.11 issuer release｜published_at 2026-11-21T14:21:29Z / 2026-11-21 22:21:29 Asia/Shanghai｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.11
- S2 MCP Registry PR #1874 same-issuer merged record｜2026-11-20 GitHub merge, production promotion and verification described by publisher, NOT independent run receipt｜https://github.com/modelcontextprotocol/registry/pull/1874
- S3 Google ADK Python v2.15.0 publisher release｜2026-11-19T22:59:36Z, already admitted 11-21｜https://github.com/google/adk-python/releases/tag/v2.15.0
- S4 MCP Servers v2.5.0 publisher release｜2026-11-18T09:13:14Z｜https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
- S5 Poppy publisher pinned 1.1 draft revision｜2026-11-18T14:30:27Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/589743afa56ee02bea71d1509c29b0b4ca5b3e50
- fixed observed_at 2026-11-22T07:12:16.309Z，外部发行日并非 11-22 当日状态转换

## Workstream Finding / 本域判断
S1 列出 secret 及 staging collector off/on、Grafana 警报运维，S2 发行方自述 build 验证，均为可检索源方声明

## Constraints and Counterevidence / 边界
GitHub Release 不提供本仓实际运行独立 TCK/外部攻击复测结果

## Carry-forward / 后续证伪
需可执行测试入口、冻结 SHA、runner job id 与失败回放，W47-2/3 OPEN

## Execution / 运行分级
- bounded source reading EXECUTED，外部 Runtime/TCK/CI/checker NOT_EXECUTED，independent reviewer NOT_OBSERVED
- [Integrated](../2026-11-22.md)｜[Pack index](README.md)｜[W47](../../../../weekly/2026/2026-W47.md)
