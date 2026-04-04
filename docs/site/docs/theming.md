# Theming

## Token Source

The base theme contract now begins in:

- `src/lib/core/tokens/theme.css`

This file contains:

- typography tokens
- color tokens
- spacing tokens
- radius tokens
- shadow tokens

## Current Contract

Key token families:

- `--font-sans`
- `--font-mono`
- `--color-*`
- `--space-*`
- `--radius-*`
- `--shadow-*`

The app-specific background and showcase presentation still live in `src/styles.css`.

## Current State

The framework still relies on shared CSS classes for many structural styles.

That is acceptable for the current stage, but not the final ideal state.

The long-term goal should be:

- stable theme tokens in `src/lib/core`
- component-local styling where practical
- explicit docs for theme hooks
- minimal app-shell coupling

## Consumer Expectation

For now, framework consumers should assume:

- token usage is part of the public contract
- broad showcase layout styles are not part of the public contract
- docs-only presentation classes are not framework guarantees

## Recommended Next Step

Document, per component:

- which CSS variables it depends on
- which visual states are supported
- which classes are implementation details only
