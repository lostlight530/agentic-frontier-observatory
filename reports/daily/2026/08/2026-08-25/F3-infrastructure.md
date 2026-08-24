# F3｜Compute, Data, and Infrastructure

Microsoft CAE for workload identities provides a concrete runtime trust-propagation path:

```text
issuer event / policy change
→ resource provider receives changed trust state
→ token rejected
→ claims challenge
→ client requests fresh token
→ conditions re-evaluated
```

This strengthens the infrastructure view of revocation as an event-propagation and enforcement problem

**Boundary:** current workload-identity CAE support is constrained to specified Microsoft Entra / Microsoft Graph scenarios and cannot be generalized to all Agent runtimes
