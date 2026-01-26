---
sidebar_position: 3
title: Building Extensions
description: Step-by-step guide to creating NetPad extensions
---

# Building NetPad Extensions

This tutorial walks you through creating a NetPad extension from scratch. By the end, you'll have a fully functional extension with API routes, services, and React components.

:::tip Quick Start with MCP Server
If you're using an AI assistant with the [NetPad MCP Server](/docs/developer/mcp-server), you can generate complete extension packages automatically:

```
"Create a NetPad extension with a custom workflow node that logs messages"
```

The MCP Server's `generate_extension` tool creates all necessary files (package.json, tsconfig, source code, README) ready to build and install. This is the fastest way to get started!
:::

## Prerequisites

- Node.js 18+ and npm
- Basic knowledge of TypeScript and React
- Understanding of Next.js API routes
- A NetPad development environment

## Project Structure

A typical extension package has this structure:

```
packages/my-extension/
├── package.json           # Package configuration
├── tsconfig.json          # TypeScript configuration
├── tsup.config.ts         # Build configuration
├── src/
│   ├── index.ts           # Main extension entry point
│   ├── types/
│   │   └── index.ts       # Type definitions
│   ├── components/
│   │   ├── index.ts       # Component exports
│   │   └── MyComponent.tsx
│   └── services/
│       └── myService.ts   # Business logic
├── dist/                  # Built output (generated)
└── README.md
```

## Step 1: Initialize the Package

Create the package directory and initialize:

```bash
mkdir -p packages/my-extension
cd packages/my-extension
npm init -y
```

Update `package.json`:

```json
{
  "name": "@myorg/my-extension",
  "version": "1.0.0",
  "description": "My custom NetPad extension",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./components": {
      "types": "./dist/components/index.d.ts",
      "import": "./dist/components/index.mjs",
      "require": "./dist/components/index.js"
    }
  },
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "clean": "rm -rf dist",
    "typecheck": "tsc --noEmit"
  },
  "peerDependencies": {
    "@mui/icons-material": ">=5.0.0",
    "@mui/material": ">=5.0.0",
    "next": ">=14.0.0",
    "react": ">=18.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "tsup": "^8.0.0",
    "typescript": "^5.0.0"
  },
  "files": [
    "dist",
    "README.md"
  ]
}
```

## Step 2: Configure TypeScript

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Step 3: Configure Build

Create `tsup.config.ts`:

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'components/index': 'src/components/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'next',
    'next/server',
    '@mui/material',
    '@mui/icons-material',
  ],
  treeshake: true,
  splitting: false,
  sourcemap: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
```

## Step 4: Define Types

Create `src/types/index.ts`:

```typescript
/**
 * Types for my extension
 */

export interface MyData {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

export interface MyServiceConfig {
  apiKey?: string;
  enabled: boolean;
}

export interface MyService {
  getData(): Promise<MyData[]>;
  createData(data: Omit<MyData, 'id' | 'createdAt'>): Promise<MyData>;
  deleteData(id: string): Promise<void>;
}
```

## Step 5: Implement Services

Create `src/services/myService.ts`:

```typescript
import type { MyData, MyService, MyServiceConfig } from '../types';

let config: MyServiceConfig = {
  enabled: false,
};

// In-memory storage for demo (use MongoDB in production)
const dataStore: Map<string, MyData> = new Map();

export function configure(newConfig: Partial<MyServiceConfig>): void {
  config = { ...config, ...newConfig };
}

export const myService: MyService = {
  async getData(): Promise<MyData[]> {
    return Array.from(dataStore.values());
  },

  async createData(data: Omit<MyData, 'id' | 'createdAt'>): Promise<MyData> {
    const newData: MyData = {
      ...data,
      id: `data_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date(),
    };
    dataStore.set(newData.id, newData);
    return newData;
  },

  async deleteData(id: string): Promise<void> {
    dataStore.delete(id);
  },
};

export default myService;
```

## Step 6: Create the Extension

Create `src/index.ts`:

```typescript
/**
 * My NetPad Extension
 *
 * Provides custom functionality for NetPad.
 */

import { NextRequest, NextResponse } from 'next/server';
import { myService, configure } from './services/myService';
import type { MyData, MyServiceConfig } from './types';

// Re-export types
export * from './types';

// Extension configuration
let extensionConfig: MyServiceConfig = {
  enabled: true,
};

/**
 * Extension metadata
 */
interface ExtensionMetadata {
  id: string;
  name: string;
  version: string;
  description?: string;
}

/**
 * Route handler type
 */
type RouteHandler = (
  request: NextRequest,
  context?: { params?: Record<string, string | string[]> }
) => Promise<NextResponse>;

/**
 * Extension route definition
 */
interface ExtensionRoute {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  handler: RouteHandler;
}

/**
 * Main extension interface
 */
interface NetPadExtension {
  metadata: ExtensionMetadata;
  features: string[];
  routes?: ExtensionRoute[];
  services?: Record<string, unknown>;
  initialize?: () => Promise<void>;
  cleanup?: () => Promise<void>;
}

// ============================================
// Route Handlers
// ============================================

/**
 * GET /api/ext/my-extension/data
 * Returns all data items
 */
async function handleGetData(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await myService.getData();
    return NextResponse.json({
      success: true,
      items: data,
      total: data.length,
    });
  } catch (error) {
    console.error('[MyExtension] Error getting data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/ext/my-extension/data
 * Creates a new data item
 */
async function handleCreateData(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    const data = await myService.createData({
      name: body.name,
      description: body.description,
    });

    return NextResponse.json({
      success: true,
      data,
      message: 'Data created successfully',
    });
  } catch (error) {
    console.error('[MyExtension] Error creating data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create data' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/ext/my-extension/data/:id
 * Deletes a data item
 */
async function handleDeleteData(
  request: NextRequest,
  context?: { params?: Record<string, string | string[]> }
): Promise<NextResponse> {
  try {
    // Extract ID from URL
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const id = pathParts[pathParts.length - 1];

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required' },
        { status: 400 }
      );
    }

    await myService.deleteData(id);

    return NextResponse.json({
      success: true,
      message: 'Data deleted successfully',
    });
  } catch (error) {
    console.error('[MyExtension] Error deleting data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete data' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/ext/my-extension/health
 * Health check endpoint
 */
async function handleHealth(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json({
    success: true,
    status: 'healthy',
    version: myExtension.metadata.version,
    timestamp: new Date().toISOString(),
  });
}

// ============================================
// Extension Definition
// ============================================

export const myExtension: NetPadExtension = {
  metadata: {
    id: 'my-extension',
    name: 'My Extension',
    version: '1.0.0',
    description: 'A custom NetPad extension',
  },

  // Features provided by this extension
  features: [
    'custom:my_feature',
    'custom:my_other_feature',
  ],

  // API routes
  routes: [
    {
      path: '/api/ext/my-extension/data',
      method: 'GET',
      handler: handleGetData,
    },
    {
      path: '/api/ext/my-extension/data',
      method: 'POST',
      handler: handleCreateData,
    },
    {
      path: '/api/ext/my-extension/health',
      method: 'GET',
      handler: handleHealth,
    },
  ],

  // Shared services
  services: {
    myService,
  },

  // Initialization hook
  initialize: async () => {
    console.log('[MyExtension] Initializing...');

    // Load configuration from environment
    extensionConfig = {
      apiKey: process.env.MY_EXTENSION_API_KEY,
      enabled: process.env.MY_EXTENSION_ENABLED !== 'false',
    };

    configure(extensionConfig);

    console.log('[MyExtension] Initialized successfully');
  },

  // Cleanup hook
  cleanup: async () => {
    console.log('[MyExtension] Cleaning up...');
    // Cleanup resources here
  },
};

// Default export for extension loader
export default myExtension;
```

## Step 7: Create React Components

Create `src/components/DataList.tsx`:

```tsx
'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  Alert,
  IconButton,
  alpha,
  useTheme,
} from '@mui/material';
import { Delete, Refresh } from '@mui/icons-material';
import type { MyData } from '../types';

export interface DataListProps {
  endpoint?: string;
  onDelete?: (id: string) => void;
  refreshInterval?: number;
}

export function DataList({
  endpoint = '/api/ext/my-extension/data',
  onDelete,
  refreshInterval,
}: DataListProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [data, setData] = useState<MyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoint);
      const result = await response.json();

      if (result.success) {
        setData(result.items);
        setError(null);
      } else {
        setError(result.error || 'Failed to load data');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    if (refreshInterval) {
      const interval = setInterval(fetchData, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [endpoint, refreshInterval]);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${endpoint}/${id}`, { method: 'DELETE' });
      const result = await response.json();

      if (result.success) {
        setData(data.filter(item => item.id !== id));
        onDelete?.(id);
      }
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (data.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="text.secondary">No data available</Typography>
      </Box>
    );
  }

  return (
    <List>
      {data.map((item) => (
        <ListItem
          key={item.id}
          sx={{
            bgcolor: isDark ? alpha('#fff', 0.02) : alpha('#000', 0.02),
            borderRadius: 1,
            mb: 1,
          }}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => handleDelete(item.id)}
              sx={{ color: 'error.main' }}
            >
              <Delete />
            </IconButton>
          }
        >
          <ListItemText
            primary={item.name}
            secondary={item.description || 'No description'}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default DataList;
```

Create `src/components/index.ts`:

```typescript
/**
 * My Extension UI Components
 */

export { DataList } from './DataList';
export type { DataListProps } from './DataList';

// Component IDs for the extension system
export const MY_EXTENSION_COMPONENTS = {
  DATA_LIST: 'my-extension:data-list',
} as const;

export type MyExtensionComponentId =
  (typeof MY_EXTENSION_COMPONENTS)[keyof typeof MY_EXTENSION_COMPONENTS];
```

## Step 8: Build the Extension

Install dependencies and build:

```bash
npm install
npm run build
```

Verify the output:

```bash
ls -la dist/
# Should show:
# - index.js, index.mjs, index.d.ts
# - components/index.js, components/index.mjs, components/index.d.ts
```

## Step 9: Integrate with NetPad

### Link the Package

For local development, link the package to NetPad:

```bash
# In NetPad root
npm install ./packages/my-extension
```

Or add to `package.json`:

```json
{
  "dependencies": {
    "@myorg/my-extension": "file:packages/my-extension"
  }
}
```

### Register the Extension Loader

Add to `src/lib/extensions/loader.ts`:

```typescript
const knownExtensionLoaders: Record<string, () => Promise<unknown>> = {
  '@netpad/cloud-features': () => import('@netpad/cloud-features').catch(() => null),
  '@netpad/collaborate': () => import('@netpad/collaborate').catch(() => null),
  '@myorg/my-extension': () => import('@myorg/my-extension').catch(() => null),
};
```

### Enable the Extension

Add to `.env.local`:

```bash
NETPAD_EXTENSIONS=@myorg/my-extension
```

## Step 10: Test the Extension

Start NetPad and test:

```bash
npm run dev
```

Test the API endpoints:

```bash
# Health check
curl http://localhost:3000/api/ext/my-extension/health

# Get data
curl http://localhost:3000/api/ext/my-extension/data

# Create data
curl -X POST http://localhost:3000/api/ext/my-extension/data \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Item", "description": "A test item"}'

# Get data again
curl http://localhost:3000/api/ext/my-extension/data
```

## Step 11: Use Components

Create a page that uses your extension's components:

```tsx
// src/app/my-extension-demo/page.tsx
'use client';

import { Box, Container, Typography } from '@mui/material';
import { DataList } from '@myorg/my-extension/components';

export default function MyExtensionDemoPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Extension Demo
      </Typography>
      <DataList
        endpoint="/api/ext/my-extension/data"
        refreshInterval={30000}
        onDelete={(id) => console.log('Deleted:', id)}
      />
    </Container>
  );
}
```

## Writing Tests

Create `tests/my-extension.test.ts`:

```typescript
import { myExtension } from '@myorg/my-extension';

describe('My Extension', () => {
  describe('Metadata', () => {
    it('should have correct ID', () => {
      expect(myExtension.metadata.id).toBe('my-extension');
    });

    it('should have version', () => {
      expect(myExtension.metadata.version).toBeDefined();
    });
  });

  describe('Features', () => {
    it('should declare custom features', () => {
      expect(myExtension.features).toContain('custom:my_feature');
    });
  });

  describe('Routes', () => {
    it('should define routes', () => {
      expect(myExtension.routes).toBeDefined();
      expect(myExtension.routes?.length).toBeGreaterThan(0);
    });

    it('should have health endpoint', () => {
      const healthRoute = myExtension.routes?.find(
        r => r.path.includes('/health')
      );
      expect(healthRoute).toBeDefined();
    });
  });

  describe('Services', () => {
    it('should expose myService', () => {
      expect(myExtension.services?.myService).toBeDefined();
    });
  });
});
```

## Publishing Your Extension

When ready to publish:

1. Update version in `package.json`
2. Build the package: `npm run build`
3. Publish to npm: `npm publish`

For private extensions, use a private npm registry or `file:` dependencies.

## Adding Workflow Nodes

Extensions can provide custom workflow nodes that appear in the workflow editor palette and can be executed by the workflow engine. This is a powerful way to add domain-specific automation capabilities.

### Step 1: Create the Node Handler

Create `src/nodes/myCustomNode.ts`:

```typescript
/**
 * My Custom Workflow Node
 */

/**
 * Node execution result (matches NetPad core)
 */
interface NodeExecutionResult {
  success: boolean;
  data: Record<string, unknown>;
  error?: { code: string; message: string; retryable: boolean };
  metadata?: { durationMs?: number; bytesProcessed?: number };
}

/**
 * Node execution context (matches NetPad core)
 */
interface NodeExecutionContext {
  nodeId: string;
  nodeType: string;
  config: Record<string, unknown>;
  resolvedConfig: Record<string, unknown>;
  inputs: Record<string, unknown>;
  trigger: { type: string; payload?: Record<string, unknown> };
  getConnection: (vaultId: string) => Promise<{ connectionString: string; database: string } | null>;
  getEmailCredentials: (credentialId: string) => Promise<unknown>;
}

export type NodeHandler = (context: NodeExecutionContext) => Promise<NodeExecutionResult>;

/**
 * Configuration for the node
 */
export interface MyCustomNodeConfig {
  message?: string;
  targetUrl?: string;
  retryCount?: number;
}

/**
 * Node handler - executed when the node runs in a workflow
 */
export const myCustomNodeHandler: NodeHandler = async (context) => {
  const startTime = Date.now();

  try {
    const config = context.resolvedConfig as MyCustomNodeConfig;

    // Validate required configuration
    if (!config.message) {
      return {
        success: false,
        data: {},
        error: {
          code: 'MISSING_CONFIG',
          message: 'Message is required',
          retryable: false,
        },
      };
    }

    // Your custom logic here
    const result = {
      processed: true,
      message: config.message,
      timestamp: new Date().toISOString(),
    };

    // If target URL is configured, send the data
    if (config.targetUrl) {
      const response = await fetch(config.targetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        return {
          success: false,
          data: { result },
          error: {
            code: 'OPERATION_FAILED',
            message: `Request failed: ${response.status}`,
            retryable: true,
          },
        };
      }
    }

    return {
      success: true,
      data: { result },
      metadata: {
        durationMs: Date.now() - startTime,
      },
    };
  } catch (error) {
    return {
      success: false,
      data: {},
      error: {
        code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
        retryable: false,
      },
    };
  }
};

/**
 * Node definition - describes the node for the UI
 */
export const myCustomNodeDefinition = {
  type: 'my-extension:custom-node',  // Use extension-namespaced type
  label: 'My Custom Action',
  description: 'Performs a custom action in your workflow',
  category: 'actions' as const,
  color: '#FF5722',  // Node color in the palette
  icon: 'Extension',  // MUI icon name
  version: '1.0.0',
  configFields: [
    {
      name: 'message',
      label: 'Message',
      type: 'text' as const,
      required: true,
      placeholder: 'Enter message...',
      helpText: 'The message to process',
    },
    {
      name: 'targetUrl',
      label: 'Target URL',
      type: 'text' as const,
      placeholder: 'https://...',
      helpText: 'Optional webhook URL to send results',
    },
    {
      name: 'retryCount',
      label: 'Retry Count',
      type: 'number' as const,
      defaultValue: 3,
      helpText: 'Number of retries on failure',
    },
  ],
  outputs: [
    { id: 'output', label: 'Success', primary: true },
  ],
};
```

### Step 2: Export the Node

Create `src/nodes/index.ts`:

```typescript
export {
  myCustomNodeHandler,
  myCustomNodeDefinition,
  type MyCustomNodeConfig,
  type NodeHandler,
} from './myCustomNode';
```

### Step 3: Register in the Extension

Update `src/index.ts` to include workflow nodes:

```typescript
import {
  myCustomNodeHandler,
  myCustomNodeDefinition,
} from './nodes';

/**
 * Workflow node type for extension registration
 */
interface ExtensionWorkflowNode {
  definition: {
    type: string;
    label: string;
    description: string;
    category: 'triggers' | 'logic' | 'integrations' | 'actions' | 'data' | 'ai' | 'forms' | 'custom' | 'annotations';
    color: string;
    icon: string;
    version: string;
    configFields?: Array<{
      name: string;
      label: string;
      type: string;
      defaultValue?: unknown;
      placeholder?: string;
      helpText?: string;
      required?: boolean;
      options?: Array<{ label: string; value: string }>;
    }>;
    outputs?: Array<{ id: string; label: string; primary?: boolean }>;
  };
  handler: unknown;  // NodeHandler
}

export const myExtension: NetPadExtension = {
  metadata: {
    id: 'my-extension',
    name: 'My Extension',
    version: '1.0.0',
  },

  features: [
    'custom:my_feature',
    'custom:workflow_nodes',  // Indicate workflow node support
  ],

  // Custom workflow nodes
  workflowNodes: [
    {
      definition: myCustomNodeDefinition,
      handler: myCustomNodeHandler as unknown,
    },
  ],

  routes: [
    // ... your routes
  ],

  initialize: async () => {
    console.log('[MyExtension] Initialized with custom workflow nodes');
  },
};
```

### Step 4: Update Build Configuration

Add nodes to `tsup.config.ts`:

```typescript
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'components/index': 'src/components/index.ts',
    'nodes/index': 'src/nodes/index.ts',  // Add this
  },
  // ... rest of config
});
```

And `package.json` exports:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./components": {
      "types": "./dist/components/index.d.ts",
      "import": "./dist/components/index.mjs",
      "require": "./dist/components/index.js"
    },
    "./nodes": {
      "types": "./dist/nodes/index.d.ts",
      "import": "./dist/nodes/index.mjs",
      "require": "./dist/nodes/index.js"
    }
  }
}
```

### How It Works

When your extension is loaded:

1. **Registration**: The extension loader registers each workflow node with the core workflow node registry via `registerExtensionNode()`
2. **UI Integration**: The NodePalette component fetches extension nodes via `/api/ext/workflow-nodes` and displays them alongside built-in nodes with an "Ext" badge
3. **Node Rendering**: When dropped on the canvas, extension metadata (color, icon) is stored in the node config and passed to `BaseNode` for custom styling
4. **Configuration**: The `ExtensionNodeEditor` dynamically renders config fields based on your `configFields` definition
5. **Execution**: When a workflow runs, the executor looks up handlers by node type and invokes your custom handler

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     Extension Package                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ Node Handler │  │  Node        │  │ Extension Definition │  │
│  │ (execution)  │  │  Definition  │  │ (workflowNodes: [])  │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     NetPad Core                                  │
│  ┌──────────────────┐  ┌─────────────────┐  ┌───────────────┐  │
│  │ Extension Loader │→ │ Node Registry   │→ │ /api/ext/     │  │
│  │ (registers node) │  │ (stores def +   │  │ workflow-nodes│  │
│  │                  │  │  handler)       │  │ (serves JSON) │  │
│  └──────────────────┘  └─────────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Workflow Editor UI                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ NodePalette  │→ │ Canvas       │→ │ NodeConfigPanel      │  │
│  │ (shows node  │  │ (BaseNode    │  │ (ExtensionNodeEditor │  │
│  │  with badge) │  │  with color) │  │  renders fields)     │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Workflow Executor                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Looks up handler by node.type → calls handler(context)   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Node Definition Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | Yes | Unique identifier, should be namespaced (e.g., `my-extension:node-name`) |
| `label` | string | Yes | Display name in the palette |
| `description` | string | Yes | Tooltip description |
| `category` | string | Yes | Category for grouping: `triggers`, `logic`, `integrations`, `actions`, `data`, `ai`, `forms`, `custom`, `annotations` |
| `color` | string | Yes | Hex color for the node (e.g., `#FF5722`) |
| `icon` | string | Yes | MUI icon name (e.g., `Extension`, `Code`, `Http`) |
| `version` | string | Yes | Node version |
| `configFields` | array | No | Configuration fields for the node settings panel |
| `outputs` | array | No | Output handles (defaults to single `output`) |

### Available Icons

Use any of these MUI icon names:

- `Extension`, `Code`, `Http`, `Storage`, `Email`
- `SmartToy`, `Transform`, `Category`, `Description`
- `Notifications`, `FilterList`, `MergeType`, `DataObject`
- `TableChart`, `Schedule`, `Loop`, `Timer`
- `CallSplit`, `Link`, `PlayArrow`, `StickyNote2`

### Config Field Types

| Type | Description | Example Use Case |
|------|-------------|------------------|
| `text` | Single-line text input with variable picker | URLs, email addresses, short strings |
| `textarea` | Multi-line text input with variable picker | Message templates, body content |
| `number` | Numeric input | Timeouts, retry counts, limits |
| `boolean` | Checkbox/toggle switch | Enable/disable features |
| `select` | Dropdown with predefined options | Channel selection, mode selection |

#### Select Field Options

For `select` fields, provide an `options` array:

```typescript
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
}
```

### Variable Support in Config Fields

Text and textarea fields automatically include a variable picker button that allows users to insert template variables like `{{nodes.previousNode.data.field}}`. Your handler receives these as strings in `context.resolvedConfig` with variables already substituted.

### Error Codes

Use consistent error codes in your handler responses:

| Code | Description | Retryable |
|------|-------------|-----------|
| `MISSING_CONFIG` | Required configuration is missing | No |
| `INVALID_CONFIG` | Configuration value is invalid | No |
| `OPERATION_FAILED` | The operation failed (e.g., HTTP error) | Usually Yes |
| `CONNECTION_FAILED` | Could not connect to external service | Yes |
| `TIMEOUT` | Operation timed out | Yes |
| `INTERNAL_ERROR` | Unexpected error in handler | No |

### Testing Your Workflow Node

Create a test file `src/nodes/__tests__/myCustomNode.test.ts`:

```typescript
import { describe, it, expect, vi } from 'vitest';
import { myCustomNodeHandler } from '../myCustomNode';

describe('myCustomNodeHandler', () => {
  const createContext = (config: Record<string, unknown>) => ({
    nodeId: 'test-node-1',
    nodeType: 'my-extension:custom-node',
    config,
    resolvedConfig: config,
    inputs: {},
    trigger: { type: 'manual' },
    getConnection: vi.fn(),
    getEmailCredentials: vi.fn(),
  });

  it('should return error when message is missing', async () => {
    const result = await myCustomNodeHandler(createContext({}));

    expect(result.success).toBe(false);
    expect(result.error?.code).toBe('MISSING_CONFIG');
  });

  it('should succeed with valid config', async () => {
    const result = await myCustomNodeHandler(
      createContext({ message: 'Hello world' })
    );

    expect(result.success).toBe(true);
    expect(result.data.result).toBeDefined();
  });

  it('should call webhook when targetUrl provided', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    const result = await myCustomNodeHandler(
      createContext({
        message: 'Test',
        targetUrl: 'https://example.com/webhook',
      })
    );

    expect(result.success).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/webhook',
      expect.objectContaining({ method: 'POST' })
    );
  });
});
```

## Best Practices

### General Extension Development

1. **Namespace everything** - Use unique prefixes for routes, features, components, and node types
2. **Handle errors gracefully** - Never crash the main application
3. **Use TypeScript** - Provides better developer experience and catches bugs
4. **Document your extension** - Include README with usage examples
5. **Write tests** - Cover critical functionality
6. **Version carefully** - Follow semantic versioning

### Workflow Node Best Practices

1. **Namespace node types** - Always use `extension-name:node-name` format (e.g., `collaborate:notify-collaborators`)
2. **Validate early** - Check required configuration at the start of your handler and return clear errors
3. **Use appropriate error codes** - `MISSING_CONFIG`, `OPERATION_FAILED`, `CONNECTION_FAILED`, etc.
4. **Set `retryable` correctly** - Transient failures (network, rate limits) should be retryable; validation errors should not
5. **Include metadata** - Track `durationMs` for performance monitoring
6. **Document config fields** - Use clear `helpText` for each field to guide users
7. **Support variables** - Text fields automatically support `{{variable}}` syntax via `resolvedConfig`
8. **Keep handlers focused** - One node should do one thing well

### Security Considerations

1. **Validate URLs** - If your node makes HTTP requests, validate URLs are well-formed
2. **Don't expose secrets** - Never log or return sensitive configuration values
3. **Sanitize outputs** - Be careful about what data you pass to downstream nodes
4. **Handle timeouts** - Set reasonable timeouts for external calls

## Next Steps

- [Workflow Node Extensions](./workflow-nodes) - Complete workflow node reference
- [API Reference](./api-reference) - Complete API documentation
- [Example: Collaborate Extension](./example-collaborate) - Real-world walkthrough
- [Extension Architecture](./architecture) - Deep dive into internals
