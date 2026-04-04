# Testing

## Current State

The framework now has the start of isolated tests around public components.

Current baseline coverage includes:

- `ButtonComponent`
- `ChartCardComponent`
- `DataTableComponent`

These tests verify framework behavior rather than app-specific showcase output.

## Testing Standard

Every public component should eventually have:

- unit tests for typed inputs and outputs
- DOM tests for rendered states
- interaction tests for keyboard and pointer behavior
- accessibility checks where relevant

## Recommended Coverage Priorities

### Primitives

Test:

- class/state application
- disabled/active states
- structural rendering

Examples:

- button variants
- tab active state
- alert tones
- progress clamping

### Composites

Test:

- empty states
- configuration behavior
- sorting/filtering/pagination logic
- optional sections like legends or metrics
- event emission

Examples:

- chart legend toggle
- data-table search/filter/sort behavior
- row click and state change events

## Gaps Still Open

The framework is not yet at the desired level for:

- comprehensive component coverage
- accessibility-focused test coverage
- visual regression testing
- docs example smoke coverage

## Next Hardening Steps

1. Add specs for remaining primitives.
2. Add output/event assertions for interactive composites.
3. Add docs example tests once the docs app is separated from the current showcase page.
4. Enable real coverage reporting in CI.
