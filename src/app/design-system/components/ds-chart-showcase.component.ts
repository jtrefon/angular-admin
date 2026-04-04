import { Component, input } from '@angular/core';
import {
  ChartCardComponent,
  type ChartCardMetric,
  type ChartSeriesPoint,
} from '../../../lib/public-api';

@Component({
  selector: 'app-ds-chart-showcase',
  imports: [ChartCardComponent],
  templateUrl: './ds-chart-showcase.component.html',
})
export class DsChartShowcaseComponent {
  readonly series = input.required<ChartSeriesPoint[]>();
  readonly total = input.required<string>();
  readonly label = input.required<string>();
  readonly metric = input<ChartCardMetric>({ value: '84%', progress: 84 });
}
