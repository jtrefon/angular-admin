import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const demoUrl = new URL(`${siteConfig.baseUrl}demo/`, siteConfig.url).toString();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/product">
            Explore the Product
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Read the Docs
          </Link>
          <Link className="button button--secondary button--lg" href={demoUrl}>
            Open the Demo
          </Link>
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
      description="Angular framework for reusable admin applications, backoffice products, and internal tools."
    >
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <article className={styles.card}>
                <Heading as="h2">Business Value</Heading>
                <p>
                  Build internal products faster with a consistent admin UI framework that reduces
                  one-off layout work, repetitive control implementation, and fragile
                  screen-by-screen styling.
                </p>
              </article>
              <article className={styles.card}>
                <Heading as="h2">Technical Value</Heading>
                <p>
                  The framework now exposes reusable primitives, configurable composites, theme
                  tokens, and a single public API surface under <code>src/lib/public-api.ts</code>.
                </p>
              </article>
              <article className={styles.card}>
                <Heading as="h2">Documentation</Heading>
                <p>
                  Product pages, architecture notes, component docs, and a live Angular demo are
                  designed to ship from one GitHub Pages deployment.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.featureRow}>
              <div>
                <Heading as="h2">What Ships Today</Heading>
                <ul className={styles.list}>
                  <li>
                    Reusable primitives for buttons, fields, feedback, navigation, and utility
                    controls.
                  </li>
                  <li>
                    Reusable composites for chart cards, data tables, stat cards, and activity
                    feeds.
                  </li>
                  <li>A routed Angular showcase app serving as the live demo.</li>
                  <li>Markdown-first documentation ready for GitHub Pages deployment.</li>
                </ul>
              </div>
              <div className={styles.ctaCard}>
                <Heading as="h3">Next</Heading>
                <p>
                  Explore the product story, open the live demo, or jump directly into the component
                  documentation.
                </p>
                <div className={styles.stack}>
                  <Link className="button button--primary" to="/product">
                    Product Page
                  </Link>
                  <Link className="button button--secondary" to="/docs/components/primitives">
                    Component Docs
                  </Link>
                  <Link className="button button--secondary" href={demoUrl}>
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
