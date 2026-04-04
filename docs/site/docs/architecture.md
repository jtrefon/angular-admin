# Architecture

## Intent

The repository is being split into a clear framework layer and a docs/showcase layer.

## Framework Layer

The reusable framework lives under `src/lib`.

Current structure:

- `src/lib/core`
- `src/lib/primitives`
- `src/lib/composites`
- `src/lib/docs-support`
- `src/lib/public-api.ts`

### `core`

Contains cross-cutting concerns such as:

- theme tokens
- shared models
- future utilities and adapters

### `primitives`

Low-level reusable UI building blocks.

Examples:

- `ButtonComponent`
- `BadgeComponent`
- `FieldComponent`
- `InputComponent`
- `SwitchComponent`
- `PanelComponent`

These should remain:

- agnostic
- data-free
- app-route-free
- easy to test

### `composites`

Higher-value reusable widgets built from primitives.

Examples:

- `StatCardComponent`
- `ActivityFeedComponent`
- `ChartCardComponent`
- `DataTableComponent`

These may contain framework behavior, but must not contain business-specific sample data.

### `docs-support`

Helpers that are useful for documentation but are not intended to be core framework primitives.

Current example:

- `SwatchCardComponent`

## App Layer

The showcase app currently lives under `src/app`.

This layer is still transitional. It should eventually become a dedicated docs application with:

- page layout
- examples
- written guidance
- live component demos

## Public API

Consumers should treat `src/lib/public-api.ts` as the only supported import boundary.

Do not document deep file-path imports as the framework contract.

## Design Rules

Framework components must:

- accept typed inputs
- avoid hardcoded business data
- emit meaningful events where interaction exists
- depend only on the framework layer
- be documented and tested in isolation

Docs/showcase code may:

- provide sample data
- compose examples
- demonstrate patterns
- explain usage

But docs code should not define the reusable contract.
