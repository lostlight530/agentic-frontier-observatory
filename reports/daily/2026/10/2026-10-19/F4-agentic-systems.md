# F4｜智能体协议运行时 — 2026-10-19

## Native observation contract

- logical_date: 2026-10-19 Asia/Shanghai
- observed_at_cutoff: 2026-10-19 05:10:08 Asia/Shanghai
- research_start_main: 28c4eb8421a152b24af5bae09f4452fcfb263f31
- record_class: NATIVE_DAILY_WORKSTREAM_COMPONENT
- evidence_scope: first-party Poppy docs/repo, NIST and two GitHub releases, wider ecosystem NOT_ASSESSED
- event_date != publication_date != observed_at != state_transition_date != delivery_date
- external_TCK_runtime_benchmark: NOT_EXECUTED

- integrated_daily: ../2026-10-19.md

## Direct evidence

官方 Poppy 0.2 WIP 引入版本化文档及 breaking-change 清单，0.1 固定入口，0.2 当前草案描述 issuer 每 Company 独立、audience 归属与 DPoP 规则

## Evidence/date classification

Poppy official repository is PROJECT_FACT for exact commit and draft metadata，NIST is first-party current-state FACT，GitHub release metadata is issuer-supplied PROJECT_FACT，0.2 publication_date UNVERIFIED，observed_at 2026-10-19 05:10:08 Asia/Shanghai

## Limits

DISCOVERY != IDENTITY != CREDENTIAL != AUTHORITY != INVOCATION != EXECUTION；版本文本不是实现或跨厂商兼容证明

## Falsifiable next check

对比 0.1/0.2 条款并追踪兼容性验证

## Disposition

W43 OPEN，material documentation/versioning update does not imply operational maturity，October Monthly OPEN

## Primary sources

- Poppy Draft 0.2 WIP｜first-party current docs display Draft 0.2｜2026-10-19 observation｜https://personalagentprotocol.org/docs/spec
- Poppy official changelog｜Draft 0.2 In progress, breaking-change list｜version 0.2 not marked published｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/main/content/shared/changelog.mdx
- Poppy versions manifest｜0.2 without published field; 0.1 published 2026-10-09｜first-party repo commit 99af889 at 2026-10-18T20:17:38Z｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/main/content/versions/versions.json
- Poppy versioning commit｜freeze 0.1 and make Draft 0.2｜2026-10-18T20:17:38Z = 2026-10-19 04:17:38 CST｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/99af88988334fbc054583f8ce221915b1cca84d6
- NIST NCCoE SI｜Software and SI Agent Identity and Authorization, Soliciting Comments｜transition date UNVERIFIED｜https://www.nccoe.nist.gov/si
- A2A Python SDK｜v1.2.2 release metadata｜2026-10-05 09:50:04Z release｜https://github.com/a2aproject/a2a-python/releases/tag/v1.2.2
- MCP ext-tasks｜v0.2.2 Pre-release｜2026-09-30 release｜https://github.com/modelcontextprotocol/ext-tasks/releases/tag/v0.2.2
