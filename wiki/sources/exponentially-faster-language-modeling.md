---
title: Exponentially Faster Language Modeling
type: source
status: ingested
created: 2026-04-07
updated: 2026-04-07
sources:
  - raw/sources/Chat-GPT/Exponentially Faster Language Modeling.pdf
  - raw/sources/Chat-GPT/Exponentially Faster Language Modeling.txt
tags: [source, llm, chat-gpt, chatgpt]
confidence: medium
---

# Exponentially Faster Language Modeling

## Summary

Language models only really need to use an exponential fraction of their neurons for individual inferences. As proof, we present UltraFastBERT, a BERT variant that uses 0.3% of its neurons during inference while performing on par with similar BERT models. UltraFastBERT selectively engages just 12 out of 4095 neurons for each layer inference. This is achieved by replacing feedforward networks with fast feedforward networks (FFFs).

## Key Contributions

- Adds coverage to the `chat-gpt` cluster.
- Likely connects most strongly to `Prompt Engineering`, `LLM Landscape`, `In-Context Learning`, `LLM Evaluation and Benchmarking`, `Hallucination Mitigation`, `Knowledge-Graph-Augmented LLMs`.
- Worth revisiting if this thread becomes central to later synthesis.

## Related Concepts

- [Prompt Engineering](../concepts/prompt-engineering.md)
- [LLM Landscape](../concepts/llm-landscape.md)
- [In-Context Learning](../concepts/in-context-learning.md)
- [LLM Evaluation and Benchmarking](../concepts/llm-evaluation-and-benchmarking.md)
- [Hallucination Mitigation](../concepts/hallucination-mitigation.md)
- [Knowledge-Graph-Augmented LLMs](../concepts/knowledge-graph-augmented-llms.md)

## Provenance

- Raw file: `raw/sources/Chat-GPT/Exponentially Faster Language Modeling.pdf`
- Extracted text file: `raw/sources/Chat-GPT/Exponentially Faster Language Modeling.txt`

