// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/configuration',
        'getting-started/faq',
      ],
    },
    {
      type: 'category',
      label: 'Forms',
      items: [
        'forms/overview',
        'forms/building-forms',
        'forms/field-types',
        'forms/validation',
        'forms/conditional-logic',
        'forms/publishing',
        'forms/analytics',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/overview',
        'workflows/creating-workflows',
        'workflows/node-types',
        'workflows/execution',
        'workflows/templates',
      ],
    },
    {
      type: 'category',
      label: 'Data Explorer',
      items: [
        'data-explorer/overview',
        'data-explorer/browsing-data',
        'data-explorer/importing-data',
        'data-explorer/exporting-data',
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      items: [
        'platform/organizations',
        'platform/authentication',
        'platform/connection-vault',
        'platform/access-control',
        'platform/billing',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/authentication',
        'api/forms',
        'api/submissions',
        'api/webhooks',
        'api/vercel-integration',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/overview',
        'security/encryption',
        'security/access-control',
        'security/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/overview',
        'deployment/vercel',
        'deployment/self-hosted',
        'deployment/docker',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/contributing',
        'development/architecture',
        'development/testing',
        'development/code-style',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/adding-images',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/privacy-policy',
        'legal/terms-of-service',
      ],
    },
  ],
};

export default sidebars;
