# Knowledge-Guided Conversational Forms (RAG)

Extend conversational forms with Retrieval-Augmented Generation (RAG) to ground AI responses in builder-supplied documents. The AI can answer questions using uploaded knowledge bases, guide users through complex forms, and provide accurate, traceable information.

## What is RAG?

RAG (Retrieval-Augmented Generation) enhances conversational forms by allowing the AI to reference uploaded documents when answering questions. Instead of relying solely on its training data, the AI uses your specific documents to provide accurate, context-aware answers.

## Key Features

### Document Upload

Attach knowledge base documents to your conversational forms:

- **Supported Formats**: PDF, DOCX, TXT
- **File Size Limit**: Up to 5MB per document
- **Multiple Documents**: Upload multiple documents per form
- **Automatic Processing**: Text extraction and intelligent chunking
- **Secure Storage**: Documents stored in Vercel Blob with private access

### Semantic Search

Vector search across document content:

- **MongoDB Atlas Vector Search**: Efficient semantic document retrieval
- **Multi-Provider Embeddings**: Voyage AI (recommended), Atlas AI Services, or OpenAI
- **Intelligent Chunking**: Sentence-aware chunking preserves context
- **Relevance Scoring**: Results ranked by semantic similarity
- **Analytics Tracking**: All embedding operations tracked in AI dashboard

### Embedding Provider Architecture

NetPad supports multiple embedding providers with intelligent auto-detection:

| Provider | Models | Dimensions | Use Case |
|----------|--------|------------|----------|
| **Voyage AI** | voyage-3, voyage-3-lite, voyage-code-3 | 512-1536 | MongoDB's official partner (recommended) |
| **Atlas AI Services** | voyage-3 (via Atlas) | 1024 | MongoDB-native integration |
| **OpenAI** | text-embedding-3-small, text-embedding-3-large | 1536-3072 | Fallback provider |

**Priority Order** (Auto-Detection):
1. **Atlas AI Services** - Native MongoDB integration
2. **Voyage AI Direct** - MongoDB's recommended partner
3. **OpenAI** - Fallback for existing configurations

**Key Features**:
- **Asymmetric Embeddings**: Separate optimization for documents vs queries
- **Batch Processing**: Optimized batch sizes with rate limit handling
- **Cost Estimation**: Real-time cost estimation before generation
- **Automatic Retry**: Exponential backoff with rate limit detection
- **Analytics Tracking**: All operations logged to AI dashboard

**Configuration** (Environment Variables):
```bash
# Voyage AI (recommended)
VOYAGE_API_KEY=your-voyage-api-key
VOYAGE_MODEL=voyage-3  # Options: voyage-3, voyage-3-lite, voyage-code-3

# Provider override
EMBEDDING_PROVIDER=auto  # Options: auto, atlas-ai, voyage, openai

# Disable Atlas AI wrapper
USE_ATLAS_AI=true  # Set to 'false' to use Voyage directly
```

### Source Citations

Every AI response includes traceable source references:

- **Inline References**: `[1]`, `[2]` markers in AI responses
- **Expandable Citations**: Click to see full source details
- **Document Links**: Direct links to source documents
- **Confidence Scores**: Per-citation confidence levels
- **Page References**: Specific page numbers when available

### Context-Aware Answers

AI uses document content to answer user questions accurately:

- **Policy References**: Quote specific policies and guidelines
- **Procedural Guidance**: Step-by-step instructions from documents
- **Compliance Information**: Regulatory requirements from uploaded docs
- **Form Completion Help**: Guide users using document knowledge

### Schema-Aware Suggestions

All AI suggestions respect form validation rules:

- **Field Types**: Suggestions match expected field types
- **Validation Rules**: Respects min/max, patterns, required fields
- **Format Compliance**: Ensures data format matches requirements

## Use Cases

### Compliance Forms

Reference policy documents to answer questions:

- **Travel Policy**: Answer reimbursement questions using policy docs
- **HR Policies**: Guide employees through policy-related forms
- **Regulatory Forms**: Reference compliance documents during intake

**Example**:
```
User: What's the maximum reimbursement amount?

AI: According to the travel policy document [1], the maximum 
    reimbursement amount is $500 per day for domestic travel 
    and $750 per day for international travel. This includes 
    accommodation, meals, and transportation.

    [1] Travel Policy Document, Section 4.2, Page 12
```

### Legal Intake

Use contract templates to guide data collection:

- **Contract Review**: Reference contract terms during intake
- **Legal Forms**: Guide clients using legal documentation
- **Terms & Conditions**: Answer questions about terms

### Healthcare Forms

Reference medical guidelines during patient intake:

- **Clinical Guidelines**: Reference treatment protocols
- **Medication Information**: Use drug reference documents
- **Procedure Guides**: Guide through medical procedures

### Vendor Risk Assessment

Use vendor policies to complete assessments:

- **Security Policies**: Reference vendor security documentation
- **Compliance Requirements**: Use compliance checklists
- **Risk Evaluation**: Guide through risk assessment using policies

### Complex Applications

Guide users through multi-step processes with documentation:

- **Grant Applications**: Reference grant guidelines
- **Research Proposals**: Use research protocol documents
- **Regulatory Submissions**: Guide through regulatory requirements

## Knowledge Types

NetPad's RAG system supports two types of knowledge:

### 1. Document Knowledge (Unstructured)

Upload documents (PDF, DOCX, TXT) that are automatically:
- Text extracted and intelligently chunked
- Embedded using multi-provider support (Voyage AI, Atlas AI, OpenAI)
- Indexed in MongoDB Atlas Vector Search
- Retrieved via semantic search

**Best for**: Policies, guidelines, manuals, procedures, long-form content

### 2. FAQ Knowledge (Structured)

Create structured question-answer pairs with hybrid search:
- **Keyword Search**: Regex matching across question, answer, keywords
- **Vector Search**: Semantic similarity using question embeddings
- **Hybrid Scoring**: Combined relevance (70% vector, 30% keyword)
- **Organization**: Categories, tags, priority, status management
- **Analytics**: View counts, helpful ratings, click tracking

**Best for**: Common questions, quick answers, curated Q&A, troubleshooting

## FAQ Management

### Creating FAQs

1. **Navigate to Knowledge Tab**:
   - Open your conversational form
   - Go to **Knowledge** > **FAQs**

2. **Create FAQ**:
   - Click **"New FAQ"**
   - Enter question and answer
   - Add keywords for better matching
   - Select category and tags
   - Set priority and status
   - Link related FAQs (optional)

3. **Publishing**:
   - Set status to "Published" when ready
   - Drafts are saved but not searchable
   - Archived FAQs are hidden from search

### FAQ Categories

Organize FAQs by category:

- **General**: General information and overview
- **Technical**: Technical implementation details
- **Billing**: Pricing, payments, subscriptions
- **Features**: Feature explanations and usage
- **Troubleshooting**: Common issues and solutions

### FAQ Analytics

Track FAQ performance:

- **View Count**: How many times FAQ was displayed
- **Click Count**: How many times users clicked the FAQ
- **Helpful Ratings**: User feedback (helpful/not helpful)
- **Search Performance**: How well FAQ matches queries

### Hybrid Search

FAQs use sophisticated hybrid search combining:

1. **Vector Search** (70% weight):
   - Semantic similarity between query and question
   - Uses MongoDB Atlas Vector Search
   - 1024-dimension embeddings (Voyage-3)
   - Handles paraphrased questions

2. **Keyword Search** (30% weight):
   - Regex matching in question, answer, keywords
   - Exact phrase matching
   - Case-insensitive
   - Handles specific terminology

3. **Combined Scoring**:
   - Weighted average of both scores
   - Minimum score threshold filtering
   - Priority-based tiebreaking
   - Result snippet generation

**Example**:
```
Query: "How much does the pro plan cost?"

Vector Match (0.85):
  Q: "What is the pricing for professional tier?"
  A: "The Pro plan is $29/month..."

Keyword Match (0.9):
  Q: "Pro plan pricing"
  A: "Pro plan costs $29/month..."

Combined Score: (0.85 × 0.7) + (0.9 × 0.3) = 0.865
```

## Document Management

### Uploading Documents

1. **Navigate to Form Settings**:
   - Open your conversational form
   - Go to **Settings** > **Knowledge Base** or **Knowledge Tab**

2. **Upload Documents**:
   - Click **"Upload Document"**
   - Select PDF, DOCX, or TXT file
   - Add metadata (title, description, tags)
   - Click **"Upload"**

3. **Processing**:
   - Document is automatically processed
   - Text is extracted and chunked
   - Embeddings are generated using tracked provider
   - Document is indexed for search

### Document Metadata

Each document includes:

- **Title**: Document name
- **Description**: What the document contains
- **Source Type**: Policy, Guide, Template, etc.
- **Tags**: Searchable tags
- **Upload Date**: When uploaded
- **File Size**: Document size
- **Page Count**: Number of pages (for PDFs)

### Managing Documents

- **View All**: See all uploaded documents
- **Select for Form**: Choose which documents to use
- **Edit Metadata**: Update title, description, tags
- **Delete**: Remove documents (requires confirmation)

## RAG Configuration

### Enabling RAG

1. **Upload Documents**: Add knowledge base documents
2. **Enable RAG**: Toggle RAG in form settings
3. **Select Documents**: Choose which documents to use
4. **Configure Retrieval**: Set retrieval parameters

### Retrieval Configuration

```typescript
{
  enabled: true,
  documents: ["doc-id-1", "doc-id-2"],  // Document IDs to use
  retrievalConfig: {
    maxChunks: 5,        // Maximum chunks to retrieve (default: 5)
    minScore: 0.7,      // Minimum similarity score (default: 0.7)
    retrievalThreshold: 0.5  // Threshold for using retrieved context (default: 0.5)
  }
}
```

**Configuration Options**:

- **maxChunks**: Maximum number of document chunks to retrieve per query
- **minScore**: Minimum similarity score for chunks to be included
- **retrievalThreshold**: Confidence threshold for using retrieved context

### Document Selection

Choose which documents to use for each form:

- **All Documents**: Use all uploaded documents
- **Selected Documents**: Choose specific documents
- **Tag-Based**: Select documents by tags
- **Category-Based**: Select by document category

## How RAG Works

### 1. Document Processing

When you upload a document:

1. **Text Extraction**: Extract text from PDF, DOCX, or TXT
2. **Chunking**: Split into sentence-aware chunks
3. **Embedding Generation**: Create embeddings using OpenAI
4. **Vector Storage**: Store in MongoDB Atlas Vector Search
5. **Indexing**: Index for fast retrieval

### 2. Query Processing

When a user asks a question:

1. **Query Embedding**: Generate embedding for user question
2. **Vector Search**: Search document chunks using MongoDB Atlas Vector Search
3. **Relevance Scoring**: Rank chunks by semantic similarity
4. **Context Selection**: Select top chunks above threshold
5. **Prompt Enhancement**: Inject context into AI prompt
6. **Response Generation**: AI generates answer using context
7. **Citation Generation**: Add source citations to response

### 3. Response Format

AI responses include:

- **Answer**: Context-aware response using document content
- **Citations**: Inline references `[1]`, `[2]`, etc.
- **Source Details**: Expandable citation section with:
  - Document title
  - Section/page reference
  - Confidence score
  - Direct link to document

## Source Citation Format

### Inline References

Citations appear inline in AI responses:

```
According to the travel policy [1], the maximum reimbursement 
is $500 per day. For international travel [2], the limit is 
$750 per day.

[1] Travel Policy Document, Section 4.2, Page 12
[2] Travel Policy Document, Section 4.3, Page 13
```

### Citation Details

Click citations to see full details:

- **Document Title**: Name of source document
- **Section**: Section or chapter reference
- **Page Number**: Specific page (for PDFs)
- **Confidence Score**: How relevant this source is (0-1)
- **Document Link**: Direct link to view document
- **Chunk Preview**: Preview of relevant text chunk

## Requirements

RAG features have different requirements depending on your deployment mode. See [Deployment Modes](../deployment-modes.md) for a complete comparison of Cloud vs Self-Hosted deployment.

### Cloud Deployment (netpad.io)

For the hosted NetPad platform:

| Requirement | Details |
|-------------|---------|
| **Subscription** | Team or Enterprise plan |
| **Infrastructure** | MongoDB Atlas M10+ cluster |
| **Vector Search** | Atlas Vector Search (included with M10+) |
| **Embeddings** | OpenAI API key required |

### Self-Hosted Deployment

For self-hosted NetPad instances:

| Requirement | Details |
|-------------|---------|
| **Subscription** | Any tier (Free, Pro, Team, Enterprise) |
| **Infrastructure** | MongoDB Atlas Local (Docker) |
| **Vector Search** | Included with Atlas Local |
| **Embeddings** | OpenAI API key required |

**Self-Hosted RAG Setup**:

```bash
# Option 1: Atlas CLI
atlas deployments setup local --type local

# Option 2: Docker
docker run -d -p 27017:27017 mongodb/mongodb-atlas-local
```

Set the deployment mode in your environment:

```bash
NETPAD_DEPLOYMENT_MODE=self-hosted
```

This enables RAG features for **all subscription tiers** without requiring an M10 cluster upgrade.

### API Keys

Required API keys:

- **OpenAI API Key**: For generating embeddings (text-embedding-3-small)
- **MongoDB Atlas**: For Vector Search (included with cluster or Atlas Local)

### Document Storage

Documents are stored in:

- **Vercel Blob**: Private document storage
- **Access Control**: Only accessible to form owners
- **Encryption**: Documents encrypted at rest

## Feature Gates

RAG features use a two-tier gating system that varies by deployment mode:

### Cloud Mode (netpad.io)

1. **Subscription Tier**: Team or Enterprise plan required
2. **Infrastructure Tier**: M10+ MongoDB Atlas cluster required

Both requirements must be met to use RAG features in cloud mode.

### Self-Hosted Mode

1. **Subscription Tier**: Any tier (including Free)
2. **Infrastructure Tier**: Atlas Local (Docker) or any MongoDB with Vector Search support

Self-hosted mode removes subscription restrictions for RAG features.

### Checking Requirements

The form builder will show:

- **Subscription Status**: Current subscription tier
- **Cluster Status**: Current Atlas cluster tier (or LOCAL for Atlas Local)
- **Deployment Mode**: Cloud or Self-Hosted
- **Feature Availability**: Whether RAG is available
- **Upgrade Prompts**: How to enable RAG if not available

## Best Practices

### Document Preparation

1. **Clear Structure**: Use well-structured documents
2. **Relevant Content**: Upload only relevant documents
3. **Good Metadata**: Add descriptive titles and descriptions
4. **Tagging**: Use tags to organize documents
5. **Regular Updates**: Keep documents current

### Retrieval Configuration

1. **Start Default**: Begin with default settings
2. **Adjust Based on Results**: Tune based on response quality
3. **Monitor Citations**: Check citation relevance
4. **Test Queries**: Test with various question types
5. **Iterate**: Refine configuration over time

### Form Design

1. **Clear Objectives**: Define what documents help with
2. **User Guidance**: Explain that AI can reference documents
3. **Citation Expectations**: Set expectations about citations
4. **Document Selection**: Choose most relevant documents
5. **Testing**: Test with real questions before publishing

## Troubleshooting

### Low-Quality Responses

- **Check Documents**: Ensure documents are relevant
- **Adjust Thresholds**: Lower minScore or retrievalThreshold
- **More Chunks**: Increase maxChunks
- **Better Documents**: Upload more specific documents

### Missing Citations

- **Check Relevance**: Documents may not be relevant
- **Lower Threshold**: Reduce minScore threshold
- **More Documents**: Add more related documents

### Slow Responses

- **Reduce Chunks**: Lower maxChunks
- **Cluster Performance**: Check Atlas cluster performance
- **Document Size**: Consider splitting large documents

## AI Analytics & Monitoring

All AI and embedding operations in NetPad are centralized through analytics tracking to ensure visibility, cost control, and usage monitoring.

### AI Dashboard

Access the AI Dashboard at **Settings > Admin > API Metrics** (`/admin/api-metrics`):

**Tracked Metrics**:
- Organization and user IDs
- Feature name (e.g., 'rag_conversational_forms', 'rag_faq_search')
- Model name and provider
- Token usage (prompt, completion, total)
- Latency in milliseconds
- Success/error status
- Cost estimation

**Dashboard Features**:
- Real-time visibility into all AI operations
- Filter by organization, user, feature, model, provider
- Cost breakdown and projections
- Token usage analytics
- Performance metrics (latency p50, p95, p99)
- Error rates and debugging

### Centralized Architecture

All AI operations flow through centralized tracking:

```
┌─────────────────────────────────────────────────────────┐
│                  APPLICATION CODE                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────┐    ┌─────────────────────┐     │
│  │   aiService        │    │ TrackedEmbedding    │     │
│  │   (LLM calls)      │    │ Provider            │     │
│  └────────┬───────────┘    └──────────┬──────────┘     │
│           │                           │                 │
│           └───────────┬───────────────┘                 │
│                       │                                  │
│                       ▼                                  │
│           ┌───────────────────────┐                     │
│           │   logAIRequest()      │ ◄── SINGLE ENTRY   │
│           │   (aiAnalytics.ts)    │     POINT          │
│           └───────────┬───────────┘                     │
│                       │                                  │
│                       ▼                                  │
│           ┌───────────────────────┐                     │
│           │  AI Dashboard         │                     │
│           │  /admin/api-metrics   │                     │
│           └───────────────────────┘                     │
└─────────────────────────────────────────────────────────┘
```

**Why This Matters**:
- **Cost Control**: Monitor AI spending per organization and feature
- **Performance Monitoring**: Track latency trends across providers
- **Feature Analytics**: Understand which features consume the most tokens
- **Debugging & Support**: Full audit trail of AI requests with error messages
- **Budget Alerts**: Set and enforce usage limits per tier

### Tracked Operations

All RAG operations are automatically tracked:

| Operation | Tracking Feature | Metrics |
|-----------|-----------------|---------|
| Document Upload | `rag_conversational_forms` | Embedding tokens, processing time |
| FAQ Creation | `rag_conversational_forms` | Question embedding tokens |
| FAQ Search | `rag_faq_search` | Query embedding tokens, search latency |
| Conversational Chat | `rag_conversational_forms` | LLM tokens, response time |
| Document Retrieval | `rag_conversational_forms` | Vector search operations |

**No Action Required**: All tracking is automatic. Developers building on NetPad must use the centralized `aiService` and `TrackedEmbeddingProvider` wrappers to ensure tracking.

## Next Steps

- [Conversational Forms](./conversational-forms.md) - Create conversational forms
- [Template Management](./templates.md) - Use templates
- [AI Agents](./agents.md) - Explore AI capabilities
- [Configuration](./configuration.md) - Configure AI settings
