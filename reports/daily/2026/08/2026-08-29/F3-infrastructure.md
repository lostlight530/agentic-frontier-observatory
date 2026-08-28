# F3 — Compute, Data, Infrastructure

Recovery now spans at least two control planes:

```text
execution plane: cancel / stop / new task
security plane: authenticate / authorize / scope
```

MCP cancellation semantics show execution state may lag control intent

A2A authorization semantics show request permission remains separately evaluated

**Boundary:** execution restart ≠ security-state restoration
