# F5 — Evaluation, Safety, Governance, Standards

A2A's per-request authentication/authorization semantics strengthen W35 H11

The governance distinction is:

```text
fresh authorization decision
≠ fresh credential
≠ fresh human approval
```

A valid existing credential may be reused while the server still performs a new authorization decision for the successor request

`AUTH_REQUIRED` also shows that authorization insufficiency can become a visible task state during execution

**Rule:** recovery must re-enter policy evaluation even when semantic context survives
