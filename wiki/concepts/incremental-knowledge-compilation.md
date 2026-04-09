---
title: Incremental Knowledge Compilation
type: concept
status: seed
created: 2026-04-05
updated: 2026-04-09
sources:
  - ../sources/sample-source-summary.md
  - ../outputs/2026-04-07-llm-wiki-product-architecture-note.md
  - ../outputs/2026-04-07-llm-wiki-repo-and-app-architecture.md
tags:
  - concept
  - seed
confidence: high
---

# Incremental Knowledge Compilation

## Definition

Incremental knowledge compilation is the process of integrating new sources into a persistent wiki so that synthesis accumulates over time instead of being rediscovered from raw documents on every query.

## Why It Matters

This is the central idea of the LLM Wiki pattern. The wiki becomes a compounding artifact with summaries, links, contradictions, and derived insights already embedded into the structure.

## Related Sources

- [Sample Source Summary](../sources/sample-source-summary.md)

## Related Entities

- [Sample Entity](../entities/sample-entity.md)

## Related Outputs

- [2026-04-07 LLM Wiki Product Architecture Note](../outputs/2026-04-07-llm-wiki-product-architecture-note.md)
- [2026-04-07 LLM Wiki Repo and App Architecture](../outputs/2026-04-07-llm-wiki-repo-and-app-architecture.md)
- [2026-04-07 Which Persistence Layers Should Be Primary, Secondary, or Supporting in an LLM Wiki?](../outputs/2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md)

## Open Questions

- At what scale does a plain-text index stop being enough for discovery?
