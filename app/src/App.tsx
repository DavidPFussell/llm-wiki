import { useEffect, useState } from "react";
import seedSummary from "./data/workspace-summary.json";

type StatCardProps = {
  label: string;
  value: number;
  tone: "warm" | "cool" | "ink";
};

type WorkspaceSummary = typeof seedSummary;

function StatCard({ label, value, tone }: StatCardProps) {
  return (
    <article className={`stat-card stat-card--${tone}`}>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </article>
  );
}

function App() {
  const [summary, setSummary] = useState<WorkspaceSummary>(seedSummary);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadSummary() {
      try {
        const response = await fetch("/api/workspace-summary");
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const nextSummary = (await response.json()) as WorkspaceSummary;
        if (!cancelled) {
          setSummary(nextSummary);
          setError(null);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load workspace data");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadSummary();
    const intervalId = window.setInterval(() => {
      void loadSummary();
    }, 15000);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  const {
    totals,
    recentOutputs,
    indexes,
    focusAreas,
    recentJobs,
    reviewQueue,
    diffPreview,
    suggestedQueries,
    generatedAt,
    workspaceName
  } = summary;
  const [queryText, setQueryText] = useState(suggestedQueries[0] ?? "");
  const [selectedDiffPath, setSelectedDiffPath] = useState(reviewQueue[0]?.path ?? "");
  const selectedDiff = diffPreview[selectedDiffPath as keyof typeof diffPreview] ?? [];

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">LLM Wiki Control Panel</p>
          <h1>{workspaceName}</h1>
          <p className="hero__lede">
            A first UI for visualizing corpus scale, recent synthesis work, and
            the current navigation shape of the wiki-first knowledge system.
          </p>
          <div className="hero__meta">
            <span>{totals.foldersIngested} folders ingested</span>
            <span>{totals.rawFiles} raw files tracked</span>
            <span>{generatedAt}</span>
            <span>{loading ? "live sync loading" : "live repo data"}</span>
            {error ? <span>fallback mode: {error}</span> : null}
          </div>
        </div>

        <aside className="hero__panel">
          <h2>Architecture Read</h2>
          <p>
            The UI is deliberately repo-centered: the wiki is primary memory,
            with retrieval, embeddings, and structure as support layers.
          </p>
          <div className="hero__status">
            <span className="status-pill">Wiki-first</span>
            <span className="status-pill">Local-first</span>
            <span className="status-pill">Obsidian-friendly</span>
          </div>
        </aside>
      </section>

      <section className="stats-grid">
        <StatCard label="Source Pages" value={totals.sources} tone="warm" />
        <StatCard label="Concept Pages" value={totals.concepts} tone="cool" />
        <StatCard label="Entity Pages" value={totals.entities} tone="ink" />
        <StatCard label="Outputs" value={totals.outputs} tone="warm" />
        <StatCard label="Maintenance Notes" value={totals.maintenance} tone="cool" />
        <StatCard label="Topical Indexes" value={totals.indexes} tone="ink" />
      </section>

      <section className="panel-grid">
        <article className="panel panel--wide">
          <div className="panel__header">
            <p className="eyebrow">Recent Outputs</p>
            <h2>Newest filed artifacts</h2>
          </div>
          <div className="output-list">
            {recentOutputs.map((output) => (
              <div className="output-row" key={output.path}>
                <div>
                  <h3>{output.title}</h3>
                  <p>{output.path}</p>
                </div>
                <span className="tag">{output.theme}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel__header">
            <p className="eyebrow">Navigation</p>
            <h2>Current indexes</h2>
          </div>
          <ul className="stack-list">
            {indexes.map((indexName) => (
              <li key={indexName}>{indexName}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel-grid">
        <article className="panel">
          <div className="panel__header">
            <p className="eyebrow">Focus Areas</p>
            <h2>What&apos;s structurally strongest</h2>
          </div>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <div className="focus-card" key={area.name}>
                <h3>{area.name}</h3>
                <p>{area.summary}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel__header">
            <p className="eyebrow">Next UI Modules</p>
            <h2>Suggested build sequence</h2>
          </div>
          <ol className="stack-list stack-list--ordered">
            <li>Workspace overview</li>
            <li>Recent jobs and diffs</li>
            <li>Ingest queue</li>
            <li>Query runner</li>
            <li>Lint findings explorer</li>
            <li>Graph and relationship view</li>
          </ol>
        </article>
      </section>

      <section className="panel-grid">
        <article className="panel panel--wide">
          <div className="panel__header">
            <p className="eyebrow">Query Runner</p>
            <h2>Draft the next durable artifact</h2>
          </div>

          <div className="query-composer">
            <label className="query-composer__label" htmlFor="queryText">
              Research question
            </label>
            <textarea
              id="queryText"
              className="query-composer__textarea"
              value={queryText}
              onChange={(event) => setQueryText(event.target.value)}
            />

            <div className="query-composer__toolbar">
              <div className="query-composer__chips">
                {suggestedQueries.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="suggestion-chip"
                    type="button"
                    onClick={() => setQueryText(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <div className="query-composer__actions">
                <span className="mode-pill">File back to wiki</span>
                <button className="primary-button" type="button">
                  Run query
                </button>
              </div>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="panel__header">
            <p className="eyebrow">Operator Read</p>
            <h2>What this screen should become</h2>
          </div>
          <ul className="stack-list">
            <li>Choose output type: note, comparison, report, slides</li>
            <li>Select scope: wiki only, raw plus wiki, or topical index</li>
            <li>Preview touched pages before writeback</li>
            <li>Open diffs before filing results</li>
          </ul>
        </article>
      </section>

      <section className="panel-grid">
        <article className="panel panel--wide">
          <div className="panel__header">
            <p className="eyebrow">Recent Jobs</p>
            <h2>What the agent has been doing</h2>
          </div>
          <div className="job-list">
            {recentJobs.map((job) => (
              <div className="job-row" key={job.id}>
                <div className="job-row__main">
                  <div className="job-row__meta">
                    <span className={`job-kind job-kind--${job.kind}`}>{job.kind}</span>
                    <span className={`job-status job-status--${job.status}`}>
                      {job.status}
                    </span>
                  </div>
                  <h3>{job.title}</h3>
                  <p>{job.targetPath}</p>
                </div>
                <div className="job-row__side">
                  <strong>{job.touchedFiles}</strong>
                  <span>files</span>
                  <em>{job.model}</em>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel__header">
            <p className="eyebrow">Jobs</p>
            <h2>Next modules</h2>
          </div>
          <ul className="stack-list">
            <li>Job history with filters</li>
            <li>Touched-file diff panel</li>
            <li>Retry and re-run controls</li>
            <li>Streaming logs and model telemetry</li>
          </ul>
        </article>
      </section>

      <section className="panel-grid">
        <article className="panel panel--wide">
          <div className="panel__header">
            <p className="eyebrow">Diff Review</p>
            <h2>What would be written back</h2>
          </div>
          <div className="review-list">
            {reviewQueue.map((change) => (
              <div className="review-row" key={change.path}>
                <div className="review-row__main">
                  <div className="job-row__meta">
                    <span className={`change-kind change-kind--${change.changeType}`}>
                      {change.changeType}
                    </span>
                    <span className="mode-pill">{change.linesChanged} lines</span>
                  </div>
                  <h3>{change.path}</h3>
                  <p>{change.summary}</p>
                </div>
                <div className="review-row__actions">
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => setSelectedDiffPath(change.path)}
                  >
                    Preview live file
                  </button>
                  <button className="primary-button" type="button">
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel__header">
            <p className="eyebrow">Review Model</p>
            <h2>What this panel should guard</h2>
          </div>
          <ul className="stack-list">
            <li>Canonical page updates versus duplicate creation</li>
            <li>Index and log consistency after writeback</li>
            <li>High-impact changes touching many files</li>
            <li>Optional human approval for sensitive domains</li>
          </ul>
        </article>
      </section>

      <section className="panel-grid">
        <article className="panel panel--wide">
          <div className="panel__header">
            <p className="eyebrow">Live Preview</p>
            <h2>{selectedDiffPath || "Select a file to preview"}</h2>
          </div>
          <div className="diff-preview">
            {selectedDiff.map((line, index) => (
              <div
                className={`diff-line diff-line--${line.kind}`}
                key={`${selectedDiffPath}-${index}`}
              >
                <code>{line.text}</code>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel__header">
            <p className="eyebrow">Approval Path</p>
            <h2>What happens next</h2>
          </div>
          <ul className="stack-list">
            <li>Inspect the proposed diff in context</li>
            <li>Confirm it updates canonical pages instead of forking duplicates</li>
            <li>Approve writeback or return the job for refinement</li>
            <li>Record the decision in job history</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default App;
