import { Component } from '@angular/core';
import {
  DataTableComponent,
  type DataTableColumn,
  type DataTableFilter,
  type DataTableSearch,
} from '../../../lib/public-api';

type SmartTableRow = {
  team: string;
  owner: string;
  status: string;
  region: string;
  slaMinutes: number;
  coverage: number;
  volume: number;
};

@Component({
  selector: 'app-ds-smart-table',
  imports: [DataTableComponent],
  templateUrl: './ds-smart-table.component.html',
})
export class DsSmartTableComponent {
  protected readonly rows: SmartTableRow[] = [
    {
      team: 'Finance',
      owner: 'Aisling Byrne',
      status: 'Healthy',
      region: 'EMEA',
      slaMinutes: 80,
      coverage: 99.1,
      volume: 482,
    },
    {
      team: 'Support',
      owner: 'Mina Patel',
      status: 'At risk',
      region: 'Americas',
      slaMinutes: 190,
      coverage: 94.6,
      volume: 811,
    },
    {
      team: 'Risk',
      owner: 'Jonas Weber',
      status: 'Healthy',
      region: 'EMEA',
      slaMinutes: 58,
      coverage: 97.8,
      volume: 214,
    },
    {
      team: 'Ops',
      owner: 'Clara Rossi',
      status: 'Needs review',
      region: 'APAC',
      slaMinutes: 164,
      coverage: 95.2,
      volume: 362,
    },
    {
      team: 'Commerce',
      owner: 'Nina Howard',
      status: 'Healthy',
      region: 'Americas',
      slaMinutes: 72,
      coverage: 98.8,
      volume: 591,
    },
    {
      team: 'Platform',
      owner: 'Mateo Silva',
      status: 'At risk',
      region: 'EMEA',
      slaMinutes: 205,
      coverage: 93.9,
      volume: 177,
    },
    {
      team: 'Identity',
      owner: 'Hana Kim',
      status: 'Healthy',
      region: 'APAC',
      slaMinutes: 49,
      coverage: 99.4,
      volume: 134,
    },
    {
      team: 'Compliance',
      owner: 'Eoin Murphy',
      status: 'Needs review',
      region: 'EMEA',
      slaMinutes: 122,
      coverage: 96.7,
      volume: 288,
    },
  ];

  protected readonly search: DataTableSearch<SmartTableRow> = {
    label: 'Search team or owner',
    placeholder: 'Type to search',
    fields: [(row) => row.team, (row) => row.owner, (row) => row.region],
  };

  protected readonly filters: DataTableFilter<SmartTableRow>[] = [
    {
      id: 'status',
      label: 'Status',
      allLabel: 'All statuses',
      accessor: (row) => row.status,
      options: [
        { label: 'Healthy', value: 'Healthy' },
        { label: 'At risk', value: 'At risk' },
        { label: 'Needs review', value: 'Needs review' },
      ],
    },
    {
      id: 'region',
      label: 'Region',
      allLabel: 'All regions',
      accessor: (row) => row.region,
      options: [
        { label: 'EMEA', value: 'EMEA' },
        { label: 'Americas', value: 'Americas' },
        { label: 'APAC', value: 'APAC' },
      ],
    },
  ];

  protected readonly columns: DataTableColumn<SmartTableRow>[] = [
    {
      id: 'team',
      header: 'Team',
      accessor: (row) => row.team,
      sortable: true,
      initialSortDirection: 'asc',
    },
    {
      id: 'owner',
      header: 'Owner',
      accessor: (row) => row.owner,
      sortable: true,
      initialSortDirection: 'asc',
    },
    {
      id: 'status',
      header: 'Status',
      accessor: (row) => row.status,
      sortable: true,
      kind: 'badge',
      badgeTone: (row) => this.statusTone(row.status),
    },
    {
      id: 'region',
      header: 'Region',
      accessor: (row) => row.region,
      sortable: true,
      initialSortDirection: 'asc',
    },
    {
      id: 'slaMinutes',
      header: 'SLA',
      accessor: (row) => row.slaMinutes,
      sortable: true,
      formatter: (value) => this.formatSla(Number(value)),
    },
    {
      id: 'coverage',
      header: 'Coverage',
      accessor: (row) => row.coverage,
      sortable: true,
      initialSortDirection: 'desc',
      formatter: (value) => `${value}%`,
    },
    {
      id: 'volume',
      header: 'Volume',
      accessor: (row) => row.volume,
      sortable: true,
      formatter: (value) => String(value),
    },
  ];

  private formatSla(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return hours > 0 ? `${hours}h ${remainder}m` : `${remainder}m`;
  }

  private statusTone(status: SmartTableRow['status']): 'success' | 'warning' | 'info' {
    switch (status) {
      case 'Healthy':
        return 'success';
      case 'At risk':
        return 'warning';
      default:
        return 'info';
    }
  }
}
