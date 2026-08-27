# F2 — Models & Algorithms

The model layer adds a useful cancellation distinction

OpenAI Realtime exposes cancellation of an in-progress response while leaving the surrounding session intact

That makes operation-level cancellation a narrower primitive than Agent-session termination

For long-running inference systems, governance should preserve which generation / tool step was cancelled rather than treating the entire session as one atomic action

**Boundary:** response cancellation does not imply rollback of tool calls or durable external effects
