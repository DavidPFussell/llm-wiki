---
marp: true
theme: default
paginate: true
title: LLM Wiki
description: A wiki-first product pattern for LLM-maintained knowledge bases
---

# LLM Wiki

A wiki-first product pattern for LLM-maintained knowledge bases

---

# The Problem

- Most LLM document workflows are retrieval-first
- They answer questions, but they do not accumulate much durable synthesis
- The model repeatedly rediscovers the same relationships
- Human-maintained wikis solve persistence, but usually fail on maintenance burden

---

# The Core Idea

- Put a persistent markdown wiki between the user and the raw corpus
- Let the LLM maintain that wiki over time
- Every source, query, and maintenance pass should improve a durable artifact
- Knowledge compounds instead of disappearing into chat history

---

# Three Layers

- `raw/`
  Immutable source material
- `wiki/`
  LLM-maintained markdown knowledge layer
- `schema`
  Agent instructions and workflow rules

---

# Why This Is Different

- RAG stores access paths
- Graphs store explicit structure
- Embeddings store semantic proximity
- Process logs store behavior over time
- LLM Wiki stores readable synthesis

---

# The Main Product Thesis

The canonical memory of the system should be the wiki, not:

- the vector index
- the graph store
- the prompt history
- the chat transcript

---

# Persistence Layers

| Role | Layer |
| --- | --- |
| Primary | Persistent wiki compilation |
| Secondary | Retrieval, embeddings, selective structured knowledge |
| Supporting | Prompts, topic tooling, process traces, causal framing |

---

# Why Wiki-First Wins

- Durable
- Human-readable
- Inspectable
- Git-friendly
- Easy to browse in Obsidian
- Able to absorb outputs from all other layers

---

# What Retrieval Is For

- Find relevant raw files
- Find relevant wiki pages
- Keep the agent efficient as the corpus grows

Retrieval should help the agent operate on the wiki, not replace the wiki.

---

# What Embeddings Are For

- Related-page suggestions
- Semantic search
- Duplicate detection
- Cluster and concept suggestions

Embeddings organize meaning, but do not explain it.

---

# What Structured Knowledge Is For

- Canonical entities
- Important relations
- Stable taxonomies
- Precision where soft markdown structure is not enough

Best fit: wiki-first, graph-assisted

---

# Core Workflows

- Ingest
  Source lands in `raw/`, wiki updates
- Query
  Answer is generated and often filed back into the wiki
- Lint
  Contradictions, stale claims, missing pages, and weak links are surfaced

---

# User Experience

The product should feel like:

- a living wiki
- a knowledge compiler
- a durable artifact generator

It should not feel like:

- generic file chat
- a vector database console
- a graph admin tool

---

# MVP

- local-first repo workspace
- raw/wiki/schema structure
- ingest/query/lint workflows
- index and log maintenance
- markdown outputs
- Obsidian compatibility

---

# Success Metric

The key question is not:

"Can it answer a question?"

The key question is:

"Does each interaction improve the knowledge base for future interactions?"

---

# Bottom Line

LLM Wiki is a product pattern for turning raw documents into a maintained, compounding, queryable markdown knowledge base.

The wiki should stay primary.
Everything else should make the wiki better.

