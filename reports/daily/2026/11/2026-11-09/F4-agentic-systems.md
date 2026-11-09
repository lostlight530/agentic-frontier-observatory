# F4｜Agent Runtime、Harness 与协议 / Native 2026-11-09

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
Poppy 0.4 与 Agent Substrate 是否已经形成可移植的 Session、task、approval、identity、execution 和 recovery 契约

## 2｜Primary observations

### Poppy 0.4 Draft
本轮将发行方当前 main 与 2026-11-08 15:27:56 Asia/Shanghai 的观察基线 a2ca25ab43eccc045bc7f2b86d3b579088da9af1 比较，结果 ahead 3、behind 0、changed_files 46

三个 commits 的 Shanghai 时间为 05:42:01、05:54:02、05:56:35，分别涉及 website operation approval endpoint、0.4 walkthrough wire format、Session-scoped tasks endpoint

当前 0.4 Draft 变化包括：
- 新 tasks endpoint 由每个 Session 的请求获取 excluded tasks、skill index 与 feedback endpoint
- 旧 excluded-tasks schema 被移除，新增 tasks schema 与 tasks validator check
- Operations v2 增加 website-specific approval endpoint，批准 exact terms 并写入 at-most-once 规范语义
- 0.4 仍为 Draft，0.3 仍为 publisher-declared published 2026-11-04

### Agent Substrate 1.0
提供 sandboxed actor/workers、snapshot、suspend/resume、SPIFFE identity 与 egress gateway，属于 runtime implementation surface，不证明 Poppy 0.4 已集成或跨 runtime 可移植

- source_1: https://github.com/personal-agent-protocol/personal-agent-protocol/compare/a2ca25ab43eccc045bc7f2b86d3b579088da9af1...b2569c552d100922e7d60829d33a0fc50d88e822
  - support: exact three-commit source delta and 46 changed files
  - source_class: CANONICAL_GIT_COMPARISON
- source_2: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/b2569c552d100922e7d60829d33a0fc50d88e822/content/versions/versions.json
  - support: 0.3 published, 0.4 Draft
  - source_class: CANONICAL_VERSION_MANIFEST
- source_3: https://github.com/agent-substrate/substrate/releases/tag/v1.0.0
  - support: runtime release artifact
  - source_class: CANONICAL_PROJECT_RELEASE

## 3｜Judgment / 有界结论
- material_result: PUBLISHED_0_3 / REVISED_DRAFT_0_4 / AGENT_SUBSTRATE_1_0_RELEASED
- session_tasks_endpoint: DRAFT_SPEC
- operations_at_most_once: DRAFT_NORMATIVE_CLAIM
- portable_authority: NOT_VERIFIED
- durable_external_effect_recovery: NOT_VERIFIED
- independent_conformance: NOT_EXECUTED

## 4｜Falsifier and next check / 反证与后续
需要 Poppy 0.4 stable publication、两家以上独立实现、exact approval replay tests、task endpoint scope tests、revocation propagation、external-effect ledger 与 resume identity checks

## 5｜Evidence limits / 失败模式
Session-scoped task discovery 不等于 persistent task store；at-most-once 文本不等于 exactly-once external effect；Actor snapshot 不等于外部副作用恢复；draft validator source 存在不等于 checker passed