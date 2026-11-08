# F3｜算力、数据和基础设施 / 2026-11-08

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
Tencent 提供云 API/应用可用性声明，但无本轮实际量测的集群计算、吞吐、网络成本、能源账本，Poppy Git 提交也不是基础设施变化事实

- primary_1: https://www.tencent.com/zh-cn/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/
  - supports: API 发行方状态
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_2: https://github.com/personal-agent-protocol/personal-agent-protocol/compare/46beb2139417ad7b990dbf9b2dc84ddc3dd494d9...a2ca25ab43eccc045bc7f2b86d3b579088da9af1
  - supports: 协议源码修订
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM

## 3｜分层裁决
- external_fact: publisher publication and pinned source existence only
- external_claim: benchmark, runtime capability and adoption assertions attributed to originator
- analysis: cross-system interpretation limited to evidence layer
- independent_support: NONE_PROVEN_BY_SHARED_SOURCE_PAGES
- H45: OPEN / NOT_REFUTED

## 4｜反证条件与后续
缺乏 runtime 量测和可重复环境，NO_MATERIAL_CHANGE

## 5｜时间与执行边界
publication_date != observed_at != state_transition_date；门户和仓库当前显示不说明当日状态刚转换；external project, TCK, checker, CI, model benchmark NOT_EXECUTED
