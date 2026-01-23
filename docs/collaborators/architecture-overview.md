# Architecture Overview

This document provides a technical overview of NetPad's architecture, key patterns, and where things live in the codebase.

## High-Level Architecture

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
│  │ • 30+ Fields  │  │ • 25+ Nodes   │  │   Vault       │  │ • 15+    │ │
│  │ • Converstnl  │  │ • Triggers    │  │ • Import/     │  │   Agents │ │
│  │ • Analytics   │  │ • Execution   │  │   Export      │  │ • RAG    │ │
│  │               │  │   Engine      │  │               │  │          │ │
│  └───────────────┘  └───────────────┘  └───────────────┘  └──────────┘ │
│          │                  │                  │                │       │
│          └──────────────────┴──────────────────┴────────────────┘       │
│                                      │                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                    Platform Services                                 ││
│  │  Organizations │ Projects │ Auth │ Billing │ Permissions │ API      ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                      │                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │                     MongoDB Integration                              ││
│  │              Atlas • Self-hosted • Atlas Data API                    ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## The Four Pillars

NetPad is built around four core capabilities:

### 1. Forms

The form system is the heart of NetPad—a visual builder for creating MongoDB-connected data collection interfaces.

**Key components:**
- `src/lib/forms/` - Form engine, validation, conditional logic
- `src/components/FormBuilder/` - Visual editor components
- `src/components/FormRenderer/` - Runtime form rendering
- `packages/forms/` - Embeddable `@netpad/forms` package

**Form types:**
- Data Entry - Traditional CRUD forms
- Search - Query interfaces with smart operators
- Conversational - AI-powered natural language collection

### 2. Workflows

Visual workflow automation built on ReactFlow.

**Key components:**
- `src/lib/workflows/` - Workflow engine, execution
- `src/components/WorkflowEditor/` - ReactFlow-based visual editor
- `packages/workflows/` - `@netpad/workflows` API client

**Execution model:**
- Queue-based async execution
- Retry with exponential backoff
- Node-level and workflow-level timeouts

### 3. Data Management

Direct MongoDB integration with visual tools.

**Key components:**
- `src/lib/mongodb/` - MongoDB client, connection management
- `src/components/DataBrowser/` - Collection browser UI
- `src/lib/platform/connectionVault.ts` - Encrypted credential storage

### 4. AI & Conversational

AI-powered features including conversational forms and RAG.

**Key components:**
- `src/lib/ai/` - LLM integration, agents
- `src/lib/rag/` - Document processing, vector search
- `src/components/ConversationalForm/` - Chat-based form UI

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
├── MongoDB Atlas Vector Search
├── OpenAI API (AI features)
└── Iron Session (auth)

Infrastructure:
├── MongoDB Atlas
├── Vercel (hosting)
├── Vercel Blob (file storage)
└── SendGrid / Resend (email)
```

---

## Key Directories

```
src/
├── app/                     # Next.js App Router
│   ├── api/                 # API routes (165+ endpoints)
│   ├── (auth)/              # Auth pages
│   ├── (dashboard)/         # Main app pages
│   └── (public)/            # Public form pages
│
├── components/              # React components
│   ├── FormBuilder/         # Form editor
│   ├── FormRenderer/        # Form display
│   ├── WorkflowEditor/      # Workflow editor
│   ├── DataBrowser/         # Data explorer
│   └── ui/                  # Shared UI components
│
├── lib/                     # Core libraries
│   ├── forms/               # Form engine
│   ├── workflows/           # Workflow engine
│   ├── ai/                  # AI/LLM services
│   ├── rag/                 # RAG pipeline
│   ├── mongodb/             # Database layer
│   └── platform/            # Platform services
│
└── types/                   # TypeScript types
    ├── forms.ts
    ├── workflows.ts
    └── platform.ts
```

---

## Critical Patterns

### 1. Client/Server Boundary

Next.js App Router enforces a clear separation:

```tsx
// Server Component (default)
async function ServerComponent() {
  const data = await db.collection('forms').find().toArray();
  return <ClientComponent data={data} />;
}

// Client Component
'use client';
function ClientComponent({ data }) {
  const [state, setState] = useState(data);
  // Interactive logic here
}
```

**Rule:** Database operations happen in Server Components or API routes. Never import MongoDB client in client components.

### 2. Centralized LLM Service

All AI operations go through a single service:

```typescript
// src/lib/ai/llm.ts
export async function generateWithLLM(prompt: string, options: LLMOptions) {
  // Centralized: rate limiting, caching, error handling
}
```

**Why:** Consistent error handling, usage tracking, easy provider swapping.

### 3. Batch Operations Pattern

For bulk updates, we use MongoDB bulk operations:

```typescript
const bulkOps = items.map(item => ({
  updateOne: {
    filter: { _id: item._id },
    update: { $set: { status: 'processed' } }
  }
}));

await collection.bulkWrite(bulkOps);
```

**Why:** Reduces round trips, improves performance.

### 4. Feature Gating

Two-tier access control for features:

```typescript
// src/types/platform.ts
function checkFeatureAccess(feature: string, org: Organization) {
  // Tier 1: Subscription level (Free, Pro, Team, Enterprise)
  // Tier 2: Infrastructure requirements (e.g., M10+ for Vector Search)
}
```

### 5. Deployment Mode Awareness

The platform adapts based on deployment mode:

```typescript
// Environment variable
NETPAD_DEPLOYMENT_MODE=cloud | self-hosted | standalone

// Runtime check
const mode = getDeploymentMode();
if (mode === 'self-hosted') {
  // RAG available to all tiers with Atlas Local
}
```

---

## Database Schema Overview

### Core Collections

| Collection | Purpose |
|------------|---------|
| `organizations` | Multi-tenant orgs with members |
| `applications` | Application bundles |
| `forms` | Form definitions and schemas |
| `workflows` | Workflow definitions |
| `form_submissions` | Form response data |
| `workflow_executions` | Execution history and logs |
| `connections` | Encrypted MongoDB credentials |
| `application_permissions` | RBAC for applications |

### Key Relationships

```
Organization
├── Members (embedded)
├── Projects
│   └── Applications
│       ├── Forms
│       ├── Workflows
│       └── Connections
└── Connection Vault
```

---

## API Structure

The API is organized by domain:

| Path | Domain | Endpoints |
|------|--------|-----------|
| `/api/forms` | Forms | CRUD, submissions, analytics |
| `/api/workflows` | Workflows | CRUD, execution, triggers |
| `/api/applications` | Apps | CRUD, releases, permissions |
| `/api/organizations` | Platform | Members, settings, vault |
| `/api/marketplace` | Marketplace | Browse, publish, install |
| `/api/ai` | AI | Agents, generation |
| `/api/rag` | RAG | Documents, retrieval |

All API routes follow a consistent pattern:

```typescript
// src/app/api/forms/route.ts
export async function GET(request: Request) {
  // 1. Auth check
  // 2. Permission check
  // 3. Business logic
  // 4. Response
}
```

---

## Next Steps

- [Getting Started](./getting-started.md) - Set up your environment
- [Current Priorities](./current-priorities.md) - See active work
- [Contribution Guide](./contribution-guide.md) - Learn our PR process
