# F5｜Evaluation, Safety, Governance, and Standards

Today separates four judgments that are often collapsed:

```text
attestation valid?
→ policy accepts it?
→ artifact semantically correct?
→ deployment safe / authorized?
```

GitHub explicitly warns that artifact attestations are not a guarantee that an artifact is secure

Admission enforcement therefore strengthens governance without eliminating semantic review, vulnerability assessment, business authorization, or runtime safety controls

**Durable rule:** enforcement depth must not be confused with evidence breadth
