# Log

Append-only operational history for ingest, query, lint, and maintenance work.

## [2026-04-05] maintenance | Starter repo scaffold

Summary:
Created the initial LLM Wiki starter structure, schema, templates, and seed pages.

Touched files:
- `README.md`
- `AGENTS.md`
- `index.md`
- `log.md`
- `templates/`
- `wiki/`
- `docs/`

Notes:
- This is a seed state meant to teach the pattern to future agent sessions.
- The next useful step is to add a real source to `raw/sources/` and run the first true ingest.

## [2026-04-06] ingest | Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents

Summary:
Ingested the first real source from `raw/sources/agents/` and created a source summary plus initial entity and concept pages for the agent-research cluster.

Touched files:
- `wiki/sources/darwin-godel-machine-open-ended-evolution-of-self-improving-agents.md`
- `wiki/entities/darwin-godel-machine.md`
- `wiki/concepts/self-improving-agents.md`
- `index.md`
- `log.md`

Notes:
- The local environment could not cleanly extract full PDF text, so this first-pass ingest uses the local PDF metadata together with the arXiv abstract and metadata page.
- The new source establishes an initial taxonomy around self-improving agents and open-ended evolutionary search.
- Good next ingests in this cluster would likely include papers on harness optimization, skill discovery, and agent memory so the concept page can become more comparative rather than single-source.

## [2026-04-06] ingest | Batch ingest of remaining papers in raw/sources/agents

Summary:
Ingested the remaining papers in the `agents` source folder as concise first-pass source summaries and expanded the shared concept taxonomy around harnesses, skills, memory, workflows, and agentic RL.

Touched files:
- `wiki/sources/`
- `wiki/concepts/agent-harnesses.md`
- `wiki/concepts/agent-skills.md`
- `wiki/concepts/agent-memory.md`
- `wiki/concepts/workflow-optimization-for-llm-agents.md`
- `wiki/concepts/agentic-reinforcement-learning.md`
- `wiki/concepts/self-improving-agents.md`
- `index.md`
- `log.md`

Notes:
- Because the local environment still lacks a reliable PDF text extractor, these source pages are first-pass summaries built from paper metadata, abstracts, and search results rather than full local body-text parsing.
- The `agents` cluster now has enough coverage for comparative querying across self-improvement, harness design, skill accumulation, memory systems, workflow optimization, and RL.
- The next high-value maintenance step would be a lint pass to detect duplicate taxonomy, then a query pass that synthesizes a map of the whole cluster.

## [2026-04-06] maintenance | Local PDF extraction wired into repo

Summary:
Installed a portable local PDF text extractor, added wrapper scripts, and bulk-extracted sibling `.txt` files for every PDF in `raw/sources/agents/`.

Touched files:
- `tools/`
- `scripts/extract-pdf-text.ps1`
- `scripts/extract-all-pdfs.ps1`
- `docs/pdf-extraction.md`
- `README.md`
- `AGENTS.md`
- `raw/sources/agents/*.txt`
- `log.md`

Notes:
- Extraction now works locally and produced one `.txt` file for each PDF in the `agents` folder.
- Sample spot checks show the extracted text is good enough for real body-text ingest, though some PDFs still contain minor character-encoding artifacts.
- The next quality step is to re-ingest the most important papers from their extracted `.txt` files and upgrade the current first-pass abstract-based summaries.

## [2026-04-06] ingest | Re-ingest of all papers in raw/sources/agents from extracted text

Summary:
Upgraded the `agents` paper cluster from abstract-driven first-pass summaries to text-backed source pages by reading the extracted sibling `.txt` files for every PDF.

Touched files:
- `wiki/sources/`
- `wiki/concepts/self-improving-agents.md`
- `log.md`

Notes:
- Every source page in the `agents` cluster now records both the original PDF and the extracted text file in its provenance.
- The content is now grounded in local full-text extraction rather than abstract-only summaries, although a few papers may still contain minor OCR or encoding artifacts from the extractor.
- A useful next step would be a targeted synthesis page comparing the main research threads across the cluster now that the text base is in place.

## [2026-04-06] query | Map the major research threads across the agents cluster

Summary:
Created a filed synthesis page that organizes the `agents` source collection into major subareas and identifies the main conceptual axes that connect them.

Touched files:
- `wiki/outputs/2026-04-06-agents-cluster-map.md`
- `index.md`
- `log.md`

Notes:
- The synthesis emphasizes five main threads: self-improving agents, harness/workflow optimization, skills, memory, and agentic RL.
- This output should make future comparative queries much easier because it provides a higher-level map of the collection.

## [2026-04-06] query | Compare the self-improvement papers in the agents cluster

Summary:
Created a filed comparison table contrasting the main self-improvement papers by what they improve, how they improve it, and what persistence layer they optimize.

Touched files:
- `wiki/outputs/2026-04-06-self-improvement-comparison-table.md`
- `index.md`
- `log.md`

Notes:
- The strongest organizing distinction is not just “self-improvement” but where the durable improvement artifact lives: code, curriculum, memory, meta-control, or policy.

## [2026-04-06] lint | Structural lint pass over the agents cluster

Summary:
Ran a structural lint pass over the `agents` cluster and recorded the main taxonomy and linking gaps.

Touched files:
- `wiki/maintenance/2026-04-06-agents-cluster-lint-pass.md`
- `index.md`
- `log.md`

Notes:
- The largest current gap is thin entity coverage relative to the number of named systems in the source set.
- A second major gap is that concept-page frontmatter does not yet fully reflect the papers summarized in those concepts.

## [2026-04-06] maintenance | Add canonical entity pages for core named systems in the agents cluster

Summary:
Created canonical entity pages for the main named agent systems and backfilled `Related Entities` links into the matching source pages.

Touched files:
- `wiki/entities/agent0.md`
- `wiki/entities/autoharness.md`
- `wiki/entities/meta-harness.md`
- `wiki/entities/hyperagents.md`
- `wiki/entities/karl.md`
- `wiki/entities/openclaw-rl.md`
- `wiki/entities/sage.md`
- `wiki/entities/skillnet.md`
- `wiki/entities/auton.md`
- `wiki/sources/`
- `index.md`
- `log.md`

Notes:
- This materially improves the graph structure of the `agents` cluster by separating named systems from source-summary pages.
- The next cleanup pass should likely populate concept-page frontmatter `sources` arrays and add a topical index for the agents cluster.

## [2026-04-06] maintenance | Populate concept-page source metadata for the agents cluster

Summary:
Updated the main concept pages so their `sources` frontmatter now reflects the papers each concept synthesizes.

Touched files:
- `wiki/concepts/agent-harnesses.md`
- `wiki/concepts/agent-skills.md`
- `wiki/concepts/agent-memory.md`
- `wiki/concepts/workflow-optimization-for-llm-agents.md`
- `wiki/concepts/agentic-reinforcement-learning.md`
- `wiki/concepts/self-improving-agents.md`
- `log.md`

Notes:
- This makes the concept layer more honest and more useful for metadata-driven views such as Dataview.
- The next likely cleanup would be a dedicated topical index page for `agents`, since the cluster is now large enough to justify one.

## [2026-04-06] maintenance | Add a dedicated topical index for the agents cluster

Summary:
Created a local navigation hub for the `agents` cluster so it can be browsed by thread, named system, and key synthesis outputs.

Touched files:
- `wiki/indexes/agents.md`
- `index.md`
- `log.md`

Notes:
- This should make the cluster much easier to navigate in Obsidian without relying entirely on the global index.

## [2026-04-07] maintenance | Create full-corpus batch plan from raw source folder structure

Summary:
Reviewed the current `raw/sources/` folder organization and created a concrete staged batch plan for ingesting the full corpus into the wiki.

Touched files:
- `docs/full-corpus-batch-plan.md`
- `log.md`

Notes:
- The corpus is already organized enough to ingest by topical waves instead of flattening everything.
- The recommended starting point is Wave 1, which groups the LLM and agent-adjacent folders first because they share concepts and can reuse taxonomy work.

## [2026-04-07] maintenance | Start Wave 1 extraction for LLM and agent folders

Summary:
Started bulk PDF text extraction for the first LLM-and-agent wave, covering `Agent`, `LLM`, `Language Models`, `Chat-GPT`, `RAG`, `Reasoning`, and `RL`.

Touched files:
- `raw/sources/Agent/*.txt`
- `raw/sources/LLM/*.txt`
- `raw/sources/Language Models/*.txt`
- `raw/sources/Chat-GPT/*.txt`
- `log.md`

Notes:
- The long extraction run timed out at the shell level, but it still produced a large number of extracted `.txt` files before timing out.
- Some PDFs emitted Xpdf syntax warnings; these look like extraction-quality issues rather than total failures and can be handled incrementally.

## [2026-04-07] ingest | Wave 1 batch 1 from raw/sources/Agent

Summary:
Created the first real `Agent` batch in the wiki and added a new `llm-and-agents` topical index to organize the broader wave.

Touched files:
- `wiki/sources/`
- `wiki/concepts/agent-orchestration.md`
- `wiki/concepts/scientific-discovery-agents.md`
- `wiki/concepts/agentic-coding.md`
- `wiki/concepts/autonomous-data-science-agents.md`
- `wiki/concepts/agentic-information-retrieval.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- This batch establishes a useful substructure around orchestration, scientific discovery agents, coding agents, data agents, and agentic IR.
- The next clean move is to ingest the next `Agent` batch and then decide whether any of these topics deserve entity pages already.

## [2026-04-07] ingest | Wave 1 batch 2 from raw/sources/Agent

Summary:
Ingested the second `Agent` batch, expanding the wave with stronger coverage of orchestration, delegation, long-horizon research agents, evaluation, and collective multi-agent science.

Touched files:
- `wiki/sources/`
- `wiki/concepts/agent-evaluation.md`
- `wiki/indexes/llm-and-agents.md`
- `log.md`

Notes:
- This batch makes the `Agent` folder much more coherent by adding a real evaluation thread and strengthening the orchestration thread.
- The next good cleanup step is likely a synthesis page for the `Agent` folder or entity pages for the most central named systems in this wave.

## [2026-04-07] query | Map the major research threads in the Agent folder

Summary:
Created a filed synthesis page that organizes the broader `Agent` folder into its main subthreads and nominates the strongest candidates for canonical entity pages.

Touched files:
- `wiki/outputs/2026-04-07-agent-cluster-map.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- The strongest candidate entities from this wave are currently Federation of Agents, AOrchestra, DeepAnalyze, MARS, Surfer 2, and Insight Agents.

## [2026-04-07] maintenance | Add canonical entity pages for key systems in the Agent folder

Summary:
Created canonical entity pages for the strongest named systems in the current `Agent` wave and backfilled `Related Entities` sections into their source pages.

Touched files:
- `wiki/entities/federation-of-agents.md`
- `wiki/entities/aorchestra.md`
- `wiki/entities/deepanalyze.md`
- `wiki/entities/mars.md`
- `wiki/entities/surfer-2.md`
- `wiki/entities/insight-agents.md`
- `wiki/sources/`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- This gives the `Agent` cluster the same separation between named systems and source-summary pages that already improved the `agents` cluster.

## [2026-04-07] ingest | Wave 1 batch 1 from raw/sources/LLM

Summary:
Started the `LLM` folder with a foundational batch covering prompting, broad LLM surveys, evaluation, and a small number of ecosystem and application-adjacent references.

Touched files:
- `wiki/sources/`
- `wiki/concepts/prompt-engineering.md`
- `wiki/concepts/llm-landscape.md`
- `wiki/indexes/llm-and-agents.md`
- `log.md`

Notes:
- This batch is more foundational and survey-heavy than the `Agent` batches, so it uses a lighter concept structure.
- Good next moves are either a second `LLM` batch or a small synthesis page for the emerging `LLM` cluster.

## [2026-04-07] ingest | Wave 1 batch 2 from raw/sources/LLM

Summary:
Expanded the `LLM` folder with a second batch focused on long-context modeling, model families, efficient adaptation, and reasoning/training methods.

Touched files:
- `wiki/sources/`
- `wiki/indexes/llm-and-agents.md`
- `log.md`

Notes:
- This batch gives the `LLM` cluster a stronger identity around adaptation methods and model mechanics, not just surveys and reports.
- The next useful step is likely a synthesis page for the `LLM` folder before continuing deeper into later batches.

## [2026-04-07] query | Map the major research threads in the LLM folder

Summary:
Created a filed synthesis page that organizes the current `LLM` folder into its main subthreads and identifies the strongest candidate canonical entities.

Touched files:
- `wiki/outputs/2026-04-07-llm-cluster-map.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- The strongest current candidate entities are LLaMA, GPT-3, Quiet-STaR, ReFT, and TabPFN.

## [2026-04-07] maintenance | Complete extracted text coverage for Chat-GPT and RAG

Summary:
Filled the remaining extracted-text gaps for the `Chat-GPT` and `RAG` folders so future ingest can rely on local `.txt` siblings rather than metadata-only summaries.

Touched files:
- `raw/sources/Chat-GPT/*.txt`
- `raw/sources/RAG/*.txt`
- `scripts/extract-all-pdfs.ps1`
- `log.md`

Notes:
- The extraction helper behaved noisily and appears to have walked more of the corpus than intended, but the practical outcome for these folders is good: both now have full PDF-to-TXT coverage.
- Some extracted files still contain encoding artifacts and should be cleaned only if they become central to deeper synthesis.

## [2026-04-07] ingest | First-pass ingest for Language Models, Chat-GPT, and RAG

Summary:
Added the next three Wave 1 folders to the wiki with first-pass source pages, a stronger concept backbone, and initial graph anchors for the most central named systems.

Touched files:
- `scripts/ingest-folder-first-pass.ps1`
- `wiki/sources/`
- `wiki/concepts/in-context-learning.md`
- `wiki/concepts/language-model-architecture.md`
- `wiki/concepts/llm-evaluation-and-benchmarking.md`
- `wiki/concepts/hallucination-mitigation.md`
- `wiki/concepts/retrieval-augmented-generation.md`
- `wiki/concepts/knowledge-graph-augmented-llms.md`
- `wiki/entities/lamda.md`
- `wiki/entities/gato.md`
- `wiki/entities/longformer.md`
- `wiki/entities/agentbench.md`
- `wiki/entities/graph-of-thoughts.md`
- `wiki/entities/self-instruct.md`
- `wiki/entities/raft.md`
- `wiki/entities/rankrag.md`
- `wiki/entities/hirag.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- `Language Models` broadens the corpus toward architecture and historical language-modeling lineage.
- `Chat-GPT` is the most prompt-heavy and application-facing folder in the current wave.
- `RAG` is compact but already coherent, especially around ranking, hierarchy, and agentic retrieval.

## [2026-04-07] query | Map the major research threads in Language Models, Chat-GPT, and RAG

Summary:
Created filed synthesis pages for the three newly ingested folders so they are immediately navigable as clusters rather than only as collections of source summaries.

Touched files:
- `wiki/outputs/2026-04-07-language-models-cluster-map.md`
- `wiki/outputs/2026-04-07-chat-gpt-cluster-map.md`
- `wiki/outputs/2026-04-07-rag-cluster-map.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- The strongest new entity anchors from this wave are LaMDA, Gato, Longformer, AgentBench, Graph of Thoughts, Self-Instruct, RAFT, RankRAG, and HIRAG.
- The next natural continuation points are `Reasoning` and `RL`, plus a cleanup pass on duplicate or overlapping prompt/reasoning sources across `LLM`, `Language Models`, and `Chat-GPT`.

## [2026-04-07] ingest | First-pass ingest for Reasoning and RL

Summary:
Added the `Reasoning` and `RL` folders to the wiki with text-backed source pages, new reasoning/RL concept pages, and canonical entity anchors for the strongest named systems.

Touched files:
- `wiki/sources/`
- `wiki/concepts/llm-post-training.md`
- `wiki/concepts/test-time-reasoning.md`
- `wiki/concepts/reinforcement-learning-for-llms.md`
- `wiki/entities/deepseek-r1.md`
- `wiki/entities/react.md`
- `wiki/entities/titans.md`
- `wiki/entities/deepsearch.md`
- `wiki/entities/nemotron-cascade.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- `Reasoning` is strongest when split into post-training, inference-time scaffolds, search, and memory rather than treated as one undifferentiated topic.
- `RL` currently looks like a support cluster for both reasoning models and agentic RL, not a standalone wave.

## [2026-04-07] lint | Wave 1 overlap cleanup across LLM, Language Models, Chat-GPT, Reasoning, and RL

Summary:
Created a cleanup pass covering duplicate source pages and concept overlap across the growing Wave 1 LLM-and-agents surface.

Touched files:
- `wiki/sources/darwin-godel-machine.md`
- `wiki/maintenance/2026-04-07-wave-1-overlap-cleanup-pass.md`
- `wiki/outputs/2026-04-07-reasoning-cluster-map.md`
- `wiki/outputs/2026-04-07-rl-cluster-map.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- The duplicate `Darwin Godel Machine` page is now retained as a superseded redirect-style record pointing to the richer canonical page.
- The main conceptual boundary to preserve going forward is between prompting, test-time reasoning, post-training, and RAG.

## [2026-04-07] query | Compare prompting, search, post-training, and memory as reasoning paradigms

Summary:
Created a filed comparison page contrasting the main reasoning paradigms currently represented in the corpus and tied them back to the LLM Wiki pattern.

Touched files:
- `wiki/outputs/2026-04-07-reasoning-paradigms-comparison.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- The current read is that the LLM Wiki pattern sits most naturally in the memory-and-structure quadrant and complements rather than replaces the other paradigms.

## [2026-04-07] ingest | First-pass ingest for Knowledge Graphs and ML

Summary:
Added the `Knowledge Graphs` and `ML` folders to the wiki with full source-page coverage, new concept pages, and a handful of canonical entities for the strongest anchors.

Touched files:
- `wiki/sources/`
- `wiki/concepts/knowledge-graph-reasoning.md`
- `wiki/concepts/graph-representation-learning.md`
- `wiki/concepts/knowledge-graph-construction.md`
- `wiki/concepts/representation-learning.md`
- `wiki/concepts/text-summarization.md`
- `wiki/concepts/tabular-and-imbalanced-ml.md`
- `wiki/entities/babelnet.md`
- `wiki/entities/yago.md`
- `wiki/entities/node2vec.md`
- `wiki/entities/bert.md`
- `wiki/entities/transformer.md`
- `index.md`
- `log.md`

Notes:
- `Knowledge Graphs` is especially relevant to the broader knowledge-compilation thesis because it provides an explicit structured alternative to document-only representations.
- `ML` acts more like a broad support library right now than a tightly scoped topical wave.

## [2026-04-07] query | Map the major research threads in Knowledge Graphs and ML

Summary:
Created filed synthesis pages for the new `Knowledge Graphs` and `ML` folders so they are usable as navigable clusters rather than only raw source collections.

Touched files:
- `wiki/outputs/2026-04-07-knowledge-graphs-cluster-map.md`
- `wiki/outputs/2026-04-07-ml-cluster-map.md`
- `index.md`
- `log.md`

Notes:
- The strongest current entity anchors from these two folders are BabelNet, YAGO, node2vec, BERT, and Transformer.

## [2026-04-07] lint | Broader corpus lint pass

Summary:
Ran a broader structural lint pass across the newly expanded corpus and captured the strongest current issues and next cleanup targets.

Touched files:
- `wiki/maintenance/2026-04-07-broader-corpus-lint-pass.md`
- `wiki/indexes/llm-and-agents.md`
- `index.md`
- `log.md`

Notes:
- The main broader-corpus issue now is not missing pages but uneven compression quality: some clusters already have good synthesis, while others still lean heavily on first-pass source summaries.
- The suspiciously overlapping graph-embedding surveys are a good candidate for a targeted duplicate review.

## [2026-04-07] query | Compare structured knowledge systems, retrieval-first systems, and persistent wiki compilation

Summary:
Created a cross-cluster synthesis comparing graph-native knowledge systems, retrieval-first systems, and persistent markdown wiki compilation as different ways of organizing machine-usable knowledge.

Touched files:
- `wiki/outputs/2026-04-07-structured-knowledge-vs-retrieval-vs-persistent-wiki-compilation.md`
- `index.md`
- `log.md`

Notes:
- The current read is that the LLM Wiki pattern is best understood as a middle path: more compounding than retrieval-first systems and more flexible than fully formalized graph systems.

## [2026-04-07] maintenance | Deepen the Knowledge Graphs cluster with more entity anchors and a topical index

Summary:
Added more canonical graph-system entities, backfilled source-page links, and created a dedicated topical index for the `Knowledge Graphs` cluster.

Touched files:
- `wiki/entities/openke.md`
- `wiki/entities/opendialkg.md`
- `wiki/entities/pytorch-biggraph.md`
- `wiki/entities/neo4j.md`
- `wiki/indexes/knowledge-graphs.md`
- `wiki/sources/open-ke.md`
- `wiki/sources/opendialkg.md`
- `wiki/sources/pytorch-biggraph.md`
- `wiki/sources/neo4j-ai-graph-technology-white-paper-en-a4.md`
- `wiki/concepts/knowledge-graph-construction.md`
- `wiki/concepts/graph-representation-learning.md`
- `wiki/concepts/knowledge-graph-reasoning.md`
- `index.md`
- `log.md`

Notes:
- The `Knowledge Graphs` cluster now feels more like a navigable subgraph and less like a loose pile of source pages.
- This cluster is now a good candidate for future comparison work against the markdown-wiki pattern rather than just more raw ingest.

## [2026-04-07] ingest | First-pass ingest for Causal Inference, Causality, Clustering, and AI

Summary:
Added four new non-LLM methodological domains to the wiki with full source-page coverage and a new concept backbone spanning causality, unsupervised structure, and broad AI foundations.

Touched files:
- `wiki/sources/`
- `wiki/concepts/causal-inference.md`
- `wiki/concepts/causal-representation-learning.md`
- `wiki/concepts/instrumental-variables-and-identification.md`
- `wiki/concepts/clustering-and-unsupervised-structure.md`
- `wiki/concepts/cluster-validation-and-robustness.md`
- `wiki/concepts/ai-foundations-and-scaling.md`
- `wiki/concepts/interpretability-and-explanation.md`
- `wiki/entities/umap.md`
- `wiki/entities/dbscan.md`
- `wiki/entities/gopher.md`
- `index.md`
- `log.md`

Notes:
- These clusters shift the repo beyond LLM-and-agent systems toward epistemology, unsupervised structure, and broader AI framing.
- `Causal Inference` is already unusually coherent at the concept level, while `AI` is intentionally broad and should be deepened selectively.

## [2026-04-07] query | Map the major research threads in Causal Inference, Clustering, and AI

Summary:
Created filed synthesis pages for the new causality, clustering, and AI areas, plus a lint note describing their current structural strengths and next cleanup targets.

Touched files:
- `wiki/outputs/2026-04-07-causal-inference-cluster-map.md`
- `wiki/outputs/2026-04-07-clustering-cluster-map.md`
- `wiki/outputs/2026-04-07-ai-cluster-map.md`
- `wiki/maintenance/2026-04-07-causality-clustering-ai-lint-pass.md`
- `index.md`
- `log.md`

Notes:
- The most promising next synthesis directions from these areas are clustering paradigms, and causality vs interpretability vs explanation.

## [2026-04-07] query | Compare clustering paradigms and validation strategies

Summary:
Created a filed comparison note covering major clustering families and the practical validation heuristics most relevant to exploratory structure discovery.

Touched files:
- `wiki/outputs/2026-04-07-clustering-paradigms-and-validation-strategies.md`
- `wiki/concepts/cluster-validation-and-robustness.md`
- `index.md`
- `log.md`

Notes:
- The main practical takeaway is to treat clustering as an exploratory support tool and to emphasize robustness over single-score optimization.

## [2026-04-07] query | Compare causality, interpretability, and explanation

Summary:
Created a filed synthesis clarifying the distinction between causal claims about the world, interpretability claims about models, and explanation as a human-facing understanding layer.

Touched files:
- `wiki/outputs/2026-04-07-causality-vs-interpretability-vs-explanation.md`
- `wiki/concepts/causal-inference.md`
- `wiki/concepts/interpretability-and-explanation.md`
- `index.md`
- `log.md`

Notes:
- This should help keep future wiki pages honest about whether they are making causal claims, model-behavior claims, or explanatory narratives.

## [2026-04-07] maintenance | Create broader non-LLM methods and foundations index

Summary:
Created a second broad navigation layer covering causality, clustering, AI foundations, and graph-based knowledge methods so the repo is not organized only around the LLM wave.

Touched files:
- `wiki/indexes/methods-and-foundations.md`
- `index.md`
- `log.md`

Notes:
- The repo now has a cleaner split between the LLM/agents wave and the broader methodological/foundational layer.

## [2026-04-07] maintenance | Create dedicated Clustering and Causality topical indexes

Summary:
Created dedicated navigation hubs for the clustering and causality areas so those clusters can now be traversed directly rather than only through the broader methods layer.

Touched files:
- `wiki/indexes/clustering.md`
- `wiki/indexes/causality.md`
- `index.md`
- `log.md`

Notes:
- This gives the non-LLM side of the repo more local structure, mirroring the more mature LLM-and-agents navigation pattern.

## [2026-04-07] ingest | First-pass ingest for Cross-validation, Vector Search, and GNNs

Summary:
Added the next three methodological support clusters to the wiki, covering evaluation discipline, dense retrieval infrastructure, and graph neural network architectures.

Touched files:
- `raw/sources/Vector Search/*.txt`
- `wiki/sources/`
- `wiki/concepts/cross-validation-and-model-selection.md`
- `wiki/concepts/vector-retrieval-and-approximate-search.md`
- `wiki/concepts/graph-neural-networks.md`
- `wiki/entities/locality-sensitive-hashing.md`
- `wiki/entities/gcn.md`
- `index.md`
- `log.md`

Notes:
- `Cross-validation` strengthens the evaluation layer.
- `Vector Search` is best understood as retrieval infrastructure.
- `GNNs` now looks like a real graph-learning subcluster rather than a loose appendix.

## [2026-04-07] query | Map the major research threads in Cross-validation, Vector Search, and GNNs

Summary:
Created filed synthesis pages for the new evaluation, retrieval-infrastructure, and graph-neural-network clusters and linked them into the broader methods layer.

Touched files:
- `wiki/outputs/2026-04-07-cross-validation-cluster-map.md`
- `wiki/outputs/2026-04-07-vector-search-cluster-map.md`
- `wiki/outputs/2026-04-07-gnns-cluster-map.md`
- `wiki/maintenance/2026-04-07-cross-validation-vector-search-gnns-lint-pass.md`
- `wiki/indexes/methods-and-foundations.md`
- `index.md`
- `log.md`

Notes:
- The most natural next graph-oriented move would be a dedicated graph-learning index linking `Knowledge Graphs` and `GNNs`.
- The most natural retrieval-oriented move would be a comparison note linking vector retrieval, RAG, and persistent wiki compilation.

## [2026-04-07] ingest | Extract and first-pass ingest all remaining source folders

Summary:
Completed extracted-text coverage and first-pass source-page ingest for the remaining folders: `CX`, `Data Stream Clustering`, `Grammar`, `Intent`, `Misc`, `Process Mining`, `Sent2Vec`, `Sentiment`, `Topic Coherence`, and `Topics`.

Touched files:
- `raw/sources/Misc/*.txt`
- `raw/sources/Sent2Vec/*.txt`
- `raw/sources/Sentiment/*.txt`
- `raw/sources/Topic Coherence/*.txt`
- `raw/sources/Topics/*.txt`
- `wiki/sources/`
- `wiki/concepts/customer-experience-and-service-quality.md`
- `wiki/concepts/data-stream-clustering.md`
- `wiki/concepts/grammar-and-information-extraction.md`
- `wiki/concepts/intent-detection.md`
- `wiki/concepts/miscellaneous-reference-shelf.md`
- `wiki/concepts/process-mining-and-monitoring.md`
- `wiki/concepts/sentence-embeddings.md`
- `wiki/concepts/sentiment-and-politeness.md`
- `wiki/concepts/topic-coherence.md`
- `wiki/concepts/topic-modeling-and-keyphrase-extraction.md`
- `index.md`
- `log.md`

Notes:
- This completed folder-level ingest coverage for the current `raw/sources` tree.
- One `Misc` PDF blocked text extraction because copying was disallowed, but the rest of the wave extracted successfully.

## [2026-04-07] query | Map the major research threads in the remaining text-analysis and operations folders

Summary:
Created filed cluster maps for `CX`, `Data Stream Clustering`, `Grammar`, `Intent`, `Misc`, `Process Mining`, `Sent2Vec`, `Sentiment`, `Topic Coherence`, and `Topics`, plus a broader navigation hub for the text-analysis and operations side of the corpus.

Touched files:
- `wiki/outputs/2026-04-07-cx-cluster-map.md`
- `wiki/outputs/2026-04-07-data-stream-clustering-cluster-map.md`
- `wiki/outputs/2026-04-07-grammar-cluster-map.md`
- `wiki/outputs/2026-04-07-intent-cluster-map.md`
- `wiki/outputs/2026-04-07-misc-reference-shelf-map.md`
- `wiki/outputs/2026-04-07-process-mining-cluster-map.md`
- `wiki/outputs/2026-04-07-sent2vec-cluster-map.md`
- `wiki/outputs/2026-04-07-sentiment-cluster-map.md`
- `wiki/outputs/2026-04-07-topic-coherence-cluster-map.md`
- `wiki/outputs/2026-04-07-topics-cluster-map.md`
- `wiki/indexes/text-analysis-and-operations.md`
- `wiki/maintenance/2026-04-07-full-corpus-finalization-pass.md`
- `wiki/indexes/methods-and-foundations.md`
- `index.md`
- `log.md`

Notes:
- The corpus now has three broad navigation layers: `llm-and-agents`, `methods-and-foundations`, and `text-analysis-and-operations`.
- The newest wave is intentionally lighter-touch than the core LLM and methods areas, but it is now fully traversable.

## [2026-04-07] query | How do intelligent systems accumulate reusable knowledge over time across the whole corpus?

Summary:
Created a major cross-corpus synthesis comparing persistence layers across prompting, agent memory, retrieval, knowledge graphs, sentence embeddings, topic structure, process monitoring, causal reasoning, and persistent wiki compilation.

Touched files:
- `wiki/outputs/2026-04-07-how-intelligent-systems-accumulate-reusable-knowledge-over-time.md`
- `index.md`
- `log.md`

Notes:
- The synthesis frames the LLM Wiki pattern as a persistent synthesis layer that sits on top of retrieval, beside structured systems, and downstream of extraction and topic tooling.

## [2026-04-07] query | Which persistence layers should be primary, secondary, or supporting in a production LLM Wiki?

Summary:
Created an architecture recommendation that argues for a wiki-first design, with retrieval, embeddings, and selective structured knowledge as secondary layers and prompts, topics, traces, and causal framing as supporting layers.

Touched files:
- `wiki/outputs/2026-04-07-which-persistence-layers-should-be-primary-secondary-or-supporting-in-an-llm-wiki.md`
- `index.md`
- `log.md`

Notes:
- The key conclusion is that the product should feel wiki-centered even if it uses retrieval, embeddings, graph overlays, and trace infrastructure under the hood.

## [2026-04-07] query | Turn the architecture synthesis into product artifacts

Summary:
Created three filed artifacts from the recent cross-cluster synthesis work: a product architecture note, a PRD, and a Marp presentation deck for explaining the LLM Wiki idea.

Touched files:
- `wiki/outputs/2026-04-07-llm-wiki-product-architecture-note.md`
- `wiki/outputs/2026-04-07-llm-wiki-prd.md`
- `wiki/outputs/2026-04-07-llm-wiki-presentation.md`
- `index.md`
- `log.md`

Notes:
- These artifacts translate the same core thesis into build, planning, and communication forms.

## [2026-04-07] query | Turn the product architecture note into an actual repo and app architecture

Summary:
Created a concrete implementation architecture for building LLM Wiki as a repo-backed workspace plus local control app, with explicit runtime modules, state layout, data models, and an incremental build strategy.

Touched files:
- `wiki/outputs/2026-04-07-llm-wiki-repo-and-app-architecture.md`
- `index.md`
- `log.md`

Notes:
- The architecture keeps the repo as durable truth, the compiler runtime as the engine, the control app as the operator surface, and Obsidian as the reading surface.

## [2026-04-09] maintenance | App move-path cleanup and generated artifact hygiene

Summary:
Adjusted the app TypeScript build configuration so moving the UI does not emit generated JS, declaration files, or build-info files into tracked source locations, expanded ignore rules for app build artifacts, and verified a local production build from the current app path.

Touched files:
- `.gitignore`
- `app/tsconfig.app.json`
- `app/tsconfig.node.json`
- `log.md`

Notes:
- The app still resolves the workspace relative to `app/..`, so it remains wired to the repo root at its current location.
- Verification used `npm run build` in `app/`, which now writes cache/output material under ignored paths such as `app/.tsbuildinfo/` and `app/dist/`.

## [2026-04-09] maintenance | Obsidian graph link pass for LLM Wiki architecture slice

Summary:
Audited the LLM Wiki architecture slice for graph-readiness and added explicit bidirectional cross-links between the main architecture outputs, their supporting concept pages, and the broader `llm-and-agents` index so Obsidian graph view has stronger visible structure.

Touched files:
- `wiki/outputs/2026-04-07-llm-wiki-product-architecture-note.md`
- `wiki/outputs/2026-04-07-llm-wiki-repo-and-app-architecture.md`
- `wiki/concepts/incremental-knowledge-compilation.md`
- `wiki/concepts/retrieval-augmented-generation.md`
- `wiki/concepts/workflow-optimization-for-llm-agents.md`
- `wiki/concepts/agent-harnesses.md`
- `wiki/concepts/knowledge-graph-construction.md`
- `wiki/concepts/sentence-embeddings.md`
- `wiki/indexes/llm-and-agents.md`
- `log.md`

Notes:
- The main issue was sparse explicit wiki-to-wiki links, not missing content.
- This pass focused on the architecture cluster first because it is immediately relevant to both Obsidian navigation and the current app work.

## [2026-04-09] maintenance | Obsidian graph link pass for RAG and Knowledge Graphs slice

Summary:
Added a second wave of explicit cross-links across the `RAG`, `Knowledge Graphs`, and comparison pages so retrieval-first, graph-first, and wiki-first notes form a clearer Obsidian-visible cluster instead of reading as adjacent but loosely connected analyses.

Touched files:
- `wiki/outputs/2026-04-07-rag-cluster-map.md`
- `wiki/outputs/2026-04-07-knowledge-graphs-cluster-map.md`
- `wiki/outputs/2026-04-07-structured-knowledge-vs-retrieval-vs-persistent-wiki-compilation.md`
- `wiki/concepts/agentic-information-retrieval.md`
- `wiki/concepts/knowledge-graph-augmented-llms.md`
- `wiki/concepts/graph-representation-learning.md`
- `wiki/concepts/knowledge-graph-reasoning.md`
- `wiki/indexes/knowledge-graphs.md`
- `log.md`

Notes:
- The main improvement was adding bidirectional output-to-output and concept-to-output links across retrieval and graph pages.
- This wave should make the Obsidian graph much more legible around the central `wiki-first, graph-assisted` thesis.

## [2026-04-09] maintenance | Obsidian graph link pass for RAG and Knowledge Graph entities

Summary:
Added links from key named systems in the `RAG` and `Knowledge Graphs` slices back into the cluster maps and comparison notes so entity pages like `RAFT`, `RankRAG`, `HIRAG`, `BabelNet`, `YAGO`, `node2vec`, `OpenDialKG`, and `Neo4j` act as visible graph anchors in Obsidian rather than isolated leaf nodes.

Touched files:
- `wiki/entities/raft.md`
- `wiki/entities/rankrag.md`
- `wiki/entities/hirag.md`
- `wiki/entities/babelnet.md`
- `wiki/entities/yago.md`
- `wiki/entities/node2vec.md`
- `wiki/entities/opendialkg.md`
- `wiki/entities/neo4j.md`
- `log.md`

Notes:
- This pass focused on entity-to-output links because the synthesis pages were already stronger than the entity pages.
- Local Obsidian workspace files appeared during this pass and were intentionally left untouched.

## [2026-04-09] maintenance | Ignore local Obsidian workspace files

Summary:
Marked local Obsidian workspace state as ignored so vault-specific settings and transient canvas files do not get mixed into the durable wiki repo.

Touched files:
- `.gitignore`
- `log.md`

Notes:
- The observed files were `.obsidian/` settings plus an empty `Untitled.canvas`, which look like local editor state rather than canonical wiki artifacts.
