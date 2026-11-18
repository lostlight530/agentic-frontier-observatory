# 2026-11-18 F6｜发行生态与采纳

- logical_date: 2026-11-18 Asia/Shanghai
- observation_cutoff: 2026-11-18 05:02:42 Asia/Shanghai / 2026-11-17T21:02:42Z
- preflight_main: `ae699fbcbd6735c018b55c835c1e923b88b8ba93`
- result: NEW ISSUER SOURCE REVISION / PARTIAL
- producer: native research, one bounded observation window

## Research question / 可证伪问题
发行方一份新 Draft 是否增加跨公司采用的独立证据数

## Source custody / 精确来源与观察时序
- 原生产截点 2026-11-18 05:02:42 Asia/Shanghai，核验补充时点 2026-11-18 12:07:27 Asia/Shanghai，同一 Daily 单元，没有新建第二个研究窗口
- S1 https://github.com/personal-agent-protocol/personal-agent-protocol/commit/a1deeab03c519b0597df4e060fe20bc16d41c31e — 发行方源码提交、2026-11-17T14:27:23Z Git committer time
- S2 https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a1deeab03c519b0597df4e060fe20bc16d41c31e/content/versions/versions.json — 1.1 无 published 字段、1.0 published=2026-11-14
- S3 https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9 — 旧版本发行 2026-11-10
- S4 https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0 — 旧版本发行 2026-11-11
- S1 与 S2 是相同 Poppy issuer lineage，互不增加独立来源强度

## Domain-specific finding / 领域判断
Poppy 1.0 发布、1.1 Draft、spec、manifest、changelog 和 kit 仍来自同一发布者，不能视为多公司验证；MCP Registry 与 Servers 发布的是不同产品对象

## Falsifier and missing execution / 可证伪条件
需要独立公司实际接入与相同冻结版协议的验收证据、具名系统及明确应用规模的真实分母

## Weekly handoff / 假设交接
W47-1 OPEN，外部 TCK、跨厂商 Runtime 与持久效果恢复 NOT_EXECUTED / NOT_OBSERVED

## Handoff and execution / 交接
W47-1..4 OPEN，NEW ISSUER SOURCE REVISION / PARTIAL，source/metadata reading limited，checker/TCK/runtime NOT_EXECUTED，independent reviewer NOT_OBSERVED
