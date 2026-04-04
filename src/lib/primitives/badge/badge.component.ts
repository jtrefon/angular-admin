import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  readonly tone = input<'accent' | 'success' | 'warning' | 'info' | 'danger'>('info');
}
