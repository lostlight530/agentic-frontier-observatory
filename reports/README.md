# Reports / 研究报告

## Daily / 每日

`daily/` contains the atomic research record. Every observation day produces one integrated report plus preserved workstream outputs.

`daily/` 是原子研究记录，每个观察日形成一份完整总报告和保留的分任务结果。

Daily maintenance follows [`DAILY_SOP.md`](../DAILY_SOP.md).

## Weekly / 每周

`weekly/` compresses accumulated daily evidence into durable judgments, changed assumptions, stable conclusions, and the next watch priorities.

周报只从日报、事件账本和权威新增证据中综合，不替代日报，也不补写不存在的历史。

Weekly maintenance follows [`WEEKLY_SOP.md`](../WEEKLY_SOP.md). One ISO week keeps one canonical file and is updated in place until natural-week closure.

- [`2026-W32`](./weekly/2026/2026-W32.md) — founding week, 7–9 August 2026
- [`2026-W33`](./weekly/2026/2026-W33.md) — first complete seven-day week, 10–16 August 2026
- [`2026-W34`](./weekly/2026/2026-W34.md) — complete seven-day week, 17–23 August 2026

## Monthly / 每月

Monthly synthesis is a natural-month closure layer derived from the real daily and weekly record. It does not replace atomic reports and it must not be finalized before the natural month ends.

月报只在自然月结束后收口，必须保留真实仓库生命周期和跨月周边界，不得提前制造 `FINAL` 月报。

Monthly maintenance follows [`MONTHLY_SOP.md`](../MONTHLY_SOP.md). Canonical monthly reports use `monthly/YYYY/YYYY-MM.md` when the first natural monthly closure is actually due.

For August 2026, repository-native coverage begins on 7 August 2026. The first August monthly closure therefore covers the real observatory lifetime from 7–31 August rather than fabricating 1–6 August run history.
