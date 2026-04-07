# Full Corpus Batch Plan

Concrete ingestion plan for the current `raw/sources/` corpus as of 2026-04-07.

## Current Inventory

Top-level topic folders currently present under `raw/sources/`:

- `Agent`
- `agents`
- `AI`
- `Causal Inference`
- `Causality`
- `Chat-GPT`
- `Clustering`
- `Cross-validation`
- `CX`
- `Data Stream Clustering`
- `GNNs`
- `Grammar`
- `Intent`
- `Knowledge Graphs`
- `Language Models`
- `LLM`
- `Misc`
- `ML`
- `Process Mining`
- `RAG`
- `Reasoning`
- `RL`
- `Sent2Vec`
- `Sentiment`
- `Topic Coherence`
- `Topics`
- `Vector Search`

Largest folders by file count:

- `Chat-GPT`: 56
- `Knowledge Graphs`: 45
- `agents`: 38
- `ML`: 34
- `Clustering`: 34
- `Language Models`: 32
- `Agent`: 28
- `LLM`: 27
- `Grammar`: 22
- `Sent2Vec`: 21

## Recommended Order

The best order is not alphabetical. It should maximize topic coherence and early reuse of concepts.

### Wave 1: LLM / Agent Core

These folders are strongly related and should be ingested first because they share vocabulary, concepts, and likely output pages.

1. `agents`
2. `Agent`
3. `LLM`
4. `Language Models`
5. `Chat-GPT`
6. `RAG`
7. `Reasoning`
8. `RL`

### Wave 2: Knowledge / Retrieval / Structure

9. `Knowledge Graphs`
10. `Vector Search`
11. `Topics`
12. `Topic Coherence`
13. `Sent2Vec`

### Wave 3: ML / Clustering / Methods

14. `ML`
15. `Clustering`
16. `Data Stream Clustering`
17. `Cross-validation`
18. `GNNs`
19. `GNNs/Keyphrase`

### Wave 4: Causality / Applied Domains

20. `Causal Inference`
21. `Causality`
22. `Intent`
23. `Sentiment`
24. `Process Mining`
25. `CX`
26. `Grammar`
27. `AI`
28. `Misc`

## Batch Sizes

Use these default target sizes:

- `25-35` papers per ingest batch for dense technical topics
- `15-25` papers per batch for messier folders with mixed document types
- `1 synthesis pass` after every `2-3` ingest batches within a wave
- `1 lint pass` after each wave

## Concrete Batch Breakdown

### Wave 1

- `W1-B1`: `agents` first 19 papers already ingested, retain as completed cluster
- `W1-B2`: `Agent` first 25 files
- `W1-B3`: remaining `Agent` plus first `LLM` papers
- `W1-B4`: remaining `LLM`
- `W1-B5`: first half of `Language Models`
- `W1-B6`: second half of `Language Models`
- `W1-B7`: first half of `Chat-GPT`
- `W1-B8`: second half of `Chat-GPT`
- `W1-B9`: `RAG` + `Reasoning` + `RL`

Then:

- write a `llm-and-agents` cluster map
- write one comparison page for prompting / reasoning / retrieval
- run a lint pass

### Wave 2

- `W2-B1`: first half of `Knowledge Graphs`
- `W2-B2`: second half of `Knowledge Graphs`
- `W2-B3`: `Vector Search` + `RAG` carryover if needed
- `W2-B4`: `Topics` + `Topic Coherence` + `Sent2Vec`

Then:

- write a `knowledge-and-retrieval` cluster map
- run a lint pass

### Wave 3

- `W3-B1`: first half of `ML`
- `W3-B2`: second half of `ML`
- `W3-B3`: first half of `Clustering`
- `W3-B4`: second half of `Clustering`
- `W3-B5`: `Data Stream Clustering` + `Cross-validation`
- `W3-B6`: `GNNs` + `GNNs/Keyphrase`

Then:

- write a `methods-and-clustering` cluster map
- run a lint pass

### Wave 4

- `W4-B1`: `Causal Inference`
- `W4-B2`: `Causality` + `AI`
- `W4-B3`: `Intent` + `Sentiment` + `Grammar`
- `W4-B4`: `Process Mining` + `CX` + `Misc`

Then:

- write one applied-methods synthesis
- run a final whole-repo lint pass

## Operational Rules

- Extract PDF text for each wave before ingesting that wave.
- Prefer the extracted `.txt` file over the PDF when both exist.
- Update global `index.md` only once per batch.
- Create topical indexes early for big waves, not at the very end.
- Create entity pages only for clearly important named systems, benchmarks, frameworks, or authors that recur.
- Create concept pages when at least `3+` papers clearly support the concept.

## Suggested Supporting Indexes

Add these as the corpus grows:

- `wiki/indexes/llm-and-agents.md`
- `wiki/indexes/knowledge-and-retrieval.md`
- `wiki/indexes/methods-and-clustering.md`
- `wiki/indexes/causality-and-applications.md`

## Expected Effort

This plan yields roughly:

- `18-27` ingest batches
- `4` wave-level synthesis passes
- `4-6` lint passes

That is a good balance between throughput and taxonomy quality.

## Best Immediate Next Step

Begin Wave 1 with:

1. bulk PDF extraction for `raw/sources/Agent`, `raw/sources/LLM`, `raw/sources/Language Models`, `raw/sources/Chat-GPT`, `raw/sources/RAG`, `raw/sources/Reasoning`, and `raw/sources/RL`
2. ingest `W1-B2` from `raw/sources/Agent`
3. create `wiki/indexes/llm-and-agents.md` once the first two Wave 1 batches are complete
