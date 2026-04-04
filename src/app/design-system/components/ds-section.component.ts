import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ds-section',
  templateUrl: './ds-section.component.html'
})
export class DsSectionComponent {
  readonly id = input('');
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly compact = input(false);
}
