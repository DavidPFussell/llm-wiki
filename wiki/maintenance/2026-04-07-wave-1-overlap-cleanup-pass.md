---
title: 2026-04-07 Wave 1 Overlap Cleanup Pass
type: maintenance
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../outputs/2026-04-07-llm-cluster-map.md
  - ../outputs/2026-04-07-language-models-cluster-map.md
  - ../outputs/2026-04-07-chat-gpt-cluster-map.md
  - ../outputs/2026-04-07-reasoning-cluster-map.md
tags:
  - maintenance
  - lint
  - cleanup
confidence: medium
---

# 2026-04-07 Wave 1 Overlap Cleanup Pass

## Main Findings

- **Duplicate source page**: [Darwin Godel Machine](../sources/darwin-godel-machine.md) duplicates the richer canonical page [Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents](../sources/darwin-godel-machine-open-ended-evolution-of-self-improving-agents.md). The duplicate is now marked as superseded and points back to the canonical page.
- **Prompting vs reasoning overlap**: `LLM`, `Language Models`, `Chat-GPT`, and `Reasoning` all contain papers that could plausibly land under prompting, reasoning, or post-training. The current concept structure should prefer [Prompt Engineering](../concepts/prompt-engineering.md), [Test-Time Reasoning](../concepts/test-time-reasoning.md), and [LLM Post-Training](../concepts/llm-post-training.md) as the main canonical buckets.
- **Chat-heavy vs model-heavy overlap**: `Chat-GPT` and `LLM` both contain broad capability and instruction-tuning papers. The distinction should remain “application-facing and scaffold-heavy” versus “model-family and method-heavy,” not be treated as a hard taxonomic boundary.
- **RAG boundary clarified**: `RAG` now has a distinct enough identity that it should stay separate from generic reasoning pages, even when retrieval is part of the reasoning loop.

## Recommended Rules

- Prefer filing new reasoning papers under [Test-Time Reasoning](../concepts/test-time-reasoning.md) unless they are primarily about prompt phrasing or generic prompting strategy.
- Prefer [LLM Post-Training](../concepts/llm-post-training.md) when the main mechanism is SFT, RL, preference optimization, or other adaptation after pretraining.
- Prefer [Retrieval-Augmented Generation](../concepts/retrieval-augmented-generation.md) when retrieval is the dominant design lever, even if the paper also discusses reasoning.
- Use redirect-style superseded pages instead of silent deletion when the same source appears in multiple raw folders.

## Next Cleanup Targets

- Backfill `sources` frontmatter on the new concepts added in this pass.
- Consider creating a dedicated comparison page for reasoning paradigms: prompting vs search vs post-training vs memory.
- Review whether `Prompt Engineering` has become too broad and needs a more explicit boundary note.
