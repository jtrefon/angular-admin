import { Component, computed, input } from '@angular/core';
import { ChartCardMetric, ChartSeriesPoint } from './chart-card.models';

@Component({
  selector: 'ui-chart-card',
  templateUrl: './chart-card.component.html',
})
export class ChartCardComponent {
  readonly series = input.required<ChartSeriesPoint[]>();
  readonly total = input.required<string>();
  readonly label = input.required<string>();
  readonly metric = input<ChartCardMetric | null>(null);
  readonly showLegend = input(true);

  protected readonly ringProgress = computed(() => {
    const progress = this.metric()?.progress ?? 0;
    return Math.max(0, Math.min(100, progress));
  });

  protected barHeight(value: number): number {
    return Math.max(18, Math.min(100, value));
  }
}
