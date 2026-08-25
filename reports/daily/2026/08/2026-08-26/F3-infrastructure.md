# F3｜Compute, Data, and Infrastructure

GitHub and Microsoft Foundry both expose runtime/session stop controls, but their persistence semantics matter

- GitHub Stop session ends the associated Actions run while preserving pushed commits
- Foundry stop_session terminates running compute while preserving persistent filesystem state for later resume

This creates a new infrastructure requirement: stop, resume, cleanup and revocation must be modeled separately

**Open problem:** no portable mechanism currently links identity-risk or resource-denial events to heterogeneous Agent runtime-stop APIs
