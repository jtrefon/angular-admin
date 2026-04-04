import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
}
