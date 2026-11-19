# 2026-11-19 F4｜身份、授权和 Runtime

- logical_date: 2026-11-19 Asia/Shanghai
- observation_cutoff: 2026-11-19 08:31:26 Asia/Shanghai / 2026-11-19T00:31:26.697Z
- preflight_main: dcce44c0a6b5050989e534579feb169b2c7b27fa
- evidence_state: NEW ISSUER RELEASE AND DRAFT REVISION / PARTIAL
- execution_scope: source/metadata/selected diffs, no external system testing

## Falsifiable research question / 可证伪问题
Poppy 草案 operator signatures 是否等于用户授权

## First-party source and chronology / 精确对象
- S1 G2 issuer release, published 2026-11-18T09:13:14Z, observed_at 2026-11-19T00:31:26.697Z, https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
- S2 G2 Poppy Draft commit 2026-11-18T14:30:27Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/589743afa56ee02bea71d1509c29b0b4ca5b3e50
- S3 G2 Poppy Draft commit 2026-11-18T13:58:38Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/4bf9ffa688436db19b026a878d1a98952c25b0f8
- S4 G2 Poppy Draft commit 2026-11-18T13:53:30Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/8aec6ff8ff67c52731907dc9c3747913da6a3044
- S5 G2 Poppy Draft commit 2026-11-18T13:12:40Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/95892f000dda9310961776da67bf6bba199a8880
- All Poppy commits share one publisher, 1.1 remains Draft, 1.0 latest published
- actual_deployment_date: UNKNOWN, effective_change_date: UNVERIFIED

## Domain finding / 本域发现
S5 让 Personal Agent 向部分 OAuth 端点 SHOULD 附 operator signature，并覆盖 content-digest；S3 允许限制条件下替换 User ID

## Counterexample and uncertainty / 反证边界
认证运营者的签名不自动授予 delegated authority，也不能由旧 ID 的数据存续推导授权连续性

## Falsifier and handoff / 复核条件
跨 Company 身份/credential/delegation/revoke 执行 TCK 和 effect ledger，W47-1/3 OPEN

## Memory and execution / 周期及执行状态
W47-1..4 OPEN，11-16 OPERATOR_REPORTED_RUN / NATIVE_DELIVERY_GAP unchanged，11-20..22 NOT_DUE，November OPEN
EXECUTED first-party GitHub releases/commits/selected diffs，NOT_EXECUTED external TCK/CI/Runtime/recovery，NOT_OBSERVED independent reviewer
