# AGENTS.md

This file defines how the agent should maintain this wiki.

## Mission

Treat this repository as a three-layer system:

- `raw/` contains immutable source material and attachments.
- `wiki/` contains markdown pages maintained by the agent.
- `AGENTS.md` is the operating schema that governs behavior.

The human curates sources, decides what matters, and asks questions. The agent performs the maintenance work that keeps the wiki coherent over time.

## Startup Routine

At the beginning of a new session:

1. Read this file.
2. Read `index.md`.
3. Read the latest entries in `log.md`.
4. Inspect the relevant area of `wiki/` before making changes.

## Non-Negotiable Rules

- Never modify files under `raw/`.
- Prefer updating canonical existing pages over creating duplicates.
- Cite source pages for nontrivial claims.
- Mark uncertainty explicitly.
- Do not silently erase contradictions. Record them.
- Keep links stable whenever possible.
- Update `index.md` whenever a new page is added or a summary materially changes.
- Append to `log.md` for ingest, query, lint, and schema-maintenance work.

## Source Layout

- Files under `raw/` are immutable inputs.
- Sources may live directly under `raw/sources/` or inside stable topical subfolders such as `raw/sources/agents/` or `raw/sources/books/`.
- Preserve the user's chosen source organization rather than flattening it.
- When citing raw files in wiki pages, use the actual relative path to the file.
- For PDF-heavy workflows, prefer reading a sibling extracted `.txt` file when available before falling back to metadata-only ingest.

## Wiki Page Types

The agent may create or maintain these page types:

- `wiki/sources/`: summaries of individual raw sources
- `wiki/entities/`: pages for people, organizations, tools, projects, places, and similar named things
- `wiki/concepts/`: pages for ideas, methods, themes, models, and topics
- `wiki/outputs/`: durable outputs from user queries
- `wiki/maintenance/`: lint reports, integrity checks, cleanup suggestions
- `wiki/indexes/`: optional specialized indexes beyond the root `index.md`

## Naming Conventions

- Use lowercase kebab-case filenames.
- Prefer short stable names.
- For source summary pages, use a descriptive filename based on the source title.
- For output pages, include a date prefix when helpful for uniqueness.

## Frontmatter

Use YAML frontmatter when it helps the page remain structured. Keep it light.

Recommended fields:

- `title`
- `type`
- `status`
- `created`
- `updated`
- `sources`
- `tags`
- `aliases`
- `confidence`

Do not let metadata maintenance overshadow useful content.

## Linking Conventions

- Link to existing canonical pages using wiki-style markdown links.
- Add “Related” or “See also” sections when useful.
- When a source updates an entity or concept, reflect the change on both sides:
  - add the source to the relevant entity or concept page
  - add the entity or concept link to the source summary page

## Contradictions and Uncertainty

When new evidence conflicts with old content:

- do not overwrite the old claim without noting the conflict
- update the synthesis to reflect the dispute
- cite the pages or sources involved
- note the issue in maintenance output if it needs follow-up

Use clear language such as `Open question`, `Conflicting evidence`, or `Low confidence`.

## index.md Rules

`index.md` is the content-oriented catalog for the wiki.

When updating it:

- keep pages grouped by category
- include a one-line summary for each page
- keep wording concise and scannable
- add new pages promptly
- refresh summaries when a page changes materially

During query workflows, read `index.md` first to identify relevant pages before drilling into page contents.

## log.md Rules

`log.md` is append-only and chronological.

Each entry must begin with a heading like:

- `## [YYYY-MM-DD] ingest | Title`
- `## [YYYY-MM-DD] query | Question`
- `## [YYYY-MM-DD] lint | Scope`
- `## [YYYY-MM-DD] maintenance | Description`

Each entry should include:

- what happened
- which files were touched
- notable findings or unresolved questions

## Ingest Workflow

When asked to ingest a source:

1. Identify the new file or files in `raw/sources/` including any nested topical subfolders, and any related files in `raw/assets/`.
2. Read the source.
3. Create or update a summary page in `wiki/sources/`.
4. Update any affected entity pages in `wiki/entities/`.
5. Update any affected concept pages in `wiki/concepts/`.
6. Update any relevant output or synthesis pages if the new source changes them.
7. Update `index.md`.
8. Append an ingest entry to `log.md`.

If the source is weakly relevant or highly redundant, note that in the source summary rather than forcing unnecessary new pages.

## Query Workflow

When asked a question:

1. Read `index.md`.
2. Identify likely relevant pages.
3. Read the minimum necessary set of pages in depth.
4. Synthesize an answer with citations to the wiki pages or source summaries used.
5. If the answer is durable and useful, write it to `wiki/outputs/`.
6. Link the output back to related source, entity, and concept pages when appropriate.
7. Update `index.md` if a durable new page was created.
8. Append a query entry to `log.md` if a page was filed or a substantial analysis was performed.

## Lint Workflow

When asked to lint the wiki:

1. Inspect `index.md`, recent `log.md` entries, and the relevant wiki areas.
2. Look for:
   - contradictions
   - stale claims
   - orphan pages
   - missing cross-links
   - important concepts lacking pages
   - important entities lacking pages
   - missing citations
   - broken assumptions caused by recent ingest
3. Write findings to `wiki/maintenance/`.
4. Suggest useful next questions or source gaps when appropriate.
5. Append a lint entry to `log.md`.

## Filing Policy

Good outputs should compound.

If a query produces something reusable, such as:

- a comparison
- a synthesis
- a timeline
- a briefing
- a deck outline

then prefer filing it into `wiki/outputs/` rather than leaving it in chat.

## Human-Agent Division of Labor

The human should:

- choose sources
- decide what deserves attention
- guide emphasis
- inspect important outputs

The agent should:

- summarize
- cross-reference
- update related pages
- maintain indexes
- keep logs
- suggest useful follow-up work

## Model Guidance

This repo does not set the model used by the agent. Model selection lives in the external tool or runtime, such as Codex, Claude Code, OpenCode, or another agent environment.

When possible, prefer a model with:

- strong long-context reading and synthesis
- reliable markdown editing
- good instruction following across many files
- multimodal support when sources include images

If a weaker model is being used, favor narrower tasks, smaller ingest batches, and more explicit human review.
