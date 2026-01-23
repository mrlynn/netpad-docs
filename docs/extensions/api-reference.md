---
sidebar_position: 4
title: API Reference
description: Complete API documentation for the NetPad extension system
---

# Extension API Reference

Complete API documentation for building NetPad extensions.

## Core Interfaces

### NetPadExtension

The main interface that all extensions must implement.

```typescript
interface NetPadExtension {
  /** Extension metadata */
  metadata: ExtensionMetadata;

  /** Features provided by this extension */
  features: ExtensionFeature[];

  /** API routes (optional) */
  routes?: ExtensionRoute[];

  /** Request middleware (optional) */
  middleware?: ExtensionMiddleware[];

  /** Shared services (optional) */
  services?: Record<string, unknown>;

  /** React components (optional) */
  components?: Record<string, React.ComponentType>;

  /** Called when extension is loaded */
  initialize?: () => Promise<void>;

  /** Called when extension is unloaded */
  cleanup?: () => Promise<void>;
}
```

### ExtensionMetadata

Describes the extension for registration and display.

```typescript
interface ExtensionMetadata {
  /** Unique identifier (e.g., 'my-extension') */
  id: string;

  /** Human-readable name */
  name: string;

  /** Semantic version (e.g., '1.0.0') */
  version: string;

  /** Description of what the extension does */
  description?: string;

  /** Package author */
  author?: string;

  /** Documentation or homepage URL */
  homepage?: string;
}
```

### ExtensionRoute

Defines an API endpoint provided by the extension.

```typescript
interface ExtensionRoute {
  /** URL path (must start with /api/ext/{extension-name}/) */
  path: string;

  /** HTTP method */
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

  /** Request handler function */
  handler: RouteHandler;

  /** Middleware IDs to apply to this route (optional) */
  middleware?: string[];
}

/** Route handler function signature */
type RouteHandler = (
  request: NextRequest,
  context?: RouteContext
) => Promise<NextResponse>;

/** Context passed to route handlers */
interface RouteContext {
  params?: Record<string, string | string[]>;
}
```

### ExtensionMiddleware

Defines middleware that processes requests.

```typescript
interface ExtensionMiddleware {
  /** Optional identifier for referencing this middleware */
  id?: string;

  /** URL pattern to match (supports wildcards) */
  path: string;

  /** Middleware handler function */
  handler: MiddlewareHandler;

  /** Execution priority (lower = earlier, default: 100) */
  priority?: number;
}

/** Middleware handler function signature */
type MiddlewareHandler = (
  request: NextRequest,
  next: () => Promise<NextResponse>
) => Promise<NextResponse>;
```

### ExtensionFeature

Feature flags that extensions can provide.

```typescript
type ExtensionFeature =
  // Built-in features
  | 'billing'
  | 'stripe_integration'
  | 'subscription_management'
  | 'usage_tracking'
  | 'atlas_provisioning'
  | 'premium_support'
  | 'advanced_analytics'
  | 'sso_authentication'
  | 'audit_logging'
  | 'custom_branding'
  // Custom features (must use this prefix)
  | `custom:${string}`;
```

---

## Registry Functions

### registerExtension

Registers an extension with the system.

```typescript
function registerExtension(extension: NetPadExtension): void
```

**Parameters:**
- `extension` - The extension object to register

**Example:**
```typescript
import { registerExtension } from '@/lib/extensions/registry';

registerExtension(myExtension);
```

### getExtension

Retrieves a registered extension by ID.

```typescript
function getExtension(id: string): NetPadExtension | undefined
```

**Parameters:**
- `id` - Extension ID (from metadata.id)

**Returns:** The extension object or undefined

**Example:**
```typescript
const ext = getExtension('my-extension');
if (ext) {
  console.log(ext.metadata.name);
}
```

### isFeatureAvailable

Checks if a feature is available.

```typescript
function isFeatureAvailable(feature: ExtensionFeature): boolean
```

**Parameters:**
- `feature` - Feature identifier to check

**Returns:** true if any extension provides this feature

**Example:**
```typescript
if (isFeatureAvailable('billing')) {
  // Show billing UI
}

if (isFeatureAvailable('custom:my_feature')) {
  // Show custom feature
}
```

### getFeatureAvailability

Gets detailed information about a feature's availability.

```typescript
function getFeatureAvailability(feature: ExtensionFeature): {
  available: boolean;
  provider?: string;
  message?: string;
}
```

**Parameters:**
- `feature` - Feature identifier to check

**Returns:** Object with availability details

**Example:**
```typescript
const { available, provider, message } = getFeatureAvailability('billing');
if (!available) {
  console.log(message); // "Feature requires extension that is not installed"
}
```

### getExtensionRoutes

Returns all routes from all extensions.

```typescript
function getExtensionRoutes(): ExtensionRoute[]
```

**Returns:** Array of all registered routes

**Example:**
```typescript
const routes = getExtensionRoutes();
routes.forEach(route => {
  console.log(`${route.method} ${route.path}`);
});
```

### getExtensionMiddleware

Returns all middleware from all extensions, sorted by priority.

```typescript
function getExtensionMiddleware(): ExtensionMiddleware[]
```

**Returns:** Array of middleware sorted by priority (lower first)

**Example:**
```typescript
const middleware = getExtensionMiddleware();
// Middleware is already sorted, first items run first
```

### getService

Retrieves a service from an extension.

```typescript
function getService<T>(extensionId: string, serviceName: string): T | undefined
```

**Type Parameters:**
- `T` - Expected service type

**Parameters:**
- `extensionId` - Extension ID
- `serviceName` - Service name (key in services object)

**Returns:** The service instance or undefined

**Example:**
```typescript
interface MyService {
  doSomething(): Promise<void>;
}

const service = getService<MyService>('my-extension', 'myService');
if (service) {
  await service.doSomething();
}
```

### getRegistryStatus

Returns current registry state for debugging.

```typescript
function getRegistryStatus(): {
  extensionCount: number;
  extensions: Array<{
    id: string;
    name: string;
    version: string;
    features: string[];
    routeCount: number;
  }>;
  features: string[];
  initialized: boolean;
}
```

**Returns:** Registry status object

**Example:**
```typescript
const status = getRegistryStatus();
console.log(`Loaded ${status.extensionCount} extensions`);
console.log(`Features: ${status.features.join(', ')}`);
```

### initializeExtensions

Initializes all registered extensions.

```typescript
async function initializeExtensions(): Promise<void>
```

:::note
This is typically called automatically by the loader.
:::

### cleanupExtensions

Calls cleanup on all extensions.

```typescript
async function cleanupExtensions(): Promise<void>
```

### resetRegistry

Resets the registry to initial state (for testing).

```typescript
function resetRegistry(): void
```

---

## Loader Functions

### loadExtensions

Loads all available extensions.

```typescript
async function loadExtensions(): Promise<void>
```

**Behavior:**
1. Loads cloud extension if `NETPAD_CLOUD=true`
2. Loads extensions from `NETPAD_EXTENSIONS` environment variable
3. Initializes all loaded extensions

**Example:**
```typescript
import { loadExtensions } from '@/lib/extensions/loader';

await loadExtensions();
```

### extensionsLoaded

Checks if extensions have been loaded.

```typescript
function extensionsLoaded(): boolean
```

**Returns:** true if loadExtensions() has been called

### waitForExtensions

Waits for extension loading to complete.

```typescript
async function waitForExtensions(): Promise<void>
```

**Example:**
```typescript
await waitForExtensions();
// Now safe to use extension features
```

### registerExtensionManually

Registers an extension programmatically.

```typescript
async function registerExtensionManually(extension: NetPadExtension): Promise<void>
```

**Parameters:**
- `extension` - Extension to register

**Example:**
```typescript
// For testing or dynamic registration
await registerExtensionManually(myTestExtension);
```

### resetLoader

Resets loader state (for testing).

```typescript
function resetLoader(): void
```

---

## Environment Variables

### NETPAD_CLOUD

Enables cloud mode and loads cloud extension.

```bash
NETPAD_CLOUD=true
```

### NETPAD_EXTENSIONS

Comma-separated list of extension packages to load.

```bash
NETPAD_EXTENSIONS=@netpad/collaborate,@myorg/my-extension
```

### NETPAD_SELF_HOSTED

Indicates self-hosted deployment (disables cloud features).

```bash
NETPAD_SELF_HOSTED=true
```

---

## Route Handler Patterns

### Basic GET Handler

```typescript
async function handleGet(request: NextRequest): Promise<NextResponse> {
  try {
    const data = await fetchData();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
```

### POST Handler with Body Parsing

```typescript
async function handlePost(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    // Validate
    if (!body.name) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    const result = await createData(body);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create' },
      { status: 500 }
    );
  }
}
```

### Handler with URL Parameters

```typescript
async function handleGetById(
  request: NextRequest,
  context?: { params?: Record<string, string | string[]> }
): Promise<NextResponse> {
  // Extract ID from URL
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  const id = pathParts[pathParts.length - 1];

  const data = await getById(id);

  if (!data) {
    return NextResponse.json(
      { success: false, error: 'Not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data });
}
```

### Handler with Query Parameters

```typescript
async function handleSearch(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('q') || '';
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');

  const results = await search(query, { limit, offset });

  return NextResponse.json({
    success: true,
    results,
    pagination: { limit, offset, total: results.total },
  });
}
```

---

## Middleware Patterns

### Authentication Middleware

```typescript
const authMiddleware: ExtensionMiddleware = {
  id: 'my-extension:auth',
  path: '/api/ext/my-extension/*',
  priority: 10,
  handler: async (request, next) => {
    const token = request.headers.get('authorization');

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verify token...
    const isValid = await verifyToken(token);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    return next();
  },
};
```

### Logging Middleware

```typescript
const loggingMiddleware: ExtensionMiddleware = {
  id: 'my-extension:logging',
  path: '/api/ext/my-extension/*',
  priority: 1, // Run first
  handler: async (request, next) => {
    const start = Date.now();

    console.log(`[${request.method}] ${request.url}`);

    const response = await next();

    console.log(`[${request.method}] ${request.url} - ${Date.now() - start}ms`);

    return response;
  },
};
```

### Rate Limiting Middleware

```typescript
const rateLimits = new Map<string, { count: number; resetAt: number }>();

const rateLimitMiddleware: ExtensionMiddleware = {
  id: 'my-extension:rate-limit',
  path: '/api/ext/my-extension/*',
  priority: 5,
  handler: async (request, next) => {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const limit = rateLimits.get(ip);

    if (limit && limit.resetAt > now && limit.count >= 100) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    if (!limit || limit.resetAt <= now) {
      rateLimits.set(ip, { count: 1, resetAt: now + 60000 });
    } else {
      limit.count++;
    }

    return next();
  },
};
```

---

## Component Export Patterns

### Basic Component Export

```typescript
// src/components/index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';
```

### With Component IDs

```typescript
// src/components/index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';

export const MY_EXTENSION_COMPONENTS = {
  MY_COMPONENT: 'my-extension:my-component',
} as const;

export type MyExtensionComponentId =
  (typeof MY_EXTENSION_COMPONENTS)[keyof typeof MY_EXTENSION_COMPONENTS];
```

---

## Type Utilities

### Type-Safe Service Access

```typescript
// Define service interface
interface MyService {
  getData(): Promise<Data[]>;
  createData(data: CreateData): Promise<Data>;
}

// Type-safe access
function getMyService(): MyService | undefined {
  return getService<MyService>('my-extension', 'myService');
}

// Usage
const service = getMyService();
if (service) {
  const data = await service.getData();
}
```

### Extension Type Guards

```typescript
function isValidExtension(obj: unknown): obj is NetPadExtension {
  if (!obj || typeof obj !== 'object') return false;

  const ext = obj as Partial<NetPadExtension>;

  return (
    typeof ext.metadata?.id === 'string' &&
    typeof ext.metadata?.name === 'string' &&
    typeof ext.metadata?.version === 'string' &&
    Array.isArray(ext.features)
  );
}
```

---

## Error Handling

### Standard Error Response

```typescript
interface ErrorResponse {
  success: false;
  error: string;
  code?: string;
  details?: unknown;
}

function errorResponse(
  message: string,
  status: number = 500,
  code?: string
): NextResponse<ErrorResponse> {
  return NextResponse.json(
    { success: false, error: message, code },
    { status }
  );
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `UNAUTHORIZED` | 401 | Missing or invalid authentication |
| `FORBIDDEN` | 403 | Authenticated but not allowed |
| `NOT_FOUND` | 404 | Resource not found |
| `VALIDATION_ERROR` | 400 | Invalid input data |
| `RATE_LIMITED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |
| `FEATURE_UNAVAILABLE` | 400 | Required feature not loaded |

---

## Workflow Node Types

### WorkflowNodeDefinition

Defines a custom workflow node for the palette and execution.

```typescript
interface WorkflowNodeDefinition {
  /** Unique node type identifier (e.g., 'custom:my-node') */
  type: string;

  /** Display label in palette */
  label: string;

  /** Description shown in tooltip */
  description: string;

  /** Category for grouping in palette */
  category: NodeCategory;

  /** Node color in hex format */
  color: string;

  /** MUI icon name */
  icon: string;

  /** Configuration fields for the node settings panel */
  configFields?: NodeConfigField[];

  /** Output handles (defaults to single 'output' handle) */
  outputs?: NodeOutput[];

  /** Whether this node supports multiple inputs */
  multipleInputs?: boolean;

  /** Extension that provides this node */
  providedBy: string;

  /** Version of the node definition */
  version: string;

  /** Documentation URL */
  docsUrl?: string;
}
```

### NodeConfigField

Defines a configuration field for node settings.

```typescript
interface NodeConfigField {
  /** Field name (key in config object) */
  name: string;

  /** Display label */
  label: string;

  /** Field type */
  type: 'text' | 'textarea' | 'number' | 'boolean' | 'select' | 'json' | 'connection' | 'expression';

  /** Default value */
  defaultValue?: unknown;

  /** Placeholder text */
  placeholder?: string;

  /** Help text shown below field */
  helpText?: string;

  /** Whether field is required */
  required?: boolean;

  /** Options for select fields */
  options?: Array<{ label: string; value: string }>;

  /** Validation rules */
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}
```

### NodeOutput

Defines an output handle for a node.

```typescript
interface NodeOutput {
  /** Output handle ID */
  id: string;

  /** Display label */
  label: string;

  /** Description of what this output contains */
  description?: string;

  /** Whether this is the default/primary output */
  primary?: boolean;
}
```

### NodeHandler

The function that executes when the node runs in a workflow.

```typescript
type NodeHandler = (context: NodeExecutionContext) => Promise<NodeExecutionResult>;
```

### NodeExecutionContext

Context passed to node handlers during execution.

```typescript
interface NodeExecutionContext {
  /** ID of the current node instance */
  nodeId: string;

  /** Type of the node */
  nodeType: string;

  /** Raw node configuration */
  config: Record<string, unknown>;

  /** Configuration with template variables resolved */
  resolvedConfig: Record<string, unknown>;

  /** Data from previous nodes */
  inputs: Record<string, unknown>;

  /** Information about the workflow trigger */
  trigger: {
    type: string;
    payload?: Record<string, unknown>;
  };

  /** Get a decrypted connection from the vault */
  getConnection: (vaultId: string) => Promise<{
    connectionString: string;
    database: string;
  } | null>;

  /** Get email credentials from the integration vault */
  getEmailCredentials: (credentialId: string) => Promise<unknown>;
}
```

### NodeExecutionResult

Result returned by a node handler.

```typescript
interface NodeExecutionResult {
  /** Whether the node executed successfully */
  success: boolean;

  /** Output data passed to downstream nodes */
  data: Record<string, unknown>;

  /** Error information if failed */
  error?: {
    code: string;
    message: string;
    retryable: boolean;
  };

  /** Execution metadata */
  metadata?: {
    durationMs?: number;
    bytesProcessed?: number;
  };
}
```

### ExtensionWorkflowNode

The structure for registering a workflow node in an extension.

```typescript
interface ExtensionWorkflowNode {
  /** Node definition for UI */
  definition: Omit<WorkflowNodeDefinition, 'providedBy'>;

  /** Node execution handler */
  handler: NodeHandler;
}
```

---

## Workflow Node Registry Functions

### registerExtensionNode

Registers a custom workflow node from an extension.

```typescript
function registerExtensionNode(
  definition: WorkflowNodeDefinition,
  handler: NodeHandler,
  extensionId: string
): void
```

### getExtensionNodeDefinitions

Returns all extension-provided node definitions.

```typescript
function getExtensionNodeDefinitions(): WorkflowNodeDefinition[]
```

### getExtensionNodesByCategory

Returns extension nodes filtered by category.

```typescript
function getExtensionNodesByCategory(
  category: NodeCategory
): WorkflowNodeDefinition[]
```

### isExtensionNode

Checks if a node type is provided by an extension.

```typescript
function isExtensionNode(nodeType: string): boolean
```

---

## Next Steps

- [Building Extensions](./building-extensions) - Step-by-step tutorial
- [Example: Collaborate Extension](./example-collaborate) - Real-world walkthrough
- [Extension Architecture](./architecture) - System internals
