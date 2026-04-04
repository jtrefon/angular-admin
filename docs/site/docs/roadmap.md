# Roadmap

## Current Phase

The repository has completed the first major extraction from showcase app toward reusable framework:

- public framework surface in `src/lib/public-api.ts`
- reusable primitives and composites moved under `src/lib`
- table and chart behavior extracted from app wrappers
- docs-ready Markdown structure under `docs/`

## Remaining Work Before Production Readiness

### 1. Docs App Separation

The current routed showcase page still mixes many examples into one large page controller.

Goal:

- move to a dedicated docs app structure
- isolate examples by component
- make written docs and demos easier to evolve

### 2. Stronger Tests

Goal:

- add isolated specs for all public primitives
- expand composite coverage
- add event emission checks
- enable coverage reporting in CI

### 3. Form System Design

The primitive controls are present, but the framework does not yet define a full higher-level form system.

Goal:

- validation guidance
- field messaging states
- consistent composition patterns
- optional form wrappers/patterns

### 4. Theming Hardening

Goal:

- document token usage per component
- reduce reliance on app-shell CSS
- define stable visual extension points

### 5. Data Table Evolution

The table is now generic for client-side configuration, but a more complete framework version should add:

- controlled state mode
- pluggable data source abstraction
- loading/empty/error states
- cell templates and richer renderers

### 6. Docs Hosting

Markdown docs are enough for now, but the long-term target should be:

- GitHub Pages-hosted docs
- richer navigation
- example catalog
- public component pages
- eventually a dedicated generated docs experience if needed
