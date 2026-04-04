import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'design-system/:section',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { section: 'overview' },
        { section: 'foundations' },
        { section: 'navigation' },
        { section: 'forms' },
        { section: 'charts' },
        { section: 'data' },
        { section: 'feedback' },
        { section: 'patterns' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
