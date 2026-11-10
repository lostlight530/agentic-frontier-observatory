# F3｜算力、数据与运行基础设施 / Native 2026-11-10

- logical_date: 2026-11-10 Asia/Shanghai
- actual_execution_at: 2026-11-10 08:44:36 Asia/Shanghai
- actual_execution_utc: 2026-11-10T00:44:36Z
- observation_cutoff: 2026-11-10 08:56:26 Asia/Shanghai
- observation_cutoff_utc: 2026-11-10T00:56:26.376Z
- base_main_sha: e797fe00744764c528bebd683d2fc1052245f2d6
- observation_window: 单次早间有界 Git/source 观察，非 2026-11-10 全天完整新闻扫描
- date_boundary: event_date、publication_date、release_date、observed_at、state_transition_date、delivery_date 独立，未知日期保持 UNVERIFIED
- execution_boundary: 外部 validator、TCK、CI、runtime、benchmark、conformance 全部 NOT_EXECUTED

## 1｜可证伪问题
本次新的有界来源变化能否改变 F3 的架构、成熟度或验证等级判断

## 2｜Primary observations / 原始观察
Agent Substrate v1.0.0 原始 release 可定位，原有 actor snapshot、sandbox、resume 的发行方描述不代表外部业务操作可逆

## 3｜Evidence and judgment / 证据与结论
RUNTIME_RELEASE_ARTIFACT_EXISTS / PORTABLE_EFFECT_RECOVERY_NOT_VERIFIED

同一发行方多份 docs、code、tests、release 或 walkthrough 不等于独立来源；存在源码 != 已执行检查；草案要求 != 跨环境运行保证

## 4｜Falsifier and next check / 下一轮反证
需运行记录证明恢复后的身份重新授权、外部工具副作用隔离、补偿和接受

## 5｜Exact primary source anchors / 原始材料
- compare: https://github.com/personal-agent-protocol/personal-agent-protocol/compare/b2569c552d100922e7d60829d33a0fc50d88e822...a2f16ec4c38e111289c12d7fbd8fec57b8aba06e
- manifest: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a2f16ec4c38e111289c12d7fbd8fec57b8aba06e/content/versions/versions.json
- operations: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a2f16ec4c38e111289c12d7fbd8fec57b8aba06e/content/versions/0.4/extensions/operations.mdx
- browser: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a2f16ec4c38e111289c12d7fbd8fec57b8aba06e/content/versions/0.4/extensions/browser-control.mdx
- spec: https://github.com/personal-agent-protocol/personal-agent-protocol/blob/a2f16ec4c38e111289c12d7fbd8fec57b8aba06e/content/versions/0.4/spec.mdx
- substrate: https://github.com/agent-substrate/substrate/releases/tag/v1.0.0
- nature: https://www.nature.com/articles/s41586-026-11228-6
- nist: https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization

## 6｜Execution boundary / 执行边界
本轮核实的是来源文件和 Git 差异，未运行外部 validator、TCK、runtime、第三方测试或 benchmark，均 NOT_EXECUTED
