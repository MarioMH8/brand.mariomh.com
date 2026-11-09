# Release process

## Versions and changesets

Every publishable package under `components/`, `packages/` and `packages/fonts/` has its own version. Changesets owns the version bump and the changelog. The private Storybook and root packages are not published.

Add a changeset with `bun changeset add` for every pull request whose label is `type:bug`, `type:feature` or `type:refactor`. Documentation, chore and tooling pull requests do not require one. See [Pull requests](pull-requests.md) for the full matrix.

Changesets are added on `develop`. The changeset configuration uses `baseBranch: main`, restricted access and calculated snapshot versions.

## Daily development

1. Create a work branch from `develop`.
2. Add a changeset when the change affects a published package.
3. Open the pull request against `develop` and merge it with a squash merge once the checks are green.
4. A push to `develop` that adds or modifies a file under `.changeset/` publishes a beta snapshot.

## Beta snapshots

`.github/workflows/release.yml` runs on every push to `main` and `develop`. On `develop`, the shared `detect-changeset-change.yml` job decides whether a beta is needed. When a changeset changed, the release workflow publishes a snapshot with the `beta` dist-tag and `snapshot: true`. The snapshot does not commit version files; the version is calculated from the pending changesets.

Documentation, CI and other changes without a changeset do not publish a beta.

## Release pull request

`release-prepare.yml` runs after every push to `develop`. It first runs the shared check workflow, then creates or updates the draft pull request `changeset-release/main` targeting `main` through the shared `release-prepare.yml` workflow at `v1.13.0`. The workflow uses the GitHub App token (`use-app-token: true`) so its checks run without manual approval.

The release pull request carries the calculated versions, changelog entries and consumed changesets. Review the pending changes and the beta snapshot, then mark the pull request ready.

## Stable release

Merge `changeset-release/main` into `main` with a **merge commit**. Do not squash it: the merge commit keeps `main` and `develop` ancestry aligned.

The merge triggers `release.yml` on `main`. The shared release workflow at `v1.13.0` receives:

- `registry: github`
- `registry-scope: '@mariomh8'`
- `build-command: bun run build:packages`
- `snapshot: false` on `main`

It builds the packages once (`bun run build:packages`, without Storybook) and publishes the stable packages to GitHub Packages. Each publishable package gets a tag and GitHub release named `@mariomh8/<package>@X.Y.Z`. The private `@mariomh8/storybook` is tagged but not published; the successful `Release` run triggers the Storybook deploy through `workflow_run`. Publication remains exclusive to `main`.

## Storybook deploy

`.github/workflows/deploy.yml` deploys the Storybook site to the Cloudflare Pages project `brand-mariomh`. It runs:

- After the `Release` workflow completes successfully on `main`, through `workflow_run`.
- On manual `workflow_dispatch`.
- On tags matching `@mariomh8/storybook@*`.

The release-triggered run checks out the release SHA, so the deployed site matches the release that just finished. The check job calls the shared `check.yml` workflow at `v1.13.0` with `ref` set to that SHA; it runs `lint:ci`, `test`, `typecheck` and `typecheck:astro` before the job builds with `bun run build` and publishes `storybook/storybook-static`.

## Sync back to develop

After a pull request merges into `main`, `sync-to-develop.yml` opens or updates the pull request `internal/sync-from-main-to-develop` targeting `develop`, using the shared `sync-to-develop.yml` workflow at `v1.13.0`. Merge it with a **merge commit** so the release commit and the generated changelog stay in `develop` ancestry. The pull request uses the `internal:sync` label and must not include changeset files.

## Hotfixes

For an urgent fix in production:

1. Create a `hotfix/*` branch from `main`.
2. Add a changeset for the affected package.
3. Open the pull request against `main` and merge it with a squash merge once green.
4. The stable release runs as usual.
5. Merge the resulting `internal/sync-from-main-to-develop` pull request into `develop` with a merge commit.

## Google Artifact Registry

`europe-npm.pkg.dev` is read-only. The repository no longer publishes new versions there. Consumers should use GitHub Packages; the old registry remains available only for existing versions. See [ADR 0001](../adr/0001-github-packages-registry.md).
