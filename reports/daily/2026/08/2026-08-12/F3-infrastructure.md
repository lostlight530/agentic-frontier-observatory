# F3｜Compute, Data, and Infrastructure

## Identity is now infrastructure

Microsoft, Google Cloud and AWS expose different but convergent building blocks:

- lifecycle-bound agent principals
- token issuance and mediation
- delegated and autonomous authorization
- workload/agent directories
- cryptographic or policy-based trust anchors
- audit and revocation controls

Google's SPIFFE-based attested Agent Identity and certificate-bound tokens make credential theft resistance part of the identity design

AWS AgentCore separates workload identity from downstream credentials and mediates OAuth/API access

Microsoft Entra adds organizational lifecycle, sponsor and permission-governance semantics
