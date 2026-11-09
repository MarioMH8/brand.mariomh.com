# 0001. Publish packages to GitHub Packages

- **Status:** Accepted
- **Date:** 2026-11-09

## Context

The design system publishes twenty components plus `@mariomh8/cva`, `@mariomh8/tailwind` and `@mariomh8/archia`. The repository is private and all packages are private by default, so the registry must authenticate every install and keep the packages tied to the repository owner.

Versions were previously published to Google Artifact Registry at `europe-npm.pkg.dev`. That registry remains available for existing versions, but it no longer receives new publications.

GitHub Packages already lives next to the repository, issues and Actions, and its npm registry can be scoped to the repository owner.

## Decision

Publish every publishable package to the npm registry of GitHub Packages:

- Registry URL: `https://npm.pkg.github.com/`
- Scope: `@mariomh8`
- Access: restricted; packages are private by default.
- Every publishable `package.json` declares `publishConfig.registry`.
- The repository `.npmrc` only declares the scope and never contains a token.
- The release workflow passes `registry: github` and `registry-scope: '@mariomh8'` to the shared release workflow.

The scope is owner-bound. GitHub Packages ties an npm scope to its owner account, so the scope has to match the repository owner; `@mariomh8` is the lower-case form of `MarioMH8`.

Authentication uses different tokens per surface:

| Surface | Token | Permission |
| --- | --- | --- |
| Local development and consumers | Classic personal access token | `read:packages` |
| GitHub Actions | `GITHUB_TOKEN` | `packages: write` |
| Renovate | `RENOVATE_PACKAGES_TOKEN` | Registry read access |

A classic token is required for local installs. Authentication is required even when a package is public, because GitHub Packages always asks for a registry token. The Renovate token is declared in `renovate.json` through a `hostRules` entry; it is not an Actions secret.

The shared `hexadrop/github-workflows` workflows are pinned at `v1.9.0`. The `v1.8.0` and `v1.9.0` shared workflows carry the registry configuration used here, so the registry choice does not require a fork.

## Consequences

- Packages, repository and permissions share one owner and one access model.
- Consumers configure the `@mariomh8` scope and a classic `read:packages` token in a user-level npm configuration.
- The repository `.npmrc` stays free of secrets, so it is safe to commit.
- GitHub Actions publishes with the repository `GITHUB_TOKEN`; the release workflow needs `packages: write`.
- Renovate needs its own secret because it does not run inside GitHub Actions and cannot use `GITHUB_TOKEN`.
- Private packages cannot be installed anonymously, even from a public consumer.
- Versions already published to Google Artifact Registry are not copied. The old registry is read-only and new versions exist only on GitHub Packages.
- Migration to another registry later would require changing `publishConfig.registry`, the repository `.npmrc`, the release workflow inputs and the consumer configuration.

## Alternatives considered

- **Keep Google Artifact Registry.** It works for private npm packages, but publication requires separate Google Cloud credentials and a second access model for a repository that already lives on GitHub. It remains read-only for existing versions.
- **Publish to the public npm registry.** The packages are private by default and the design system is not intended as a public npm distribution. Public npm would also remove the owner-bound scope and the repository permission model.
- **Publish to the organization registry.** The repository belongs to the `MarioMH8` personal account, not to an organization. An organization registry would require moving ownership or maintaining a second account and token setup.
- **Commit a token in `.npmrc`.** Rejected: it would expose credentials in the repository and break the token rotation model. The token stays in the local environment, Actions secrets and Renovate's own configuration.

## Migration

The migration is complete:

1. Added `publishConfig.registry` to every publishable package.
2. Scoped the repository `.npmrc` to `@mariomh8` without a token.
3. Switched the release workflow to `registry: github` with `registry-scope: '@mariomh8'`.
4. Configured `GITHUB_TOKEN` with `packages: write` for Actions and `RENOVATE_PACKAGES_TOKEN` for Renovate.
5. Stopped publishing to Google Artifact Registry and left it read-only.

Existing versions on Google Artifact Registry stay available. New versions are published only to GitHub Packages. See [Development](../agents/development.md) for local authentication and [Release process](../agents/release-process.md) for publication.
