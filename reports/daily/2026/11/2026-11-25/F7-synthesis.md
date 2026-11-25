# 2026-11-25 Global F7｜Cross-System Synthesis and Judgment Revision
- logical_date: 2026-11-25 Asia/Shanghai
- execution_started_at: 2026-11-25 10:20:00 Asia/Shanghai
- observation_cutoff: 2026-11-25 10:20:00 Asia/Shanghai / 2026-11-25T02:20:00Z
- preflight_main: 47408fb47916974e303e53261e7a83cf414b5aaf
- task_id: Global-Native-2026-11-25 / role: Native Producer / run_id: manual-20261125-global-github-1020
- research_status: NEW_ISSUER_RELEASES_AND_ACTIVE_IETF_DRAFT / PARTIAL
- source_scope: BOUNDED_GITHUB_RELEASES_AND_SELECTED_OFFICIAL_PAGES_NOT_ECOSYSTEM_CENSUS
- deployment_state_transition_date: UNVERIFIED
- delivery: DRAFT_PROPOSAL_NOT_MERGED

## Research question
Which W48 hypotheses changed after the newly observed IETF draft and SDK releases

## Primary evidence
- IETF draft-07 specifies mutual authentication, credential validity, revocation signaling/propagation, dialog resume checks and fail-closed behavior
- OpenAI Agents SDK alpha2 documents cross-worker session and pending-approval restore, but requires atomic conditional writes, one writer per session and manual external-effect reconciliation
- ADK v2.15.1 fixes a streamed-output persistence edge case
- NIST project remains Soliciting Comments; no Build 3 artifact observed; no new multi-instrument laboratory evidence

## Changed versus stable
- H1：STRENGTHENED BUT OPEN — requirements text exists, but frozen TCK and cross-provider implementation remain absent
- H2：OPEN / UNCHANGED — NIST project status remains Soliciting Comments, no verified Build 3
- H3：STRENGTHENED BUT OPEN — resumable state, approval restore and safe-retry requirements are documented, but durable-effect ledger/compensation remains unproven
- H4：OPEN / UNCHANGED — no multi-instrument scientific-agent independent replication

## Counterevidence and unknown
Draft status and vendor release claims do not prove production runtime, revocation propagation, effect rollback or portability

## Falsifier / next step
Require a frozen profile, cross-vendor TCK, authorization revocation trace, fault-injected restart and durable external-effect reconciliation evidence