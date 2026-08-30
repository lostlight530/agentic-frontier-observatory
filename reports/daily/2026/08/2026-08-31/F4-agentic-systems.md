# F4 — Agent / Runtime / Harness / Protocol

## 2026-08-31 finding

A2A normative Message schema exposes `referenceTaskIds` for additional context.

This closes the overly broad question “does any cross-task reference exist?”

It leaves the higher-value question open:

```text
generic reference
→ typed predecessor / supersedes / repairs / compensates ?
→ portable incident relation ?
```

MCP Tasks remains a Draft extension and does not close the cross-protocol recovery mapping.
