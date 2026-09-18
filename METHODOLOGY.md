> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Durable observatory method for source hierarchy, statement classes, existence verification, date/status calibration, evidence independence, correction and synthesis
> - **Authority:** Current methodology authority for non-periodic research semantics
> - **Current meaning:** Use this file to determine how public information becomes a bounded observatory statement and how later evidence revises current judgment without rewriting history
> - **Evidence boundary:** Source existence is not capability validation; publisher independence is not automatically run independence; aggregation is not corroboration; repository publication is not external-world evidence
> - **Cross-document relation:** Taxonomy supplies vocabulary; Source Registry supplies admitted identities; workstreams apply the method; periodic SOPs govern cadence but do not redefine the evidence method
> - **Update trigger:** Update when evidence/status/correction methodology changes materially
> - **Preservation rule:** The existing subject remains the owning repository document. Dated origin/status statements keep their original time boundary; later evidence changes current interpretation through explicit edits rather than silent historical rewrite

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
integrated time-ordered research outputs
↓
hypothesis correction / settlement
↓
long-horizon synthesis
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

Authority does not eliminate date, scope, version, or maturity calibration.

A source level is claim-specific. A first-party page may be primary evidence for what an organization announced while remaining insufficient evidence for independent performance, adoption, or ecosystem-wide conclusions.

## 2. Statement classes / 陈述分类

Every material statement should be identifiable as:

- **FACT / 事实** — directly supported by a cited source;
- **EXTERNAL CLAIM / 外部声明** — a claim made by a company, author, institution, or project;
- **ANALYSIS / 本仓分析** — inference or synthesis produced by this observatory;
- **UNCERTAIN / 不确定** — evidence insufficient, stale, ambiguous, or conflicting.

Attributed external claims do not become repository facts merely because they are repeated across multiple reports.

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
spec exists != interoperable deployment
product docs exist != capability validated
benchmark claim exists != benchmark reproduced
protocol release != operational maturity
```

## 4. Date and change discipline / 日期与变化纪律

Always distinguish:

- `event_date`;
- `publication_date`;
- `effective_date` when applicable;
- `observed_at`;
- known `state_transition_date` when available.

Change classes:

- `MATERIAL_CHANGE`;
- `MINOR_SIGNAL`;
- `NO_MATERIAL_CHANGE`;
- `CORRECTION`;
- `CONFLICT`.

Relative language in durable records should be replaced by exact dates. Current-state confirmation is not automatically a same-day transition.

## 5. Evidence independence / 证据独立性

Mirrors, repeated announcements, syndicated articles, model summaries, search-result snippets, and multiple pages derived from the same original source are not independent evidence.

A hypothesis is strengthened by genuinely independent layers, implementations, standards work, research, or real status transitions—not citation volume.

When two sources ultimately depend on one upstream document or announcement, preserve that shared lineage instead of counting them as separate corroboration.

## 6. Repository publication is not observed-world evidence / 仓库出版物不是外部世界证据

The observatory itself has a Zenodo software publication. That publication identifies this repository as a citable software/research object; it is not a G0–G6 source about the external world.

```text
repository DOI != external source
repository DOI != independent corroboration
repository publication != evidence for an observed technology claim
repository archive != current-main research state
```

A repository-level citation may identify the observatory software or archived research object. A factual claim about an external system still requires the external evidence chain that supports that claim.

Internal reports may be cited for the observatory's own earlier analysis or observation history, but self-citation does not create source independence.

## 7. Permanent semantic boundaries / 长期语义边界

```text
Capability != Deployability
Discovery != Authorization != Invocation
Identity != Credential != Authority
Authenticated Origin != Delegated User Authority
Transport Interoperability != Trust Interoperability
Protocol Publication != Operational Maturity
Admission != Continuous Authorization
Resource Denial != Runtime Stop
Runtime Stop != Rollback
Termination != Remediation
Context Continuity != Authority Continuity
```

These boundaries remain defaults until evidence explicitly requires correction.

## 8. Research-memory chain / 研究记忆链

Time-ordered research outputs serve different evidentiary roles:

```text
Daily = atomic observation + delta
Weekly = falsifiable hypothesis memory + settlement
Monthly = long-horizon compression + carry-forward
```

> **周日不是清空，周一不是重启。**

Durable doctrine becomes baseline only after surviving the applicable evidence and correction process. Open gaps continue across week/month boundaries rather than being rediscovered as new.

Aggregation does not create independent evidence by itself.

## 9. Correction and historical-record discipline / 修正与历史纪律

- factual errors are corrected explicitly;
- later evidence is never backdated into earlier observation days;
- atomic historical reports are not rewritten solely to modernize style;
- legacy non-canonical snapshots remain auditable but must not outrank the canonical current interpretation;
- contradictions are retained as `CONFLICT` until resolved;
- later confirmation does not manufacture an earlier transition timestamp.

## 10. Non-validation boundary / 非验证边界

The observatory verifies that a public source exists and represents it accurately.

It does not independently run or deploy models/agents, reproduce benchmark claims, validate product performance, certify security, or test protocol interoperability.

> **不验证能力，不等于不核验事实。**

## 11. Synthesis and comparison discipline / 综合与比较纪律

Independent workstreams gather evidence. Integration removes duplicates, calibrates dates/status, identifies cross-system relationships, and revises judgments.

Comparison must name the layer: model, infrastructure, runtime, discovery, identity, delegation, protocol, evaluation, governance, provenance, authorization, revocation, remediation, or society.

Structural similarity is not interoperability. Shared vocabulary is not equivalent architecture. A comparative statement must preserve the evidence and maturity boundaries of both sides being compared.
