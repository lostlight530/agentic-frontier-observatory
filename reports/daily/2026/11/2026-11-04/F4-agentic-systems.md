# F4｜Agent、Runtime、Harness 与协议｜2026-11-04

- logical_date: 2026-11-04 Asia/Shanghai
- observation_cutoff: 2026-11-04 12:51:11 Asia/Shanghai
- repository_base_main: 549dfd9d60d403acef69f26e16913ffa6506d7b5
- record_class: NATIVE_DAILY_WORKSTREAM
- result: VERIFIED_DRAFT_SOURCE_REVISION / PARTIAL_BOUNDED
- evidence: FIRST_PARTY_GIT_FACT / PUBLISHER_CLAIM / OBSERVATORY_ANALYSIS

## 可验证事实
Poppy main 相对昨日锚点新增 3 个提交、20 个 changed files，包括 UCP 扩展、OAuth 授权范围处理和版本演示条目

## 边界和反证条件
新 source revision 仅支持 repository provenance，UCP 扩展文档不自动证明交易执行、authority delegation、runtime effects 或 recovery acceptance

## 时间、执行和独立性
- Git committer 日期不是发布、实施或部署日期
- 相关工作流、真实 Runtime、跨提供者 TCK/conformance 未执行，其他范围 NOT_ASSESSED

## 一手来源
- https://github.com/personal-agent-protocol/personal-agent-protocol/compare/cf1434d7d2ac38484842b1f938cc4b066ed49400...7205250c6fb7d4a181707898fa418911ccbcb163
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/7205250c6fb7d4a181707898fa418911ccbcb163/content/versions/versions.json
