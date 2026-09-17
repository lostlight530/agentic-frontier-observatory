# Contributing / 贡献指南

## 中文

本仓库接受能够提升事实准确性、来源质量、时间校准、分析边界与仓库治理可恢复性的贡献。

开始前先确认当前合并 `main`、相关开放 PR/活动分支、受影响的 owning surface，以及当前适用的研究或治理合同。

贡献应当：

- 优先引用一手、官方或原始研究来源；
- 明确区分事件发生日期、发布日期、本仓观察日期与状态转换日期；
- 区分事实、外部主体声明、本仓分析与未知状态；
- 对不确定、冲突、缺失或无法确认的内容显式标注；
- 避免把草案、路线图、演示或营销声明写成已经实现的能力；
- 保留历史 Daily / Weekly / Monthly / ledger / audit 的原始时间边界，通过 correction / reconciliation 向前修正；
- 对维护类改动明确 base revision、owning surface、实际执行的检查和未执行的检查；
- 在同一 surface / logical period 已有 live owner 时先 `COORDINATE`，不要建立平行维护线；
- 不提交凭据、私人信息、付费内容全文、隐藏推理或无法公开核验的材料。

本仓库不接收以运行结果、性能复现或产品体验替代来源分析的贡献，因为能力验证不属于本仓库职责。

`DAILY_SOP.md`、`WEEKLY_SOP.md`、`MONTHLY_SOP.md` 是研究生产合同；合同存在不等于任务已执行。checker / producer / runtime 脚本如果存在，属于执行层 owning source，不应仅为了统一治理文字而修改。只有确认缺陷由该执行文件拥有时，才应修改代码并单独验证。

仓库维护遵循：

```text
write never probes
no confirmed defect -> NO_CHANGE_REQUIRED
overlap -> COORDINATE
unrun check -> NOT_EXECUTED
unobserved execution -> EXECUTION_NOT_OBSERVED
real bounded repair -> aggregate diff -> Draft PR -> maintainer review
```

外部独立审计是特殊治理 producer：只有当 active external-audit contract 要求且审计实际执行时，`HEALTHY` 才可以生成规范 audit record；这不授权为了活动量修改研究正文或执行层。

## English

This repository welcomes contributions that improve factual accuracy, source quality, temporal calibration, analytical boundaries, and recoverable repository governance.

Before changing the repository, recover current merged `main`, relevant open PRs/live branches, the owning surface, and the current research or governance contract for the subject.

Contributions should:

- prefer primary, official, or original-research sources;
- separate event, publication/update, repository-observation, and state-transition dates;
- distinguish facts, attributed external claims, repository analysis, and unknown state;
- mark uncertainty, conflict, missing evidence, and unverifiable material explicitly;
- never present drafts, roadmaps, demos, or marketing claims as implemented capability;
- preserve historical Daily/Weekly/Monthly/ledger/audit time boundaries and correct forward through correction/reconciliation;
- for maintenance work, record the exact base revision, owning surface, checks actually run, and checks not run;
- `COORDINATE` rather than creating a parallel maintenance line when the same surface/logical period already has a live owner;
- never submit credentials, private information, full paywalled content, hidden reasoning, or non-public evidence.

Capability testing, benchmark reproduction, and product validation are outside this repository's source-analysis role.

`DAILY_SOP.md`, `WEEKLY_SOP.md`, and `MONTHLY_SOP.md` are research-production contracts. Contract presence does not prove execution. Checker/producer/runtime scripts, when present, are execution-layer owners and are not changed merely to normalize governance prose; code changes require a confirmed code-owned defect and independent verification.

Maintenance discipline:

```text
write never probes
no confirmed defect -> NO_CHANGE_REQUIRED
overlap -> COORDINATE
unrun check -> NOT_EXECUTED
unobserved execution -> EXECUTION_NOT_OBSERVED
real bounded repair -> aggregate diff -> Draft PR -> maintainer review
```

The external-audit cadence is a special governance producer: when its active contract requires a canonical record and the audit actually ran, a `HEALTHY` result may still produce that governance record. It does not authorize activity-only edits to research or execution-layer files.
