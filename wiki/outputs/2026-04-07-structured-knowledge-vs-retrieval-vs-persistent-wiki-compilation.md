---
title: 2026-04-07 Structured Knowledge vs Retrieval vs Persistent Wiki Compilation
type: output
status: active
created: 2026-04-07
updated: 2026-04-09
sources:
  - ../concepts/incremental-knowledge-compilation.md
  - ../concepts/retrieval-augmented-generation.md
  - ../concepts/knowledge-graph-construction.md
  - ../outputs/2026-04-07-knowledge-graphs-cluster-map.md
  - ../outputs/2026-04-07-rag-cluster-map.md
tags:
  - output
  - synthesis
  - knowledge-systems
confidence: medium
---

# 2026-04-07 Structured Knowledge vs Retrieval vs Persistent Wiki Compilation

## Comparison Table

| Pattern | Core artifact | Main strength | Main weakness | Best fit |
| --- | --- | --- | --- | --- |
| Retrieval-first systems | Raw documents plus retrieval index | Flexible grounding on large corpora without heavy preprocessing | Re-derives synthesis repeatedly and often weak on accumulation | Broad search over changing corpora |
| Structured knowledge systems | Explicit graph, ontology, or schema | High precision over entities, relations, and multi-hop structure | Expensive construction and maintenance | Domains where relations and schema matter a lot |
| Persistent wiki compilation | Interlinked markdown knowledge layer maintained over time | Strong accumulation, synthesis, and human readability | Can drift if not linted and may be less formally structured than graphs | Ongoing research workflows and compounding analysis |

## Current Synthesis

- Retrieval-first systems are best when recall over raw material matters most and the corpus is too large or fluid to compile deeply in advance.
- Structured knowledge systems shine when the central problem is explicit entities, relations, schema, and graph traversal.
- Persistent wiki compilation is strongest when the goal is not just answering one question, but building a living knowledge base that gets better as you use it.

## How They Relate

- A wiki can absorb outputs from retrieval and turn them into durable synthesized pages.
- A knowledge graph can sit beside a wiki as a more formal substrate for entities and relations.
- Retrieval remains useful even in a wiki-based workflow, but it becomes a support mechanism instead of the whole architecture.

## Read For LLM Wiki

The LLM Wiki pattern is best understood as a middle path between pure RAG and fully formalized knowledge graphs. It keeps the human legibility and low friction of markdown while still accumulating structure, links, and synthesis over time. That makes it more compounding than retrieval-first systems and more flexible than fully schema-bound graph systems.

## Related Concepts

- [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md)
- [Retrieval-Augmented Generation](../concepts/retrieval-augmented-generation.md)
- [Knowledge Graph Construction](../concepts/knowledge-graph-construction.md)
- [Knowledge-Graph-Augmented LLMs](../concepts/knowledge-graph-augmented-llms.md)

## Related Outputs

- [2026-04-07 RAG Cluster Map](2026-04-07-rag-cluster-map.md)
- [2026-04-07 Knowledge Graphs Cluster Map](2026-04-07-knowledge-graphs-cluster-map.md)
- [2026-04-07 Which Persistence Layers Should Be Primary, Secondary, or Supporting in an LLM Wiki?](2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md)
