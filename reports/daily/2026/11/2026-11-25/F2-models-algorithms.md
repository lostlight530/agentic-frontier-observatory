# 2026-11-25 Global F2｜Models, Algorithms, and Multimodality
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
Do the newly observed releases provide new model/algorithm evidence or only SDK/runtime changes

## Primary evidence
- Google ADK Python v2.15.1 is a stable SDK release with a RemoteA2aAgent streamed-output persistence fix and other compatibility/routing fixes
- OpenAI Agents SDK v0.26.0 is a stable SDK release with guardrail, tool metadata, approval and sandbox behavior changes
- OpenAI Agents SDK v1.0.0-alpha.2 is a prerelease with resumable session and approval state support
- None of these release objects is a new foundation-model weight, training recipe or independent benchmark

## Changed versus stable
- NEW：three versioned SDK/runtime release objects observed
- STABLE：SDK release notes are not model-quality evidence

## Counterevidence and unknown
No model benchmark, independent evaluation, inference profile or reproduction run executed

## Falsifier / next step
Require exact model IDs, benchmark task/configuration, sample sizes, uncertainty and independent replication before making capability claims