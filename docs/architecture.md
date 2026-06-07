# Architecture Rationale

## Goals

Homepage is a static-first monorepo for business websites. It optimizes for fast delivery, easy GitHub Pages hosting, and reusable building blocks without introducing unnecessary platform complexity.

## Why Astro

Astro is a good fit because these sites are mostly content, layout, SEO metadata, images, and contact information. It generates static HTML by default, keeps JavaScript minimal, and supports TypeScript cleanly.

## Package Boundaries

`packages/ui` contains primitives that should stay generic: buttons, section wrappers, and future form controls.

`packages/sections` contains reusable business sections: header, hero, about, features, gallery, menu, testimonials, contact, map, and footer. These components accept typed content instead of importing client data directly.

`packages/themes` contains business-specific branding as configuration. Themes become CSS variables at the app layout boundary.

`packages/content` contains shared TypeScript contracts. Each app owns its actual content.

## First Client Scope

The active site is a single-page Binita Restaurant website. It proves the reusable architecture with real content while keeping the implementation small enough to maintain.

Included sections:

- Header and navigation
- Hero
- About
- Features
- Menu
- Gallery
- Contact
- Branch status/history
- Map
- Footer

## Static And GitHub Pages Compatibility

The app uses Astro static output and does not require server-side rendering. The GitHub Actions workflow builds the app and uploads the generated `dist` folder to Pages.

## Accessibility And SEO

The initial implementation includes semantic landmarks, accessible navigation labels, alt text, focus styles, responsive layouts, page metadata, Open Graph tags, JSON-LD, robots.txt, and a basic sitemap.
