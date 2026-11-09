# F3｜算力、数据与运行基础设施 / Native 2026-11-09

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
新 runtime 是否公开了可定位的隔离、状态快照、恢复与身份基础设施，且证据能区分产品可用性、项目成熟度与独立运行

## 2｜Primary observations
Agent Substrate v1.0.0 于 2026-11-05 发布，CNCF 当前项目页列为 Sandbox；Google Cloud 于 2026-11-05 宣布托管 Agent Substrate 在 GKE GA，并说明项目已捐赠至 CNCF

项目文档描述 actor/workers、Kubernetes runtime、gVisor 或 Cloud Hypervisor 隔离、actor snapshot、suspend/resume、SPIFFE workload identity，以及在 sandbox 外部通过 egress gateway 注入凭据的架构

release notes 包含节点丢失后恢复上传 snapshot、跨多代 durable snapshots 的 revert 工作等具体工件；这些 changelog 说明代码演进方向，不等于本仓执行过测试

- source_1: https://github.com/agent-substrate/substrate/releases/tag/v1.0.0
  - support: v1.0.0 release artifact and release notes
  - source_class: CANONICAL_PROJECT_RELEASE
  - publication_date: 2026-11-05
- source_2: https://www.cncf.io/projects/agent-substrate/
  - support: CNCF current Sandbox maturity listing
  - source_class: FOUNDATION_PROJECT_STATUS
  - observed_at: 2026-11-09 18:33:23 Asia/Shanghai
- source_3: https://cloud.google.com/blog/products/containers-kubernetes/open-infrastructure-for-autonomous-agents-comes-to-cncf
  - support: Google Cloud donation and GKE GA announcement
  - source_class: VENDOR_FIRST_PARTY_ENGINEERING_ANNOUNCEMENT
  - publication_date: 2026-11-05

## 3｜Judgment / 有界结论
- material_result: RUNTIME_RELEASE_AND_PRODUCT_AVAILABILITY_CONFIRMED
- CNCF_maturity: SANDBOX
- GKE_managed_service: GA_PER_GOOGLE
- cross_cloud_conformance: NOT_VERIFIED
- independent_performance_measurement: NOT_EXECUTED

## 4｜Falsifier and next check / 反证与后续
需要在独立 Kubernetes 提供者上运行相同 actor workload，验证 snapshot lineage、node-loss restore、fresh identity、egress authorization、external effect ledger 与失败补偿

## 5｜Evidence limits / 失败模式
CNCF Sandbox 不等于 Incubating 或 Graduated；GKE GA 不等于任意云均已独立验证；厂商性能数字不是独立 benchmark；actor snapshot 不覆盖所有外部 durable effects