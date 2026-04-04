import { CommonModule } from '@angular/common';
import { Component, computed, input, output, signal } from '@angular/core';
import { BadgeComponent } from '../../primitives/badge/badge.component';
import { ButtonComponent } from '../../primitives/button/button.component';
import {
  DataTableColumn,
  DataTableFilter,
  DataTableSearch,
  DataTableState,
} from './data-table.models';

@Component({
  selector: 'ui-data-table',
  imports: [CommonModule, BadgeComponent, ButtonComponent],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent<T extends Record<string, unknown>> {
  readonly rows = input.required<T[]>();
  readonly columns = input.required<DataTableColumn<T>[]>();
  readonly filters = input<DataTableFilter<T>[]>([]);
  readonly search = input<DataTableSearch<T> | null>(null);
  readonly pageSize = input(4);
  readonly initialSortColumnId = input<string | null>(null);
  readonly initialSortDirection = input<'asc' | 'desc'>('asc');
  readonly trackBy = input<(index: number, row: T) => unknown>((index, row) => index ?? row);

  readonly stateChange = output<DataTableState>();
  readonly rowClick = output<T>();

  protected readonly query = signal('');
  protected readonly filterState = signal<Record<string, string>>({});
  protected readonly sortColumnId = signal<string | null>(null);
  protected readonly sortDirection = signal<'asc' | 'desc'>('asc');
  protected readonly currentPage = signal(1);

  constructor() {
    queueMicrotask(() => {
      const initialSortColumnId = this.initialSortColumnId();
      if (!initialSortColumnId) {
        return;
      }

      this.sortColumnId.set(initialSortColumnId);
      this.sortDirection.set(this.initialSortDirection());
    });
  }

  protected readonly suggestions = computed(() => {
    const search = this.search();
    const query = this.query().trim().toLowerCase();
    if (!search || !query) {
      return [];
    }

    const terms = new Set<string>();
    for (const row of this.rows()) {
      for (const field of search.fields) {
        const value = field(row);
        if (value.toLowerCase().includes(query)) {
          terms.add(value);
        }
      }
    }

    return Array.from(terms).slice(0, 5);
  });

  protected readonly filteredRows = computed(() => {
    const search = this.search();
    const query = this.query().trim().toLowerCase();
    const filterState = this.filterState();

    return this.rows().filter((row) => {
      const matchesSearch =
        !search ||
        !query ||
        search.fields.some((field) => field(row).toLowerCase().includes(query));

      const matchesFilters = this.filters().every((filter) => {
        const selectedValue = filterState[filter.id] ?? filter.allLabel;
        return selectedValue === filter.allLabel || filter.accessor(row) === selectedValue;
      });

      return matchesSearch && matchesFilters;
    });
  });

  protected readonly sortedRows = computed(() => {
    const sortColumnId = this.sortColumnId();
    if (!sortColumnId) {
      return this.filteredRows();
    }

    const column = this.columns().find((candidate) => candidate.id === sortColumnId);
    if (!column) {
      return this.filteredRows();
    }

    const direction = this.sortDirection();
    const multiplier = direction === 'asc' ? 1 : -1;

    return [...this.filteredRows()].sort((left, right) => {
      const leftValue = column.accessor(left);
      const rightValue = column.accessor(right);

      if (typeof leftValue === 'number' && typeof rightValue === 'number') {
        return (leftValue - rightValue) * multiplier;
      }

      return String(leftValue).localeCompare(String(rightValue)) * multiplier;
    });
  });

  protected readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.sortedRows().length / this.pageSize())),
  );

  protected readonly pageRows = computed(() => {
    const page = Math.min(this.currentPage(), this.totalPages());
    const start = (page - 1) * this.pageSize();
    return this.sortedRows().slice(start, start + this.pageSize());
  });

  protected readonly activeState = computed<DataTableState>(() => ({
    query: this.query(),
    filters: this.filterState(),
    sort: this.sortColumnId()
      ? { columnId: this.sortColumnId()!, direction: this.sortDirection() }
      : null,
    page: this.currentPage(),
  }));

  protected updateSearch(value: string): void {
    this.query.set(value);
    this.currentPage.set(1);
    this.emitState();
  }

  protected applySuggestion(value: string): void {
    this.query.set(value);
    this.currentPage.set(1);
    this.emitState();
  }

  protected updateFilter(filterId: string, value: string): void {
    this.filterState.update((state) => ({ ...state, [filterId]: value }));
    this.currentPage.set(1);
    this.emitState();
  }

  protected sortBy(column: DataTableColumn<T>): void {
    if (!column.sortable) {
      return;
    }

    if (this.sortColumnId() === column.id) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumnId.set(column.id);
      this.sortDirection.set(column.initialSortDirection ?? 'asc');
    }

    this.emitState();
  }

  protected prevPage(): void {
    this.currentPage.update((page) => Math.max(1, page - 1));
    this.emitState();
  }

  protected nextPage(): void {
    this.currentPage.update((page) => Math.min(this.totalPages(), page + 1));
    this.emitState();
  }

  protected getDisplayValue(column: DataTableColumn<T>, row: T): string {
    const rawValue = column.accessor(row);
    return column.formatter ? column.formatter(rawValue, row) : String(rawValue);
  }

  protected onRowClick(row: T): void {
    this.rowClick.emit(row);
  }

  protected filterValue(filter: DataTableFilter<T>): string {
    return this.filterState()[filter.id] ?? filter.allLabel;
  }

  private emitState(): void {
    this.stateChange.emit(this.activeState());
  }
}
