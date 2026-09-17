## Outcome and exact scope
What observation, correction, governance surface, or metadata changed, and what remains intentionally unchanged?

## Base, owner, and observation window
- Base revision / current merged `main` observed:
- Owning surface / task:
- Logical period / evidence window:
- Producer / maintainer / run identity when applicable:
- Relevant open PRs or live branches checked:

## Evidence classification
- [ ] Facts, attributed external claims, repository analysis, and unknown state are distinguished
- [ ] Event date, publication/update date, repository observation date, and state-transition date are not conflated
- [ ] Drafts, roadmaps, demos, and marketing claims are not presented as implemented capability
- [ ] Uncertainty, conflict, missing evidence, rejected state, and unverifiable state remain explicit
- [ ] Research production, external-audit governance, and repository-maintenance delivery are not conflated

## Source and production impact
List affected source-registry, methodology, taxonomy, Daily/Weekly/Monthly, governance, metadata, or public-facing surfaces. State which active SOPs or execution-layer owners are deliberately unchanged.

## Verification
List source/repository checks actually performed and their results.

- Checks actually executed:
- Checks not executed (`NOT_EXECUTED`):
- Scheduler/workflow execution not observed (`EXECUTION_NOT_OBSERVED`) when material:

Contract/source inspection is not an execution PASS. Do not report historical PASS as current PASS without revision-matched evidence.

## SOP / execution-layer boundary
- [ ] SOP contract edits, if any, do not claim that a scheduled task executed
- [ ] Checker/producer/runtime code is unchanged unless a confirmed defect is owned by that code
- [ ] No unrelated `.py` or execution-layer change is bundled into a governance-only repair

## Historical preservation
- [ ] Existing point-in-time Daily/Weekly/Monthly/ledger/audit records are preserved unless the record itself is demonstrably corrupt
- [ ] Material corrections move forward through correction/reconciliation/successor semantics
- [ ] Missing historical execution is not backfilled as an original run

## Maintenance overlap and delivery
- [ ] Current `main`, open PRs, and live same-surface branches were refreshed before write/delivery
- [ ] Overlap was handled as `COORDINATE` rather than parallel ownership
- [ ] No write was used merely to probe access
- [ ] Aggregate `main...branch` diff contains only intended surfaces
- [ ] No activity-only PR was created where `NO_CHANGE_REQUIRED` applied

## Security and privacy
No credentials, private information, full paywalled text, private prompts/memory, hidden reasoning, or non-public evidence is included.

## Rollback
Describe the smallest safe rollback.

## Final review
- [ ] Change is focused and source-grounded
- [ ] Capability testing or benchmark reproduction has not been substituted for this repository's source-analysis role
- [ ] No unrelated research-chain, execution-layer, or governance redesign is bundled into this PR
- [ ] Draft PR is treated as a review boundary, not proof of merge/runtime/scientific success
