# F6｜开源生态、产业与社会影响 / Native 2026-11-09

- logical_date: 2026-11-09 Asia/Shanghai
- actual_execution_at: 2026-11-09 18:16:22 Asia/Shanghai
- actual_execution_utc: 2026-11-09T10:16:22Z
- observation_cutoff: 2026-11-09 18:33:23 Asia/Shanghai
- observation_cutoff_utc: 2026-11-09T10:33:23.161Z
- repository_preflight_at: 2026-11-09 18:30:42 Asia/Shanghai
- base_main_sha: 85dad78441add0030b1b9cec658075346ce5ed01
- observation_window: 2026-11-09 单次有界一手来源与仓库状态核验，不代表对外部全日事件的完整扫描
- provenance: publication_date、commit_date、release_date、observed_at 与 state_transition_date 分开记录
- execution_boundary: 外部项目运行、部署、checker、CI、TCK、conformance、runner 均 NOT_EXECUTED

## 1｜可证伪问题
本日是否出现具有实际开放工件或可定位产业状态的 Agent 生态变化，且能区分代码、权重、数据、产品与独立采用

## 2｜Primary observations
- Agent Substrate v1.0.0 提供可定位 GitHub release，CNCF 当前项目页列为 Sandbox，Google Cloud 声明 GKE 托管服务 GA；源代码与发布工件可检查，但本仓没有运行
- Arete-27B 发行方链接模型权重、训练数据与评测材料，模型许可、第三方复现和长期维护状态仍需分别核验
- Poppy 0.4 的 tasks schema、validator source 与 Operations v2 文档已在 GitHub main，但当前版本仍为 Draft
- AutoDNA 的 Nature 论文关联 GitHub 代码和 Zenodo 数据入口，属于 China C3/C4 同日研究；不能把代码存在当作可移植 Agent protocol 或独立部署

- source_1: https://github.com/agent-substrate/substrate
  - support: open project source and release artifacts
  - source_class: CANONICAL_PROJECT_REPOSITORY
- source_2: https://huggingface.co/NousResearch/Arete-27B
  - support: model card and weights/data links
  - source_class: FIRST_PARTY_MODEL_CARD
- source_3: https://github.com/personal-agent-protocol/personal-agent-protocol
  - support: Poppy 0.4 Draft source and validator code
  - source_class: CANONICAL_PROJECT_REPOSITORY
- source_4: https://github.com/IPADS-X/AutoDNA
  - support: AutoDNA source repository
  - source_class: RESEARCH_CODE_REPOSITORY

## 3｜Judgment / 有界结论
- material_result: OPEN_ARTIFACTS_AND_RELEASES_IDENTIFIED
- independent_adoption: NOT_OBSERVED
- licenses: NOT_ALL_VERIFIED
- code_execution: NOT_EXECUTED

## 4｜Falsifier and next check / 反证与后续
检查许可证、维护状态、公开 issue/PR、独立 fork、用户部署、实际运行日志和第三方 conformance

## 5｜Evidence limits / 失败模式
GitHub 仓库存在不等于活跃维护；权重可下载不等于许可无条件开放；CNCF Sandbox 不等于成熟度完成；发布公告不等于生产采用