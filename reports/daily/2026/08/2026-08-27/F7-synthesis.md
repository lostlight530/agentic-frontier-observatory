# F7 — Synthesis

## 2026-08-27 synthesis

W35 now exposes a richer runtime state machine

```text
TRUST CHANGE
→ DENY
→ CANCEL OPERATION
→ STOP SESSION
→ INVENTORY RESIDUE
→ DELETE / REVERT / COMPENSATE / REVOKE
→ REAUTHORIZE
→ RESUME
```

### H10

**Termination and remediation become separate lifecycle phases**

Status: **NEW / STRONG CROSS-PRODUCT STRUCTURAL SIGNAL**

### Why it matters

A safe system cannot infer `incident resolved` from `Agent stopped`

The durable question becomes whether every side effect can be discovered, correlated to the incident, assigned a remediation action, and rechecked before resume

### Durable distinctions

```text
cancel ≠ stop
stop ≠ delete
stop ≠ rollback
revert ≠ erase history
resume ≠ fresh trust
termination ≠ remediation
```
