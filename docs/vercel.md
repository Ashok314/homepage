# Vercel Deployment

This monorepo can deploy one client app as a standalone Vercel site while keeping all apps and shared packages in the same repository.

## Project Settings

Create one Vercel project per standalone site.

- Project source: this repository
- Root directory: repository root
- Install command: `pnpm install --frozen-lockfile`
- Build command: app-specific standalone build script
- Output directory: `apps/<app-name>/dist`

Example for Binita:

- Build command: `pnpm run build:binita:standalone`
- Output directory: `apps/binita/dist`

Keeping the Vercel project at the repository root avoids workspace package resolution issues while still building only the selected app.

## Environment Variables

Set `PUBLIC_SITE_URL` to the deployed origin for the Vercel project.

Before the final domain is ready:

- `PUBLIC_SITE_URL=https://<your-project>.vercel.app`

After the final domain is ready:

- `PUBLIC_SITE_URL=https://www.example.com`

Standalone builds should use `PUBLIC_BASE_PATH=/`. The app-specific standalone build script should set this for you.

## Package Manager

Use pnpm.

- Keep `pnpm-lock.yaml`
- Keep `pnpm-workspace.yaml`
- Do not commit `package-lock.json`
- Do not use `npm ci` on Vercel

The root `prepare` hook is CI-safe, so Husky is skipped on Vercel.

## Local Validation

For a standalone app, validate from the monorepo root.

Example for Binita:

```bash
CI=true VERCEL=1 pnpm install --frozen-lockfile
pnpm run build:binita:standalone
```

## GitHub-Connected Deploys

If the Vercel project is connected to GitHub, local edits do nothing until they are committed and pushed. Vercel builds from the repository state, not from uncommitted local files.
