---
title: 2026-04-07 Which Persistence Layers Should Be Primary, Secondary, or Supporting in an LLM Wiki?
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../outputs/2026-04-07-how-intelligent-systems-accumulate-reusable-knowledge-over-time.md
  - ../outputs/2026-04-07-structured-knowledge-vs-retrieval-vs-persistent-wiki-compilation.md
  - ../outputs/2026-04-07-reasoning-paradigms-comparison.md
  - ../indexes/llm-and-agents.md
  - ../indexes/methods-and-foundations.md
  - ../indexes/text-analysis-and-operations.md
tags:
  - output
  - synthesis
  - architecture
  - llm-wiki
confidence: medium
---

# 2026-04-07 Which Persistence Layers Should Be Primary, Secondary, or Supporting in an LLM Wiki?

## Short Answer

For a production LLM Wiki architecture:

- **Primary layer**: persistent wiki compilation
- **Secondary layers**: retrieval, embeddings, and selective structured knowledge
- **Supporting layers**: prompts/harnesses, process traces, topic tooling, and causal framing

The main reason is simple: the product’s core value is not just finding information, but building a readable knowledge base that compounds over time.

## Recommended Architecture

| Layer role | Persistence mechanism | What it should do in an LLM Wiki |
| --- | --- | --- |
| Primary | Persistent wiki compilation | Hold the durable human-readable knowledge layer: summaries, concepts, entities, comparisons, contradictions, indexes, and filed outputs |
| Secondary | Retrieval and vector search | Help the agent find relevant raw and compiled material efficiently, especially as the corpus grows |
| Secondary | Sentence embeddings | Support semantic similarity, clustering, related-page discovery, and retrieval quality |
| Secondary | Selective structured knowledge | Represent important entities, relations, and graph-like structure where extra precision is worth the maintenance cost |
| Supporting | Prompting and harnesses | Improve agent workflow quality, consistency, and cost without becoming the main memory substrate |
| Supporting | Topic and keyphrase systems | Compress corpora, suggest pages, surface themes, and assist navigation |
| Supporting | Process traces and monitoring | Record what the system did, how the wiki evolved, and where workflows fail or drift |
| Supporting | Causal and explanatory structure | Provide stronger mechanism-level analysis in domains where intervention and explanation matter |

## Why The Wiki Must Be Primary

The wiki should be primary because it is the only layer in this stack that is simultaneously:

- durable
- human-readable
- inspectable
- editable by the agent
- easy to version in git
- broad enough to absorb outputs from all the other layers

Retrieval indexes, vector stores, graphs, topics, and traces are all useful, but they are not the artifact the human actually wants to browse and build on. The wiki is.

If the wiki were only a derived view over some deeper system, you would lose much of what makes the pattern attractive: direct inspectability, low friction, Obsidian-native browsing, and the ability for every answer to become a durable page.

## Why Retrieval Should Be Secondary, Not Primary

Retrieval is necessary, but it should stay in a support role.

Its job is:

- finding relevant raw sources
- finding relevant existing wiki pages
- keeping the agent efficient as the corpus grows
- supporting large-scale search without forcing the agent to reread everything

Its job is not:

- being the main memory of the system
- deciding canonical synthesis
- replacing persistent pages

In other words, retrieval should help the agent operate on the wiki, not replace the wiki.

## Why Embeddings Should Be Secondary

Sentence embeddings and related vector representations are best treated as semantic infrastructure.

They are very useful for:

- approximate search
- related-page suggestions
- duplicate detection
- cluster suggestions
- topic and concept discovery

But they are weak as a primary memory layer because they compress meaning rather than explain it. A vector can tell you what is nearby, but not what the system believes, why a contradiction matters, or how five sources were synthesized into one view.

## Why Structured Knowledge Should Be Selective

Knowledge graphs and explicit relational structure are valuable where precision matters:

- canonical entities
- key relationships
- important taxonomies
- multi-hop reasoning tasks
- domains with stable schema

They should be secondary rather than universal because a fully graph-first approach raises the maintenance burden too quickly. In an LLM Wiki, graph-like structure is most useful when it is added selectively around the most central entities and relations, while the wiki continues to carry the softer interpretive layer.

This corpus strongly suggests that the best fit is **wiki-first, graph-assisted**, not graph-first.

## Why Topic Tooling Is Supporting

Topic models, keyphrase extraction, and coherence measures are valuable, but mostly as corpus-management tools.

They help with:

- surfacing themes
- proposing new concept pages
- compressing large shelves
- detecting emerging areas
- auditing coverage

They should usually not be the canonical representation of the corpus because topical structure is often too unstable or shallow to carry the full knowledge base.

## Why Process Traces Matter More Than They Seem

Process traces are supporting, but strategically important.

In a production LLM Wiki, traces include:

- ingest logs
- query logs
- lint history
- workflow failures
- file-touch histories
- agent decisions over time

These do not replace the wiki, but they make the wiki governable. They are the operational memory of the system and become more important as automation increases.

## Why Causal Structure Is Usually Supporting

Causal models are rarely the first thing you need in a general-purpose knowledge wiki, but they become important when the domain depends on:

- intervention
- mechanism
- explanation under uncertainty
- policy or operational decisions

So causal framing should usually be supporting by default, then elevated in specific domains such as science, medicine, economics, or operations.

## Design Principle

The most robust architecture is:

1. **Wiki-first for durable synthesis**
2. **Retrieval-assisted for scalable access**
3. **Embedding-assisted for semantic structure**
4. **Graph-assisted where precision pays off**
5. **Topic-assisted for discovery and compression**
6. **Trace-backed for operational governance**
7. **Causally enriched when the domain requires intervention-level understanding**

## Practical Product Translation

If this became a real product, the user should feel like they are using a wiki-centered system, not a vector database UI or a graph database UI.

Under the hood, the product can use:

- retrieval indexes
- embeddings
- graph overlays
- topic suggestions
- workflow logs

But the visible artifact should remain the maintained wiki and its derived outputs.

That is the clearest way to preserve the pattern’s advantages while still benefiting from the stronger supporting layers in the corpus.

## Bottom Line

An LLM Wiki should treat **persistent wiki compilation as the canonical memory layer**.

Everything else should be evaluated by one question:

**Does this help the agent build, maintain, navigate, validate, or enrich the wiki?**

If yes, it belongs as a secondary or supporting layer.
If not, it is probably infrastructure without product value.

## Related Concepts

- [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md)
- [Retrieval-Augmented Generation](../concepts/retrieval-augmented-generation.md)
- [Knowledge Graph Construction](../concepts/knowledge-graph-construction.md)
- [Sentence Embeddings](../concepts/sentence-embeddings.md)
- [Topic Modeling and Keyphrase Extraction](../concepts/topic-modeling-and-keyphrase-extraction.md)
- [Process Mining and Monitoring](../concepts/process-mining-and-monitoring.md)
- [Causal Inference](../concepts/causal-inference.md)
