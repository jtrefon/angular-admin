import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { DsActivityFeedComponent } from './design-system/components/ds-activity-feed.component';
import { DsChartShowcaseComponent } from './design-system/components/ds-chart-showcase.component';
import { DsFormShowcaseComponent } from './design-system/components/ds-form-showcase.component';
import { DsShowcasePanelComponent } from './design-system/components/ds-showcase-panel.component';
import { DsSmartTableComponent } from './design-system/components/ds-smart-table.component';
import { DsStatCardComponent } from './design-system/components/ds-stat-card.component';
import { DsSwatchCardComponent } from './design-system/components/ds-swatch-card.component';

@Component({
  selector: 'app-design-system-page',
  imports: [
    CommonModule,
    DsActivityFeedComponent,
    DsChartShowcaseComponent,
    DsFormShowcaseComponent,
    DsShowcasePanelComponent,
    DsSmartTableComponent,
    DsStatCardComponent,
    DsSwatchCardComponent,
    RouterLink
  ],
  templateUrl: './design-system-page.html'
})
export class DesignSystemPageComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly sectionParam = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('section') ?? 'overview')),
    { initialValue: 'overview' }
  );

  protected readonly currentSection = computed(() => this.sectionParam());

  protected readonly heroChips = ['Overview', 'Analytics', 'Commerce', 'Inbox', 'Security', 'Automation'];
  protected readonly sectionMenu = [
    { id: 'overview', label: 'Overview' },
    { id: 'foundations', label: 'Foundations' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'forms', label: 'Forms' },
    { id: 'charts', label: 'Charts' },
    { id: 'data', label: 'Data tables' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'patterns', label: 'Patterns' }
  ];

  protected readonly swatches = [
    { name: 'Canvas', variable: '--color-canvas', hex: '#f3f5ef' },
    { name: 'Surface', variable: '--color-surface', hex: '#fbfcf8' },
    { name: 'Panel', variable: '--color-panel', hex: '#111827' },
    { name: 'Primary', variable: '--color-primary', hex: '#1c7c54' },
    { name: 'Accent', variable: '--color-accent', hex: '#d97706' },
    { name: 'Info', variable: '--color-info', hex: '#2563eb' }
  ];

  protected readonly spacingScale = ['4', '8', '12', '16', '24', '32', '48', '64'];
  protected readonly radii = ['14', '20', '28', '999'];

  protected readonly statCards = [
    { label: 'Monthly revenue', value: '$284.2K', delta: '+18.4%', tone: 'success' as const },
    { label: 'Open approvals', value: '43', delta: '8 urgent', tone: 'warning' as const },
    { label: 'Fulfillment rate', value: '98.2%', delta: '+1.1%', tone: 'info' as const },
    { label: 'Avg. handle time', value: '4m 12s', delta: '-36s', tone: 'success' as const }
  ];

  protected readonly activity = [
    { title: 'Quarterly audit approved', meta: 'Finance Ops · 12 min ago' },
    { title: 'New RBAC policy published', meta: 'Security · 38 min ago' },
    { title: 'Workflow fallback triggered', meta: 'Integrations · 1 hour ago' }
  ];

  protected readonly navItems = ['Overview', 'Orders', 'Subscriptions', 'Approvals', 'Audit trail'];
  protected readonly chartSeries = [
    { label: 'Mon', value: 42 },
    { label: 'Tue', value: 56 },
    { label: 'Wed', value: 68 },
    { label: 'Thu', value: 62 },
    { label: 'Fri', value: 84 },
    { label: 'Sat', value: 48 }
  ];

  protected readonly sectionIntro = computed(() => {
    const intros = {
      overview: {
        eyebrow: 'Overview',
        title: 'Backoffice component catalog',
        description: 'A route-driven admin design system with reusable widgets, operational cards, chart modules, forms, and data-heavy components.'
      },
      foundations: {
        eyebrow: 'Foundations',
        title: 'Type, color, spacing, radius, and surface tokens',
        description: 'The visual grammar for the backoffice system, presented in a denser, more conventional layout.'
      },
      navigation: {
        eyebrow: 'Navigation',
        title: 'Shell navigation, menus, tabs, and context rails',
        description: 'Reusable navigation components for documentation-style backoffice surfaces and workspace shells.'
      },
      forms: {
        eyebrow: 'Forms',
        title: 'Advanced admin forms and input controls',
        description: 'Dense, production-oriented form patterns with grouped controls, switches, summaries, and stateful actions.'
      },
      charts: {
        eyebrow: 'Charts',
        title: 'Visualization components for admin analytics surfaces',
        description: 'Denser chart cards and widgets for KPIs, workload trends, health metrics, and dashboard analytics.'
      },
      data: {
        eyebrow: 'Data tables',
        title: 'Interactive smart table and record management patterns',
        description: 'Search, typeahead, filtering, sorting, pagination, and supporting widgets designed for backoffice records.'
      },
      feedback: {
        eyebrow: 'Feedback',
        title: 'Status, alert, loading, and system feedback components',
        description: 'Communicate progress, state, exceptions, and collaboration context without overwhelming the interface.'
      },
      patterns: {
        eyebrow: 'Patterns',
        title: 'Workflow modules, cards, widgets, and operational templates',
        description: 'Higher-level compositions that mirror what teams expect in admin systems like ngx-admin style dashboards.'
      }
    } as const;

    return intros[this.currentSection() as keyof typeof intros] ?? intros.overview;
  });
}
