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
npm install
npm run dev
npm run build
npm run preview
```

## Architecture

- `apps/*` are deployable websites.
- `apps/*/content` stores client-specific content and theme selection.
- `packages/content` defines shared TypeScript content contracts.
- `packages/themes` stores reusable brand theme presets and CSS variable helpers.
- `packages/ui` contains small primitive UI components.
- `packages/sections` contains reusable business website sections such as header, hero, menu, gallery, contact, map, and footer.

This keeps content separate from presentation while avoiding a CMS, database, or runtime server for the first client.

## Deployment

GitHub Actions builds the Astro site and publishes `apps/binita/dist` to GitHub Pages.

In repository settings, set Pages source to **GitHub Actions**. The workflow is in `.github/workflows/deploy-pages.yml`.

## Current Client

`apps/binita` is the active build. Azusawa is the only active branch in the current website. Older branches are kept as branch history in content, not as active customer locations.

## Adding A Client

1. Create `apps/client-name`.
2. Add `apps/client-name/content/site.ts`.
3. Reuse shared sections from `packages/sections`.
4. Pick an existing theme from `packages/themes` or add a new theme preset.
5. Add app-specific pages only when the client needs them.

Keep the first pass static and content-driven. Add new abstractions only after at least two clients need the same capability.

## Proposal Backlog

A future `apps/directory` or `/clients` listing page can read per-client metadata and show all hosted clients in one place. This is intentionally not part of the current Binita build.
