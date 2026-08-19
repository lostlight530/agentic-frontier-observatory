# F5｜Evaluation, Safety, Governance, and Standards

Reviewable provenance creates multiple evidence layers that must not be collapsed:

```text
session trace
≠ commit provenance
≠ review approval
≠ automated checks
≠ semantic correctness
≠ authorization correctness
```

GitHub's session-to-commit link improves auditability, while PR reviews and checks provide independent post-execution gates

**Durable candidate:** no single evidence object should be treated as a complete correctness or authorization certificate
