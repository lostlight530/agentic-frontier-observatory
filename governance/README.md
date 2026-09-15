# Governance Map — Agentic Frontier Observatory

This directory contains two distinct repository-local governance surfaces. They are complementary and must not be collapsed.

## Entry points

- `independent-gpt/README.md` — cold-start recovery router for a memoryless independent reviewer. It tells a new reviewer how to find current repository authority and evidence.
- `external-audit/README.md` — active repository-local Independent GPT audit contract and durable weekly / semimonthly audit ledger.

The cold-start router is not a second audit cadence. The external-audit ledger is not the observatory research chain.

## Repository production vs governance

```text
reports/
  Daily -> Weekly -> Monthly
  = observatory research production and research memory

governance/independent-gpt/
  = memoryless recovery / handoff router

governance/external-audit/
  weekly/ + semimonthly/
  = independent governance evidence about repository state

GitHub Actions
  = revision-bound repository runner / deployment / lifecycle evidence when actually observed

Human Maintainer
  = final doctrine and merge authority
```

This repository does not treat GitHub Actions as a general CI system, and a workflow result is not research truth or universal repository correctness.

## Authority

```text
current merged main
> current explicit repository contracts
> current canonical repository artifacts
> verified revision-bound execution / runner evidence
> external audit interpretation
> historical point-in-time audit records
```

A more specific current repository contract wins for its subject.

## History and privacy

Merged Daily, Weekly, Monthly, ledger, history, and audit records remain point-in-time evidence. Later correction uses reconciliation, errata, or successor records; it does not silently rewrite the earlier artifact.

Public governance may expose repository facts, public task identity, audit scope, evidence, result, risk, and rollback. It must not expose private prompts, hidden reasoning, credentials, private memory, or unnecessary private operator topology.

Final doctrine and merge authority remains with the maintainer.
