# Taxonomy / 分类体系

This taxonomy is a **durable normalization layer** for the observatory. It helps different workstreams describe the same world consistently without pretending that labels are evidence.

A taxonomy value classifies an observation; it does not establish that the classified claim is true.

## Historical eras / 历史阶段

1. `ROOTS_PRE_1950` — logic, computation, control, learning, automation
2. `FIELD_FORMATION_1950_1969` — Turing-era questions, Dartmouth, symbolic AI, perceptrons
3. `FIRST_LIMITS_1970_1979` — scaling limits, knowledge bottlenecks, first AI winter
4. `EXPERT_SYSTEMS_1980_1989` — knowledge engineering and commercial expert systems
5. `STATISTICAL_TURN_1990_2009` — probabilistic methods, data-driven ML, web-scale data
6. `DEEP_LEARNING_2010_2016` — representation learning and accelerator-driven breakthroughs
7. `FOUNDATION_MODEL_2017_2021` — Transformers, pretraining, scaling, multimodality
8. `GENERATIVE_AI_2022_2024` — conversational interfaces and mass adoption
9. `AGENTIC_SYSTEMS_2025_2026` — tools, memory, runtimes, protocols, identity, governance

Era labels are analytical navigation. A technology can inherit mechanisms from earlier eras and should not be forced into a false discontinuity narrative.

## Current domains / 当前领域

- `MODELS`
- `ALGORITHMS`
- `DATA`
- `COMPUTE_CHIPS`
- `INFRASTRUCTURE`
- `ROBOTICS_EMBODIED`
- `SCIENTIFIC_AI`
- `AGENTS_RUNTIMES`
- `PROTOCOLS_INTEROP`
- `EVALUATION`
- `SAFETY_SECURITY`
- `POLICY_STANDARDS`
- `OPEN_SOURCE`
- `ECONOMY_LABOR`
- `SOCIETY_CULTURE`
- `ENVIRONMENT_ENERGY`

An observation may belong to multiple domains. Multi-label classification does not make one domain's evidence transferable to another.

## Entity classes / 实体类型

Use the most specific relevant entity class when identity matters:

- `MODEL_OR_MODEL_FAMILY`
- `ALGORITHM_OR_METHOD`
- `DATASET_OR_BENCHMARK`
- `HARDWARE_OR_SYSTEM`
- `RUNTIME_OR_HARNESS`
- `PROTOCOL_OR_STANDARD`
- `TOOL_OR_SDK`
- `OPEN_SOURCE_PROJECT`
- `PRODUCT_OR_SERVICE`
- `ORGANIZATION_OR_CONSORTIUM`
- `POLICY_OR_REGULATION`
- `EVALUATION_OR_STUDY`
- `INCIDENT_OR_EVENT`

A brand, product, model, protocol, SDK, runtime, and organization may share names; identity should not be inferred from name similarity alone.

## Observation classes / 观察类型

Material statements should remain distinguishable as:

- `FACT` — directly supported factual statement within a named source/scope;
- `ATTRIBUTED_EXTERNAL_CLAIM` — a claim made by an identified external actor;
- `OBSERVATORY_ANALYSIS` — repository interpretation derived from cited evidence;
- `UNCERTAIN` — evidence is incomplete, conflicting, or insufficient for a stronger state.

A vendor's statement about its own release can be factual evidence that the vendor published that statement while the underlying performance claim remains attributed until independently supported.

## Maturity/status vocabulary / 成熟度与状态

General technical/product status:

`PROPOSED`, `DRAFT`, `PREVIEW`, `RELEASE_CANDIDATE`, `RELEASED`, `STABLE`, `DEPLOYED`, `DEPRECATED`, `RETIRED`, `UNCLEAR`

These states are **object-scoped**. A protocol can be `RELEASED` while an SDK is `PREVIEW`, an implementation is `STABLE`, and broad deployment remains `UNCLEAR`.

Do not infer maturity inheritance:

```text
protocol released != implementation deployed
SDK stable != ecosystem mature
product available != broadly adopted
specification published != conformance established
```

## Date vocabulary / 日期词汇

Keep the date that belongs to each fact:

- `EVENT_DATE`
- `ANNOUNCEMENT_DATE`
- `PUBLICATION_DATE`
- `UPDATE_DATE`
- `RELEASE_OR_EFFECTIVE_DATE`
- `OBSERVATION_DATE`
- `KNOWN_TRANSITION_DATE`

When only current state is observed, do not invent a historical `KNOWN_TRANSITION_DATE`.

## Relationship vocabulary / 关系词汇

Useful relationship classes include:

- `IMPLEMENTS`
- `SUPPORTS`
- `DEPENDS_ON`
- `EXTENDS`
- `COMPATIBLE_WITH`
- `COMPLEMENTS`
- `COMPETES_WITH`
- `SUPERSEDES`
- `DEPRECATES`
- `EVALUATES`
- `GOVERNS`
- `REFERENCES`

Relationship direction and version/scope matter. `supports` does not mean `implements fully`; `references` does not mean `endorses`; `compatible with` should identify the tested or documented compatibility surface.

## Evidence independence / 证据独立性

Source count is not evidence count when sources share one underlying origin.

```text
vendor announcement
+ articles quoting that announcement
!= independent corroboration
```

Independent support should come from a genuinely separate primary source, implementation observation, measured population, standards/regulatory record, or research surface.

## Taxonomy governance

Add a new category only when existing vocabulary cannot represent a recurring distinction without ambiguity. Do not add categories merely because a one-off source uses novel marketing terminology.

Changes to this taxonomy affect classification/navigation only; they do not rewrite historical reports or automatically reclassify every earlier observation.
