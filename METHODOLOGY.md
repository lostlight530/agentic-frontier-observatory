# Methodology / 方法论

## 0. Observatory pipeline / 观察站方法链

```text
public world
↓
authoritative-source retrieval
↓
fact-existence verification
↓
F1–F7 independent workstreams
↓
evidence grading / date-status calibration
↓
one integrated daily report
↓
one canonical weekly accumulates memory
↓
hypotheses strengthened / open / refuted / durable
↓
monthly long-horizon settlement
↓
Source Registry + Watchlist
```

Core rule:

> **Do not independently prove that a technology works; do prove that the public information exists and represent it accurately.**  
> **不验证技术是否真的有效，但必须验证信息是否真的存在。**

This repository is a research observatory, not a benchmark, deployment platform, product test bed, or execution Agent.

## 1. Source hierarchy / 信源等级

| Level | Source | Use |
|---|---|---|
| G0 | Formal specifications, standards, laws, official policy | Canonical status and requirements |
| G1 | Official institutions, foundations, working groups | Governance, roadmap, organizational change |
| G2 | Official repositories, releases, technical documentation | Version and implementation claims |
| G3 | Original papers, technical reports, public datasets | Research evidence and methods |
| G4 | Official engineering blogs and named-leader statements | Context and declared direction |
| G5 | High-quality secondary analysis | Discovery and comparison only |
| G6 | Community discussion and social media | Leads only; never final evidence by itself |

Authority does not eliminate date, scope, version or maturity calibration.

## 2. Statement classes / 陈述分类

Every material statement should be identifiable as:

- **FACT / 事实** — directly supported by a cited source
- **EXTERNAL CLAIM / 外部声明** — a claim made by a company, author, institution or project
- **ANALYSIS / 本仓分析** — inference or synthesis produced by this observatory
- **UNCERTAIN / 不确定** — evidence insufficient, stale, ambiguous or conflicting

## 3. Existence verification / 存在性验证

Before analysis:

```text
source exists
→ issuer / project exists
→ exact version / document exists
→ date is calibrated
→ current status is calibrated
→ wording is represented accurately
→ claim scope is bounded
```

Then and only then infer relationships.

```text
spec exists ≠ interoperable deployment
product docs exist ≠ capability validated
benchmark claim exists ≠ benchmark reproduced
protocol release ≠ operational maturity
```

## 4. Date and change discipline / 日期与变化纪律

Always distinguish:

- `event_date`
- `publication_date`
- `effective_date` when applicable
- `observed_at`
- known `state_transition_date` when available

Change classes:

- `MATERIAL_CHANGE`
- `MINOR_SIGNAL`
- `NO_MATERIAL_CHANGE`
- `CORRECTION`
- `CONFLICT`

Relative language in durable reports should be replaced by exact dates.

Current-state confirmation is not automatically a same-day transition.

## 5. Evidence independence / 证据独立性

Mirrors, repeated announcements, syndicated articles and multiple pages derived from the same original source are not independent evidence.

A hypothesis is strengthened by independent layers, implementations, standards work, research, or real status transitions—not citation volume.

## 6. Permanent semantic boundaries / 长期语义边界

```text
Capability ≠ Deployability
Discovery ≠ Authorization ≠ Invocation
Identity ≠ Credential ≠ Authority
Authenticated Origin ≠ Delegated User Authority
Transport Interoperability ≠ Trust Interoperability
Protocol Publication ≠ Operational Maturity
Admission ≠ Continuous Authorization
Resource Denial ≠ Runtime Stop
Runtime Stop ≠ Rollback
Termination ≠ Remediation
Context Continuity ≠ Authority Continuity
```

These boundaries remain defaults until evidence explicitly requires correction.

## 7. Daily → Weekly → Monthly memory / 日周月记忆链

```text
Daily = atomic observation + delta
Weekly = falsifiable hypothesis memory + settlement
Monthly = long-horizon compression + carry-forward
```

> **周日不是清空，周一不是重启。**

Durable doctrine becomes baseline. Open gaps continue across week/month boundaries rather than being rediscovered as new.

## 8. Correction and historical-record discipline / 修正与历史纪律

- factual errors are corrected explicitly
- later evidence is never backdated into earlier observation days
- atomic historical reports are not rewritten solely to modernize style
- legacy non-canonical snapshots remain auditable but must point to the canonical record that supersedes them
- contradictions are retained as `CONFLICT` until resolved

## 9. Non-validation boundary / 非验证边界

The observatory verifies that a public source exists and represents it accurately.

It does not independently run or deploy models/agents, reproduce benchmark claims, validate product performance, certify security, or test protocol interoperability.

> **不验证能力，不等于不核验事实。**

## 10. Synthesis discipline / 综合纪律

Independent workstreams gather evidence. F7 removes duplicates, calibrates dates/status, identifies cross-system relationships and revises judgments.

Comparison must name the layer: model, infrastructure, runtime, discovery, identity, delegation, protocol, evaluation, governance, provenance, authorization, revocation, remediation or society.

Structural similarity is not interoperability.
