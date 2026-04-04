import { Component, input } from '@angular/core';

type SeriesPoint = {
  label: string;
  value: number;
};

@Component({
  selector: 'app-ds-chart-showcase',
  templateUrl: './ds-chart-showcase.component.html'
})
export class DsChartShowcaseComponent {
  readonly series = input.required<SeriesPoint[]>();
  readonly total = input.required<string>();
  readonly label = input.required<string>();

  protected barHeight(value: number): number {
    return Math.max(18, Math.min(100, value));
  }
}
