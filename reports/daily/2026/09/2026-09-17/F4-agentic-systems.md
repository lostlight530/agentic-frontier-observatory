# F4 — Agents, Runtimes, Harnesses and Protocols

MCP `SEP-2663` remains Final / Extensions Track. Normative Tasks semantics require durable task creation; `tasks/cancel` is cooperative and ack-only/eventually consistent, and a task is not guaranteed to enter `cancelled`. Therefore task lifecycle maturity != guaranteed runtime stop != rollback/recovery.
