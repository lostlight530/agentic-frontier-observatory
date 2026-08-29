# Reports / 研究报告

This directory is the observatory's time-structured memory.

```text
Daily = atomic observation
Weekly = hypothesis memory and settlement
Monthly = long-horizon compression and carry-forward
```

## Daily / 每日

`daily/` contains the atomic research record.

> **允许无变化，不允许无报告。**

Mature daily pack:

```text
Integrated Daily
+ F1–F7
+ task index
```

Daily maintenance follows [`DAILY_SOP.md`](../DAILY_SOP.md).

Historical records created before the mature pack/layout rule are not rewritten solely for style. Factual, status and chronology corrections remain explicit.

## Weekly / 每周

Exactly one canonical file per ISO week:

```text
weekly/YYYY/YYYY-Www.md
```

Current chain:

- [`2026-W32`](./weekly/2026/2026-W32.md) — **CLOSED**, founding partial week, 7–9 Aug
- [`2026-W33`](./weekly/2026/2026-W33.md) — **CLOSED**, 10–16 Aug
- [`2026-W34`](./weekly/2026/2026-W34.md) — **CLOSED**, 17–23 Aug
- [`2026-W35`](./weekly/2026/2026-W35.md) — **CLOSED**, 24–30 Aug

Historical `*-progress.md` files are **legacy non-canonical snapshots**, retained only for audit and superseded by the matching `YYYY-Www.md`.

Weekly maintenance follows [`WEEKLY_SOP.md`](../WEEKLY_SOP.md).

> **周日不是清空，周一不是重启。**

## Monthly / 每月

Canonical path:

```text
monthly/YYYY/YYYY-MM.md
```

- [`2026-08`](./monthly/2026/2026-08.md) — **OPEN checkpoint through 30 Aug**

The repository was founded on 7 August. August 1–6 are not observatory-native runs.

August cannot close until the actual 31 August record exists. W36 intersects August only on 31 August and is partial monthly context.

Monthly maintenance follows [`MONTHLY_SOP.md`](../MONTHLY_SOP.md).

## Canonicality / 记录优先级

```text
exact-day integrated daily = atomic state for that observation day
canonical YYYY-Www.md     = weekly settlement
canonical YYYY-MM.md      = monthly settlement / checkpoint
legacy progress snapshot  = historical supplement only
```

Later synthesis does not rewrite earlier-day knowledge; corrections explain changed understanding explicitly.
