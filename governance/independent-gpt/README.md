# Independent GPT Governance — Deep-Space Router

Status: current public recovery kernel
Scope: cold-start recovery and handoff into the existing external-audit governance ledger

This directory is the public entry point for a memoryless independent reviewer. It does not replace `governance/external-audit/` and does not create a second audit cadence.

## Recovery order

Recover current state from current merged `main` first. For this repository, use:

```text
current merged main
> current explicit repository contracts
> current canonical repository artifacts
> verified execution / workflow evidence for the referenced revision
> external audit interpretation
```

At audit start record the current date, default branch, current `main` SHA, relevant open pull requests, recent merged changes, and checks actually executed.

## Repository map

1. `README.md`, `SCOPE.md`, `METHODOLOGY.md`, `TAXONOMY.md`, and other current contracts define the public observatory model.
2. `DAILY_SOP.md`, `WEEKLY_SOP.md`, and `MONTHLY_SOP.md` define the native research cadence.
3. Current Daily / Weekly / Monthly reports and `SOURCE_REGISTRY.md` hold canonical research and source-state evidence within their declared scopes.
4. Current-state projections such as repository indexes and active-watch surfaces must follow canonical research truth; projection health is audited separately from research-core health.
5. `governance/external-audit/README.md` defines the independent external-audit contract, cadence, result states, public/private boundary, and no-backfill rule.
6. `governance/external-audit/weekly/` and `governance/external-audit/semimonthly/` are the durable governance ledger for audits that actually ran.
7. Git history, merged PR chronology, and revision-matched workflow evidence resolve disputed timing, current projection, and delivery claims.

## Layer separation

Keep the native research chain and independent governance distinct:

```text
Daily -> Weekly -> Monthly = research production and memory
governance/external-audit/ = independent governance evidence
```

An external audit record does not become research evidence merely because it is stored in the repository. GitHub Actions proves only the execution actually observed for the referenced revision.

`HEALTHY` may still require writing the canonical governance record for an audit that actually ran, but it does not authorize activity-only edits to research or implementation.

## History discipline

Historical reports and audit records are point-in-time evidence. Later current-state repair does not erase the earlier defect. Do not backfill an audit that did not actually run. A missing audit file is not proof that an audit ran or failed.

Preserve refuted, open, degraded, blocked, negative, and unknown states. Use correction or reconciliation to move current interpretation forward without rewriting sealed history.

## Public boundary

This recovery kernel is intentionally repository-bounded. It relies on repository-visible evidence and public sources where needed. It does not require reconstruction of unavailable operator context or unrelated orchestration.

## Handoff minimum

Follow the minimum record fields and result semantics defined by `governance/external-audit/README.md`. A handoff must make the base `main` SHA, checked window, authority, actual checks, findings, repair state, risk, and unresolved items reviewable by the next memoryless agent.

Independent governance may recommend or prepare bounded repair. Final merge and doctrine authority remains with the maintainer.
