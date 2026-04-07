---
title: 2026-04-07 Reasoning Cluster Map
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../sources/deepseek-r1.md
  - ../sources/react.md
  - ../sources/from-tokens-to-thoughts.md
  - ../sources/a-survey-on-post-training-of-large-language-models.md
tags:
  - output
  - llm
  - synthesis
  - reasoning
confidence: medium
---

# 2026-04-07 Reasoning Cluster Map

## Overview

The `Reasoning` folder sharpens the current corpus around a more specific question than the earlier `LLM` and `Chat-GPT` folders: how much reasoning capability comes from prompting, how much from post-training, and how much from explicit search or memory at inference time.

## Main Threads

- **Reasoning-oriented post-training**: [DeepSeek_R1](../sources/deepseek-r1.md), [A Survey on Post-Training of Large Language Models](../sources/a-survey-on-post-training-of-large-language-models.md), and [Advancing Reasoning in Large Language Models](../sources/advancing-reasoning-in-large-language-models.md) anchor the post-training side.
- **Inference-time scaffolds**: [ReAct](../sources/react.md), [From Tokens to Thoughts](../sources/from-tokens-to-thoughts.md), and [Scaling of Search and Learning](../sources/scaling-of-search-and-learning.md) cluster around structured test-time reasoning.
- **Limits and failure modes**: [LLMS GET LOST IN MULTI-TURN CONVERSATION](../sources/llms-get-lost-in-multi-turn-conversation.md) and [The Illusion of Thinking](../sources/the-illusion-of-thinking.md) add skepticism and boundary conditions.
- **Memory and architecture for reasoning**: [Titans Learning to Memorize at Test Time](../sources/titans-learning-to-memorize-at-test-time.md) points to test-time memory as a separate lever from prompt design or post-training.
- **Program synthesis and broader systems framing**: [program_synthesis_now](../sources/program-synthesis-now.md), [Gemma3Report](../sources/gemma3report.md), and [google_cloud_future_of_ai_perspectives_for_startups_2025](../sources/google-cloud-future-of-ai-perspectives-for-startups-2025.md) are more peripheral but still useful context setters.

## Current Read

- This folder helps split “reasoning” into more useful subcategories: prompt scaffolds, post-training, search, and memory.
- It also overlaps heavily with `Chat-GPT`, which means a cleanup pass should prefer canonical concept pages over multiplying nearly identical reasoning concepts.
- ReAct and DeepSeek-R1 are the strongest immediate anchors because they represent two different paths to better reasoning: inference-time control and RL-heavy post-training.

## Strongest Entity Anchors

- [DeepSeek-R1](../entities/deepseek-r1.md)
- [ReAct](../entities/react.md)
- [Titans](../entities/titans.md)

## Related Concepts

- [Test-Time Reasoning](../concepts/test-time-reasoning.md)
- [LLM Post-Training](../concepts/llm-post-training.md)
- [Reinforcement Learning for LLMs](../concepts/reinforcement-learning-for-llms.md)

