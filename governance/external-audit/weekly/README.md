# Weekly External Audit / 每周外部维护巡检

This directory stores the independent weekly repository-maintenance record. It is **not** the observatory's canonical research Weekly under `reports/weekly/`.

## Cadence

Adopted from **2026-09-07**.

One real audit run produces at most one canonical file for its ISO week:

```text
YYYY-Www.md
```

The filename identifies the ISO week; `checked_at` inside the file identifies when the audit actually ran. Never backdate `checked_at` to make a missed audit look executed.

## Scope

Each weekly audit reads the current calendar month from day 1 through the actual `checked_at` date and checks, at minimum:

1. current `main` SHA and default branch;
2. open PRs, owners, head/base, changed-file overlap, mergeability/check visibility;
3. recent main commits and available Actions runs;
4. every real Daily report and Daily pack in the month;
5. the current Daily month index and count;
6. all canonical Weekly files touching the month, including opening/settlement state;
7. the current Monthly file and Monthly index without prematurely closing the month;
8. `SOURCE_REGISTRY.md` current-state claims and date semantics;
9. `watchlist/ACTIVE.md` current ranking and closed/open question state;
10. relevant month-to-date changes in `ledger/`, `history/`, `entities/`, and `maps/`;
11. root/current-state projection surfaces when they can contradict canonical research truth;
12. bounded independent external verification for high-impact current claims whose state matters to the repository.

For this global observatory, external spot checks prioritize authoritative protocol/standard/vendor/government/primary-source surfaces and preserve:

```text
FACT
EXTERNAL CLAIM
ANALYSIS
UNCERTAIN
```

Same-source rechecking is not independent strengthening.

## Weekly maintenance question

The weekly audit is not asking "what new research happened?" It asks:

```text
Does the month-to-date repository still project its canonical research truth correctly,
without missing records, stale current-state surfaces, silent history rewrites,
or unsupported maturity promotion?
```

## Result

Exactly one:

```text
HEALTHY
REPAIR
COORDINATE
BLOCKED
```

If `HEALTHY`, repository action is `NO_CHANGE_REQUIRED` for research/implementation files; creating the scheduled external-audit record remains legitimate governance evidence.

If `REPAIR`, the record must name the owning file, current evidence, root cause, preserved history, minimum correction, observed validation, risk, and Draft PR boundary.

## Required record sections

```text
RUN_IDENTITY
AUDIT_WINDOW
STARTUP_SNAPSHOT
MONTH_TO_DATE_COVERAGE
CURRENT_FACTS
HISTORICAL_FACTS
EXTERNAL_REVALIDATION
VERIFIED_INVARIANTS
CONFIRMED_ISSUE_AND_ROOT_CAUSE
CORRECTIONS_OR_RECONCILIATIONS
UNRESOLVED_OR_UNKNOWN
NO_CHANGE_AREAS
REPOSITORY_ACTION
FILES_CHANGED
FILES_DELIBERATELY_NOT_CHANGED
CHECKS_ACTUALLY_OBSERVED
CHECKS_NOT_EXECUTED
RISK_AND_ROLLBACK
HUMAN_DECISION_REQUIRED
```

## Overlap with semimonthly audit

When a weekly audit and a semimonthly checkpoint occur close together, they may cross-reference one another to avoid duplicating prose. They must still independently refresh `main`, PR overlap, current canonical artifacts, and any material current-source state.

```text
cross-reference != inherited verification
```

## Historical correction

A merged weekly external-audit record is sealed point-in-time evidence. Later corrections use a dated successor such as:

```text
YYYY-Www-reconciliation-YYYY-MM-DD.md
```

Never rewrite a merged weekly audit to make an earlier run appear to have known later facts.