---
title: Agent Harnesses
type: concept
status: active
created: 2026-04-06
updated: 2026-04-06
sources:
  - ../sources/autoharness-improving-llm-agents-by-automatically-synthesizing-a-code-harness.md
  - ../sources/meta-harness-end-to-end-optimization-of-model-harnesses.md
  - ../sources/building-ai-coding-agents-for-the-terminal-scaffolding-harness-context-engineering-and-lessons-learned.md
  - ../sources/from-static-templates-to-dynamic-runtime-graphs-a-survey-of-workflow-optimization-for-llm-agents.md
tags:
  - concept
  - agents
  - harnesses
confidence: medium
---

# Agent Harnesses

## Definition

Agent harnesses are the code-level control structures around a model that determine what information is retrieved, stored, transformed, and presented to the model during execution.

## Why It Matters

Several papers in this collection argue that model quality alone is not enough. Harness design often determines legality of actions, memory effectiveness, context efficiency, and overall task performance.

## Current Synthesis

- `AutoHarness` treats harnesses as artifacts that can be synthesized automatically from environment feedback.
- `Meta-Harness` treats harness design as an outer-loop search problem over executable code.
- `Building AI Coding Agents for the Terminal` treats harnessing and context engineering as practical system-design problems for autonomous coding agents.

## Related Sources

- [AutoHarness: improving LLM agents by automatically synthesizing a code harness](../sources/autoharness-improving-llm-agents-by-automatically-synthesizing-a-code-harness.md)
- [Meta-Harness: End-to-End Optimization of Model Harnesses](../sources/meta-harness-end-to-end-optimization-of-model-harnesses.md)
- [Building AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned](../sources/building-ai-coding-agents-for-the-terminal-scaffolding-harness-context-engineering-and-lessons-learned.md)
