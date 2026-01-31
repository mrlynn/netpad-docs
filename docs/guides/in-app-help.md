---
sidebar_position: 1
title: In-App Help System
description: Comprehensive context-aware help system with 100+ topics
---

# In-App Help System

NetPad includes a comprehensive, context-aware help system accessible from anywhere in the platform. With 100+ help topics covering all platform features, you can quickly find answers without leaving your current task.

## Accessing Help

### Keyboard Shortcuts

The fastest way to access help:

| Shortcut | Platform | Action |
|----------|----------|--------|
| `Cmd + /` | macOS | Open help search |
| `Ctrl + /` | Windows/Linux | Open help search |
| `F1` | All | Open help search |
| `Cmd + Shift + ?` | macOS | Open help search (alternative) |
| `Ctrl + Shift + ?` | Windows/Linux | Open help search (alternative) |

### Global Help Button

A help button is always visible in the upper-right navbar (next to the marketplace icon). Click it to open the help search dialog.

### Context-Sensitive Help Buttons

Throughout the platform, you'll find subtle help buttons (`?` icons) near complex features. These open help directly relevant to that feature.

### Inline Help Icons

Within labels and descriptions, tiny help icons provide instant access to related documentation.

## Context-Aware Intelligence

The help system automatically detects where you are in the platform and tailors results accordingly.

### Automatic Context Detection

When you open help, the system analyzes your current route:

```typescript
// Routes are mapped to help contexts
'/forms/[id]/edit'     → 'form-builder'
'/workflows/[id]/edit' → 'workflows'
'/settings'            → 'settings'
'/marketplace'         → 'marketplace'
```

Context-relevant topics are automatically boosted and highlighted in search results.

### Smart Topic Boosting

Context-relevant help topics are automatically:
- **Boosted in search results** - Appear higher in the list (+50 score boost)
- **Visually highlighted** - Green left border and subtle background
- **Marked as relevant** - "Relevant to: [Feature Name]" chip at the top

### No Search Required

Even without typing anything, the most relevant topics for your current page appear first. This makes it easy to discover help for the feature you're actively using.

## Search Capabilities

### Keyword Search

Type to search across:
- Topic titles
- Topic descriptions
- Keywords and tags
- Topic IDs (converted from kebab-case)

### Relevance Scoring

Results are ranked by multiple factors:

| Match Type | Score |
|------------|-------|
| Exact title match | +100 |
| Title starts with query | +50 |
| Title contains query | +30 |
| Exact keyword match | +40 |
| Word in searchable text | +10 |
| Word in title | +5 |
| Word in keywords | +3 |
| Context relevance (matching current page) | +50 |

### Category Filtering

Results are organized by category with color-coded icons:

| Category | Color | Icon |
|----------|-------|------|
| Admin | Red | Shield |
| Form Builder | Green | Document |
| Pipeline | Blue | Widgets |
| MongoDB | Green (#13AA52) | Storage |
| Conversational | Purple | Document |
| Templates | Orange | Document |
| Projects | Deep Purple | Widgets |
| Deployment | Pink | Play |
| Organizations | Cyan | Storage |
| Connections | Brown | Storage |

### Keyboard Navigation

Navigate search results efficiently:
- `↑` / `↓` - Navigate between topics
- `Enter` - Select highlighted topic
- `Escape` - Close help dialog

## Help Topics Structure

Each help topic has a consistent structure:

```typescript
interface HelpTopic {
  id: string;           // Unique identifier (e.g., 'form-builder')
  title: string;        // Display title
  description: string;  // Brief summary
  content: HelpContent[];      // Topic content blocks
  relatedTopics?: string[];    // Links to related topics
  keywords?: string[];         // Search keywords
  adminOnly?: boolean;         // Restrict to platform admins
}
```

### Content Block Types

Topics support multiple content block types:

| Type | Purpose |
|------|---------|
| `heading` | Section headers |
| `text` | Paragraphs of explanation |
| `list` | Bulleted lists |
| `code` | Code snippets with syntax highlighting |
| `tip` | Helpful tips (green highlight) |
| `warning` | Important warnings (orange highlight) |
| `example` | Usage examples |

### Example Topic

```typescript
{
  id: 'form-builder',
  title: 'Form Builder',
  description: 'Create dynamic data entry forms...',
  content: [
    { type: 'heading', content: 'Getting Started' },
    { type: 'text', content: 'Connect to your MongoDB...' },
    { type: 'list', content: [
      'Automatic schema detection',
      'Configure field types and validation',
      'Add conditional logic',
    ]},
    { type: 'tip', content: 'Use Document Preview to see...' },
  ],
  relatedTopics: ['field-configuration', 'conditional-logic'],
  keywords: ['form', 'builder', 'create', 'schema'],
}
```

## Help Topic Categories

The 100+ help topics are organized into these categories:

### Getting Started
- `getting-started` - Platform introduction
- `mongodb-connection` - Database setup
- `deployment-modes` - Cloud vs self-hosted

### Form Builder (25+ topics)
- `form-builder` - Overview
- `field-configuration` - Field settings
- `conditional-logic` - Show/hide rules
- `lookup-fields` - Cross-collection references
- `computed-fields` - Calculated values
- `repeater-fields` - Dynamic arrays
- `form-variables` - Form-wide values
- `form-versioning` - Version control
- `form-lifecycle` - Form states
- `multi-page-forms` - Multi-step forms
- `form-library` - Saved forms
- `document-preview` - Preview panel
- `form-publishing` - Publishing options
- `search-forms` - Search functionality
- `smart-dropdowns` - Database-backed dropdowns
- `theming` - Visual customization

### Workflows (20+ topics)
- `workflow-variables` - Workflow data
- `workflow-nodes` - Available nodes
- `node-form-trigger` - Form submission trigger
- `node-webhook-trigger` - HTTP trigger
- `node-schedule-trigger` - Cron trigger
- `node-conditional` - If/else logic
- `node-http-request` - HTTP calls
- `node-mongodb-query` - Database queries
- `node-email-send` - Email actions
- `node-ai-prompt` - AI generation
- And 15+ more node types...

### AI & Conversational
- `conversational-forms` - Chat-based forms
- `conversational-templates` - Pre-built templates
- `knowledge-guided-forms` - RAG integration
- `rag-document-management` - Document ingestion
- `node-ai-classify` - Classification
- `node-ai-extract` - Data extraction
- `node-ai-embed` - Embeddings
- `node-vector-search` - Semantic search

### Platform Features
- `organizations` - Teams and workspaces
- `projects-management` - Project organization
- `applications` - App packaging
- `application-releases` - Version releases
- `application-contracts` - Component protection
- `marketplace` - App marketplace
- `connection-vault` - Secure credentials

### RBAC (Access Control)
- `rbac-overview` - Access control overview
- `rbac-users` - User management
- `rbac-groups` - Group permissions
- `rbac-roles` - Custom roles
- `rbac-permissions` - Permission types

### API & Development
- `api-overview` - API introduction
- `api-authentication` - Auth methods
- `api-endpoints` - Available endpoints
- `api-rate-limiting` - Rate limits
- `api-keys-management` - API keys
- `mcp-server` - AI assistant integration
- `npm-packages` - NetPad packages

### Admin (Admin-Only)
- `admin-dashboard` - Admin overview
- `admin-user-management` - User admin
- `admin-waitlist` - Waitlist management
- `admin-ai-analytics` - AI usage tracking
- `admin-marketplace-review` - App review
- `admin-referrals` - Referral program

## Help Components

### HelpSearchModal

The main search dialog component:

```tsx
import { HelpSearchModal } from '@/components/Help/HelpSearchModal';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <HelpSearchModal
      open={open}
      onClose={() => setOpen(false)}
      onSelectTopic={(topicId) => {
        // Handle topic selection
      }}
      onStartTour={() => {
        // Start interactive tour
      }}
      showAdminTopics={isAdmin}  // Show admin-only topics
    />
  );
}
```

### ContextHelpButton

Add help buttons near features:

```tsx
import { ContextHelpButton } from '@/components/Help/ContextHelpButton';

// Context-specific help
<ContextHelpButton 
  topicId="form-builder" 
  placement="top-start" 
/>

// General help (opens search)
<ContextHelpButton 
  placement="top-start" 
/>

// Variants
<ContextHelpButton 
  topicId="conditional-logic"
  variant="visible"  // More prominent
  size="medium"      // Larger icon
/>
```

Props:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `topicId` | `HelpTopicId` | - | Specific topic to open |
| `placement` | `string` | `'top-start'` | Tooltip position |
| `size` | `'small' \| 'medium'` | `'small'` | Icon size |
| `tooltip` | `string` | Auto | Custom tooltip text |
| `variant` | `'subtle' \| 'visible'` | `'subtle'` | Visibility level |

### InlineHelpIcon

Tiny inline icons for labels:

```tsx
import { InlineHelpIcon } from '@/components/Help/ContextHelpButton';

<Typography>
  Conditional Logic
  <InlineHelpIcon topicId="conditional-logic" />
</Typography>
```

### HelpContext Provider

Access help functions from anywhere:

```tsx
import { useHelp } from '@/contexts/HelpContext';

function MyFeature() {
  const { openHelp, openSearch } = useHelp();

  return (
    <Button onClick={() => openHelp('form-builder')}>
      Learn More
    </Button>
  );
}
```

## Integrating Help in Settings

Settings sections and items support help integration:

```tsx
import { SettingsSection } from '@/components/Settings/SettingsSection';
import { SettingsItem } from '@/components/Settings/SettingsItem';

<SettingsSection
  title="Form Versioning"
  helpTopic="form-versioning"  // Adds help button
>
  <SettingsItem
    label="Auto-save interval"
    description="How often to save drafts"
    helpTopic="form-versioning"
  >
    <Select ... />
  </SettingsItem>
</SettingsSection>
```

## Tips for Using Help

### Quick Answers
1. Press `Cmd/Ctrl + /` from anywhere
2. Start typing your question
3. Select from context-aware results

### Exploring Features
1. Navigate to a feature (e.g., Form Builder)
2. Open help without searching
3. Browse the automatically relevant topics

### Deep Dives
1. Open a help topic
2. Follow "Related Topics" links
3. Explore connected documentation

### Finding Specific Topics
1. Search by topic ID: `form-builder`, `conditional-logic`
2. Search by keyword: `validation`, `trigger`, `mongodb`
3. Search by feature: `dropdown`, `email`, `schedule`

## Admin-Only Topics

Some help topics are restricted to platform administrators:

```typescript
{
  id: 'admin-ai-analytics',
  title: 'AI Analytics Dashboard',
  description: '...',
  adminOnly: true,  // Only visible to admins
}
```

These topics cover:
- User management
- Waitlist administration
- AI usage and costs
- Marketplace review
- Referral program management

## Adding New Help Topics

To add a new help topic, edit `src/lib/helpContent.ts`:

```typescript
// 1. Add the topic ID to the type definition
export type HelpTopicId =
  | 'existing-topic'
  | 'my-new-topic'  // Add here
  | ...;

// 2. Add the topic content
export const helpTopics: Record<HelpTopicId, HelpTopic> = {
  // ...existing topics...
  
  'my-new-topic': {
    id: 'my-new-topic',
    title: 'My New Feature',
    description: 'Brief description for search results',
    content: [
      { type: 'heading', content: 'Overview' },
      { type: 'text', content: 'Detailed explanation...' },
      { type: 'list', content: ['Point 1', 'Point 2'] },
      { type: 'tip', content: 'Pro tip for users' },
    ],
    relatedTopics: ['related-topic-1', 'related-topic-2'],
    keywords: ['keyword1', 'keyword2', 'keyword3'],
  },
};
```

## Related Documentation

- [Keyboard Shortcuts](./keyboard-shortcuts.md) - All keyboard shortcuts
- [Getting Started](/docs/getting-started/introduction) - Platform introduction
- [FAQ](/docs/getting-started/faq) - Frequently asked questions
