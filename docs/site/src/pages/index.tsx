import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type AudienceCard = {
  title: string;
  description: string;
  points: string[];
};

const audienceCards: AudienceCard[] = [
  {
    title: 'Product and Operations',
    description:
      'Explain the business case quickly: faster internal product delivery, more consistent interfaces, and less design drift across admin tooling.',
    points: [
      'Shorter time-to-market for internal products',
      'A clearer visual standard across backoffice workflows',
      'Better stakeholder demos through a deployable live preview',
    ],
  },
  {
    title: 'Engineering and Platform Teams',
    description:
      'Evaluate the framework as a reusable Angular surface with typed APIs, configurable composites, token-driven styling, and a public export boundary.',
    points: [
      'Reusable primitives and composites under src/lib',
      'Public API from src/lib/public-api.ts',
      'Static docs and live demo from one GitHub Pages deployment',
    ],
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const demoUrl = new URL(`${siteConfig.baseUrl}demo/`, siteConfig.url).toString();

  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroLayout)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Angular Admin Framework</p>
          <Heading as="h1" className={styles.heroTitle}>
            Build internal products and admin surfaces with a framework that is meant to be shown,
            adopted, and extended.
          </Heading>
          <p className={styles.heroLead}>
            A reusable Angular framework for internal tools, operations consoles, dashboard
            surfaces, and backoffice applications. It combines a typed component layer, a live demo
            application, and a deployable documentation site in one product experience.
          </p>

          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/product">
              Explore the Product
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Read the Documentation
            </Link>
            <Link className="button button--secondary button--lg" href={demoUrl}>
              Launch the Demo
            </Link>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Framework</span>
              <strong>Reusable Angular primitives and composites</strong>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Audience</span>
              <strong>Product teams, platform engineers, and internal tooling groups</strong>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Delivery</span>
              <strong>One site for product story, docs, and live demo</strong>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.browserShell}>
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.previewShell}>
              <aside className={styles.previewSidebar}>
                <div className={styles.previewBrand}>
                  <div className={styles.previewBrandMark}>A</div>
                  <div>
                    <p className={styles.previewMono}>Framework</p>
                    <strong>Admin Console</strong>
                  </div>
                </div>

                <div className={styles.previewNav}>
                  <div className={clsx(styles.previewNavItem, styles.previewNavItemActive)}>
                    Overview
                  </div>
                  <div className={styles.previewNavItem}>Components</div>
                  <div className={styles.previewNavItem}>Tables</div>
                  <div className={styles.previewNavItem}>Charts</div>
                  <div className={styles.previewNavItem}>Forms</div>
                </div>
              </aside>

              <div className={styles.previewContent}>
                <div className={styles.previewTopbar}>
                  <div>
                    <p className={styles.previewMono}>Operations Suite</p>
                    <strong>Framework overview dashboard</strong>
                  </div>
                  <div className={styles.previewPills}>
                    <span>Docs</span>
                    <span>Demo</span>
                  </div>
                </div>

                <div className={styles.previewStats}>
                  <div className={styles.previewStatCard}>
                    <span className={styles.previewMono}>Adoption</span>
                    <strong>14 teams</strong>
                  </div>
                  <div className={styles.previewStatCard}>
                    <span className={styles.previewMono}>Coverage</span>
                    <strong>22 components</strong>
                  </div>
                  <div className={styles.previewStatCard}>
                    <span className={styles.previewMono}>Velocity</span>
                    <strong>-31% UI duplication</strong>
                  </div>
                </div>

                <div className={styles.previewGrid}>
                  <div className={styles.previewPanelLarge}>
                    <div className={styles.previewPanelHeader}>
                      <div>
                        <p className={styles.previewMono}>Documentation</p>
                        <strong>Architecture and component catalog</strong>
                      </div>
                      <span className={styles.previewBadge}>Live</span>
                    </div>
                    <div className={styles.previewBars}>
                      <span style={{ height: '44%' }} />
                      <span style={{ height: '63%' }} />
                      <span style={{ height: '72%' }} />
                      <span style={{ height: '58%' }} />
                      <span style={{ height: '86%' }} />
                      <span style={{ height: '66%' }} />
                    </div>
                  </div>

                  <div className={styles.previewPanel}>
                    <p className={styles.previewMono}>Theming</p>
                    <strong>Token-driven surfaces</strong>
                    <div className={styles.previewSwatches}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className={styles.previewPanel}>
                    <p className={styles.previewMono}>Navigation</p>
                    <strong>Docs, product, demo</strong>
                    <ul className={styles.previewList}>
                      <li>Fast product story</li>
                      <li>Technical docs</li>
                      <li>Live framework preview</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const demoUrl = new URL(`${siteConfig.baseUrl}demo/`, siteConfig.url).toString();

  return (
    <Layout
      title={siteConfig.title}
      description="A reusable Angular framework for internal products, admin consoles, and backoffice UIs with product pages, docs, and live demo in one deployable site."
    >
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Why it matters</p>
              <Heading as="h2">Two audiences, one framework story</Heading>
              <p className={styles.sectionLead}>
                The site needs to work for non-technical stakeholders evaluating business value and
                for engineers assessing architecture, APIs, and readiness. The navigation and copy
                are designed around both paths.
              </p>
            </div>

            <div className={styles.audienceGrid}>
              {audienceCards.map((card) => (
                <article key={card.title} className={styles.valueCard}>
                  <Heading as="h3">{card.title}</Heading>
                  <p>{card.description}</p>
                  <ul className={styles.list}>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>What you can evaluate now</p>
              <Heading as="h2">A clearer path from product pitch to technical proof</Heading>
            </div>

            <div className={styles.capabilityGrid}>
              <article className={styles.capabilityCard}>
                <span className={styles.capabilityTag}>Product</span>
                <Heading as="h3">Landing and value narrative</Heading>
                <p>
                  Explain what the framework is, who it is for, how it reduces duplication, and why
                  it improves internal product delivery.
                </p>
                <Link className={styles.inlineLink} to="/product">
                  Go to product page
                </Link>
              </article>

              <article className={styles.capabilityCard}>
                <span className={styles.capabilityTag}>Documentation</span>
                <Heading as="h3">Component and architecture docs</Heading>
                <p>
                  Review primitives, composites, theming, testing, architecture, and roadmap from a
                  docs structure built for GitHub Pages deployment.
                </p>
                <Link className={styles.inlineLink} to="/docs/intro">
                  Open docs
                </Link>
              </article>

              <article className={styles.capabilityCard}>
                <span className={styles.capabilityTag}>Demo</span>
                <Heading as="h3">Live Angular showcase</Heading>
                <p>
                  Move from static description to actual interface behavior by opening the routed
                  demo application under the same deployed site.
                </p>
                <Link className={styles.inlineLink} href={demoUrl}>
                  Launch demo
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.stackLayout}>
              <div>
                <p className={styles.sectionEyebrow}>Technical surface</p>
                <Heading as="h2">Built around reusable framework layers</Heading>
                <p className={styles.sectionLead}>
                  The framework now separates primitives, composites, docs-support pieces, and the
                  live demo app. That gives teams a clearer public API and a better path toward
                  production-ready internal UI infrastructure.
                </p>
              </div>

              <div className={styles.specGrid}>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>Framework primitives</span>
                  <strong>Buttons, fields, navigation, feedback, utility controls</strong>
                </div>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>Framework composites</span>
                  <strong>Stat cards, chart cards, activity feeds, data tables</strong>
                </div>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>Tech stack</span>
                  <strong>
                    Angular 21, standalone components, Docusaurus, GitHub Actions, Pages
                  </strong>
                </div>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>Public contract</span>
                  <strong>src/lib/public-api.ts plus docs and live demo integration</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className="container">
            <div className={styles.ctaStrip}>
              <div>
                <p className={styles.sectionEyebrowDark}>Next step</p>
                <Heading as="h2">
                  Use the site the way your audience actually evaluates software
                </Heading>
                <p className={styles.sectionLeadDark}>
                  Start with the product story, inspect the architecture, browse the component docs,
                  then open the live demo to validate the framework in context.
                </p>
              </div>
              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to="/product">
                  Product Story
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/components/primitives"
                >
                  Component Docs
                </Link>
                <Link className="button button--secondary button--lg" href={demoUrl}>
                  Demo App
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
