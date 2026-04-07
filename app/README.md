# LLM Wiki UI

This is the first UI scaffold for the LLM Wiki project.

## Stack

- React
- Vite
- TypeScript

## Why this stack

- fast local iteration
- easy path to Tauri later
- good fit for a repo-backed local control panel

## Current shape

The current UI is a workspace dashboard with:

- live repo-backed data in dev via `/api/workspace-summary`
- a seeded fallback snapshot in `src/data/workspace-summary.json`
- overview, query runner, and recent jobs panels

## Run

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

## Next UI modules

- ingest queue
- query runner
- lint explorer
- recent job history
- graph view
- diff/review panel

## Live data

The Vite dev server exposes a small local endpoint that reads the workspace directly:

- `/api/workspace-summary`

That endpoint reads counts, recent outputs, indexes, and recent jobs from the repo each time the UI refreshes.
