import { Component, input } from '@angular/core';

export type SelectOption = {
  label: string;
  value: string;
};

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  readonly id = input('');
  readonly value = input('');
  readonly options = input.required<SelectOption[]>();
}
