---
title: 2026-04-07 RAG Cluster Map
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../sources/a-survey-on-rag-for-llms.md
  - ../sources/agentic-rag.md
  - ../sources/rankrag.md
  - ../sources/raft-adapting-language-model-to-domain-specific-rag.md
tags:
  - output
  - llm
  - synthesis
  - rag
confidence: medium
---

# 2026-04-07 RAG Cluster Map

## Overview

The `RAG` folder is compact but already coherent. It contains the best concentrated thread in the corpus for understanding how retrieval pipelines evolve from baseline grounding systems into ranking-heavy, hierarchical, and agentic retrieval workflows.

## Main Threads

- **Surveys and baseline framing**: [A Survey on RAG for LLMs](../sources/a-survey-on-rag-for-llms.md) and [A Survey on Retrieval and Structuring Augmented Generation](../sources/a-survey-on-retrieval-and-structuring-augmented-generation-with-large-language-models.md) establish the basic field map.
- **Agentic and hierarchical RAG**: [Agentic RAG](../sources/agentic-rag.md), [HIRAG](../sources/hirag-hierarchical-thought-instruction-tuning-retrieval-augmented-generation.md), and [Hierarchical Retrieval](../sources/hierarchical-retrieval.md) show the move from simple retrieve-then-generate pipelines toward more controlled multi-step retrieval.
- **Ranking and evidence selection**: [RankRAG](../sources/rankrag.md), [Rankify](../sources/rankify.md), and [Astute RAG](../sources/astute-rag.md) point to the importance of ranking quality and evidence ordering.
- **Training and domain adaptation**: [RAFT](../sources/raft-adapting-language-model-to-domain-specific-rag.md) and [RARE](../sources/rare.md) reflect the branch where RAG becomes a training or adaptation problem rather than only an orchestration problem.
- **Limits and memory structure**: [On the Theoretical Limitations of Embedding-Based Retrieval](../sources/on-the-theoretical-limitations-of-embedding-based-retrieval.md) and [Improving Multi-Step RAG with Hypergraph-Based Memory](../sources/improving-multi-step-rag-with-hypergraphbased-memory-for-long-context-complex-relational-modeling.md) make this folder important for design constraints, not just best practices.

## Current Read

- This folder is especially relevant to the LLM Wiki thesis because it clarifies exactly what standard retrieval architectures do well, and where persistent compiled knowledge may outperform repeated rediscovery.
- The strongest emergent themes are ranking, hierarchical control, and richer memory structure.
- Compared with the main wiki pattern, RAG here looks less like a replacement and more like a tool that can complement persistent wiki compilation.

## Strongest Entity Anchors

- [RAFT](../entities/raft.md)
- [RankRAG](../entities/rankrag.md)
- [HIRAG](../entities/hirag.md)

## Related Concepts

- [Retrieval-Augmented Generation](../concepts/retrieval-augmented-generation.md)
- [Agentic Information Retrieval](../concepts/agentic-information-retrieval.md)
- [Hallucination Mitigation](../concepts/hallucination-mitigation.md)
