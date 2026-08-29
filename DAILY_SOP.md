# Daily SOP / 每日研究标准作业程序

## Mission / 唯一职责

Every observation day produces a complete global AI research record across F1–F7.

> **允许无变化，不允许无报告。**

Daily answers:

```text
what new evidence appeared
↓
which prior judgment changed
↓
what did not change
↓
what evidence class supports it
↓
what boundary prevents overclaim
↓
what should be watched next
```

## Before research / 开始前

1. read latest remote `main`
2. confirm whether yesterday's PR is merged; an open PR is not historical main state
3. read yesterday's integrated daily, current canonical weekly, Source Registry, watchlist and required history
4. establish exact Asia/Shanghai observation date and cut-off

## Required workstreams / 固定分任务

- F1 History / Theory / Paradigm
- F2 Models / Algorithms / Multimodality
- F3 Compute / Chips / Data / Infrastructure
- F4 Agents / Runtimes / Harnesses / Protocols
- F5 Evaluation / Safety / Governance / Standards
- F6 Open Source / Industry / Economy / Society
- F7 Synthesis / Judgment Revision

Every workstream is checked. A workstream may explicitly report `NO MATERIAL CHANGE`.

## Evidence discipline / 证据纪律

1. prioritize G0–G4 sources
2. verify existence before inference
3. distinguish event/publication/effective/observation/transition dates
4. classify FACT / EXTERNAL CLAIM / ANALYSIS / UNCERTAIN
5. same-source repetition is not independent strengthening
6. current-state confirmation is not a same-day transition unless evidence proves it
7. no strong evidence → write unchanged / no material change
8. never invent H-numbers or trends to make a daily look important

## Required daily pack / 每日交付

```text
reports/daily/YYYY/MM/YYYY-MM-DD.md
reports/daily/YYYY/MM/YYYY-MM-DD/
├─ README.md
├─ F1-history-theory.md
├─ F2-models-algorithms.md
├─ F3-infrastructure.md
├─ F4-agentic-systems.md
├─ F5-evaluation-governance.md
├─ F6-ecosystem-society.md
└─ F7-synthesis.md
```

Founding-period records created before the mature pack rule are not backfilled with invented workstream artifacts.

## Integrated report structure / 主报告结构

```markdown
# <Daily Theme> / <中文主题>
## Global AI Daily Research Report / 全球人工智能每日研究报告
### YYYY-MM-DD

## 0｜Executive Judgment / 核心判断
## 1｜Research Scope / 今日研究范围
## 2｜Historical Continuity / 历史连续性
## 3｜Critical Developments / 关键变化
## 4｜Workstream Findings / 分任务发现
## 5｜Cross-System Analysis / 跨系统分析
## 6｜Changed Judgments / 修正的判断
## 7｜Stable Judgments / 稳定判断
## 8｜Uncertainties and Conflicts / 不确定与冲突
## 9｜Watchlist / 下一轮观察点
## 10｜Primary Sources / 一手来源
```

## Weekly handoff / 向周报交接

Update only the same canonical weekly when the day's evidence changes a weekly hypothesis or closure state.

Daily ≠ mini-weekly. Weekly ≠ concatenated dailies.

## Durable assets / 长期资产

- Source Registry: add only durable new source families / version anchors / corrections
- Watchlist: add, close or escalate durable questions only
- do not duplicate assets because a known source was rechecked

## Correction discipline / 更正纪律

```text
old repository claim
→ audit / new authoritative evidence
→ explicit correction
→ temporal explanation
```

Later evidence must not be made to look like it existed earlier.

## Forbidden / 禁止事项

- no running/deploying/testing external projects
- no independent benchmark reproduction
- no marketing claim → verified capability conversion
- no protocol publication → operational maturity shortcut
- no forced novelty
- no silent historical deletion
- no automation creation
- no CI / Actions modification
- no automatic merge
- no direct main write

## GitHub delivery boundary / GitHub 交付边界

```text
latest merged main
→ new daily branch
→ daily pack
→ canonical weekly update in place
→ README / durable assets only when needed
→ compare main...branch
→ behind_by = 0
→ Draft PR
→ verify mergeable
→ STOP
```
