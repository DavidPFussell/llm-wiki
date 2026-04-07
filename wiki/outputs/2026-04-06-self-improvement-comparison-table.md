---
title: Self-Improvement Comparison Table
type: output
status: active
created: 2026-04-06
updated: 2026-04-06
sources:
  - ../sources/darwin-godel-machine-open-ended-evolution-of-self-improving-agents.md
  - ../sources/agent0-unleashing-self-evolving-agents-from-zero-data-via-tool-integrated-reasoning.md
  - ../sources/hyperagents.md
  - ../sources/sage-self-evolving-agents-with-reflective-and-memory-augmented-abilities.md
  - ../sources/trajectory-informed-memory-generation-for-self-improving-agent-systems.md
  - ../sources/openclaw-rl-train-any-agent-simply-by-talking.md
tags:
  - output
  - comparison
  - agents
  - self-improvement
confidence: medium
---

# Self-Improvement Comparison Table

## Question

How do the main self-improvement papers in the `agents` cluster differ in what they improve, how they improve it, and what persists over time?

## Table

| Paper | What Improves | Main Mechanism | Persistence Layer | Distinctive Strength | Main Risk / Limitation |
| --- | --- | --- | --- | --- | --- |
| [Darwin Godel Machine](../sources/darwin-godel-machine-open-ended-evolution-of-self-improving-agents.md) | Coding-agent codebase and future self-modification ability | Empirical self-modification plus open-ended archive search | Archive of agent variants | Strongest open-ended framing and clearest benchmarked self-improvement loop | Can overfit to benchmark-driven evolutionary search |
| [Agent0](../sources/agent0-unleashing-self-evolving-agents-from-zero-data-via-tool-integrated-reasoning.md) | Agent reasoning and curriculum difficulty | Curriculum-executor co-evolution with tools | Self-generated curriculum and evolved behaviors | Strong zero-data framing and explicit task-pressure loop | Improvement may depend heavily on the frontier quality of generated tasks |
| [Hyperagents](../sources/hyperagents.md) | Unified task-level and meta-level agent program | Self-referential meta-agent editing | Editable integrated agent program | Most explicit meta-agent unification | Less concrete in the current wiki than DGM on evaluation structure |
| [SAGE](../sources/sage-self-evolving-agents-with-reflective-and-memory-augmented-abilities.md) | Long-horizon task behavior | Reflection, feedback, and memory optimization | Optimized memory plus reflective process | Clear reflective architecture and practical long-horizon orientation | Feels less open-ended than archive- or RL-based approaches |
| [Trajectory-Informed Memory Generation](../sources/trajectory-informed-memory-generation-for-self-improving-agent-systems.md) | Future task performance via better recalled learnings | Trajectory analysis plus contextual memory retrieval | Structured memory artifacts with provenance | Best memory-centric account of learning from execution traces | Improvement is mediated through memory quality rather than direct policy change |
| [OpenClaw-RL](../sources/openclaw-rl-train-any-agent-simply-by-talking.md) | Agent policy through ongoing interaction | Live RL from next-state signals | Updated policy from interaction data | Broadest “improve through use” framing across environments | Depends on robust signal quality and online training stability |

## Main Comparison Axes

### 1. Where the improvement lives

- DGM and Hyperagents push improvement into the agent program itself.
- Agent0 pushes improvement into the self-generated curriculum and resulting behaviors.
- Trajectory-Informed Memory Generation and SAGE push improvement into memory and reflective guidance.
- OpenClaw-RL pushes improvement into the learned policy.

### 2. How explicit the improvement loop is

- DGM and Agent0 have the clearest explicit outer loops.
- SAGE and Trajectory-Informed Memory Generation are more mediated through reflection and retrieval.
- Hyperagents is strongest conceptually on self-reference.
- OpenClaw-RL is strongest on continual update from real interaction.

### 3. How reusable the resulting artifact is

- Skills and memory artifacts are easiest to inspect and reuse.
- Agent archives are reusable but more system-specific.
- Learned policies may be strongest in performance terms but are less interpretable.

## Working Takeaway

The papers are not all trying to do the same thing. They share the label of self-improvement, but differ sharply in the persistence layer they optimize:

- code
- curriculum
- memory
- meta-control structure
- policy

That distinction is probably the most useful one for future analysis in this wiki.
