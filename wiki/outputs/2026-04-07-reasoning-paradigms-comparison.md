---
title: 2026-04-07 Reasoning Paradigms Comparison
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../outputs/2026-04-07-reasoning-cluster-map.md
  - ../sources/react.md
  - ../sources/deepseek-r1.md
  - ../sources/titans-learning-to-memorize-at-test-time.md
  - ../sources/graph-of-thoughts.md
tags:
  - output
  - reasoning
  - comparison
confidence: medium
---

# 2026-04-07 Reasoning Paradigms Comparison

## Comparison Table

| Paradigm | Main lever | Representative sources | Persistence layer | Strength | Main tradeoff |
| --- | --- | --- | --- | --- | --- |
| Prompting | Better instructions and demonstrations | [Chain of Thought Prompting](../sources/chain-of-thought-prompting.md), [Prompt Engineering](../concepts/prompt-engineering.md) | None beyond prompt templates | Fast iteration and low operational cost | Fragile to prompt phrasing and context shifts |
| Search | Deliberate branching, evaluation, or tree exploration at inference time | [Graph of Thoughts](../sources/graph-of-thoughts.md), [Scaling of Search and Learning](../sources/scaling-of-search-and-learning.md), [DeepSearch](../sources/deepsearch-overcome-the-bottleneck-of-reinforcement-learning-with-verifiable-rewards-via-monte-carlo-tree-search.md) | Search traces, policies, or verifiers | Better performance on difficult compositional tasks | Higher latency and more system complexity |
| Post-training | Improve the model itself after pretraining | [DeepSeek_R1](../sources/deepseek-r1.md), [A Survey on Post-Training of Large Language Models](../sources/a-survey-on-post-training-of-large-language-models.md) | Model weights and training data | More durable capability gains | Higher compute cost and risk of narrow optimization |
| Memory | Improve access to relevant state at test time | [Titans Learning to Memorize at Test Time](../sources/titans-learning-to-memorize-at-test-time.md), [Multi-Agent Memory](../sources/multi-agent-memory-from-a-computer-architecture-perspective-visions-and-challenges-ahead.md) | Memory state, retrieved traces, or external stores | Helps long-horizon coherence and reuse | Harder to manage consistency and salience |

## Current Synthesis

- Prompting is the lightest-weight lever, but it is also the least durable because the capability mostly lives outside the model.
- Search improves reasoning by spending more computation at inference time and is especially attractive when outcomes can be checked or verified.
- Post-training is the strongest route to durable behavioral change, but it is the most expensive and easiest to overfit.
- Memory is less about “thinking harder” than about having the right state available when reasoning unfolds over time.

## Why This Matters For LLM Wiki

The LLM Wiki pattern mostly lives in the memory-and-structure quadrant. Instead of repeatedly rediscovering knowledge through prompts or retrieval alone, it compiles durable state into a persistent wiki. That means it is often complementary to prompting, search, and post-training rather than a replacement for them.

## Related Concepts

- [Prompt Engineering](../concepts/prompt-engineering.md)
- [Test-Time Reasoning](../concepts/test-time-reasoning.md)
- [LLM Post-Training](../concepts/llm-post-training.md)
- [Agent Memory](../concepts/agent-memory.md)
