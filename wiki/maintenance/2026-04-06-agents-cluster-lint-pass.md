---
title: Agents Cluster Lint Pass
type: maintenance
status: active
created: 2026-04-06
updated: 2026-04-06
tags:
  - maintenance
  - lint
  - agents
confidence: medium
---

# Agents Cluster Lint Pass

## Scope

Structural lint pass over the `agents` cluster after full-text re-ingest, focusing on taxonomy coverage, cross-link density, and obvious maintenance gaps.

## Findings

- Entity coverage is thin relative to source coverage. There are 20 source pages in [wiki/sources](../sources), 7 concept pages in [wiki/concepts](../concepts), and only 2 entity pages in [wiki/entities](../entities), of which only one is a real paper-derived entity.
- Named systems are mostly represented only as source pages, not as canonical entities. Likely missing entity pages include Agent0, Hyperagents, SAGE, SkillNet, AutoHarness, Meta-Harness, OpenClaw-RL, KARL, and Auton.
- Concept pages have decent backlink density, but the cluster is overly concentrated on [Self-Improving Agents](../concepts/self-improving-agents.md). Other concepts are still relatively shallow and may need more explicit cross-linking from source pages and outputs.
- Only 2 source pages currently include a `Related Entities` section. Most papers therefore connect to concepts but not to canonical named-system pages, which weakens graph structure in Obsidian.
- Several concept pages have empty `sources` arrays in frontmatter even though they clearly summarize multiple source pages. This reduces metadata usefulness for Dataview-style inspection.
- The output layer is growing well, but there is still no canonical overview page for the entire `agents` folder under `wiki/concepts/` or `wiki/indexes/`. The cluster map in outputs helps, but the taxonomy still depends heavily on ad hoc navigation.

## Suggested Fixes

- Create canonical entity pages for the main named agent systems and link source pages to them.
- Backfill `Related Entities` sections across the source pages for named systems.
- Populate the `sources` frontmatter on concept pages so the metadata reflects the real synthesis base.
- Consider adding one new concept page for `Open-Ended Search` or `Agent Evaluation` if those threads keep recurring.
- Consider adding a dedicated `wiki/indexes/agents.md` page that groups the cluster by thread and by paper type.

## Suggested Next Questions

- Which named systems deserve canonical entity pages first?
- Should `self-improvement` be split into narrower sub-concepts such as code self-modification, memory-driven improvement, and policy improvement?
- Would an `agents` topical index be more useful than continuing to rely on the global `index.md` alone?
