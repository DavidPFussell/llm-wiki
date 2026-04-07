---
title: 2026-04-07 Broader Corpus Lint Pass
type: maintenance
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../indexes/llm-and-agents.md
  - ../outputs/2026-04-07-knowledge-graphs-cluster-map.md
  - ../outputs/2026-04-07-ml-cluster-map.md
  - ../maintenance/2026-04-07-wave-1-overlap-cleanup-pass.md
tags:
  - maintenance
  - lint
  - broader-corpus
confidence: medium
---

# 2026-04-07 Broader Corpus Lint Pass

## Main Findings

- **Wave 1 is structurally strong now**: the LLM/agents/reasoning/RAG surface has enough source pages, concept pages, entities, and cluster maps to support real synthesis work instead of only ingest.
- **Knowledge Graphs is source-rich but entity-light**: the cluster now has good concept coverage, but only a few canonical entities. Additional anchors like Neo4j, OpenKE, OpenDialKG, or PyTorch BigGraph may become worthwhile if that cluster deepens.
- **ML is broad but still under-compressed**: the `ML` folder has many useful source pages, but it needs more mid-level synthesis and probably a few more concept pages if it becomes a major research axis rather than a support library.
- **Near-duplicate KG survey titles exist**: [A Comprehensive Survey of Graph Embedding](../sources/a-comprehensive-survey-of-graph-embedding.md) and [A Comprehensive Survey on Graph Embedding](../sources/a-comprehensive-survey-on-graph-embedding.md) look suspiciously overlapping and may need manual comparison.
- **Prompting/reasoning/post-training boundaries are better, but still fragile**: the current canonical split is much better than before, but new papers in these areas could still create taxonomy drift if not filed consistently.

## Strong Areas

- The repo now has durable navigation hubs through [LLM and Agents Index](../indexes/llm-and-agents.md), [Agents Index](../indexes/agents.md), and multiple filed cluster maps.
- The concept layer is much healthier than the source layer alone and now supports cross-folder synthesis.
- The duplicate-source handling pattern using superseded redirect-style pages is working and should be reused.

## Weak Areas

- Some first-pass source summaries are still title-and-abstract heavy rather than cleanly synthesized from full text.
- Several new concepts still have only light `sources` frontmatter and would benefit from a second pass if they become central.
- The `ML` cluster especially needs more entity anchors and perhaps a topical index if it grows further.

## Recommended Next Steps

- Write one cross-cluster synthesis on “structured knowledge vs retrieval vs persistent wiki compilation.”
- Deepen `Knowledge Graphs` with a handful of canonical entities and one comparison note between graph-native knowledge systems and the markdown-wiki pattern.
- Run a targeted duplicate review on suspiciously overlapping graph-embedding and prompt/reasoning survey pages.
- Consider creating a second broad index that covers non-Wave-1 domains once the repo has another major cluster beyond LLM/agents.
