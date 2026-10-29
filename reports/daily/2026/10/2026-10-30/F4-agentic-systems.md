# F4｜Agent、Runtime、Harness 与协议 — 2026-10-30
- logical_date: 2026-10-30 Asia/Shanghai
- execution_started_at: 2026-10-30 05:02:15 Asia/Shanghai
- observation_cutoff: 2026-10-30 05:04:00 Asia/Shanghai
- observation_utc: 2026-10-29T21:04:00Z
- research_base_main: d26284e5c9811ca2718a98099cbb32289a43999d
- record_class: NATIVE_DAILY_RESEARCH
- evidence_scope: Poppy 0.3 draft GitHub revision + versioned publisher specs/changelog + NIST NCCoE，其他全球 AI 事件 NOT_ASSESSED
- result: MATERIAL_FIRST_PARTY_DRAFT_REVISION / BOUNDED_INTERPRETATION
- evidence_class: FIRST_PARTY_SOURCE_FACT / ATTRIBUTED_PUBLISHER_CLAIM / OBSERVATORY_ANALYSIS / UNCERTAIN
- independent_conformance: NOT_OBSERVED
- external_runtime_TCK_CI_benchmark: NOT_EXECUTED
- same_issuer_multi_surface: NOT_INDEPENDENT_CORROBORATION

## Finding / 观察
Poppy draft 0.3 将 Session header 与 OAuth 账户访问拆开，引入按请求签名的 Poppy-Session JWT，Company 自定义 scopes，Operations v2 改用携带用户批准的重试语义

## Evidence and interpretation / 证据与解释
这些属于发行方草案文本与同一 GitHub 修订，不能由 DRAFT_REQUIREMENT 推断跨公司实际授权、撤销、回滚或兼容性

## Boundary and next check / 边界与下一轮
新旧 0.x 允许破坏性变更，0.3 仍 Draft / In progress，独立互操作和 effect ledger NOT_OBSERVED

## Primary sources / 一手来源
- Poppy draft 0.3 revision｜https://github.com/personal-agent-protocol/personal-agent-protocol/commit/3e9bada9ec8f66777b43e429d49574131dc2f67e
- Poppy draft 0.3 changelog｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/3e9bada9ec8f66777b43e429d49574131dc2f67e/content/shared/changelog.mdx
- Poppy draft 0.3 specification｜https://personalagentprotocol.org/docs/0.3/spec
- Poppy version manifest｜https://github.com/personal-agent-protocol/personal-agent-protocol/blob/3e9bada9ec8f66777b43e429d49574131dc2f67e/content/versions/versions.json
- Poppy published 0.2｜https://personalagentprotocol.org/docs/0.2/spec
