# Open Research / 开放科研

Status: durable open-research production guide
Scope: repository-level research positioning, longitudinal research-production method, scholarly-metadata boundaries, and semantic-drift governance

## Language policy / 语言政策

English is the canonical and default language for this open-research contract. Chinese text is provided as an accessibility and interpretation aid. If wording diverges, the English normative text governs; repository evidence and current owning contracts remain authoritative over both.

英文是本开放科研契约的默认与规范语言；中文用于辅助理解与可访问性。若中英文表述有差异，以英文规范文本为准；仓库事实与当前 owning contract 的权威仍高于任何翻译。

## Authority

This guide complements `METHODOLOGY.md`, `SCOPE.md`, `TAXONOMY.md`, `SOURCE_REGISTRY.md`, Watchlist, Workstreams, and the Daily/Weekly/Monthly SOPs. It does not replace those durable authorities or time-ordered research records.

```text
current repository truth
→ Methodology / Scope / Taxonomy / Source Registry
→ Daily / Weekly / Monthly production SOPs
→ OPEN_RESEARCH.md
→ RESEARCH_TEMPLATE.md
→ prospective research records
→ scholarly metadata / downstream indexes
```

A stricter repository-native contract wins.

## Canonical positioning

**Canonical Type:** Bilingual longitudinal observatory for global AI and agentic-system research

**One-line positioning:** Bilingual source-grounded longitudinal research observatory tracing artificial intelligence from foundational developments to agentic systems, runtimes, protocols, evaluation, governance, and ecosystem change

**Primary domains:** artificial intelligence; agentic systems; technology observatory; AI governance; longitudinal technology research

**Non-goals:** astronomical observatory; meteorological observatory; remote-sensing project; capability-certification laboratory; benchmark reproduction service

```text
External Classification != Repository Identity
Inferred Topic != Canonical Research Domain
Keyword Match != Project Purpose
Scholarly Graph Representation != Repository Self-Definition
```

## Longitudinal research-production method

The existing Daily/Weekly/Monthly system remains the canonical cadence. This guide adds a common research-question layer without replacing that cadence.

For each substantive research unit, make recoverable where applicable:

1. research question;
2. falsifiable hypothesis or bounded judgment;
3. source identities and independence;
4. event/publication/effective/observation/transition dates;
5. maturity or lifecycle state;
6. raw observations;
7. counterexample or disconfirming evidence;
8. interpretation separated from fact/external claim;
9. research increment;
10. retest condition or next observation trigger.

A Daily may validly conclude `NO MATERIAL CHANGE`. A Weekly or Monthly may preserve gaps, uncertainty, or no-transition findings. Cadence completion does not manufacture a transition.

## Repository-specific method

Retain the native F1-F7 workstreams
- F1 history/theory/paradigm
- F2 models/algorithms/multimodality
- F3 compute/chips/data/infrastructure
- F4 agents/runtimes/harnesses/protocols
- F5 evaluation/safety/governance/standards
- F6 open source/industry/economy/society
- F7 synthesis/judgment revision

Also record
- source grade and publisher identity
- event/publication/effective/observation/transition dates
- maturity state
- disconfirming evidence
- research increment

Use `METHODOLOGY.md`, `DAILY_SOP.md`, `WEEKLY_SOP.md`, and `MONTHLY_SOP.md` as the detailed operational contracts

Cross-workstream synthesis must not collapse source independence, time boundaries, maturity states, or observation dates.

## Evidence and source discipline

```text
specification exists != interoperable deployment
product documentation exists != capability validated
benchmark claim exists != benchmark reproduced
protocol publication != operational maturity
current-state confirmation != same-day state transition
same upstream source != independent corroboration
```

Repository DOI, archive records, prior reports, and self-citations are not independent observed-world evidence.

## Open-science file responsibilities

- `README.md` — public orientation and stable research entry points.
- `OPEN_RESEARCH.md` — durable open-research method and positioning.
- `RESEARCH_TEMPLATE.md` — prospective bounded research-record template.
- `METHODOLOGY.md`, `SCOPE.md`, `TAXONOMY.md`, `SOURCE_REGISTRY.md` — observatory research authority.
- `DAILY_SOP.md`, `WEEKLY_SOP.md`, `MONTHLY_SOP.md` — production cadence.
- `AUTHORS`, `LICENSE`, `CITATION.cff`, `codemeta.json` — authorship, reuse, citation/software metadata.
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` — contribution/community/security governance.
- `RELEASE_POLICY.md` — release/archive semantics.
- `.github/ISSUE_TEMPLATE/**` and pull-request template — reviewable intake.

These support openness and reproducibility; they do not replace observed-world evidence.

## Scholarly metadata discipline

Before future metadata publication, preserve Canonical Type, One-line Positioning, Primary Domains, Non-goals, accurate structured subjects where supported, and 5–7 defining keywords. Do not rewrite the observatory into astronomical, meteorological, remote-sensing, or generic forecasting language to satisfy a classifier.

## Shadow classification

Candidate title + abstract/description may be checked against downstream topic/keyword inference.

```text
ALIGNED
PARTIALLY_ALIGNED
MISCLASSIFIED
CLASSIFIER_NOISE
```

Execution state is separately `RUN` or `NOT_RUN`. Repair owning metadata only for genuine upstream ambiguity; otherwise record classifier noise.

## Semantic drift audit

Periodically compare canonical positioning with `CITATION.cff`, CodeMeta, archive/DOI metadata, OpenAIRE, and OpenAlex.

- **CANONICAL_DRIFT**
- **TRANSPORT_DRIFT**
- **DERIVATION_DRIFT**
- **VERSION_SKEW**

`DERIVATION_DRIFT != REPOSITORY_DEFECT`.

## History and correction

```text
CURRENT_STATE != TASK_TIME_STATE
LATER_SOURCE != EARLIER_SOURCE_AVAILABILITY
CURRENT_DISPLAY != TRANSITION_TIMESTAMP
PUBLICATION_IDENTITY != CURRENT_MAIN
RESEARCH_PRODUCTION != MAINTENANCE != PERIODIC_AUDIT
```

Preserve point-in-time reports. Correct current interpretation forward through explicit correction, reconciliation, or new timepoint records.

## Contribution and review

Use `OPEN_RESEARCH.md` for research-method/positioning changes and `RESEARCH_TEMPLATE.md` for bounded research units that need the common question/counterexample/increment structure. Existing Daily/Weekly/Monthly SOPs remain the cadence owner.

## Permanent boundary

```text
research record != capability claim
publication != validation
usage != adoption
citation != reproduction
metadata consistency != scientific correctness
external indexing != repository self-definition
```

## 中文摘要

本文件不替代观察站现有 Daily / Weekly / Monthly SOP，而是在其上补一个长期、统一的科研问题层：明确 research question、可证伪判断、来源身份与独立性、时间边界、raw observation、counterexample、research increment 与 retest condition。

F1–F7、Methodology、Scope、Taxonomy、Source Registry 继续拥有观察站原生语义。Daily 可以合法得到 `NO MATERIAL CHANGE`；Weekly/Monthly 可以保留 gap 或无 transition 结论，不为了 cadence 制造科研变化。

未来 scholarly metadata 以准确定位、少量高质量 subjects 与 5–7 个定义性 keywords 为主。若外部系统把 “Observatory” 推断成天文/气象/遥感语义，在仓库定位已经清楚时应记录为 downstream classifier noise，而不是改写仓库本体。
