# F1 — History & Theory

Today's control-theory distinction is between **termination** and **reconciliation**

A system can stop producing new actions while already-created state remains in the world

For Agent governance this means a lifecycle cannot collapse into `running / stopped`

A better conceptual state machine separates:

```text
operation → session → persistent state → durable effect → remediation → resume
```

**Finding:** stopping future causation does not erase prior causation
