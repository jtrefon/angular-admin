# Angular Admin Framework

Angular Admin Framework is an Angular 21 component framework for building internal tools, backoffice products, operational dashboards, and admin applications.

The current repository contains two things:

- a reusable framework surface under `src/lib`
- a routed showcase app under `src/app`

This docs site is intentionally Markdown-first for now. It is designed to be hosted from the repository `docs/` folder with GitHub Pages while the framework contract and testing surface continue to harden.

## Purpose

The project is moving from a design-system prototype into a reusable, agnostic framework.

The framework goals are:

- generic components with typed APIs
- configurable data and rendering
- reusable primitives and composites
- clear theme contract
- isolated tests around public component behavior
- deployable docs that explain usage and readiness

## Current Status

What is already in the framework layer:

- primitives for buttons, badges, chips, tabs, alerts, fields, inputs, selects, textareas, checks, switches, progress, avatars, panels, and sections
- composites for stat cards, activity feeds, chart cards, and data tables
- theme tokens extracted into `src/lib/core/tokens/theme.css`
- a single public export surface in `src/lib/public-api.ts`

What is still in transition:

- the docs/showcase app is still route-driven from `src/app/design-system-page.ts`
- form patterns are still example compositions rather than a fully designed form subsystem
- component test coverage is present but still early
- docs are Markdown-based rather than a dedicated generated docs app

## Documentation

- [Architecture](./architecture.md)
- [Theming](./theming.md)
- [Testing](./testing.md)
- [Primitives](./components/primitives.md)
- [Composites](./components/composites.md)
- [Roadmap](./roadmap.md)

## Component Groups

Framework primitives:

- Button
- Badge
- Chip
- Tab
- Alert
- Field
- Input
- Select
- Textarea
- Check
- Switch
- Progress
- Avatar
- Panel
- Section

Framework composites:

- Stat Card
- Activity Feed
- Chart Card
- Data Table

Docs-only support components:

- Swatch Card

## GitHub Pages

This repository is now structured to deploy the generated Docusaurus build through GitHub Pages.

Recommended setup:

1. Enable GitHub Pages in repository settings.
2. Use the GitHub Actions deployment source.
3. Let the `pages.yml` workflow publish the built site artifact.
4. The site will host the documentation at `/` and the Angular demo under `/demo/`.

## Repository Contract

Until the framework is declared production-ready, treat the docs as the source of truth for:

- what is public
- what is stable
- what is still provisional

The public framework surface is defined in `src/lib/public-api.ts`.
