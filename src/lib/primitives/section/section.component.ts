import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-section',
  templateUrl: './section.component.html',
})
export class SectionComponent {
  readonly id = input('');
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly compact = input(false);
}
