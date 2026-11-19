# 2026-11-19 F3｜基础设施与 SDK

- logical_date: 2026-11-19 Asia/Shanghai
- observation_cutoff: 2026-11-19 08:31:26 Asia/Shanghai / 2026-11-19T00:31:26.697Z
- preflight_main: dcce44c0a6b5050989e534579feb169b2c7b27fa
- evidence_state: NEW ISSUER RELEASE AND DRAFT REVISION / PARTIAL
- execution_scope: source/metadata/selected diffs, no external system testing

## Falsifiable research question / 可证伪问题
MCP 发行版本与运行实例是否可视为相同身份

## First-party source and chronology / 精确对象
- S1 G2 issuer release, published 2026-11-18T09:13:14Z, observed_at 2026-11-19T00:31:26.697Z, https://github.com/modelcontextprotocol/servers/releases/tag/v2.5.0
- S2 G2 Poppy Draft commit 2026-11-18T14:30:27Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/589743afa56ee02bea71d1509c29b0b4ca5b3e50
- S3 G2 Poppy Draft commit 2026-11-18T13:58:38Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/4bf9ffa688436db19b026a878d1a98952c25b0f8
- S4 G2 Poppy Draft commit 2026-11-18T13:53:30Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/8aec6ff8ff67c52731907dc9c3747913da6a3044
- S5 G2 Poppy Draft commit 2026-11-18T13:12:40Z, https://github.com/personal-agent-protocol/personal-agent-protocol/commit/95892f000dda9310961776da67bf6bba199a8880
- All Poppy commits share one publisher, 1.1 remains Draft, 1.0 latest published
- actual_deployment_date: UNKNOWN, effective_change_date: UNVERIFIED

## Domain finding / 本域发现
S1 monorepo v2.5.0 与 mcp-server-git 2026.11.18、server-filesystem 2.4.0、server-everything 2.3.1 是不同版本对象

## Counterexample and uncertainty / 反证边界
GitHub Release 不证明任一具体 npm/PyPI 部署升级，date-version 迁移 semver 可能使自动升级不发生

## Falsifier and handoff / 复核条件
需准确版本和 digest、环境、部署凭据、回归日志，W47-3 OPEN

## Memory and execution / 周期及执行状态
W47-1..4 OPEN，11-16 OPERATOR_REPORTED_RUN / NATIVE_DELIVERY_GAP unchanged，11-20..22 NOT_DUE，November OPEN
EXECUTED first-party GitHub releases/commits/selected diffs，NOT_EXECUTED external TCK/CI/Runtime/recovery，NOT_OBSERVED independent reviewer
