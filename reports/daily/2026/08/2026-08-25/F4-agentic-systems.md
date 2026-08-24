# F4｜Agents, Runtimes, Harnesses, and Protocols

Microsoft Entra Conditional Access for Agents makes Agent subject/audience boundaries explicit, while CAE shows how selected resource providers can enforce changed trust state after token issuance

For Agent systems, the resulting open chain is:

```text
Agent / user subject
→ audience-specific token
→ resource
→ trust change
→ resource denial / challenge
→ Agent runtime reaction
```

The last step remains under-specified across heterogeneous Agent systems

**Open problem:** MCP / A2A / third-party tool resources do not yet expose one portable equivalent of this revocation-and-challenge path
