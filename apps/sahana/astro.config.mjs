import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const sharedPublicDir = fileURLToPath(new URL("../../public", import.meta.url));
const base = process.env.PUBLIC_BASE_PATH ?? "/";
const site = process.env.PUBLIC_SITE_URL ?? "http://localhost:4324/";

export default defineConfig({
  site,
  base,
  publicDir: sharedPublicDir,
  output: "static"
});
