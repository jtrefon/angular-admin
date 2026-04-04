import { Component, input } from '@angular/core';
import { ActivityFeedItem } from './activity-feed.models';

@Component({
  selector: 'ui-activity-feed',
  templateUrl: './activity-feed.component.html',
})
export class ActivityFeedComponent {
  readonly items = input.required<ActivityFeedItem[]>();
}
