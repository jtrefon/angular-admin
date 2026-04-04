import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

type SmartTableRow = {
  team: string;
  owner: string;
  status: string;
  region: string;
  slaMinutes: number;
  coverage: number;
  volume: number;
};

type SortKey = 'team' | 'owner' | 'status' | 'region' | 'slaMinutes' | 'coverage' | 'volume';

@Component({
  selector: 'app-ds-smart-table',
  imports: [CommonModule],
  templateUrl: './ds-smart-table.component.html'
})
export class DsSmartTableComponent {
  protected readonly rows = signal<SmartTableRow[]>([
    { team: 'Finance', owner: 'Aisling Byrne', status: 'Healthy', region: 'EMEA', slaMinutes: 80, coverage: 99.1, volume: 482 },
    { team: 'Support', owner: 'Mina Patel', status: 'At risk', region: 'Americas', slaMinutes: 190, coverage: 94.6, volume: 811 },
    { team: 'Risk', owner: 'Jonas Weber', status: 'Healthy', region: 'EMEA', slaMinutes: 58, coverage: 97.8, volume: 214 },
    { team: 'Ops', owner: 'Clara Rossi', status: 'Needs review', region: 'APAC', slaMinutes: 164, coverage: 95.2, volume: 362 },
    { team: 'Commerce', owner: 'Nina Howard', status: 'Healthy', region: 'Americas', slaMinutes: 72, coverage: 98.8, volume: 591 },
    { team: 'Platform', owner: 'Mateo Silva', status: 'At risk', region: 'EMEA', slaMinutes: 205, coverage: 93.9, volume: 177 },
    { team: 'Identity', owner: 'Hana Kim', status: 'Healthy', region: 'APAC', slaMinutes: 49, coverage: 99.4, volume: 134 },
    { team: 'Compliance', owner: 'Eoin Murphy', status: 'Needs review', region: 'EMEA', slaMinutes: 122, coverage: 96.7, volume: 288 }
  ]);

  protected readonly searchTerm = signal('');
  protected readonly selectedStatus = signal('All statuses');
  protected readonly selectedRegion = signal('All regions');
  protected readonly sortKey = signal<SortKey>('coverage');
  protected readonly sortDirection = signal<'asc' | 'desc'>('desc');
  protected readonly currentPage = signal(1);
  protected readonly pageSize = 4;

  protected readonly statuses = ['All statuses', 'Healthy', 'At risk', 'Needs review'];
  protected readonly regions = ['All regions', 'EMEA', 'Americas', 'APAC'];

  protected readonly suggestions = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    if (!query) {
      return [];
    }

    const terms = new Set<string>();
    for (const row of this.rows()) {
      [row.team, row.owner, row.region].forEach((value) => {
        if (value.toLowerCase().includes(query)) {
          terms.add(value);
        }
      });
    }

    return Array.from(terms).slice(0, 5);
  });

  private readonly filteredRows = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const status = this.selectedStatus();
    const region = this.selectedRegion();

    return this.rows().filter((row) => {
      const matchesQuery =
        !query ||
        row.team.toLowerCase().includes(query) ||
        row.owner.toLowerCase().includes(query) ||
        row.region.toLowerCase().includes(query);
      const matchesStatus = status === 'All statuses' || row.status === status;
      const matchesRegion = region === 'All regions' || row.region === region;

      return matchesQuery && matchesStatus && matchesRegion;
    });
  });

  protected readonly sortedRows = computed(() => {
    const key = this.sortKey();
    const direction = this.sortDirection();
    const multiplier = direction === 'asc' ? 1 : -1;

    return [...this.filteredRows()].sort((left, right) => {
      const leftValue = left[key];
      const rightValue = right[key];

      if (typeof leftValue === 'number' && typeof rightValue === 'number') {
        return (leftValue - rightValue) * multiplier;
      }

      return String(leftValue).localeCompare(String(rightValue)) * multiplier;
    });
  });

  protected readonly totalPages = computed(() => Math.max(1, Math.ceil(this.sortedRows().length / this.pageSize)));

  protected readonly paginatedRows = computed(() => {
    const page = Math.min(this.currentPage(), this.totalPages());
    const start = (page - 1) * this.pageSize;
    return this.sortedRows().slice(start, start + this.pageSize);
  });

  protected updateSearch(value: string): void {
    this.searchTerm.set(value);
    this.currentPage.set(1);
  }

  protected applySuggestion(value: string): void {
    this.searchTerm.set(value);
    this.currentPage.set(1);
  }

  protected updateStatus(value: string): void {
    this.selectedStatus.set(value);
    this.currentPage.set(1);
  }

  protected updateRegion(value: string): void {
    this.selectedRegion.set(value);
    this.currentPage.set(1);
  }

  protected sortBy(key: SortKey): void {
    if (this.sortKey() === key) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortKey.set(key);
      this.sortDirection.set(key === 'team' || key === 'owner' ? 'asc' : 'desc');
    }
  }

  protected prevPage(): void {
    this.currentPage.update((page) => Math.max(1, page - 1));
  }

  protected nextPage(): void {
    this.currentPage.update((page) => Math.min(this.totalPages(), page + 1));
  }

  protected formatSla(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return hours > 0 ? `${hours}h ${remainder}m` : `${remainder}m`;
  }
}
