---
title: Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents
type: source
status: ingested
created: 2026-04-06
updated: 2026-04-06
sources:
  - raw/sources/agents/Darwin Godel Machine Open-Ended Evolution of Self-Improving Agents.pdf
  - raw/sources/agents/Darwin Godel Machine Open-Ended Evolution of Self-Improving Agents.txt
tags:
  - source
  - agents
  - self-improvement
  - open-endedness
confidence: medium
---

# Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents

## Summary

This paper introduces the Darwin Godel Machine (DGM), a self-improving coding-agent system that iteratively rewrites its own code and evaluates candidate changes empirically rather than trying to prove them formally in advance. The central move is to replace the classical Godel-machine requirement for proofs of beneficial self-modification with an open-ended evolutionary process over an archive of agents.

## Key Points

- DGM is framed as a practical alternative to the theoretical Godel machine, which is elegant but not workable in practice because proving that self-modifications are net beneficial is usually intractable.
- The system maintains an archive of coding agents and expands it by sampling an existing agent and using a foundation model to generate a new, potentially interesting variant.
- Open-ended exploration is used to search many different improvement paths in parallel rather than committing to a single local optimization path.
- The paper reports substantial gains on coding benchmarks, including SWE-bench improving from 20.0% to 50.0% and Polyglot improving from 14.2% to 30.7%.
- The paper positions empirical validation, sandboxing, and human oversight as practical safety measures for self-improving agent research.

## Relevance

This source is central to the `agents` cluster because it ties together several themes likely to recur across the collection: self-improvement, open-ended search, coding-agent evaluation, harness design, and safety controls around autonomous system modification.

## Related Entities

- [Darwin Godel Machine](../entities/darwin-godel-machine.md)

## Related Concepts

- [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md)
- [Self-Improving Agents](../concepts/self-improving-agents.md)

## Notes

- The paper appears on arXiv as `2505.22954`, originally submitted on May 29, 2025 and revised to version 3 on March 12, 2026.
- This page has now been re-ingested from the extracted full text, which makes the current summary more trustworthy than the earlier metadata-only pass.
- This paper looks like a strong anchor document for a broader cluster on evolutionary or recursively improving agent systems.

## Open Questions

- How much of the reported gain comes from open-ended archive exploration versus better harnessing and evaluation discipline?
- What are the failure modes of empirical self-modification when benchmark optimization starts to overfit to a narrow evaluation suite?
- Which neighboring papers in the `agents` folder are best treated as direct baselines or conceptual predecessors?

## Provenance

- Raw file: `raw/sources/agents/Darwin Godel Machine Open-Ended Evolution of Self-Improving Agents.pdf`
- Extracted text file: `raw/sources/agents/Darwin Godel Machine Open-Ended Evolution of Self-Improving Agents.txt`
- arXiv page: `https://arxiv.org/abs/2505.22954`
- DOI: `https://doi.org/10.48550/arXiv.2505.22954`
