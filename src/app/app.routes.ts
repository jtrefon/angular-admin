import { Routes } from '@angular/router';
import { DesignSystemPageComponent } from './design-system-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'design-system/overview'
  },
  {
    path: 'design-system',
    pathMatch: 'full',
    redirectTo: 'design-system/overview'
  },
  {
    path: 'design-system/:section',
    component: DesignSystemPageComponent,
    title: 'Design System'
  }
];
