import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ds-swatch-card',
  templateUrl: './ds-swatch-card.component.html'
})
export class DsSwatchCardComponent {
  readonly name = input.required<string>();
  readonly variable = input.required<string>();
  readonly hex = input.required<string>();
}
