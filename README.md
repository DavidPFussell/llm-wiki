# LLM Wiki Starter Repo

A local-first starter repo for building an LLM-maintained wiki in markdown.

The pattern is simple:

- `raw/` stores immutable source material.
- `wiki/` stores the persistent markdown wiki maintained by the LLM.
- `AGENTS.md` defines the rules, structure, and workflows the agent should follow.

The human curates sources and directs the work. The LLM does the summarizing, cross-referencing, indexing, filing, and maintenance.

## Core Workflows

### Ingest

1. Add a source to `raw/sources/` and any related images to `raw/assets/`.
2. Ask the agent to process the new source.
3. The agent reads the source, writes or updates wiki pages, updates `index.md`, and appends to `log.md`.

### Query

1. Ask a question against the wiki.
2. The agent reads `AGENTS.md`, then `index.md`, then the most relevant pages.
3. The agent writes the answer as a durable artifact, usually in `wiki/outputs/`.
4. Valuable outputs can be linked back into the rest of the wiki.

### Lint

1. Ask the agent to run a health check.
2. The agent looks for contradictions, stale claims, weak linking, orphan pages, missing concept pages, and citation gaps.
3. The agent writes findings to `wiki/maintenance/` and logs the pass in `log.md`.

## Repository Layout

```text
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
templates/
scripts/
docs/
AGENTS.md
index.md
log.md
```

## Getting Started

1. Read `AGENTS.md`.
2. Drop a source into `raw/sources/`.
3. Ask your agent to ingest it using the workflow in `AGENTS.md`.
4. Open the repo in Obsidian to browse the resulting markdown.

## Recommended Obsidian Setup

- Use this repo as the vault root.
- Save clipped articles into `raw/sources/`.
- Save downloaded attachments into `raw/assets/`.
- Use graph view to inspect link density and orphan pages.
- Optionally install Marp and Dataview if you want richer output and metadata views.

Subfolders inside `raw/sources/` are fine when they reflect stable topic groupings.

## Prompt Snippets

### Ingest

`Please ingest the new source in raw/sources/, update the relevant wiki pages, refresh index.md, and append a log entry.`

### Query

`Answer this question using the wiki, write the result as a markdown page in wiki/outputs/, cite the source pages you used, and update index.md and log.md if the result is worth filing.`

### Lint

`Run a wiki health check for contradictions, stale claims, orphan pages, and missing cross-links. Write findings to wiki/maintenance/ and append a log entry.`

## Model Choice

The repo does not set the LLM model. Choose that in your agent tool or runtime. See [docs/model-selection.md](docs/model-selection.md) for guidance on what to prefer.

## PDF Extraction

This repo includes a local PDF extraction path via [docs/pdf-extraction.md](docs/pdf-extraction.md), so PDF sources can be converted into UTF-8 text before ingest.
