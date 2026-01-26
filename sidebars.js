// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: [
        { type: 'doc', id: 'getting-started/introduction', label: '📖 Introduction' },
        { type: 'doc', id: 'getting-started/overview', label: '🔭 Overview' },
        { type: 'doc', id: 'getting-started/control-plane', label: '🎛️ Control Plane' },
        { type: 'doc', id: 'getting-started/installation', label: '💿 Installation' },
        { type: 'doc', id: 'getting-started/quick-start', label: '⚡ Quick Start' },
        { type: 'doc', id: 'getting-started/configuration', label: '⚙️ Configuration' },
        { type: 'doc', id: 'getting-started/faq', label: '❓ FAQ' },
      ],
    },
    {
      type: 'doc',
      id: 'deployment-modes',
      label: '🌐 Deployment Modes',
    },
    {
      type: 'category',
      label: '🖼️ Templates',
      link: {
        type: 'doc',
        id: 'templates/index',
      },
      items: [
        { type: 'doc', id: 'templates/gallery', label: '🎨 Template Gallery' },
        { type: 'doc', id: 'templates/using-templates', label: '📥 Using Templates' },
        { type: 'doc', id: 'templates/customizing', label: '✏️ Customizing' },
      ],
    },
    {
      type: 'category',
      label: '📝 Forms',
      items: [
        { type: 'doc', id: 'forms/overview', label: '📖 Overview' },
        { type: 'doc', id: 'forms/form-builder', label: '🏗️ Form Builder' },
        { type: 'doc', id: 'forms/template-gallery', label: '🖼️ Template Gallery' },
        { type: 'doc', id: 'forms/building-forms', label: '🔨 Building Forms' },
        { type: 'doc', id: 'forms/field-types', label: '📋 Field Types' },
        { type: 'doc', id: 'forms/field-configuration', label: '🎚️ Field Configuration' },
        { type: 'doc', id: 'forms/validation', label: '✅ Validation' },
        { type: 'doc', id: 'forms/conditional-logic', label: '🔀 Conditional Logic' },
        { type: 'doc', id: 'forms/lookup-fields', label: '🔍 Lookup Fields' },
        { type: 'doc', id: 'forms/computed-fields', label: '🧮 Computed Fields' },
        { type: 'doc', id: 'forms/repeater-fields', label: '🔁 Repeater Fields' },
        { type: 'doc', id: 'forms/form-variables', label: '📊 Form Variables' },
        { type: 'doc', id: 'forms/form-lifecycle', label: '♻️ Form Lifecycle' },
        { type: 'doc', id: 'forms/multi-page-forms', label: '📄 Multi-Page Forms' },
        { type: 'doc', id: 'forms/form-versioning', label: '🏷️ Form Versioning' },
        { type: 'doc', id: 'forms/form-library', label: '📚 Form Library' },
        { type: 'doc', id: 'forms/document-preview', label: '👁️ Document Preview' },
        { type: 'doc', id: 'forms/publishing', label: '🚀 Publishing' },
        { type: 'doc', id: 'forms/reactions', label: '⚡ Form Reactions' },
        { type: 'doc', id: 'forms/code-generation', label: '💻 Code Generation' },
      ],
    },
    {
      type: 'category',
      label: '📊 Analytics & Responses',
      items: [
        { type: 'doc', id: 'analytics/overview', label: '📖 Overview' },
        { type: 'doc', id: 'analytics/response-management', label: '📥 Response Management' },
        { type: 'doc', id: 'analytics/response-export', label: '📤 Response Export' },
        { type: 'doc', id: 'analytics/field-analytics', label: '📈 Field Analytics' },
      ],
    },
    {
      type: 'category',
      label: '🔍 Data Explorer',
      items: [
        { type: 'doc', id: 'data-explorer/overview', label: '📖 Overview' },
        { type: 'doc', id: 'data-explorer/browsing-data', label: '🗂️ Browsing Data' },
        { type: 'doc', id: 'data-explorer/importing-data', label: '📥 Importing Data' },
        { type: 'doc', id: 'data-explorer/exporting-data', label: '📤 Exporting Data' },
        { type: 'doc', id: 'data-explorer/erd-viewer', label: '🔗 ERD Viewer' },
      ],
    },
    {
      type: 'category',
      label: '⚡ Workflows',
      items: [
        { type: 'doc', id: 'workflows/overview', label: '📖 Overview' },
        { type: 'doc', id: 'workflows/creating-workflows', label: '🏗️ Creating Workflows' },
        { type: 'doc', id: 'workflows/node-types', label: '🧩 Node Types' },
        { type: 'doc', id: 'workflows/execution', label: '▶️ Execution' },
        { type: 'doc', id: 'workflows/templates', label: '📋 Templates' },
        { type: 'doc', id: 'workflows/embedding', label: '🔌 Embedding' },
      ],
    },
    {
      type: 'category',
      label: '🔗 Integrations',
      items: [
        { type: 'doc', id: 'integrations/overview', label: '📖 Overview' },
        { type: 'doc', id: 'integrations/google-forms-import', label: '📥 Google Forms Import' },
        { type: 'doc', id: 'integrations/webhooks', label: '🪝 Webhooks' },
        { type: 'doc', id: 'integrations/email-notifications', label: '📧 Email Notifications' },
      ],
    },
    {
      type: 'category',
      label: '🤖 AI & Conversational',
      items: [
        { type: 'doc', id: 'ai/overview', label: '📖 Overview' },
        { type: 'doc', id: 'ai/conversational-forms', label: '💬 Conversational Forms' },
        { type: 'doc', id: 'ai/rag-knowledge-guided', label: '🧠 RAG Knowledge-Guided' },
        { type: 'doc', id: 'ai/templates', label: '📋 Templates' },
        { type: 'doc', id: 'ai/agents', label: '🕵️ Agents' },
        { type: 'doc', id: 'ai/configuration', label: '⚙️ Configuration' },
      ],
    },
    {
      type: 'category',
      label: '🏢 Platform',
      items: [
        { type: 'doc', id: 'platform/organizations', label: '🏛️ Organizations' },
        { type: 'doc', id: 'platform/applications', label: '📦 Applications' },
        { type: 'doc', id: 'platform/marketplace', label: '🛒 Marketplace' },
        { type: 'doc', id: 'platform/publishing-packages', label: '📤 Publishing Packages' },
        { type: 'doc', id: 'platform/projects', label: '📁 Projects' },
        { type: 'doc', id: 'platform/authentication', label: '🔑 Authentication' },
        { type: 'doc', id: 'platform/connection-vault', label: '🔐 Connection Vault' },
        { type: 'doc', id: 'platform/access-control', label: '👥 Access Control' },
        { type: 'doc', id: 'platform/billing', label: '💳 Billing' },
        { type: 'doc', id: 'platform/pricing', label: '💰 Pricing' },
        { type: 'doc', id: 'platform/referrals', label: '🤝 Referral Program' },
      ],
    },
    {
      type: 'category',
      label: '📡 API Reference',
      items: [
        { type: 'doc', id: 'api/overview', label: '📖 Overview' },
        { type: 'doc', id: 'api/authentication', label: '🔑 Authentication' },
        { type: 'doc', id: 'api/forms', label: '📝 Forms' },
        { type: 'doc', id: 'api/submissions', label: '📥 Submissions' },
        { type: 'doc', id: 'api/webhooks', label: '🪝 Webhooks' },
        { type: 'doc', id: 'api/vercel-integration', label: '▲ Vercel Integration' },
      ],
    },
    {
      type: 'category',
      label: '🔒 Security',
      items: [
        { type: 'doc', id: 'security/overview', label: '📖 Overview' },
        { type: 'doc', id: 'security/encryption', label: '🔐 Encryption' },
        { type: 'doc', id: 'security/access-control', label: '👥 Access Control' },
        { type: 'doc', id: 'security/best-practices', label: '✨ Best Practices' },
      ],
    },
    {
      type: 'category',
      label: '☁️ Deployment',
      items: [
        { type: 'doc', id: 'deployment/overview', label: '📖 Overview' },
        { type: 'doc', id: 'deployment/vercel', label: '▲ Vercel' },
        { type: 'doc', id: 'deployment/self-hosted', label: '🖥️ Self-Hosted' },
        { type: 'doc', id: 'deployment/docker', label: '🐳 Docker' },
      ],
    },
    {
      type: 'category',
      label: '📚 Guides',
      items: [
        { type: 'doc', id: 'guides/in-app-help', label: '❓ In-App Help' },
        { type: 'doc', id: 'guides/keyboard-shortcuts', label: '⌨️ Keyboard Shortcuts' },
        { type: 'doc', id: 'guides/brand-standards', label: '🎨 Brand Standards' },
        { type: 'doc', id: 'guides/adding-images', label: '🖼️ Adding Images' },
      ],
    },
    {
      type: 'category',
      label: '🧩 Extensions',
      items: [
        { type: 'doc', id: 'extensions/overview', label: '📖 Overview' },
        { type: 'doc', id: 'extensions/architecture', label: '🏗️ Architecture' },
        { type: 'doc', id: 'extensions/building-extensions', label: '🔨 Building Extensions' },
        { type: 'doc', id: 'extensions/workflow-nodes', label: '🧩 Workflow Nodes' },
        { type: 'doc', id: 'extensions/api-reference', label: '📡 API Reference' },
        { type: 'doc', id: 'extensions/example-collaborate', label: '🤝 Example: Collaborate' },
      ],
    },
    {
      type: 'category',
      label: '🛠️ Development',
      items: [
        { type: 'doc', id: 'developer/packages', label: '📦 Packages' },
        { type: 'doc', id: 'developer/packages-forms', label: '📝 @netpad/forms' },
        { type: 'doc', id: 'developer/packages-workflows', label: '⚡ @netpad/workflows' },
        { type: 'doc', id: 'developer/packages-templates', label: '📋 @netpad/templates' },
        { type: 'doc', id: 'developer/packages-cli', label: '💻 @netpad/cli' },
        { type: 'doc', id: 'developer/mcp-server', label: '🤖 MCP Server' },
        { type: 'doc', id: 'development/contributing', label: '🤝 Contributing' },
        { type: 'doc', id: 'development/code-of-conduct', label: '📜 Code of Conduct' },
        { type: 'doc', id: 'development/architecture', label: '🏗️ Architecture' },
        { type: 'doc', id: 'development/testing', label: '🧪 Testing' },
        { type: 'doc', id: 'development/code-style', label: '✨ Code Style' },
      ],
    },
    {
      type: 'category',
      label: '🧪 QA Testing',
      items: [
        { type: 'doc', id: 'qa-testing/overview', label: '📖 Overview' },
        { type: 'doc', id: 'qa-testing/netpad-qa-framework', label: '🔬 QA Framework' },
        { type: 'doc', id: 'qa-testing/netpad-qa-quick-reference', label: '📋 Quick Reference' },
        { type: 'doc', id: 'qa-testing/netpad-bug-report-template', label: '🐛 Bug Report Template' },
      ],
    },
    {
      type: 'category',
      label: '🤝 Collaborators',
      link: {
        type: 'doc',
        id: 'collaborators/index',
      },
      items: [
        { type: 'doc', id: 'collaborators/getting-started', label: '🚀 Getting Started' },
        { type: 'doc', id: 'collaborators/architecture-overview', label: '🏗️ Architecture Overview' },
        { type: 'doc', id: 'collaborators/current-priorities', label: '🎯 Current Priorities' },
        { type: 'doc', id: 'collaborators/contribution-guide', label: '📝 Contribution Guide' },
        { type: 'doc', id: 'collaborators/product-context', label: '🎨 Product Context' },
        { type: 'doc', id: 'collaborators/faq', label: '❓ FAQ' },
      ],
    },
    {
      type: 'category',
      label: '⚖️ Legal',
      items: [
        { type: 'doc', id: 'legal/privacy-policy', label: '🔏 Privacy Policy' },
        { type: 'doc', id: 'legal/terms-of-service', label: '📜 Terms of Service' },
      ],
    },
  ],
};

export default sidebars;
