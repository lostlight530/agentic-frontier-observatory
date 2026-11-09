# F2｜模型、算法与科学 Agent / Native 2026-11-09

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
本日新模型与研究是否提供了可定位工件、可复核评价方法与独立复现路径

## 2｜Primary observations

### Arete-27B｜Nous Research
- publication_date: 2026-11-06
- 27B model based on Qwen3.8-27B
- publisher reports 28,886 training examples, 52.8M tokens and 1,202 SFT steps
- no RL, no preference optimization and no architecture change claimed
- weights, training data and evaluation artifacts are linked by the publisher
- evaluation described as 803 prompts across seven categories, five runs, Grok 4.7 judge
- blog rounds one reported propaganda rate to 1%, model card reports 0.9%; retain both source-specific values
- factuality and propaganda scores are issuer-defined rubric outputs, not universal truth measurements

### BioBasicsBench｜OpenAI × Ligo
- publication_date: 2026-11-06
- 100 wet-lab data interpretation tasks across five areas
- 37 model/reasoning-effort configurations, 18,500 result records, five attempts per task/configuration
- whole-task bootstrap confidence intervals are reported
- OpenAI reports mean-reward results, not a single universal accuracy score
- the page does not establish a publicly downloadable task pack and independent runner in this observation

- source_1: https://nousresearch.com/arete
  - support: training method, reported dataset size and evaluation
  - source_class: MODEL_ISSUER_RESEARCH_RELEASE
- source_2: https://huggingface.co/NousResearch/Arete-27B
  - support: model card and weight/data pointers
  - source_class: FIRST_PARTY_MODEL_CARD
- source_3: https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science
  - support: BioBasicsBench task design and publisher-reported evaluation
  - source_class: FIRST_PARTY_RESEARCH_BENCHMARK
  - publication_date: 2026-11-06

## 3｜Judgment / 有界结论
- material_result: TWO_NEW_RESEARCH_ARTIFACTS
- Arete: WEIGHTS_AND_DATA_LINKED / ISSUER_EVALUATION_ONLY
- BioBasicsBench: TASK_BENCHMARK_ANNOUNCED / EXTERNAL_REPRODUCTION_NOT_OBSERVED
- independent_replication: NOT_OBSERVED

## 4｜Falsifier and next check / 反证与后续
需要可下载的完整任务集、固定推理配置、独立评分器、第三方复现实验和对模型版本绑定的评测报告

## 5｜Evidence limits / 失败模式
模型权重可访问不等于评测可复现；发行方评测分数不等于独立能力；mean reward 不等于 accuracy；价值分类指标依赖定义与裁判模型