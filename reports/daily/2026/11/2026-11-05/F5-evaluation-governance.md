# F5｜评测、安全、治理与标准｜2026-11-05

- logical_date: 2026-11-05 Asia/Shanghai
- observation_cutoff: 2026-11-05 12:48:22 Asia/Shanghai
- repository_base_main: c3d1ee284c689187357869f5c6dd2d88dc4fa36e
- record_class: NATIVE_DAILY_WORKSTREAM
- result: PUBLISHER_VERSION_STATUS_CHANGE / PARTIAL_BOUNDED
- evidence: FIRST_PARTY_GIT_FACT / PUBLISHER_CLAIM / OBSERVATORY_ANALYSIS

## 可复核事实与领域检查
NIST NCCoE 项目当前标记 Soliciting Comments，Poppy 0.3 发布记录可证实其版本状态，Git 提交中也出现 validator、schema 和测试源码修订

## 反证与能力边界
源码和规则存在不证明 CI、TCK 或 conformance 执行；没有独立跨公司授权撤销、外部副作用或恢复验收证据

## 时间与执行状态
- publisher publication date 2026-11-04 vs first-party commit 2026-11-05T00:09:43Z vs observed 2026-11-05 12:48:22 Asia/Shanghai
- website deployment first-access transition: UNVERIFIED
- Git source/version existence != Runtime or TCK PASS；related external execution NOT_EXECUTED
- other_global_sectors: PARTIAL / NOT_ASSESSED

## 一手来源
- https://www.nccoe.nist.gov/projects/software-and-si-agent-identity-and-authorization
- https://github.com/personal-agent-protocol/personal-agent-protocol/compare/7205250c6fb7d4a181707898fa418911ccbcb163...2a7009c9aad24542076c08b6c2467f3566dd5eec
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/2a7009c9aad24542076c08b6c2467f3566dd5eec/content/versions/versions.json
