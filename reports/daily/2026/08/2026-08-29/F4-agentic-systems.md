# F4 — Agents, Runtimes, Harnesses, Protocols

A2A supplies today's strongest evidence

- terminal Tasks remain distinct historical work units
- new Tasks can share `contextId`
- incoming requests are authenticated
- authorization is evaluated by the server's policy
- task operations remain authorization-scoped
- `AUTH_REQUIRED` makes mid-task authority insufficiency explicit

The resulting recovery rule is:

```text
new Task under same context
≠ inherited authorization
```

This is stronger than Friday's task-identity finding because it adds an explicit security boundary
