import { Component, input } from '@angular/core';

@Component({
  selector: 'docs-swatch-card',
  templateUrl: './swatch-card.component.html',
})
export class SwatchCardComponent {
  readonly name = input.required<string>();
  readonly variable = input.required<string>();
  readonly hex = input.required<string>();
}
