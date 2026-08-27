# F3 — Compute, Data, Infrastructure

## Finding

Durable asynchronous work requires infrastructure that survives the original request boundary

MCP Tasks explicitly models server-generated task identity, status, timestamps, TTL and polling guidance

This shifts part of Agent recovery from transient request handling into durable control-plane state

Important infrastructure objects now include:

```text
task_id
status
created_at
last_updated_at
retention / TTL
result / error
recovery relation
```

The last item is still missing as a portable standard relation

## Boundary

Durable task metadata does not prove that external side effects, credentials or delegated authority are fully represented in the task record
