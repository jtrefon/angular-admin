import { TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import type { DataTableColumn, DataTableFilter, DataTableSearch } from './data-table.models';

type TestRow = {
  team: string;
  owner: string;
  status: string;
  region: string;
  volume: number;
};

describe('DataTableComponent', () => {
  const rows: TestRow[] = [
    { team: 'Finance', owner: 'Aisling', status: 'Healthy', region: 'EMEA', volume: 482 },
    { team: 'Support', owner: 'Mina', status: 'At risk', region: 'Americas', volume: 811 },
    { team: 'Risk', owner: 'Jonas', status: 'Healthy', region: 'EMEA', volume: 214 },
  ];

  const columns: DataTableColumn<TestRow>[] = [
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
    { id: 'status', header: 'Status', accessor: (row) => row.status, kind: 'badge' },
    {
      id: 'volume',
      header: 'Volume',
      accessor: (row) => row.volume,
      sortable: true,
      initialSortDirection: 'desc',
    },
  ];

  const filters: DataTableFilter<TestRow>[] = [
    {
      id: 'status',
      label: 'Status',
      accessor: (row) => row.status,
      allLabel: 'All statuses',
      options: [
        { label: 'Healthy', value: 'Healthy' },
        { label: 'At risk', value: 'At risk' },
      ],
    },
  ];

  const search: DataTableSearch<TestRow> = {
    label: 'Search',
    placeholder: 'Type to search',
    fields: [(row) => row.team, (row) => row.owner],
  };

  async function setup() {
    await TestBed.configureTestingModule({
      imports: [DataTableComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(DataTableComponent<TestRow> as never);
    fixture.componentRef.setInput('rows', rows);
    fixture.componentRef.setInput('columns', columns);
    fixture.componentRef.setInput('filters', filters);
    fixture.componentRef.setInput('search', search);
    fixture.componentRef.setInput('pageSize', 2);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  it('filters visible rows from the search input', async () => {
    const fixture = await setup();
    const input = fixture.nativeElement.querySelector('#table-search') as HTMLInputElement;
    input.value = 'Supp';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const text = fixture.nativeElement.querySelector('tbody')?.textContent ?? '';
    expect(text).toContain('Support');
    expect(text).not.toContain('Finance');
  });

  it('applies configured filters', async () => {
    const fixture = await setup();
    const select = fixture.nativeElement.querySelector(
      '.smart-table__filters select',
    ) as HTMLSelectElement;
    select.value = 'At risk';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const text = fixture.nativeElement.querySelector('tbody')?.textContent ?? '';
    expect(text).toContain('Support');
    expect(text).not.toContain('Finance');
  });

  it('sorts and paginates rows', async () => {
    const fixture = await setup();
    const sortButtons = Array.from(
      fixture.nativeElement.querySelectorAll('.sort-button'),
    ) as HTMLButtonElement[];
    const volumeButton = sortButtons.find((button) => button.textContent?.includes('Volume'));
    volumeButton?.click();
    fixture.detectChanges();

    let firstRowText = fixture.nativeElement.querySelector('tbody tr')?.textContent ?? '';
    expect(firstRowText).toContain('Support');

    const nextButtons = Array.from(
      fixture.nativeElement.querySelectorAll('.pagination button'),
    ) as HTMLButtonElement[];
    const nextButton = nextButtons.find((button) =>
      button.textContent?.includes('Next'),
    ) as HTMLButtonElement;
    nextButton.click();
    fixture.detectChanges();

    firstRowText = fixture.nativeElement.querySelector('tbody tr')?.textContent ?? '';
    expect(firstRowText).toContain('Risk');
  });
});
