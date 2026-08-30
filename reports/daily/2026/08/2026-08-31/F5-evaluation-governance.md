# F5 — Evaluation / Safety / Governance / Standards

## 2026-08-31 finding

The A2A Java SDK release exposes a concrete information-disclosure risk at a relationship boundary: referenced-task existence could previously be probed when read authorization was not enforced.

Durable rule:

`reference relation ≠ permission to resolve / read the referenced object`

NIST's Agent Identity and Authorization project remains in `Reviewing Comments`, so it is active governance work rather than a finalized universal standard.
