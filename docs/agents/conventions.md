# Conventions

## Runtime and package management

Use Bun 1.4.4 for installation, scripts, tests and builds. The lockfile is `bun.lock`. The repository is a Bun workspaces monorepo; the workspace globs are described in [Architecture](architecture.md).

## Package names

Every publishable package is scoped to `@mariomh8`. A component lives in `components/<name>` and its package name is `@mariomh8/<name>`. Shared packages live under `packages/` and fonts under `packages/fonts/`. The private Storybook package is `@mariomh8/storybook` and the private root package is `@mariomh8/root`.

## TypeScript

The repository uses TypeScript 6.0.3 with `@hexadrop/tsconfig` 0.0.5. The root `tsconfig.json`:

- Extends `@hexadrop/tsconfig`.
- Does not define `baseUrl`.
- Maps internal packages with relative paths, such as `./components/button/src/react.tsx`.
- Uses `types: ["bun"]`.
- Enables `allowImportingTsExtensions`.
- Loads the `@astrojs/ts-plugin` plugin.
- Excludes `components/*/dist` and `storybook/storybook-static`.

`storybook/tsconfig.json` extends the root config and includes `src`, `.storybook/*` and `vite.config.ts`.

## Linting

ESLint 10.13.0 runs with `@hexadrop/eslint-config` 1.3.1 in flat config. `eslint.config.js` awaits `hexadrop(...)` and passes the root and Storybook TypeScript projects. It ignores `storybook/storybook-static/**` and relaxes a few rules for Storybook stories, component variants, Astro files and README code blocks.

Use `bun run lint:fix` while working and `bun run lint:ci` to validate without writing. The lint script uses the content-based ESLint cache.

## Building

Use tsup 9 for publishable TypeScript packages. The configuration is per package: ESM format, declarations, source maps, neutral platform, splitting and a clean output directory. Keep the Astro files external and copy them into `dist/` from the tsup `onSuccess` hook.

Do not add a `prepublishOnly` build. The release workflow builds all packages once with its `build-command`, and the same output is published.

## Comments

Write code that explains itself. Add a comment only for a non-obvious constraint, workaround or external behavior that names, types and tests cannot express. Do not narrate what the code does. Put design rationale in an ADR under `docs/adr/` or in a task guide, not inline.

## Repository configuration

`package.json` is the source of truth for scripts and dependencies. Keep `bun.lock` updated with Bun when dependencies change. Commit messages follow Conventional Commits through `commitlint.config.ts`.

`.idea/` is tracked in this repository and must stay tracked. Do not remove or ignore it.

## Registry and dependencies

Every publishable package declares `publishConfig.registry` with `https://npm.pkg.github.com`. The repository `.npmrc` only declares the `@mariomh8` scope; never commit a token.

Publishable packages pin internal runtime dependencies to the published version and declare internal peers as ranges. Only the private Storybook workspace uses `workspace:*` for internal packages, because it is never published. This keeps the published manifests independent of the workspace protocol.

Authentication rules:

- Local development and consumers use a classic personal access token with `read:packages`.
- CI uses `GITHUB_TOKEN` with `packages: write`.
- Renovate uses the `RENOVATE_PACKAGES_TOKEN` secret from its own `renovate.json` configuration, not from GitHub Actions.

See [Development](development.md) for the local authentication steps.

## Storybook

`storybook/` is a private workspace and is not published to the registry. It uses `workspace:*` for internal packages and `vite-tsconfig-paths` to resolve the root TypeScript paths. Its build output, `storybook/storybook-static`, is ignored by Git and deployed to Cloudflare Pages.
