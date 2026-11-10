<h1 align="center">
  MarioMH Design System
</h1>

<p align="center">
  The components, tokens and Storybook behind <a href="https://mariomh.com">mariomh.com</a>.
</p>

<p align="center">
  <img src="./.docs/mariomh.png" alt="MarioMH brand" width="480">
</p>

## Table of contents

- [Introduction](#introduction)
- [Packages](#packages)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Development](#development)
- [GitHub Packages](#github-packages)
- [Storybook](#storybook)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## Introduction

This repository holds the design system of MarioMH: a private Bun workspaces monorepo with twenty component packages, the shared `@mariomh8/cva`, `@mariomh8/tailwind` and `@mariomh8/archia` packages, and the Storybook site that documents them.

The visual identity connects with the early days of computing. The logo is built from pixels and hides the **M** and the **H** in its counter, and the rest of the system extends that idea with an energetic, distinctive and accessible language.

The repository is public so the code can be read and audited. The packages stay private and are consumed from GitHub Packages.

## Packages

Every package uses the `@mariomh8` scope and ships ESM-only output with TypeScript declarations. React and, where it makes sense, Astro entry points are available.

### Components

| Package | Description |
| --- | --- |
| [`@mariomh8/badge`](./components/badge) | Status and metadata labels. |
| [`@mariomh8/box`](./components/box) | Layout primitives with spacing variants. |
| [`@mariomh8/button`](./components/button) | Buttons and button links. |
| [`@mariomh8/checkbox`](./components/checkbox) | Checkbox control. |
| [`@mariomh8/container`](./components/container) | Responsive page container. |
| [`@mariomh8/copyright`](./components/copyright) | Copyright footer text. |
| [`@mariomh8/focus`](./components/focus) | Focus-visible ring utilities. |
| [`@mariomh8/font`](./components/font) | Typography class-name helpers. |
| [`@mariomh8/heading`](./components/heading) | Semantic headings with levels and weights. |
| [`@mariomh8/input`](./components/input) | Text input. |
| [`@mariomh8/label`](./components/label) | Form label. |
| [`@mariomh8/link`](./components/link) | Styled anchors with accessible focus states. |
| [`@mariomh8/logo`](./components/logo) | The MarioMH logo. |
| [`@mariomh8/navigation-menu`](./components/navigation-menu) | Accessible navigation menu. |
| [`@mariomh8/paragraph`](./components/paragraph) | Body text. |
| [`@mariomh8/round`](./components/round) | Border-radius utilities. |
| [`@mariomh8/select`](./components/select) | Select control. |
| [`@mariomh8/shadow`](./components/shadow) | Shadow utilities. |
| [`@mariomh8/span`](./components/span) | Inline text. |
| [`@mariomh8/textarea`](./components/textarea) | Multiline text input. |

### Shared packages

| Package | Description |
| --- | --- |
| [`@mariomh8/cva`](./packages/cva) | `class-variance-authority` and `tailwind-merge` wired for the design system. |
| [`@mariomh8/tailwind`](./packages/tailwind) | Tailwind theme CSS and the palette export. |
| [`@mariomh8/archia`](./packages/fonts/archia) | The Archia font, its CSS entry points and font files. |

## Tech stack

- **Runtime and package manager** - [Bun](https://bun.sh) 1.4.4
- **Documentation** - [Astro](https://astro.build) 7, [React](https://react.dev) 19 and [Storybook](https://storybook.js.org)
- **Styling** - [Tailwind CSS](https://tailwindcss.com) 4
- **Build** - [tsdown](https://tsdown.dev)
- **Language** - [TypeScript](https://www.typescriptlang.org) 6
- **Registry** - [GitHub Packages](https://github.com/features/packages)
- **Deployment** - [Cloudflare Pages](https://pages.cloudflare.com)

## Requirements

- Bun 1.4.4
- Git
- A GitHub personal access token with `read:packages` to install the published packages

## Development

Clone the repository and install the workspaces:

```bash
git clone https://github.com/MarioMH8/brand.mariomh.com.git
cd brand.mariomh.com
bun install
```

The main commands run from the repository root:

| Task | Command |
| --- | --- |
| Build every workspace, including Storybook | `bun run build` |
| Build only the packages | `bun run build:packages` |
| Build only Storybook | `bun run build:storybook` |
| Run Storybook in development | `bun run --filter '@mariomh8/storybook' dev` |
| Run the test suite | `bun run test` |
| Type-check the TypeScript sources | `bun run typecheck` |
| Type-check the Astro sources | `bun run typecheck:astro` |
| Lint without writing changes | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |
| Build and validate every package | `bun run check:packages` |
| Add a changeset | `bun changeset add` |

`bun run check:packages` builds every package and runs `publint` on it. `bun run typecheck:astro` runs `astro check` directly, without a previous build, because the root `tsconfig.json` resolves the component subpaths to source.

## GitHub Packages

The packages are published to GitHub Packages under `https://npm.pkg.github.com/` with the `@mariomh8` scope and stay private. The repository `.npmrc` only declares the scope; it never contains a token.

Add the scope and your token to your user-level npm configuration:

```ini
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` in your shell with a classic GitHub personal access token that has the `read:packages` permission. Authentication is required even when a package is public.

In CI the release workflow uses `GITHUB_TOKEN` with `packages: write`, and Renovate uses the `RENOVATE_PACKAGES_TOKEN` secret.

## Storybook

Storybook documents the components, the tokens and the brand. It runs on <http://localhost:6006> during development and deploys to <https://brand.mariomh.com>.

```bash
bun run --filter '@mariomh8/storybook' dev
```

A production build is written to `storybook/storybook-static`, which is ignored by Git.

## Project structure

```text
components/        Twenty publishable @mariomh8/<component> packages
packages/          @mariomh8/cva and @mariomh8/tailwind
packages/fonts/    @mariomh8/archia
storybook/         Private Storybook workspace
docs/              Architecture, conventions and decision records
.changeset/        Release metadata
.github/           Workflows, issue templates and CODEOWNERS
```

Read [Architecture](docs/agents/architecture.md) for the build output, the registry and the deploy pipeline.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or a pull request. The project follows an issue-first workflow, Conventional Commits and GitFlow with `develop` as the integration branch and `main` for stable releases.

- [AGENTS.md](AGENTS.md): entry point for the repository guides.
- [docs/agents/](docs/agents/): architecture, conventions, development, releases, pull requests and branches.
- [ADR 0001](docs/adr/0001-github-packages-registry.md): the GitHub Packages decision.

## Security

Do not report vulnerabilities in a public issue. Follow [SECURITY.md](SECURITY.md) and use GitHub's private vulnerability reporting.

## License

The source code is licensed under the [PolyForm Noncommercial License 1.0.0](LICENSE). You may read, use, modify and share it for noncommercial purposes, with the required notice.

The MarioMH name, logo, images, font files and documentation prose are **all rights reserved**. See [CONTENT-LICENSE.md](CONTENT-LICENSE.md) before reusing any asset.

The `@mariomh8` packages remain private and are not distributed under an open source license.
