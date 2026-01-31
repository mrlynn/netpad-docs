# ChatGPT Integration

Build NetPad forms and workflows directly from ChatGPT conversations using the NetPad ChatGPT App. This integration enables natural language form and workflow creation without leaving ChatGPT.

## Overview

The NetPad ChatGPT integration uses the [Model Context Protocol (MCP)](https://modelcontextprotocol.io) to connect ChatGPT with NetPad's form and workflow building capabilities. Through conversational prompts, you can:

- **Browse templates** - Explore 100+ form and workflow templates
- **Create forms** - Generate complete forms from natural language descriptions
- **Build workflows** - Design automation workflows with visual node-based logic
- **Import to NetPad** - Open your creations directly in NetPad Cloud

## Quick Start

### 1. Add the NetPad Connector to ChatGPT

1. Open [ChatGPT](https://chat.openai.com)
2. Go to **Settings** → **Connectors** (or **Connected Apps**)
3. Click **Add Connector**
4. Enter the MCP endpoint URL:
   ```
   https://chatgpt.netpad.io/mcp
   ```
5. Click **Connect**

### 2. Start Building

Once connected, you can start creating forms and workflows through natural language:

```
"Show me the available form templates"
"Create a customer feedback form with rating, comments, and email"
"Build an approval workflow for expense reports"
```

## Available Tools

The ChatGPT integration provides six AI-powered tools:

### Browse Templates

Explore NetPad's template library by type and category:

```
"Browse the form templates"
"Show me healthcare templates"
"What workflow templates are available?"
```

**Parameters:**
- `type` - Filter by template type: `form`, `workflow`, or `application`
- `category` - Filter by category (e.g., "healthcare", "support", "events")
- `search` - Search query to filter templates

### Search Templates

Full-text search across all templates:

```
"Search for contact form templates"
"Find templates related to HR onboarding"
"Look for patient intake forms"
```

**Parameters:**
- `query` - Search keyword (required)
- `type` - Filter by template type
- `limit` - Maximum results to return (default: 10)

### Create Form

Generate complete forms from descriptions or templates:

```
"Create a job application form"
"Build a contact form with name, email, phone, and message fields"
"Create a customer feedback form based on the NPS template"
```

**Parameters:**
- `description` - Natural language description of the form (required)
- `name` - Optional form name
- `templateId` - Start from an existing template
- `fields` - Explicit field definitions (optional)

**Supported Field Types:**
- `text` - Single-line text input
- `email` - Email address with validation
- `phone` - Phone number input
- `number` - Numeric input
- `textarea` - Multi-line text
- `select` - Dropdown selection
- `checkbox` - Checkbox input
- `radio` - Radio button group
- `date` - Date picker
- `time` - Time picker
- `file` - File upload
- `url` - URL input
- `hidden` - Hidden field

### Modify Form

Edit existing forms by adding, removing, or updating fields:

```
"Add an optional phone number field to the form"
"Remove the company field"
"Make the email field required"
```

**Actions:**
- `add_field` - Add a new field
- `remove_field` - Remove an existing field
- `update_field` - Modify field properties
- `reorder` - Change field order

### Get Workflow

View workflow definitions with nodes and connections:

```
"Show me the approval workflow template"
"Get the details of the onboarding workflow"
```

**Built-in Workflow Templates:**
- `approval-workflow` - Multi-step approval with conditional branches
- `onboarding-workflow` - Employee onboarding with parallel tasks
- `support-escalation` - Ticket escalation based on priority
- `lead-nurture` - Email sequence automation

### Create Workflow

Generate workflows from natural language descriptions:

```
"Create an approval workflow for expense reports over $500"
"Build an onboarding automation for new employees"
"Make a workflow that sends email notifications on form submission"
```

**Parameters:**
- `description` - Natural language description (required)
- `name` - Optional workflow name
- `templateId` - Start from an existing template
- `trigger` - Trigger type: `form_submit`, `schedule`, `webhook`, or `manual`

**Supported Node Types:**
- `trigger` - Workflow entry points (form submission, webhook, schedule)
- `action` - Execute operations (HTTP requests, database operations)
- `condition` - Conditional branching based on data values
- `delay` - Wait for a specified duration
- `email` - Send email notifications
- `webhook` - Send HTTP webhook requests
- `approval` - Request human approval
- `transform` - Transform data between steps
- `end` - Workflow termination points

## Interactive Widgets

When you create forms or workflows in ChatGPT, interactive widgets render directly in the conversation:

### Template Gallery Widget

Visual browser for exploring templates with:
- Category filtering chips
- Real-time search
- Template cards with descriptions and field counts
- One-click template selection

### Form Preview Widget

Live form rendering showing:
- All field types with appropriate icons
- Required field indicators
- Validation rules
- **"Open in NetPad"** button to import the form
- **"Modify this form"** button for further changes

### Workflow Viewer Widget

Visual workflow diagram displaying:
- Node types with icons (triggers, actions, conditions, etc.)
- Edge connections between nodes
- Condition labels on branches
- Node descriptions on hover

## Example Conversations

### Creating a Customer Feedback Form

**You:** Create a customer feedback form with rating, comments, and email

**ChatGPT:** I've created a customer feedback form with the following fields:
- **Rating** (1-5 radio buttons)
- **Comments** (text area for detailed feedback)
- **Email** (optional, for follow-up)

[Form Preview Widget appears]

Click **"Open in NetPad"** to import this form and customize it further.

---

### Building an Approval Workflow

**You:** Build an expense approval workflow where amounts over $500 need manager approval

**ChatGPT:** I've created an expense approval workflow with the following steps:

1. **Form Submission** (trigger)
2. **Check Amount** (condition: amount > $500)
3. **Manager Approval** (if over $500)
4. **Auto-Approve** (if under $500)
5. **Send Notification** (email to requester)

[Workflow Viewer Widget appears]

---

### Using Templates

**You:** Show me healthcare form templates

**ChatGPT:** Here are the available healthcare templates:

[Template Gallery Widget with filtered healthcare templates]

**You:** Create a form from the patient-intake template

**ChatGPT:** I've created a patient intake form based on the template with the following sections:
- Personal Information
- Medical History
- Insurance Details
- Emergency Contact

[Form Preview Widget appears]

## Importing to NetPad

After creating a form or workflow, you have two ways to import it to NetPad:

### Option 1: Direct Link

Click the **"Open in NetPad"** button in the widget. This opens a new tab with your form or workflow ready to customize:

```
https://netpad.io/import/forms?id=abc123
```

### Option 2: Manual Import

If the direct link doesn't work, you can manually import using the generated configuration:

1. Copy the form/workflow configuration (provided in the ChatGPT response)
2. Go to [netpad.io](https://netpad.io)
3. Navigate to **Forms** or **Workflows**
4. Click **Import** and paste the configuration

## API Integration

The ChatGPT integration uses the following NetPad APIs:

### Form Import API

```http
POST /api/forms/import
Content-Type: application/json

{
  "config": {
    "name": "Customer Feedback",
    "description": "Collect customer feedback",
    "fieldConfigs": [
      {
        "path": "rating",
        "label": "Rating",
        "type": "radio",
        "included": true,
        "required": true,
        "options": [
          { "label": "1 - Poor", "value": "1" },
          { "label": "2 - Fair", "value": "2" },
          { "label": "3 - Good", "value": "3" },
          { "label": "4 - Very Good", "value": "4" },
          { "label": "5 - Excellent", "value": "5" }
        ]
      }
    ]
  },
  "source": "chatgpt"
}
```

**Response:**
```json
{
  "importUrl": "https://netpad.io/import/forms/abc123",
  "importId": "abc123"
}
```

### Workflow Import API

```http
POST /api/workflows/import
Content-Type: application/json

{
  "config": {
    "name": "Expense Approval",
    "description": "Approve expenses over $500",
    "canvas": {
      "nodes": [...],
      "edges": [...],
      "viewport": { "x": 0, "y": 0, "zoom": 1 }
    },
    "tags": ["approval", "finance"]
  },
  "source": "chatgpt"
}
```

## Comparison: ChatGPT vs MCP Server

NetPad offers two AI integration options:

| Feature | ChatGPT Integration | MCP Server |
|---------|---------------------|------------|
| **Interface** | ChatGPT web app | Claude Desktop, Cursor IDE |
| **Tools** | 6 focused tools | 80+ comprehensive tools |
| **Best for** | Quick form/workflow creation | Full application development |
| **Authentication** | ChatGPT session | Local installation |
| **Output** | Import links | Direct configurations |

**Use ChatGPT Integration when:**
- You want to quickly create forms from natural language
- You're already in a ChatGPT conversation
- You need a simple form or workflow

**Use MCP Server when:**
- You're building complete applications
- You need access to all 80+ tools
- You're working in Claude Desktop or Cursor IDE
- You need generated TypeScript code

See [MCP Server documentation](/docs/developer/mcp-server) for the full MCP server capabilities.

## Technical Architecture

### MCP Protocol

The integration uses the Model Context Protocol (MCP) standard:

```
ChatGPT → MCP Protocol → NetPad ChatGPT Server → NetPad APIs
```

**Endpoint:** `https://chatgpt.netpad.io/mcp`

**Supported Methods:**
- `POST` - Tool invocations
- `GET` - Server-Sent Events (SSE) for streaming
- `OPTIONS` - CORS preflight

**Headers:**
- `Content-Type: application/json`
- `Mcp-Session-Id: <optional session ID>`

### Session Management

The ChatGPT integration is stateless - each request is independent. Session continuity is maintained through:

1. **ChatGPT conversation context** - Previous messages inform subsequent tool calls
2. **Form/Workflow IDs** - Generated items can be referenced by ID
3. **Import URLs** - Persistent links to created items

### Widget System

Interactive widgets use OpenAI's Skybridge protocol:

```
Tool Response → structuredContent → Widget Bundle → ChatGPT UI
```

**MIME Type:** `text/html+skybridge`

Widgets are pre-compiled React components that render in ChatGPT's sandboxed environment.

## Troubleshooting

### Connector Not Working

1. **Verify the endpoint URL** - Ensure you're using `https://chatgpt.netpad.io/mcp`
2. **Check ChatGPT status** - MCP connectors require ChatGPT Plus or Enterprise
3. **Refresh the connection** - Remove and re-add the connector

### Forms Not Importing

1. **Check the import URL** - Ensure the URL opens correctly
2. **Try manual import** - Copy the configuration and import manually
3. **Check NetPad status** - Ensure [netpad.io](https://netpad.io) is accessible

### Widget Not Displaying

1. **Refresh the conversation** - Close and reopen the ChatGPT tab
2. **Try a different browser** - Some ad blockers may interfere with widgets
3. **Check browser console** - Look for JavaScript errors

### Tool Errors

1. **Be more specific** - Provide more detail in your request
2. **Try a template** - Start from a template instead of from scratch
3. **Break it down** - Create the form/workflow in smaller steps

## Limitations

- **No user authentication** - Created forms/workflows are not linked to your NetPad account until imported
- **Stateless sessions** - No persistent memory between ChatGPT sessions
- **Widget size** - Complex forms may be truncated in the widget preview
- **Form modification** - Currently limited to basic operations

## Roadmap

Planned enhancements for the ChatGPT integration:

- **Authentication** - Link your NetPad account for direct saves
- **Conversational form builder** - More sophisticated form creation
- **Advanced workflow designer** - Complex workflow patterns
- **Template publishing** - Submit templates to the marketplace

## Related Documentation

- [MCP Server](/docs/developer/mcp-server) - Full MCP server with 80+ tools
- [Form Builder](/docs/forms/form-builder) - Manual form building
- [Workflows](/docs/workflows/overview) - Workflow documentation
- [Template Gallery](/docs/templates/gallery) - Browse all templates
- [API Reference](/docs/api/overview) - Complete API documentation

## Resources

- **ChatGPT Integration Endpoint:** `https://chatgpt.netpad.io/mcp`
- **NetPad Cloud:** [netpad.io](https://netpad.io)
- **Model Context Protocol:** [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **OpenAI Connectors:** [ChatGPT Settings](https://chat.openai.com)
