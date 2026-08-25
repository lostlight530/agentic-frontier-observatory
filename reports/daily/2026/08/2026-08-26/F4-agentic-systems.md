# F4｜Agents, Runtimes, Harnesses, and Protocols

## W35 control chain

```text
trust / risk event
→ relying-resource enforcement
→ runtime stop control
→ stopped session / compute
→ preserved durable state
→ review / cleanup / resume decision
```

Today grounds the runtime-stop layer with two product implementations

What remains missing is the open interoperability layer that maps trust signals into cancellation semantics across parent Agents, subagents, tools and external runtimes

**Durable rule:** a resource can deny access without terminating the Agent, and an Agent can stop without rolling back prior effects
