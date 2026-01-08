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
        'getting-started/overview',
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
        'forms/form-builder',
        'forms/building-forms',
        'forms/field-types',
        'forms/field-configuration',
        'forms/validation',
        'forms/conditional-logic',
        'forms/lookup-fields',
        'forms/computed-fields',
        'forms/repeater-fields',
        'forms/form-variables',
        'forms/form-lifecycle',
        'forms/multi-page-forms',
        'forms/form-versioning',
        'forms/form-library',
        'forms/document-preview',
        'forms/publishing',
        'forms/code-generation',
      ],
    },
    {
      type: 'category',
      label: 'Analytics & Responses',
      items: [
        'analytics/overview',
        'analytics/response-management',
        'analytics/response-export',
        'analytics/field-analytics',
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
        'data-explorer/erd-viewer',
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
      label: 'Integrations',
      items: [
        'integrations/overview',
        'integrations/webhooks',
        'integrations/email-notifications',
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
      label: 'Guides',
      items: [
        'guides/keyboard-shortcuts',
        'guides/adding-images',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/contributing',
        'development/code-of-conduct',
        'development/architecture',
        'development/testing',
        'development/code-style',
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
