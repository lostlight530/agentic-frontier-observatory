# F3｜Compute, Data, and Infrastructure

Attestation lifecycle introduces a new infrastructure concern beyond generation and verification

```text
attest
→ verify
→ admit
→ trust change
→ delete / supersede evidence
→ re-verify
→ re-admit or reject
```

The unresolved boundary is runtime propagation: evidence deletion can block future verification, but does not by itself prove termination of already-running workloads
