# F3｜Compute, Data, and Infrastructure

GitHub's documented admission path combines:

- artifact attestation stored with the image
- GitHub trust root
- Sigstore Policy Controller
- ClusterImagePolicy
- namespace-level enforcement
- admit / reject behavior

This is stronger than passive verification because infrastructure behavior changes when policy fails

**Open problem:** Agent-specific identity, delegation and policy version are still not standard fields in ordinary build-provenance enforcement
