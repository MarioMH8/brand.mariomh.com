# Development

Use the smallest command that validates the changed behavior. Run every command from the repository root.

## Commands

| Task | Command |
| --- | --- |
| Install dependencies | `bun install` |
| Build every workspace | `bun run build` |
| Build one package | `bun run --filter @mariomh8/button build` |
| Build Storybook only | `bun run build:storybook` |
| Run Storybook in development | `bun run --filter @mariomh8/storybook dev` |
| Run all tests | `bun run test` |
| Run one test file | `bun test components/button/test/react.test.tsx` |
| Type-check | `bun run typecheck` |
| Lint without writing | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |
| Validate package manifests and exports | `bun run lint:packages` |
| Build and validate packages | `bun run check:packages` |
| Add a changeset | `bun changeset add` |
| Astro type-check (not in CI) | `bun run typecheck:astro` |

`bun run build` runs `build` in every `@mariomh8/*` workspace, which includes the Storybook package. `bun run build:storybook` builds only Storybook. `bun run check:packages` runs the full build and then `publint` on every package through `lint:packages`.

## Tests

Tests use Bun's built-in runner. `bunfig.toml` preloads `bun.preload.ts`, which registers happy-dom with `GlobalRegistrator`, so React components can be rendered and queried in a DOM environment. Test files live next to their packages under `test/`, for example `components/button/test/react.test.tsx`. Not every component has a test yet; add one next to the component you change.

## Storybook

Development runs on port `6006`:

```bash
bun run --filter @mariomh8/storybook dev
```

The Storybook workspace uses `workspace:*` for internal packages and `vite-tsconfig-paths` for the root TypeScript paths, so it always renders the local sources. A production build writes to the ignored `storybook/storybook-static` directory.

## GitHub Packages authentication

The repository `.npmrc` only declares the `@mariomh8` scope:

```
@mariomh8:registry=https://npm.pkg.github.com/
```

It does not contain a token, and it must stay that way. To install published `@mariomh8` packages locally or from a consumer repository, use a classic personal access token with the `read:packages` scope. Keep it in a user-level npm configuration, for example:

```
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` with the token value in your shell. A classic token is required; fine-grained tokens are not used for this registry. Authentication is also required when a package is public, because GitHub Packages always asks for a registry token.

GitHub Actions authenticates with `GITHUB_TOKEN` and the `packages: write` permission for publication. Renovate authenticates with `RENOVATE_PACKAGES_TOKEN`, declared in `renovate.json`; that secret is not an Actions secret.

## Type-checking

`bun run typecheck` runs `tsc --noEmit` over the root project. `bun run typecheck:astro` runs `astro check`, which currently reports 19 pre-existing `Astro.props` errors. It is not part of CI and should not be used as a routine validation command; the errors are planned to be addressed with Astro 7. Do not report a change as validated by `typecheck:astro`.

## Continuous integration

`.github/workflows/ci.yml` calls the shared `hexadrop/github-workflows` `check.yml` workflow at `v1.9.0` on pushes and pull requests to `main` and `develop`. It runs `lint:ci`, `typecheck`, `test` and `check:packages`, with the ESLint cache restored for `lint:ci`. The Storybook deploy workflow also runs `lint:ci`, `test` and `typecheck` before deploying.

Because the repository is private on GitHub Free, the checks run but GitHub cannot enforce them through rulesets or branch protection. Maintainers must wait for green checks manually.
