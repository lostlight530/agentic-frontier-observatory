# 2026-11-25 Global F4｜Agents, Runtimes, Harnesses, and Protocols
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
Do current releases and draft requirements provide evidence for resumable task state, approval recovery, cancellation and external-effect recovery

## Primary evidence
- ADK Python v2.15.1 fixes RemoteA2aAgent streamed-output persistence when last_chunk is absent; this is a publisher-described SDK correction, not an independent recovery test
- OpenAI Agents SDK v1.0.0-alpha.2 documents ResumableSession and ResumableSessionStore for conversation history and pending approvals across workers
- The alpha release requires atomic conditional writes and one writer per session; restored workspace path, permissions and hooks must remain compatible
- It requires reconciliation of partial edits and external effects before retry, and does not restart terminated commands
- Cancellation gives active Agent.as_tool calls a 250ms cleanup window; longer-running tools may continue and cause side effects
- IETF draft-07 requires resume checks for participant identity, current dialog state, termination and authorization revocation, and says an unknown operation outcome must remain unresolved rather than blindly re-sending

## Changed versus stable
- NEW：one stable ADK release, one stable OpenAI SDK release and one OpenAI prerelease add versioned implementation claims
- NEW：IETF draft-07 makes authorization-aware resumption and revocation propagation explicit protocol requirements
- STABLE：PERSISTENT_TASK_STORE != DURABLE_EFFECT_RECOVERY; dialog resume != operation outcome proof

## Counterevidence and unknown
No external-effect ledger, idempotency proof, compensation/rollback test, cross-provider revocation trace or independent worker-failure test executed

## Falsifier / next step
Run a version-pinned crash/restart case with duplicate tool requests, approval restore, authorization revocation and externally visible side effects