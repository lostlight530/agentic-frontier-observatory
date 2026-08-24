# F7｜Cross-System Synthesis and Judgment Revision

## W35 sequence so far

```text
24 Aug — trust must stay live
continuous evaluation → enforcement point

25 Aug — revocation reaches the resource
trust event → relying resource → deny / challenge → re-evaluate
```

The main conceptual revision is that revocation propagation is a distributed-systems property

It depends not only on an issuer knowing trust changed, but on each relevant enforcement surface consuming and acting on that change

### New H8

**Relying-resource participation becomes part of revocation infrastructure**

The remaining frontier is wider than resource denial:

`resource rejection → Agent-runtime cancellation / safe degradation → cross-resource propagation → durable incident evidence`
