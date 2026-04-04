# Angular Admin Framework

Angular 21 framework for building admin and backoffice applications with reusable primitives, reusable composites, theme tokens, and a routed showcase application.

## Current Shape

The repository currently contains:

- a reusable framework surface under [`src/lib`](./src/lib)
- a showcase/docs application under [`src/app`](./src/app)
- Docusaurus site source and Markdown documentation under [`docs/site`](./docs/site)

The supported public import boundary is [`src/lib/public-api.ts`](./src/lib/public-api.ts).

## Documentation

Framework and project documentation now lives in [`docs/site`](./docs/site).

Start here:

- [`docs/site/docs/intro.md`](./docs/site/docs/intro.md)
- [`docs/site/docs/architecture.md`](./docs/site/docs/architecture.md)
- [`docs/site/docs/components/index.md`](./docs/site/docs/components/index.md)
- [`docs/site/docs/testing.md`](./docs/site/docs/testing.md)
- [`docs/site/docs/roadmap.md`](./docs/site/docs/roadmap.md)

## Framework Surface

Current primitives include:

- button
- badge
- chip
- tab
- alert
- field
- input
- select
- textarea
- check
- switch
- progress
- avatar
- panel
- section

Current composites include:

- stat card
- activity feed
- chart card
- data table

Docs-support components currently include:

- swatch card

## Status

The framework is materially further along than the initial prototype, but it is still not at final production-readiness.

Major improvements already completed:

- reusable components extracted into `src/lib`
- chart and data-table behavior moved out of app wrappers
- theme tokens split into framework-owned token CSS
- baseline isolated tests added for public framework components
- GitHub Pages-friendly Markdown docs structure added

Major work still remaining:

- broader component test coverage
- richer docs app separation from the current showcase page
- stronger theming contract documentation
- deeper form-system design
- more advanced table state and data-source support

## Development

Run the app:

```bash
npm start
```

Run tests:

```bash
npm test -- --watch=false
```

Build:

```bash
npm run build
```
