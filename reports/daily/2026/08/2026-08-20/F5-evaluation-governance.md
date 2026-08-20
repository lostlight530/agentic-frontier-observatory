# F5｜Evaluation, Safety, Governance, and Standards

Artifact attestation changes what can be verified but not what can be concluded

A verifier may establish:

```text
artifact digest
→ claimed source commit
→ build workflow
→ repository / environment / trigger
→ cryptographic validity
```

It still must separately decide:

```text
was the source reviewed adequately
→ was delegated authority valid
→ is the artifact safe
→ is this build allowed in this environment
→ should deployment proceed
```

**Durable candidate:** `verification ≠ authorization to deploy`
