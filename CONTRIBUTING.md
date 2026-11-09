# Contributing to brand.mariomh.com

Thanks for taking a look. This repository is the MarioMH design system: twenty components, the shared `@mariomh8/cva`, `@mariomh8/tailwind` and `@mariomh8/archia` packages, and a private Storybook site. The repository is private, `develop` is the default branch and `main` holds stable releases.

This guide covers the local setup and the rules the repository follows. For a quick orientation, read [AGENTS.md](AGENTS.md); for the detailed guides, see [docs/agents/](docs/agents/).

## Table of contents

- [Ways to help](#ways-to-help)
- [Issue-first workflow](#issue-first-workflow)
- [Development setup](#development-setup)
- [GitHub Packages authentication](#github-packages-authentication)
- [Commands](#commands)
- [Storybook](#storybook)
- [Branches and commits](#branches-and-commits)
- [Pull request rules](#pull-request-rules)
- [Changesets and releases](#changesets-and-releases)
- [Further reading](#further-reading)
- [Code of conduct](#code-of-conduct)

## Ways to help

- **Report a bug** with the [bug report template](.github/ISSUE_TEMPLATE/bug_report.yml).
- **Suggest a feature** with the [feature request template](.github/ISSUE_TEMPLATE/feature-request.yml).
- **Send a pull request** for a fix, a test or a documentation improvement.

Open an issue before building a large feature.

## Issue-first workflow

Every pull request needs an approved issue:

1. Open an issue with one of the templates above.
2. Wait for a maintainer to add `status:approved`. The issue must stay open.
3. Comment on the issue to claim it.
4. Open a pull request with `Closes #<number>`, `Fixes #<number>` or `Resolves #<number>`.

Repository tooling without a product issue can use the `internal:no-issue` label instead.

## Development setup

Requirements: Bun 1.4.4 and Git.

```bash
git clone https://github.com/MarioMH8/brand.mariomh.com.git
cd brand.mariomh.com
bun install
```

`bun install` installs the workspaces and activates the Husky hooks through the `prepare` script. The lockfile is `bun.lock`.

## GitHub Packages authentication

The repository `.npmrc` only declares the `@mariomh8` scope:

```
@mariomh8:registry=https://npm.pkg.github.com/
```

It never contains a token. To install published `@mariomh8` packages locally or from another repository, create a classic personal access token with `read:packages` and keep it in a user-level npm configuration:

```
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` in your shell. A classic token is required, and authentication is needed even for public packages. CI uses `GITHUB_TOKEN` with `packages: write`; Renovate uses `RENOVATE_PACKAGES_TOKEN` from `renovate.json`. See [ADR 0001](docs/adr/0001-github-packages-registry.md) for the registry decision.

## Commands

Run these from the repository root:

| Task | Command |
| --- | --- |
| Install dependencies | `bun install` |
| Build every workspace | `bun run build` |
| Build packages only (no Storybook) | `bun run build:packages` |
| Build Storybook only | `bun run build:storybook` |
| Run Storybook in development | `bun run --filter @mariomh8/storybook dev` |
| Run all tests | `bun run test` |
| Run one test file | `bun test components/button/test/react.test.tsx` |
| Type-check | `bun run typecheck` |
| Astro type-check | `bun run typecheck:astro` |
| Lint without writing | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |
| Validate package manifests and exports | `bun run lint:packages` |
| Build and validate packages | `bun run check:packages` |
| Add a changeset | `bun changeset add` |

Tests use Bun's built-in runner with happy-dom, configured in `bunfig.toml` and `bun.preload.ts`. Test files live under `components/*/test/`.

`bun run typecheck:astro` builds the component and shared packages without Storybook (`bun run build:packages`) and then runs `astro check` over the `.astro` files. The build is needed because package subpath imports resolve to `dist`, which a clean checkout does not have. It runs in CI alongside `bun run typecheck`, so both must pass before opening a pull request.

## Storybook

```bash
bun run --filter @mariomh8/storybook dev
```

Storybook runs on port `6006`. It uses `workspace:*` for internal packages and `vite-tsconfig-paths`, so it renders the local sources. A production build writes to the ignored `storybook/storybook-static` directory.

## Branches and commits

Create work branches from `develop`. Use a name that matches:

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert|release|hotfix)\/[a-z0-9._-]+$
```

Examples: `feat/button-loading-state`, `fix/select-focus-ring`, `docs/agents-and-contributing`.

Commit messages follow Conventional Commits through `commitlint.config.ts`. Add `!` and a `BREAKING CHANGE:` footer for breaking changes.

Husky installs three hooks:

| Hook | Command |
| --- | --- |
| `pre-commit` | `bun lint-staged` |
| `commit-msg` | `bun run commitlint ${1}` |
| `pre-push` | `bun run typecheck`, `bun run test`, `bun run lint:fix` |

See [Branches and commits](docs/agents/branches-and-commits.md) for the full branch table and commit types.

## Pull request rules

- Link an approved, open issue and use a Conventional Commits title.
- Add exactly one `type:*` label. Scope labels are applied automatically.
- `type:bug`, `type:feature` and `type:refactor` require a changeset.
- `type:chore` and `type:docs` do not require a changeset.
- `release` and `internal:*` are exempt; contributor pull requests with those labels must not include changesets.
- Run `bun run lint:ci`, `bun run typecheck`, `bun run test` and `bun run check:packages` before opening the pull request.

`.github/workflows/pr-validate.yml` uses `hexadrop/validate-pr-action@v1.0.1` to check the issue, labels and changeset. `.github/workflows/ci.yml` runs the shared check workflow with `lint:ci`, `typecheck`, `test` and `check:packages`.

The repository is private on GitHub Free, so there are no rulesets or branch protection. The checks run, but GitHub does not block a merge when they fail. Maintainers must wait for green checks and verify the policy manually.

Use a **squash merge** for work branches into `develop` and for hotfixes into `main`. Use a **merge commit** for `changeset-release/main` into `main` and for `internal/sync-from-main-to-develop` into `develop`. See [Pull requests](docs/agents/pull-requests.md) for the label and merge matrices.

## Changesets and releases

Add a changeset with `bun changeset add` when a published package changes. A push to `develop` that changes a changeset publishes a beta snapshot with the `beta` dist-tag. When `develop` is ready, `release-prepare.yml` maintains the draft `changeset-release/main` pull request; mark it ready and merge it into `main` with a merge commit to publish the stable packages and create the `@mariomh8/<package>@X.Y.Z` tags. Then merge the `internal/sync-from-main-to-develop` pull request into `develop`.

New versions are published only to GitHub Packages. Google Artifact Registry is read-only. See [Release process](docs/agents/release-process.md) for the complete flow.

## Further reading

- [Agent guide](AGENTS.md) and [docs/agents/](docs/agents/).
- [Architecture](docs/agents/architecture.md): surfaces, build output, registry and deploy.
- [Conventions](docs/agents/conventions.md): Bun, TypeScript, lint, tsup and registry rules.
- [Development](docs/agents/development.md): commands, tests, Storybook and authentication.
- [Release process](docs/agents/release-process.md): beta, stable, deploy, sync and hotfixes.
- [Pull requests](docs/agents/pull-requests.md) and [branches and commits](docs/agents/branches-and-commits.md).
- [ADR 0001](docs/adr/0001-github-packages-registry.md): the GitHub Packages decision.

## Code of conduct

Be respectful. We are building something together.

- Critique code, not people.
- Be constructive in reviews.
- Welcome newcomers.

Violations may result in removal from the project.
