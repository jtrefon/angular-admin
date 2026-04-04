import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const baseUrl = process.env.DOCUSAURUS_BASE_URL ?? '/';
const siteUrl = process.env.DOCUSAURUS_URL ?? 'https://jtrefon.github.io';
const demoUrl = new URL(`${baseUrl}demo/`, siteUrl).toString();

const config: Config = {
  title: 'Angular Admin Framework',
  tagline: 'Agnostic Angular framework for internal products, admin panels, and backoffice UIs.',
  favicon: 'img/favicon.ico',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content:
          'Angular admin framework, Angular design system, backoffice UI, admin dashboard framework, internal tools UI, reusable Angular components',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'Angular Admin Framework',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'Angular Admin Framework',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content:
          'Reusable Angular framework for internal products, admin interfaces, documentation, and live demo delivery.',
      },
    },
  ],
  future: {
    v4: true,
  },
  url: siteUrl,
  baseUrl,
  organizationName: 'jtrefon',
  projectName: 'angular-admin',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/jtrefon/angular-admin/tree/main/docs/site/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'description',
        content:
          'Reusable Angular framework for internal products, backoffice applications, admin interfaces, documentation, and live demo delivery.',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Angular Admin Framework',
      logo: {
        alt: 'Angular Admin Framework',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/product', label: 'Product', position: 'left' },
        {
          to: '/docs/intro',
          position: 'left',
          label: 'Docs',
        },
        { to: '/docs/architecture', label: 'Architecture', position: 'left' },
        { to: '/docs/components/primitives', label: 'Components', position: 'left' },
        { href: demoUrl, label: 'Demo', position: 'left' },
        {
          href: 'https://github.com/jtrefon/angular-admin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            { label: 'Architecture', to: '/docs/architecture' },
            { label: 'Components', to: '/docs/components/primitives' },
          ],
        },
        {
          title: 'Site',
          items: [
            { label: 'Product', to: '/product' },
            { label: 'Demo', href: demoUrl },
            { label: 'Roadmap', to: '/docs/roadmap' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jtrefon/angular-admin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jacek Trefon · <a href="https://www.trefon.com" target="_blank" rel="noopener noreferrer">www.trefon.com</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
