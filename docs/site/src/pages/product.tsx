import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function ProductPage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const demoUrl = new URL(`${siteConfig.baseUrl}demo/`, siteConfig.url).toString();
  return (
    <Layout
      title="Product"
      description="Business value, technical value, components, and architecture."
    >
      <main className={styles.pageMain}>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h1">Product Overview</Heading>
            <p className={styles.lead}>
              Angular Admin Framework is aimed at teams building operational products, internal
              tooling, backoffice systems, and documentation-driven admin platforms.
            </p>
            <div className={styles.grid}>
              <article className={styles.card}>
                <Heading as="h2">Business Value</Heading>
                <p>
                  Standardize admin interfaces, reduce implementation drift, and ship screens faster
                  through reusable UI building blocks and consistent visual patterns.
                </p>
              </article>
              <article className={styles.card}>
                <Heading as="h2">Technical Value</Heading>
                <p>
                  The framework separates reusable components from demo composition, exposes a
                  stable public API, and is moving toward test-backed, docs-backed production
                  readiness.
                </p>
              </article>
              <article className={styles.card}>
                <Heading as="h2">Documentation Value</Heading>
                <p>
                  Product story, live demo, component docs, architecture, and roadmap all live in
                  one deployable site.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.featureRow}>
              <div>
                <Heading as="h2">Architecture</Heading>
                <p>
                  The repo is split between a framework layer in <code>src/lib</code> and a
                  demo/docs application in
                  <code>src/app</code>. Theme tokens live in <code>src/lib/core/tokens</code>,
                  primitives in
                  <code>src/lib/primitives</code>, and composites in <code>src/lib/composites</code>
                  .
                </p>
                <p>
                  The public contract is defined by <code>src/lib/public-api.ts</code>, while the
                  Angular app acts as the current demo host and integration surface.
                </p>
              </div>
              <div>
                <Heading as="h2">Component Scope</Heading>
                <ul className={styles.list}>
                  <li>
                    Primitives: buttons, fields, feedback controls, navigation pieces, utility
                    display elements.
                  </li>
                  <li>Composites: stat cards, activity feeds, chart cards, and data tables.</li>
                  <li>Docs support: token visualization helpers such as swatch cards.</li>
                </ul>
              </div>
            </div>
            <div className={styles.stack}>
              <Link className="button button--primary button--lg" to="/docs/architecture">
                Read Architecture Docs
              </Link>
              <Link className="button button--secondary button--lg" href={demoUrl}>
                Open Live Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
