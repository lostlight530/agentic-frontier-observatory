# F4 — Agents, Runtimes, Harnesses, Protocols

A2A current `Life of a Task` still uses `contextId` plus `referenceTaskIds` for contextual follow-up and requires a new Task after terminal state. Artifact mutation/version linkage is explicitly client-managed rather than part of the A2A protocol specification.

Therefore: `referenceTaskIds != typed recovery lineage`; `Context Continuity != Authority Continuity`; `Task reference != Task authority`. H37-1 and H37-2 remain `OPEN`.