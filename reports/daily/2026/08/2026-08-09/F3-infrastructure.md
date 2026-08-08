# F3｜Infrastructure / 基础设施

## Signals

- MCP 2026-07-28 adopts a stateless core, header routing, cacheable lists, formal extensions, and a deprecation policy
- DNS-AID proposes DNS-backed publication, discovery, and verification for agents and MCP servers
- A2A’s stable SDKs span multiple transports, increasing the importance of cross-language conformance

## Analysis

Agent infrastructure is converging with distributed-systems infrastructure

```text
load balancing
routing
caching
service discovery
identity
policy enforcement
observability
version migration
failure recovery
```

The differentiator is that agent requests can carry delegated intent and authority, so infrastructure must preserve not only availability but accountability
