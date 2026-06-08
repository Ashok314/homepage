# Homepage

Scalable static-first monorepo for building and hosting business websites.

The active client implementation is `apps/binita`, an Astro site for Binita Restaurant. The repo is intentionally small, but the structure is ready for cafes, retail shops, local services, ecommerce-lite storefronts, corporate sites, and landing pages.

## Structure

```text
homepage/
├── apps/
│   └── binita/
│       ├── content/
│       └── src/
├── packages/
│   ├── content/
│   ├── sections/
│   ├── themes/
│   └── ui/
├── public/
├── docs/
└── .github/workflows/
```

## Commands

```bash
pnpm install --frozen-lockfile
pnpm run dev
pnpm run build
pnpm run preview
pnpm run check
pnpm run format:check
```

Default `dev` starts all local app servers:

- Home: `http://localhost:4321/`
- Binita: `http://localhost:4322/`
- Helloworld: `http://localhost:4323/`

Use app-specific variants such as `pnpm run dev:binita`, `pnpm run dev:helloworld`, `pnpm run build:home`, `pnpm run build:binita`, or `pnpm run check:all` when needed. Default `preview` targets the root home app for convenience.

## Architecture

- `apps/*` are deployable websites.
- `apps/*/content` stores client-specific content and theme selection.
- `packages/content` defines shared TypeScript content contracts.
- `packages/themes` stores reusable brand theme presets and CSS variable helpers.
- `packages/ui` contains small primitive UI components.
- `packages/sections` contains reusable business website sections such as header, hero, menu, gallery, contact, map, and footer.

This keeps content separate from presentation while avoiding a CMS, database, or runtime server for the first client.

## Deployment

GitHub Actions builds the deployed apps and publishes a combined Pages artifact. Each app is built with its own `PUBLIC_BASE_PATH` and `PUBLIC_SITE_URL`, then copied into its own subpath inside the final `dist/` output.

In repository settings, set Pages source to **GitHub Actions**. The workflow is in `.github/workflows/deploy-pages.yml`.

To add another deployed app, add its app name to `DEPLOY_APPS` in `.github/workflows/deploy-pages.yml`. The workflow will build `@homepage/<app>` and publish it under `/homepage/<app>/`.

For standalone client deployment on Vercel or a custom domain, build from the monorepo root with the app-specific standalone build script. Standalone builds use `PUBLIC_BASE_PATH=/`; set `PUBLIC_SITE_URL` to the final production origin when the domain is ready.

See `docs/vercel.md` for Vercel project settings.

## Current Apps

- `apps/home` is the root landing page for `/homepage/`.
- `apps/binita` is the primary client site.
- `apps/helloworld` is a minimal test app used to verify multi-app Pages deployment.

Azusawa is the only active branch in the current Binita website. Older branches are kept as branch history in content, not as active customer locations.

## Adding A Client

1. Create `apps/client-name`.
2. Add `apps/client-name/content/site.ts`.
3. Reuse shared sections from `packages/sections`.
4. Pick an existing theme from `packages/themes` or add a new theme preset.
5. Add app-specific pages only when the client needs them.

Keep the first pass static and content-driven. Add new abstractions only after at least two clients need the same capability.

## Proposal Backlog

A future `/clients` listing experience can expand the root home app or be split into a dedicated route if the monorepo grows beyond a small set of sites.
