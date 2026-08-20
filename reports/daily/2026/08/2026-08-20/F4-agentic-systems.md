# F4｜Agents, Runtimes, Harnesses, and Protocols

W34 now separates three provenance domains:

```text
AGENT PROVENANCE
session / initiator / tool path

SOURCE PROVENANCE
commit / PR / review / merge

BUILD PROVENANCE
workflow / source SHA / artifact digest / attestation
```

These domains should eventually correlate, but none can substitute for the others

MCP/A2A interoperability does not currently imply that Agent provenance metadata survives into software-build attestations

**New research question:** can open Agent protocols carry provenance references that remain meaningful after code is merged and built?
