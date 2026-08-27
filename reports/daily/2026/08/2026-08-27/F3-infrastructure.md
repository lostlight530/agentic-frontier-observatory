# F3 — Infrastructure

Microsoft Foundry hosted-session semantics separate active compute from persistent session storage

```text
STOP
→ terminate compute
→ retain persistent filesystem
→ possible later resume
```

Deletion is a separate lifecycle action

This means runtime infrastructure needs explicit residual-state inventory after stop

**Finding:** compute termination is not equivalent to state destruction

**Open question:** does resume systematically require fresh identity, delegation, policy and risk evaluation?
