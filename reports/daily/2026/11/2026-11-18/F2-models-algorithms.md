# 2026-11-18 F2｜模型与算法证据

- logical_date: 2026-11-18 Asia/Shanghai
- observation_cutoff: 2026-11-18 05:02:42 Asia/Shanghai / 2026-11-17T21:02:42Z
- preflight_main: `ae699fbcbd6735c018b55c835c1e923b88b8ba93`
- result: NEW ISSUER SOURCE REVISION / PARTIAL
- producer: native research, one bounded observation window

## Research question / 可证伪问题
文档版本分支能否证明模型/Agent benchmark 提升

## Source custody / 精确来源与观察时序
- 原生产截点 2026-11-18 05:02:42 Asia/Shanghai，核验补充时点 2026-11-18 12:07:27 Asia/Shanghai，同一 Daily 单元，没有新建第二个研究窗口
- S1 https://github.com/personal-agent-protocol/personal-agent-protocol/commit/a1deeab03c519b0597df4e060fe20bc16d41c31e — 发行方源码提交、2026-11-17T14:27:23Z Git committer time
- S2 https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a1deeab03c519b0597df4e060fe20bc16d41c31e/content/versions/versions.json — 1.1 无 published 字段、1.0 published=2026-11-14
- S3 https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9 — 旧版本发行 2026-11-10
- S4 https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0 — 旧版本发行 2026-11-11
- S1 与 S2 是相同 Poppy issuer lineage，互不增加独立来源强度

## Domain-specific finding / 领域判断
#201 修改了 36 个源码及文档文件，主要是 Draft 复制、文档路由与版本默认值，没有对应模型权重、独立评测、任务成功率及采样分母

## Falsifier and missing execution / 可证伪条件
应取得固定模型、harness、数据集与实验执行日志的独立测试，不能用 Git changed_files 代替模型性能指标

## Weekly handoff / 假设交接
W47-4 OPEN，外部 TCK、跨厂商 Runtime 与持久效果恢复 NOT_EXECUTED / NOT_OBSERVED

## Handoff and execution / 交接
W47-1..4 OPEN，NEW ISSUER SOURCE REVISION / PARTIAL，source/metadata reading limited，checker/TCK/runtime NOT_EXECUTED，independent reviewer NOT_OBSERVED
