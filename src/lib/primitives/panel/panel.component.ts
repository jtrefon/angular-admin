import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly tone = input<'default' | 'dark'>('default');
}
