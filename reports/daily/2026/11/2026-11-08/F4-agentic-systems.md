# F4｜Agent、Runtime、Harness、协议 / 2026-11-08

- logical_date: 2026-11-08 Asia/Shanghai
- actual_execution_date: 2026-11-08
- execution_at: 2026-11-08 15:27:56 Asia/Shanghai
- execution_utc: 2026-11-08T07:27:56.025Z
- observation_cutoff: 2026-11-08 15:27:56 Asia/Shanghai
- independent_window: 2026-11-08 single bounded research run
- base_sha: `b4c03cf07473eb423e04f6918b3fbcbedad927a0`
- evidence_boundary: provider publication != independent execution; checker/CI/TCK/runtime NOT_EXECUTED

## 1｜可证伪研究问题
本轮新观察与前轮研究判断究竟在哪个明确的证据层发生变化，什么条件会推翻它

## 2｜一手证据与直接判断
Poppy Draft 0.4 Git 比较 ahead 9 / behind 0 / 45 files，协议与指南更新涵盖 Device Sign-In 跳转、metadata、extension_required 与 token 约束，但源文件和 repo 提交本身不构成成功 delegation/revocation/execution 或 recovery

- primary_1: https://github.com/personal-agent-protocol/personal-agent-protocol/compare/46beb2139417ad7b990dbf9b2dc84ddc3dd494d9...a2ca25ab43eccc045bc7f2b86d3b579088da9af1
  - supports: 确切版本差分
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_2: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a2ca25ab43eccc045bc7f2b86d3b579088da9af1/content/versions/0.4/spec.mdx
  - supports: 0.4 Draft 技术文本
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_3: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a2ca25ab43eccc045bc7f2b86d3b579088da9af1/content/versions/0.4/guides.mdx
  - supports: 非强制实施指导
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_4: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a2ca25ab43eccc045bc7f2b86d3b579088da9af1/content/versions/versions.json
  - supports: 0.4 未列 published
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM

## 3｜分层裁决
- external_fact: publisher publication and pinned source existence only
- external_claim: benchmark, runtime capability and adoption assertions attributed to originator
- analysis: cross-system interpretation limited to evidence layer
- independent_support: NONE_PROVEN_BY_SHARED_SOURCE_PAGES
- H45: OPEN / NOT_REFUTED

## 4｜反证条件与后续
需双提供者端到端授权与撤销、外部副作用 commit、failure recovery 接受证据

## 5｜时间与执行边界
publication_date != observed_at != state_transition_date；门户和仓库当前显示不说明当日状态刚转换；external project, TCK, checker, CI, model benchmark NOT_EXECUTED
