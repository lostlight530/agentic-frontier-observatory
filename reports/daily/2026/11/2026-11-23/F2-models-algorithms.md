# 2026-11-23 Global F2｜模型与算法评测
- logical_date: 2026-11-23 Asia/Shanghai
- execution_started_at: 2026-11-23 04:56:30 Asia/Shanghai
- observation_cutoff: 2026-11-23 04:58:15 Asia/Shanghai / 2026-11-22T20:58:15.040Z
- preflight_main: `3d5770d8532610f74c499ff890f6c08e1157adc6`
- status: NEW_ISSUER_RELEASE_OBSERVED / PARTIAL
- scope: BOUNDED_GITHUB_FIRST_PARTY_RELEASES / NOT_GLOBAL_CENSUS
- external_runtime_transition_date: UNVERIFIED
- delivery: DRAFT_PROPOSAL_NOT_MERGED

## Research scope
ADK Python v2.15.0 仍是本轮核得的最新 release，发行方功能说明不等于本仓实际跑过多次可靠性评测或模型 benchmark
## Primary sources
- S1 Registry v1.8.12｜published_at 2026-11-22T08:38:33Z｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.12
- S2 Registry v1.8.13｜published_at 2026-11-22T16:29:50Z｜https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.13
- S3 ADK Python v2.15.0｜published_at 2026-11-19T22:59:36Z｜https://github.com/google/adk-python/releases/tag/v2.15.0
- S4 MCP Servers v2.5.0｜published_at 2026-11-18T09:13:14Z｜https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
## Counterevidence and limitations
本轮仅有发行方 GitHub 版本元数据与说明，缺少第三方运行测试、真实生产指标、权限撤销与持久副作用恢复回执
## Changed and stable
- NEW: Registry v1.8.12/v1.8.13 本轮首次核验
- STABLE: 不把发行方部署声明升格为独立 Runtime PASS
- UNVERIFIED: state_transition_date / independent conformance
## Weekly handoff
W48-H1..4 OPEN，November OPEN，11-24..30 NOT_DUE
