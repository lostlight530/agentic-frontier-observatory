# F3 — Compute / Data / Infrastructure

## 2026-08-31 finding

A2A Java SDK 1.2.0.Final provides concrete infrastructure evidence that cross-task relation resolution reaches the authorization layer.

Referenced Tasks are resolved through task-store/request-context machinery, and the release hardened read authorization on those lookups.

Therefore task-store retrieval is not merely a convenience layer; in multi-user systems it is part of the security boundary.
