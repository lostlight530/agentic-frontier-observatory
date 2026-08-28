# F6 — Open Source, Industry, Economy, Society

Interoperability must preserve both context and authorization boundaries during recovery

A cross-vendor recovery flow that shares context but silently reuses stale permission would be semantically connected yet operationally unsafe

The ecosystem question therefore becomes:

```text
can recovery context travel
without authority becoming ambient?
```

A2A gives a useful request-level security boundary, but authorization policy remains implementation-specific

**Boundary:** common protocol security hooks ≠ common authorization policy
