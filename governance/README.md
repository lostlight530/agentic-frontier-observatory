# Governance Map — Agentic Frontier Observatory

Calibration: 2026-09-17

This directory contains distinct repository-local governance surfaces. They are complementary and must not be collapsed into the research-production chain or into each other.

## Entry points

- `independent-gpt/README.md` — cold-start recovery and bounded maintenance/delivery router for a memoryless independent maintainer.
- `external-audit/README.md` — active independent audit contract and durable weekly / semimonthly governance ledger.

The cold-start router is not a second audit cadence. The external-audit ledger is not the observatory research chain.

## Repository production vs governance

```text
DAILY_SOP.md / WEEKLY_SOP.md / MONTHLY_SOP.md
  ↓
reports/
  Daily -> Weekly -> Monthly
  = observatory research production and research memory

governance/independent-gpt/
  = recovery / overlap / bounded maintenance-delivery router

governance/external-audit/
  weekly/ + semimonthly/
  = independent governance evidence about repository state

GitHub Actions / other runners
  = revision-bound execution evidence only when actually observed

Human Maintainer
  = final doctrine and merge authority
```

The repository does not treat runner success as research truth or universal correctness.

## Authority

```text
current merged main
> current explicit repository contracts
> current canonical repository artifacts
> verified revision-bound execution / runner evidence
> current governance contracts
> external-audit interpretation
> historical point-in-time records
```

A more specific current repository contract wins for its subject.

## Maintenance-control rules

Repository-maintenance identity uses the owning surface/task, logical period/evidence window when applicable, producer/maintainer, exact base revision, and run identity when available.

Before any write, refresh current `main`, open PRs, and live overlapping branches.

```text
overlap -> COORDINATE
no confirmed defect -> NO_CHANGE_REQUIRED
confirmed bounded drift -> REPAIR
missing/unsafe evidence -> BLOCKED
```

**Write never probes.** A normal no-defect maintenance pass does not create activity-only branches or PRs. The external-audit cadence is different only where its active contract requires a canonical governance record for an audit that actually ran.

## SOP and execution-layer boundary

`DAILY_SOP.md`, `WEEKLY_SOP.md`, and `MONTHLY_SOP.md` are active research contracts. Maintaining their text does not prove a scheduled research run occurred.

```text
SOP present != SOP executed
checker/source present != checker executed
workflow configured != workflow observed
contract inspection != PASS
```

Executable checker/producer code, if present, is an execution-layer owner and is not changed merely to normalize governance prose. Code changes require a confirmed code-owned defect.

## History and privacy

Merged Daily, Weekly, Monthly, ledger, history, and audit records remain point-in-time evidence. Later correction uses reconciliation, errata, or successor records; it does not silently rewrite the earlier artifact.

Public governance may expose repository facts, public task identity, audit scope, evidence, result, risk, rollback, and unresolved state. It must not expose private prompts, hidden reasoning, credentials, private memory, or unnecessary private operator topology.

## Delivery boundary

For a real bounded repository repair:

```text
fresh current main + overlap refresh
→ owning-surface correction
→ aggregate main...branch review
→ actual checks + NOT_EXECUTED checks recorded
→ one Draft PR
→ STOP for maintainer review
```

No auto-merge, direct `main` write, or force-push is part of this maintenance contract.

Final doctrine and merge authority remains with the maintainer.
