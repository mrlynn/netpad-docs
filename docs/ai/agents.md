# AI Agents

NetPad includes 15+ AI agents to help with form building, optimization, data processing, compliance, and RAG (Retrieval-Augmented Generation). These agents use AI to automate tasks and provide intelligent assistance.

## Agent Categories

AI agents are organized into five categories:

1. **Form Building Agents** - Help create and configure forms
2. **Form Enhancement Agents** - Improve existing forms
3. **Data Processing Agents** - Process and analyze data
4. **Compliance & Quality Agents** - Ensure quality and compliance
5. **RAG Agents** - Knowledge-guided conversational forms with document grounding

## Form Building Agents

### Form Generator

**Tier**: Pro+  
**Description**: Create complete forms from natural language descriptions

**Usage**:
1. Describe what you want in natural language
2. AI generates form structure
3. Review and customize generated form
4. Publish

**Example**:
```
Input: "Create a contact form with name, email, phone, 
        message, and a checkbox for newsletter subscription"

Output: Generated form with all specified fields, 
        validation rules, and basic styling
```

**Features**:
- Generates field types automatically
- Adds appropriate validation
- Suggests conditional logic
- Creates multi-page forms when needed

### Field Type Detection

**Tier**: Free  
**Description**: Auto-detect field types from sample data

**Usage**:
1. Provide sample data (CSV, JSON, or MongoDB documents)
2. AI analyzes data patterns
3. Suggests appropriate field types
4. Apply suggestions to form

**Example**:
```
Input: Sample data with dates, emails, numbers

Output: Date fields → Date Picker
        Email strings → Email Field
        Numbers → Number Field
```

**Features**:
- Pattern recognition
- Data type inference
- Validation rule suggestions
- Format detection

### Conditional Logic Generator

**Tier**: Pro+  
**Description**: Auto-generate show/hide rules based on form structure

**Usage**:
1. Describe desired conditional behavior
2. AI generates conditional logic rules
3. Review and test rules
4. Apply to form

**Example**:
```
Input: "Show 'Company Name' field only if 'Account Type' 
        is 'Business'"

Output: Conditional rule:
        IF accountType === 'business' 
        THEN show companyName
```

**Features**:
- Natural language to rules
- Complex condition support
- Validation of logic
- Testing suggestions

### Validation Pattern Generator

**Tier**: Pro+  
**Description**: Generate regex patterns for validation

**Usage**:
1. Describe validation requirements
2. AI generates regex pattern
3. Test pattern
4. Apply to field

**Example**:
```
Input: "Phone number in format (XXX) XXX-XXXX"

Output: /^\(\d{3}\) \d{3}-\d{4}$/
```

**Features**:
- Pattern generation
- Pattern explanation
- Test cases
- Edge case handling

## Form Enhancement Agents

### Inline Suggestions

**Tier**: Pro+  
**Description**: Real-time field suggestions while building forms

**Usage**:
- Works automatically while building
- Suggests fields based on context
- Recommends validation rules
- Suggests conditional logic

**Features**:
- Context-aware suggestions
- Real-time assistance
- Learning from your patterns
- Non-intrusive UI

### Formula Assistant

**Tier**: Pro+  
**Description**: Help build computed field formulas

**Usage**:
1. Describe what you want to calculate
2. AI suggests formula syntax
3. Test formula
4. Apply to computed field

**Example**:
```
Input: "Calculate total price as quantity times unit price, 
        plus 10% tax"

Output: (quantity * unitPrice) * 1.1
```

**Features**:
- Natural language to formulas
- Syntax validation
- Error detection
- Optimization suggestions

### Form Optimization

**Tier**: Team+  
**Description**: Analyze and improve forms

**Usage**:
1. Run optimization analysis
2. Review suggestions
3. Apply improvements
4. Test optimized form

**Suggestions Include**:
- Field order optimization
- Validation improvements
- Conditional logic simplification
- Multi-page form suggestions
- Performance optimizations

**Features**:
- Performance analysis
- UX recommendations
- Accessibility improvements
- Mobile optimization

## Data Processing Agents

### Response Processing

**Tier**: Team+  
**Description**: Process and transform form responses

**Usage**:
1. Select responses to process
2. Describe transformation needed
3. AI processes responses
4. Review transformed data

**Example**:
```
Input: "Normalize phone numbers to format XXX-XXX-XXXX"

Output: All phone numbers transformed to consistent format
```

**Features**:
- Data normalization
- Format conversion
- Data enrichment
- Bulk processing

### Response Insights

**Tier**: Team+  
**Description**: Analyze submission patterns and trends

**Usage**:
1. Select time range
2. Run insights analysis
3. Review insights
4. Export insights report

**Insights Include**:
- Submission trends
- Field completion patterns
- Common validation errors
- User behavior patterns
- Anomaly detection

**Features**:
- Trend analysis
- Pattern recognition
- Anomaly detection
- Predictive insights

### Auto-Translation

**Tier**: Team+  
**Description**: Translate forms to other languages

**Usage**:
1. Select target language(s)
2. AI translates form content
3. Review translations
4. Publish translated forms

**Features**:
- Multi-language support
- Context-aware translation
- Field label translation
- Validation message translation
- Cultural adaptation

## Compliance & Quality Agents

### Compliance Audit

**Tier**: Team+  
**Description**: Check forms for regulatory compliance

**Usage**:
1. Select compliance standards (HIPAA, GDPR, PCI-DSS, etc.)
2. Run audit
3. Review findings
4. Fix compliance issues

**Checks Include**:
- Data encryption requirements
- Consent mechanisms
- Data retention policies
- Access controls
- Audit logging
- Privacy policy links

**Features**:
- Multi-standard support
- Detailed findings
- Remediation suggestions
- Compliance scoring

### Workflow Generator

**Tier**: Enterprise  
**Description**: Generate workflows from natural language descriptions

**Usage**:
1. Describe workflow process
2. AI generates workflow structure
3. Review and customize
4. Activate workflow

**Example**:
```
Input: "When a form is submitted, send an email notification 
        to the team, then save to MongoDB, and if it's high 
        priority, also send a Slack message"

Output: Generated workflow with:
        - Form Trigger
        - Email Send node
        - MongoDB Write node
        - Conditional node
        - Slack node
```

**Features**:
- Natural language to workflows
- Node selection
- Connection mapping
- Error handling
- Testing suggestions

## RAG Agents

### Knowledge-Guided Conversation

**Tier**: Team+  
**Requirements**: M10+ MongoDB Atlas cluster  
**Description**: RAG-powered conversational forms with document grounding

**Usage**:
1. Upload knowledge base documents (PDF, DOCX, TXT)
2. Enable RAG in conversational form settings
3. AI uses documents to answer questions
4. Responses include source citations

**Features**:
- Document-grounded responses
- Source citations with traceability
- Semantic document search
- Context-aware answers
- Schema-aware suggestions

### Document Upload for RAG

**Tier**: Team+  
**Requirements**: M10+ MongoDB Atlas cluster  
**Description**: Manage knowledge base documents for RAG

**Usage**:
1. Upload documents to form knowledge base
2. Add metadata (title, description, tags)
3. Documents automatically processed and indexed
4. Select documents for use in forms

**Features**:
- Multi-format support (PDF, DOCX, TXT)
- Automatic text extraction
- Intelligent chunking
- Embedding generation
- Vector indexing

### Vector Search

**Tier**: Team+  
**Requirements**: M10+ MongoDB Atlas cluster  
**Description**: Semantic document retrieval using MongoDB Atlas Vector Search

**Usage**:
- Automatically used when RAG is enabled
- Searches document chunks by semantic similarity
- Returns most relevant chunks for context

**Features**:
- Semantic similarity search
- Relevance scoring
- Configurable retrieval parameters
- Fast vector search performance

## Using AI Agents

### Accessing Agents

Agents are available in different contexts:

- **Form Builder**: Inline suggestions, formula assistant
- **Form Settings**: Form optimization, compliance audit
- **Analytics**: Response insights
- **Workflow Builder**: Workflow generator
- **Settings**: Template management, bulk operations

### Agent Usage Limits

AI agent usage is limited by subscription tier:

| Tier | AI Generations/Month |
|------|---------------------|
| **Free** | 10 |
| **Pro** | 100 |
| **Team** | 500 |
| **Enterprise** | Unlimited |

### Best Practices

1. **Clear Descriptions**: Be specific when describing what you want
2. **Review Output**: Always review AI-generated content
3. **Test Thoroughly**: Test AI suggestions before publishing
4. **Iterate**: Refine based on results
5. **Monitor Usage**: Track AI usage to stay within limits

## Agent Configuration

Some agents can be configured:

- **Confidence Thresholds**: Minimum confidence for suggestions
- **Suggestion Frequency**: How often to show suggestions
- **Learning Mode**: Learn from your patterns
- **Custom Prompts**: Customize agent behavior

## Next Steps

- [Conversational Forms](./conversational-forms.md) - Create AI-powered forms
- [Knowledge-Guided Forms (RAG)](./rag-knowledge-guided.md) - Add document-grounded AI
- [Template Management](./templates.md) - Use templates
- [Configuration](./configuration.md) - Configure AI settings
