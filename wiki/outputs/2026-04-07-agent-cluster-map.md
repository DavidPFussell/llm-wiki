---
title: Agent Cluster Map
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../concepts/agent-orchestration.md
  - ../concepts/scientific-discovery-agents.md
  - ../concepts/agentic-coding.md
  - ../concepts/autonomous-data-science-agents.md
  - ../concepts/agentic-information-retrieval.md
  - ../concepts/agent-evaluation.md
tags:
  - output
  - synthesis
  - agents
confidence: medium
---

# Agent Cluster Map

## Question

What are the main research threads inside the broader `Agent` folder, and which systems seem central enough to become canonical entities?

## Executive Summary

The `Agent` folder is broader and more systems-oriented than the already-ingested `agents` folder. It contains at least six distinct but overlapping threads:

- agent orchestration
- scientific discovery agents
- agentic coding
- autonomous data science agents
- agentic information retrieval
- agent evaluation

Compared with the `agents` folder, this cluster is less centered on recursive self-improvement and more centered on architecture, coordination, application domains, and reliability.

## Main Threads

### 1. Agent Orchestration

This is the strongest thread in the current `Agent` folder. The central question is how multi-agent systems should be routed, decomposed, coordinated, and governed.

Representative papers:

- [AOrchestra](../sources/aorchestra-automating-sub-agent-creation-for-agentic-orchestration.md)
- [Federation of Agents](../sources/federation-of-agents.md)
- [Google Agents Whitepaper](../sources/google-agents-whitepaper.md)
- [If You Want Coherence, Orchestrate a Team of Rivals](../sources/if-you-want-coherence-orchestrate-a-team-of-rivals.md)
- [Intelligent AI Delegation](../sources/intelligent-ai-delegation.md)
- [Towards a Science of Collective AI](../sources/towards-a-science-of-collective-ai.md)

Key axes inside this thread:

- static versus dynamic orchestration
- heuristic versus principled delegation
- coordination for capability versus coordination for reliability

### 2. Scientific Discovery Agents

This thread treats research itself as an agentic process, not just question answering.

Representative papers:

- [A Survey on Large Language Models in Scientific Discovery](../sources/a-survey-on-large-language-models-in-scientific-discovery.md)
- [Accelerating Scientific Research with Gemini](../sources/accelerating-scientific-research-with-gemini.md)
- [IterResearch](../sources/iterresearch-rethinking-long-horizon-agents-via-markovian-workspace-reconstruction.md)
- [MARS](../sources/mars-modular-agent-with-reflective-search-for-automated-ai-research.md)

This is especially relevant to your wiki project because these systems are all, in different ways, trying to construct durable research artifacts over time.

### 3. Agentic Coding

This thread focuses on software engineering as a long-horizon, multi-step, tool-heavy agent problem.

Representative papers:

- [Agyn](../sources/agyn-a-multi-agent-system-for-team-based-autonomous-software-engineering.md)
- [FullStack-Agent](../sources/fullstack-agent-enhancing-agentic-full-stack-web-coding-via-development-oriented-testing-and-repository-back-translation.md)
- [Surfer 2](../sources/surfer-2.md)

The recurring pattern is that robust coding agents need planning, testing, debugging, execution separation, and repository interaction rather than pure code generation.

### 4. Autonomous Data Science Agents

This thread is highly relevant to knowledge-base and analysis workflows because it centers on generating durable analytical outputs.

Representative papers:

- [Data Agents](../sources/data-agents-levels-state-of-the-art-and-open-problems.md)
- [DeepAnalyze](../sources/deepanalyze-agentic-large-language-models-for-autonomous-data-science.md)
- [Insight Agents](../sources/insight-agents-an-llm-based-multi-agent-system-for-data-insights.md)

This thread overlaps strongly with your own workflow because it moves from raw data toward analyst-grade reports.

### 5. Agentic Information Retrieval

This is a smaller but conceptually important thread.

Representative papers:

- [Agent IR](../sources/agent-ir.md)
- [Tool Learning with Large Language Models: A Survey](../sources/tool-learning-with-large-language-models-a-survey.md)

It helps connect retrieval, tools, and multi-step agent interaction into a single architecture story.

### 6. Agent Evaluation

This thread grounds the whole folder by asking how to assess the systems above in credible ways.

Representative papers:

- [Survey on Evaluation of LLM-based Agents](../sources/survey-on-evaluation-of-llm-based-agents.md)
- [Who Validates the Validators?](../sources/who-validates-the-validators.md)

This thread matters because the rest of the cluster often assumes evaluation can be trusted, while these papers show that evaluation itself is an unresolved design problem.

## Candidate Canonical Entities

The most deserving systems for canonical entity pages from this cluster appear to be:

- `Federation of Agents`
- `AOrchestra`
- `DeepAnalyze`
- `MARS`
- `Surfer 2`
- `Insight Agents`

Why these first:

- they are clearly named systems rather than broad surveys
- they represent distinct threads in the cluster
- they are likely to be referenced repeatedly across future synthesis pages

## Main Takeaway

The `Agent` folder is best understood as the systems-and-application layer above the more self-improvement-focused `agents` folder. If the `agents` cluster studies how agents improve themselves, the `Agent` cluster studies how agents are organized, evaluated, and applied to real workflows such as research, data analysis, software engineering, and retrieval.

## Follow-up

- Create entity pages for the six candidate systems above
- Add `Related Entities` sections to their source pages
- Write a comparison table for orchestration approaches in this cluster
