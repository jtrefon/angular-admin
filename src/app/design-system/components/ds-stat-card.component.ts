import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ds-stat-card',
  templateUrl: './ds-stat-card.component.html'
})
export class DsStatCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly delta = input.required<string>();
  readonly tone = input<'success' | 'warning' | 'info' | 'danger'>('info');
}
