# NetPad Architecture

## Technical Overview for Engineers

---

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| **Framework** | Next.js 14+ (App Router) | Required |
| **UI Library** | React 18+ | Required |
| **Component Library** | Material-UI (MUI) 5 | **Prefer over Tailwind** |
| **Language** | TypeScript | Strict typing required |
| **Database** | MongoDB Atlas | **Only supported database** |
| **DB Driver** | MongoDB Driver 6.5+ | Minimum version |
| **Vector Search** | MongoDB Atlas Vector Search | For RAG features |
| **AI/LLM** | Centralized provider | Ollama → OpenAI → OpenRouter |
| **Workflow Editor** | ReactFlow | Visual DAG editor |

---

## Repository Structure

```
netpad-3/
├── src/                        # Main Next.js application
│   ├── app/                    # App Router pages and API routes
│   │   ├── api/               # 165+ API endpoints
│   │   ├── (dashboard)/       # Dashboard routes
│   │   └── (public)/          # Public routes
│   │
│   ├── components/            # React components
│   │   ├── FormBuilder/       # Form building UI (WYSIWYG)
│   │   ├── WorkflowEditor/    # Workflow building UI (ReactFlow)
│   │   ├── ConversationalForm/# AI chat interface
│   │   ├── DataBrowser/       # Data exploration UI
│   │   └── Navigation/        # Application-centric nav
│   │
│   ├── lib/                   # Core libraries
│   │   ├── ai/               # AI service layer, agents, RAG
│   │   ├── platform/         # Database connections (SERVER ONLY)
│   │   ├── conversational/   # Conversation state management
│   │   └── storage/          # Blob storage utilities
│   │
│   ├── hooks/                # Client-side React hooks
│   └── types/                # TypeScript definitions
│
├── packages/                  # NPM packages (@netpad/*)
│   ├── templates/            # @netpad/templates (Feb 1 launch)
│   ├── mcp-server/           # MCP tools for AI assistants
│   └── cli/                  # CLI package (active)
│
└── docs/                     # Documentation (Docusaurus)
```

---

## Core Modules

### Forms System

```
src/components/FormBuilder/     # Visual form builder
├── Canvas/                    # WYSIWYG editing surface
├── FieldPalette/             # Field type picker
├── FieldConfig/              # Field property editor
├── Preview/                  # Form preview modes
└── ConditionalLogic/         # Logic rule builder

src/lib/platform/
├── forms.ts                  # Form CRUD operations
├── submissions.ts            # Submission handling
└── validation.ts             # Server-side validation
```

**Key Concepts:**
- Forms have two modes: Traditional (field-based) and Conversational (AI chat)
- Conditional logic controls field visibility
- Computed fields calculate from other field values
- Forms are scoped to Applications

### Workflows System

```
src/components/WorkflowEditor/  # Visual workflow builder
├── Canvas/                    # ReactFlow canvas
├── NodePalette/              # Node type picker  
├── NodeConfig/               # Node property editor
└── ExecutionViewer/          # Run history display

src/lib/platform/
├── workflows.ts              # Workflow CRUD
├── execution.ts              # Execution engine
└── nodes/                    # Node type implementations
```

**Key Concepts:**
- Workflows are directed acyclic graphs (DAGs)
- Triggered by: form submission, webhook, schedule, manual
- Nodes process data and pass to next node
- Execution is async with queue management

### AI/Conversational System

```
src/lib/ai/
├── aiService.ts              # Centralized LLM operations
├── providers/               # Provider implementations
│   ├── ollama.ts
│   ├── openai.ts
│   └── openrouter.ts
├── agents/                  # AI agents
│   ├── formGenerator.ts
│   ├── fieldOptimizer.ts
│   └── complianceChecker.ts
└── rag/                    # RAG implementation
    ├── vectorStore.ts
    ├── retriever.ts
    └── embedding.ts

src/components/ConversationalForm/
├── ChatInterface/           # Chat UI
├── MessageBubble/          # Message display
├── TopicProgress/          # Progress tracker
└── DataExtraction/         # Extracted data display
```

**Key Concepts:**
- All LLM calls go through centralized `aiService`
- Provider priority: Ollama → OpenAI → OpenRouter
- RAG uses MongoDB Atlas Vector Search
- Conversational forms extract structured data from natural language

---

## Critical Architecture Rules

### 1. Client/Server Boundary

```typescript
// ❌ WRONG - Will cause build error
// In a client component:
import { db } from '@/lib/platform/db';

// ✅ CORRECT - Use API routes
// In a client component:
const response = await fetch('/api/forms');
```

**Why:** MongoDB driver uses native modules that can't run in browser.

### 2. Centralized LLM Configuration

```typescript
// ❌ WRONG - Hardcoded model
const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',  // Don't do this!
  messages: [...]
});

// ✅ CORRECT - Use centralized service
import { aiService } from '@/lib/ai/aiService';

const response = await aiService.complete({
  messages: [...],
  // Model selected automatically from provider config
});
```

**Why:** Ensures metrics tracking, respects user's provider preference (Ollama vs OpenAI).

### 3. Batch Operations for Forms

```typescript
// ❌ WRONG - Only adds last field
for (const field of fields) {
  onAddField(field);  // Triggers dialog each time
}

// ✅ CORRECT - Batch add
onAddTemplate(fields);  // Adds all at once
```

**Why:** `onAddField` opens a dialog, loop causes repeated dialogs.

### 4. MongoDB Version

```typescript
// Minimum required: MongoDB 6.5+
// Required for:
// - Atlas Vector Search
// - Latest aggregation features
// - Performance improvements
```

---

## API Structure

### Endpoint Organization

```
/api/
├── forms/                    # Form management (~40 endpoints)
│   ├── route.ts             # GET (list), POST (create)
│   ├── [formId]/
│   │   ├── route.ts         # GET, PUT, DELETE
│   │   ├── submissions/     # Submission handling
│   │   └── analytics/       # Form analytics
│   └── templates/           # Template operations
│
├── workflows/               # Workflow management (~15 endpoints)
│   ├── route.ts
│   ├── [workflowId]/
│   │   ├── route.ts
│   │   ├── execute/        # Trigger execution
│   │   └── history/        # Execution history
│   └── nodes/              # Node type definitions
│
├── organizations/          # Org management (~30 endpoints)
│   ├── route.ts
│   ├── [orgId]/
│   │   ├── members/
│   │   ├── vault/          # Connection vault
│   │   └── templates/
│   └── invitations/
│
├── applications/           # Application management (~10 endpoints)
│   ├── route.ts
│   ├── [appId]/
│   │   ├── releases/
│   │   └── export/
│   └── import/
│
├── marketplace/            # Marketplace (~12 endpoints)
│   ├── route.ts
│   ├── [appId]/
│   └── categories/
│
├── ai/                    # AI operations (~12 endpoints)
│   ├── generate/
│   ├── optimize/
│   └── agents/
│
├── rag/                   # RAG operations (~5 endpoints)
│   ├── documents/
│   └── query/
│
└── mongodb/               # Database operations (~10 endpoints)
    ├── connections/
    ├── collections/
    └── query/
```

### Authentication

- Session-based authentication
- Organization-scoped permissions
- Role-based access control (Owner, Admin, Member, Viewer)

---

## Data Models

### Core Entities

```typescript
// Organization
interface Organization {
  _id: ObjectId;
  name: string;
  slug: string;
  members: OrganizationMember[];
  settings: OrganizationSettings;
  subscription: Subscription;
  createdAt: Date;
}

// Application (groups forms + workflows)
interface Application {
  _id: ObjectId;
  organizationId: ObjectId;
  projectId: ObjectId;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
  forms: ObjectId[];
  workflows: ObjectId[];
  releases: Release[];
  createdAt: Date;
}

// Form
interface Form {
  _id: ObjectId;
  organizationId: ObjectId;
  applicationId?: ObjectId;
  name: string;
  slug: string;
  fields: FieldConfig[];
  settings: FormSettings;
  conditionalLogic?: ConditionalRule[];
  computedFields?: ComputedFieldConfig[];
  theme?: FormTheme;
  createdAt: Date;
}

// Workflow
interface Workflow {
  _id: ObjectId;
  organizationId: ObjectId;
  applicationId?: ObjectId;
  name: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  trigger: TriggerConfig;
  status: 'draft' | 'active' | 'paused';
  createdAt: Date;
}
```

### Field Configuration

```typescript
interface FieldConfig {
  type: FieldType;  // 30+ types
  path: string;     // Unique identifier
  label: string;
  required?: boolean;
  placeholder?: string;
  helpText?: string;
  defaultValue?: any;
  width?: 'full' | 'half' | 'third' | 'quarter';
  validation?: ValidationRules;
  options?: SelectOption[];  // For dropdowns, radios, etc.
  // Type-specific properties...
}

type FieldType =
  | 'short_text' | 'long_text' | 'email' | 'phone' | 'number' | 'currency' | 'url'
  | 'dropdown' | 'multi_select' | 'radio' | 'checkbox' | 'toggle'
  | 'date' | 'time' | 'datetime'
  | 'rating' | 'slider' | 'scale' | 'ranking' | 'matrix'
  | 'file_upload' | 'signature' | 'color'
  | 'address'
  | 'section' | 'divider' | 'heading' | 'html' | 'hidden'
  | 'computed';
```

---

## NPM Packages

### Current Packages

| Package | Status | Description |
|---------|--------|-------------|
| `@netpad/templates` | Extracting (Feb 1) | 100+ form/workflow templates |
| `@netpad/mcp-server` | Active | MCP tools for AI assistants |
| `@netpad/cli` | Active | Command-line interface |

### Future Packages

| Package | Status | Description |
|---------|--------|-------------|
| `@netpad/workflow-renderer` | Planned | Read-only workflow visualization |
| `@netpad/forms` | Future | Form rendering SDK |
| `@netpad/workflows` | Future | Workflow execution SDK |

### Package Architecture

```
packages/
├── templates/
│   ├── src/
│   │   ├── forms/           # Form templates by category
│   │   ├── workflows/       # Workflow templates
│   │   └── index.ts        # Exports
│   └── package.json
│
├── mcp-server/
│   ├── src/
│   │   ├── tools/          # MCP tool implementations
│   │   ├── resources/      # Resource handlers
│   │   └── index.ts
│   └── package.json
│
└── cli/
    ├── src/
    │   ├── commands/       # CLI commands
    │   └── index.ts
    └── package.json
```

---

## MCP Server (AI Integration)

The MCP server allows AI assistants (Claude, Cursor) to:
- Generate forms from natural language descriptions
- Create workflows programmatically
- Browse and use templates
- Validate configurations

### Available Tools

| Tool | Description |
|------|-------------|
| `generate_form` | Create form config from description |
| `generate_field` | Create single field config |
| `generate_conditional_logic` | Create conditional rules |
| `generate_computed_field` | Create computed field formulas |
| `browse_templates` | Search and list templates |
| `get_reference` | Get field types, operators, etc. |
| `validate_form_config` | Validate configuration |

### Usage Example

```
User: "Create a patient intake form with name, DOB, allergies, and current medications"

AI (via MCP): Calls generate_form tool with description
→ Returns complete FormConfig with appropriate field types
```

---

## Development Patterns

### Adding a New Field Type

1. Add type to `FieldType` union in `src/types/form.ts`
2. Create renderer in `src/components/FormBuilder/Fields/`
3. Add validation logic in `src/lib/platform/validation.ts`
4. Add to field palette in `src/components/FormBuilder/FieldPalette/`
5. Update MCP server field type reference

### Adding a New Workflow Node

1. Add type to `NodeType` union in `src/types/workflow.ts`
2. Create node component in `src/components/WorkflowEditor/Nodes/`
3. Implement execution logic in `src/lib/platform/nodes/`
4. Add to node palette
5. Update MCP server node reference

### Adding a New API Endpoint

1. Create route file in appropriate `src/app/api/` directory
2. Use existing auth/org middleware patterns
3. Add TypeScript types for request/response
4. Document in API reference

---

## Environment Variables

### Required

```env
# MongoDB
MONGODB_URI=mongodb+srv://...
MONGODB_DATABASE=netpad

# Auth
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

### AI Providers (at least one required)

```env
# Ollama (local, highest priority)
OLLAMA_BASE_URL=http://localhost:11434

# OpenAI
OPENAI_API_KEY=sk-...

# OpenRouter (fallback)
OPENROUTER_API_KEY=sk-or-...
```

### Optional

```env
# Storage
BLOB_STORAGE_URL=...

# Email
SMTP_HOST=...
SMTP_PORT=...

# Integrations
SLACK_WEBHOOK_URL=...
```

---

## Testing

### Backend Tests

```bash
# Run all backend tests
npm run test

# Run specific test file
npm run test -- forms.test.ts

# Current status: 25/25 tests passing
```

### E2E Tests

```bash
# Run Playwright tests
npm run test:e2e

# 22 test cases across 7 user journeys
```

### Manual QA

Structured test cases exist for:
- Form builder functionality
- Workflow editor functionality
- Conversational forms
- Template operations
- Application export/import

---

## Performance Considerations

### MongoDB Indexes

Key indexes for common queries:
```javascript
// Forms
{ organizationId: 1 }
{ organizationId: 1, applicationId: 1 }
{ slug: 1 }

// Submissions
{ formId: 1, createdAt: -1 }

// Workflows
{ organizationId: 1 }
{ trigger.type: 1 }
```

### Caching

- React Query for client-side caching
- API route caching for template data
- Vector embeddings cached in Atlas

### Bundle Size

- Tree-shaking enabled
- Dynamic imports for heavy components (ReactFlow)
- Route-based code splitting

---

## Security

### Data Protection

- Connection vault uses AES-256-GCM encryption
- Credentials never logged or exposed in responses
- Organization-scoped data isolation

### Authentication

- Session-based auth with secure cookies
- CSRF protection
- Rate limiting on API endpoints

### Input Validation

- Server-side validation on all inputs
- MongoDB query sanitization
- File upload type/size restrictions

---

## Next Steps

1. Review [04-contribution-guide.md](./04-contribution-guide.md) for setup instructions
2. Explore the codebase with this architecture in mind
3. Pick an area that interests you
4. Ask questions—the codebase is large but navigable

---

*Architecture questions? Ask Michael or open a discussion.*
