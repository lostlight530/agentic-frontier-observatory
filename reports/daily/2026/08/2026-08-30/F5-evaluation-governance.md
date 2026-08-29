# F5 — Evaluation / Safety / Governance / Standards

The strongest Sunday governance rule is A2A's in-task authorization boundary:

```text
TASK_STATE_AUTH_REQUIRED
≠ authorization for an operation
≠ automatic authority for later messages
```

Authorization scope, validity and revocation remain implementation / issuer / extension concerns.

This supports H11 at the protocol-boundary level while keeping portable recovery authorization open.
