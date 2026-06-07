import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "homepage";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";
const sharedPublicDir = fileURLToPath(new URL("../../public", import.meta.url));

export default defineConfig({
  site: "https://ashok314.github.io",
  base: isPagesBuild ? `/${repo}` : "/",
  publicDir: sharedPublicDir,
  output: "static"
});
