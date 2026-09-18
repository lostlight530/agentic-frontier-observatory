# F3 — Infrastructure

**Object:** Amazon Bedrock AgentCore Runtime.

**Source / date:** AWS first-party announcement dated 2026-09-18; first represented in this repository by the later 2026-09-19 same-day reconciliation.

**Maturity:** documented AWS product/runtime update; cross-provider equivalence and independent performance validation are unverified.

**Evidence class:** FACT for the existence/content of the AWS announcement; EXTERNAL CLAIM for AWS latency, memory, cost and production-use assertions.

**Current finding:** AWS describes a new Runtime version with revised memory allocation/reclamation and snapshot-based startup behavior. This is material infrastructure evidence that was absent from the original 05:01 Daily.

**Measurement basis:** AWS publishes its own test setup and results; those measurements remain provider-authored and were not independently reproduced by this observatory.

**Scale / geography:** AWS product surface; no universal cloud/runtime population inference.

**Uncertainty:** real-world workload performance, cross-region behavior outside the documented test, and cross-provider parity remain unverified.

**Handoff to F7:** product-local runtime maturity increased in explicitness, but Runtime state does not establish committed-effect accounting, rollback obligations or portable recovery proof.

**Boundary:** Runtime improvement != universal reliability != recovery correctness.

Primary source: https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts/
