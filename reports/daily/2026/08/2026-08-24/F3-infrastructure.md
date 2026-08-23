# F3｜Compute, Data, and Infrastructure

W35 opens with three different infrastructure clocks:

```text
artifact provenance — build / digest / attestation
workload identity — short-lived credential / trust bundle
runtime policy — telemetry / environment / session state
```

GitHub admission policy, SPIFFE workload identities, and NIST continuous access evaluation cover different parts of this lifecycle

**Open problem:** correlate them without collapsing build provenance, identity, and authority into one overloaded object
