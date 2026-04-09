import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

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

function runGit(repoRoot: string, args: string[]) {
  const gitBinary =
    process.platform === "win32" ? "C:\\Program Files\\Git\\cmd\\git.exe" : "git";

  return execFileSync(gitBinary, args, {
    cwd: repoRoot,
    encoding: "utf8"
  }).trim();
}

function buildReviewQueueFromGit(repoRoot: string) {
  let statusOutput = "";
  try {
    statusOutput = runGit(repoRoot, ["status", "--porcelain"]);
  } catch {
    return [];
  }

  if (!statusOutput) return [];

  const queue: Array<{
    path: string;
    changeType: string;
    summary: string;
    linesChanged: number;
  }> = [];

  for (const line of statusOutput.split(/\r?\n/)) {
    const statusCode = line.slice(0, 2).trim();
    const filePath = line.slice(3).trim().replace(/\\/g, "/");
    if (!filePath) continue;

    let changeType = "update";
    if (statusCode === "??" || statusCode.startsWith("A")) changeType = "create";
    if (filePath.endsWith("log.md")) changeType = "append";

    let linesChanged = 0;
    try {
      const diffStats = runGit(repoRoot, ["diff", "--numstat", "--", filePath]);
      const firstLine = diffStats.split(/\r?\n/)[0];
      const [added, removed] = firstLine.split("\t");
      linesChanged = (Number(added) || 0) + (Number(removed) || 0);
    } catch {
      linesChanged = 0;
    }

    queue.push({
      path: filePath,
      changeType,
      summary: `Pending working tree change from git status: ${statusCode || "modified"}.`,
      linesChanged
    });

    if (queue.length >= 8) {
      break;
    }
  }

  return queue;
}

function buildDiffPreview(repoRoot: string, reviewQueue: Array<{ path: string }>) {
  const previews: Record<string, Array<{ kind: string; text: string }>> = {};

  for (const item of reviewQueue) {
    try {
      const diffText = runGit(repoRoot, ["diff", "--", item.path]);
      const relevantLines = diffText
        .split(/\r?\n/)
        .filter((line) => !line.startsWith("diff --git") && !line.startsWith("index "))
        .slice(0, 24);

      previews[item.path] = [
        { kind: "meta", text: `# Git diff preview for ${item.path}` },
        ...relevantLines.map((line) => {
          if (line.startsWith("+") && !line.startsWith("+++")) {
            return { kind: "add", text: line };
          }
          if (line.startsWith("-") && !line.startsWith("---")) {
            return { kind: "remove", text: line };
          }
          return { kind: "context", text: line.length > 0 ? line : " " };
        })
      ];
      continue;
    } catch {
      // Fall through to file preview below.
    }

    const fullPath = path.join(repoRoot, ...item.path.split("/"));
    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
      previews[item.path] = [{ kind: "meta", text: "File preview unavailable." }];
      continue;
    }

    const text = fs.readFileSync(fullPath, "utf8");
    const lines = text.split(/\r?\n/).slice(0, 12).map((line) => line.trimEnd());
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
  const reviewQueue = buildReviewQueueFromGit(repoRoot);

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
