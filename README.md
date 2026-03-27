# StackLab

StackLab is an open-source platform for learning software engineering through simulations, architecture tradeoffs, and production-ready templates.

The canonical public product docs now live in the standalone Mintlify workspace under [`apps/docs/`](./apps/docs). The long-form markdown files in [`docs/product`](./docs/product) remain source material and planning references, but the Mintlify pages are the main source of truth for public-facing messaging.

## Start Here

- [Mintlify config](./apps/docs/docs.json)
- [Introduction](./apps/docs/introduction.mdx)
- [Product vision](./apps/docs/product/vision.mdx)
- [Labs overview](./apps/docs/labs/overview.mdx)
- [Templates overview](./apps/docs/templates/overview.mdx)
- [Contributing overview](./apps/docs/contribute/overview.mdx)

## Current Repo Structure

- [`apps/web/`](./apps/web): Next.js landing-page boilerplate and future product surface
- [`apps/docs/`](./apps/docs): Mintlify docs workspace and canonical public docs
- [`packages/design-tokens/`](./packages/design-tokens): shared CSS-variable-first theme tokens
- [`packages/eslint-config/`](./packages/eslint-config): shared ESLint flat configs
- [`packages/typescript-config/`](./packages/typescript-config): shared TypeScript presets
- [`AGENTS.md`](./AGENTS.md): repo-local guidance for AI agents and automated contributors
- [`docs/product/vision.md`](./docs/product/vision.md): shorter source vision document
- [`docs/product/visionvv2.md`](./docs/product/visionvv2.md): deep product spec source document
- [`docs/product/brand-copy.md`](./docs/product/brand-copy.md): naming, tagline, and messaging source material

## Local Docs Workflow

- `pnpm dev` runs the Next.js landing surface from `apps/web`.
- `pnpm docs:dev` runs the Mintlify docs workspace from `apps/docs` on port `3333`.
- The docs site is built for Mintlify and organized around Overview, Product, Labs, Templates, Contribute, and Reference sections.
- Hidden-but-public pages under [`apps/docs/hidden`](./apps/docs/hidden) are intended for AI-agent and maintainer context.
- Product messaging changes should be updated in the Mintlify pages first, then reflected in repo summaries if needed.

## Project Direction

StackLab is being built to help developers:

- understand how real systems behave
- compare implementation approaches
- learn runtime, system design, and production concepts through interaction
- move from theory to stronger production defaults

## Contribution Direction

The repo is expected to grow with strong conventions around:

- product scope
- documentation quality
- visual consistency
- architecture boundaries
- AI-assisted contribution rules
