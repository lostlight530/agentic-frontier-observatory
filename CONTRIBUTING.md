# Contributing / 贡献指南

Agentic Frontier Observatory welcomes contributions that improve factual accuracy, source quality, temporal calibration, taxonomy, methodology, durable research assets, repository documentation, or public metadata.

## 中文

### 贡献对象

优先修改真正拥有该问题的长期表面：

- `METHODOLOGY.md` — 信源、陈述分类、时间与证据纪律；
- `SCOPE.md` — 研究范围与排除项；
- `TAXONOMY.md` — 长期比较词汇；
- `SOURCE_REGISTRY.md` — 规范信源身份；
- `watchlist/`、`workstreams/` — 当前研究压力与分工结构；
- 根 README、引用/发布元数据、`.github/`、安全与贡献文档 — 仓库公共基础设施；
- 时间序列 research outputs — 仅在明确纠错任务确实拥有对应记录时修改。

### 来源与时间

贡献应当：

- 优先使用一手、官方或原始研究来源；
- 区分 `event_date`、`publication_date`、`effective_date`、`observed_at` 与已知 `state_transition_date`；
- 区分 FACT、EXTERNAL CLAIM、ANALYSIS 与 UNCERTAIN；
- 保留来源版本、发布者、适用范围、成熟度与不确定性；
- 不把草案、路线图、演示、营销声明或单一案例自动提升为已部署能力或广泛采用；
- 不把同一上游来源的重复页面计为独立证据。

本仓自己的 DOI、README、历史报告或软件归档不能替代外部世界的独立来源。

```text
repository DOI != external evidence
self-citation != independent corroboration
current-state confirmation != same-day transition
source exists != capability validated
```

### 历史与纠错

历史 Daily / Weekly / Monthly 和其他 point-in-time 记录保留原始时间边界。后续发现错误时，应明确纠错并更新当前解释，不要把后来获得的来源倒写成当时已经可用。

周期 SOP 定义研究生产方式，但普通贡献不需要围绕 SOP 或外部维护控制面组织。

### Pull Request

使用仓库 PR 模板，并说明：

- 具体问题与有限改动；
- 受影响的来源、方法、taxonomy、registry、长期文档或基础设施；
- 外部来源及其日期/版本/适用范围；
- 实际完成的核验；
- 尚未核验或仍不确定的部分；
- 历史与兼容影响；
- 安全/隐私影响；
- 最小回滚方式。

## English

### Choose the owning surface

Prefer the durable surface that actually owns the issue:

- `METHODOLOGY.md` for source/evidence/date discipline;
- `SCOPE.md` for research coverage and exclusions;
- `TAXONOMY.md` for comparison vocabulary;
- `SOURCE_REGISTRY.md` for canonical source identities;
- `watchlist/` and `workstreams/` for active research pressure and analytical organization;
- root documentation, citation/release metadata, `.github/`, security, and contribution files for repository infrastructure;
- time-ordered research outputs only when a specific correction genuinely owns that historical/current record.

### Source and time discipline

Contributions should:

- prefer primary, official, or original-research sources;
- separate event, publication, effective, repository-observation, and known-transition dates;
- distinguish facts, attributed external claims, observatory analysis, and uncertainty;
- preserve exact version, issuer, scope, maturity, and limitations where material;
- never promote drafts, roadmaps, demos, marketing claims, or isolated cases into deployed capability or broad adoption without evidence;
- never count multiple derivatives of one upstream source as independent corroboration.

The repository's own DOI, README, prior reports, or software archive do not replace external-world evidence.

### Historical correction

Preserve the original time boundary of historical reports. Correct current interpretation forward and never make a later source appear available to an earlier observation.

The cadence SOPs define research production; ordinary contributions do not need to reproduce maintenance-agent or scheduler control logic.

### Pull requests

Use the repository pull-request template and include the bounded change, affected research surfaces, source/date evidence, verification actually performed, unresolved items, historical impact, security/privacy impact, and rollback.

## Security, privacy, license, and attribution

Do not submit credentials, private information, full paywalled text, or non-public evidence. Follow `SECURITY.md` for sensitive reports.

Contributions to repository-owned work are submitted under the current license. External sources retain their original authorship and licensing, and Git/PR history remains the source of contribution attribution.
