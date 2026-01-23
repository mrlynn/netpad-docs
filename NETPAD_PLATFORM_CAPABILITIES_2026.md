# NetPad Platform: Complete Capabilities Guide

**A comprehensive platform for MongoDB-connected data collection, workflow automation, and AI-powered form experiences.**

---

> **Document Status**: Current State
> **Last Updated**: January 2026
> **Version**: 4.10.0

---

## Executive Summary

**NetPad** is an open-source, enterprise-grade platform that transforms how organizations build MongoDB-connected applications. The platform combines four core pillars—**Forms**, **Workflows**, **Data Management**, and **AI/Conversational Experiences**—to deliver a complete solution from database to production in minutes.

**Knowledge-Guided AI**: NetPad's RAG (Retrieval-Augmented Generation) capabilities enable conversational forms to answer questions using builder-supplied documents, making complex forms accessible through intelligent, document-grounded conversations.

### What's New in 2026

Since the December 2024 capabilities document, NetPad has undergone significant expansion:

- **Template Gallery**: 25+ form templates and 11 workflow templates across 10+ categories for rapid development
- **Search Form Templates**: Pre-built search form templates (Customer Search, Order Search, Support Ticket Search)
- **Conversational Forms**: AI-powered natural language data collection
- **Knowledge-Guided Conversational Forms (RAG)**: Document-grounded AI conversations with vector search
- **Template Admin System**: Full template management for conversational experiences
- **Projects**: Environment-based organization (dev, staging, prod)
- **Deployment Platform**: One-click deployment to Vercel with auto-provisioned databases
- **Self-Hosted Deployment Mode**: Run NetPad privately with Atlas Local for RAG without M10 upgrade
- **Enhanced AI Features**: 15+ AI agents for optimization, compliance, translation, insights, and RAG
- **Vector Search Integration**: MongoDB Atlas Vector Search for semantic document retrieval
- **Feature Gates**: Two-tier access control (subscription + infrastructure requirements)
- **Applications-First Model**: Applications as first-class entities grouping forms, workflows, and connections
- **Application Releases**: Versioned snapshots with semantic versioning (X.Y.Z)
- **Application Permissions (RBAC)**: Fine-grained access control at application level
- **Application Marketplace**: Public catalog for discovering and sharing applications
- **My Applications**: Management view for published applications (edit, unpublish, delete)
- **Admin Review Workflow**: Platform admins review and approve/reject marketplace submissions
- **Official vs Community**: Designation for NetPad-verified vs user-created applications
- **npm Package Integration**: Publish and install applications from npm registry
- **npm Registry Sync**: Automatic discovery and syncing of NetPad packages
- **165+ API Endpoints**: Comprehensive programmatic access

---

## Platform Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           NetPad Platform                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌──────────┐ │
│  │    Forms      │  │   Workflows   │  │ Data Mgmt     │  │    AI    │ │
│  │               │  │               │  │               │  │          │ │
│  │ • Builder     │  │ • Visual      │  │ • Browser     │  │ • Conv.  │ │
│  │ • WYSIWYG     │  │   Editor      │  │ • Connection  │  │   Forms  │ │
│  │ • 30+ Fields  │  │ • 25+ Nodes   │  │   Vault       │  │ • 12+    │ │
│  │ • Converstnl  │  │ • Triggers    │  │ • Import/     │  │   Agents │ │
│  │ • Analytics   │  │ • Execution   │  │   Export      │  │ • Templ. │ │
│  │               │  │   Engine      │  │ • Atlas       │  │   Admin  │ │
│  └───────────────┘  └───────────────┘  └───────────────┘  └──────────┘ │
│          │                  │                  │                │       │
│          └──────────────────┴──────────────────┴────────────────┘       │
│                                      │                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                    Platform Services                                 ││
│  │  Organizations │ Projects │ Auth │ Billing │ Permissions │ API     ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                      │                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                     MongoDB Integration                              ││
│  │              Atlas • Self-hosted • Atlas Data API                   ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Pillar 1: Forms

**Purpose**: Collect, validate, and store data through beautiful, customizable forms with multiple collection modes.

### Form Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Data Entry** | Standard CRUD forms | Registration, surveys, data input |
| **Search** | Query/filter existing data | Data lookup, search interfaces with operators (equals, contains, between, in, etc.) |
| **Both** | Switchable mode | Flexible data management (entry + search) |
| **Conversational** | AI-powered dialogue | Support tickets, feedback, intake with natural language interaction |

**Search Forms**:
- Configure searchable fields with multiple operators (equals, contains, between, in, regex, etc.)
- Customize result display (table, cards, list layouts)
- Smart dropdowns automatically populate from database values
- Pagination and result actions (view, edit, delete, export)
- **Search Form Templates**: Customer Search, Order Search, Support Ticket Search

### Visual Form Builder

**WYSIWYG Editor**:
- Drag-and-drop interface with live preview
- Real-time form configuration
- Keyboard shortcuts for power users
- Draft auto-save with recovery

**30+ Field Types**:

| Category | Fields |
|----------|--------|
| **Basic** | Text, Number, Email, Phone, URL, Password |
| **Selection** | Select, Multi-Select, Radio, Checkbox, Tags |
| **Date/Time** | Date Picker, Time Picker, Date Range |
| **Rich Input** | Text Area, Rich Text Editor, Code Editor |
| **Files** | File Upload, Image Upload, Multiple Files |
| **Advanced** | Signature, Rating, NPS, Matrix, Ranking |
| **Location** | Address, Geolocation, Map Picker |
| **Special** | Color Picker, Slider, OTP Input |
| **Layout** | Section Header, Description, Divider, Spacer, Image |
| **Data** | Lookup, Computed/Formula, Nested Object, Repeater |

**Advanced Features**:
- **Conditional Logic**: Show/hide fields based on other field values
- **Computed Fields**: Formula-based calculations with expression engine
- **Lookup Fields**: Cross-collection references with autocomplete
- **Repeater Fields**: Dynamic nested forms for array data
- **Smart Dropdowns**: Auto-populate options from distinct database values
- **Field Encryption**: MongoDB Queryable Encryption for sensitive data
- **URL Pre-fill**: Auto-populate forms from query parameters

### Multi-Page Forms

- Step-based progression with configurable indicators
- Progress styles: dots, numbers, progress bar, tabs
- Page-level validation
- Navigation controls (back, next, jump)
- Completion tracking

### Form Theming & Branding

- **Header Styles**: Color, gradient, image with overlay
- **Color Schemes**: Primary, secondary, error, success
- **Preset Themes**: Professional, Creative, Minimal, Bold, Nature, Tech
- **Custom CSS**: Full styling control
- **Dark Mode**: Built-in support
- **Logo & Branding**: Company logo, favicon, custom fonts

### Form Lifecycle

| Mode | Description | Features |
|------|-------------|----------|
| **Create** | New document entry | All fields editable, validation |
| **Edit** | Update existing | Pre-filled, field-level edit control |
| **View** | Read-only display | Formatted output, no editing |
| **Clone** | Duplicate entry | Pre-filled, new document ID |
| **Search** | Query builder | Filter operators, result display |

### Publishing & Distribution

- **One-Click Publish**: Generate public URLs instantly
- **Custom Slugs**: Branded, memorable URLs
- **Embeddable Forms**: iFrame embed code generation
- **Access Control**: Public, authenticated, or restricted
- **Bot Protection**: Honeypot, timing validation, Turnstile CAPTCHA

### Template Gallery

**Pre-built Templates for Rapid Development**:
- **25+ Form Templates** across 10 categories
- **11 Workflow Templates** for common automation patterns
- Browse by category with search functionality
- Preview templates before applying
- One-click template application with full customization support

**Form Template Categories**:
| Category | Templates | Use Cases |
|----------|-----------|-----------|
| **Business** | 5 templates | Contact forms, job applications, lead capture, quote requests, newsletter signup |
| **Events** | 4 templates | Registration, RSVP, volunteer signup, webinar registration |
| **Feedback** | 4 templates | Customer satisfaction, NPS surveys, product feedback, general feedback |
| **Support** | 2 templates | Support tickets, appointment booking |
| **E-commerce** | 2 templates | Order forms, return requests |
| **Healthcare** | 2 templates | Patient intake (encrypted), health screening |
| **Finance** | 2 templates | Expense reports, financial applications (encrypted) |
| **Education** | 2 templates | Course enrollment, scholarship applications |
| **Real Estate** | 2 templates | Property inquiries, rental applications |
| **Search Forms** | 3 templates | Customer search, order search, support ticket search |

**Workflow Template Categories**:
- **Form Processing**: Form to email, form to database, form notifications
- **Data Processing**: Scheduled sync, data pipelines
- **Integrations**: Webhook processors, API monitoring
- **AI Workflows**: Text classification, data extraction
- **Logic**: Conditional routing, batch processing

**Template Features**:
- Template preview with field lists and configuration details
- Complexity indicators (simple, moderate, advanced)
- Estimated setup time
- Full customization after template application
- Templates include fields, validation rules, and form configuration
- Search form templates include `formType: 'search'` and `searchConfig`

### Form Analytics

- **Response Trends**: Time-series visualization
- **Field Distribution**: Charts by field type
- **Completion Funnel**: Drop-off analysis
- **Field-Level Stats**: Min, max, average, median
- **Device Breakdown**: Mobile, desktop, tablet
- **Completion Time**: Average time to complete

---

## Pillar 2: Workflows & Automation

**Purpose**: Automate business processes with visual workflow orchestration and 25+ node types.

### Visual Workflow Editor

- **Canvas-Based Design**: ReactFlow-powered drag-and-drop editor
- **Node Palette**: 25+ pre-built nodes organized by category
- **Connection Mapping**: Visual data flow between nodes
- **Real-Time Monitoring**: Execution status and progress
- **Version Control**: Publish, rollback, version history

### Trigger Types

| Trigger | Description | Configuration |
|---------|-------------|---------------|
| **Form Submission** | Start when form submitted | Form selection, filter conditions |
| **Webhook** | External HTTP POST | Custom URL, auth, payload schema |
| **Schedule** | Cron-based execution | CRON expression, timezone |
| **Manual** | User-initiated | Button in UI, API call |
| **API** | Programmatic trigger | API key, payload schema |

### Node Categories

**Logic Nodes**:
- **Conditional (If/Else)**: Route based on expressions
- **Switch**: Multi-branch routing
- **Filter**: Filter array items
- **Loop**: Iterate over arrays

**Data Nodes**:
- **Transform**: Modify data structure using expressions
- **Code**: Execute custom JavaScript
- **Set Variable**: Define workflow variables

**MongoDB Nodes**:
- **Query**: Find documents with aggregation pipeline
- **Write**: Insert or update documents
- **Atlas Data API**: REST-based MongoDB operations
- **Atlas Cluster**: Cluster management operations

**Integration Nodes**:
- **HTTP Request**: REST API calls to external services
- **Email Send**: SMTP-based email delivery
- **Google Sheets**: Read/write spreadsheet data
- **Slack**: Send messages and notifications

**Flow Control**:
- **Delay**: Wait for specified duration
- **Parallel**: Execute branches concurrently
- **Merge**: Combine parallel branches

### Execution Engine

- **Async Processing**: Queue-based execution system
- **Retry Logic**: Configurable policies with exponential backoff
- **Error Handling**: Stop, continue, or rollback strategies
- **Timeout Management**: Per-node and workflow-level timeouts
- **Execution Modes**: Sequential, parallel, auto-detected
- **Job Queue**: MongoDB-based with priority support

### Workflow Limits by Tier

| Tier | Executions/Month | Active Workflows |
|------|------------------|------------------|
| **Free** | 50 | 1 |
| **Pro** | 500 | 5 |
| **Team** | 5,000 | 25 |
| **Enterprise** | Unlimited | Unlimited |

---

## Pillar 3: Data Management

**Purpose**: Browse, query, and manage MongoDB data with visual tools and secure credential management.

### Data Browser

- **Collection Navigation**: Browse databases and collections
- **Document Viewer**: View, edit, delete documents
- **Query Builder**: Visual filter construction
- **Aggregation Pipeline**: Build and test pipelines
- **Export Options**: Download as JSON or CSV

### Connection Vault

- **Encrypted Storage**: AES-256-GCM encryption for credentials
- **Named Connections**: Descriptive, team-shareable references
- **Connection Testing**: Validate before saving
- **Usage Tracking**: Monitor connection usage
- **Access Control**: Owner, Admin, User roles

### Atlas Integration

- **Auto-Provisioning**: M0 free tier cluster for new users
- **Cluster Monitoring**: Status, metrics, health checks
- **Database Users**: Create and manage access
- **Connection Strings**: Secure generation and rotation

### Data Operations

- **Import**: CSV/JSON with schema inference and mapping
- **Export**: Collections, queries, or form responses
- **Sample Data**: Pre-built datasets for testing
- **Schema Analysis**: Automatic schema detection

---

## Pillar 4: AI & Conversational Experiences

**Purpose**: Transform data collection with AI-powered conversational forms and intelligent automation.

### Conversational Forms

**Core Concept**: Replace traditional form fields with natural language dialogue. Users chat with an AI agent that guides them through data collection, asks clarifying questions, and extracts structured data.

**Key Features**:
- Natural language interaction
- Intelligent topic coverage tracking
- Automatic structured data extraction
- Adaptive questioning based on responses
- Configurable AI personas
- Confidence scoring per field
- Full transcript storage

**Example Flow (IT Helpdesk)**:
```
AI: Hi! I'm here to help you submit an IT support ticket.
    What kind of issue are you experiencing?

User: My laptop won't turn on

AI: I'm sorry to hear that. When you say it won't turn on,
    does the screen stay completely black, or do you see any
    lights or error messages?

User: Completely black, no lights at all

AI: That sounds like a hardware issue. How urgent is this?
    Are you able to work from another device?

[...conversation continues until all required data collected...]

→ Extracted Data:
  {
    "issueCategory": "hardware",
    "urgencyLevel": "high",
    "description": "Laptop won't power on, no lights...",
    "confidence": 0.92
  }
```

### Conversational Form Configuration

```typescript
interface ConversationalFormConfig {
  formType: 'conversational';
  templateId?: string;  // 'it-helpdesk', 'customer-feedback', etc.

  objective: string;    // What to accomplish
  context: string;      // Business context

  topics: [
    {
      id: string;
      name: string;
      description: string;
      priority: 'required' | 'important' | 'optional';
      depth: 'surface' | 'moderate' | 'deep';
    }
  ];

  persona: {
    style: 'professional' | 'friendly' | 'casual' | 'empathetic';
    tone: string;
    behaviors: string[];
    restrictions: string[];
  };

  conversationLimits: {
    maxTurns: number;      // e.g., 15
    maxDuration: number;   // minutes
    minConfidence: number; // 0-1 threshold
  };

  extractionSchema: ExtractionField[];
}
```

### Knowledge-Guided Conversational Forms (RAG)

**Core Concept**: Extend conversational forms with Retrieval-Augmented Generation (RAG) to ground AI responses in builder-supplied documents. The AI can answer questions using uploaded knowledge bases, guide users through complex forms, and provide accurate, traceable information.

**Key Features**:
- **Document Upload**: Attach PDF, DOCX, or TXT documents to forms
- **Semantic Search**: Vector search across document content using MongoDB Atlas Vector Search
- **Source Citations**: Every AI response includes traceable source references
- **Context-Aware Answers**: AI uses document content to answer user questions accurately
- **Completion Guidance**: AI guides users through form completion using document knowledge
- **Schema-Aware**: All suggestions respect form validation rules

**Use Cases**:
- **Compliance Forms**: Reference policy documents to answer questions
- **Legal Intake**: Use contract templates to guide data collection
- **Healthcare Forms**: Reference medical guidelines during patient intake
- **Vendor Risk Assessment**: Use vendor policies to complete assessments
- **Complex Applications**: Guide users through multi-step processes with documentation

**Document Management**:
- Upload documents (PDF, DOCX, TXT) up to 5MB
- Automatic text extraction and intelligent chunking
- Sentence-aware chunking preserves context
- OpenAI embeddings (text-embedding-3-small) for semantic search
- MongoDB Atlas Vector Search for efficient retrieval
- Document metadata: title, description, source type, tags

**Retrieval Configuration**:
```typescript
interface RAGConfig {
  enabled: boolean;
  documents: string[];  // Document IDs to use
  retrievalConfig: {
    maxChunks: number;        // Default: 5
    minScore: number;         // Default: 0.7
    retrievalThreshold: number; // Default: 0.5
  };
}
```

**Source Citation Format**:
- Inline references: `[1]`, `[2]` in AI responses
- Expandable reference section with document details
- Clickable links to source documents
- Confidence scores per citation

**Requirements**:
- **Cloud Deployment (netpad.io)**:
  - Subscription: Team or Enterprise plan
  - Infrastructure: MongoDB Atlas M10+ cluster (required for Vector Search)
- **Self-Hosted Deployment**:
  - Subscription: Any tier (Free, Pro, Team, Enterprise)
  - Infrastructure: Atlas Local (Docker) - no M10 upgrade needed
- **Common Requirements**:
  - Documents: Stored in Vercel Blob with private access
  - Embeddings: OpenAI API key required

**Example Flow**:
```
User: What's the maximum reimbursement amount?

AI: According to the travel policy document [1], the maximum 
    reimbursement amount is $500 per day for domestic travel 
    and $750 per day for international travel. This includes 
    accommodation, meals, and transportation.

    [1] Travel Policy Document, Section 4.2, Page 12

User: I'm traveling to London for 3 days

AI: Based on the policy [1], your maximum reimbursement 
    would be $2,250 (3 days × $750/day for international 
    travel). I'll help you complete the expense form with 
    this information.
```

### Template Admin System

**Built-in Templates**:
| Template | Category | Use Case |
|----------|----------|----------|
| **IT Helpdesk** | Support | Technical support ticket creation |
| **Customer Feedback** | Feedback | Satisfaction and feedback collection |
| **Patient Intake** | Intake | Healthcare patient information |
| **General Intake** | Intake | Flexible intake for various needs |

**Template Management** (Settings > Templates):
- View all templates (built-in + custom)
- Filter by source (Built-in, Custom) and category
- Clone built-in templates to customize
- Create custom templates from scratch
- Full CRUD operations on custom templates

**Template Components**:
1. **Basics**: Name, description, category, priority, tags
2. **Persona & Limits**: Objective, context, AI style, conversation limits
3. **Topics**: Conversation topics with priority and depth
4. **Extraction Schema**: Fields to extract (type, required, validation)
5. **Prompts**: Custom prompt templates for advanced control

### AI Agents (15+ Available)

| Agent | Description | Tier | Requirements |
|-------|-------------|------|--------------|
| **Field Type Detection** | Auto-detect field types from data | Free | - |
| **Inline Suggestions** | Real-time field suggestions | Pro | - |
| **Form Generator** | Create forms from natural language | Pro | - |
| **Formula Assistant** | Help build computed field formulas | Pro | - |
| **Conditional Logic Generator** | Auto-generate show/hide rules | Pro | - |
| **Validation Pattern Generator** | Generate regex patterns | Pro | - |
| **Form Optimization** | Analyze and improve forms | Team | - |
| **Response Processing** | Process and transform responses | Team | - |
| **Response Insights** | Analyze submission patterns | Team | - |
| **Compliance Audit** | Check for regulatory compliance | Team | - |
| **Auto-Translation** | Translate forms to other languages | Team | - |
| **Knowledge-Guided Conversation** | RAG-powered conversational forms | Team | M10+ cluster |
| **Document Upload for RAG** | Manage knowledge base documents | Team | M10+ cluster |
| **Vector Search** | Semantic document retrieval | Team | M10+ cluster |
| **Workflow Generator** | Generate workflows from description | Enterprise | - |

### AI Usage Limits

| Tier | AI Generations/Month |
|------|---------------------|
| **Free** | 10 |
| **Pro** | 100 |
| **Team** | 500 |
| **Enterprise** | Unlimited |

---

## Pillar 5: Platform Services

### Organizations & Multi-Tenancy

**Structure**:
```
Organization
├── Projects (dev, staging, prod)
│   ├── Applications
│   │   ├── Forms
│   │   ├── Workflows
│   │   ├── Connections
│   │   └── Releases (versioned snapshots)
│   ├── Forms (standalone)
│   └── Workflows (standalone)
├── Members (with roles)
├── Connection Vault
├── Templates
└── Billing/Subscription
```

**Organization Features**:
- Team member management with roles (Owner, Admin, Member, Viewer)
- Invitation system (7-day expiration)
- Organization-level settings and limits
- Shared resources (connections, templates)

**Organization Member Management**:
- **UI Location**: Settings → Organizations tab (`/settings?tab=organizations`)
- **Member Management**: View all organization members with roles and email addresses
- **Invite Members**: Send email invitations with role assignment (Owner, Admin, Member, Viewer)
- **Member Roles**: Granular access control at organization level
- **Invitation Workflow**: 7-day expiration, email-based acceptance, automatic role assignment
- **Multi-Organization Support**: Users can belong to multiple organizations with different roles

### Applications (Applications-First Model)

**Core Concept**: Applications are first-class entities that group related forms, workflows, and connections together. They provide organization, versioning, and sharing capabilities.

**Application Structure**:
- **Forms**: All forms associated with the application
- **Workflows**: Automation workflows for the application
- **Connections**: Form-to-workflow triggers and integrations
- **Releases**: Versioned snapshots with semantic versioning (X.Y.Z)
- **Stats**: Application-level metrics (forms count, workflows count, connections count)

**Application Features**:
- **Organization**: Group related forms and workflows logically
- **Versioning**: Create releases to snapshot applications at specific versions
- **Sharing**: Publish applications to the marketplace
- **Export**: Export entire applications as bundles
- **Insights**: Track application-level statistics

**Application Releases**:
- Semantic versioning (Major.Minor.Patch)
- Immutable snapshots of forms, workflows, and connections
- Changelog tracking
- Manifest generation for marketplace publishing
- Version suggestion based on previous releases

**Application Contracts & Protection**:
- **Explicit Contract Definition**: Define public API surface (inputs, outputs, side effects, events, behaviors)
- **Contract Lifecycle**: Draft → Active → Deprecated status management
- **Breaking Change Detection**: Deterministic diffing to identify breaking vs non-breaking changes
- **Contract Enforcement**: Requires major version bumps for breaking changes at release time
- **Component Protection**: Explicit locking of forms/workflows to prevent accidental modifications
- **Contract Comparison**: Compare contract versions to see changes with impact levels
- **Migration Guides**: Automatic generation of migration instructions for breaking changes
- **Visual Contract Editor**: Create and edit contracts through intuitive UI
- **Breaking Changes Dialog**: Display breaking changes with migration guidance during upgrades
- **Protection Indicators**: Visual lock status in form and workflow editors

**Application Permissions (RBAC)**:
- **Fine-Grained Access Control**: Application-level permissions separate from organization roles
- **Permission Roles**: Owner (full control), Editor (edit and create releases), Analyst (view and analyze), Viewer (read-only)
- **Explicit vs Org-Wide Access**: Applications can be set to `org_members` (all org members) or `explicit` (permission-based)
- **Permission Management UI**: Permissions tab in application detail view for granting, updating, and revoking permissions
- **Contract Integration**: Active contracts restrict editing to owners and explicit permission holders
- **User Selection**: Select from organization members when granting application permissions
- **Permission Inheritance**: Organization owners/admins have full access to all applications by default

**Application Marketplace**:
- **Browse**: Discover published applications by category, tags, or search
- **Import**: One-click import into your projects
- **Publish**: Share your applications with the community
- **My Applications**: Manage your published applications (edit, unpublish, delete)
- **Admin Review**: Platform admins review and approve/reject submissions
- **Official vs Community**: Verified NetPad apps vs user-created packages
- **Source Filtering**: Filter by source (web marketplace or npm packages)
- **npm Integration**: Install applications directly from npm registry
- **npm Package Discovery**: Automatic discovery and syncing of NetPad packages from npm
- **Dependency Resolution**: Automatic installation of package dependencies

### Projects

Organize work by environment or initiative:

| Environment | Purpose |
|-------------|---------|
| **Development** | Build and test |
| **Staging** | Pre-production validation |
| **Production** | Live deployment |
| **Custom** | Client-specific, initiative-based |

**Project Features**:
- Group applications, forms, and workflows
- Project-level analytics
- Export entire projects
- Environment-based configuration

### Authentication

**Supported Methods**:
- Google OAuth
- GitHub OAuth
- Magic Link (passwordless email)
- Passkeys (WebAuthn/FIDO2)

**Form Access Control**:
| Level | Description |
|-------|-------------|
| **Public** | Anyone can submit |
| **Authenticated** | Login required |
| **Restricted** | Specific users/domains only |

### Permissions (RBAC)

**Three-Tier Permission System**:
1. **Organization-Level**: Access to organization and its resources
2. **Application-Level**: Fine-grained permissions within specific applications
3. **Form-Level**: Permissions on individual forms

**Organization Roles**:
| Role | Capabilities |
|------|--------------|
| **Owner** | Full control, billing, deletion, manage all applications |
| **Admin** | Manage members, settings, resources, manage all applications |
| **Member** | Create/edit own resources, access org-wide applications |
| **Viewer** | Read-only access to organization resources |

**Application Roles**:
| Role | Capabilities |
|------|-------------|
| **Owner** | Full control: edit, manage permissions, create releases, delete |
| **Editor** | Edit application, create releases, cannot manage permissions |
| **Analyst** | View application, analyze data, read-only access |
| **Viewer** | Read-only access to application and its resources |

**Form Roles**:
| Role | Capabilities |
|------|--------------|
| **Owner** | Full control |
| **Editor** | Edit form and view responses |
| **Analyst** | View responses and analytics |
| **Viewer** | View form only |

### Deployment Platform

**One-Click Deployment**:
1. Click "Deploy to Vercel" from Settings
2. Configure environment variables
3. Auto-provision M0 MongoDB cluster (optional)
4. Deploy and access custom instance

**Deployment Features**:
- Database provisioning options (auto, manual, existing)
- Environment variable management
- Custom branding configuration
- Health checks and status monitoring
- Deployment versioning
- Custom domain support

**Deployment Targets**:
- Vercel (primary, fully integrated)
- Netlify, Railway, Self-hosted (framework support)

### In-App Help System

**Purpose**: Comprehensive, context-aware help system accessible from anywhere in the platform to guide users through features and answer questions.

**Core Features**:
- **100+ Help Topics** covering all platform features
- **Context-Aware Search** - Automatically detects current page/feature and highlights relevant help topics
- **Global Access** - Available via `CMD+/` (Mac) or `CTRL+/` (Windows/Linux) keyboard shortcut
- **Multiple Entry Points** - Help button in navbar, context-sensitive help buttons, and keyboard shortcuts
- **Smart Search** - Keyword-based search with relevance scoring and context boosting

**Help Access Methods**:
- **Keyboard Shortcut**: `CMD+/` or `CTRL+/` - Opens help search from anywhere
- **Alternative Shortcuts**: `F1` key or `CMD+Shift+?`
- **Global Help Button** - Always visible in upper-right navbar (next to marketplace icon)
- **Context-Sensitive Help Buttons** - Subtle `?` icons near complex features
- **Inline Help Icons** - Tiny help icons within labels and descriptions

**Context-Aware Intelligence**:
- **Automatic Context Detection** - System detects current route/feature (Form Builder, Workflows, Marketplace, etc.)
- **Relevant Topic Boosting** - Context-relevant help topics are automatically boosted in search results
- **Visual Indicators** - Context-relevant topics highlighted with green border and background
- **Context Chip** - Shows "Relevant to: [Feature Name]" when no search query is entered
- **Smart Ranking** - Even without typing, most relevant topics appear first based on current page

**Help Content Organization**:
- **Categories**: Form Builder, Workflows, MongoDB, Templates, Conversational Forms, Projects, Organizations, Connections, Deployment, Admin
- **Related Topics** - Each topic links to related help content
- **Keywords** - Topics tagged with searchable keywords for better discoverability
- **Admin Topics** - Platform admin-only help topics for advanced features

**Context-Sensitive Help Components**:
- **ContextHelpButton** - Reusable help button component for complex features
  - Two variants: `subtle` (low opacity, becomes visible on hover) and `visible` (more prominent)
  - Can open specific help topics or general help search
  - Customizable placement, size, and styling
- **InlineHelpIcon** - Tiny inline help icon for use within text/labels
  - Very subtle (0.3 opacity) until hovered
  - Perfect for inline help within labels or descriptions

**Search Capabilities**:
- **Keyword Matching** - Searches titles, descriptions, and keywords
- **Relevance Scoring** - Exact matches, title matches, and keyword matches scored differently
- **Context Boosting** - Topics matching current page context receive score boosts
- **Category Filtering** - Results organized by category with color-coded icons
- **Keyboard Navigation** - Arrow keys to navigate, Enter to select, Escape to close

**Help Topics Coverage**:
- Getting started guides
- Feature-specific documentation (Form Builder, Workflows, etc.)
- Configuration guides (MongoDB connections, themes, etc.)
- Troubleshooting and FAQs
- Deployment guides (Cloud, Self-Hosted, Standalone)
- API documentation
- Template usage guides
- Best practices and patterns

**Future Enhancements** (Planned):
- **Semantic Search** - Vector search using embeddings for better intent understanding
- **Hybrid Search** - Combine keyword + semantic search for optimal results
- **User Content Search** - Optional separate tab for searching user's forms/workflows/apps (via `CMD+K` command palette)

---

## Integration Ecosystem

### Native Integrations

| Integration | Capabilities |
|-------------|--------------|
| **Google Sheets** | Read/write spreadsheet data |
| **Google Drive** | File access and storage |
| **Google Calendar** | Event creation |
| **Slack** | Notifications and messages |
| **MongoDB Atlas** | Cluster management |
| **Email (SMTP)** | Form notifications |
| **Webhooks** | Custom HTTP integrations |

### Integration Credential Management

- OAuth2 token management with refresh
- API key storage with encryption
- Service account credentials
- Usage tracking and status monitoring
- Organization-scoped access

### Developer Packages

**@netpad/forms** (npm):
```bash
npm install @netpad/forms
```
- React component library
- 28+ field types
- Multi-page wizard support
- Conditional logic engine
- TypeScript support

**@netpad/workflows** (npm):
```bash
npm install @netpad/workflows
```
- Workflow API client
- Execution management
- Type-safe TypeScript API
- Status polling utilities

**@netpad/mcp-server** (npm):
```bash
npm install @netpad/mcp-server
```
- MCP (Model Context Protocol) server for AI-assisted NetPad development
- **Version 2.2.0** with validated TypeScript output and consolidated tools
- **75 tools** across 7 categories:
  - Form Building (6 tools): Generate forms, fields, conditional logic, computed fields
  - Application Management (7 tools): Create applications, contracts, releases
  - Marketplace & npm (8 tools): Publish, search, install applications
  - Workflow Automation (10 tools): Build workflows with 25+ node types
  - Conversational & Search Forms (11 tools): AI-powered data collection, RAG, search interfaces
  - Enhanced Templates (5 tools): Access 25+ form templates across 10 categories
  - Data Browser (12 tools): MongoDB connection management, queries, aggregations
- **New consolidated tools (v2.2.0)**:
  - `get_reference` - Unified access to field types, operators, formula functions, validation, themes, and documentation
  - `browse_templates` - Browse all 40+ templates (forms, applications, workflows, conversational, queries) with filtering
- **Validated TypeScript output**: All code-generating tools return self-contained TypeScript with inline types, auto-validation, and auto-fix
- **16 resources** for documentation and reference data
- **24 form templates** (business, events, feedback, support, healthcare, etc.)
- **4 conversational form templates** (IT helpdesk, customer feedback, lead qualification, patient intake)
- **5 workflow templates** (form-to-email, form-to-database, lead qualification, etc.)
- Compatible with Claude Desktop, Cursor, and other MCP-compatible clients

**@netpad/cli** (npm):
```bash
npm install -g @netpad/cli
# or
npx @netpad/cli
```
- Command-line tool for managing NetPad applications
- Install packages from npm registry
- Search for NetPad packages
- Create new application packages
- Authenticate with NetPad API
- Manage installed applications

### npm Package Integration

**Publishing Applications to npm**:
- Generate npm-ready packages from NetPad applications
- Automatic package.json generation with NetPad-specific metadata
- Bundle.json export for complete application distribution
- Support for official (`@netpad/`) and community packages
- Semantic versioning integration

**Installing from npm**:
- Install NetPad applications directly from npm registry
- Automatic dependency resolution and installation
- Version specification support (latest, specific version, semver ranges)
- Package discovery by keywords (`netpad-app`, `netpad-plugin`)
- Official and community package support

**npm Registry Sync**:
- Automatic discovery of NetPad packages on npm
- Background sync service to keep marketplace up-to-date
- Manual sync trigger via API
- Sync status tracking and error reporting
- Support for both official (`@netpad/`) scope and community packages

**Package Structure**:
- Standard npm package.json with `netpad` field
- Application metadata (name, description, version, category, tags)
- Dependency declarations (applications, plugins, workflow templates)
- Configuration schemas for application setup
- Bundle.json containing forms, workflows, and connections

---

## API Reference

### API Overview

**165+ Endpoints** across major categories:

| Category | Endpoints | Description |
|----------|-----------|-------------|
| **/api/forms** | 40+ | Form CRUD, submissions, analytics |
| **/api/workflows** | 15+ | Workflow management, execution |
| **/api/organizations** | 30+ | Org management, vault, templates |
| **/api/projects** | 8 | Project management, bundles |
| **/api/applications** | 10+ | Application management, releases |
| **/api/marketplace** | 12+ | Marketplace browsing, publishing, management |
| **/api/marketplace/npm** | 3+ | npm package search, install, sync |
| **/api/mongodb** | 10+ | Database operations |
| **/api/deployments** | 5+ | Deployment management |
| **/api/ai** | 12+ | AI agents and generation |
| **/api/rag** | 5+ | RAG document management, retrieval |
| **/api/integrations** | 8+ | Integration credentials |
| **/api/auth** | 10+ | Authentication flows |
| **/api/billing** | 4 | Subscription management |
| **/api/v1** | 5+ | Public API (external apps) |

### Public API (v1)

External applications can integrate via the public API:

```bash
# Submit form data
POST /api/v1/forms/{formId}/submit
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}

# Retrieve responses
GET /api/v1/forms/{formId}/responses
Authorization: Bearer {api_key}
```

### API Key Management

- Generate keys with custom scopes
- Set expiration dates
- Track usage and rate limits
- Revoke keys instantly

---

## Security & Compliance

### Encryption

| Layer | Technology |
|-------|------------|
| **Connection Strings** | AES-256-GCM encryption |
| **Field-Level** | MongoDB Queryable Encryption |
| **Transport** | TLS 1.3 |
| **Storage** | Encrypted at rest |

### Data Classification

Forms can classify fields by sensitivity:
- Public
- Internal
- Confidential
- Restricted
- Secret

### Compliance Support

- HIPAA-ready field encryption
- PCI-DSS field handling
- GDPR data retention controls
- SOC2 audit logging
- CCPA data export

### Audit Logging

All platform actions are logged:
- User actions (login, logout, API calls)
- Resource changes (create, update, delete)
- Access events (form views, submissions)
- Admin actions (permission changes, billing)

---

## Pricing & Limits

### Subscription Tiers

| Feature | Free | Pro | Team | Enterprise |
|---------|------|-----|------|------------|
| **Forms** | 3 | Unlimited | Unlimited | Unlimited |
| **Submissions/mo** | 1,000 | 1,000 | 10,000 | Unlimited |
| **Workflow Executions/mo** | 50 | 500 | 5,000 | Unlimited |
| **Active Workflows** | 1 | 5 | 25 | Unlimited |
| **Connections** | 1 | 5 | 20 | Unlimited |
| **AI Generations/mo** | 10 | 100 | 500 | Unlimited |
| **RAG Features (Cloud)** | ❌ | ❌ | ✅ | ✅ |
| **RAG Features (Self-Hosted)** | ✅ | ✅ | ✅ | ✅ |
| **Data Retention** | 30 days | 1 year | Unlimited | Unlimited |
| **Team Members** | 1 | 1 | 10 | Unlimited |
| **Support** | Community | Email | Priority | Dedicated |

### Deployment Modes

NetPad supports three deployment modes with different feature availability:

| Mode | RAG Availability | Cluster Requirement | Use Case |
|------|------------------|---------------------|----------|
| **Cloud** (`NETPAD_DEPLOYMENT_MODE=cloud`) | Team/Enterprise only | M10+ Atlas cluster | Production SaaS at netpad.io |
| **Self-Hosted** (`NETPAD_DEPLOYMENT_MODE=self-hosted`) | All tiers | Atlas Local (Docker) | Private instances, development |
| **Standalone** (`STANDALONE_MODE=true`) | User provides OpenAI key | User's MongoDB | Exported apps running independently |

**Deployment Mode Visibility (User Menu)**:
- Users can see their current deployment mode via a badge in the user dropdown menu
- "Cloud" (blue) or "Self-Hosted" (orange) badge displayed next to user info
- "Hosting & Deployment" menu item links to comprehensive help documentation
- Environment variable: `NEXT_PUBLIC_NETPAD_DEPLOYMENT_MODE` exposes mode to client components

**Self-Hosted RAG Setup**:
```bash
# Option 1: Atlas CLI
atlas deployments setup local --type local

# Option 2: Docker
docker run -d -p 27017:27017 mongodb/mongodb-atlas-local
```

**Standalone Apps**:
- Exported from Cloud/Self-Hosted NetPad
- No Platform DB - writes directly to user's MongoDB
- Conversation transcripts stored at `conversational` (root level) instead of `_formMetadata.conversational`
- User responsible for OpenAI API key and MongoDB connection

### Atlas Cluster Provisioning

- **Free Tier**: M0 cluster auto-provisioned
- **Paid Tiers**: Bring your own cluster or upgrade
- **RAG Features (Cloud)**: Require M10+ cluster for Vector Search (Team/Enterprise only)
- **RAG Features (Self-Hosted)**: Use Atlas Local (Docker) - available to all tiers

---

## Technology Stack

```
Frontend:
├── Next.js 14+ (App Router)
├── React 18+
├── Material-UI (MUI) 5
├── TypeScript
├── ReactFlow (workflow editor)
└── Socket.io (real-time)

Backend:
├── Next.js API Routes
├── MongoDB Driver 6.5+
├── MongoDB Atlas Vector Search (RAG)
├── MongoDB Client Encryption
├── Stripe SDK (billing)
├── OpenAI API (AI features, embeddings)
├── Vercel Blob (document storage)
└── Iron Session (auth)

Authentication:
├── OAuth2 (Google, GitHub)
├── Magic Link (email)
└── WebAuthn/Passkeys

Infrastructure:
├── MongoDB Atlas API
├── MongoDB Atlas Vector Search (M10+ for cloud, Atlas Local for self-hosted)
├── MongoDB Atlas Local (Docker) - self-hosted RAG support
├── Vercel (hosting/deployment)
├── Vercel Blob (files, RAG documents)
└── SendGrid / Resend (email)
```

---

## Getting Started

### For End Users

1. **Visit**: [formbuilder.mongodb.com](https://formbuilder.mongodb.com)
2. **Sign Up**: Create account (M0 cluster auto-provisioned)
3. **Create Workspace**: Name your organization
4. **Build Forms**: Use visual builder or conversational mode
5. **Automate**: Create workflows for post-submission processing
6. **Deploy**: Publish forms or deploy custom instance

### For Developers

1. **Install Packages**:
   ```bash
   npm install @netpad/forms @netpad/workflows
   ```

2. **Embed Forms**:
   ```tsx
   import { FormRenderer } from '@netpad/forms';
   <FormRenderer config={formConfig} onSubmit={handleSubmit} />
   ```

3. **Trigger Workflows**:
   ```ts
   import { createNetPadWorkflowClient } from '@netpad/workflows';
   const client = createNetPadWorkflowClient({ baseUrl, apiKey, orgId });
   await client.executeWorkflow('workflow-id', { payload: data });
   ```

4. **Use API**: Generate API key in Settings > API Keys

---

## Resources

- **GitHub**: [github.com/mongodb/netpad](https://github.com/mongodb/netpad)
- **NPM Packages**:
  - [@netpad/forms](https://www.npmjs.com/package/@netpad/forms) - React form renderer
  - [@netpad/workflows](https://www.npmjs.com/package/@netpad/workflows) - Workflow API client
  - [@netpad/cli](https://www.npmjs.com/package/@netpad/cli) - Command-line tool
  - [@netpad/mcp-server](https://www.npmjs.com/package/@netpad/mcp-server) - MCP server for AI tools
- **Examples**: `/examples/` directory in repository
- **In-App Help**: Press `Cmd/Ctrl + /` to search help topics (context-aware, 100+ topics)

---

## Implementation Status (January 2026)

### RAG Knowledge-Guided Forms - Phase 3 Complete

| Component | Status | Description |
|-----------|--------|-------------|
| Document Upload API | ✅ Complete | PDF, DOCX, TXT upload with chunking |
| Text Extraction | ✅ Complete | Multi-format text extraction |
| Embedding Generation | ✅ Complete | OpenAI text-embedding-3-small |
| Vector Storage | ✅ Complete | MongoDB Atlas Vector Search |
| Retrieval Engine | ✅ Complete | Semantic search with scoring |
| Prompt Enhancement | ✅ Complete | Context injection with citations |
| SSE Integration | ✅ Complete | Real-time RAG sources in stream |
| UI Source Citations | ✅ Complete | Expandable citation display |
| Document Management UI | ✅ Complete | Upload, list, select, delete |
| Config Editor UI | ✅ Complete | RAG toggle, retrieval settings |
| Feature Gates | ✅ Complete | Two-tier gating (subscription + cluster) |
| Integration Tests | ✅ Complete | 41 tests passing |

**Known Limitation (Cloud Mode)**: Users must upgrade Atlas cluster to M10+ separately via MongoDB Atlas Console.

**Self-Hosted Solution**: Users can run Atlas Local (Docker) to use RAG features without M10 upgrade. Set `NETPAD_DEPLOYMENT_MODE=self-hosted` in environment.

### npm Package Integration - Phase 8 In Progress

| Component | Status | Description |
|-----------|--------|-------------|
| Package Structure Utilities | ✅ Complete | Generate and validate npm package.json with NetPad metadata |
| Bundle Generation Tool | ✅ Complete | Export applications as npm-ready packages with bundle.json |
| npm Registry Client | ✅ Complete | Search, fetch metadata, download packages from npm registry |
| Package Discovery | ✅ Complete | Discover NetPad packages by keywords and scope |
| Registry Sync Service | ✅ Complete | Background sync of npm packages to marketplace database |
| Package Import API | ✅ Complete | Install packages from npm with dependency resolution |
| Install API Endpoint | ✅ Complete | POST /api/marketplace/npm/install |
| Search API Endpoint | ✅ Complete | GET /api/marketplace/npm/search |
| Sync API Endpoint | ✅ Complete | GET/POST /api/marketplace/npm/sync |
| Marketplace Source Filter | ✅ Complete | Filter applications by source (web/npm) |
| CLI Tool Foundation | ✅ Complete | @netpad/cli package published to npm (@netpad/cli@0.2.0) |
| Marketplace UI Integration | ✅ Complete | npm package display, filtering, and install in marketplace UI |

**Implementation Status**: ✅ All Steps Complete (Package Structure, Bundle Generation, Sync Service, Import API, CLI Tool, Marketplace UI Integration).

### Application Contracts & Protection - Phase 9 Complete

| Component | Status | Description |
|-----------|--------|-------------|
| Contract Definition & Storage | ✅ Complete | ApplicationContract type, database collection, CRUD operations |
| Contract Enforcement | ✅ Complete | Validation at release time, breaking change detection, version bump requirements |
| Breaking Change Detection | ✅ Complete | Deterministic contract comparison with impact levels |
| Upgrade Validation | ✅ Complete | Contract validation during application upgrades |
| Component Protection | ✅ Complete | Explicit locking of forms/workflows with editable fields |
| Contract UI & Management | ✅ Complete | Contracts tab, ContractViewer, ContractEditor, BreakingChangesDialog |
| Protection Indicators | ✅ Complete | Visual lock status in form and workflow editors |

**Implementation Status**: ✅ All Steps Complete (Contract Definition, Enforcement, Breaking Change Detection, Upgrade Validation, Component Protection, UI Components).

### Application Permissions - Phase 10 Complete

| Component | Status | Description |
|-----------|--------|-------------|
| Permission Database Schema | ✅ Complete | application_permissions collection with indexes |
| Permission Capabilities | ✅ Complete | APPLICATION_ROLE_CAPABILITIES mapping (owner, editor, analyst, viewer) |
| Permission Service | ✅ Complete | checkApplicationPermission, grantApplicationPermission, revokeApplicationPermission, etc. |
| Permission API Endpoints | ✅ Complete | GET/POST /api/applications/[id]/permissions, PATCH/DELETE /api/applications/[id]/permissions/[permId] |
| Existing API Protection | ✅ Complete | Application CRUD, releases, and management APIs protected with permissions |
| Permissions UI | ✅ Complete | PermissionsTab component with table, add dialog, role management |
| Contract Integration | ✅ Complete | Active contracts restrict editing to owners and explicit permission holders |
| Migration & Defaults | ✅ Complete | Migration script and defaultAccess field for backward compatibility |

**Implementation Status**: ✅ All Steps Complete (Database Schema, Capabilities, Service, APIs, UI, Contract Integration, Migration).

### Self-Hosted Deployment Mode - Phase 11 Complete

| Component | Status | Description |
|-----------|--------|-------------|
| Deployment Mode Detection | ✅ Complete | `NETPAD_DEPLOYMENT_MODE` environment variable (cloud/self-hosted) |
| LOCAL Cluster Tier | ✅ Complete | Added LOCAL to ClusterInstanceSize type for Atlas Local |
| Cluster Check Updates | ✅ Complete | Mode-aware tier checks, LOCAL tier support in self-hosted mode |
| Feature Gating Updates | ✅ Complete | RAG features available to all tiers in self-hosted mode |
| Billing/Features API | ✅ Complete | Returns adjusted features based on deployment mode |
| DatabaseProvisioning Type | ✅ Complete | Added 'atlas-local' provisioning option |
| Environment Documentation | ✅ Complete | .env.example updated with deployment mode instructions |

**Implementation Status**: ✅ All Steps Complete.

**Key Files Modified**:
- `src/lib/platform/clusterChecks.ts` - Deployment mode detection, tier checks
- `src/types/platform.ts` - `getTierFeaturesForDeployment()`, RAG_FEATURES constant
- `src/lib/atlas/types.ts` - LOCAL cluster tier
- `src/types/deployment.ts` - 'atlas-local' provisioning type
- `src/app/api/billing/features/route.ts` - Mode-aware feature access
- `.env.example` - Deployment mode documentation

---

## Changelog (Since Dec 2024)

### Added
- **@netpad/mcp-server v2.2.0** - Major update with validated TypeScript output and consolidated tools:
  - `get_reference` tool consolidates 6 reference tools (field types, operators, functions, validation, themes, docs)
  - `browse_templates` tool consolidates 11 template tools (forms, apps, workflows, conversational, queries)
  - Validated TypeScript output with inline types - no @netpad/* SDK imports required
  - Auto-fix for common TypeScript errors (missing semicolons, type annotations)
  - 60+ skip patterns for runtime types (fetch, React, Node.js, DOM)
  - Self-contained code runs directly with `npx tsx`
- **Template Gallery** - 25+ form templates and 11 workflow templates across multiple categories
- **Search Form Templates** - Pre-built search form templates (Customer Search, Order Search, Support Ticket Search)
- Conversational Forms with AI-powered data collection
- **Knowledge-Guided Conversational Forms (RAG)** - Document-grounded AI conversations
- **RAG Document Management** - Upload and manage knowledge base documents (PDF, DOCX, TXT)
- **Vector Search Integration** - MongoDB Atlas Vector Search for semantic document retrieval
- **Source Citations** - Traceable references in AI responses
- Template Admin system for conversational form templates
- Projects feature for environment-based organization
- **Self-Hosted Deployment Mode** - Run NetPad privately with Atlas Local for RAG features
  - `NETPAD_DEPLOYMENT_MODE` environment variable (cloud/self-hosted)
  - RAG features available to ALL subscription tiers in self-hosted mode
  - Uses MongoDB Atlas Local (Docker) for Vector Search - no M10 upgrade required
  - LOCAL cluster tier type for Atlas Local deployments
  - 'atlas-local' database provisioning option
- **Deployment Mode Visibility** - Users can see and understand their hosting configuration
  - `DeploymentModeBadge` component shows "Cloud" or "Self-Hosted" in user menu
  - "Hosting & Deployment" menu item links to comprehensive help documentation
  - `NEXT_PUBLIC_NETPAD_DEPLOYMENT_MODE` env var for client-side detection
  - New `deployment-modes` help topic explaining all three modes (Cloud, Self-Hosted, Standalone)
  - Updated `deployment-vercel` and `self-hosted-rag` help topics with cross-references
- **Standalone App Conversation Transcripts** - Full transcript storage in exported apps
  - Conversation data stored at `conversational` (root level) in standalone apps
  - Admin UI displays conversation stats, topics, and full transcript
  - Different storage path from Cloud/Self-Hosted (`_formMetadata.conversational`)
- **Applications-First Model** - Applications as first-class entities grouping forms, workflows, and connections
- **Application Releases** - Versioned snapshots with semantic versioning (X.Y.Z format)
- **Application Permissions (RBAC)** - Fine-grained access control at application level
- **Application Marketplace** - Public catalog for discovering and sharing applications
- **My Applications** - Management view for published applications (edit, unpublish, delete)
- **Admin Review Workflow** - Platform admins review and approve/reject marketplace submissions
- **Official vs Community** - Designation for NetPad-verified vs user-created applications
- **npm Package Integration** - Publish and install applications from npm registry
- **npm Registry Sync Service** - Automatic discovery and syncing of NetPad packages
- **Package Import API** - Install applications from npm with dependency resolution
- **Package Structure Utilities** - Generate and validate npm package structures
- **@netpad/cli Published** - Command-line tool available on npm (`npm install -g @netpad/cli`)
- **In-App Help System** - Context-aware help with 100+ topics, global access via `CMD+/`, and context-sensitive help buttons
  - Automatic context detection from current route/feature
  - Smart topic boosting and highlighting based on user's current page
  - Global help button in navbar for discoverability
  - ContextHelpButton and InlineHelpIcon components for feature-specific help
- Deployment platform with Vercel integration
- 15+ AI agents (optimization, compliance, translation, insights, RAG)
- Smart dropdowns with distinct value population
- Form lifecycle modes (create, edit, view, clone, search)
- Enhanced form theming and branding
- Connection vault with encrypted credential storage
- Comprehensive audit logging
- Feature gates with two-tier access control (subscription + cluster tier)
- 80+ new API endpoints (including RAG, Applications, and npm integration endpoints)

### Enhanced
- Workflow engine with additional node types
- Form builder with new field types
- Response analytics with deeper insights
- Organization management with projects
- Billing system with seat-based pricing
- RBAC with granular permissions

### In Progress
- End-to-end RAG testing with production documents

### Resolved
- **RAG pricing abstraction strategy** - Resolved via self-hosted deployment mode
  - Self-hosted users can now use Atlas Local (Docker) for RAG without M10 upgrade
  - Cloud users still require Team/Enterprise + M10 for production SLA

---

*Last Updated: January 22, 2026*
*Version: 4.10.0*
