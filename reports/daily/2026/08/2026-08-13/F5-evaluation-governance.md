# F5｜Evaluation, Safety, Governance, and Standards

The new evaluation distinction is:

> **authenticated agent traffic ≠ authorized agent action**

A verifier may know a request came from ChatGPT agent or another signed service while still needing to decide:

- whether this agent is allowed
- whether this user delegated the action
- which resource and method are permitted
- whether payment or additional approval is required
- how the action is logged and revoked

IETF Web Bot Auth remains draft-layer architecture on top of standardized RFC 9421 message signatures
