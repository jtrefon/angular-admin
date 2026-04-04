import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  readonly id = input('');
  readonly type = input<'text' | 'date' | 'email' | 'number' | 'password'>('text');
  readonly value = input('');
  readonly placeholder = input('');
}
