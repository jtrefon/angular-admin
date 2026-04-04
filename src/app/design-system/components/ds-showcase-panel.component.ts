import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ds-showcase-panel',
  templateUrl: './ds-showcase-panel.component.html'
})
export class DsShowcasePanelComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly tone = input<'default' | 'dark'>('default');
}
