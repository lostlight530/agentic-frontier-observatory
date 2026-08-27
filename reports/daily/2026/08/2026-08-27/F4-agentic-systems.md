# F4 — Agentic Systems

Today's Agent-runtime model separates four controls

```text
1 cancel current operation
2 stop Agent session / compute
3 delete retained runtime state
4 revert / compensate durable external effects
```

GitHub, Microsoft Foundry and OpenAI expose evidence for different parts of this ladder

No public evidence today shows a portable cross-vendor policy bridge that selects and coordinates all four levels after one trust event

**W35 implication:** safe termination is an orchestration problem, not a single API call
