import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  readonly tone = input<'default' | 'accent' | 'dark'>('default');
}
