# Composites

These are higher-value reusable components built on top of the primitive layer.

## Stat Card

Selector: `ui-stat-card`

Inputs:

- `label: string`
- `value: string`
- `delta: string`
- `tone: 'success' | 'warning' | 'info' | 'danger'`

Example:

```html
<ui-stat-card label="Monthly revenue" value="$284.2K" delta="+18.4%" tone="success" />
```

## Activity Feed

Selector: `ui-activity-feed`

Inputs:

- `items: ActivityFeedItem[]`

Current item model:

```ts
type ActivityFeedItem = {
  title: string;
  meta: string;
};
```

## Chart Card

Selector: `ui-chart-card`

Inputs:

- `series: ChartSeriesPoint[]`
- `total: string`
- `label: string`
- `metric: ChartCardMetric | null`
- `showLegend: boolean`

Models:

```ts
type ChartSeriesPoint = {
  label: string;
  value: number;
};

type ChartCardMetric = {
  value: string;
  progress: number;
};
```

Example:

```html
<ui-chart-card
  [series]="weeklySeries"
  total="18.4K"
  label="Weekly requests"
  [metric]="{ value: '84%', progress: 84 }"
/>
```

## Data Table

Selector: `ui-data-table`

Inputs:

- `rows`
- `columns`
- `filters`
- `search`
- `pageSize`
- `initialSortColumnId`
- `initialSortDirection`
- `trackBy`

Outputs:

- `stateChange`
- `rowClick`

Important characteristics:

- client-side filtering
- client-side search
- configurable columns
- configurable filter definitions
- sortable headers
- built-in pagination
- optional badge cells

Example:

```html
<ui-data-table
  [rows]="rows"
  [columns]="columns"
  [filters]="filters"
  [search]="search"
  [pageSize]="10"
  initialSortColumnId="volume"
  initialSortDirection="desc"
/>
```

## Docs Support

`docs-swatch-card` is currently a docs-support component rather than a core framework primitive. It is useful for token and theme documentation but should not be treated as a production application dependency by default.
