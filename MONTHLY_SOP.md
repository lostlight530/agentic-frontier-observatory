# Monthly SOP / 每月研究标准作业程序

## Mission / 唯一职责

Compress existing daily, weekly, Source Registry, watchlist and correction history into a long-horizon monthly state.

Monthly synthesis never replaces atomic history and never finalizes a month before the natural month ends.

## Canonical file / 唯一月报

```text
reports/monthly/YYYY/YYYY-MM.md
```

Asia/Shanghai natural month is the time boundary.

## Monthly states / 月度状态

- `OPEN`
- `CLOSED`
- `CLOSED_WITH_GAPS`
- `CORRECTED`

### OPEN checkpoint / 开放检查点

Before month end, a canonical monthly file may exist only when useful for real maintenance and must remain `OPEN`.

It must state:

- checkpoint-through date
- repository-native coverage start
- days not yet observed / not yet occurred
- complete vs partial weekly context

It must not use `FINAL` / `CLOSED` language.

## August 2026 special coverage / 2026 年 8 月特殊覆盖

Repository founded: **2026-08-07**.

Real native coverage:

```text
2026-08-07 → 2026-08-31
```

Never fabricate 1–6 August runs.

- W32 = founding partial week 7–9
- W33 = complete
- W34 = complete
- W35 = complete
- W36 intersects August only on 31 Aug and is partial monthly context

## Monthly workflow / 月度流程

1. audit actual daily dates and gaps
2. audit canonical weekly files and complete/partial status
3. aggregate genuinely changed / strengthened / weakened / refuted / corrected judgments
4. preserve maturity differences among research, spec, product and implementation
5. summarize Source Registry maintenance without using source count as evidence strength
6. summarize watchlist closed / continued / escalated items
7. deduplicate derivative evidence
8. list open uncertainty
9. form next-month carry-forward
10. never backdate monthly synthesis into atomic daily history

## Recommended structure / 推荐结构

```markdown
# YYYY-MM — Monthly Research / 月度研究

## 0｜Coverage and Closure State / 覆盖与收口状态
## 1｜Monthly Executive Judgment / 月度核心判断
## 2｜Daily and Weekly Coverage / 日周覆盖
## 3｜Major Evidence and State Changes / 主要证据与状态变化
## 4｜Durable Judgments / 稳定判断
## 5｜Changed, Weakened, and Refuted Judgments / 修正、削弱与证伪
## 6｜Models, Infrastructure, Agentic Systems, and Governance / 模型、基础设施、智能体系统与治理
## 7｜Protocol, Identity, and Trust Boundaries / 协议、身份与信任边界
## 8｜Source and Watchlist Maintenance / 信源与观察清单维护
## 9｜Open Uncertainties / 未解决不确定性
## 10｜Next-Month Carry-Forward / 下月延续
## 11｜Primary Records / 原始记录索引
```

## Memory rule / 记忆规则

```text
Daily atomic fact
→ Weekly hypothesis settlement
→ Monthly durable / open state
→ next month carry-forward
```

> **月末不是遗忘，月初不是重启。**

## Boundaries / 边界

- no manufactured monthly trend
- same-source repetition ≠ independent strengthening
- protocol publication ≠ operational maturity
- product implementation ≠ universal ecosystem adoption
- no premature final closure
- no external running/deploy/testing
- no automation / CI changes
- no automatic merge
- no direct main write
