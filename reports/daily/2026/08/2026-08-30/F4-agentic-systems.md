# F4 — Agent / Runtime / Harness / Protocol

Current A2A semantics preserve the key W35 split:

```text
contextId = related interaction context
taskId    = distinct stateful work unit
```

A2A also keeps request authentication / authorization separate from context continuity.

MCP Tasks independently provides durable task identity with cooperative cancellation.

These primitives are complementary evidence, not one portable recovery standard.
