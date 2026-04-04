# Primitives

These are the low-level building blocks exported from `src/lib/public-api.ts`.

## Button

Selector: `ui-button`

Inputs:

- `variant: 'primary' | 'secondary' | 'ghost'`
- `type: 'button' | 'submit' | 'reset'`
- `disabled: boolean`

Example:

```html
<ui-button>Save</ui-button>
<ui-button variant="secondary">Cancel</ui-button>
<ui-button variant="ghost">More</ui-button>
```

## Badge

Selector: `ui-badge`

Inputs:

- `tone: 'accent' | 'success' | 'warning' | 'info' | 'danger'`

Example:

```html
<ui-badge tone="success">Healthy</ui-badge>
```

## Chip

Selector: `ui-chip`

Usage:

```html
<ui-chip>Assigned to me</ui-chip>
```

## Tab

Selector: `ui-tab`

Inputs:

- `active: boolean`

Example:

```html
<ui-tab [active]="true">Overview</ui-tab>
```

## Alert

Selector: `ui-alert`

Inputs:

- `tone: 'info' | 'success' | 'warning'`

Example:

```html
<ui-alert tone="warning"> <strong>Attention:</strong> Review required. </ui-alert>
```

## Field

Selector: `ui-field`

Inputs:

- `label: string`
- `full: boolean`
- `forId: string`

Example:

```html
<ui-field label="Owner">
  <ui-input value="Aisling Byrne" />
</ui-field>
```

## Input

Selector: `ui-input`

Inputs:

- `id: string`
- `type: 'text' | 'date' | 'email' | 'number' | 'password'`
- `value: string`
- `placeholder: string`

## Select

Selector: `ui-select`

Inputs:

- `id: string`
- `value: string`
- `options: SelectOption[]`

Example:

```html
<ui-select [options]="regionOptions" value="emea" />
```

## Textarea

Selector: `ui-textarea`

Inputs:

- `id: string`
- `rows: number`
- `value: string`

## Check

Selector: `ui-check`

Inputs:

- `checked: boolean`
- `type: 'checkbox' | 'radio'`
- `name: string`

## Switch

Selector: `ui-switch`

Inputs:

- `checked: boolean`

## Progress

Selector: `ui-progress`

Inputs:

- `value: number`

## Avatar

Selector: `ui-avatar`

Inputs:

- `tone: 'default' | 'accent' | 'dark'`

## Panel

Selector: `ui-panel`

Inputs:

- `eyebrow: string`
- `title: string`
- `description: string`
- `tone: 'default' | 'dark'`

## Section

Selector: `ui-section`

Inputs:

- `id: string`
- `eyebrow: string`
- `title: string`
- `description: string`
- `compact: boolean`
