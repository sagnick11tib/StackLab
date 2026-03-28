# StackLab

StackLab is an open-source platform for learning software engineering through simulations, architecture tradeoffs, and production-ready templates.

The production docs app lives in [`apps/docs/`](./apps/docs). Its MDX source content is stored under [`apps/docs/content/`](./apps/docs/content).

## Start Here

- [Docs app](./apps/docs)
- [Introduction](./apps/docs/content/index.mdx)
- [Product vision](./apps/docs/content/product/vision.mdx)
- [Labs overview](./apps/docs/content/labs/overview.mdx)
- [Templates overview](./apps/docs/content/templates/overview.mdx)
- [Contributing overview](./apps/docs/content/contribute/overview.mdx)

## Current Repo Structure

- [`apps/web/`](./apps/web): Next.js landing-page boilerplate and future product surface
- [`apps/docs/`](./apps/docs): production Nextra docs app and source-controlled docs content
- [`packages/design-tokens/`](./packages/design-tokens): shared CSS-variable-first theme tokens
- [`packages/eslint-config/`](./packages/eslint-config): shared ESLint flat configs
- [`packages/typescript-config/`](./packages/typescript-config): shared TypeScript presets
- [`AGENTS.md`](./AGENTS.md): repo-local guidance for AI agents and automated contributors
- [`docs/product/vision.md`](./docs/product/vision.md): shorter source vision document
- [`docs/product/visionvv2.md`](./docs/product/visionvv2.md): deep product spec source document
- [`docs/product/brand-copy.md`](./docs/product/brand-copy.md): naming, tagline, and messaging source material

## Local Docs Workflow

- `pnpm dev` runs the Next.js landing surface from `apps/web`.
- `pnpm docs:dev` runs the Nextra docs app from `apps/docs` on port `3001`.
- The docs content is organized around Overview, Product, Labs, Templates, Contribute, and Reference sections.
- Hidden-but-public pages under [`apps/docs/content/hidden`](./apps/docs/content/hidden) are intended for AI-agent and maintainer context.
- Product messaging changes should be updated in the docs content workspace first, then reflected in repo summaries if needed.

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
