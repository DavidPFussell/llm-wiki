# Model Selection

This repo does not configure the LLM model directly.

The wiki repo defines:

- structure
- conventions
- workflows
- page formats

The agent environment defines:

- which model runs
- model-specific settings
- context limits
- tool access

## Where Model Choice Usually Lives

- Codex or Codex-like tools: app settings, session settings, or CLI options
- Claude Code: tool configuration or runtime selection
- Other agent tools: their own model picker, config file, or launch flags

## What To Prefer

For this workflow, the best models usually have:

- strong long-context comprehension
- reliable multi-file editing
- good summarization and synthesis
- enough instruction discipline to keep `index.md`, `log.md`, and related pages consistent
- multimodal support if you want the agent to inspect local images

## Practical Advice

- Use a stronger model for ingest, lint, and large synthesis tasks.
- Use a cheaper or faster model for small cleanup or formatting tasks if your tool allows model switching.
- If the model starts creating duplicate pages or losing structure, tighten `AGENTS.md` and reduce task scope before adding more tooling.

## Recommended Repo Convention

If useful, document your preferred model in local notes or in the README as guidance only, not as a hard dependency.

Example:

`Preferred for major ingest and synthesis: strongest available long-context model in the current agent tool.`

That keeps the repo portable across different LLM environments.
