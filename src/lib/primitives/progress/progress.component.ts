import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-progress',
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  readonly value = input.required<number>();

  protected readonly clampedValue = computed(() => Math.max(0, Math.min(100, this.value())));
}
