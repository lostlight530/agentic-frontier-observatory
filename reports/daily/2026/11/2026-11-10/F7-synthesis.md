# F7｜跨系统综合与判断校准 / Native 2026-11-10

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
本次新的有界来源变化能否改变 F7 的架构、成熟度或验证等级判断

## 2｜Primary observations / 原始观察
Poppy 草案添加控制交接、Session header 和审批主体语义；Agent Substrate Runtime、AutoDNA 物理实验执行与 Poppy 协议规范是彼此独立层次

## 3｜Evidence and judgment / 证据与结论
SECURITY != EXECUTION != DURABLE EFFECTS != RECOVERY；PERSISTENT_TASK_STORE != DURABLE_EFFECT_RECOVERY，G-W60/61/64/73 继续 OPEN

同一发行方多份 docs、code、tests、release 或 walkthrough 不等于独立来源；存在源码 != 已执行检查；草案要求 != 跨环境运行保证

## 4｜Falsifier and next check / 下一轮反证
取得 independent TCK、revocation、crash/resume-effect ledger 与 external-effect accepted recovery trace

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
