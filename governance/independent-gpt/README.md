# Independent GPT Governance — Deep-Space Router

Status: current public recovery kernel  
Calibration: 2026-09-17  
Scope: cold-start recovery, maintenance/audit handoff, bounded repair, and delivery into the existing external-audit governance ledger

This directory is the public entry point for a memoryless independent maintainer/reviewer. It does not replace `governance/external-audit/`, does not create a second audit cadence, and does not become research evidence.

## Recovery order

Recover current state from current merged `main` first. For this repository, use:

```text
current merged main
> current explicit repository contracts
> current canonical repository artifacts
> verified execution / workflow evidence for the referenced revision
> current governance contracts
> external-audit interpretation
> historical point-in-time records
```

Where a more specific current contract exists, that contract wins for its subject.

At audit/maintenance start record:

- current date and logical period/evidence window;
- default branch and exact current `main` SHA;
- relevant open PRs and live branches;
- recent merged changes on the same surface;
- checks actually executed, separately from checks merely available;
- the exact owning file/contract before any write.

## Repository map

1. `README.md`, `SCOPE.md`, `METHODOLOGY.md`, `TAXONOMY.md`, and current repository contracts define the observatory model.
2. `DAILY_SOP.md`, `WEEKLY_SOP.md`, and `MONTHLY_SOP.md` define the native research-production cadence.
3. Current Daily / Weekly / Monthly reports and `SOURCE_REGISTRY.md` hold canonical research/source-state evidence within their declared scopes.
4. Current-state projections and reader-facing indexes must follow canonical research truth; projection health is distinct from research-core health.
5. `governance/external-audit/README.md` defines the independent governance cadence, durable audit ledger, result states, public/private boundary, and no-backfill rule.
6. `governance/external-audit/weekly/` and `governance/external-audit/semimonthly/` contain audit records that actually ran.
7. Git history, merged PR chronology, and revision-matched workflow evidence resolve disputed timing, delivery, and execution claims.

## Layer separation

```text
Daily -> Weekly -> Monthly
= research production and research memory

governance/external-audit/
= independent governance evidence

repository maintenance delivery
= bounded correction/reconciliation only when a current defect is confirmed
```

An external audit record does not become research evidence merely because it is stored here. GitHub Actions or another runner proves only the execution actually observed for the referenced revision.

## Maintenance identity and overlap

For maintenance/delivery work, record when applicable:

```text
repository
+ owning surface / task
+ logical period / evidence window
+ producer / maintainer
+ exact base revision
+ run identity when available
```

Before any write, refresh open PRs and live branches. If another live task owns the same surface and logical period, return `COORDINATE` rather than creating a parallel line.

```text
same live owner/surface/period -> COORDINATE
no confirmed defect -> NO_CHANGE_REQUIRED
confirmed bounded drift -> REPAIR
unsafe / missing evidence -> BLOCKED
```

**Write never probes.** Do not create a branch, commit, issue, file, or PR merely to test permissions or activity.

The external-audit contract is a special required-governance producer: when its cadence requires a canonical audit record and the audit actually ran, `HEALTHY` may still produce that governance record. This does not authorize activity-only edits to research, implementation, or SOP files.

## Execution-evidence discipline

```text
SOP present != SOP executed
checker/source present != checker executed
workflow configured != workflow observed
executed != passed
passed != research truth
contract inspection != runtime verification
```

Unrun checks are `NOT_EXECUTED`. Unobserved scheduler/workflow execution is `EXECUTION_NOT_OBSERVED` when material. Never promote either to PASS.

The repository's active SOP documents may be maintained as contracts, but executable scripts or checker/producer code must not be changed merely to align prose. Change execution-layer code only when a verified defect is owned by that code and the repair is independently justified.

## History discipline

Historical Daily, Weekly, Monthly, ledger, history, and audit records remain point-in-time evidence. Later current-state repair does not erase the earlier defect or uncertainty. Do not backfill a run that was not verified to have happened.

Preserve refuted, open, degraded, blocked, negative, missing, and unknown states. Use correction/reconciliation or a successor record to move current interpretation forward.

## Repair boundary

When drift is confirmed:

1. identify the owning current file/contract;
2. identify every current router/operator/configuration surface that must remain synchronized;
3. preserve historical point-in-time records;
4. make the smallest semantically complete correction;
5. refresh `main` and overlap state before final delivery;
6. inspect the aggregate `main...branch` diff;
7. record checks run and checks not run;
8. open at most one bounded Draft PR for that repository maintenance unit;
9. stop for maintainer review without merge.

## Public boundary

Public governance may record repository facts, public task identity, scope, evidence, result state, risk, rollback, and unresolved items. It must not publish private prompts, hidden reasoning, credentials, private memory, or unrelated operator topology.

## Handoff minimum

Follow the minimum record fields and result semantics in `governance/external-audit/README.md`. A handoff must make base `main` SHA, checked window, authority, actual checks, findings, repair state, risk, unresolved items, and delivery state reviewable by the next memoryless agent.

A Draft PR is a review boundary, not proof of mergeability, execution success, scientific validity, or final truth. Final merge and doctrine authority remains with the maintainer.
