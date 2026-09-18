> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `WORKSTREAM DEFINITION`
> - **Role:** Durable responsibility contract for **infrastructure**
> - **Authority:** Current workstream-scope authority for what this stream may observe, compare, hand off, and explicitly must not infer
> - **Current meaning:** This file defines a stable research lens, not a periodic report and not a source by itself. Findings remain proposition-, version-, date-, population- and maturity-bounded
> - **Evidence boundary:** Workstream assignment does not strengthen evidence. Multiple workstreams citing one lineage do not create independent corroboration. Structural similarity does not imply interoperability, deployment, safety, adoption or causal effect
> - **Cross-document relation:** `SCOPE.md` owns repository coverage; `TAXONOMY.md` owns normalization; `METHODOLOGY.md` owns evidence/date/status discipline; `SOURCE_REGISTRY.md` owns admitted recurring source identities; F7 synthesis cannot manufacture stronger evidence than F1–F6 provide
> - **Update trigger:** Update only when the durable workstream responsibility, handoff contract, or analytical boundary changes materially
> - **Preservation rule:** Periodic findings belong to time-scoped reports. This file remains a non-periodic research contract and must not be rewritten merely because a new Daily/Weekly/Monthly result appears

# F3｜Compute, Chips, Data, and Infrastructure / 算力、芯片、数据与基础设施

F3 tracks the physical and systems substrate that makes AI development and deployment possible: accelerators, inference/training systems, cloud and edge infrastructure, data pipelines, networking, storage, energy, cost, supply constraints, and deployment architecture.

## Core questions

- What hardware/system/data capability exists, at what maturity and scale?
- Is a number a chip specification, lab benchmark, cluster result, commercial service limit, or observed production metric?
- Which bottleneck moved: compute, memory bandwidth, interconnect, storage, power, data quality, latency, cost, or availability?
- Does a system improvement change accessible capability or only economics/throughput?
- Are regional availability, supply, export, energy, or integration constraints material to the claim?

## Preferred evidence

Prefer manufacturer specifications for product identity, original architecture/system papers, cloud/provider documentation, standards, procurement/regulatory filings where relevant, and independent system measurements for performance claims.

Keep theoretical peak, vendor benchmark, shipped configuration, deployed capacity, and independently measured performance separate.

## Infrastructure boundaries

```text
hardware announced != broadly available
peak specification != application performance
capacity ordered != capacity deployed
cloud listing != production adoption
lower unit cost != lower total-system cost
energy efficiency claim != independently measured lifecycle impact
```

## Handoff to F7

F3 contributes the exact infrastructure object, deployment/supply maturity, measurement basis, scale and geography, bottleneck affected, uncertainty, and the narrow capability/economic implication supported by the evidence.

F3 does not infer model quality, agent reliability, or market dominance from infrastructure scale alone.
