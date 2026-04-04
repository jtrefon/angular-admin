import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-field',
  templateUrl: './field.component.html',
})
export class FieldComponent {
  readonly label = input.required<string>();
  readonly full = input(false);
  readonly forId = input('');
}
