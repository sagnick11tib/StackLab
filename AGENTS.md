# AGENTS.md

This file is the operating guide for AI agents and automated contributors working in StackLab.

## Mission

StackLab is an open-source software engineering platform focused on production concepts, visual simulations, pattern comparison, and production-grade templates.

The repo should evolve into a platform that helps developers understand real engineering tradeoffs, not a generic tutorial site or a collection of disconnected demos.

## Canonical Product Docs

Editable public-facing product messaging now lives in the production Nextra docs app under [`apps/docs/`](./apps/docs).

Operational rule:

- treat `apps/docs/content` as the canonical docs source
- treat `apps/docs` as the primary public docs frontend
- keep `README.md` as a short repo entrypoint
- keep `AGENTS.md` as repo-local operational guidance
- use [`docs/product`](./docs/product) as source material and planning references, not as the primary public docs surface

## Current Phase

StackLab is currently in the foundation stage.

Current priorities:

- define product direction
- establish documentation standards
- maintain the production Nextra docs app
- scaffold the Next.js landing page and future product shell
- define the design language

Do not assume the current repository layout is final. Respect the direction documented here and in [`docs/product/vision.md`](./docs/product/vision.md).

## Primary Product Pillars

Every meaningful feature should fit at least one of these pillars:

- Learn: concise concept explanations
- Simulate: interactive labs and behavioral visualizations
- Compare: multiple approaches with tradeoffs
- Build: production-oriented templates and blueprints
- Contribute: strong open-source contribution workflows

## What Belongs In StackLab

Valid feature areas include:

- system design education and simulation
- JavaScript and runtime internals
- backend and distributed system patterns
- authentication and authorization concepts
- applied architecture labs such as booking, chat, payments, and notifications
- production templates for specific stacks and use cases
- docs and contribution systems that improve contributor experience

## What Does Not Belong In StackLab

Avoid turning the project into:

- a generic course marketplace
- a random UI gallery
- a clone of existing documentation sites
- a bundle of disconnected code snippets without teaching value
- animation-heavy marketing with no engineering depth

## Documentation Contract

When adding or changing major behavior, keep docs aligned.

Core docs:

- [`README.md`](./README.md): human-facing project entrypoint
- [`AGENTS.md`](./AGENTS.md): AI-facing repo rules
- [`apps/docs/`](./apps/docs): production Nextra docs app and source-controlled docs content
- [`apps/web/`](./apps/web): Next.js landing surface and future main web app
- [`packages/design-tokens/`](./packages/design-tokens): shared token contract
- [`docs/product/vision.md`](./docs/product/vision.md): source product scope and roadmap
- [`docs/product/visionvv2.md`](./docs/product/visionvv2.md): deep source product spec

If a change affects product direction, architecture boundaries, or contribution rules, update the relevant doc in the same change.

## Repo Design Rules

### Product rules

- Keep the platform coherent.
- Group features into clear module families.
- Prefer depth in a few modules over shallow breadth.
- Preserve a consistent educational experience across modules.

### UI rules

- Default visual direction: futuristic systems lab, not generic SaaS.
- Prioritize structured layouts, strong visual hierarchy, and engineering density.
- Avoid default-looking Tailwind compositions.
- Motion should explain behavior, not decorate empty space.
- Preserve accessibility and responsiveness.

### UX rules

Every user-facing module should make it easy to answer:

- what problem does this concept solve
- what approaches are common
- what tradeoffs exist
- what breaks under failure or scale
- when should each approach be used

### Frontend rules

- Prefer Next.js with TypeScript for the main web surface.
- Keep simulation logic separate from presentational UI.
- Avoid giant page files and unclear client/server boundaries.
- Shared primitives should be reusable and named consistently.
- Content structure should be extensible for future labs and templates.

### Backend rules

- Keep business logic out of HTTP handlers.
- Separate API, application, domain, and infrastructure concerns.
- Design async work to be observable and retry-safe.
- Treat auth, RBAC, idempotency, and reliability as first-class concerns.

## Contribution Rules

AI assistance is allowed, but output quality is the acceptance bar.

Expected standards:

- contributors must understand submitted changes
- non-trivial changes should come with clear reasoning
- docs must stay in sync with implementation
- naming and structure must remain consistent
- avoid unrelated refactors in focused changes

## Definition Of Done

A meaningful feature is not done until it includes the relevant mix of:

- implementation
- documentation updates
- testing where applicable
- clear naming and structure
- alignment with StackLab's product direction

## Preferred Future Structure

The repo now uses a monorepo direction with:

- `apps/web` for the main web product
- `apps/docs` for the source docs content and production Nextra frontend
- shared config packages for TypeScript and ESLint
- a shared design-tokens package for CSS-variable-first theming

Do not extract a shared React UI package until there is a second real consumer.

## Safety Rules For Agents

Do not:

- rewrite the product into a different category
- replace the design direction with generic template aesthetics
- add features with no clear relationship to the product pillars
- introduce heavy abstraction before the product needs it
- remove docs that encode project intent without replacing them
