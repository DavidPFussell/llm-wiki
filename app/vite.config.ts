import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { buildWorkspaceSummary } from "./server/workspaceSummary";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function workspaceApiPlugin(): Plugin {
  return {
    name: "workspace-api",
    configureServer(server) {
      server.middlewares.use("/api/workspace-summary", (_req, res) => {
        try {
          const repoRoot = path.resolve(__dirname, "..");
          const payload = buildWorkspaceSummary(repoRoot);
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(payload));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              message: error instanceof Error ? error.message : "Unknown error"
            })
          );
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), workspaceApiPlugin()],
  server: {
    port: 4173
  }
});
