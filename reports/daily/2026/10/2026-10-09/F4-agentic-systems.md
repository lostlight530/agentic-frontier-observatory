# F4 — Agentic systems

2026-10-09 Asia/Shanghai · **CHECKED**.

DatabaseTaskStore persists task snapshots/status/message history/artifacts; DatabasePushNotificationStore persists webhook config. Persisted task record != resumed worker != idempotent effect != typed recovery lineage. ownerResolver changes can orphan previously stored rows. A2A protocol release remains v1.0.1; no TCK/cross-vendor conformance verified.

Primary: https://github.com/a2aproject/a2a-js/releases/tag/v1.3.0; current SDK guide: https://github.com/a2aproject/a2a-js/blob/main/docs/persistent-stores.md. Source lineage: A2A Project, no independent-publisher credit. External execution: **NOT_EXECUTED**.
