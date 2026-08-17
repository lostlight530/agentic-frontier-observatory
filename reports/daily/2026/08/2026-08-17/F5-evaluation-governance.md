# F5｜Evaluation, Safety, Governance, and Standards

Today separates four governance layers that are easy to collapse:

```text
WHO MAY USE
→ WHAT IDENTITY REACHES DOWNSTREAM
→ WHAT ACTION MAY BE REQUESTED
→ WHETHER A WRITE REQUIRES APPROVAL
```

OpenAI's Connector Action Constraints narrow action inputs but do not filter connector outputs, creating a separate data-return governance problem

GitHub's agent control plane adds session visibility and audit; Microsoft Entra adds sponsor, access-package expiry, and lifecycle decisions

**W34 doctrine candidate:** permission, action constraint, approval, data-return control, and audit must be evaluated independently
