# F1 — History, Theory, Paradigms

## Finding

Distributed systems have long separated **operation identity** from **conversation / workflow context**

Today's Agent protocols make that distinction directly useful for recovery governance

A terminal execution record should remain historical evidence rather than be silently rewritten into a new attempt

```text
attempt 1 → terminal
context continues
attempt 2 → new execution identity
```

The theoretical gain is auditability: causality survives retries, compensation and human intervention

## Boundary

This is an observatory systems interpretation, not a claim that A2A or MCP defines a universal saga / transaction model
