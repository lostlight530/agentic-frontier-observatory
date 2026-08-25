# F2｜Models, Algorithms, and Multimodality

A model-level interruption is not the same as terminating an Agent runtime

Generation may stop while tool processes, background workers, remote sessions or already-triggered external actions remain active

Conversely, a runtime can stop while durable outputs remain preserved

**Rule:** model stop ≠ tool stop ≠ session stop ≠ system rollback
