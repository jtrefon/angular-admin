import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-stat-card',
  templateUrl: './stat-card.component.html',
})
export class StatCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly delta = input.required<string>();
  readonly tone = input<'success' | 'warning' | 'info' | 'danger'>('info');
}
