---
title: 2026-04-07 ML Cluster Map
type: output
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../sources/attention-is-all-you-need.md
  - ../sources/bert-pre-training-of-deep-bidirectional-transformers-for-language-understanding.md
  - ../sources/abstractive-text-summarization-using-sequence-to-sequence-rnns.md
  - ../sources/learning-from-imbalanced-data.md
tags:
  - output
  - ml
  - synthesis
confidence: medium
---

# 2026-04-07 ML Cluster Map

## Overview

The `ML` folder is broad and foundational. It combines core deep-learning architecture papers, applied supervised-learning concerns, summarization methods, evaluation metrics, recommender systems, and tooling-oriented references.

## Main Threads

- **Foundational deep NLP and architectures**: [Attention is all you need](../sources/attention-is-all-you-need.md), [BERT](../sources/bert-pre-training-of-deep-bidirectional-transformers-for-language-understanding.md), [Convolutional sequence to sequence learning](../sources/convolutional-sequence-to-sequence-learning.md), and [Recent trends in DL based NLP](../sources/recent-trends-in-dl-based-nlp.md) anchor the architecture and transfer-learning side.
- **Summarization and sequence generation**: [Abstractive text summarization using sequence to sequence RNNs](../sources/abstractive-text-summarization-using-sequence-to-sequence-rnns.md), [Deep Recurrent Generative Decoder for Abstractive Text Summarization](../sources/deep-recurrent-generative-decoder-for-abstractive-text-summarization.md), and [ESPNet](../sources/espnet.md) reinforce summarization and generation workflows.
- **Practical supervised ML and evaluation**: [An Introduction to Feature and Variable Selection](../sources/an-introduction-to-feature-and-variable-selection.md), [Learning from Imbalanced Data](../sources/learning-from-imbalanced-data.md), [Survey of Imbalanced Data Methods](../sources/survey-of-imbalanced-data-methods.md), and [Meaning and use of ROC-AUC](../sources/meaning-and-use-of-roc-auc.md) keep the corpus grounded in everyday ML practice.
- **Recommendation and ranking systems**: [A Survey on Conversational Recommender Systems](../sources/a-survey-on-conversational-recommender-systems.md), [Item-rank](../sources/item-rank-a-random-walk-based-scoring-algorithm-for-recommender-engines.md), and [Monolith](../sources/monolith.md) add an industrial ranking/recommendation thread.
- **Tooling, platforms, and pragmatic workflow**: the SageMaker sources, [ktrain](../sources/ktrain-a-low-code-library-for-augmented-ml.md), and [Hands On Machine Learning](../sources/hands-on-machine-learning-with-scikit-learn-and-tensorflow.md) are less theoretically central but useful for implementation context.

## Current Read

- This folder makes the overall repo healthier by preventing it from becoming only an LLM-and-agents corpus.
- It gives stronger grounding in core ML evaluation, representation learning, and supervised-learning realities.
- The strongest bridge into the rest of the wiki is through Transformer/BERT lineage and through summarization as a practical knowledge-compilation task.

## Strongest Entity Anchors

- [Transformer](../entities/transformer.md)
- [BERT](../entities/bert.md)

## Related Concepts

- [Representation Learning](../concepts/representation-learning.md)
- [Text Summarization](../concepts/text-summarization.md)
- [Tabular and Imbalanced ML](../concepts/tabular-and-imbalanced-ml.md)
