# F4 — Agentic Systems

A2A current specification explicitly exposes `TASK_STATE_AUTH_REQUIRED` for in-task authorization and allows delegation of authorization fulfillment to the client.

However:

- the state transition is not itself an authorization grant;
- authorization scope, representation, validity and revocation semantics are not defined by the core state;
- authorization obtained during a Task must not be assumed to authorize subsequent messages unless explicitly defined;
- `referenceTaskIds` remains a related-task context reference, not typed recovery lineage.

Therefore `Identity != Credential != Authority`, `Context Continuity != Authority Continuity`, and `Task reference != Task authority` remain required boundaries.
