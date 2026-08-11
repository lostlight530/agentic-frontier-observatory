# F4｜Agents, Runtimes, Harnesses, and Protocols

Yesterday's governed discovery stack lacked one critical ordering constraint

```text
Discovery
→ Selection
→ Identity
→ Authorization
→ Credential
→ Invocation
```

Identity must precede meaningful authorization because a policy needs a principal, delegator and target resource

A2A Agent Cards, ARD records and MCP endpoints describe resources and capabilities, but today's evidence does not show one universal mechanism for carrying Microsoft, Google or AWS agent identity semantics across those protocols

That cross-boundary problem becomes a new watch item
