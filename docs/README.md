# Presentation Layer / 展示层

This directory is the **read-only web projection** for `agentic-frontier-observatory`.

It does not create a second research database and does not own Daily, Weekly, Monthly, Source Registry, Watchlist, workstream, evidence, maturity, or correction state.

## Projection contract

Authority remains:

```text
current merged main + current observatory contract
> SOURCE_REGISTRY / source policy
> watchlist + canonical Weekly
> latest Daily + relevant history
> current verified external evidence
> historical reports
> this presentation layer
```

The frontend may project the latest repository-native observation date, owning Weekly/Monthly states, F1–F7 handoffs from the latest Daily pack, open Watchlist questions, admitted Source Registry rows, and a bounded Twin Observatory lens. Every projected surface links back to its repository source.

The frontend must not infer an unrecorded transition date, convert source presence into claim truth, manufacture a maturity or hypothesis state, rank Global against China, write back to research surfaces, or treat rendering/fetch success as scientific validation.

If a canonical source cannot be read, the interface shows `UNAVAILABLE` rather than synthesizing replacement state.

## Implementation

The site is dependency-free static HTML/CSS/JavaScript. At bootstrap it resolves the current public `main` HEAD, pins every canonical Markdown read in that page session to that commit SHA, and renders one coherent bounded projection. Later `main` movement is detected with a throttled public HEAD recheck and is surfaced as a newer-snapshot notice; an already rendered snapshot is never hot-mutated across revisions.

No repository-specific GitHub Actions workflow is required by this presentation layer. For GitHub Pages, the intended publishing source is `main` + `/docs`; enabling or changing Pages is a repository setting and remains separate from research truth.

## Accessibility

The presentation uses native HTML landmarks and table semantics, visible keyboard focus, system light/dark preferences, and `prefers-reduced-motion`. Visual color is redundant with text labels for evidence and state.

## Visual identity

The UI deliberately avoids inheriting the older Google-colored Welcome portal skin or imitating an AI-vendor product surface. Its design vocabulary is derived from observatory functions: observation boundaries, source identity, lifecycle state, evidence class, time, uncertainty, and revision.
