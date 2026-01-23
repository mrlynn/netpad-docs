---
sidebar_position: 6
title: "Example: Demo Node Extension"
description: A beginner-friendly walkthrough of creating a simple workflow node extension
---

# Example: Demo Node Extension

This guide walks through the `@netpad/demo-node` extension—a minimal, heavily-documented example designed to teach you how to create workflow node extensions for NetPad.

## What You'll Learn

- How to structure an extension package
- How to define a workflow node (appearance, configuration)
- How to implement a node handler (execution logic)
- How to register and load your extension

## Overview

The Demo Node extension provides a single workflow node called **"Log Message"** that:

- Logs a configurable message to the console
- Supports different log levels (info, warn, error)
- Passes data through to downstream nodes
- Demonstrates all key extension concepts

```
┌─────────────────────────────────────────────────────┐
│                  Demo Node Extension                 │
├─────────────────────────────────────────────────────┤
│                                                      │
│   ┌─────────────────────────────────────────────┐   │
│   │           "Log Message" Node                 │   │
│   │                                              │   │
│   │   • Category: Custom                         │   │
│   │   • Color: Orange (#FF6B35)                  │   │
│   │   • Icon: Terminal                           │   │
│   │                                              │   │
│   │   Config Fields:                             │   │
│   │   • Message (textarea)                       │   │
│   │   • Log Level (select)                       │   │
│   │   • Label (text)                             │   │
│   │   • Pass Through (boolean)                   │   │
│   │                                              │   │
│   └─────────────────────────────────────────────┘   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

## Package Structure

```
packages/demo-node/
├── package.json          # Package metadata
├── README.md             # Usage documentation
└── src/
    └── index.ts          # Extension + node definition + handler
```

This is the simplest possible structure—a single file containing everything.

## Step-by-Step Walkthrough

### 1. Package Configuration

**`package.json`**

```json
{
  "name": "@netpad/demo-node",
  "version": "1.0.0",
  "description": "A simple demonstration of a NetPad workflow node extension",
  "main": "src/index.ts",
  "types": "src/index.ts",
  "author": "NetPad Team",
  "license": "MIT",
  "peerDependencies": {
    "next": ">=14.0.0"
  }
}
```

Key points:
- Use the `@netpad/` namespace for consistency
- Point `main` and `types` to your entry file
- Declare `next` as a peer dependency (required for route handlers)

### 2. Type Definitions

Before implementing the node, define the types. These match NetPad's core types:

```typescript
// Result returned by a node handler
interface NodeExecutionResult {
  success: boolean;
  data: Record<string, unknown>;
  error?: {
    code: string;
    message: string;
    retryable: boolean;
  };
  metadata?: {
    durationMs?: number;
    bytesProcessed?: number;
  };
}

// Context provided to the handler during execution
interface NodeExecutionContext {
  nodeId: string;
  nodeType: string;
  config: Record<string, unknown>;           // Raw config
  resolvedConfig: Record<string, unknown>;   // Variables substituted
  inputs: Record<string, unknown>;           // Data from upstream nodes
  trigger: { type: string; payload?: Record<string, unknown> };
  getConnection: (vaultId: string) => Promise<{ connectionString: string; database: string } | null>;
  getEmailCredentials: (credentialId: string) => Promise<unknown>;
}

// Handler function signature
type NodeHandler = (context: NodeExecutionContext) => Promise<NodeExecutionResult>;
```

### 3. Node Configuration Interface

Define what configuration options your node accepts:

```typescript
interface LogMessageConfig {
  /** The message to log (supports {{variable}} syntax) */
  message?: string;
  /** Log level: info, warn, or error */
  level?: 'info' | 'warn' | 'error';
  /** Whether to include input data in the output */
  passthrough?: boolean;
  /** Custom label for the log entry */
  label?: string;
}
```

### 4. Node Handler Implementation

The handler contains your node's business logic:

```typescript
const logMessageHandler: NodeHandler = async (context): Promise<NodeExecutionResult> => {
  const startTime = Date.now();

  try {
    // Get resolved config (variables already substituted)
    const config = context.resolvedConfig as LogMessageConfig;

    // Extract configuration with defaults
    const message = config.message || 'Hello from the Demo Node!';
    const level = config.level || 'info';
    const passthrough = config.passthrough !== false;
    const label = config.label || 'Demo Node';

    // Create the log entry
    const logEntry = {
      label,
      level,
      message,
      timestamp: new Date().toISOString(),
      nodeId: context.nodeId,
      triggeredBy: context.trigger.type,
    };

    // Actually log the message
    const logPrefix = `[${label}]`;
    switch (level) {
      case 'warn':
        console.warn(logPrefix, message);
        break;
      case 'error':
        console.error(logPrefix, message);
        break;
      default:
        console.log(logPrefix, message);
    }

    // Build output data
    const outputData: Record<string, unknown> = {
      log: logEntry,
      message: `Logged: "${message}"`,
    };

    // Include inputs if passthrough is enabled
    if (passthrough) {
      outputData.passthrough = context.inputs;
    }

    // Return success
    return {
      success: true,
      data: outputData,
      metadata: {
        durationMs: Date.now() - startTime,
      },
    };

  } catch (error) {
    // Return failure on error
    return {
      success: false,
      data: {},
      error: {
        code: 'OPERATION_FAILED',
        message: error instanceof Error ? error.message : 'Unknown error',
        retryable: false,
      },
    };
  }
};
```

**Key patterns:**
- Track execution time with `startTime`
- Use `resolvedConfig` (not `config`) to get variable-substituted values
- Provide sensible defaults for all configuration
- Return structured output data for downstream nodes
- Always handle errors gracefully

### 5. Node Definition

Define how the node appears in the workflow editor:

```typescript
const logMessageDefinition = {
  // Unique type - convention is 'extensionid:node-name'
  type: 'demo:log-message',

  // Display name in palette and on node
  label: 'Log Message',

  // Tooltip description
  description: 'Logs a message to the console and passes data through. Great for debugging workflows!',

  // Palette category
  category: 'custom' as const,

  // Node color (hex)
  color: '#FF6B35',

  // MUI icon name
  icon: 'Terminal',

  // Semantic version
  version: '1.0.0',

  // Configuration fields for the node editor
  configFields: [
    {
      name: 'message',
      label: 'Message',
      type: 'textarea' as const,
      placeholder: 'Enter your message here...',
      helpText: 'Use {{variable}} syntax to include data from previous nodes.',
      defaultValue: 'Hello from the Demo Node!',
    },
    {
      name: 'level',
      label: 'Log Level',
      type: 'select' as const,
      defaultValue: 'info',
      options: [
        { label: '📝 Info', value: 'info' },
        { label: '⚠️ Warning', value: 'warn' },
        { label: '❌ Error', value: 'error' },
      ],
      helpText: 'The severity level of the log message',
    },
    {
      name: 'label',
      label: 'Label',
      type: 'text' as const,
      placeholder: 'Demo Node',
      helpText: 'A custom label that appears in the log output',
    },
    {
      name: 'passthrough',
      label: 'Pass Through Inputs',
      type: 'boolean' as const,
      defaultValue: true,
      helpText: 'Include input data from previous nodes in the output',
    },
  ],

  // Output handles
  outputs: [
    {
      id: 'output',
      label: 'Success',
      primary: true,
    },
  ],
};
```

### 6. Extension Definition

Wrap everything in the extension interface:

```typescript
import { NextRequest, NextResponse } from 'next/server';

interface NetPadExtension {
  metadata: {
    id: string;
    name: string;
    version: string;
    description?: string;
    author?: string;
  };
  features?: string[];
  routes?: Array<{
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    handler: (request: NextRequest) => Promise<NextResponse>;
    requiresAuth?: boolean;
  }>;
  workflowNodes?: Array<{
    definition: typeof logMessageDefinition;
    handler: NodeHandler;
  }>;
  services?: Record<string, unknown>;
  initialize?: () => Promise<void>;
  cleanup?: () => Promise<void>;
}

export const demoNodeExtension: NetPadExtension = {
  metadata: {
    id: 'netpad-demo-node',
    name: 'Demo Node Extension',
    version: '1.0.0',
    description: 'A simple demonstration of how to create NetPad workflow node extensions',
    author: 'NetPad Team',
  },

  features: ['custom:demo-node'],

  workflowNodes: [
    {
      definition: logMessageDefinition,
      handler: logMessageHandler,
    },
  ],

  initialize: async () => {
    console.log('[Demo Node] Extension initialized! 🚀');
  },

  cleanup: async () => {
    console.log('[Demo Node] Extension cleaned up.');
  },
};

export default demoNodeExtension;
```

## Installation

### 1. Add to Dependencies

```json
// package.json
{
  "dependencies": {
    "@netpad/demo-node": "file:packages/demo-node"
  }
}
```

### 2. Register in Extension Loader

```typescript
// src/lib/extensions/loader.ts

const knownExtensionLoaders: Record<string, () => Promise<unknown>> = {
  '@netpad/cloud-features': () => import('@netpad/cloud-features').catch(() => null),
  '@netpad/collaborate': () => import('@netpad/collaborate').catch(() => null),
  '@netpad/demo-node': () => import('@netpad/demo-node').catch(() => null),  // Add this
};

const namedExports = [
  'extension',
  'cloudExtension',
  'collaborateExtension',
  'demoNodeExtension',  // Add this
  // ...
];
```

### 3. Enable in Environment

```bash
# .env.local
NETPAD_EXTENSIONS=@netpad/collaborate,@netpad/demo-node
```

### 4. Install & Restart

```bash
npm install
npm run dev
```

## Testing Your Node

### Verify Extension Loaded

Check the extension status:

```bash
curl http://localhost:3000/api/ext/status
```

Look for your extension in the response:

```json
{
  "success": true,
  "data": {
    "extensions": [
      {
        "id": "netpad-demo-node",
        "name": "Demo Node Extension",
        "version": "1.0.0"
      }
    ]
  }
}
```

### Verify Node Registered

Check workflow nodes:

```bash
curl http://localhost:3000/api/ext/workflow-nodes
```

Response should include:

```json
{
  "nodes": [
    {
      "type": "demo:log-message",
      "label": "Log Message",
      "category": "custom",
      "providedBy": "netpad-demo-node"
    }
  ]
}
```

### Use in Workflow Editor

1. Open the workflow editor
2. Look in the **Custom** category in the node palette
3. Drag **"Log Message"** onto the canvas
4. Configure and connect to other nodes
5. Run the workflow and check console output

## Using the Node

### Basic Usage

1. Drag the **Log Message** node onto the canvas
2. Connect it after a trigger node
3. Configure the message
4. Run the workflow

### With Variables

Use `{{variable}}` syntax to include dynamic data:

```
New form submission from {{nodes.formTrigger.data.email}}
```

When the workflow runs, variables are resolved before your handler executes.

### Output Data

The node outputs:

```json
{
  "log": {
    "label": "Demo Node",
    "level": "info",
    "message": "Your configured message",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "nodeId": "demo:log-message_abc123",
    "triggeredBy": "form-submission"
  },
  "message": "Logged: \"Your configured message\"",
  "passthrough": { /* input data if enabled */ }
}
```

Downstream nodes can access this data using `{{nodes.logMessage.log.message}}`, etc.

## Creating Your Own Extension

Use this demo as a template:

1. **Copy the package** to a new directory
2. **Update `package.json`** with your extension name
3. **Modify `src/index.ts`**:
   - Change the extension `metadata`
   - Update node `type`, `label`, `icon`, `color`
   - Modify `configFields` for your needs
   - Implement your logic in the handler
4. **Register** your extension in the loader
5. **Enable** via `NETPAD_EXTENSIONS`

## Key Concepts Recap

| Concept | Purpose |
|---------|---------|
| **Extension Metadata** | Identifies your extension in the system |
| **Workflow Nodes** | Custom nodes that appear in the editor palette |
| **Node Definition** | Describes appearance and configuration UI |
| **Node Handler** | Function that executes when the workflow runs |
| **Config Fields** | UI fields in the node configuration panel |
| **Node Outputs** | Data passed to downstream nodes |

## Source Code

The complete source code is available at:

```
packages/demo-node/
├── package.json
├── README.md
└── src/
    └── index.ts
```

The code is extensively commented to serve as a learning resource.

## Next Steps

- [Workflow Node Extensions](./workflow-nodes) - Complete node reference
- [Building Extensions](./building-extensions) - Full extension guide
- [API Reference](./api-reference) - Complete API documentation
- [Example: Collaborate Extension](./example-collaborate) - Production example
