import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const stacks = [
  'Angular 21',
  'Standalone components',
  'Typed reusable primitives',
  'Configurable composites',
  'Docusaurus documentation site',
  'GitHub Actions CI/CD',
  'GitHub Pages deployment',
];

const componentGroups = [
  {
    title: 'Primitives',
    description:
      'Buttons, fields, badges, tabs, chips, alerts, progress, avatars, checks, and switches.',
  },
  {
    title: 'Composites',
    description:
      'Chart cards, data tables, stat cards, and activity feeds that provide richer reusable behaviors.',
  },
  {
    title: 'Docs and Demo',
    description:
      'A product site, component docs, architecture pages, and a live Angular demo in one deployment.',
  },
];

export default function ProductPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const demoUrl = new URL(`${siteConfig.baseUrl}demo/`, siteConfig.url).toString();

  return (
    <Layout
      title="Product"
      description="Business value, technical positioning, architecture, stack, and framework scope."
    >
      <main className={styles.pageMain}>
        <section className={styles.productHero}>
          <div className={styles.productHeroGradient} />
          <div className={styles.containerWide}>
            <div className={styles.productHeroLayout}>
              <div className={styles.productHeroCopy}>
                <p className={styles.eyebrow}>Product narrative</p>
                <Heading as="h1" className={styles.productTitle}>
                  A framework site should help teams understand the business case, not just list
                  components.
                </Heading>
                <p className={styles.productLead}>
                  Angular Admin Framework is positioned as a reusable internal-product foundation:
                  part UI framework, part technical reference, part live demonstration. The site is
                  designed to let different audiences evaluate it in the order that makes sense for
                  them.
                </p>
                <div className={styles.heroActions}>
                  <Link className="button button--primary button--lg" href={demoUrl}>
                    Open the Demo
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/architecture">
                    Read Architecture
                  </Link>
                </div>
              </div>

              <div className={styles.productFrame}>
                <div className={styles.productFrameCard}>
                  <span className={styles.metaLabel}>Business value</span>
                  <strong>Shorter delivery cycles for admin products</strong>
                  <p>
                    Give teams a common visual and technical base instead of rebuilding dashboard
                    controls, form surfaces, and data displays product by product.
                  </p>
                </div>
                <div className={styles.productFrameCard}>
                  <span className={styles.metaLabel}>Technical value</span>
                  <strong>Reusable Angular surface with a public contract</strong>
                  <p>
                    The framework is exposed through <code>src/lib/public-api.ts</code>, backed by
                    token-driven styling and verified through app and component-level tests.
                  </p>
                </div>
                <div className={styles.productFrameCard}>
                  <span className={styles.metaLabel}>Presentation value</span>
                  <strong>Demo + docs + product site in one deployable experience</strong>
                  <p>
                    Stakeholders can move from overview to architecture to live preview without
                    leaving the site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.containerWide}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Value proposition</p>
              <Heading as="h2">Why a team would adopt this</Heading>
            </div>

            <div className={styles.capabilityGrid}>
              <article className={styles.capabilityCard}>
                <span className={styles.capabilityTag}>Consistency</span>
                <Heading as="h3">A more coherent admin experience</Heading>
                <p>
                  Shared primitives and composites reduce the drift that usually appears when
                  multiple internal products evolve separately.
                </p>
              </article>
              <article className={styles.capabilityCard}>
                <span className={styles.capabilityTag}>Speed</span>
                <Heading as="h3">Less repeated UI engineering</Heading>
                <p>
                  Teams can compose charts, tables, form controls, and feedback patterns faster by
                  starting from the framework instead of rebuilding surface-level patterns.
                </p>
              </article>
              <article className={styles.capabilityCard}>
                <span className={styles.capabilityTag}>Trust</span>
                <Heading as="h3">A better story for adoption</Heading>
                <p>
                  The combination of docs, architecture, and a live demo makes the framework easier
                  to evaluate, sponsor, and adopt across teams.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.containerWide}>
            <div className={styles.featureRow}>
              <div>
                <p className={styles.sectionEyebrow}>Architecture and scope</p>
                <Heading as="h2">How the framework is organized today</Heading>
                <p className={styles.sectionLead}>
                  The codebase is structured to separate reusable framework concerns from the demo
                  application and documentation experience.
                </p>

                <div className={styles.stackGrid}>
                  {componentGroups.map((group) => (
                    <div key={group.title} className={styles.infoCard}>
                      <Heading as="h3">{group.title}</Heading>
                      <p>{group.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.ctaCardLight}>
                <Heading as="h3">Current technical stack</Heading>
                <ul className={styles.list}>
                  {stacks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={styles.stack}>
                  <Link className="button button--primary" to="/docs/testing">
                    Testing
                  </Link>
                  <Link className="button button--secondary" to="/docs/components/composites">
                    Composite Components
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.containerWide}>
            <div className={styles.stackLayout}>
              <div>
                <p className={styles.sectionEyebrow}>Evaluation path</p>
                <Heading as="h2">A more intuitive navigation model</Heading>
                <p className={styles.sectionLead}>
                  Product visitors should start with value and context. Engineers should be able to
                  move directly into docs, architecture, and component details. Both should be able
                  to launch the live demo immediately.
                </p>
              </div>

              <div className={styles.specGrid}>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>1. Product</span>
                  <strong>What problem the framework solves and why it matters</strong>
                </div>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>2. Docs</span>
                  <strong>Architecture, theming, testing, and component documentation</strong>
                </div>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>3. Demo</span>
                  <strong>Live Angular application to validate the experience in context</strong>
                </div>
                <div className={styles.specCard}>
                  <span className={styles.metaLabel}>4. GitHub</span>
                  <strong>Source, CI, Pages deployment, and public framework contract</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
