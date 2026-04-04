import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  readonly tone = input<'info' | 'success' | 'warning'>('info');
}
