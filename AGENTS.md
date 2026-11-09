# Agent guide for brand.mariomh.com

MarioMH's design system: a private Bun workspaces monorepo with twenty publishable component packages, the shared `@mariomh8/cva`, `@mariomh8/tailwind` and `@mariomh8/archia` packages, and a private Storybook site. `develop` is the default branch; `main` holds stable releases.

See the [repository README](README.md) for the product and [Architecture](docs/agents/architecture.md) for surfaces, build output, registry and deployment.

- **Package manager:** Bun 1.4.4 (`bun`)
- **Build:** `bun run build`
- **Test:** `bun run test`
- **Type-check:** `bun run typecheck`
- **Lint:** `bun run lint:fix`
- **Package validation:** `bun run check:packages`

Component work lives in `components/<name>`; shared packages live in `packages/`. Root tasks (pull requests, branches, changesets, commits) are at the repository root.

## Task guides

- [Architecture](docs/agents/architecture.md) — surfaces, build output, registry and deploy.
- [Conventions](docs/agents/conventions.md) — Bun, TypeScript, lint, tsup, comments and registry rules.
- [Development](docs/agents/development.md) — commands, tests, Storybook and registry authentication.
- [Release process](docs/agents/release-process.md) — daily development, beta snapshots, stable releases, deploy and sync.
- [Pull requests](docs/agents/pull-requests.md) — issue-first policy, labels, changesets and merge methods.
- [Branches and commits](docs/agents/branches-and-commits.md) — GitFlow branches, naming, Conventional Commits and hooks.
