# 2026-10-05 MCP v0.2.2 Release-Status Reconciliation

## Identity
- Repository: `lostlight530/agentic-frontier-observatory`
- Record type: `RELEASE_STATUS_PRECISION_CORRECTION`
- Observed at: `2026-10-05 Asia/Shanghai`
- Object: Model Context Protocol `ext-tasks v0.2.2`

## Date/status planes
- GitHub release `published_at`: `2026-09-30T22:23:51Z`
- GitHub release status: `prerelease=true`
- npm package version: `0.2.2`, public/installable
- observatory correction date: `2026-10-05`
- protocol/extension lifecycle transition from this evidence: NOT_ESTABLISHED
- runtime/conformance execution: NOT_PERFORMED

## Why this correction exists
The 2026-10-04 Daily correctly bounded `0.2.2` to an implementation/package surface, but did not preserve the separate GitHub prerelease label. Current repository truth therefore gains a narrower status representation without rewriting the prior Daily.

```text
GITHUB_RELEASE_LABEL != NPM_PACKAGE_AVAILABILITY
PACKAGE_AVAILABILITY != PROTOCOL_MATURITY
PRERELEASE != UNAVAILABLE
PUBLIC_PACKAGE != STABLE_CONFORMANCE
```

## Primary sources
- https://github.com/modelcontextprotocol/ext-tasks/releases/tag/v0.2.2
- https://www.npmjs.com/package/@modelcontextprotocol/ext-tasks

## Durable effects
- Source Registry: current ext-tasks status note corrected
- Ledger: chronology-preserving correction event appended
- History: this record
- Watchlist: no new item and no closure
- W40: not reopened
- W41: uses corrected status as Monday-opening evidence
