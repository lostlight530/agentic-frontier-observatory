# F5｜评测、安全、治理 / 2026-11-08

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
NIST 十项初始设计原则是 2026-10-27 出版的机构作者指导，并非正式 NIST SP；NCCoE 项目仍 Soliciting Comments；厂商内测得分与草案测试源文件均不是独立合规 PASS

- primary_1: https://www.nist.gov/blogs/cybersecurity-insights/design-tenets-agent-identity-management-systems
  - supports: NIST identity tenets
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_2: https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization
  - supports: 项目当前状态
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM
- primary_3: https://www.tencent.com/zh-cn/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/
  - supports: 厂商自评边界
  - observed_at: 2026-11-08 15:27:56 Asia/Shanghai
  - class: SOURCE_METADATA_OR_ATTRIBUTED_CLAIM

## 3｜分层裁决
- external_fact: publisher publication and pinned source existence only
- external_claim: benchmark, runtime capability and adoption assertions attributed to originator
- analysis: cross-system interpretation limited to evidence layer
- independent_support: NONE_PROVEN_BY_SHARED_SOURCE_PAGES
- H45: OPEN / NOT_REFUTED

## 4｜反证条件与后续
持续追踪 formal normative text、示范工程 run、测试覆盖与误拒判据

## 5｜时间与执行边界
publication_date != observed_at != state_transition_date；门户和仓库当前显示不说明当日状态刚转换；external project, TCK, checker, CI, model benchmark NOT_EXECUTED
