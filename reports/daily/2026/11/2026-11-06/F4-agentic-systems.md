# F4｜Agent、Runtime、Harness 与协议｜2026-11-06

- logical_date: 2026-11-06 Asia/Shanghai
- observation_cutoff: 2026-11-06 07:37:18 Asia/Shanghai
- repository_base_main: 6dcd1112673dd29fef1760a6034829255a0837ed
- record_class: NATIVE_DAILY_WORKSTREAM
- result: VERIFIED_0_4_DRAFT_SOURCE_REVISION / PARTIAL_BOUNDED
- evidence: FIRST_PARTY_GIT_FACT / PUBLISHER_CLAIM / OBSERVATORY_ANALYSIS / UNCERTAIN

## 可核实观察与领域研究
0.4 Draft §4.5 明确每把 DPoP key 只用于一个 User ID 的 MUST 要求，Guides 描述 refresh token 关联 client_id、可旋转 DPoP keys 的建议

## 证据限制与反证要求
草案 MUST、非规范性 Guides、发行方实现及跨提供者 Runtime 实证属于不同证据层，identity/credential/authority/invocation/execution/recovery 分开

## 时间、执行与独立性边界
- event_date: 2026-11-05T13:24:29Z upstream Git commit；observed_at: 2026-11-06 07:37:18 Asia/Shanghai
- website_first_deployment: UNVERIFIED；other_sectors: NOT_ASSESSED
- issuer_repeat: NOT_INDEPENDENT_SUPPORT
- checker/CI/Runtime/TCK/conformance: NOT_EXECUTED

## 一手来源
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/77e01796bfffa0176ec5b2c17822570ee0386303/content/versions/0.4/spec.mdx
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/77e01796bfffa0176ec5b2c17822570ee0386303/content/versions/0.4/guides.mdx
- https://github.com/personal-agent-protocol/personal-agent-protocol/blob/77e01796bfffa0176ec5b2c17822570ee0386303/content/shared/changelog.mdx
