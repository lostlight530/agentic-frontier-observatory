# F5 — Evaluation, Safety, Governance, Standards

## Governance finding

Recovery needs a fresh decision surface

A new task ID is useful only if governance can answer:

- who authorized it
- what prior incident/task it repairs
- what authority is narrower or broader than the original
- which credentials were refreshed or revoked
- what evidence proves recovery completion

A2A's terminal-task boundary and MCP's durable task identity strengthen the case for an auditable recovery object

## New rule

```text
new task identity ≠ fresh authorization proof
```

## Open standard gap

No reviewed open protocol publishes one common object binding:

```text
original_task_id
→ incident_id
→ recovery_task_id
→ authority evidence
→ remediation completion
```
