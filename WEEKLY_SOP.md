# Weekly SOP / 每周研究标准作业程序

## Mission / 唯一职责

Compress one Asia/Shanghai natural week's real daily evidence into a falsifiable, memory-bearing hypothesis system.

> **周日不是清空，周一不是重启。**

## Canonical weekly / 唯一周报

```text
reports/weekly/YYYY/YYYY-Www.md
```

One week has one canonical file, updated in place until closure.

Do not fabricate repository history before founding or across missing observation days. Cross-month weeks remain one weekly file.

## State machine / 周度状态机

```text
Monday opening hypotheses
↓
Tue–Sat accumulation / correction
↓
Sunday settlement
↓
Durable / Strengthened But Open / Open / Refuted
↓
carry unresolved state forward
```

## Monday / 周一

- wait for Monday integrated daily
- read prior weekly final + current watchlist/source registry
- declare coverage
- open a limited set of falsifiable Hs
- include falsifiers
- treat prior durable doctrine as baseline, not novelty

## Tue–Sat / 周中

Use:

`NEW`, `STRENGTHENED`, `UNCHANGED`, `WEAKENED`, `OPEN`, `REFUTED`.

Same-source repetition does not independently strengthen a hypothesis.

A day with no relevant weekly delta may leave the canonical weekly unchanged.

## Sunday / 周日

Only after the final real daily exists:

1. audit coverage and daily records
2. list genuine evidence added
3. settle every H
4. distinguish `DURABLE`, `STRENGTHENED BUT OPEN`, `OPEN`, `REFUTED`
5. state narrow durable doctrine
6. preserve corrections and counterevidence
7. list open gaps
8. create next-week carry-forward
9. do not manufacture Sunday novelty

When Sunday Daily and weekly settlement are completed in the same maintenance pass, prefer one branch and one final PR for both. This is cadence coalescing, not a second weekly artifact: there is still exactly one canonical weekly file. Do not create a duplicate weekly PR solely to satisfy a cadence label.

## Recommended structure / 推荐结构

```markdown
# <Theme> / <主题>
## Global AI Weekly Research — YYYY-Www Final

## 0｜Coverage and Closure State / 覆盖与收口状态
## 1｜Executive Weekly Judgment / 周度核心判断
## 2｜Evidence Added This Week / 本周新增证据
## 3｜Hypothesis Settlement / 假设结算
## 4｜Durable and Changed Judgments / 稳定与变化判断
## 5｜Corrections and Counterevidence / 更正与反证
## 6｜Models, Infrastructure, Agents, and Governance / 模型、基础设施、智能体与治理
## 7｜Open Gaps / 未解决缺口
## 8｜Next-Week Carry-Forward / 下周延续
## 9｜Primary Sources and Daily Records / 一手来源与日报索引
```

## Legacy progress snapshots / 历史周中快照

Early `YYYY-Www-YYYY-MM-DD-progress.md` files may remain for audit, but must be marked:

- `LEGACY_NON_CANONICAL`
- superseded by `YYYY-Www.md`
- frozen; never updated
- never counted as a second weekly

## Agent / PR evidence boundary / Agent 与 PR 证据边界

Weekly settlement is supported by real Dailies, registered primary sources, current repository facts, and explicit corrections.

Jules, Codex, or another agent's task/PR summary, automated test narrative, completion judgment, or PR body is not independent strengthening evidence.

```text
agent summary != weekly evidence
PR narrative != current main truth
same agent restatement != independent source
claimed completion != verified state transition
```

If an agent-authored PR actually changes merged `main`, the **merged repository state** may be treated as a repository fact. The PR narrative itself is still not automatically authoritative. Historical agent prose that needs correction must retain its original time context and be corrected explicitly in current records, never backdated into the earlier week.

## Permanent boundaries / 永久边界

```text
Capability ≠ Deployability
Discovery ≠ Authorization ≠ Invocation
Identity ≠ Credential ≠ Authority
Protocol Publication ≠ Operational Maturity
Admission ≠ Continuous Authorization
Runtime Stop ≠ Rollback
Termination ≠ Remediation
Agent/Task Narrative ≠ Authoritative Evidence
```

No external project execution, no automation, no CI/Actions changes, no automatic merge, no direct main write.
