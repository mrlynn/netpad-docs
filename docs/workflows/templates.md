# Workflow Templates

NetPad provides pre-built workflow templates for common use cases. Use templates as starting points for your workflows. Templates are accessible through the Template Gallery when creating a new workflow.

<DocImage src="/img/templates.png" />

## Accessing Workflow Templates

The Workflow Template Gallery is available when creating a new workflow:

1. **Navigate to Workflows** - Click "New Workflow" from the dashboard
2. **Open Template Gallery** - Click the "Templates" tab in the workflow creation dialog
3. **Browse Templates** - Explore templates by category

:::tip
The Template Gallery is also accessible from the Empty Workflow State when you first open the Workflow Editor without an existing workflow.
:::

## Template Categories

Workflow templates are organized into categories:

### Form Processing

Templates for processing form submissions:

- **Form to Email** - Send email notifications when forms are submitted
- **Form to Database** - Save form submissions to MongoDB collections
- **Form Validation** - Validate and enrich form data before saving
- **Submission Routing** - Route submissions based on conditions

### Data Processing

Templates for data operations and synchronization:

- **Scheduled Sync** - Sync data between collections on a schedule
- **Data Pipeline** - Transform and process data through multiple steps
- **Bulk Operations** - Perform bulk updates or transformations
- **Data Cleanup** - Clean and normalize data automatically

### Integrations

Templates for external system integration:

- **Webhook Processor** - Process incoming webhook data
- **API Monitoring** - Monitor external APIs and trigger actions
- **Database Sync** - Sync with external databases
- **Service Integration** - Connect to third-party services

### AI Workflows

Templates leveraging AI capabilities:

- **Text Classification** - Classify text using AI
- **Data Extraction** - Extract structured data from unstructured text
- **Content Generation** - Generate content using AI
- **Sentiment Analysis** - Analyze sentiment of text data

### Logic

Templates for conditional routing and logic:

- **Conditional Routing** - Route data based on conditions
- **Batch Processing** - Process data in batches
- **Parallel Execution** - Execute multiple operations in parallel
- **Error Handling** - Handle errors and retries

## Previewing Workflow Templates

Before using a template, you can preview it to see what it includes:

### Opening Preview

1. **Click Template Card** - Click on any workflow template card
2. **Preview Dialog Opens** - See detailed template information

### Preview Information

The preview shows:

#### Template Details

- **Name** - Full template name
- **Description** - Detailed description of use case
- **Category** - Template category
- **Icon** - Visual identifier

#### Template Metadata

- **Complexity Level** - Simple, Moderate, or Advanced
- **Estimated Setup Time** - How long to customize
- **Node Count** - Number of nodes included

#### Node and Edge List

- **All Nodes** - Complete list of nodes in the template
- **Node Types** - What type each node is
- **Node Labels** - How nodes are labeled
- **Edges** - Connections between nodes
- **Data Flow** - How data flows through the workflow

### Preview Actions

From the preview dialog, you can:

1. **Use Template** - Apply template as-is and start customizing
2. **Close** - Return to template gallery

## Using Workflow Templates

### Applying a Template

1. **Click "Use Template"** - In the template preview dialog
2. **Name Your Workflow** - Enter a name for your workflow
3. **Workflow Editor Opens** - Template nodes and edges are loaded
4. **Start Customizing** - Modify nodes, add/remove as needed

## Available Templates

### Form Processing Templates

#### Email Confirmation

Send confirmation email after form submission.

<WorkflowViewer
  height={250}
  minimap={false}
  layoutDirection="LR"
  workflow={{
    nodes: [
      { id: 't', type: 'form_trigger', data: { label: 'Form Submitted' } },
      { id: 'e', type: 'email_send', data: { label: 'Send Confirmation' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'e' }
    ]
  }}
/>

**Configuration**:
- Form: Your form
- Email To: Form submitter email
- Email Subject: "Thank you for your submission"
- Email Body: Include form data

#### Team Notification

Notify team members of new form submissions.

<WorkflowViewer
  height={250}
  minimap={false}
  layoutDirection="LR"
  workflow={{
    nodes: [
      { id: 't', type: 'form_trigger', data: { label: 'Form Submitted' } },
      { id: 'e', type: 'email_send', data: { label: 'Notify Team' } },
      { id: 's', type: 'slack_send', data: { label: 'Post to Slack' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'e' },
      { id: 'e2', source: 't', target: 's' }
    ]
  }}
/>

**Configuration**:
- Form: Your form
- Email To: Team email addresses
- Slack Channel: Team channel

#### Data Validation

Validate and enrich form data before saving.

<WorkflowViewer
  height={320}
  minimap={false}
  workflow={{
    nodes: [
      { id: 't', type: 'form_trigger', data: { label: 'Form Submitted' } },
      { id: 'v', type: 'transform', data: { label: 'Validate Data' } },
      { id: 'c', type: 'filter', data: { label: 'Is Valid?' } },
      { id: 's', type: 'mongo_insert', data: { label: 'Save to DB' } },
      { id: 'e', type: 'email_send', data: { label: 'Notify Error' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'v' },
      { id: 'e2', source: 'v', target: 'c' },
      { id: 'e3', source: 'c', target: 's', sourceHandle: 'yes', data: { label: 'Valid' } },
      { id: 'e4', source: 'c', target: 'e', sourceHandle: 'no', data: { label: 'Invalid' } }
    ]
  }}
/>

### Data Synchronization Templates

#### Sync Collections

Sync data between MongoDB collections.

**Nodes**:
- Schedule Trigger (or Form Trigger)
- MongoDB Query (source collection)
- Transform (map fields)
- MongoDB Write (target collection)

#### Update Related Records

Update related documents when data changes.

**Nodes**:
- Form Trigger
- MongoDB Query (find related)
- Transform (update data)
- MongoDB Write (update related)

### Integration Templates

#### Webhook to MongoDB

Save webhook data to MongoDB.

**Nodes**:
- Webhook Trigger
- Transform (format data)
- MongoDB Write

#### API to Form

Send API data to form submission.

**Nodes**:
- API Trigger
- Transform (format as form data)
- Form Submission (internal)

### Business Automation Templates

#### Order Processing

Process orders from form submissions.

<WorkflowViewer
  height={380}
  minimap={false}
  workflow={{
    nodes: [
      { id: 't', type: 'form_trigger', data: { label: 'Order Submitted' } },
      { id: 'q', type: 'mongo_query', data: { label: 'Check Inventory' } },
      { id: 'c', type: 'filter', data: { label: 'In Stock?' } },
      { id: 'w', type: 'mongo_insert', data: { label: 'Create Order' } },
      { id: 'e', type: 'email_send', data: { label: 'Confirmation' } },
      { id: 'h', type: 'http_request', data: { label: 'Notify Fulfillment' } },
      { id: 'n', type: 'email_send', data: { label: 'Out of Stock Notice' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'q' },
      { id: 'e2', source: 'q', target: 'c' },
      { id: 'e3', source: 'c', target: 'w', sourceHandle: 'yes' },
      { id: 'e4', source: 'w', target: 'e' },
      { id: 'e5', source: 'e', target: 'h' },
      { id: 'e6', source: 'c', target: 'n', sourceHandle: 'no' }
    ]
  }}
/>

#### Approval Workflow

Multi-step approval process.

<WorkflowViewer
  height={380}
  minimap={false}
  workflow={{
    nodes: [
      { id: 't', type: 'form_trigger', data: { label: 'Request Submitted' } },
      { id: 'e1', type: 'email_send', data: { label: 'Notify Approver' } },
      { id: 'd', type: 'delay', data: { label: 'Wait for Response' } },
      { id: 'c', type: 'filter', data: { label: 'Approved?' } },
      { id: 'a', type: 'email_send', data: { label: 'Approval Notice' } },
      { id: 'r', type: 'email_send', data: { label: 'Rejection Notice' } },
      { id: 's', type: 'mongo_update', data: { label: 'Update Status' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'e1' },
      { id: 'e2', source: 'e1', target: 'd' },
      { id: 'e3', source: 'd', target: 'c' },
      { id: 'e4', source: 'c', target: 'a', sourceHandle: 'yes' },
      { id: 'e5', source: 'c', target: 'r', sourceHandle: 'no' },
      { id: 'e6', source: 'a', target: 's' },
      { id: 'e7', source: 'r', target: 's' }
    ]
  }}
/>

## Using Templates

### Selecting a Template

1. **Click "New Workflow"** - From the workflows dashboard
2. **Open Template Gallery** - Click the "Templates" tab
3. **Browse Templates** - Filter by category or search
4. **Preview Template** - Click template card to see details
5. **Review Template**:
   - See node structure
   - Read description
   - Check complexity and estimated time
   - Review nodes and edges list

### Customizing Templates

After selecting template:

1. **Configure Nodes**:
   - Update node settings
   - Map to your data
   - Adjust logic

2. **Add/Remove Nodes**:
   - Add additional nodes
   - Remove unnecessary nodes
   - Modify connections

3. **Test Workflow**:
   - Test with your data
   - Verify behavior
   - Make adjustments

### Saving Custom Templates

Create your own templates:

1. **Build Workflow**:
   - Create workflow
   - Configure nodes
   - Test thoroughly

2. **Save as Template**:
   - Click "Save as Template"
   - Name template
   - Add description
   - Choose category

3. **Share Template**:
   - Make template public (optional)
   - Share with team
   - Use in other workflows

## Template Metadata

Each workflow template includes metadata to help you choose:

### Complexity Levels

- **Simple** - Basic workflows with straightforward logic
- **Moderate** - Workflows with conditional logic or multiple steps
- **Advanced** - Complex workflows with advanced features

### Estimated Setup Time

- **Quick** - 2-5 minutes to customize
- **Standard** - 5-10 minutes to customize
- **Extended** - 10-15 minutes to customize

### Node Count

- **Small** - 2-5 nodes
- **Medium** - 6-10 nodes
- **Large** - 11+ nodes

## Creating Custom Templates

### Best Practices

1. **Keep It Generic**: Make templates reusable
2. **Document Well**: Add clear descriptions
3. **Test Thoroughly**: Ensure templates work
4. **Use Variables**: Make templates configurable
5. **Handle Errors**: Include error handling

### Template Structure

Good templates include:
- Clear trigger configuration
- Well-documented nodes
- Error handling
- Configurable settings
- Example data

## Community Templates

### Sharing Templates

Share templates with the community:
- Make template public
- Add to template gallery
- Help others automate

### Finding Templates

Browse community templates:
- Template gallery
- Search by use case
- Filter by category
- Rate and review

## Next Steps

- [Creating Workflows](./creating-workflows.md) - Build custom workflows
- [Node Types](./node-types.md) - Learn about nodes
- [Execution](./execution.md) - Understand execution
