# F5 — Evaluation / Governance

**Objects:** NIST NCCoE Software and AI Agent Identity and Authorization; AWS Agent Registry approval lifecycle; AgentCore Consent Portal.

**Current state:** NIST remains Reviewing Comments. AWS documents product-local consent and registry review/approval states.

**Evidence class:** FACT for current official documentation/status; no compliance certification or independent governance-effectiveness test.

**Current finding:** AWS adds inspectable approval/discovery and user-consent control surfaces, but neither establishes a portable continuous-authorization, exception/break-glass, revocation-reconciliation or recovery-acceptance contract.

**Evaluation conditions:** no new independent benchmark/harness result is admitted here. AWS Runtime measurements remain provider-authored and are handled as external claims in F3.

**Uncertainty:** portability, curator policy equivalence, consent revocation propagation and recovery takeover semantics remain unverified.

**Handoff to F7:** keep identity, authentication, consent, registry approval, runtime authorization and recovery acceptance as separate governance objects.

**Boundary:** approval != authorization != execution != recovery acceptance.

Primary sources:
- https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity-consent-portal.html
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-record-lifecycle.html
