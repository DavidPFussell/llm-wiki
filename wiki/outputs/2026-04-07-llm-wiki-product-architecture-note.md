---
title: 2026-04-07 LLM Wiki Product Architecture Note
type: output
status: active
created: 2026-04-07
updated: 2026-04-09
sources:
  - ../outputs/2026-04-07-how-intelligent-systems-accumulate-reusable-knowledge-over-time.md
  - ../outputs/2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md
  - ../indexes/llm-and-agents.md
  - ../indexes/methods-and-foundations.md
  - ../indexes/text-analysis-and-operations.md
tags:
  - output
  - architecture
  - llm-wiki
confidence: medium
---

# 2026-04-07 LLM Wiki Product Architecture Note

## Thesis

An LLM Wiki should be architected as a **wiki-first knowledge compiler** with supporting retrieval, semantic, structural, and operational layers. The canonical memory of the system is the maintained markdown wiki, not the vector index, graph store, or chat history. This is the product-level expression of [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md).

## Core Architectural Principle

The product should optimize for one outcome:

**Every ingest, query, and maintenance action should improve a persistent knowledge artifact that remains readable, inspectable, and reusable later.**

## Layered Architecture

### 1. Primary Layer: Persistent Wiki Compilation

This is the product core.

Artifacts:
- source summaries
- concept pages
- entity pages
- comparison notes
- synthesis pages
- topical indexes
- maintenance reports
- filed query outputs

Responsibilities:
- maintain the canonical knowledge layer
- integrate new sources into existing pages
- preserve backlinks and conceptual structure
- record contradictions and revisions
- remain legible to both humans and agents

### 2. Secondary Layer: Retrieval and Search

This layer exists to help the agent operate on the wiki and the raw corpus efficiently, in the same support role described by [Retrieval-Augmented Generation](../concepts/retrieval-augmented-generation.md).

Artifacts:
- lexical indexes
- vector indexes
- reranking logic
- source and page search helpers

Responsibilities:
- locate relevant raw files and wiki pages
- support scale as the corpus grows
- avoid repeated full-corpus rereads

Design rule:
- retrieval is subordinate to canonical wiki pages

### 3. Secondary Layer: Semantic Representations

This layer helps with similarity, clustering, and suggestion workflows.

Artifacts:
- embedding stores
- related-page recommendations
- near-duplicate detection
- clustering proposals

Responsibilities:
- improve navigation and discovery
- support suggestion systems
- accelerate retrieval and structure discovery

Design rule:
- vectors help organize meaning but do not replace written synthesis

### 4. Secondary Layer: Selective Structured Knowledge

This is a graph-assisted layer, not a graph-first product, which keeps it consistent with the tradeoffs surfaced in [Knowledge Graph Construction](../concepts/knowledge-graph-construction.md).

Artifacts:
- canonical entities
- important relations
- taxonomies
- graph overlays for selected domains

Responsibilities:
- provide precision where the wiki benefits from stronger structure
- support multi-hop entity reasoning
- stabilize recurring named objects across the corpus

Design rule:
- formal structure should be added where the payoff is clear, not imposed universally

### 5. Supporting Layer: Workflow and Agent Control

This is the execution layer that shapes how the system behaves, closely related to [Workflow Optimization for LLM Agents](../concepts/workflow-optimization-for-llm-agents.md) and [Agent Harnesses](../concepts/agent-harnesses.md).

Artifacts:
- schema file (`AGENTS.md`)
- ingest/query/lint workflows
- prompt templates
- harnesses and helper scripts

Responsibilities:
- keep the agent disciplined
- reduce drift and duplication
- make behavior reproducible across sessions

Design rule:
- workflow logic improves the compiler, but is not itself the main knowledge artifact

### 6. Supporting Layer: Corpus Compression and Discovery

This layer helps the system propose structure and connects naturally to [Sentence Embeddings](../concepts/sentence-embeddings.md).

Artifacts:
- topics
- keyphrases
- coherence signals
- cluster suggestions

Responsibilities:
- surface emerging themes
- suggest new concept pages
- compress large regions of the corpus

Design rule:
- these outputs inform the wiki rather than replace it

### 7. Supporting Layer: Operational Governance

This layer makes the system maintainable at scale.

Artifacts:
- logs
- job history
- touched-file trails
- lint findings
- refresh history

Responsibilities:
- track what changed and why
- support debugging and review
- make automation auditable

Design rule:
- operational memory is essential once the wiki becomes heavily automated

## Data Flow

1. Raw sources land in `raw/`.
2. Extraction/normalization produces readable source inputs.
3. The agent ingests those sources into `wiki/`.
4. Retrieval/search helps locate relevant existing material.
5. Embeddings/topics/graph overlays suggest relationships and structure.
6. The agent updates canonical pages and files outputs back into the wiki.
7. Maintenance workflows audit the result and propose corrections.

## Product Shape

The UX should feel like:

- a maintained markdown wiki
- a command center for ingest/query/lint jobs
- durable outputs instead of ephemeral chats

It should not feel like:

- a generic chat UI with file uploads
- a vector database dashboard
- a graph database console

## Canonical Storage Rule

When multiple representations exist, the canonical order should be:

1. `wiki/` for durable interpreted knowledge
2. `raw/` for immutable source truth
3. indexes/embeddings/graphs/traces as supporting derived infrastructure

This keeps the system explainable and recoverable.

## Near-Term Implementation Priorities

1. Make ingest/query/lint workflows robust and incremental.
2. Strengthen wiki navigation and topical indexes.
3. Add agent-facing search tooling without displacing the wiki.
4. Add selective entity/graph structure where it materially helps.
5. Improve operational observability as automation grows.

## Bottom Line

The best architecture for an LLM Wiki is:

- **wiki-first**
- **retrieval-assisted**
- **embedding-assisted**
- **graph-assisted**
- **trace-governed**

That preserves the compounding value of persistent synthesis while still benefiting from the stronger supporting mechanisms found across the corpus.

## Related Concepts

- [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md)
- [Retrieval-Augmented Generation](../concepts/retrieval-augmented-generation.md)
- [Workflow Optimization for LLM Agents](../concepts/workflow-optimization-for-llm-agents.md)
- [Agent Harnesses](../concepts/agent-harnesses.md)
- [Knowledge Graph Construction](../concepts/knowledge-graph-construction.md)
- [Sentence Embeddings](../concepts/sentence-embeddings.md)

## Related Outputs

- [2026-04-07 LLM Wiki Repo and App Architecture](2026-04-07-llm-wiki-repo-and-app-architecture.md)
- [2026-04-07 Which Persistence Layers Should Be Primary, Secondary, or Supporting in an LLM Wiki?](2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md)
- [2026-04-07 How Intelligent Systems Accumulate Reusable Knowledge Over Time](2026-04-07-how-intelligent-systems-accumulate-reusable-knowledge-over-time.md)
