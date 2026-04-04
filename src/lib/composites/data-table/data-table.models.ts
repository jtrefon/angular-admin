export type DataTableCellKind = 'text' | 'badge';

export type DataTableColumn<T = Record<string, unknown>> = {
  id: string;
  header: string;
  accessor: (row: T) => string | number;
  sortable?: boolean;
  initialSortDirection?: 'asc' | 'desc';
  kind?: DataTableCellKind;
  formatter?: (value: string | number, row: T) => string;
  badgeTone?: (row: T) => 'accent' | 'success' | 'warning' | 'info' | 'danger';
};

export type DataTableFilterOption = {
  label: string;
  value: string;
};

export type DataTableFilter<T = Record<string, unknown>> = {
  id: string;
  label: string;
  accessor: (row: T) => string;
  allLabel: string;
  options: DataTableFilterOption[];
};

export type DataTableSearch<T = Record<string, unknown>> = {
  label: string;
  placeholder: string;
  fields: Array<(row: T) => string>;
};

export type DataTableSort = {
  columnId: string;
  direction: 'asc' | 'desc';
};

export type DataTableState = {
  query: string;
  filters: Record<string, string>;
  sort: DataTableSort | null;
  page: number;
};
