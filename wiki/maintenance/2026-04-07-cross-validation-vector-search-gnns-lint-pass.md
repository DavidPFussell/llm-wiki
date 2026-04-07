---
title: 2026-04-07 Cross-validation, Vector Search, and GNNs Lint Pass
type: maintenance
status: active
created: 2026-04-07
updated: 2026-04-07
sources:
  - ../outputs/2026-04-07-cross-validation-cluster-map.md
  - ../outputs/2026-04-07-vector-search-cluster-map.md
  - ../outputs/2026-04-07-gnns-cluster-map.md
tags:
  - maintenance
  - lint
confidence: medium
---

# 2026-04-07 Cross-validation, Vector Search, and GNNs Lint Pass

## Main Findings

- **Cross-validation is method-coherent but small**: it works best as a support cluster feeding evaluation discipline into clustering and broader ML practice.
- **Vector Search is infrastructure-heavy**: it is useful and relevant, but it currently wants to stay tightly coupled to RAG and retrieval rather than grow into a huge standalone branch.
- **GNNs now deserve to be treated as a distinct graph-learning subcluster**: they are specific enough and connected enough to the knowledge-graph and representation-learning areas to warrant their own identity.

## Recommended Next Steps

- Create a graph-learning topical index that links `Knowledge Graphs` and `GNNs`.
- Backfill `sources` frontmatter on the new concepts added in this pass.
- Consider a retrieval-infrastructure comparison note linking `Vector Search`, `RAG`, and persistent wiki compilation.
