# F2 — Models, Algorithms, Multimodality

## Finding

No material model-family release before the observation cut-off changes W35's core question

The relevant distinction is architectural rather than model-score based:

- model context may be reusable
- generated artifacts may remain available
- reasoning/history may inform later work
- **execution authority must still be evaluated for the new task**

A model can continue the semantic problem while the runtime must not pretend that the old failed/cancelled task is still the same live execution object

## Rule

```text
semantic continuity ≠ execution continuity
```
