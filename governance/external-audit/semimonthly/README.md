# Semimonthly External Audit / 半月外部维护深审

This directory stores the deeper independent governance review for the repository. It is broader than the weekly audit and remains separate from `reports/monthly/` research synthesis.

## Cadence

Adopted from **2026-09-01**.

Normal logical windows:

```text
1–15
16–natural month end
```

The record filename uses the checkpoint date:

```text
YYYY-MM-DD.md
```

Every record states the exact observed window and actual `checked_at`. Future dates are not marked missing before they occur. A missed historical checkpoint is not recreated as if it had run at the time.

## Deep-audit scope

The semimonthly audit independently refreshes GitHub truth and checks the weekly scope plus the durable repository surface:

### Repository governance and navigation

- root `README.md`;
- `SCOPE.md`;
- `ORIGIN.md`;
- `METHODOLOGY.md`;
- `TAXONOMY.md`;
- `TEN_REPOSITORY_CONTEXT.md`;
- `CONTRIBUTING.md` and `SECURITY.md`;
- Daily/Weekly/Monthly SOP surfaces for consistency with actual canonical paths and state.

### Research-memory integrity

- Daily coverage, packs, and monthly Daily index;
- canonical Weekly history and current open week;
- Monthly state, checkpoint semantics, and natural-month closure boundary;
- explicit corrections/reconciliations and protection against silent historical rewrite.

### Current-state and durable assets

- `SOURCE_REGISTRY.md`;
- `watchlist/ACTIVE.md`;
- `history/`;
- `ledger/`;
- `workstreams/`;
- conditional `entities/` and `maps/` assets;
- any current-state projection or index that can drift away from canonical research truth.

### Global-observatory epistemic boundaries

Check that repository wording still preserves, where applicable:

```text
Capability != Deployability
Discovery != Authorization != Invocation
Identity != Credential != Authority
Consent != Approval != Publication != Implementation != Conformance
Protocol Publication != Operational Maturity
Admission != Continuous Authorization
Runtime Stop != Rollback
Termination != Remediation
Context Continuity != Authority Continuity
Task Reference != Task Authority
```

### External revalidation

Independently reopen authoritative sources for a bounded sample of current, high-impact, maturity-sensitive claims. The goal is not to redo every Daily research task; it is to detect current-state drift, source-state conflict, incorrect maturity promotion, or stale Registry/Watchlist projection.

## What the semimonthly audit must not do

- do not manufacture research novelty;
- do not rewrite sealed Daily/Weekly/Monthly history;
- do not treat old file timestamps as defects by themselves;
- do not force `entities/` or `maps/` growth when their admission trigger was not met;
- do not infer ledger completeness without an explicit ledger-admission contract;
- do not convert an unresolved ambiguity into a deterministic rule after one observation;
- do not copy private prompts, private memory, hidden reasoning, or private control-plane text into the repository.

## Deep-audit decision test

For every proposed change, answer:

1. What current defect or drift is actually observed?
2. What current evidence proves it?
3. Is it a current problem or a historical observation?
4. Is it isolated or repeated?
5. Which current file/contract owns the state?
6. Can correction/reconciliation solve it without architecture change?
7. What evidence proves the repair?
8. Which historical/negative/unknown states must remain untouched?
9. If no current defect exists, should the result be `NO_CHANGE_REQUIRED`?

A new deterministic contract is justified only after repeated real-run evidence demonstrates a stable need.

```text
Real Run
→ Real Failure / Friction
→ Correction
→ Procedural Memory
→ Repeated Pattern
→ Deterministic Contract
```

## Result and output

Exactly one primary result:

```text
HEALTHY
REPAIR
COORDINATE
BLOCKED
```

The record must include the minimum audit contract defined in the parent `README.md`, plus explicit sections for:

```text
DURABLE_DOCUMENT_REVIEW
PROJECTION_AND_INDEX_REVIEW
HISTORY_AND_RECONCILIATION_REVIEW
LEDGER_AND_STRUCTURED_ASSET_REVIEW
EXTERNAL_SOURCE_SPOT_CHECKS
CONTRACT_AMBIGUITIES
CORRECTION_CANDIDATES
NO_CHANGE_AREAS
```

A contract ambiguity can remain `UNRESOLVED` without forcing a repair if current repository truth does not depend on a stronger interpretation.

## Relationship to Weekly

Semimonthly is a deeper checkpoint, not a summary of weekly audit files.

```text
Weekly audit evidence
!= semimonthly verification
```

The semimonthly run may reuse links and identifiers, but it must independently refresh current GitHub and material external-source state.

## Correction of a merged semimonthly record

Use a dated successor:

```text
YYYY-MM-DD-reconciliation-YYYY-MM-DD.md
```

Preserve the original checkpoint as point-in-time evidence.