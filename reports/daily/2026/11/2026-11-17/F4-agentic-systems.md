# 2026-11-17 F4｜身份、授权、调用和恢复

- logical_date: 2026-11-17 Asia/Shanghai
- observation_cutoff: 2026-11-17 04:57:35 Asia/Shanghai
- actual_execution_time: 2026-11-17 04:57:35 Asia/Shanghai (bounded research reads, GitHub delivery later)
- preflight_main: `e54710d74bc938c90f6cbcbca8aa210206d7353c`
- result: PARTIAL / NO MATERIAL CHANGE / NO RUNTIME PROOF

## Research question / 可证伪问题
Session 身份、账户授权、交互渠道和持久效果的合约是否被混成一层

## Evidence / 有界一手来源与证据角色
- P1 [Poppy 1.0 publisher manifest](https://github.com/personal-agent-protocol/personal-agent-protocol/blob/8c02b4282eda53468a7c09412558bc8b060d95f6/content/versions/versions.json) — issuer version declaration, published=2026-11-14
- P1-SPEC [Poppy versioned specification](https://github.com/personal-agent-protocol/personal-agent-protocol/blob/8c02b4282eda53468a7c09412558bc8b060d95f6/content/versions/1.0/spec.mdx) — same Poppy issuer/version lineage
- P2 [MCP Registry v1.8.9 release](https://github.com/modelcontextprotocol/registry/releases/tag/v1.8.9) — issuer release 2026-11-10T11:08:07Z
- P3 [MCP Servers v2.4.0 release](https://github.com/modelcontextprotocol/servers/releases/tag/v2.4.0) — issuer release 2026-11-11T07:07:16Z
- Applicable source(s): P1 P1-SPEC
- existing Daily research cutoff: 2026-11-17 04:57:35 Asia/Shanghai；同一日期的来源细读与工作流内容补强记录于 2026-11-17 08:38:14 Asia/Shanghai，不将旧日发布重新解释为今日事件或第二日 Daily

## Domain-specific observation / 独立域判断
P1-SPEC 明确分离 Discovery、operator recognition、Session JWT、OAuth account access 和 API/browser/company-agent interaction channels，并写明 Session 与 account access 独立；即使规范具有 MUST 语言，也只能证明发行方定义了要求，不能证明授权撤销、approval replay 和外部效果回滚

## Counterevidence and falsifier / 可推翻条件
需要两个及以上独立提供者在指定 1.0 版本下执行相同用户授权、撤销/超时、错误和补偿场景，保留请求/响应、作用对象、effect ledger 与 recovery receipt；身份连续性不能自动继承授权

## Hypothesis handoff / 交接
W47-1 W47-3 OPEN，issuer text/source publication != execution trace != independent conformance

## Execution / 执行
来源与仓库元数据只读 EXECUTED，外部 TCK、runtime、scientific reproduction NOT_EXECUTED
