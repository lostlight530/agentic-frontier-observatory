# 2026-11-18 F1｜协议历史与版本语义

- logical_date: 2026-11-18 Asia/Shanghai
- observation_cutoff: 2026-11-18 05:02:42 Asia/Shanghai / 2026-11-17T21:02:42Z
- preflight_main: `ae699fbcbd6735c018b55c835c1e923b88b8ba93`
- result: NEW ISSUER SOURCE REVISION / PARTIAL
- producer: native research, one bounded observation window

## Research question / 可证伪问题
Poppy 1.1 Draft 与 1.0 Published 的版本对象如何区分

## Source custody / 精确来源与观察时序
- 原生产截点 2026-11-18 05:02:42 Asia/Shanghai，核验补充时点 2026-11-18 12:07:27 Asia/Shanghai，同一 Daily 单元，没有新建第二个研究窗口
- S1 https://github.com/personal-agent-protocol/personal-agent-protocol/commit/a1deeab03c519b0597df4e060fe20bc16d41c31e — 发行方源码提交、2026-11-17T14:27:23Z Git committer time
- S2 https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a1deeab03c519b0597df4e060fe20bc16d41c31e/content/versions/versions.json — 1.1 无 published 字段、1.0 published=2026-11-14
- S3 https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9 — 旧版本发行 2026-11-10
- S4 https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0 — 旧版本发行 2026-11-11
- S1 与 S2 是相同 Poppy issuer lineage，互不增加独立来源强度

## Domain-specific finding / 领域判断
Pinned versions.json 将 1.1 排在首位却没有 published 字段，1.0 仍为 published=2026-11-14，#201 的 Git committer time 为 2026-11-17T14:27:23Z，New Draft 不构成新正式发布

## Falsifier and missing execution / 可证伪条件
以发行方对 1.1 添加 published 日期、版本锁定正式发布提交及原始发布时间证据为转变条件，不从 Git 时间推测网站实际可访问时刻

## Weekly handoff / 假设交接
W47-1 OPEN，外部 TCK、跨厂商 Runtime 与持久效果恢复 NOT_EXECUTED / NOT_OBSERVED

## Handoff and execution / 交接
W47-1..4 OPEN，NEW ISSUER SOURCE REVISION / PARTIAL，source/metadata reading limited，checker/TCK/runtime NOT_EXECUTED，independent reviewer NOT_OBSERVED
