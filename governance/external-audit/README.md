# External Independent Audit / 外部独立维护审计

This directory is the repository-local governance ledger for independent external recovery, audit, counterevidence, reconciliation, and bounded repair.

本目录是本仓库的外部独立治理证据层，用于恢复 current main、独立审计、反证、reconciliation 与有边界的最小修复。

It is **parallel to** the observatory research chain and does not become research evidence merely because it exists here.

```text
reports/
  Daily → Weekly → Monthly
      = observatory research production and research memory

governance/external-audit/
  weekly/ + semimonthly/
      = independent governance evidence about repository state
```

## 1. Authority / 权威边界

The audit reads and checks repository truth; it does not supersede repository truth.

```text
current merged main
> current explicit repository contracts
> current canonical repository artifacts
> verified execution / workflow evidence
> external audit interpretation
```

Where a more specific current repository contract exists, that contract wins.

External audit must never silently rewrite historical Daily, Weekly, Monthly, ledger, or other merged point-in-time records. Later evidence is handled through current-state correction, reconciliation, errata, or a successor record.

```text
History != Current State
Later Evidence != Earlier Knowledge
Correction != History Rewrite
Reconciliation = Preserve Original State + Add Current Interpretation
```

## 2. Control-plane separation / 执行面分离

```text
Scheduled observatory work
= Daily / Weekly / Monthly research production

Independent external audit
= Recovery / Audit / Counterevidence / Reconciliation

GitHub Actions
= deterministic repository lifecycle evidence actually exposed by the repository

Human Maintainer
= final doctrine and merge authority
```

The external auditor does not impersonate the scheduled research producer and does not turn its private reasoning or private memory into repository facts.

## 3. Directory contract / 目录合同

```text
governance/external-audit/
├── README.md
├── weekly/
│   ├── README.md
│   └── YYYY-Www.md
└── semimonthly/
    ├── README.md
    └── YYYY-MM-DD.md
```

- `weekly/` performs month-to-date operational and record-integrity maintenance.
- `semimonthly/` performs a deeper repository-wide governance and durable-document reconciliation.
- Both must start from freshly read GitHub truth.
- Neither directory is part of `Daily → Weekly → Monthly` research compression.
- A Weekly audit may reference a Semimonthly audit and vice versa, but one record does not inherit verification from the other.

## 4. Cadence / 周期

### Weekly

The external weekly cadence is adopted from **2026-09-07**. A weekly record exists only when that audit was actually executed. Historical weeks are never backfilled as if a past audit had happened.

The weekly audit checks the current calendar month from day 1 through `checked_at`, with emphasis on:

- all real Daily reports and Daily packs in the month;
- canonical Weekly state and settlement;
- current/open Monthly state;
- report indexes and reader-facing current-state projections;
- `SOURCE_REGISTRY.md` and `watchlist/ACTIVE.md`;
- relevant `ledger/`, `history/`, `entities/`, and `maps/` changes;
- recent commits, PRs, branch overlap, provenance, and available Actions evidence;
- source-bounded external revalidation where a current high-impact claim requires it.

### Semimonthly

The half-month governance cadence is adopted from **2026-09-01**. The normal logical windows are **1–15** and **16–natural month end**. Every record states its exact observed window. Future dates are not marked missing before they occur, and a missed historical audit is never reconstructed as an original run.

The semimonthly audit includes the weekly scope plus the durable repository surface: root documentation, methodology/scope/taxonomy, workstream contracts, history semantics, ledger semantics, indexes, navigation, long-lived assets, public/private boundaries, and cross-layer consistency.

## 5. Run identity / 运行身份

Every durable audit record must identify at least:

```text
repository
system
task_id
logical_period
producer
base_revision
run_id
```

For this repository:

```text
repository = agentic-frontier-observatory
system     = external-audit
task_id    = weekly | semimonthly
producer   = independent-gpt
```

`base_revision` is the exact merged `main` SHA read at audit start. A retry or later reconciliation must use a distinct `run_id`.

## 6. Evidence planes / 证据平面

Audit claims must keep these evidence planes separate:

- **Repository truth** — current main, files, commits, PRs, branch state, indexes.
- **Runner / Actions evidence** — only commands, checks, or workflows actually observed as executed.
- **External evidence** — current official standards, vendor, regulator, primary research, or other source-bounded facts.
- **Telemetry evidence** — traffic or usage telemetry when explicitly inspected; telemetry is not correctness evidence.

```text
Execution != Correctness
File Presence != Observation Validity
Repetition != Independence
Provider Identity != Output Validity
Unknown remains Unknown
```

For external facts, this global observatory preserves the repository's durable boundaries, including:

```text
Capability != Deployability
Discovery != Authorization != Invocation
Identity != Credential != Authority
Protocol Publication != Operational Maturity
Admission != Continuous Authorization
Runtime Stop != Rollback
Termination != Remediation
Context Continuity != Authority Continuity
Task Reference != Task Authority
```

## 7. Result states / 结果状态

Each audit record has exactly one primary result:

| Result | Meaning | Repository action |
|---|---|---|
| `HEALTHY` | Current evidence is sufficient and no real current defect is confirmed. | `NO_CHANGE_REQUIRED` for research/implementation files. The required canonical audit record may still be created as governance evidence. |
| `REPAIR` | A current defect/drift is confirmed, owned, non-overlapping, and repairable. | Make the smallest correction on a maintainer-owned branch and stop at Draft PR. |
| `COORDINATE` | Overlapping PR, ownership conflict, dependency race, or moving main prevents safe independent write. | Stop the affected scope; do not take over another branch or PR. |
| `BLOCKED` | Required GitHub/source/contract/verification evidence is unavailable. | Do not claim health or repair completion. Record the missing evidence. |

`HEALTHY` does **not** authorize activity-only edits to research files. The audit record itself is the required governance output once this contract is active.

## 8. Minimum audit record / 最小记录合同

Every audit record must include:

```text
checked_at
default_branch
main_sha
result_type
open_prs_and_owners
recent_commits
recent_actions
overlap_and_dependency_check
verified_invariants
confirmed_issue_and_root_cause
action_or_reason_for_no_change
branch_commit_and_draft_pr_if_any
risk_and_rollback
unverified_items
human_decision_required
```

It must also distinguish:

```text
CURRENT FACTS
HISTORICAL FACTS
CORRECTIONS / RECONCILIATIONS
UNRESOLVED / UNKNOWN
NO-CHANGE AREAS
FILES CHANGED
FILES DELIBERATELY NOT CHANGED
CHECKS ACTUALLY OBSERVED
CHECKS NOT EXECUTED
EXTERNAL SOURCES USED
SOURCE AUTHORITY BOUNDARY
```

No check may be described as passed unless its execution evidence was actually observed.

## 9. Write and history rules / 写入与历史规则

Before any write:

1. refresh `main` and record its full SHA;
2. inspect open PRs and overlapping changed files;
3. distinguish current drift from historical observation;
4. identify the owning current file/contract;
5. preserve sealed history and negative evidence;
6. make the minimum correction required;
7. compare final branch against current main and require no hidden unrelated drift;
8. create/update a maintainer-owned Draft PR;
9. stop without merge unless the Human Maintainer explicitly decides otherwise.

A merged audit record is point-in-time evidence. If it later needs correction, do not rewrite it silently. Create a dated successor in the same cadence directory, for example:

```text
weekly/YYYY-Www-reconciliation-YYYY-MM-DD.md
semimonthly/YYYY-MM-DD-reconciliation-YYYY-MM-DD.md
```

## 10. No-backfill rule / 不回填规则

Absence of an old external-audit record means only that no durable audit record is verified for that period.

```text
missing audit file
!= audit definitely never happened
!= permission to fabricate a historical audit
```

A later review of an older period is recorded with the actual later `checked_at` and explicit `reconciliation` semantics.

## 11. Public/private boundary / 公开与私有边界

Allowed in this directory:

- public task identity and cadence;
- repository/file scope;
- inspectable GitHub facts;
- public external-source evidence;
- reproduction and validation evidence;
- result state, risk, rollback, and human decision request.

Forbidden:

- private prompts or private memory;
- hidden reasoning;
- credentials or tokens;
- private conversation reconstruction;
- private maintainer topology;
- local/private control-plane source text.

## 12. Human boundary / 人类最终权威

The durable endpoint is:

```text
GitHub repository truth
→ independent audit
→ bounded correction/reconciliation when required
→ Draft PR
→ Human Maintainer review / test / merge / reject
```

An audit can establish an inspectable repository state. It does not declare `FINAL_TRUTH`.