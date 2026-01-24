# Workflows Overview

Workflows allow you to automate processes and integrate NetPad with external systems. Build complex automation workflows using a visual drag-and-drop interface—no code required.

<WorkflowViewer
  title="Example: Support Ticket Router"
  description="This workflow automatically routes incoming support tickets to the appropriate team based on the ticket category."
  height={450}
  workflow={{
    id: 'ticket-router',
    name: 'Support Ticket Router',
    minimap: false,
    nodes: [
      {
        id: 'trigger-1',
        type: 'form_trigger',
        data: { label: 'New Ticket', config: { formName: 'Support Form' } }
      },
      {
        id: 'switch-1',
        type: 'switch',
        data: { label: 'Route by Category', config: { cases: ['Billing', 'Technical', 'General'] } }
      },
      {
        id: 'email-billing',
        type: 'email_send',
        data: { label: 'Notify Billing' }
      },
      {
        id: 'email-tech',
        type: 'email_send',
        data: { label: 'Notify Tech Team' }
      },
      {
        id: 'email-support',
        type: 'email_send',
        data: { label: 'Notify Support' }
      },
      {
        id: 'db-save',
        type: 'mongo_insert',
        data: { label: 'Save to Database', config: { collection: 'tickets' } }
      }
    ],
    edges: [
      { id: 'e1', source: 'trigger-1', target: 'switch-1' },
      { id: 'e2', source: 'switch-1', target: 'email-billing', sourceHandle: 'case_0' },
      { id: 'e3', source: 'switch-1', target: 'email-tech', sourceHandle: 'case_1' },
      { id: 'e4', source: 'switch-1', target: 'email-support', sourceHandle: 'case_2' },
      { id: 'e5', source: 'email-billing', target: 'db-save' },
      { id: 'e6', source: 'email-tech', target: 'db-save' },
      { id: 'e7', source: 'email-support', target: 'db-save' }
    ]
  }}
/>


## What Are Workflows?

Workflows are visual representations of automated processes. They consist of:
- **Nodes**: Individual steps or operations
- **Edges**: Connections that define data flow
- **Triggers**: Events that start workflows
- **Logic**: Conditional routing and data transformation

## Key Features

### Visual Workflow Builder

- **Drag-and-Drop Interface**: Build workflows visually
- **Node Library**: Pre-built nodes for common operations
- **Real-Time Execution**: Monitor workflow execution live
- **Execution History**: View past runs with detailed logs

### No-Code Automation

- **Visual Logic**: Build complex logic without coding
- **Pre-Built Nodes**: Common operations ready to use
- **Data Mapping**: Visual data flow between nodes
- **Error Handling**: Configure retry and error recovery

### Integration Capabilities

- **MongoDB**: Read and write to collections
- **HTTP Requests**: Call external APIs
- **Email**: Send emails via SMTP or services
- **Webhooks**: Trigger external systems
- **AI Integration**: Use AI for text generation and classification

## Workflow Components

### Triggers

Events that start workflows:
- **Form Trigger**: When a form is submitted
- **Webhook Trigger**: HTTP POST to workflow URL
- **Schedule Trigger**: Run on cron schedule
- **Manual Trigger**: Start from UI
- **API Trigger**: Start via API call

### Logic Nodes

Control workflow flow:
- **Conditional (If/Else)**: Route based on conditions
- **Switch**: Multi-branch routing
- **Loop**: Iterate over arrays
- **Delay**: Wait for specified duration
- **Merge**: Combine multiple branches

### Data Nodes

Transform and manipulate data:
- **Transform**: Modify data structure
- **Filter**: Remove items based on conditions
- **Aggregate**: Group and summarize data
- **Split**: Divide data into multiple outputs
- **Set Variable**: Store values for later use

### Integration Nodes

Connect to external systems:
- **HTTP Request**: Make API calls
- **MongoDB Query**: Read from collections
- **MongoDB Write**: Insert/update/delete documents
- **Email Send**: Send emails
- **Form Prefill**: Generate pre-filled form URLs

### AI Nodes

AI-powered operations:
- **AI Prompt**: Generate text using AI
- **AI Classify**: Categorize data with AI
- **AI Extract**: Extract structured data from text

## Workflow Lifecycle

### Draft Mode

- **Not Active**: Workflow not executing
- **Editable**: Can make changes freely
- **Testable**: Can test execution manually

### Active Mode

- **Running**: Workflow executes on triggers
- **Monitoring**: Track execution in real-time
- **Editable**: Can still edit (changes affect new executions)

### Paused Mode

- **Suspended**: Workflow not executing
- **Preserved**: Configuration maintained
- **Resumable**: Can activate anytime

## Workflow Limits by Tier

Workflow usage is limited by subscription tier:

| Tier | Executions/Month | Active Workflows |
|------|------------------|------------------|
| **Free** | 50 | 1 |
| **Pro** | 500 | 5 |
| **Team** | 5,000 | 25 |
| **Enterprise** | Unlimited | Unlimited |

## Execution Engine

The workflow execution engine provides:

- **Async Processing** - Queue-based execution system
- **Retry Logic** - Configurable policies with exponential backoff
- **Error Handling** - Stop, continue, or rollback strategies
- **Timeout Management** - Per-node and workflow-level timeouts
- **Execution Modes** - Sequential, parallel, or auto-detected
- **Job Queue** - MongoDB-based with priority support

## Use Cases

### Form Processing

- Send confirmation emails after form submission
- Notify team members of new submissions
- Validate and enrich form data
- Route submissions to different systems

### Data Synchronization

- Sync data between MongoDB collections
- Update related records
- Maintain data consistency
- Aggregate data from multiple sources

### Business Automation

- Process orders and invoices
- Generate reports on schedule
- Send reminders and notifications
- Automate approval workflows

### Integration

- Connect to CRM systems
- Sync with external databases
- Send data to analytics platforms
- Integrate with third-party services

## Getting Started

1. [Templates](./templates.md) - Start with pre-built workflow templates (recommended)
2. [Creating Workflows](./creating-workflows.md) - Learn how to build workflows from scratch
3. [Node Types](./node-types.md) - Explore all available nodes
4. [Execution](./execution.md) - Understand workflow execution

## Next Steps

Ready to automate? Start with the [Creating Workflows Guide](./creating-workflows.md).
