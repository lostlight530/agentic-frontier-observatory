# 2026-11-18 F7｜综合证据与未决假设

- logical_date: 2026-11-18 Asia/Shanghai
- observation_cutoff: 2026-11-18 05:02:42 Asia/Shanghai / 2026-11-17T21:02:42Z
- preflight_main: `ae699fbcbd6735c018b55c835c1e923b88b8ba93`
- result: NEW ISSUER SOURCE REVISION / PARTIAL
- producer: native research, one bounded observation window

## Research question / 可证伪问题
W47 假设如何处理新增 Draft 而不产生虚假强化

## Source custody / 精确来源与观察时序
- 原生产截点 2026-11-18 05:02:42 Asia/Shanghai，核验补充时点 2026-11-18 12:07:27 Asia/Shanghai，同一 Daily 单元，没有新建第二个研究窗口
- S1 https://github.com/personal-agent-protocol/personal-agent-protocol/commit/a1deeab03c519b0597df4e060fe20bc16d41c31e — 发行方源码提交、2026-11-17T14:27:23Z Git committer time
- S2 https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a1deeab03c519b0597df4e060fe20bc16d41c31e/content/versions/versions.json — 1.1 无 published 字段、1.0 published=2026-11-14
- S3 https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9 — 旧版本发行 2026-11-10
- S4 https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0 — 旧版本发行 2026-11-11
- S1 与 S2 是相同 Poppy issuer lineage，互不增加独立来源强度

## Domain-specific finding / 领域判断
核实 Poppy 1.1 newest Draft、1.0 latest Published，属于发行方的具体 source_revision；W47-1 多厂商身份/授权、W47-2 NIST Build3、W47-3 外部效果恢复、W47-4 科研实验端到端复现仍 OPEN，Global 11-16 native gap 不补写

## Falsifier and missing execution / 可证伪条件
以版本锁定的独立执行、回放和恢复记录推动相应 H，而不是通过重复发行方文档、Git 提交数量或 Snapshot 时间推断 PASS

## Weekly handoff / 假设交接
W47-1..4 OPEN，外部 TCK、跨厂商 Runtime 与持久效果恢复 NOT_EXECUTED / NOT_OBSERVED

## Handoff and execution / 交接
W47-1..4 OPEN，NEW ISSUER SOURCE REVISION / PARTIAL，source/metadata reading limited，checker/TCK/runtime NOT_EXECUTED，independent reviewer NOT_OBSERVED

## Later source successor / F7 后验事件日期校准
- event_date 11-16, issuer Git time 11-16T10:25:05Z, later_observed_at 2026-11-18T17:40:21+08:00：一条 Poppy Demo source revision，不能归属为 original Nov16 Native research，也不产生第二个原生日
- Source Registry、G-W73 watchlist、ledger 在本次 later observation 向前更新唯一原始对象，W47 / November 只修复可核实来源与责任边界
- W47-1..4 OPEN，Native 2/7 merged + 11-16 operator-reported run / delivery gap；Runtime/TCK/independent science NOT_EXECUTED
