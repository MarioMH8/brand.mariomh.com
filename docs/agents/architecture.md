# Architecture

`brand.mariomh.com` is the MarioMH design system: a private Bun workspaces monorepo that publishes twenty component packages, shared styling packages and the Archia font to GitHub Packages, and deploys a private Storybook site to Cloudflare Pages.

## Surfaces

| Surface | Location | Responsibility |
| --- | --- | --- |
| Components | `components/*` | Twenty publishable `@mariomh8/<component>` packages. Each ships React and, where relevant, Astro entry points plus `class-name`, `properties` and `variants` exports built by tsup. |
| Shared packages | `packages/cva`, `packages/tailwind` | `@mariomh8/cva` wraps `cva` and `tailwind-merge`; `@mariomh8/tailwind` ships the Tailwind theme CSS and the palette export. |
| Fonts | `packages/fonts/archia` | `@mariomh8/archia` ships the Archia CSS entry points and font files. |
| Storybook | `storybook/` | Private `@mariomh8/storybook` workspace: documentation site, stories, blocks, hooks and pages. |
| Release tooling | `.changeset/`, `.github/workflows/` | Changesets, release preparation, publication, Storybook deploy, branch sync and pull request validation. |
| Repository guides | `docs/` | Agent guides and decision records. |

The components are `badge`, `box`, `button`, `checkbox`, `container`, `copyright`, `focus`, `font`, `heading`, `input`, `label`, `link`, `logo`, `navigation-menu`, `paragraph`, `round`, `select`, `shadow`, `span` and `textarea`. The private root package `@mariomh8/root` only carries the workspace manifest.

## Workspaces

The root `package.json` declares four workspace globs:

| Glob | Contents |
| --- | --- |
| `components/*` | The twenty publishable component packages. |
| `packages/*` | `@mariomh8/cva` and `@mariomh8/tailwind`. |
| `packages/fonts/*` | `@mariomh8/archia`. |
| `storybook` | The private Storybook site. |

Publishable packages pin their internal runtime dependencies to the published version and express internal peers as optional ranges. Only the private Storybook workspace uses `workspace:*`, so it resolves the local sources for every component. `storybook/vite.config.ts` adds `vite-tsconfig-paths` so those sources resolve through the root `tsconfig.json` paths.

## Build output

The root `build` script runs `build` in every `@mariomh8/*` workspace. Component and shared packages use tsup 9 with ESM output, declaration files, source maps, `platform: 'neutral'`, splitting and `clean: true`. Component packages and `@mariomh8/cva` publish only `dist/` through their `files` field.

The Astro entry points live in source as `.astro` files. tsup marks `/\.astro$/` as external and the package build copies `src/astro.astro` and `src/astro.ts` into `dist/` after the bundle finishes. This is why the Astro files are not compiled by tsup.

`@mariomh8/tailwind` copies `index.css` into `dist/` and publishes both `dist/` and `index.css`. `@mariomh8/archia` has no build step: it publishes its CSS entry points and font files directly. Storybook builds to `storybook/storybook-static`, which is ignored by Git.

The release workflow builds once with `build-command: bun run build`; packages no longer run `prepublishOnly` before publication.

## Registry

Publishable packages use GitHub Packages as their npm registry:

- Registry URL: `https://npm.pkg.github.com/`
- Scope: `@mariomh8`
- Packages are private by default.
- Every publishable `package.json` declares `publishConfig.registry`.
- The repository `.npmrc` only declares `@mariomh8:registry=https://npm.pkg.github.com/`; it never contains a token.
- The current published version of the packages is `0.1.0`.

Google Artifact Registry (`europe-npm.pkg.dev`) remains read-only. New versions are no longer published there. See [ADR 0001](../adr/0001-github-packages-registry.md).

## Deploy

`.github/workflows/deploy.yml` publishes the Storybook build to the Cloudflare Pages project `brand-mariomh`. It runs after a successful `Release` workflow on `main` through `workflow_run`, on manual `workflow_dispatch`, and on tags matching `@mariomh8/storybook@*`. For a release run it checks out the release SHA, so the site matches what was just published. The manual run exists for redeployments.
