---
title: NuNER
type: source
status: ingested
created: 2026-04-07
updated: 2026-04-07
sources:
  - raw/sources/Topics/NuNER.pdf
  - raw/sources/Topics/NuNER.txt
tags: [source, llm, topics]
confidence: medium
---

# NuNER

## Summary

First-pass ingest for NuNER. Extracted text is available locally, but this summary should be tightened in a later synthesis pass: NuNER: Entity Recognition Encoder Pre-training via LLM-Annotated Data arXiv:2402.15343v1 [cs.CL] 23 Feb 2024 Sergei Bogdanov 1 Alexandre Constantin 1 TimotheÂ´e Bernard 2 Benoit CrabbeÂ´ 2 Etienne Bernard 1 1 NuMind 2 UniversiteÂ´ Paris Diderot sergei@numind.ai, alexandre@numind.ai, timothee.bernard@u-paris.fr, benoit.crabbe@u-paris.fr, etienne@numind.ai Abstract Large Language Models (LLMs) have shown impressive abi

## Key Contributions

- Adds coverage to the `topics` cluster.
- Likely connects most strongly to `Topic Modeling and Keyphrase Extraction`, `Topic Coherence`, `Grammar and Information Extraction`.
- Worth revisiting if this thread becomes central to later synthesis.

## Related Concepts

- [Topic Modeling and Keyphrase Extraction](../concepts/topic-modeling-and-keyphrase-extraction.md)
- [Topic Coherence](../concepts/topic-coherence.md)
- [Grammar and Information Extraction](../concepts/grammar-and-information-extraction.md)

## Provenance

- Raw file: `raw/sources/Topics/NuNER.pdf`
- Extracted text file: `raw/sources/Topics/NuNER.txt`
