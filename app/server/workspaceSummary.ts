import fs from "node:fs";
import path from "node:path";

export type WorkspaceSummary = {
  generatedAt: string;
  workspaceName: string;
  totals: {
    rawFiles: number;
    sources: number;
    concepts: number;
    entities: number;
    outputs: number;
    maintenance: number;
    indexes: number;
    foldersIngested: number;
    foldersRemaining: number;
  };
  recentOutputs: Array<{
    title: string;
    path: string;
    theme: string;
  }>;
  indexes: string[];
  focusAreas: Array<{
    name: string;
    summary: string;
  }>;
  recentJobs: Array<{
    id: string;
    kind: string;
    title: string;
    status: string;
    targetPath: string;
    model: string;
    touchedFiles: number;
    touchedPaths?: string[];
  }>;
  suggestedQueries: string[];
  reviewQueue: Array<{
    path: string;
    changeType: string;
    summary: string;
    linesChanged: number;
  }>;
  diffPreview: Record<
    string,
    Array<{
      kind: string;
      text: string;
    }>
  >;
};

function countMarkdownFiles(dir: string) {
  if (!fs.existsSync(dir)) return 0;
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md")).length;
}

function countFilesRecursive(dir: string): number {
  if (!fs.existsSync(dir)) return 0;

  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += countFilesRecursive(entryPath);
    } else if (entry.isFile()) {
      total += 1;
    }
  }

  return total;
}

function toPosix(relativePath: string) {
  return relativePath.split(path.sep).join("/");
}

function prettifySlug(fileName: string) {
  const base = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  return base.replace(/-/g, " ");
}

function recentOutputs(repoRoot: string) {
  const outputsDir = path.join(repoRoot, "wiki", "outputs");
  if (!fs.existsSync(outputsDir)) return [];

  return fs
    .readdirSync(outputsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(outputsDir, file);
      return {
        file,
        fullPath,
        mtimeMs: fs.statSync(fullPath).mtimeMs
      };
    })
    .sort((a, b) => b.mtimeMs - a.mtimeMs)
    .slice(0, 6)
    .map(({ file }) => ({
      title: prettifySlug(file),
      path: toPosix(path.join("wiki", "outputs", file)),
      theme: "output"
    }));
}

function topicalIndexes(repoRoot: string) {
  const indexDir = path.join(repoRoot, "wiki", "indexes");
  if (!fs.existsSync(indexDir)) return [];

  return fs
    .readdirSync(indexDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
    .sort((a, b) => a.localeCompare(b));
}

function parseRecentJobs(repoRoot: string) {
  const logPath = path.join(repoRoot, "log.md");
  if (!fs.existsSync(logPath)) return [];

  const text = fs.readFileSync(logPath, "utf8");
  const sections = text
    .split(/^## /m)
    .map((section) => section.trim())
    .filter(Boolean)
    .slice(-4)
    .reverse();

  return sections.map((section, index) => {
    const [headerLine, ...rest] = section.split(/\r?\n/);
    const headerMatch = headerLine.match(/^\[(.*?)\]\s+([^\|]+)\|\s+(.*)$/);
    const kind = headerMatch?.[2]?.trim().toLowerCase() ?? "job";
    const title = headerMatch?.[3]?.trim() ?? "Untitled job";

    const touchedFilesBlock = rest.join("\n").match(/Touched files:\s*([\s\S]*?)(?:\n\n|$)/);
    const touchedFiles = touchedFilesBlock
      ? touchedFilesBlock[1]
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter((line) => line.startsWith("- `")).length
      : 0;

    const firstTouched = touchedFilesBlock
      ? touchedFilesBlock[1]
          .split(/\r?\n/)
          .map((line) => line.trim())
          .find((line) => line.startsWith("- `"))
      : undefined;

    const touchedPaths = touchedFilesBlock
      ? touchedFilesBlock[1]
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter((line) => line.startsWith("- `"))
          .map((line) => line.replace(/^- `|`$/g, ""))
      : [];

    return {
      id: `job-${index + 1}`,
      kind,
      title,
      status: "completed",
      targetPath: firstTouched ? firstTouched.replace(/^- `|`$/g, "") : "n/a",
      model: kind === "ingest" ? "gpt-5-mini" : "gpt-5",
      touchedFiles,
      touchedPaths
    };
  });
}

function buildReviewQueue(
  jobs: Array<{
    title: string;
    touchedPaths?: string[];
  }>
) {
  const seen = new Set<string>();
  const queue: Array<{
    path: string;
    changeType: string;
    summary: string;
    linesChanged: number;
  }> = [];

  for (const job of jobs) {
    for (const touchedPath of job.touchedPaths ?? []) {
      if (seen.has(touchedPath)) continue;
      seen.add(touchedPath);

      let changeType = "update";
      if (touchedPath.endsWith("log.md")) changeType = "append";
      if (touchedPath.includes("/outputs/")) changeType = "create";

      queue.push({
        path: touchedPath,
        changeType,
        summary: `Touched by recent job: ${job.title}.`,
        linesChanged: 12
      });

      if (queue.length >= 8) {
        return queue;
      }
    }
  }

  return queue;
}

function buildDiffPreview(repoRoot: string, reviewQueue: Array<{ path: string }>) {
  const previews: Record<string, Array<{ kind: string; text: string }>> = {};

  for (const item of reviewQueue) {
    const fullPath = path.join(repoRoot, ...item.path.split("/"));
    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
      previews[item.path] = [{ kind: "meta", text: "File preview unavailable." }];
      continue;
    }

    const text = fs.readFileSync(fullPath, "utf8");
    const lines = text
      .split(/\r?\n/)
      .slice(0, 12)
      .map((line) => line.trimEnd());

    previews[item.path] = [
      { kind: "meta", text: `# Live preview for ${item.path}` },
      ...lines.map((line) => ({
        kind: line.startsWith("#") || line.startsWith("---") ? "add" : "context",
        text: line.length > 0 ? line : " "
      }))
    ];
  }

  return previews;
}

export function buildWorkspaceSummary(repoRoot: string): WorkspaceSummary {
  const workspaceName = path.basename(repoRoot);
  const sourceFolders = path.join(repoRoot, "raw", "sources");
  const jobs = parseRecentJobs(repoRoot);
  const reviewQueue = buildReviewQueue(jobs);

  return {
    generatedAt: new Date().toISOString(),
    workspaceName,
    totals: {
      rawFiles: countFilesRecursive(sourceFolders),
      sources: countMarkdownFiles(path.join(repoRoot, "wiki", "sources")),
      concepts: countMarkdownFiles(path.join(repoRoot, "wiki", "concepts")),
      entities: countMarkdownFiles(path.join(repoRoot, "wiki", "entities")),
      outputs: countMarkdownFiles(path.join(repoRoot, "wiki", "outputs")),
      maintenance: countMarkdownFiles(path.join(repoRoot, "wiki", "maintenance")),
      indexes: countMarkdownFiles(path.join(repoRoot, "wiki", "indexes")),
      foldersIngested: fs.existsSync(sourceFolders)
        ? fs.readdirSync(sourceFolders, { withFileTypes: true }).filter((entry) => entry.isDirectory()).length
        : 0,
      foldersRemaining: 0
    },
    recentOutputs: recentOutputs(repoRoot),
    indexes: topicalIndexes(repoRoot),
    focusAreas: [
      {
        name: "LLM and Agents",
        summary:
          "The most mature area of the wiki, with cluster maps, comparison notes, and strong entity coverage."
      },
      {
        name: "Methods and Foundations",
        summary:
          "Causality, clustering, graphs, and methodological support layers are now connected into a coherent navigation surface."
      },
      {
        name: "Text Analysis and Operations",
        summary:
          "Grammar, sentence embeddings, sentiment, topics, CX, and process mining are now ingested and navigable."
      }
    ],
    recentJobs: jobs,
    suggestedQueries: [
      "Across the corpus, what are the strongest recurring mechanisms for durable knowledge accumulation?",
      "What should be primary, secondary, and supporting in a production LLM Wiki architecture?",
      "Which parts of the corpus are most relevant to building a graph-assisted but wiki-first system?",
      "What are the biggest integrity risks if the wiki becomes heavily automated?"
    ],
    reviewQueue,
    diffPreview: buildDiffPreview(repoRoot, reviewQueue)
  };
}
