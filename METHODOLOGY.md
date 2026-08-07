# Methodology / 方法论

## 1. Source hierarchy / 信源等级

| Level | Source | Use |
|---|---|---|
| G0 | Formal specifications, standards, laws, official policy | Canonical status and requirements |
| G1 | Official institutions, foundations, working groups | Governance, roadmap, and organizational change |
| G2 | Official repositories, releases, technical documentation | Version and implementation claims |
| G3 | Original papers, technical reports, public datasets | Research evidence and methods |
| G4 | Official engineering blogs and named-leader statements | Context and declared direction |
| G5 | High-quality secondary analysis | Discovery and comparison only |
| G6 | Community discussion and social media | Leads only; never final evidence by itself |

## 2. Three-layer statement model / 三层陈述模型

Every material statement should be identifiable as one of:

- **FACT / 事实** — directly supported by a cited source
- **EXTERNAL CLAIM / 外部声明** — a claim made by a company, author, or institution
- **ANALYSIS / 本仓分析** — an inference or synthesis produced by this repository

## 3. Date discipline / 日期纪律

Always distinguish:

- `event_date` — when the underlying event happened
- `publication_date` — when the source was published
- `observed_at` — when this repository inspected it

Relative words such as “today,” “latest,” and “recently” must be converted into exact dates in durable reports.

## 4. Change classification / 变化分类

- `MATERIAL_CHANGE` — changes a durable judgment or map
- `MINOR_SIGNAL` — worth recording but does not yet change a durable judgment
- `NO_MATERIAL_CHANGE` — searched and reviewed; prior judgment remains stable
- `CORRECTION` — prior repository statement requires revision
- `CONFLICT` — credible sources disagree or use incompatible definitions

## 5. Non-validation boundary / 非验证边界

The repository verifies that a public source exists and represents it accurately. It does not independently prove that a model, agent, benchmark, or product performs as claimed.

不验证能力，不等于不核验事实。来源、版本、日期、状态和原文含义必须核验。

## 6. Daily synthesis / 每日综合

Independent workstreams gather evidence. A synthesis workstream removes duplicates, resolves status conflicts where possible, identifies cross-system relationships, and produces one integrated daily report.
