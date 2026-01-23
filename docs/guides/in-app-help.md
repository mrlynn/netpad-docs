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

When you open help, the system detects your current page or feature:
- Form Builder
- Workflow Editor
- Marketplace
- Data Explorer
- Settings
- And more...

### Smart Topic Boosting

Context-relevant help topics are automatically:
- **Boosted in search results** - Appear higher in the list
- **Visually highlighted** - Green border and background
- **Marked as relevant** - "Relevant to: [Feature Name]" indicator

### No Search Required

Even without typing anything, the most relevant topics for your current page appear first. This makes it easy to discover help for the feature you're actively using.

## Search Capabilities

### Keyword Search

Type to search across:
- Topic titles
- Topic descriptions
- Keywords and tags

### Relevance Scoring

Results are ranked by:
1. **Exact matches** - Highest priority
2. **Title matches** - High priority
3. **Keyword matches** - Medium priority
4. **Context relevance** - Boosted when matching current page

### Category Filtering

Results are organized by category with color-coded icons:
- Form Builder (blue)
- Workflows (purple)
- MongoDB (green)
- Templates (orange)
- Conversational Forms (teal)
- Projects (indigo)
- Organizations (red)
- Connections (cyan)
- Deployment (pink)
- Admin (gray)

### Keyboard Navigation

Navigate search results efficiently:
- `↑` / `↓` - Navigate between topics
- `Enter` - Select highlighted topic
- `Escape` - Close help dialog

## Help Topics Coverage

The help system includes 100+ topics covering:

### Getting Started
- Platform overview
- Quick start guides
- Account setup

### Form Builder
- Creating forms
- Field types and configuration
- Validation rules
- Conditional logic
- Theming and branding
- Publishing forms

### Workflows
- Creating workflows
- Node types
- Triggers and execution
- Error handling

### Data Management
- MongoDB connections
- Data browser
- Import/export

### AI & Conversational
- Conversational forms
- RAG knowledge-guided forms
- AI agents
- Document management

### Platform Features
- Organizations and teams
- Projects and environments
- Marketplace
- Billing and subscriptions

### Deployment
- Cloud deployment
- Self-hosted setup
- Standalone apps

### Troubleshooting
- Common issues
- Error messages
- FAQs

## Context-Sensitive Help Components

### ContextHelpButton

A reusable help button component for complex features:

**Variants:**
- **Subtle** - Low opacity (0.3), becomes visible on hover
- **Visible** - More prominent, always visible

**Features:**
- Opens specific help topics or general search
- Customizable placement and size
- Seamlessly integrates with any feature

### InlineHelpIcon

A tiny inline help icon for use within text and labels:

**Features:**
- Very subtle (0.3 opacity) until hovered
- Perfect for inline help within form labels
- Non-intrusive design

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

## Related Documentation

- [Keyboard Shortcuts](./keyboard-shortcuts.md) - All keyboard shortcuts
- [Getting Started](../getting-started/introduction.md) - Platform introduction
- [FAQ](../getting-started/faq.md) - Frequently asked questions
