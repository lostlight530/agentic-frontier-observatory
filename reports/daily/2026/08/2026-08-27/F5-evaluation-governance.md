# F5 — Evaluation & Governance

Incident governance now needs evidence for **what survived termination**

A credible post-stop record should distinguish:

- cancelled in-flight operations
- stopped sessions / compute
- retained local state
- already-issued credentials
- durable external writes
- remediation / revert actions
- authorization for resume

GitHub's separate revert-PR mechanism is useful evidence that rollback of durable change can itself require a new governed decision

**Rule:** termination evidence ≠ remediation evidence
