---
name: Methodology or governance correction
about: Correct methodology, taxonomy, source policy, research-production boundaries, maintenance control, or repository governance
title: "[Governance] "
labels: ""
assignees: ""
---

## Exact rule or owning surface
Identify the current methodology, SOP, source-policy, taxonomy, governance, recovery, maintenance, or delivery statement at issue.

## Current repository evidence
- current merged `main` SHA:
- exact path / owning surface:
- logical period or evidence window when applicable:
- relevant open PR / live branch overlap:

Distinguish current repository truth from dated research/audit records and historical PR/task prose.

## Proposed correction
Describe the smallest current correction and its evidence basis. If no current defect is confirmed, use `NO_CHANGE_REQUIRED` rather than manufacturing a change.

## Execution evidence
Record checks actually executed separately from available-but-unrun checks.

```text
unrun -> NOT_EXECUTED
unobserved scheduler/workflow -> EXECUTION_NOT_OBSERVED
contract inspection != PASS
```

## SOP / code boundary
State whether the issue concerns an SOP contract, governance prose/configuration, or execution-layer code. Do not modify checker/producer/runtime `.py` merely to align wording; code changes require a confirmed code-owned defect.

## Downstream impact
List affected Daily/Weekly/Monthly production, source registry, taxonomy, metadata, external-audit, recovery, contribution, or delivery references.

## History and precedence
State which historical artifacts remain valid point-in-time observations and how correction/reconciliation should take precedence going forward. Do not backfill an unverified historical run.

## Coordination, review, and rollback
- overlapping live owner/surface/period -> `COORDINATE`
- no write as permission probe
- define explicit non-goals
- define the smallest rollback
- final merge/doctrine authority remains with the maintainer
