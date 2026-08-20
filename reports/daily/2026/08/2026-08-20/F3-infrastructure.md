# F3｜Compute, Data, and Infrastructure

Artifact provenance turns software-supply-chain infrastructure into part of Agent governance

Relevant primitives include:

- artifact digest
- workflow identity
- source commit SHA
- triggering event
- OIDC claims
- cryptographic signature
- transparency log
- verification tooling

GitHub currently uses Sigstore for artifact attestations and exposes verification workflows for consumers

**Open problem:** no evidence today shows a universal binding from Agent session identity and delegated authority into build attestations
