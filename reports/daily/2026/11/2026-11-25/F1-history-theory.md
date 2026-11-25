# 2026-11-25 Global F1｜History, Theory, and Paradigms
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
Agentic communication requirements are moving from broad protocol discussion toward explicit identity, authorization, revocation and recovery semantics

## Primary evidence
- IETF draft-07, published 2026-11-02, is an Active Internet-Draft with Intended Status Informational
- CMN-8..10 specify credential validity checks, revoked-credential signaling and authorization revocation propagation across delegation chains
- CMN-11 separates dialog termination from delegated-subtask cancellation
- B1-6..8 define persistent dialog IDs, resume validation and fail-closed behavior
- The draft explicitly says it is not endorsed by IETF and has no formal standing

## Changed versus stable
- NEW：first observation of an explicit AgentProto working draft with identity/revocation/resumption requirements
- STABLE：draft requirements do not establish a final RFC, implementation or cross-vendor conformance

## Counterevidence and unknown
No frozen implementation profile, TCK, multi-provider acceptance or final RFC status observed

## Falsifier / next step
Track draft revisions, working-group adoption and a version-pinned multi-implementation conformance suite