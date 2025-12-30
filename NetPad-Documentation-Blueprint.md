# NetPad Documentation Specification

**Purpose**: This document provides comprehensive details about NetPad's capabilities, architecture, and features sufficient for a documentation engineer to rebuild the NetPad documentation site in Docusaurus, replacing the existing outdated documentation.

**Last Updated**: December 2024  
**Version**: 3.1.0

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Core Features](#core-features)
3. [Technical Architecture](#technical-architecture)
4. [API Reference](#api-reference)
5. [User Flows & Workflows](#user-flows--workflows)
6. [Configuration & Setup](#configuration--setup)
7. [Security Features](#security-features)
8. [Integration Points](#integration-points)
9. [Deployment Guide](#deployment-guide)
10. [Development Guide](#development-guide)

---

## System Overview

### What is NetPad?

**NetPad** is a comprehensive, open-source platform for creating MongoDB-connected data entry forms, workflows, search interfaces, and data management applications—all without writing code.

### Core Value Propositions

1. **Zero to Production in Minutes**
   - Import MongoDB collection schema with one click
   - Auto-generate forms based on field types
   - Publish to shareable URL instantly
   - No backend development required

2. **Your Data, Your Control**
   - Connect to any MongoDB instance (Atlas, self-hosted, or cloud)
   - Automatic M0 cluster provisioning for new users
   - Export data anytime (JSON, CSV)
   - Full data ownership and portability

3. **Enterprise-Ready Security**
   - Field-level encryption with MongoDB Queryable Encryption
   - Secure connection vault with encrypted credentials
   - Role-based access control
   - Bot protection with Turnstile CAPTCHA
   - Audit logging and compliance features

4. **AI-Powered Productivity**
   - Generate complete forms from natural language descriptions
   - Auto-suggest validation rules and conditional logic
   - Smart formula assistance for computed fields
   - In-app AI assistant for guidance

### Three Core Pillars

NetPad is built around three main capabilities:

1. **Forms** - Collect data with visual form builder
2. **Workflows** - Automate processes with visual workflow editor
3. **Data Explorer** - Browse and manage MongoDB collections visually

---

## Core Features

### 1. Form Builder

#### Visual Form Designer
- **WYSIWYG Editor**: Drag-and-drop interface with live preview
- **Real-time Preview**: See form as users will see it while building
- **Multi-page Forms**: Step-based progression with progress tracking
- **Keyboard Shortcuts**: Power user productivity features
- **Version History**: Track changes and revert to previous versions
- **Draft Auto-Save**: Never lose work with automatic saving

#### Field Types (30+)
- **Text Input**: Single-line text, multi-line textarea
- **Number**: Integer, decimal, currency, percentage
- **Date & Time**: Date picker, time picker, datetime picker
- **Choice Fields**: 
  - Single choice (radio buttons, dropdown)
  - Multiple choice (checkboxes, multi-select)
  - Rating scale (1-5 stars, 1-10 scale)
  - NPS (Net Promoter Score)
  - Matrix (rows × columns grid)
- **File Upload**: Single file, multiple files, with file type restrictions
- **Signature**: Digital signature capture
- **Lookup Fields**: Reference data from related collections with autocomplete
- **Computed Fields**: Formula-based calculations with field references
- **Nested Objects**: Support for complex document structures
- **Array Fields**: Dynamic lists with add/remove functionality
- **Layout Fields**: Section dividers, page breaks, HTML content

#### Form Features
- **Schema Import**: Auto-generate forms from MongoDB collection schema
- **Conditional Logic**: Show/hide fields based on user input
- **Validation Rules**: 
  - Required fields
  - Min/max length
  - Pattern matching (regex)
  - Custom validation expressions
  - Field-level error messages
- **Form Theming**: Customizable colors, backgrounds, and branding
- **Access Control**: 
  - Public forms (anyone with URL)
  - Authenticated forms (must sign in)
  - Restricted forms (domain/user whitelist)
- **Bot Protection**: Turnstile CAPTCHA integration
- **Webhooks**: POST form data to external services on submission
- **URL Pre-fill**: Auto-populate forms with query parameters
- **Custom Redirects**: Post-submit redirect with data passthrough
- **Embeddable Forms**: Generate embed code for websites

#### Form Lifecycle
- **Draft Mode**: Work in progress, not accessible publicly
- **Published Mode**: Live and accessible via shareable URL
- **Versioning**: Track all changes with ability to revert
- **Analytics**: View submission trends, field-level insights, completion rates

### 2. Workflow Engine

#### Visual Workflow Builder
- **Drag-and-Drop Canvas**: ReactFlow-based visual editor
- **Node Library**: Pre-built nodes for common operations
- **Connection Mapping**: Visual data flow between nodes
- **Execution Monitoring**: Real-time status tracking
- **Execution History**: View past workflow runs with logs

#### Node Types

**Triggers**:
- **Form Trigger**: Start workflow when form is submitted
- **Webhook Trigger**: Start workflow via HTTP POST
- **Schedule Trigger**: Run workflow on cron schedule
- **Manual Trigger**: Start workflow manually from UI
- **API Trigger**: Start workflow via API call

**Logic Nodes**:
- **Conditional (If/Else)**: Route workflow based on conditions
- **Switch**: Multi-branch routing
- **Loop**: Iterate over arrays
- **Delay**: Wait for specified duration
- **Merge**: Combine multiple branches

**Data Nodes**:
- **Transform**: Modify data structure
- **Filter**: Remove items based on conditions
- **Aggregate**: Group and summarize data
- **Split**: Divide data into multiple outputs
- **Set Variable**: Store values for later use

**Integration Nodes**:
- **HTTP Request**: Make API calls to external services
- **MongoDB Query**: Read from MongoDB collections
- **MongoDB Write**: Insert/update/delete documents
- **Email Send**: Send emails via SMTP or email service
- **Form Prefill**: Generate pre-filled form URLs

**AI Nodes**:
- **AI Prompt**: Generate text using AI
- **AI Classify**: Categorize data with AI
- **AI Extract**: Extract structured data from text

#### Workflow Features
- **Variable Management**: Define and use variables across workflow
- **Error Handling**: Configure retry policies and error recovery
- **Execution Modes**: Sequential, parallel, or auto-detect
- **Timeout Configuration**: Set max execution time per workflow/node
- **Conditional Execution**: Skip nodes based on conditions
- **Data Mapping**: Map outputs from one node to inputs of another
- **Workflow Templates**: Pre-built workflows for common use cases

### 3. Data Explorer

#### Visual Data Browser
- **Collection Browser**: Navigate MongoDB collections visually
- **Document Viewer**: View documents in multiple formats:
  - Table view (spreadsheet-like)
  - Card view (formatted cards)
  - JSON view (raw document structure)
- **Search Interface**: 
  - Full-text search
  - Field-specific filters
  - Advanced query builder
- **Document Editor**: Edit documents with schema-aware editor
- **Bulk Operations**: Select and modify multiple documents

#### Data Management
- **Import Wizard**: Upload CSV/XLSX files with smart column mapping
- **Export Options**: Download data as JSON or CSV
- **Schema Inference**: Automatically detect document structure
- **Sample Data**: Load pre-built datasets for testing
- **Collection Management**: Create, rename, delete collections

### 4. Platform Features

#### Authentication
- **Magic Link**: Passwordless email authentication
- **Passkey Support**: WebAuthn/FIDO2 biometric login
- **OAuth Integration**: Google, GitHub, and more
- **Session Management**: Secure session handling with iron-session

#### Organization Management
- **Multi-Tenant**: Organizations with isolated data
- **Team Members**: Invite and manage team members
- **Role-Based Access Control**: 
  - Organization roles: Owner, Admin, Member, Viewer
  - Form roles: Owner, Editor, Analyst, Viewer
  - Connection roles: Owner, Admin, User
- **Organization Settings**: Configure defaults and limits

#### Connection Vault
- **Secure Storage**: Encrypted MongoDB connection strings
- **Connection Management**: Save, test, and manage connections
- **Permission Control**: Share connections with team members
- **Usage Tracking**: Monitor connection usage and health

#### Atlas Integration
- **Auto-Provisioning**: Automatic M0 cluster setup for new users
- **Cluster Management**: Monitor and manage provisioned clusters
- **Database User Management**: Create and manage database users
- **Connection Testing**: Validate connections before use

#### Analytics & Reporting
- **Form Analytics**: 
  - Submission trends over time
  - Field-level completion rates
  - Drop-off analysis
  - Response distribution charts
- **Workflow Analytics**:
  - Execution success rates
  - Average execution time
  - Node-level performance metrics
- **Real-time Counters**: Live submission counts

#### Billing & Subscriptions
- **Stripe Integration**: Subscription management
- **Usage Tracking**: Monitor API calls, submissions, storage
- **Feature Gates**: Limit features based on plan
- **Billing Portal**: Manage subscription and payment methods

---

## Technical Architecture

### Technology Stack

**Frontend**:
- Next.js 14 (App Router)
- React 18
- Material-UI (MUI) 5
- TypeScript
- ReactFlow (for workflow editor)
- Recharts (for analytics)

**Backend**:
- Next.js API Routes
- MongoDB Driver 6.5
- MongoDB Client Encryption
- Stripe SDK
- OpenAI API

**Authentication**:
- Iron Session
- SimpleWebAuthn
- OAuth providers (Google, GitHub)

**Infrastructure**:
- MongoDB Atlas API
- Digest Authentication
- AWS S3 (file storage via Vercel Blob)

### Database Architecture

#### Multi-Tenant Database Model

```
Platform Database (form_builder_platform)
├── users                    # Platform users
├── organizations            # Organization definitions
├── oauth_states            # OAuth flow state
├── rate_limits             # Rate limiting tracking
├── platform_audit          # System audit logs
└── magic_links             # Magic link tokens

Organization Databases (org_{orgId})
├── connection_vault        # Encrypted connection strings
├── forms                   # Form definitions
├── form_submissions        # Form response data
├── workflows               # Workflow definitions
├── workflow_executions     # Workflow execution records
├── workflow_execution_logs # Detailed execution logs
└── org_audit_logs          # Organization audit logs
```

#### Key Collections

**forms**:
```typescript
{
  _id: ObjectId,
  formId: string,
  orgId: string,
  name: string,
  fields: FieldDefinition[],
  settings: FormSettings,
  dataSource: {
    vaultId: string,
    collection: string
  },
  accessControl: AccessControlConfig,
  published: boolean,
  publishedUrl?: string,
  version: number,
  createdAt: Date,
  updatedAt: Date
}
```

**form_submissions**:
```typescript
{
  _id: ObjectId,
  submissionId: string,
  formId: string,
  formVersion: number,
  data: Record<string, any>,
  respondent?: {
    userId?: string,
    email?: string,
    authMethod?: string
  },
  metadata: {
    ipAddress: string,
    userAgent: string,
    referrer?: string
  },
  syncStatus: 'pending' | 'synced' | 'failed',
  syncAttempts: number,
  syncedAt?: Date,
  submittedAt: Date
}
```

**workflows**:
```typescript
{
  _id: ObjectId,
  workflowId: string,
  orgId: string,
  name: string,
  canvas: {
    nodes: WorkflowNode[],
    edges: WorkflowEdge[],
    viewport: { x: number, y: number, zoom: number }
  },
  settings: {
    executionMode: 'sequential' | 'parallel' | 'auto',
    maxExecutionTime: number,
    retryPolicy: RetryPolicy,
    errorHandling: 'stop' | 'continue' | 'rollback'
  },
  variables: WorkflowVariable[],
  status: 'draft' | 'active' | 'paused' | 'archived',
  version: number,
  createdAt: Date,
  updatedAt: Date
}
```

### Encryption Architecture

**Connection Vault Encryption**:
- AES-256-GCM encryption for connection strings
- Encryption key stored in environment variable (VAULT_ENCRYPTION_KEY)
- Future: Cloud KMS integration (AWS KMS, Azure Key Vault, GCP Cloud KMS)
- Keys never stored in database, only encrypted blobs

**Field-Level Encryption**:
- MongoDB Queryable Encryption support
- Per-field encryption configuration
- Automatic encryption/decryption on read/write

### State Management

- **Zustand**: Global state management for workflows
- **React Context**: Organization context, auth context
- **React Query**: Server state and caching (if used)
- **Local Storage**: Draft auto-save, user preferences

### File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Auth pages
│   ├── builder/           # Form builder page
│   ├── workflows/         # Workflow pages
│   ├── data/              # Data explorer pages
│   └── forms/             # Form pages
├── components/             # React components
│   ├── FormBuilder/       # Form builder components
│   ├── WorkflowEditor/    # Workflow editor components
│   ├── DataBrowser/       # Data browser components
│   └── ...
├── lib/                    # Business logic
│   ├── ai/                # AI integration
│   ├── platform/          # Platform services
│   ├── workflow/          # Workflow execution
│   └── ...
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
└── contexts/               # React contexts
```

---

## API Reference

### Authentication Endpoints

#### `GET /api/auth/session`
Get current session information.

**Response**:
```json
{
  "user": {
    "userId": "user_123",
    "email": "user@example.com",
    "organizations": [...]
  }
}
```

#### `POST /api/auth/magic-link/send`
Send magic link email.

**Request**:
```json
{
  "email": "user@example.com"
}
```

#### `POST /api/auth/magic-link/verify`
Verify magic link token.

**Request**:
```json
{
  "token": "magic_link_token"
}
```

#### `GET /api/auth/oauth/[provider]`
Initiate OAuth flow (Google, GitHub).

#### `GET /api/auth/oauth/callback/[provider]`
OAuth callback handler.

#### `POST /api/auth/passkey/register-options`
Get passkey registration options.

#### `POST /api/auth/passkey/register`
Complete passkey registration.

#### `POST /api/auth/passkey/login-options`
Get passkey login options.

#### `POST /api/auth/passkey/login`
Complete passkey login.

### Form Endpoints

#### `GET /api/forms/list`
List all forms for current organization.

**Query Parameters**:
- `orgId`: Organization ID (required)

**Response**:
```json
{
  "forms": [
    {
      "formId": "form_123",
      "name": "Contact Form",
      "published": true,
      "submissionCount": 42,
      "updatedAt": "2024-01-15T10:00:00Z"
    }
  ]
}
```

#### `POST /api/forms`
Create a new form.

**Request**:
```json
{
  "name": "My Form",
  "fields": [...],
  "orgId": "org_123"
}
```

#### `GET /api/forms/[formId]`
Get form definition.

**Response**:
```json
{
  "formId": "form_123",
  "name": "My Form",
  "fields": [...],
  "settings": {...},
  "published": true
}
```

#### `PATCH /api/forms/[formId]`
Update form definition.

#### `DELETE /api/forms/[formId]`
Delete form.

#### `POST /api/forms/[formId]/submit`
Submit form data (public endpoint).

**Request**:
```json
{
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response**:
```json
{
  "success": true,
  "submissionId": "sub_123"
}
```

#### `GET /api/forms/[formId]/responses`
Get form submissions.

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 50)
- `sortBy`: Sort field (default: "submittedAt")
- `sortOrder`: "asc" | "desc" (default: "desc")

#### `GET /api/forms/[formId]/analytics`
Get form analytics.

**Response**:
```json
{
  "totalSubmissions": 150,
  "submissionsByDate": [...],
  "fieldAnalytics": {
    "field_1": {
      "completionRate": 0.95,
      "averageTime": 2.5
    }
  }
}
```

#### `POST /api/forms/[formId]/export`
Export form data.

**Query Parameters**:
- `format`: "json" | "csv" (default: "json")

### Workflow Endpoints

#### `GET /api/workflows`
List all workflows for organization.

#### `POST /api/workflows`
Create new workflow.

#### `GET /api/workflows/[workflowId]`
Get workflow definition.

#### `PATCH /api/workflows/[workflowId]`
Update workflow.

#### `DELETE /api/workflows/[workflowId]`
Delete workflow.

#### `POST /api/workflows/[workflowId]/execute`
Manually trigger workflow execution.

**Request**:
```json
{
  "input": {
    "data": {...}
  }
}
```

#### `GET /api/workflows/[workflowId]/executions`
Get workflow execution history.

#### `GET /api/executions/[executionId]`
Get execution status and details.

**Response**:
```json
{
  "executionId": "exec_123",
  "status": "completed",
  "startedAt": "2024-01-15T10:00:00Z",
  "completedAt": "2024-01-15T10:00:02Z",
  "currentNodeId": null,
  "completedNodes": ["node_1", "node_2"],
  "context": {
    "nodeOutputs": {...}
  }
}
```

### Connection Vault Endpoints

#### `GET /api/organizations/[orgId]/vault`
List connection vault entries.

#### `POST /api/organizations/[orgId]/vault`
Create new vault entry.

**Request**:
```json
{
  "name": "Production Database",
  "connectionString": "mongodb+srv://...",
  "database": "myapp",
  "allowedCollections": ["users", "orders"]
}
```

#### `GET /api/organizations/[orgId]/vault/[vaultId]`
Get vault entry (decrypted connection string).

#### `POST /api/organizations/[orgId]/vault/[vaultId]/test`
Test connection.

#### `POST /api/organizations/[orgId]/vault/[vaultId]/decrypt`
Get decrypted connection string (requires permissions).

### MongoDB Endpoints

#### `POST /api/mongodb/test-connection`
Test MongoDB connection.

**Request**:
```json
{
  "connectionString": "mongodb+srv://...",
  "database": "mydb"
}
```

#### `GET /api/mongodb/collections`
List collections in database.

#### `GET /api/mongodb/schema`
Get collection schema.

**Query Parameters**:
- `connectionString`: Encrypted connection string
- `database`: Database name
- `collection`: Collection name

#### `POST /api/mongodb/query`
Execute MongoDB query.

#### `POST /api/mongodb/insert-document`
Insert document into collection.

#### `POST /api/mongodb/update-document`
Update document.

#### `GET /api/mongodb/sample-documents`
Get sample documents from collection.

### AI Endpoints

#### `POST /api/ai/generate-form`
Generate form from natural language description.

**Request**:
```json
{
  "description": "A contact form with name, email, and message fields"
}
```

#### `POST /api/ai/generate-workflow`
Generate workflow from description.

#### `POST /api/ai/generate-validation`
Suggest validation rules for fields.

#### `POST /api/ai/generate-conditional-logic`
Generate conditional logic rules.

#### `POST /api/ai/generate-formula`
Generate computed field formula.

#### `POST /api/ai/chat`
Chat with AI assistant.

### Organization Endpoints

#### `GET /api/organizations`
List user's organizations.

#### `POST /api/organizations`
Create new organization.

#### `GET /api/organizations/[orgId]`
Get organization details.

#### `PATCH /api/organizations/[orgId]`
Update organization.

#### `GET /api/organizations/[orgId]/cluster`
Get Atlas cluster information.

#### `POST /api/organizations/[orgId]/cluster`
Provision new Atlas cluster.

### Data Import/Export Endpoints

#### `POST /api/data-import`
Start data import process.

**Request**: FormData with file

#### `GET /api/data-import/[importId]`
Get import status.

#### `POST /api/data-import/[importId]/analyze`
Analyze uploaded file.

#### `POST /api/data-import/[importId]/configure`
Configure import mapping.

#### `POST /api/data-import/[importId]/execute`
Execute import.

#### `POST /api/data-export`
Export data.

**Query Parameters**:
- `format`: "json" | "csv"
- `collection`: Collection name
- `filters`: JSON string of filters

---

## User Flows & Workflows

### Creating a Form

1. **Navigate to Builder**: Go to `/builder`
2. **Create New Form**: Click "New Form" button
3. **Connect MongoDB**: 
   - Enter connection string OR
   - Select from saved connections OR
   - Use auto-provisioned Atlas cluster
4. **Import Schema** (Optional): Click "Import from Collection" to auto-generate fields
5. **Add Fields**: 
   - Drag fields from sidebar
   - Configure field properties
   - Set validation rules
6. **Configure Form**:
   - Set form name and description
   - Configure access control
   - Set up webhooks
   - Customize theme
7. **Test Form**: Use preview mode to test
8. **Publish**: Click "Publish" to get shareable URL

### Creating a Workflow

1. **Navigate to Workflows**: Go to `/workflows`
2. **Create New Workflow**: Click "New Workflow"
3. **Add Trigger Node**: 
   - Drag trigger node (e.g., Form Trigger)
   - Configure trigger settings
4. **Add Processing Nodes**:
   - Drag logic/data nodes
   - Connect nodes with edges
   - Configure node settings
5. **Configure Data Flow**:
   - Map outputs to inputs
   - Set up variables
6. **Test Workflow**: Use test execution
7. **Activate**: Set workflow status to "active"

### Submitting a Form

1. **Access Form**: User visits published form URL
2. **Authentication** (if required): Sign in if form requires authentication
3. **Fill Form**: Complete all required fields
4. **Validation**: Real-time validation as user types
5. **Submit**: Click submit button
6. **Processing**:
   - Data saved to platform database
   - Data synced to target MongoDB collection
   - Workflows triggered (if configured)
   - Webhooks called (if configured)
7. **Confirmation**: User sees success message or redirect

### Data Import Flow

1. **Navigate to Data Import**: Go to `/data/import`
2. **Upload File**: Select CSV or XLSX file
3. **Analyze**: System analyzes file structure
4. **Map Columns**: Map file columns to MongoDB fields
5. **Configure**: Set target collection and options
6. **Preview**: Review mapped data
7. **Execute**: Run import process
8. **Monitor**: Track import progress
9. **Complete**: Review imported data

---

## Configuration & Setup

### Environment Variables

```bash
# Database
MONGODB_URI=mongodb+srv://...
MONGODB_DATABASE=form_builder_platform

# Encryption
SESSION_SECRET=your-32-character-secret
VAULT_ENCRYPTION_KEY=base64-encoded-32-byte-key

# OAuth
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...

# Email (Magic Links)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
FROM_EMAIL=noreply@yourdomain.com

# WebAuthn
WEBAUTHN_RP_ID=yourdomain.com
WEBAUTHN_RP_NAME=NetPad

# Application
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NODE_ENV=production

# AI (Optional)
OPENAI_API_KEY=...

# Stripe (Optional)
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...

# Vercel Blob (File Storage)
BLOB_READ_WRITE_TOKEN=...
```

### Initial Setup

1. **Clone Repository**:
   ```bash
   git clone https://github.com/mrlynn/netpad-v3
   cd netpad-3
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Generate Encryption Keys**:
   ```bash
   # Generate SESSION_SECRET
   openssl rand -base64 32
   
   # Generate VAULT_ENCRYPTION_KEY
   openssl rand -base64 32
   ```

5. **Run Development Server**:
   ```bash
   npm run dev
   ```

6. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

### MongoDB Setup

1. **Platform Database**: Create database `form_builder_platform`
2. **Organization Databases**: Created automatically as `org_{orgId}`
3. **Indexes**: System creates required indexes automatically
4. **Atlas Provisioning**: Requires MongoDB Atlas API credentials

### Deployment

**Vercel** (Recommended):
1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically on push

**Self-Hosted**:
1. Build application: `npm run build`
2. Set environment variables
3. Run: `npm start`
4. Configure reverse proxy (nginx, etc.)

---

## Security Features

### Authentication Security

- **Magic Links**: Time-limited, single-use tokens
- **Passkeys**: WebAuthn/FIDO2 with biometric authentication
- **OAuth**: Secure OAuth 2.0 flows with state validation
- **Session Management**: HTTP-only, secure cookies with encryption

### Data Security

- **Connection Vault**: AES-256-GCM encryption for connection strings
- **Field-Level Encryption**: MongoDB Queryable Encryption support
- **HTTPS Only**: All connections encrypted in transit
- **Secure Cookies**: HTTP-only, secure, SameSite protection

### Access Control

- **Role-Based Access Control**: Granular permissions at org/form/connection level
- **Form Access Control**: Public, authenticated, or restricted forms
- **IP Whitelisting**: (Future feature)
- **Domain Restrictions**: Restrict forms to specific domains

### Rate Limiting

- **Public Forms**: 10 submissions/hour per IP
- **Authenticated Forms**: 50 submissions/hour per user
- **API Requests**: 1000 requests/hour per user
- **Magic Links**: 5 requests/hour per email

### Bot Protection

- **Turnstile CAPTCHA**: Cloudflare Turnstile integration
- **Configurable**: Enable/disable per form
- **Invisible Mode**: Optional invisible verification

### Audit Logging

- **Platform Audit**: System-wide events
- **Organization Audit**: Org-specific events
- **Form Audit**: Form access and modification tracking
- **Workflow Audit**: Execution and error logging

---

## Integration Points

### Webhooks

**Form Submission Webhook**:
```json
{
  "event": "form.submitted",
  "formId": "form_123",
  "submissionId": "sub_456",
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "metadata": {
    "submittedAt": "2024-01-15T10:00:00Z",
    "ipAddress": "192.168.1.1"
  }
}
```

**Workflow Execution Webhook**:
```json
{
  "event": "workflow.completed",
  "workflowId": "wf_123",
  "executionId": "exec_456",
  "status": "completed",
  "output": {...}
}
```

### REST API

All API endpoints support:
- **Authentication**: Session cookie or API key (future)
- **JSON**: Request/response in JSON format
- **Error Handling**: Standard HTTP status codes
- **Rate Limiting**: Per-user and per-IP limits

### MongoDB Integration

- **Direct Connection**: Connect to any MongoDB instance
- **Atlas Integration**: Auto-provision clusters
- **Schema Inference**: Auto-detect collection structure
- **Query Builder**: Visual query construction

### Email Integration

- **SMTP**: Standard SMTP support
- **Email Services**: SendGrid, SES, Postmark, Resend (via workflow nodes)
- **Templates**: Template variable substitution

### AI Integration

- **OpenAI**: GPT-4 for form/workflow generation
- **Completion Hints**: Field value suggestions
- **Formula Assistance**: Help with computed fields
- **Validation Suggestions**: Auto-suggest validation rules

---

## Deployment Guide

### Vercel Deployment

1. **Connect Repository**: Link GitHub repo to Vercel
2. **Configure Environment Variables**: Add all required env vars
3. **Build Settings**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Deploy**: Automatic deployment on push to main

### Self-Hosted Deployment

1. **Server Requirements**:
   - Node.js 18+
   - MongoDB connection
   - 512MB+ RAM
   - HTTPS certificate

2. **Build Application**:
   ```bash
   npm install
   npm run build
   ```

3. **Run Application**:
   ```bash
   npm start
   ```

4. **Process Manager** (PM2):
   ```bash
   pm2 start npm --name "netpad" -- start
   ```

5. **Reverse Proxy** (nginx):
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

### Docker Deployment (Future)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Development Guide

### Project Structure

```
netpad-3/
├── src/
│   ├── app/              # Next.js pages and API routes
│   ├── components/        # React components
│   ├── lib/              # Business logic
│   ├── hooks/            # Custom hooks
│   ├── types/            # TypeScript types
│   └── contexts/         # React contexts
├── public/               # Static assets
├── tests/                # Test files
├── scripts/              # Utility scripts
└── docs/                 # Documentation
```

### Development Workflow

1. **Create Feature Branch**:
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make Changes**: Edit code, add features

3. **Run Tests**:
   ```bash
   npm test
   npm run test:e2e
   ```

4. **Run Linter**:
   ```bash
   npm run lint
   ```

5. **Commit Changes**:
   ```bash
   git commit -m "Add feature X"
   ```

6. **Push and Create PR**:
   ```bash
   git push origin feature/my-feature
   ```

### Testing

**Unit Tests**:
- Jest for unit testing
- Testing Library for component testing
- Location: `tests/unit/`

**Integration Tests**:
- API route testing
- Database integration
- Location: `tests/integration/`

**E2E Tests**:
- Playwright for end-to-end testing
- Location: `tests/e2e/`

**Run All Tests**:
```bash
npm test              # Unit tests
npm run test:watch    # Watch mode
npm run test:e2e      # E2E tests
npm run test:coverage # Coverage report
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js ESLint config
- **Prettier**: Code formatting (if configured)
- **Material-UI**: Preferred over Tailwind CSS
- **MongoDB Driver**: Native driver (not Mongoose)

### Adding New Features

1. **Form Field Type**:
   - Add to `src/lib/questionTypes/registry.ts`
   - Create renderer in `src/components/QuestionTypes/renderers/`
   - Add schema in `src/lib/questionTypes/schema.ts`

2. **Workflow Node**:
   - Add definition in `src/lib/workflow/nodeHandlers/`
   - Create executor in same directory
   - Register in `src/lib/workflow/nodeHandlers/registry.ts`
   - Add UI component in `src/components/WorkflowEditor/Nodes/`

3. **API Endpoint**:
   - Create route in `src/app/api/[path]/route.ts`
   - Add TypeScript types
   - Add error handling
   - Add rate limiting if needed

### Debugging

**Development Mode**:
```bash
npm run dev
# Access at http://localhost:3000
```

**Debug API Routes**:
- Use `console.log` (visible in terminal)
- Use browser DevTools for client-side
- Use MongoDB Compass for database inspection

**Common Issues**:
- **Connection Errors**: Check MONGODB_URI
- **Encryption Errors**: Verify VAULT_ENCRYPTION_KEY
- **OAuth Errors**: Check callback URLs match
- **Build Errors**: Clear `.next` folder and rebuild

---

## Additional Resources

### Key Documentation Files

- `FORM_BUILDER_PLAN.md`: Form builder feature specifications
- `WORKFLOW_PLATFORM_DESIGN.md`: Workflow engine architecture
- `docs/ARCHITECTURE-PRODUCTION.md`: Production deployment architecture
- `docs/QUERYABLE_ENCRYPTION_DESIGN.md`: Encryption implementation details
- `CONNECTIONS_STORAGE.md`: Connection vault implementation

### External Links

- **GitHub Repository**: https://github.com/mrlynn/netpad-v3
- **MongoDB Documentation**: https://docs.mongodb.com
- **Next.js Documentation**: https://nextjs.org/docs
- **Material-UI Documentation**: https://mui.com
- **ReactFlow Documentation**: https://reactflow.dev

### Support

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: (Add support email if available)

---

## Document Structure for Docusaurus

### Recommended Documentation Structure

```
docs/
├── getting-started/
│   ├── introduction.md
│   ├── installation.md
│   ├── quickstart.md
│   └── configuration.md
├── forms/
│   ├── overview.md
│   ├── building-forms.md
│   ├── field-types.md
│   ├── validation.md
│   ├── conditional-logic.md
│   ├── publishing.md
│   └── analytics.md
├── workflows/
│   ├── overview.md
│   ├── creating-workflows.md
│   ├── node-types.md
│   ├── execution.md
│   └── templates.md
├── data-explorer/
│   ├── overview.md
│   ├── browsing-data.md
│   ├── importing-data.md
│   └── exporting-data.md
├── platform/
│   ├── organizations.md
│   ├── authentication.md
│   ├── connection-vault.md
│   ├── access-control.md
│   └── billing.md
├── api/
│   ├── overview.md
│   ├── authentication.md
│   ├── forms.md
│   ├── workflows.md
│   ├── data.md
│   └── webhooks.md
├── security/
│   ├── overview.md
│   ├── encryption.md
│   ├── access-control.md
│   └── best-practices.md
├── deployment/
│   ├── overview.md
│   ├── vercel.md
│   ├── self-hosted.md
│   └── docker.md
└── development/
    ├── contributing.md
    ├── architecture.md
    ├── testing.md
    └── code-style.md
```

### Key Pages to Create

1. **Homepage**: Overview of NetPad, three pillars, quick links
2. **Getting Started**: Installation, first form, first workflow
3. **Form Builder Guide**: Complete guide to building forms
4. **Workflow Guide**: Complete guide to creating workflows
5. **API Reference**: Complete API documentation with examples
6. **Security Guide**: Security features and best practices
7. **Deployment Guide**: Step-by-step deployment instructions
8. **Tutorials**: Step-by-step tutorials for common use cases

---

**End of Documentation Specification**

This document provides comprehensive information about NetPad's capabilities, architecture, and features. A documentation engineer can use this to rebuild the NetPad documentation site in Docusaurus with complete, accurate, and up-to-date information.
