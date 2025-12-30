# Workflow Node Types

NetPad workflows are built using various node types. This guide covers all available nodes and their configurations.

## Trigger Nodes

### Form Trigger

Starts workflow when a form is submitted.

**Configuration**:
- Form: Select form to monitor
- Event: Form Submitted, Form Updated
- Filter: Optional condition to filter submissions

**Output Data**:
- `data`: Form submission data
- `formId`: Form identifier
- `submissionId`: Submission identifier
- `submittedAt`: Submission timestamp

### Webhook Trigger

Starts workflow via HTTP POST request.

**Configuration**:
- Webhook URL: Generated automatically
- Authentication: Optional API key
- Method: POST (default)

**Output Data**:
- `body`: Request body
- `headers`: Request headers
- `query`: Query parameters

### Schedule Trigger

Runs workflow on a cron schedule.

**Configuration**:
- Schedule: Cron expression (e.g., `0 9 * * *` for daily at 9 AM)
- Timezone: Timezone for schedule
- Start Date: Optional start date

**Output Data**:
- `triggeredAt`: Execution timestamp
- `schedule`: Schedule configuration

### Manual Trigger

Start workflow manually from UI.

**Configuration**:
- None required

**Output Data**:
- `triggeredAt`: Execution timestamp
- `triggeredBy`: User who triggered

### API Trigger

Start workflow via API call.

**Configuration**:
- API Key: Authentication key
- Endpoint: API endpoint URL

**Output Data**:
- `input`: API request data
- `headers`: Request headers

## Logic Nodes

### Conditional (If/Else)

Route workflow based on condition.

**Configuration**:
- Condition: JavaScript expression
- True Path: Execute if condition true
- False Path: Execute if condition false

**Example Condition**:
```javascript
data.status === 'approved' && data.amount > 1000
```

### Switch

Multi-branch routing based on value.

**Configuration**:
- Field: Field to evaluate
- Cases: Value-to-path mappings
- Default: Default path

**Example**:
```
Field: data.priority
Cases:
  - "high" → High Priority Path
  - "medium" → Medium Priority Path
  - "low" → Low Priority Path
Default → Normal Path
```

### Loop

Iterate over array.

**Configuration**:
- Array: Array to iterate
- Item Variable: Variable name for current item
- Index Variable: Variable name for index

**Output Data**:
- `item`: Current array item
- `index`: Current index
- `results`: Array of loop results

### Delay

Wait for specified duration.

**Configuration**:
- Duration: Time to wait (seconds, minutes, hours)
- Or Until: Wait until specific time/date

### Merge

Combine multiple workflow branches.

**Configuration**:
- Merge Strategy: 
  - Combine: Merge all inputs
  - First: Use first completed branch
  - All: Wait for all branches

## Data Nodes

### Transform

Modify data structure.

**Configuration**:
- Mapping: Field mappings
- Expressions: JavaScript transformations

**Example**:
```javascript
{
  fullName: data.firstName + ' ' + data.lastName,
  email: data.email.toLowerCase(),
  timestamp: new Date().toISOString()
}
```

### Filter

Remove items based on conditions.

**Configuration**:
- Condition: Filter expression
- Input: Array to filter

**Example**:
```javascript
item.status === 'active' && item.amount > 0
```

### Aggregate

Group and summarize data.

**Configuration**:
- Group By: Field to group by
- Aggregations: Sum, count, average, etc.

**Example**:
```
Group By: category
Aggregations:
  - total: SUM(amount)
  - count: COUNT()
  - average: AVG(price)
```

### Split

Divide data into multiple outputs.

**Configuration**:
- Split Field: Field to split on
- Outputs: Define output paths

### Set Variable

Store value for later use.

**Configuration**:
- Variable Name: Name of variable
- Value: Value to store

**Usage**:
- Reference with `{{variableName}}`
- Available in all subsequent nodes

## Integration Nodes

### HTTP Request

Make API calls to external services.

**Configuration**:
- Method: GET, POST, PUT, DELETE, PATCH
- URL: Request URL
- Headers: Request headers
- Body: Request body (for POST/PUT)
- Authentication: Basic, Bearer, API Key

**Output Data**:
- `status`: HTTP status code
- `headers`: Response headers
- `body`: Response body
- `error`: Error if request failed

### MongoDB Query

Read documents from MongoDB collection.

**Configuration**:
- Connection: MongoDB connection
- Database: Database name
- Collection: Collection name
- Query: MongoDB query filter
- Projection: Fields to return
- Sort: Sort order
- Limit: Max documents

**Output Data**:
- `documents`: Array of documents
- `count`: Number of documents

### MongoDB Write

Insert, update, or delete documents.

**Configuration**:
- Connection: MongoDB connection
- Database: Database name
- Collection: Collection name
- Operation: Insert, Update, Delete, Upsert
- Data: Document(s) to write
- Filter: Query filter (for update/delete)

**Output Data**:
- `insertedIds`: IDs of inserted documents
- `modifiedCount`: Number of modified documents
- `deletedCount`: Number of deleted documents

### Email Send

Send email via SMTP or email service.

**Configuration**:
- To: Recipient email(s)
- From: Sender email
- Subject: Email subject
- Body: Email body (HTML or text)
- Attachments: Optional file attachments

**Output Data**:
- `messageId`: Email message ID
- `status`: Send status

### Form Prefill

Generate pre-filled form URL.

**Configuration**:
- Form: Target form
- Data: Pre-fill data
- Expiration: URL expiration (optional)

**Output Data**:
- `url`: Pre-filled form URL

## AI Nodes

### AI Prompt

Generate text using AI.

**Configuration**:
- Prompt: Text prompt
- Model: AI model to use
- Temperature: Creativity level (0-1)
- Max Tokens: Maximum response length

**Output Data**:
- `text`: Generated text
- `usage`: Token usage information

### AI Classify

Categorize data with AI.

**Configuration**:
- Text: Text to classify
- Categories: List of categories
- Model: AI model to use

**Output Data**:
- `category`: Assigned category
- `confidence`: Confidence score

### AI Extract

Extract structured data from text.

**Configuration**:
- Text: Text to extract from
- Schema: Desired output structure
- Model: AI model to use

**Output Data**:
- `data`: Extracted structured data

## Node Configuration Tips

### Data Mapping

- Use `{{fieldName}}` to reference data
- Use expressions: `{{field1 + field2}}`
- Access nested: `{{data.user.email}}`

### Error Handling

- Configure retry policies
- Set timeout values
- Add error handling nodes

### Performance

- Use parallel execution when possible
- Filter data early
- Limit data size

## Next Steps

- [Creating Workflows](./creating-workflows.md) - Build your first workflow
- [Execution](./execution.md) - Understand workflow execution
- [Templates](./templates.md) - Use pre-built templates
