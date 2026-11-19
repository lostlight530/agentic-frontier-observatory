# 2026-11-19 F1｜历史与协议版本

- logical_date: 2026-11-19 Asia/Shanghai
- observation_cutoff: 2026-11-19 08:31:26 Asia/Shanghai / 2026-11-19T00:31:26.697Z
- preflight_main: dcce44c0a6b5050989e534579feb169b2c7b27fa
- evidence_state: NEW ISSUER RELEASE AND DRAFT REVISION / PARTIAL
- execution_scope: source/metadata/selected diffs, no external system testing

## Falsifiable research question / 可证伪问题
Poppy 1.1 Draft 更新是否意味着发布 1.1

## First-party source and chronology / 精确对象
- S1 G2 issuer release, published 2026-11-18T09:13:14Z, observed_at 2026-11-19T00:31:26.697Z, https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
- S2 G2 Poppy Draft commit 2026-11-18T14:30:27Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/589743afa56ee02bea71d1509c29b0b4ca5b3e50
- S3 G2 Poppy Draft commit 2026-11-18T13:58:38Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/4bf9ffa688436db19b026a878d1a98952c25b0f8
- S4 G2 Poppy Draft commit 2026-11-18T13:53:30Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/8aec6ff8ff67c52731907dc9c3747913da6a3044
- S5 G2 Poppy Draft commit 2026-11-18T13:12:40Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/95892f000dda9310961776da67bf6bba199a8880
- All Poppy commits share one publisher, 1.1 remains Draft, 1.0 latest published
- actual_deployment_date: UNKNOWN, effective_change_date: UNVERIFIED

## Domain finding / 本域发现
11-18 Poppy 作者提交针对 Draft 的授权、身份和反馈文本变更，补充明确草案实现警示

## Counterexample and uncertainty / 反证边界
同一发行方 commit 是版本化编辑，不是正式发布或多个 independent implementer

## Falsifier and handoff / 复核条件
等发行方 published manifest、具体发布 commit 和独立互通收据，W47-1 OPEN

## Memory and execution / 周期及执行状态
W47-1..4 OPEN，11-16 OPERATOR_REPORTED_RUN / NATIVE_DELIVERY_GAP unchanged，11-20..22 NOT_DUE，November OPEN
EXECUTED first-party GitHub releases/commits/selected diffs，NOT_EXECUTED external TCK/CI/Runtime/recovery，NOT_OBSERVED independent reviewer
