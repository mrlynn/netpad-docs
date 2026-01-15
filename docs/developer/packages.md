# Developer Packages

NetPad provides npm packages for developers who want to integrate NetPad forms, workflows, and applications into their projects. Each package serves a specific purpose and can be used independently or together.

## Available Packages

### @netpad/forms

React component library for rendering NetPad forms in your applications.

**Use when**: You want to embed NetPad forms in your React application.

**Key Features**:
- 28+ field types
- Multi-page wizard support
- Conditional logic engine
- TypeScript support
- Form validation
- Custom styling

**[📖 Full Documentation →](./packages-forms.md)**

### @netpad/workflows

Type-safe TypeScript API client for NetPad workflows.

**Use when**: You need to trigger workflows programmatically from your backend or scripts.

**Key Features**:
- Workflow API client
- Execution management
- Type-safe TypeScript API
- Status polling utilities
- Error handling

**[📖 Full Documentation →](./packages-workflows.md)**

### @netpad/cli

Command-line tool for managing NetPad applications.

**Use when**: You want to manage NetPad applications, packages, and projects from the terminal.

**Key Features**:
- Install packages from npm registry
- Search for NetPad packages
- Create new application packages
- Authenticate with NetPad API
- Manage installed applications

**[📖 Full Documentation →](./packages-cli.md)**

### @netpad/mcp-server

MCP (Model Context Protocol) server for NetPad integration.

**Use when**: You want AI assistants (Claude Desktop, Cursor IDE) to help build NetPad applications.

**Key Features**:
- 75 AI-powered tools across 7 categories
- Form generation and workflow automation
- Application management and marketplace integration
- Conversational forms and RAG support
- Template library (25+ form templates)

**[📖 Full Documentation →](./mcp-server.md)**

## Quick Comparison

| Package | Type | Use Case | Documentation |
|---------|------|----------|---------------|
| **@netpad/forms** | React Library | Embed forms in React apps | [Forms Package →](./packages-forms.md) |
| **@netpad/workflows** | TypeScript Client | Trigger workflows programmatically | [Workflows Package →](./packages-workflows.md) |
| **@netpad/cli** | CLI Tool | Manage packages and applications | [CLI Package →](./packages-cli.md) |
| **@netpad/mcp-server** | MCP Server | AI-powered development assistance | [MCP Server →](./mcp-server.md) |

## Installation

### All Packages

```bash
# Forms package
npm install @netpad/forms

# Workflows package
npm install @netpad/workflows

# CLI (global)
npm install -g @netpad/cli

# MCP Server
npm install @netpad/mcp-server
```

## Common Use Cases

### Building a React Application with Forms

Use `@netpad/forms` to embed NetPad forms in your React application:

```tsx
import { FormRenderer } from '@netpad/forms';

function MyApp() {
  return <FormRenderer config={formConfig} onSubmit={handleSubmit} />;
}
```

[Learn more →](./packages-forms.md)

### Automating Workflows from Backend

Use `@netpad/workflows` to trigger workflows from your server:

```typescript
import { createNetPadWorkflowClient } from '@netpad/workflows';

const client = createNetPadWorkflowClient({ /* config */ });
await client.executeWorkflow('workflow-id', { variables: {} });
```

[Learn more →](./packages-workflows.md)

### Managing Applications via CLI

Use `@netpad/cli` to manage applications from the terminal:

```bash
netpad install @netpad/customer-portal
netpad publish
```

[Learn more →](./packages-cli.md)

### AI-Powered Development

Use `@netpad/mcp-server` with Claude Desktop or Cursor IDE:

```
"Create a customer feedback application with an NPS survey form"
```

[Learn more →](./mcp-server.md)

## Resources

- **NPM Packages**:
  - [@netpad/forms](https://www.npmjs.com/package/@netpad/forms) - React form renderer
  - [@netpad/workflows](https://www.npmjs.com/package/@netpad/workflows) - Workflow API client
  - [@netpad/cli](https://www.npmjs.com/package/@netpad/cli) - Command-line tool
  - [@netpad/mcp-server](https://www.npmjs.com/package/@netpad/mcp-server) - MCP server for AI tools
- **GitHub**: [github.com/mongodb/netpad](https://github.com/mongodb/netpad)
- **Examples**: `/examples/` directory in repository
- **API Documentation**: [API Reference](../api/overview.md)

## Next Steps

- [Forms Package](./packages-forms.md) - Embed forms in React applications
- [Workflows Package](./packages-workflows.md) - Trigger workflows programmatically
- [CLI Package](./packages-cli.md) - Manage applications from terminal
- [MCP Server](./mcp-server.md) - AI-powered development tools
- [API Reference](../api/overview.md) - Complete API documentation
- [Getting Started](../getting-started/introduction.md) - Get started with NetPad
