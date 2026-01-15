# MCP Server (@netpad/mcp-server)

The `@netpad/mcp-server` package (v2.0.0) is a comprehensive Model Context Protocol (MCP) server that integrates with AI assistants like Claude Desktop and Cursor IDE. It provides **75 AI-powered tools** across **7 categories** for building forms, applications, workflows, conversational experiences, and MongoDB integrations.

## What is the MCP Server?

The MCP server enables AI assistants to help you build NetPad applications through natural language. Instead of manually configuring forms and workflows, you can describe what you want, and the AI will generate the complete configuration using the 75 available tools.

## Installation

### Using npx (Recommended)

```bash
npx @netpad/mcp-server
```

### Global Installation

```bash
npm install -g @netpad/mcp-server
netpad-mcp
```

## Setup

### Claude Desktop Setup

Add the MCP server to your Claude Desktop configuration file (`claude_desktop_config.json`):

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "netpad": {
      "command": "npx",
      "args": ["@netpad/mcp-server"]
    }
  }
}
```

Restart Claude Desktop after making changes.

### Cursor IDE Setup

Add to your `.cursor/mcp.json` file:

```json
{
  "mcpServers": {
    "netpad": {
      "command": "npx",
      "args": ["@netpad/mcp-server"]
    }
  }
}
```

Restart Cursor IDE after making changes.

## Tool Categories (75 Tools)

The MCP server provides tools organized into 7 main categories:

### 1. Form Building (6 tools)

Generate complete form configurations from natural language descriptions:

- **`generate_form`** - Generate complete form configurations from natural language
- **`generate_field`** - Create individual field configurations with validation
- **`generate_conditional_logic`** - Create show/hide logic for fields
- **`generate_computed_field`** - Create formula-based calculated fields
- **`generate_multipage_config`** - Generate multi-page wizard configurations
- **`validate_form_config`** - Validate form configurations and identify issues

### 2. Application Management (7 tools)

Create and manage complete NetPad applications:

- **`create_application`** - Generate code to create new applications
- **`generate_application_contract`** - Define API contracts for applications
- **`generate_application_release`** - Create versioned releases
- **`list_application_templates`** - Browse application templates
- **`publish_to_marketplace`** - Publish applications to marketplace
- **Additional tools** for application lifecycle management

### 3. Marketplace & npm (8 tools)

Publish, search, and install applications:

- **`publish_to_marketplace`** - Publish applications to marketplace
- **`search_marketplace`** - Search for applications in marketplace
- **`install_from_npm`** - Install applications from npm registry
- **`list_npm_packages`** - Browse available npm packages
- **Additional tools** for package management

### 4. Workflow Automation (10 tools)

Build workflows with 25+ node types:

- **`create_workflow`** - Generate complete workflow configurations
- **`add_workflow_node`** - Add nodes to workflows
- **`connect_workflow_nodes`** - Connect nodes with edges
- **`list_workflow_node_types`** - Browse 25+ available node types
- **`list_workflow_templates`** - Get pre-built workflow templates
- **Additional tools** for workflow management

### 5. Conversational & Search Forms (11 tools)

AI-powered data collection and RAG:

- **`create_conversational_form`** - Create AI-powered conversational forms
- **`configure_rag_settings`** - Enable RAG with document retrieval
- **`create_search_form`** - Build MongoDB search interfaces
- **`list_search_operators`** - Browse search operators by field type
- **`list_conversational_templates`** - IT helpdesk, feedback, intake templates
- **Additional tools** for conversational form configuration

### 6. Enhanced Templates (5 tools)

Access 25+ form templates:

- **`list_form_templates`** - Browse 25+ form templates across 10 categories
- **`get_form_template`** - Get detailed template configuration
- **`create_form_from_template`** - Create forms with customizations
- **Template categories**: Business, Events, Feedback, Support, Healthcare, Education, etc.

### 7. Data Browser (12 tools)

MongoDB queries, aggregations, schema analysis:

- **`generate_connection_config`** - Configure MongoDB connections
- **`generate_data_browser_query`** - Generate find, aggregate, distinct queries
- **`generate_aggregation_pipeline`** - Build complex aggregation pipelines
- **`generate_index_recommendations`** - Get index suggestions
- **`generate_schema_analysis`** - Analyze collection schemas
- **Additional tools** for data exploration

### 8. Reference & Helper (16 tools)

Documentation, best practices, debugging:

- **`get_documentation`** - Access NetPad documentation
- **`get_best_practices`** - Get best practices for specific features
- **`debug_form_config`** - Debug form configuration issues
- **`validate_workflow`** - Validate workflow configurations
- **Additional helper tools** for development

## Example Usage

Once configured, you can ask Claude to help you build comprehensive applications:

### Example 1: Create a Customer Feedback Application

```
"Create a customer feedback application with an NPS survey form and a workflow 
that sends thank-you emails and saves responses to MongoDB."
```

The AI will:
1. Generate the NPS survey form with appropriate fields
2. Create a workflow that triggers on form submission
3. Configure email sending node
4. Set up MongoDB write operations
5. Connect all components together

### Example 2: Use Templates

```
"Create a form from the patient-intake template and customize it for our 
healthcare clinic."
```

The AI will:
1. Load the patient-intake template
2. Customize fields based on your requirements
3. Configure validation rules
4. Set up conditional logic if needed

### Example 3: Build a Search Interface

```
"Create a search form for our support tickets collection that allows filtering 
by status, priority, and date range."
```

The AI will:
1. Create a search form configuration
2. Configure search operators for each field
3. Set up result display options
4. Configure pagination and sorting

## Available Resources (16 resources)

The MCP server provides access to documentation and reference materials:

- **`netpad://docs/readme`** - Main documentation
- **`netpad://docs/quick-start`** - Quick start guide
- **`netpad://reference/field-types`** - Field type reference
- **`netpad://reference/application-templates`** - Application templates
- **`netpad://reference/workflow-nodes`** - Workflow node types
- **`netpad://reference/form-templates`** - 25+ form templates
- **`netpad://reference/conversational-templates`** - Conversational form templates
- **`netpad://reference/search-operators`** - Search operators
- **`netpad://reference/connection-types`** - MongoDB connection types
- **`netpad://reference/query-templates`** - Query templates
- **Additional resources** for development reference

## Templates Available

### Form Templates (25+)

The MCP server provides access to 25+ form templates across 10 categories:

- **Business**: Contact forms, job applications, lead capture, quote requests
- **Events**: Registration, RSVP, volunteer signup, webinar registration
- **Feedback**: Customer satisfaction, NPS surveys, product feedback
- **Support**: Support tickets, appointment booking
- **E-commerce**: Order forms, return requests
- **Healthcare**: Patient intake, health screening (with encryption support)
- **Finance**: Expense reports, financial applications (with encryption)
- **Education**: Course enrollment, scholarship applications
- **Real Estate**: Property inquiries, rental applications
- **General**: Multi-purpose forms

### Workflow Templates (5+)

Pre-configured workflows for common automation scenarios:

- Form Processing: Form to email, form to database
- Data Processing: Scheduled sync, data pipelines
- Integrations: Webhook processors, API monitoring
- AI Workflows: Text classification, data extraction
- Logic: Conditional routing, batch processing

### Conversational Form Templates (4+)

Pre-configured conversational forms:

- IT Helpdesk: Technical support ticket creation
- Customer Feedback: Satisfaction and feedback collection
- Patient Intake: Healthcare patient information gathering
- General Intake: Flexible intake form

## Best Practices

1. **Be Specific**: When asking the AI to create forms or workflows, provide as much detail as possible about your requirements.

2. **Use Templates**: Start with templates when possible. Ask "list form templates" or "list workflow templates" to see what's available.

3. **Iterate**: The AI can help you refine configurations. Ask follow-up questions like "add validation to the email field" or "make the status field required."

4. **Validate**: Use validation tools to check your configurations before deploying.

5. **Review Generated Code**: Always review the generated configurations to ensure they match your requirements.

## Troubleshooting

### MCP Server Not Connecting

1. Verify the configuration file is in the correct location
2. Check that `npx` is available in your PATH
3. Restart Claude Desktop or Cursor IDE after configuration changes
4. Check the console for error messages

### Tools Not Available

1. Ensure you're using the latest version: `npx @netpad/mcp-server@latest`
2. Check that your NetPad instance is accessible
3. Verify API keys and authentication if required

### Generated Configurations Not Working

1. Use the validation tools to check for errors
2. Review the generated configuration against the documentation
3. Ask the AI to debug specific issues

## Related Documentation

- [Developer Packages](./packages.md) - Overview of all NetPad packages
- [Forms Package](./packages.md#netpadforms) - React form renderer
- [Workflows Package](./packages.md#netpadworkflows) - Workflow API client
- [Form Builder Guide](../forms/form-builder.md) - Manual form building
- [Workflow Guide](../workflows/creating-workflows.md) - Manual workflow creation
- [Template Gallery](../forms/template-gallery.md) - Browse templates manually

## Resources

- **NPM Package**: [@netpad/mcp-server](https://www.npmjs.com/package/@netpad/mcp-server)
- **GitHub**: [github.com/mongodb/netpad](https://github.com/mongodb/netpad)
- **MCP Documentation**: [Model Context Protocol](https://modelcontextprotocol.io)

## Version

Current version: **2.0.0**

The MCP server is actively maintained and updated with new tools and capabilities. Check the npm package page for the latest version and changelog.
