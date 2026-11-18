# 2026-11-18 追溯重建｜2026-11-16 Global F1–F7 可恢复研究证据

- record_type: LATER_EVIDENCE_RECONSTRUCTION / NOT_ORIGINAL_NATIVE_DAILY
- target_event_date: 2026-11-16 Asia/Shanghai
- reconstruction_observed_at: 2026-11-18T17:40:21+08:00
- original_native_scheduler: OPERATOR_REPORTED_RUN / RUN_ID_AND_RESULT_NOT_RECOVERED
- original_native_daily: NOT_RETAINED / ORIGINAL_EXECUTION_CUTOFF_UNKNOWN
- reconstructed_native_coverage_credit: 0
- source_pinned_commit: 656185321142da654fc255da5a9be6ef87c9de89
- github_commit_time: 2026-11-16T10:25:05Z / 2026-11-16 18:25:05 Asia/Shanghai
- status: SOURCE_REVISION_VERIFIED / ISSUER_LIVE_VERSION_CLAIMS_ONLY / PARTIAL

## 0｜核心判断
11 月 16 日晚间，Poppy 发行方 Git #200 修改了 Demo 列表中的三个协议版本标注：Cliffside Retail 0.4→1.0，Poppy Demo Agent 0.3→0.4，Print with Poppy 0.3→0.4。精确 diff 为一个 `content/shared/demos.mdx` 文件、3 additions / 3 deletions。提交信息称匹配当时 live 的 Demo 版本，这只是**发行方自述和文档修订**，不是本仓对三个 live 服务的网络抓包、SDK/TCK 实验或成功验收

**时序边界：** #200 的 Git 提交发生在 11 月 16 日 18:25 北京时间；原定时任务在 11 月 16 日的真实开始/结束时刻不可回读，不能声称原任务曾看到 #200；本条由 11 月 18 日再次源检索首次补充记录，也不能把后续 #201 的 1.1 Draft 写成 11 月 16 日观察

## 1｜原生日运行与交付分离
- 维护者报告 11 月 16 日原生定时任务运行过，原始 Run ID、运行结果与内容快照无法从现有接口回读，故 RUN_REPORTED ≠ RUN_SUCCESS / F1–F7_CONTENT_RECOVERED
- 11 月 16 日独立 A1 #297、A2 #298 当日合并及 Pages Actions 成功可以由 GitHub 确认，但它们不是 Native F1–F7
- 2026-11-16 的 canonical integrated + seven facets + index 共 9 个原生路径在当前 main 中仍不存在，**该重建在 history 目录**，绝不伪装为原生 Daily 或计入 11-16 Native 合并

## 2｜资料截面与来源层级
- S1：11 月 16 日 #200 的固定 Git commit/diff（G2，一条发行方文档修订来源），可证明文件差异、Git 时间及其作者声明
- S2：11 月 15 日保存的 Poppy 1.0 publisher 版本清单，1.0 已被发行方标记 published=2026-11-14（同一 issuer，非新的独立证人）
- S3：MCP Registry v1.8.9 发行于 11-10，属于 discovery/registry 优化，不是 #200 的 Poppy Demo 验证
- S4：MCP Servers v2.4.0 发行于 11-11，项目声明包含三个 server 的安全修复，不是 Poppy live Demo TCK
- S5：11 月 17 日稍后 #201 开始 1.1 Draft，仅作为**后续时序对照**，不当作 11-16 已知信息

## 3｜F1–F7 分领域审阅
### F1｜协议历史与版本
11-14 1.0 规范发行方发布声明与 11-16 #200 Demo 标注变化分属 SPEC_VERSION 和 DEMO_DECLARED_PROTOCOL_VERSION；11-17 #201 草案属于更晚 Git 时间。支持发行方文档版本校准，不支持推断上线精准时刻
### F2｜模型与算法
#200 仅更改 Demo 标签，不含模型任务、测试分母、推理结果、算法改动或 benchmark，因此模型能力变化 NOT_EVIDENCED
### F3｜基础设施与实现
同一 Poppy 文档中的三条 Demo 卡片不是三个独立部署检测报告；Registry release 与 Servers release 也不自动证明跨端发现、签名授权、断网恢复或服务可用率
### F4｜Agent Runtime、身份与权限
protocol_version 展示值不是认证的 Session JWT、OAuth account grant、delegated authority、approval/revocation trace 或外部 effect；跨 Demo 的兼容执行仍 NOT_TESTED
### F5｜评测、安全与治理
该 diff 未包含执行日志、TCK 结果、对抗用例、权限撤销和中断恢复实验；发布者说 live 与独立运行证明需分级
### F6｜采用、生态与社会影响
三条卡片是发行方汇编的不同 Demo 名称，证据数量仍为一个 issuer commit；既不能推算真实独立采纳企业数，也不能据此认定三套产品上线或实际使用规模
### F7｜综合判断与假设交接
新证据只将某些 Demo 的**发行方版本描述**具体化，不强化 W47-1 多提供者 conformance、W47-2 NIST IAM、W47-3 durable effect recovery、W47-4 科学 Agent 端到端实验，均 OPEN

## 4｜反证条件与尚缺证据
- #200 具体标注可由其固定 Git diff 复现；若后续发行方修正版本或给出更准确的 source provenance，应记录 successor，不抹去此 commit
- 若要提升 live 实现证据，需**同一时间点**可验证的 Demo 端点响应、部署 revision、会话授权、跨提供者交互、失败恢复以及审计回执，不能由网页版本徽标代替
- 11 月 16 日原生执行的 Run ID、结果、截止时间、原始内容与未交付原因仍未知，需要真正历史回执才能恢复，不通过复写历史文件假造

## 5｜W47、月报及时间边界
- W47 2026-11-16..22 中，11-17 / 11-18 是 2/7 已合并 Native Daily；11-16 为 RUN_REPORTED / NATIVE_DELIVERY_GAP，后续 11-19..22 NOT_DUE
- 这份 history 重建不增加 Native 日期计数，不修改旧日时点正文，也不构成对原任务重跑
- 本轮 late-observed #200 是**一条新增 G2 发行方来源修订事件**，ledger/registry 记录的是 11-18 首次补充观察，事件 Git 时间在 11-16，不再增加独立来源条数
- W47-1..4 OPEN，November OPEN，source fact VERIFIED；external-runtime/TCK/independent conformance NOT_EXECUTED

## 6｜固定来源
- [S1 Poppy #200 / exact issuer Git diff](https://github.com/personal-agent-protocol/personal-agent-protocol/commit/656185321142da654fc255da5a9be6ef87c9de89)
- [S2 pinned publisher version manifest from 11-15](https://github.com/personal-agent-protocol/personal-agent-protocol/blob/85b41ff27e8f6a098d06b71f14d83b1513c728a5/content/versions/versions.json)
- [S3 MCP Registry v1.8.9](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9)
- [S4 MCP Servers v2.4.0](https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0)
- [S5 later #201 Draft source, chronology only](https://github.com/personal-agent-protocol/personal-agent-protocol/commit/a1deeab03c519b0597df4e060fe20bc16d41c31e)
- [11-15 original Native](../../../reports/daily/2026/11/2026-11-15.md)
- [11-17 original Native](../../../reports/daily/2026/11/2026-11-17.md)
- [Existing 11-18 run-vs-delivery reconciliation](../2026-11-18-global-nov16-run-delivery-reconciliation.md)

