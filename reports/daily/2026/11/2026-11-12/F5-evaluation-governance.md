# F5｜评估、安全治理与标准｜2026-11-12

- logical_date: 2026-11-12 Asia/Shanghai
- actual_execution_at: 2026-11-12 18:53:37 Asia/Shanghai
- actual_execution_utc: 2026-11-12T10:53:37.467Z
- observation_cutoff: 2026-11-12 18:53:37 Asia/Shanghai
- preflight_main: `90ca8b49e0ccd7dd26020d01e944e00022d714fa`
- issuer_published_at: 2026-11-11T07:07:16Z
- first_observed_here: 2026-11-12 18:53:37 Asia/Shanghai
- precise_transition_date: UNVERIFIED beyond issuer release timestamp
- source_scope: MCP servers v2.4.0 issuer release metadata and notes only，not proof of installed patch or independent runtime testing
- checker/CI/TCK/runtime/benchmark/conformance: NOT_EXECUTED
- official_release: https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0
- official_release_api: https://api.github.com/repos/modelcontextprotocol/servers/releases/tags/v2.4.0
- issuer: modelcontextprotocol/servers maintainers
- exact_release: v2.4.0 / e1dc4b18dbb948921da37f3d4224a628730b43b0
- evidence_class: PROJECT_FACT for release existence，EXTERNAL_CLAIM for fix effectiveness，OBSERVATORY_ANALYSIS for limits

## Research question / 研究问题
MCP servers v2.4.0 本轮发行方材料对 评估、安全治理与标准 能够支持什么边界判断，以及如何反证未经运行验证的推断

## First-party verification / 原始证据
发行说明列出六项漏洞修复及 advisory 标识，涉及 filesystem TOCTOU、git config 执行和 fetch 地址/robots 匹配

## Limits and counterevidence / 边界与反证
官方安全公告与独立漏洞验证、TCK、SDK 可移植性或生产系统安全性认证各自不同

## State and handoff / 交接状态
- result: ISSUER_SECURITY_FIX_NOT_CONFORMANCE
- H46-1~4 remain OPEN；同一发行方与重复 URL 不能计作独立证明
- falsifier: 需要 exact-version 独立可复现 trace、平台行为对比、conformance 与外部副作用恢复验证
- runtime/TCK/checker/CI: NOT_EXECUTED
- publication_date and today's observed_at remain distinct
