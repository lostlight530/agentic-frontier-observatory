# F4 — Agents, Runtimes, Harnesses, Protocols

## A2A

A2A provides the strongest new boundary today

A task is a stateful unit of action with a unique task ID, status, artifacts and history

Terminal states cannot be restarted

A `contextId` can still group multiple related tasks and messages

Therefore:

```text
terminal task
→ historical execution record

shared context
→ continuity across new tasks
```

## MCP Tasks

MCP 2026-07-28 makes Tasks an extension family for long-running work

The current Tasks extension models durable task handles with `tasks/get`, `tasks/update` and `tasks/cancel`

Cancellation is cooperative rather than transactional

## Combined judgment

Open protocols are starting to expose the primitive needed for auditable recovery:

> **a recovery attempt can be a new task rather than mutation of the old terminal task**

## Boundary

No portable `supersedesTaskId`, `repairsTaskId` or `incidentId` relation was found today
