# Angular Admin Design System

Angular 21 design-system prototype for a backoffice/admin UI. The app currently ships as a routed showcase with reusable standalone components, global theme tokens, and category pages for foundations, navigation, forms, charts, data tables, feedback, and workflow patterns.

## Framework Readiness Review

Short answer: not fully yet.

What is solid already:

- A consistent visual language exists in [`src/styles.css`](./src/styles.css): tokens, surfaces, spacing, controls, tables, alerts, navigation, and layout rules are coherent.
- The app shell and route structure are consistent enough to serve as the documentation host.
- Several components already expose useful input-based APIs and can be reused with low friction.

What blocks calling this a deployable framework today:

- Some components are still showcase components, not product primitives. They own hardcoded data or fixed markup instead of accepting typed inputs and emitting events.
- The design system is still heavily coupled to global CSS classes in [`src/styles.css`](./src/styles.css). That is acceptable for an app, but weak for packaging as a reusable framework unless the style contract is formalized.
- The smart table is interactive, but it is not generic. It contains internal row data, fixed columns, fixed filters, and no output events.
- The form showcase is not a form component API. It is a static demo of styles and layout, not a configurable input system.
- The chart showcase is partially reusable but still bakes in one radial metric (`84%`) and assumes a specific card layout.

Recommendation:

- Treat the current codebase as a strong `v0` design-system application, not a publishable framework.
- Document the current system now.
- If you want framework-grade reuse, the next pass should convert showcase components into API-driven primitives under a dedicated `ui/` layer.

## App Structure

Core app files:

- [`src/app/app.html`](./src/app/app.html): global shell with sidebar and topbar.
- [`src/app/app.routes.ts`](./src/app/app.routes.ts): route map for `design-system/:section`.
- [`src/app/design-system-page.ts`](./src/app/design-system-page.ts): route-driven page controller that selects which design-system category to render.
- [`src/styles.css`](./src/styles.css): global design tokens and component styling contract.

Route categories:

- `/design-system/overview`
- `/design-system/foundations`
- `/design-system/navigation`
- `/design-system/forms`
- `/design-system/charts`
- `/design-system/data`
- `/design-system/feedback`
- `/design-system/patterns`

## Theme Contract

The visual system is token-driven from `:root` in [`src/styles.css`](./src/styles.css).

Primary token groups:

- Typography: `--font-sans`, `--font-mono`
- Colors: `--color-canvas`, `--color-surface`, `--color-panel`, `--color-primary`, `--color-accent`, `--color-info`, `--color-success`, `--color-warning`, `--color-danger`
- Layout and spacing: `--space-*`, `--content-max`
- Shape and elevation: `--radius-*`, `--shadow-soft`, `--shadow-strong`

Reusable global primitives are also defined in CSS:

- Buttons: `.ui-button`, `.ui-button--primary`, `.ui-button--secondary`, `.ui-button--ghost`
- Inputs: `.ui-input`, `.ui-field`, `.ui-label`, `.ui-textarea`
- Badges and tabs: `.ui-badge`, `.ui-chip`, `.ui-tab`
- Alerts: `.ui-alert`, tone variants
- Table: `.ui-table`, `.table-shell`, `.sort-button`
- Avatars, progress bars, cards, segmented controls, switches, empty states, pagination, timeline, chart styling

## Component Catalog

### 1. `DsShowcasePanelComponent`

File:

- [`src/app/design-system/components/ds-showcase-panel.component.ts`](./src/app/design-system/components/ds-showcase-panel.component.ts)

Purpose:

- Generic content container for most cards in the system.

Inputs:

- `eyebrow: string`
- `title: string` required
- `description: string`
- `tone: 'default' | 'dark'`

Usage:

```html
<app-ds-showcase-panel eyebrow="Analytics" title="Request volume" description="Compact chart card">
  <!-- projected content -->
</app-ds-showcase-panel>
```

Readiness:

- Reusable now.

### 2. `DsStatCardComponent`

File:

- [`src/app/design-system/components/ds-stat-card.component.ts`](./src/app/design-system/components/ds-stat-card.component.ts)

Purpose:

- Small KPI card with label, value, delta, and tone.

Inputs:

- `label: string` required
- `value: string` required
- `delta: string` required
- `tone: 'success' | 'warning' | 'info' | 'danger'`

Usage:

```html
<app-ds-stat-card label="Monthly revenue" value="$284.2K" delta="+18.4%" tone="success" />
```

Readiness:

- Reusable now.

### 3. `DsSwatchCardComponent`

File:

- [`src/app/design-system/components/ds-swatch-card.component.ts`](./src/app/design-system/components/ds-swatch-card.component.ts)

Purpose:

- Displays a token/color swatch with variable name and hex value.

Inputs:

- `name: string` required
- `variable: string` required
- `hex: string` required

Usage:

```html
<app-ds-swatch-card name="Primary" variable="--color-primary" hex="#1c7c54" />
```

Readiness:

- Reusable now.

### 4. `DsActivityFeedComponent`

File:

- [`src/app/design-system/components/ds-activity-feed.component.ts`](./src/app/design-system/components/ds-activity-feed.component.ts)

Purpose:

- Timeline/list component for recent events or audit history.

Inputs:

- `items: Array<{ title: string; meta: string }>` required

Usage:

```html
<app-ds-activity-feed [items]="activityItems" />
```

Readiness:

- Reusable now.

### 5. `DsChartShowcaseComponent`

File:

- [`src/app/design-system/components/ds-chart-showcase.component.ts`](./src/app/design-system/components/ds-chart-showcase.component.ts)

Purpose:

- Demonstrates a compact analytics card with bar chart, total, legend, and ring metric.

Inputs:

- `series: Array<{ label: string; value: number }>` required
- `total: string` required
- `label: string` required

Usage:

```html
<app-ds-chart-showcase [series]="weeklySeries" total="18.4K" label="Weekly requests" />
```

Important limitation:

- The circular metric currently renders a hardcoded `84%` in the template. That should become an input before this is treated as framework-grade.

Readiness:

- Partially reusable.
- Needs one more API pass.

### 6. `DsSmartTableComponent`

File:

- [`src/app/design-system/components/ds-smart-table.component.ts`](./src/app/design-system/components/ds-smart-table.component.ts)

Purpose:

- Demonstrates an interactive admin table with:
  search
  typeahead suggestions
  status filtering
  region filtering
  sorting
  pagination

Usage:

```html
<app-ds-smart-table />
```

Important limitations:

- Table rows are hardcoded inside the component.
- Columns are fixed in the template.
- Filters are fixed to status and region.
- No outputs exist for row selection, pagination, sort changes, or filter changes.
- No generic typing/input model exists yet.

Readiness:

- Good reference implementation.
- Not framework-ready.

To make it framework-grade, it should accept:

- `columns`
- `rows`
- `pageSize`
- `filters`
- `searchPlaceholder`
- optional badge/render config

and emit:

- `sortChange`
- `pageChange`
- `filterChange`
- `searchChange`
- optional `rowClick`

### 7. `DsFormShowcaseComponent`

File:

- [`src/app/design-system/components/ds-form-showcase.component.ts`](./src/app/design-system/components/ds-form-showcase.component.ts)

Purpose:

- Demonstrates form styling for text inputs, selects, date input, textarea, segmented controls, switches, checkboxes, and radios.

Usage:

```html
<app-ds-form-showcase />
```

Important limitations:

- No inputs.
- No outputs.
- No Angular `FormGroup` integration.
- No validation API.
- No field abstraction.

Readiness:

- Showcase only.
- Not framework-ready.

To make it framework-grade, this should be split into primitives such as:

- `UiTextFieldComponent`
- `UiSelectFieldComponent`
- `UiTextareaComponent`
- `UiSwitchComponent`
- `UiCheckboxComponent`
- `UiRadioGroupComponent`
- `UiSegmentedControlComponent`

### 8. `DsSectionComponent`

File:

- [`src/app/design-system/components/ds-section.component.ts`](./src/app/design-system/components/ds-section.component.ts)

Purpose:

- Section wrapper with eyebrow, title, description, and projected content.

Inputs:

- `id: string`
- `eyebrow: string`
- `title: string` required
- `description: string`
- `compact: boolean`

Usage:

```html
<app-ds-section
  id="forms"
  eyebrow="Forms"
  title="Advanced admin forms"
  description="Dense, production-oriented forms."
>
  <!-- projected content -->
</app-ds-section>
```

Important note:

- This component exists and is reusable, but it is currently not used by the routed page after the later layout simplification.

Readiness:

- Reusable now.

## Current Reuse Tiers

Framework-ready now:

- `DsShowcasePanelComponent`
- `DsStatCardComponent`
- `DsSwatchCardComponent`
- `DsActivityFeedComponent`
- `DsSectionComponent`

Reusable with small API cleanup:

- `DsChartShowcaseComponent`

Showcase/reference only:

- `DsSmartTableComponent`
- `DsFormShowcaseComponent`

## How To Use The Current System

### Run the app

```bash
npm install
npm start
```

Then open:

```text
http://localhost:4200/design-system/overview
```

### Build

```bash
npm run build
```

### Add a new showcase category

1. Add a route id to `sectionMenu` in [`src/app/design-system-page.ts`](./src/app/design-system-page.ts).
2. Add matching intro metadata to `sectionIntro`.
3. Add a new `@case` block in [`src/app/design-system-page.html`](./src/app/design-system-page.html).
4. Add a sidebar link in [`src/app/app.html`](./src/app/app.html).
5. Add the prerender param in [`src/app/app.routes.server.ts`](./src/app/app.routes.server.ts).

## What To Do Next If This Becomes A Real Framework

Recommended extraction order:

1. Split form showcase into true field primitives with typed inputs and Angular forms support.
2. Convert smart table into a generic `UiDataTableComponent`.
3. Extract global CSS primitives into a documented contract or package-scoped style layer.
4. Move showcase route data out of the page component into fixture/demo files.
5. Add stories or route demos per component.
6. Add tests around sorting, filtering, pagination, and accessibility behavior.

## Status

This repository is documented enough to work as a design-system application and internal showcase.

It is not yet finished enough to be called a reusable framework package without another extraction pass.
