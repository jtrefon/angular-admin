import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent {
  readonly checked = input(false);
}
