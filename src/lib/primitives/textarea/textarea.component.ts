import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-textarea',
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  readonly id = input('');
  readonly rows = input(4);
  readonly value = input('');
}
