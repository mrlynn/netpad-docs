---
sidebar_position: 4
---

# Workflow Node Extensions

Extensions can provide custom workflow nodes that integrate seamlessly with NetPad's workflow editor. This guide covers everything you need to know about creating, configuring, and deploying workflow node extensions.

## Overview

Workflow nodes are the building blocks of NetPad workflows. Each node:

- Appears in the **Node Palette** for users to drag onto the canvas
- Has a **configuration panel** where users set options
- Executes **custom logic** when the workflow runs
- Passes **data** to downstream nodes

Extension nodes work exactly like built-in nodes, with full support for:
- Custom colors and icons
- Configuration fields with variable support
- Error handling and retry policies
- Data output to downstream nodes

## Quick Start

### 1. Create the Node Handler

```typescript
// src/nodes/myNode.ts

interface NodeExecutionResult {
  success: boolean;
  data: Record<string, unknown>;
  error?: { code: string; message: string; retryable: boolean };
  metadata?: { durationMs?: number };
}

interface NodeExecutionContext {
  nodeId: string;
  nodeType: string;
  config: Record<string, unknown>;
  resolvedConfig: Record<string, unknown>;  // Variables already substituted
  inputs: Record<string, unknown>;           // Data from upstream nodes
  trigger: { type: string; payload?: Record<string, unknown> };
  getConnection: (vaultId: string) => Promise<{ connectionString: string; database: string } | null>;
  getEmailCredentials: (credentialId: string) => Promise<unknown>;
}

export type NodeHandler = (context: NodeExecutionContext) => Promise<NodeExecutionResult>;

export const myNodeHandler: NodeHandler = async (context) => {
  const { message } = context.resolvedConfig as { message?: string };

  if (!message) {
    return {
      success: false,
      data: {},
      error: { code: 'MISSING_CONFIG', message: 'Message is required', retryable: false },
    };
  }

  return {
    success: true,
    data: { result: message.toUpperCase() },
  };
};
```

### 2. Define the Node UI

```typescript
export const myNodeDefinition = {
  type: 'my-ext:my-node',           // Namespaced type
  label: 'My Custom Node',          // Display name
  description: 'Does something',    // Tooltip
  category: 'actions' as const,     // Palette category
  color: '#FF5722',                 // Node color (hex)
  icon: 'Extension',                // MUI icon name
  version: '1.0.0',
  configFields: [
    {
      name: 'message',
      label: 'Message',
      type: 'text' as const,
      required: true,
      placeholder: 'Enter message...',
      helpText: 'Supports {{variable}} syntax',
    },
  ],
  outputs: [
    { id: 'output', label: 'Success', primary: true },
  ],
};
```

### 3. Register in Extension

```typescript
// src/index.ts
import { myNodeHandler, myNodeDefinition } from './nodes/myNode';

export const myExtension = {
  metadata: { id: 'my-ext', name: 'My Extension', version: '1.0.0' },
  workflowNodes: [
    { definition: myNodeDefinition, handler: myNodeHandler },
  ],
};
```

## Node Definition Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | `string` | Unique identifier. **Must be namespaced** (e.g., `my-ext:node-name`) |
| `label` | `string` | Display name shown in the palette and on the node |
| `description` | `string` | Tooltip shown when hovering over the node in the palette |
| `category` | `string` | Category for grouping in the palette |
| `color` | `string` | Hex color code (e.g., `#FF5722`) |
| `icon` | `string` | MUI icon name |
| `version` | `string` | Semantic version of the node |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `configFields` | `array` | `[]` | Configuration fields for the node settings panel |
| `outputs` | `array` | `[{id:'output'}]` | Output handles for connecting to other nodes |
| `multipleInputs` | `boolean` | `false` | Allow multiple input connections |
| `docsUrl` | `string` | - | Link to documentation |

### Categories

| Category | Description | Color Suggestion |
|----------|-------------|------------------|
| `triggers` | Start workflow execution | Green (`#4CAF50`) |
| `logic` | Control flow (conditions, loops) | Purple (`#9C27B0`) |
| `integrations` | External service connections | Orange (`#FF9800`) |
| `actions` | Perform operations | Blue (`#2196F3`) |
| `data` | Transform/filter data | Grey (`#607D8B`) |
| `ai` | AI/ML operations | Pink (`#E91E63`) |
| `forms` | Form-related actions | Cyan (`#00BCD4`) |
| `custom` | Custom/code execution | Brown (`#795548`) |
| `annotations` | Notes and documentation | Yellow (`#FBC02D`) |

### Available Icons

The following MUI icon names are supported:

**General:**
- `Extension` - Plugin/extension icon
- `Code` - Code/development
- `Settings` - Configuration

**Communication:**
- `Email` - Email actions
- `Notifications` - Alerts/notifications
- `Http` - HTTP/web requests
- `Link` - Webhooks/connections

**Data:**
- `Storage` - Database operations
- `Transform` - Data transformation
- `FilterList` - Filtering
- `MergeType` - Data merging
- `DataObject` - Data extraction
- `TableChart` - Spreadsheets

**Control Flow:**
- `CallSplit` - Conditional branching
- `Loop` - Iteration
- `Timer` - Delays
- `Schedule` - Scheduling
- `PlayArrow` - Manual triggers

**AI:**
- `SmartToy` - AI/ML operations
- `Category` - Classification

**Other:**
- `Description` - Forms/documents
- `StickyNote2` - Notes

## Configuration Fields

### Field Types

#### Text Field

Single-line text input with variable picker:

```typescript
{
  name: 'url',
  label: 'API URL',
  type: 'text' as const,
  required: true,
  placeholder: 'https://api.example.com/...',
  helpText: 'The endpoint to call',
}
```

#### Textarea Field

Multi-line text input:

```typescript
{
  name: 'body',
  label: 'Request Body',
  type: 'textarea' as const,
  placeholder: '{"key": "{{nodes.previous.value}}"}',
  helpText: 'JSON body with variable support',
}
```

#### Number Field

Numeric input:

```typescript
{
  name: 'timeout',
  label: 'Timeout (ms)',
  type: 'number' as const,
  defaultValue: 5000,
  helpText: 'Maximum time to wait',
}
```

#### Boolean Field

Toggle switch:

```typescript
{
  name: 'enabled',
  label: 'Enable Feature',
  type: 'boolean' as const,
  defaultValue: true,
  helpText: 'Turn this feature on or off',
}
```

#### Select Field

Dropdown with options:

```typescript
{
  name: 'method',
  label: 'HTTP Method',
  type: 'select' as const,
  defaultValue: 'POST',
  options: [
    { label: 'GET', value: 'GET' },
    { label: 'POST', value: 'POST' },
    { label: 'PUT', value: 'PUT' },
    { label: 'DELETE', value: 'DELETE' },
  ],
  helpText: 'Request method to use',
}
```

### Field Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | Yes | Config key (used in `resolvedConfig`) |
| `label` | `string` | Yes | Display label |
| `type` | `string` | Yes | Field type |
| `required` | `boolean` | No | Mark as required |
| `placeholder` | `string` | No | Placeholder text |
| `helpText` | `string` | No | Help text below field |
| `defaultValue` | `unknown` | No | Default value |
| `options` | `array` | For select | Dropdown options |

## Node Handler Reference

### Context Object

The handler receives a context object with:

```typescript
interface NodeExecutionContext {
  // Node identification
  nodeId: string;           // Unique instance ID
  nodeType: string;         // Your node type (e.g., 'my-ext:my-node')

  // Configuration
  config: Record<string, unknown>;          // Raw config
  resolvedConfig: Record<string, unknown>;  // Variables substituted

  // Data flow
  inputs: Record<string, unknown>;  // Data from upstream nodes

  // Trigger info
  trigger: {
    type: string;                            // 'manual', 'form', 'webhook', 'schedule'
    payload?: Record<string, unknown>;       // Trigger-specific data
  };

  // Utilities
  getConnection: (vaultId: string) => Promise<{
    connectionString: string;
    database: string;
  } | null>;
  getEmailCredentials: (credentialId: string) => Promise<unknown>;
}
```

### Result Object

Return a result object:

```typescript
interface NodeExecutionResult {
  success: boolean;
  data: Record<string, unknown>;  // Output data for downstream nodes
  error?: {
    code: string;      // Error code (see below)
    message: string;   // Human-readable message
    retryable: boolean; // Should retry on failure?
  };
  metadata?: {
    durationMs?: number;      // Execution time
    bytesProcessed?: number;  // Data volume
  };
}
```

### Error Codes

| Code | When to Use | Retryable |
|------|-------------|-----------|
| `MISSING_CONFIG` | Required config missing | No |
| `INVALID_CONFIG` | Config value invalid | No |
| `VALIDATION_ERROR` | Input data invalid | No |
| `OPERATION_FAILED` | Operation failed (HTTP error, etc.) | Yes |
| `CONNECTION_FAILED` | Cannot reach external service | Yes |
| `TIMEOUT` | Operation timed out | Yes |
| `RATE_LIMITED` | Hit rate limit | Yes |
| `PERMISSION_DENIED` | Insufficient permissions | No |
| `NOT_FOUND` | Resource not found | No |
| `INTERNAL_ERROR` | Unexpected error | No |

### Accessing Upstream Data

Data from upstream nodes is available in `context.inputs`:

```typescript
export const myNodeHandler: NodeHandler = async (context) => {
  // Access data from previous nodes
  const upstreamData = context.inputs;

  // Common patterns:
  const formData = upstreamData['nodes.formTrigger.data'];
  const previousResult = upstreamData['nodes.previousNode.result'];

  // Process the data...
};
```

### Using Variables

Variables in config are automatically resolved before your handler runs:

```typescript
// User configures: "Hello {{nodes.formTrigger.data.name}}"
// You receive: "Hello John"

export const myNodeHandler: NodeHandler = async (context) => {
  const { message } = context.resolvedConfig;
  // message is already "Hello John"
};
```

## UI Integration Details

### How Extension Nodes Appear

When your extension loads:

1. **Node Palette**: Your node appears with an "Ext" badge in its category
2. **Canvas**: When dragged, uses your custom color and icon
3. **Config Panel**: Shows your `configFields` with the `ExtensionNodeEditor`

### Node Data Storage

Extension metadata is stored in the node's config:

```typescript
{
  id: 'my-ext:my-node_abc123',
  type: 'my-ext:my-node',
  position: { x: 100, y: 200 },
  config: {
    // Your config fields
    message: 'Hello {{nodes.form.data.name}}',

    // Extension metadata (internal, prefixed with _)
    _extensionColor: '#FF5722',
    _extensionIcon: '🔌',
    _providedBy: 'my-extension',
  },
}
```

## Real-World Example: Notify Collaborators

From the `@netpad/collaborate` extension:

```typescript
// src/nodes/notifyCollaborators.ts

export interface NotifyCollaboratorsConfig {
  subject?: string;
  message?: string;
  channel?: 'email' | 'slack' | 'webhook';
  audience?: 'all' | 'contributors' | 'reviewers';
  webhookUrl?: string;
}

export const notifyCollaboratorsHandler: NodeHandler = async (context) => {
  const startTime = Date.now();
  const config = context.resolvedConfig as NotifyCollaboratorsConfig;

  // Validate
  if (!config.message) {
    return {
      success: false,
      data: {},
      error: { code: 'MISSING_CONFIG', message: 'Message is required', retryable: false },
    };
  }

  const channel = config.channel || 'email';
  const audience = config.audience || 'all';

  // If webhook, make the call
  if (channel === 'webhook' && config.webhookUrl) {
    try {
      const response = await fetch(config.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: config.subject,
          message: config.message,
          audience,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        return {
          success: false,
          data: {},
          error: {
            code: 'OPERATION_FAILED',
            message: `Webhook failed: ${response.status}`,
            retryable: true,
          },
        };
      }
    } catch (err) {
      return {
        success: false,
        data: {},
        error: {
          code: 'CONNECTION_FAILED',
          message: err instanceof Error ? err.message : 'Unknown error',
          retryable: true,
        },
      };
    }
  }

  return {
    success: true,
    data: {
      notification: { channel, audience, sentAt: new Date().toISOString() },
    },
    metadata: { durationMs: Date.now() - startTime },
  };
};

export const notifyCollaboratorsDefinition = {
  type: 'collaborate:notify-collaborators',
  label: 'Notify Collaborators',
  description: 'Send notifications via email, Slack, or webhook',
  category: 'actions' as const,
  color: '#7C4DFF',
  icon: 'Notifications',
  version: '1.0.0',
  configFields: [
    {
      name: 'subject',
      label: 'Subject',
      type: 'text' as const,
      placeholder: 'Notification subject...',
      helpText: 'Subject line for the notification',
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea' as const,
      required: true,
      placeholder: 'Enter your notification message...',
      helpText: 'Use {{variable}} syntax for dynamic values',
    },
    {
      name: 'channel',
      label: 'Channel',
      type: 'select' as const,
      defaultValue: 'email',
      options: [
        { label: 'Email', value: 'email' },
        { label: 'Slack', value: 'slack' },
        { label: 'Webhook', value: 'webhook' },
      ],
      helpText: 'How to deliver the notification',
    },
    {
      name: 'audience',
      label: 'Audience',
      type: 'select' as const,
      defaultValue: 'all',
      options: [
        { label: 'All Collaborators', value: 'all' },
        { label: 'Contributors Only', value: 'contributors' },
        { label: 'Reviewers Only', value: 'reviewers' },
      ],
      helpText: 'Who should receive this notification',
    },
    {
      name: 'webhookUrl',
      label: 'Webhook URL',
      type: 'text' as const,
      placeholder: 'https://...',
      helpText: 'Required when channel is Webhook',
    },
  ],
  outputs: [{ id: 'output', label: 'Success', primary: true }],
};
```

## Debugging

### Check Node Registration

View registered extension nodes at:
```
GET /api/ext/workflow-nodes
```

Response:
```json
{
  "success": true,
  "data": {
    "nodes": [
      {
        "type": "collaborate:notify-collaborators",
        "label": "Notify Collaborators",
        "category": "actions",
        "providedBy": "netpad-collaborate",
        "version": "1.0.0"
      }
    ],
    "stats": {
      "total": 1,
      "byCategory": { "actions": 1 },
      "byExtension": { "netpad-collaborate": 1 }
    }
  }
}
```

### Common Issues

**Node doesn't appear in palette:**
- Check extension is loaded: `GET /api/ext/status`
- Verify `workflowNodes` array in extension definition
- Check browser console for errors

**Config fields don't show:**
- Ensure `configFields` array is defined
- Check field types are valid
- Verify extension node detection (type contains `:`)

**Handler not executing:**
- Check handler is exported and registered
- Verify node type matches exactly
- Check workflow execution logs

## Best Practices

1. **Namespace your node types** - Use `extension-name:node-name` format
2. **Validate early** - Check required config at the start of your handler
3. **Return meaningful errors** - Use appropriate error codes and messages
4. **Set `retryable` correctly** - Transient failures should be retryable
5. **Include metadata** - Track `durationMs` for performance monitoring
6. **Document your fields** - Use clear `helpText` for each config field
7. **Test thoroughly** - Cover success, validation, and error cases
8. **Keep handlers focused** - One node, one purpose

## Next Steps

- [Building Extensions](./building-extensions) - Complete extension guide
- [Extension API Reference](./api-reference) - Full API documentation
- [Example: Collaborate Extension](./example-collaborate) - Production example
