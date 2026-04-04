import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'architecture',
    'theming',
    {
      type: 'category',
      label: 'Components',
      items: ['components/index', 'components/primitives', 'components/composites'],
    },
    'testing',
    'roadmap',
  ],
};

export default sidebars;
