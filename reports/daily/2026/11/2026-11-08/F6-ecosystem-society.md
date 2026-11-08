# F6｜开源、产业、社会 / 2026-11-08

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
Tencent Hy4 release announcement 与 Hy4-preview 已有开放仓库是不同软件对象；11 月 7 日 Xinhua 22 家全球媒体 AI 应用标准共建与两年目标是合作计划，未建立 22 个独立运行/审查事实

- primary_1: https://www.tencent.com/zh-cn/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/
  - supports: 正式版发行声明
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_2: https://github.com/Tencent-Hunyuan/Hy4-preview/blob/main/README.md
  - supports: 预览开放仓库
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_3: https://www.news.cn/tech/20261107/21e47a63f43740e5a4f91f2400435c32/c.html
  - supports: 跨国机构共建
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM

## 3｜分层裁决
- external_fact: publisher publication and pinned source existence only
- external_claim: benchmark, runtime capability and adoption assertions attributed to originator
- analysis: cross-system interpretation limited to evidence layer
- independent_support: NONE_PROVEN_BY_SHARED_SOURCE_PAGES
- H45: OPEN / NOT_REFUTED

## 4｜反证条件与后续
确认独立 artifact、实际采用分母、发布后的可验证联盟标准

## 5｜时间与执行边界
publication_date != observed_at != state_transition_date；门户和仓库当前显示不说明当日状态刚转换；external project, TCK, checker, CI, model benchmark NOT_EXECUTED
