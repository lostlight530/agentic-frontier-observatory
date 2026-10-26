# F4｜Agent、Runtime、Harness 与协议 — 2026-10-27

## Native observation contract

- logical_date: 2026-10-27 Asia/Shanghai
- observation_cutoff: 2026-10-27 05:00:11 Asia/Shanghai
- observation_utc: 2026-10-26T21:00:11Z
- research_base_main: cde27977bc6e727a9d959de5b634c39a32eec209
- record_class: NATIVE_DAILY_WORKSTREAM_COMPONENT
- evidence_scope: Poppy publisher website + versioned spec + GitHub main / manifest / commit provenance，NIST NCCoE current project display，其他全球 AI 事件 NOT_ASSESSED
- statement_classes: FIRST_PARTY_SOURCE_FACT / ATTRIBUTED_PUBLISHER_CLAIM / OBSERVATORY_ANALYSIS / UNCERTAIN
- Poppy_0_2_publisher_declared_publication_date: 2026-10-24
- Poppy_0_2_first_public_availability_timestamp: UNVERIFIED
- Poppy_0_3_state: Draft / In progress
- Poppy_GitHub_main_observed: a95b757872533a6ef1e1a9bcf29802857d2e5ff4
- Poppy_GitHub_publish_commit: 2da94ae4ce8bb7588440c9ce932a728ebfa16580
- Poppy_GitHub_commit_committer_date: 2026-10-26T03:26:23Z
- Poppy_current_surface_relation: RECONCILED_AT_THIS_CUT / DEPLOYMENT_CHRONOLOGY_UNVERIFIED
- NIST_current_display: Soliciting Comments
- NIST_state_transition_date: UNVERIFIED
- external_runtime_TCK_benchmark_conformance: NOT_EXECUTED
- prior_native_main: reports/daily/2026/10/2026-10-26.md + F1–F7
- W43: FINAL / CLOSED 7/7，H43-1 SOURCE_CONFLICT at prior cut，H43-2~3 OPEN
- W44: OPEN / 2 of 7 native dates，H44-1 OPEN / CURRENT_SURFACES_RECONCILED / PROVENANCE_UNVERIFIED，H44-2~3 OPEN / UNCHANGED
- October: OPEN，拟议合并后 26 native dates 10-01..11 and 10-13..27，10-12 historical native gap
- future_dates: 2026-10-28..31 NOT_DUE
- component_of: reports/daily/2026/10/2026-10-27.md

## First-party observation / 直接证据

Poppy 当前 GitHub main 0.2 published=2026-10-24、0.3 draft entry，changelog 记录 Session Keys 与 OAuth server metadata 设计变化

## Evidence boundary / 限制

0.3 为 In progress 草案，discovery、credential、authority、invocation、execution、revocation、durable effects、recovery 不可互相继承成熟度

## Falsifiable next check / 下一核验

核验版本化规范 diff、精确 release 记录、可执行授权与恢复 trace

## Disposition

MATERIAL_FIRST_PARTY_RECONCILIATION / PROVENANCE_UNVERIFIED / EXTERNAL_RUNTIME_NOT_EXECUTED

## Primary sources

- Poppy publisher changelog｜0.2 Published October 24, 2026，0.3 Draft / In progress｜https://personalagentprotocol.org/docs/changelog
- Poppy versioned 0.2 specification｜Version 0.2，正文仍称 draft version 0.2｜https://personalagentprotocol.org/docs/0.2/spec
- Poppy GitHub current main manifest｜main a95b757872533a6ef1e1a9bcf29802857d2e5ff4，0.2 published=2026-10-24，0.3 entry present｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a95b757872533a6ef1e1a9bcf29802857d2e5ff4/content/versions/versions.json
- Poppy GitHub current main changelog｜main a95b757872533a6ef1e1a9bcf29802857d2e5ff4，0.3 Draft / In progress，0.2 published｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a95b757872533a6ef1e1a9bcf29802857d2e5ff4/content/shared/changelog.mdx
- Poppy GitHub source commit｜commit 2da94ae4ce8bb7588440c9ce932a728ebfa16580，committer_date=2026-10-26T03:26:23Z，message Publish 0.2｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/2da94ae4ce8bb7588440c9ce932a728ebfa16580
- NIST NCCoE identity project｜current display Soliciting Comments，transition date UNVERIFIED｜https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization
