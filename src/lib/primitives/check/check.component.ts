import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-check',
  templateUrl: './check.component.html',
})
export class CheckComponent {
  readonly checked = input(false);
  readonly type = input<'checkbox' | 'radio'>('checkbox');
  readonly name = input('');
}
