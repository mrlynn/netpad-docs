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
- **OpenAI Embeddings**: Uses text-embedding-3-small for embeddings
- **Intelligent Chunking**: Sentence-aware chunking preserves context
- **Relevance Scoring**: Results ranked by semantic similarity

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

## Document Management

### Uploading Documents

1. **Navigate to Form Settings**:
   - Open your conversational form
   - Go to **Settings** > **Knowledge Base**

2. **Upload Documents**:
   - Click **"Upload Document"**
   - Select PDF, DOCX, or TXT file
   - Add metadata (title, description, tags)
   - Click **"Upload"**

3. **Processing**:
   - Document is automatically processed
   - Text is extracted and chunked
   - Embeddings are generated
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

### Subscription Tier

RAG features require:

- **Team** or **Enterprise** subscription
- **Free** and **Pro** tiers do not have access

### Infrastructure Requirements

RAG requires MongoDB Atlas M10+ cluster:

- **Vector Search**: Requires M10+ cluster tier
- **Atlas Vector Search**: Must be enabled on cluster
- **Vector Index**: Automatically created for document collections

### API Keys

Required API keys:

- **OpenAI API Key**: For generating embeddings
- **MongoDB Atlas**: For Vector Search (included with cluster)

### Document Storage

Documents are stored in:

- **Vercel Blob**: Private document storage
- **Access Control**: Only accessible to form owners
- **Encryption**: Documents encrypted at rest

## Feature Gates

RAG features are gated by two tiers:

1. **Subscription Tier**: Team or Enterprise plan required
2. **Infrastructure Tier**: M10+ MongoDB Atlas cluster required

Both requirements must be met to use RAG features.

### Checking Requirements

The form builder will show:

- **Subscription Status**: Current subscription tier
- **Cluster Status**: Current Atlas cluster tier
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

## Next Steps

- [Conversational Forms](./conversational-forms.md) - Create conversational forms
- [Template Management](./templates.md) - Use templates
- [AI Agents](./agents.md) - Explore AI capabilities
- [Configuration](./configuration.md) - Configure AI settings
