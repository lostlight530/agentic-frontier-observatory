> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `WORKSTREAM DEFINITION`
> - **Role:** Durable responsibility contract for **models algorithms**
> - **Authority:** Current workstream-scope authority for what this stream may observe, compare, hand off, and explicitly must not infer
> - **Current meaning:** This file defines a stable research lens, not a periodic report and not a source by itself. Findings remain proposition-, version-, date-, population- and maturity-bounded
> - **Evidence boundary:** Workstream assignment does not strengthen evidence. Multiple workstreams citing one lineage do not create independent corroboration. Structural similarity does not imply interoperability, deployment, safety, adoption or causal effect
> - **Cross-document relation:** `SCOPE.md` owns repository coverage; `TAXONOMY.md` owns normalization; `METHODOLOGY.md` owns evidence/date/status discipline; `SOURCE_REGISTRY.md` owns admitted recurring source identities; F7 synthesis cannot manufacture stronger evidence than F1–F6 provide
> - **Update trigger:** Update only when the durable workstream responsibility, handoff contract, or analytical boundary changes materially
> - **Preservation rule:** Periodic findings belong to time-scoped reports. This file remains a non-periodic research contract and must not be rewritten merely because a new Daily/Weekly/Monthly result appears

# F2｜Models, Algorithms, and Multimodality / 模型、算法与多模态

F2 tracks model and algorithmic capability claims: foundation/frontier models, training and inference methods, reasoning, multimodality, robotics/embodied models, scientific AI, and the evaluations used to describe them.

## Core questions

- What model/method/version was actually released or described?
- Is the claim about architecture, training, inference, interface, benchmark performance, or real deployment?
- What dataset, harness, tool access, elicitation, sampling/configuration, and comparator define a reported result?
- Is a capability native to the model, enabled by a surrounding system, or only demonstrated in a specific workflow?
- Does a newer model materially change a capability boundary or only cost/latency/accessibility?

## Preferred evidence

Prefer model/system cards, original technical reports/papers, official release documentation, inspectable evaluation methodology, and independent research when available.

Vendor benchmarks are first-party evidence for what the vendor reports, not independent corroboration of generalized superiority.

## Capability boundaries

```text
benchmark score != universal capability
model release != production deployment
model capability != agent-system capability
long context != effective long-horizon memory
reasoning label != verified reasoning mechanism
multimodal input support != grounded real-world understanding
```

Retain exact model/version identity when material. Do not merge preview, release-candidate, stable, API, app, distilled, regional, or provider-hosted variants into one maturity state without evidence.

## Handoff to F7

F2 contributes the exact model/method identity, claimed capability, evaluation conditions, source provenance, independent support/counterevidence, availability/maturity state, and explicit limitations.

F2 does not convert vendor positioning or leaderboard rank into a system-wide adoption or safety conclusion.
