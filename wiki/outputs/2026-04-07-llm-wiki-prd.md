---
title: 2026-04-07 LLM Wiki PRD
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../outputs/2026-04-07-llm-wiki-product-architecture-note.md
  - ../outputs/2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md
  - ../outputs/2026-04-07-how-intelligent-systems-accumulate-reusable-knowledge-over-time.md
tags:
  - output
  - prd
  - llm-wiki
confidence: medium
---

# 2026-04-07 LLM Wiki PRD

## Product Summary

LLM Wiki is a wiki-first research and knowledge product in which an LLM incrementally compiles raw source material into a maintained markdown knowledge base. The product’s core promise is that knowledge compounds: new sources, new questions, and new outputs improve a persistent artifact instead of disappearing into chat history.

## Problem

Most document-based LLM workflows are retrieval-first. They are useful, but they do not accumulate much durable synthesis. Users repeatedly pay for the model to rediscover relationships, summarize the same sources, and reconstruct context from scratch.

Wikis solve persistence but usually fail because humans do not want to do the maintenance work required to keep them current.

LLM Wiki solves this by making the LLM the maintainer of the wiki.

## Goal

Create a system where:

- raw sources are easy to ingest
- the wiki stays current as new material arrives
- questions produce durable outputs
- contradictions and stale pages are surfaced rather than hidden
- the knowledge base becomes more useful with use

## Non-Goals

- replace raw-source storage
- be a pure chat product
- require a formal graph schema for all data
- require embeddings or RAG before the system is useful
- become a full IDE replacement for Obsidian in the first version

## Users

Primary users:
- independent researchers
- technical founders
- analysts and investors
- students and labs
- knowledge workers building long-lived topic collections

Secondary users:
- teams maintaining internal knowledge bases
- operators who want transcript-driven or process-driven wiki upkeep

## Core User Stories

- As a researcher, I want to drop a paper into a raw folder and have the wiki update the relevant summaries, concepts, and indexes.
- As a user, I want to ask a complex question and have the answer saved as a durable markdown artifact.
- As a maintainer, I want the system to detect contradictions, stale claims, orphan pages, and missing cross-links.
- As a browser, I want to navigate the knowledge base through indexes, backlinks, and graph-like structure.
- As a power user, I want search and semantic tools to help the agent work faster without replacing the wiki.

## Product Principles

1. The wiki is the primary memory layer.
2. Raw sources are immutable.
3. Durable outputs beat ephemeral chat.
4. Local-first and markdown-native are default.
5. Supporting infrastructure should enrich the wiki, not replace it.
6. Provenance and auditability matter.

## MVP Scope

### Included

- local repo-backed workspace
- raw/wiki/schema folder convention
- schema-driven agent behavior
- ingest workflow
- query workflow
- lint workflow
- index and log maintenance
- markdown outputs
- Obsidian-friendly structure

### Optional but supported

- local PDF extraction
- local search CLI
- Marp slide generation
- semantic search helpers

### Deferred

- hosted multi-user collaboration
- full review/approval system
- universal graph layer
- advanced training or fine-tuning workflow
- large-scale cloud orchestration

## Core Features

### 1. Ingest

Users add source material to `raw/`.

The system:
- reads the new source
- creates or updates a source summary
- updates related entity and concept pages
- updates topical indexes
- appends to the operational log

### 2. Query

Users ask questions against the wiki.

The system:
- identifies relevant wiki pages and raw sources
- synthesizes an answer
- outputs a markdown note, comparison, report, or deck
- optionally files that output back into the wiki

### 3. Lint

Users or automations run health checks.

The system looks for:
- contradictions
- stale claims
- missing pages
- weak cross-linking
- missing citations
- structural gaps

### 4. Navigation

The system provides:
- global index
- topical indexes
- backlinks
- entity and concept hubs
- graph-friendly markdown structure

## Functional Requirements

- Must support nested topic folders under `raw/sources/`.
- Must never modify files in `raw/`.
- Must maintain markdown pages in `wiki/`.
- Must support durable outputs from queries.
- Must maintain `index.md` and `log.md`.
- Must work without embeddings in small-to-medium corpora.
- Must allow optional supporting tools such as search and embeddings.

## Success Metrics

- time from source drop to useful wiki update
- percentage of queries that produce durable filed outputs
- proportion of source folders represented in the wiki
- number of broken/orphan/stale pages over time
- user-perceived reduction in repeated rediscovery work
- frequency of re-use of prior synthesis pages during later queries

## Risks

- wiki drift and duplication
- hallucinated synthesis becoming canonical
- over-reliance on retrieval instead of maintaining pages
- metadata overhead becoming burdensome
- users treating outputs as trustworthy without provenance review

## Risk Mitigations

- strong schema instructions
- explicit provenance conventions
- append-only operational log
- periodic lint passes
- canonical-page preference rules
- selective rather than universal structured overlays

## Future Opportunities

- richer graph/entity overlays
- periodic automated maintenance jobs
- review workflows for teams
- synthetic dataset generation from the wiki
- model personalization or fine-tuning against high-quality wiki artifacts

## Open Questions

- What is the right threshold for creating new concept pages versus enriching existing ones?
- When should outputs become canonical wiki pages versus remaining transient artifacts?
- How much graph structure should be made explicit before maintenance cost outweighs benefit?
- At what corpus size does index-first navigation stop being enough?

## Bottom Line

The MVP should not try to be a general AI workspace. It should be excellent at one thing:

**turning a growing pile of raw documents into a maintained, compounding, queryable markdown wiki.**

