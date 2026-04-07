---
title: Agents Cluster Map
type: output
status: active
created: 2026-04-06
updated: 2026-04-06
sources:
  - ../concepts/self-improving-agents.md
  - ../concepts/agent-harnesses.md
  - ../concepts/agent-skills.md
  - ../concepts/agent-memory.md
  - ../concepts/workflow-optimization-for-llm-agents.md
  - ../concepts/agentic-reinforcement-learning.md
tags:
  - output
  - synthesis
  - agents
confidence: medium
---

# Agents Cluster Map

## Question

What are the major research threads across the `agents` paper collection, and how do they relate to one another?

## Executive Summary

The `agents` folder is not one single research thread. It is a cluster with at least five strong subareas:

- self-improving agents
- harness and workflow optimization
- skill acquisition and skill infrastructure
- agent memory
- agentic reinforcement learning

The most important connective tissue across the cluster is a shift from static prompt-centric systems toward agents that accumulate structure over time: better code, better harnesses, better memory, better skills, or better policies.

## Main Research Threads

### 1. Self-Improving Agents

This is the most ambitious thread in the collection. The central question is how agents can improve their own future behavior with minimal human intervention.

Representative papers:

- [Darwin Godel Machine](../sources/darwin-godel-machine-open-ended-evolution-of-self-improving-agents.md)
- [Agent0](../sources/agent0-unleashing-self-evolving-agents-from-zero-data-via-tool-integrated-reasoning.md)
- [Hyperagents](../sources/hyperagents.md)
- [SAGE](../sources/sage-self-evolving-agents-with-reflective-and-memory-augmented-abilities.md)
- [Trajectory-Informed Memory Generation](../sources/trajectory-informed-memory-generation-for-self-improving-agent-systems.md)

Key split inside this thread:

- empirical self-improvement via evaluation and search
- memory- or reflection-driven self-improvement
- co-evolutionary self-improvement through curriculum and task pressure

The strongest anchor paper here is [Darwin Godel Machine](../sources/darwin-godel-machine-open-ended-evolution-of-self-improving-agents.md), because it ties self-modification to open-ended archive growth and benchmark-based validation.

### 2. Harness and Workflow Optimization

This thread treats the agent not just as a model, but as a model plus executable scaffolding. The claim is that much of agent performance lives in the harness: what gets retrieved, filtered, stored, verified, or parallelized.

Representative papers:

- [AutoHarness](../sources/autoharness-improving-llm-agents-by-automatically-synthesizing-a-code-harness.md)
- [Meta-Harness](../sources/meta-harness-end-to-end-optimization-of-model-harnesses.md)
- [Building AI Coding Agents for the Terminal](../sources/building-ai-coding-agents-for-the-terminal-scaffolding-harness-context-engineering-and-lessons-learned.md)
- [From Static Templates to Dynamic Runtime Graphs](../sources/from-static-templates-to-dynamic-runtime-graphs-a-survey-of-workflow-optimization-for-llm-agents.md)
- [The Auton Agentic AI Framework](../sources/the-auton-agentic-ai-framework.md)

This is the most systems-oriented part of the cluster. It connects especially well to practical product design because it focuses on code, interfaces, orchestration, and execution constraints rather than on model weights alone.

### 3. Skill Acquisition and Skill Infrastructure

This thread treats procedural capabilities as explicit reusable assets. Instead of assuming the agent must relearn everything from scratch, these papers ask how skills can be discovered, extracted, evaluated, stored, and reused.

Representative papers:

- [EvoSkill](../sources/evoskill-automated-skill-discovery-for-multi-agent-systems.md)
- [SkillNet](../sources/skillnet-create-evaluate-and-connect-ai-skills.md)
- [Automating Skill Acquisition through Large-Scale Mining of Open-Source Agentic Repositories](../sources/automating-skill-acquisition-through-large-scale-mining-of-open-source-agentic-repositories.md)

This thread connects naturally to your LLM Wiki idea because both treat useful structure as something that should persist and compound across tasks.

### 4. Agent Memory

This thread focuses on how agents should retain and operationalize prior experience.

Representative papers:

- [Trajectory-Informed Memory Generation](../sources/trajectory-informed-memory-generation-for-self-improving-agent-systems.md)
- [Multi-Agent Memory from a Computer Architecture Perspective](../sources/multi-agent-memory-from-a-computer-architecture-perspective-visions-and-challenges-ahead.md)
- [SAGE](../sources/sage-self-evolving-agents-with-reflective-and-memory-augmented-abilities.md)

There are two especially important views here:

- memory as extracted learning from trajectories
- memory as systems architecture involving hierarchy, sharing, and consistency

This thread is likely to become more central as your wiki grows, because memory is the nearest analogue to persistent knowledge accumulation inside an agent loop.

### 5. Agentic Reinforcement Learning

This thread studies how RL changes when the model is treated as a long-horizon agent embedded in an environment rather than a single-turn text generator.

Representative papers:

- [The Landscape of Agentic Reinforcement Learning for LLMs](../sources/the-landscape-of-agentic-reinforcement-learning-for-llms-a-survey.md)
- [KARL](../sources/karl-knowledge-agents-via-reinforcement-learning.md)
- [OpenClaw-RL](../sources/openclaw-rl-train-any-agent-simply-by-talking.md)
- [Agent0](../sources/agent0-unleashing-self-evolving-agents-from-zero-data-via-tool-integrated-reasoning.md)

This thread overlaps heavily with self-improvement, but its distinctive lens is learning dynamics in sequential environments.

## Cross-Cutting Axes

Several useful comparison axes cut across the whole cluster:

### Where improvement lives

- codebase
- harness
- memory
- skill library
- policy

### How improvement is produced

- empirical search
- reinforcement learning
- reflection
- trajectory mining
- repository mining

### What persists over time

- agent variants
- reusable skills
- memory artifacts
- workflow graphs
- learned policies

## Suggested Backbone Papers

If the goal is to understand the cluster quickly, the best backbone set appears to be:

- [Darwin Godel Machine](../sources/darwin-godel-machine-open-ended-evolution-of-self-improving-agents.md) for self-improvement
- [From Static Templates to Dynamic Runtime Graphs](../sources/from-static-templates-to-dynamic-runtime-graphs-a-survey-of-workflow-optimization-for-llm-agents.md) for workflow taxonomy
- [The Landscape of Agentic Reinforcement Learning for LLMs](../sources/the-landscape-of-agentic-reinforcement-learning-for-llms-a-survey.md) for RL taxonomy
- [Trajectory-Informed Memory Generation](../sources/trajectory-informed-memory-generation-for-self-improving-agent-systems.md) for experience-based memory
- [SkillNet](../sources/skillnet-create-evaluate-and-connect-ai-skills.md) or [EvoSkill](../sources/evoskill-automated-skill-discovery-for-multi-agent-systems.md) for skill accumulation

## Takeaway

The collection is converging on a common idea: useful agent intelligence is not just a property of the base model. It increasingly lives in durable externalized structure that can be searched, refined, remembered, reused, and evolved. Different subthreads disagree about whether that structure should be code, memory, skills, workflows, or learned policies, but they are all moving away from one-shot prompting toward accumulated systems.

## Follow-up Questions

- Which of these subthreads is most useful for an LLM-maintained wiki product?
- How should memory, skills, and wiki pages be distinguished as different persistence layers?
- Which papers are closest to “knowledge compilation” as opposed to generic agent improvement?
