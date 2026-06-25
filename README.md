# Homepage

Scalable static-first monorepo for building and hosting business websites.

The active client implementation is `apps/binita`, an Astro site for Binita Restaurant. The repo is intentionally small, but the structure is ready for cafes, retail shops, local services, ecommerce-lite storefronts, corporate sites, and landing pages.

## Structure

```text
homepage/
├── apps/
│   ├── home/
│   │   └── src/
│   ├── binita/
│   │   ├── content/
│   │   └── src/
│   ├── sahana/
│   │   ├── content/
│   │   └── src/
│   └── helloworld/
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
- Sahana: `http://localhost:4324/`
- Helloworld: `http://localhost:4323/`

Use app-specific variants such as `pnpm run dev:binita`, `pnpm run dev:sahana`, `pnpm run dev:helloworld`, `pnpm run build:home`, `pnpm run build:binita`, `pnpm run build:sahana`, or `pnpm run check:all` when needed. Default `preview` targets the root home app for convenience.

## Architecture

- `apps/*` are deployable websites.
- `apps/*/content` stores client-specific content and theme selection.
- `packages/content` defines shared TypeScript content contracts.
- `packages/themes` stores reusable brand theme presets and CSS variable helpers.
- `packages/ui` contains small primitive UI components.
- `packages/sections` contains reusable business website sections such as header, hero, menu, gallery, contact, map, and footer.

This keeps content separate from presentation while avoiding a CMS, database, or runtime server for the first client.

## Deployment

GitHub Actions builds the public directory/listing site and publishes a combined Pages artifact. Client production sites are deployed as standalone Vercel projects so they can use their own production branch and domain.

In repository settings, set Pages source to **GitHub Actions**. The workflow is in `.github/workflows/deploy-pages.yml`.

`DEPLOY_APPS` is reserved for demo or Pages-hosted apps such as `helloworld`. Do not add production client sites such as Binita or Sahana there unless they are intentionally hosted under GitHub Pages.

For standalone client deployment on Vercel or a custom domain, build from the monorepo root with the app-specific standalone build script. Standalone builds use `PUBLIC_BASE_PATH=/`; set `PUBLIC_SITE_URL` to the final production origin when the domain is ready.

See `docs/vercel.md` for Vercel project settings.

## Release Strategy

Use `main` for active development and shared framework work. Production client deployments are released from client-specific branches:

- `release/binita` deploys Binita production.
- `release/sahana` deploys Sahana production.

Configure each Vercel project to use its matching release branch as the production branch. This keeps changes on `main` from affecting live client sites until they are explicitly released.

Release flow:

```bash
git checkout main
git pull

git checkout release/sahana
git merge main
git push origin release/sahana
```

Use client-scoped tags for release versions:

```bash
git tag -a sahana-v0.1.0 -m "Sahana v0.1.0"
git push origin sahana-v0.1.0
```

Before every push, Husky runs:

```bash
pnpm run verify:push
```

That verifies the Pages shell and standalone client builds:

- `pnpm run build:home`
- `pnpm run build:helloworld`
- `pnpm run build:binita:standalone`
- `pnpm run build:sahana:standalone`

If any build fails, the push is blocked locally. Vercel also runs the standalone build for the client project and keeps the previous production deployment live if the new build fails.

## Current Apps

- `apps/home` is the root landing page for `/homepage/`.
- `apps/binita` is the primary client site.
- `apps/sahana` is a generic Homepage-framework restaurant site with Koto and Asagaya branches.
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
