---
title: LLM Cluster Map
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../concepts/prompt-engineering.md
  - ../concepts/llm-landscape.md
tags:
  - output
  - synthesis
  - llm
confidence: medium
---

# LLM Cluster Map

## Question

What are the main research threads inside the current `LLM` folder, and how should this part of the wiki be organized as ingestion continues?

## Executive Summary

The `LLM` folder is currently more foundational than application-specific. Its strongest threads are:

- prompt engineering and in-context learning
- broad LLM landscape and ecosystem framing
- model adaptation and efficiency
- long-context and document modeling
- reasoning-oriented training methods

Compared with the `Agent` and `agents` folders, this cluster is less about orchestration and more about model behavior, training, and adaptation.

## Main Threads

### 1. Prompt Engineering and In-Context Learning

This is one of the strongest and most historically central threads in the folder.

Representative papers:

- [A Survey of Prompt Engineering Methods](../sources/a-survey-of-prompt-engineering-methods.md)
- [Chain of Thought Prompting](../sources/chain-of-thought-prompting.md)
- [Language Models are Few-Shot Learners](../sources/language-models-are-few-shot-learners.md)
- [Efficient Few-Shot Learning Without Prompts](../sources/efficient-few-shot-learning-without-prompts.md)

Key internal distinctions:

- prompt-heavy versus prompt-free adaptation
- few-shot prompting versus learned reasoning
- task-specific prompting versus general prompting taxonomies

### 2. LLM Landscape and Model Ecosystem

This thread provides the high-level backbone for understanding the model ecosystem.

Representative sources:

- [A Survey of LLMs](../sources/a-survey-of-llms.md)
- [LLaMA](../sources/llama.md)
- [AI Index Report 2024](../sources/hai-ai-index-report-2024.md)
- [Databricks State of Data and AI 2024](../sources/databricks-state-of-data-and-ai-2024.md)
- [Dataiku: Beyond the Chatbot](../sources/dataiku-beyond-the-chatbot.md)

This thread mixes technical surveys with ecosystem and enterprise reports. That is fine, but it suggests the folder may later benefit from separating technical references from industry context.

### 3. Adaptation and Efficiency

This is the clearest emerging technical subthread after prompting.

Representative papers:

- [How to Fine Tune BERT for Text Classification](../sources/how-to-fine-tune-bert-for-text-classification.md)
- [Representation Finetuning for LLMs](../sources/representation-finetuning-for-llms.md)
- [PERL: Parameter Efficient Reinforcement Learning](../sources/perl-parameter-efficient-reinforcement-learning.md)
- [Multi-token Prediction](../sources/multi-token-prediction.md)

Key distinctions:

- full fine-tuning versus efficient fine-tuning
- weight edits versus representation edits
- training efficiency versus inference efficiency

### 4. Long-Context and Document Modeling

This thread matters because many real workflows, including your wiki workflow, are document-heavy rather than short-prompt-heavy.

Representative papers:

- [An Exploration of HAT](../sources/an-exploration-of-hat.md)
- [Hierarchical Transformers for Long Document Classification](../sources/hierarchical-transformers-for-long-document-classification.md)
- [Evaluating LLMs on Document Based Question Answering](../sources/evaluating-llms-on-document-based-question-answering.md)

This area is likely to become more important once ingestion reaches more RAG and retrieval papers.

### 5. Reasoning-Oriented Training

This thread overlaps with prompting but is better thought of as model-training work aimed at improving reasoning generally.

Representative papers:

- [Quiet-STaR](../sources/quiet-star.md)
- [Chain of Thought Prompting](../sources/chain-of-thought-prompting.md)
- [Language Models are Few-Shot Learners](../sources/language-models-are-few-shot-learners.md)

The useful distinction here is:

- eliciting reasoning from models
- training models to reason more effectively

## Candidate Canonical Entities

The strongest candidate entities from the current `LLM` cluster appear to be:

- `LLaMA`
- `GPT-3`
- `Quiet-STaR`
- `ReFT`
- `TabPFN`

These are the clearest named systems or methods likely to recur across later ingestion.

## Organization Advice

As this folder grows, it will likely need at least three sub-indexes:

- foundational models and surveys
- prompting and reasoning
- adaptation and efficiency

For now, keeping them under the broader `llm-and-agents` index is still manageable, but that probably will not remain true for long.

## Takeaway

The `LLM` folder is currently the model-and-method substrate beneath the more system-oriented `Agent` and `agents` folders. The latter ask how agents are organized and improved; this folder asks how the underlying models are trained, adapted, prompted, and evaluated.

## Follow-up

- Create canonical entities for the strongest named model families and methods
- Continue with `LLM` batch 3
- Consider a comparison page for prompting versus fine-tuning versus representation editing
