import { Component, input } from '@angular/core';

type ActivityItem = {
  title: string;
  meta: string;
};

@Component({
  selector: 'app-ds-activity-feed',
  templateUrl: './ds-activity-feed.component.html'
})
export class DsActivityFeedComponent {
  readonly items = input.required<ActivityItem[]>();
}
