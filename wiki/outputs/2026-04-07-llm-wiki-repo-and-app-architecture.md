---
title: 2026-04-07 LLM Wiki Repo and App Architecture
type: output
status: active
created: 2026-04-07
updated: 2026-04-09
sources:
  - ../outputs/2026-04-07-llm-wiki-product-architecture-note.md
  - ../outputs/2026-04-07-llm-wiki-prd.md
  - ../outputs/2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md
tags:
  - output
  - architecture
  - repo
  - app
  - llm-wiki
confidence: medium
---

# 2026-04-07 LLM Wiki Repo and App Architecture

## Goal

Translate the [LLM Wiki Product Architecture Note](2026-04-07-llm-wiki-product-architecture-note.md) into a concrete implementation architecture that could be built as a local-first app plus repo-backed workspace.

## Top-Level Shape

The cleanest implementation is:

- a **repo-backed workspace** as the system of record
- a **local agent runtime** that performs ingest, query, and lint jobs
- a **thin control app** that launches jobs, shows status, and exposes navigation
- **Obsidian** as the primary reading surface for markdown artifacts

This keeps the product aligned with the wiki-first principle described in [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md). The app is the command center. The repo is the durable artifact.

## Workspace Layout

```text
/
  raw/
    sources/
    assets/
  wiki/
    sources/
    entities/
    concepts/
    outputs/
    maintenance/
    indexes/
  state/
    manifests/
    jobs/
    search/
    graph/
    cache/
  templates/
  scripts/
  docs/
  AGENTS.md
  index.md
  log.md
```

## What Belongs Where

### `raw/`

Purpose:
- immutable source-of-truth inputs

Contents:
- PDFs
- markdown clippings
- images
- datasets
- transcripts
- extracted `.txt` siblings

Rules:
- never modified by the agent except for optional derived extraction sidecars like `.txt`

### `wiki/`

Purpose:
- canonical interpreted knowledge layer

Contents:
- source summaries
- entities
- concepts
- outputs
- maintenance notes
- topical indexes

Rules:
- primary memory layer
- all durable synthesis lives here

### `state/`

Purpose:
- supporting derived infrastructure that should not be treated as canonical knowledge

Suggested subfolders:

- `state/manifests/`
  - source manifests
  - page manifests
  - hashes
  - dependency maps
- `state/jobs/`
  - ingest runs
  - query runs
  - lint runs
  - status snapshots
- `state/search/`
  - lexical index files
  - vector index files
  - reranking caches
- `state/graph/`
  - entity relation snapshots
  - backlink graphs
  - optional structured overlays
- `state/cache/`
  - temporary extraction outputs
  - model-response caches where appropriate

Rules:
- derived and rebuildable
- useful for speed and observability
- not the final truth

## App Architecture

The app should be split into five core modules.

### 1. Workspace Manager

Responsibilities:
- open a repo workspace
- validate folder structure
- read configuration and schema
- locate raw/wiki/state directories
- manage migrations if the workspace format evolves

Key inputs:
- workspace path
- `AGENTS.md`
- repo layout

Key outputs:
- normalized workspace object for the rest of the system

### 2. Job Orchestrator

Responsibilities:
- run ingest/query/lint jobs
- track job state
- persist logs and touched files
- recover safely after interruption

Job types:
- ingest-source
- ingest-folder
- answer-query
- generate-output
- lint-wiki
- refresh-indexes

Key design rule:
- jobs should be explicit, logged, resumable, and inspectable

### 3. Compiler Engine

Responsibilities:
- read raw and wiki context
- decide what pages to create or update
- apply schema rules
- write markdown changes
- update `index.md` and `log.md`

Submodules:
- source reader
- page planner
- page updater
- link manager
- canonical-page resolver
- provenance recorder

Key design rule:
- compilation should be incremental, not full rebuild by default

### 4. Discovery Layer

Responsibilities:
- provide retrieval, search, and related-page suggestions
- help the compiler and query engine find relevant context fast

Submodules:
- lexical search
- vector search
- related-page suggestion
- duplicate detection
- optional graph traversal

Key design rule:
- discovery helps the compiler operate on the wiki, but does not replace the compiler

### 5. UI Layer

Responsibilities:
- show workspace health
- launch jobs
- show recent changes
- show job outputs and diffs
- expose query and ingest forms

Suggested screens:
- workspace overview
- recent jobs
- ingest queue
- query runner
- lint findings
- file change review
- settings

Key design rule:
- the UI is a control panel, not the primary reading environment

## Runtime Architecture

The runtime can be modeled as:

1. `Input adapters`
   Read PDFs, markdown, images, text, and local files.
2. `Preparation stage`
   Extract text, normalize metadata, compute hashes.
3. `Planning stage`
   Decide which pages and indexes are likely affected.
4. `Compilation stage`
   Update source, concept, entity, output, and maintenance pages.
5. `Post-processing stage`
   Refresh indexes, logs, manifests, search caches, and health signals.

This is closer to a build pipeline than a chat session.

## Core Data Models

### Source Record

Fields:
- `source_id`
- `title`
- `path`
- `source_type`
- `imported_at`
- `updated_at`
- `hash`
- `metadata`
- `derived_text_path`
- `status`

### Wiki Page Record

Fields:
- `page_id`
- `title`
- `path`
- `page_type`
- `created_at`
- `updated_at`
- `canonical_status`
- `related_sources`
- `related_entities`
- `related_concepts`

### Job Record

Fields:
- `job_id`
- `job_type`
- `started_at`
- `finished_at`
- `status`
- `inputs`
- `touched_files`
- `summary`
- `model_info`

### Link Graph Record

Fields:
- `from_page`
- `to_page`
- `link_type`
- `confidence`

## Suggested Tech Split

### Repo/engine side

Good fit:
- Python or TypeScript for the compiler/runtime
- plain markdown files for wiki output
- JSON manifests in `state/`
- local CLI entry points for agent use

### Thin app side

Good fit:
- Electron, Tauri, or a local web app shell
- lightweight local database only for job state if needed
- file watchers for change detection

### Search side

Start with:
- lexical search over markdown

Then optionally add:
- embeddings
- reranking
- qmd integration or equivalent

## Incremental Build Strategy

The compiler should avoid scanning and rewriting the whole wiki every time. That keeps the implementation aligned with [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md) rather than turning the wiki into a disposable derived view.

Recommended flow:

1. detect changed sources by hash
2. map sources to likely affected pages
3. update those pages
4. refresh touched topical indexes
5. refresh `index.md`
6. append one structured `log.md` entry

This keeps both cost and drift under control.

## Agent Integration

The system should assume an agent runtime can:

- read files
- call CLI tools
- write markdown
- inspect images if available

The schema file should remain the behavior contract, while the app/runtime provides:

- stable commands
- job visibility
- safe write boundaries
- recovery and logging

## Recommended MVP Build Order

1. Workspace validator
2. Source extraction pipeline
3. Ingest job runner
4. Incremental page compiler
5. Index/log updater
6. Query-to-output runner
7. Lint runner
8. Control-panel UI
9. Search layer
10. Selective graph/entity overlays

## Design Constraints

- the repo must remain usable without the app
- the app must never make the markdown unreadable
- generated state should stay outside `wiki/` where possible
- supporting infrastructure must be rebuildable
- the canonical artifact must remain portable in git

## Bottom Line

The most concrete implementation is:

- **repo as source of durable truth**
- **compiler runtime as the engine**
- **control app as the operator surface**
- **Obsidian as the reading surface**

That gives you a product that is stronger than a bag of scripts without abandoning the wiki-native pattern that makes the idea attractive.

## Related Concepts

- [Incremental Knowledge Compilation](../concepts/incremental-knowledge-compilation.md)
- [Workflow Optimization for LLM Agents](../concepts/workflow-optimization-for-llm-agents.md)
- [Agent Harnesses](../concepts/agent-harnesses.md)
- [Retrieval-Augmented Generation](../concepts/retrieval-augmented-generation.md)
- [Knowledge Graph Construction](../concepts/knowledge-graph-construction.md)
- [Sentence Embeddings](../concepts/sentence-embeddings.md)

## Related Outputs

- [2026-04-07 LLM Wiki Product Architecture Note](2026-04-07-llm-wiki-product-architecture-note.md)
- [2026-04-07 Which Persistence Layers Should Be Primary, Secondary, or Supporting in an LLM Wiki?](2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md)
- [2026-04-07 Structured Knowledge vs Retrieval vs Persistent Wiki Compilation](2026-04-07-structured-knowledge-vs-retrieval-vs-persistent-wiki-compilation.md)
