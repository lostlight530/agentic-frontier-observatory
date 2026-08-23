# F3｜Compute, Data, and Infrastructure

W34 makes provenance and admission part of infrastructure rather than documentation

The durable chain is now:

```text
source
→ build
→ artifact digest
→ signed attestation
→ policy evaluation
→ admission
→ runtime trust state
```

GitHub attestation lifecycle operations add an evidence-maintenance layer after initial admission

**Open boundary:** evidence deletion or re-verification does not yet establish automatic runtime termination, rollback or cross-system credential revocation
