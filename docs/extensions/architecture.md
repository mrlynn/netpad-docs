---
sidebar_position: 2
title: Extension Architecture
description: Deep dive into NetPad's extension system internals
---

# Extension Architecture

This guide explains the internal architecture of NetPad's extension system, including how extensions are loaded, registered, and integrated with the core application.

## System Overview

```
┌────────────────────────────────────────────────────────────────────────┐
│                           NetPad Application                            │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐     │
│  │   Extension     │    │    Extension    │    │    Extension    │     │
│  │     Loader      │───▶│     Registry    │───▶│    Services     │     │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘     │
│          │                      │                      │                │
│          ▼                      ▼                      ▼                │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐     │
│  │   Environment   │    │  Feature Flags  │    │  Route Handler  │     │
│  │   Detection     │    │                 │    │                 │     │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘     │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

## Core Components

### Extension Loader (`src/lib/extensions/loader.ts`)

The loader is responsible for discovering and importing extension packages.

```typescript
// Loading process
async function loadExtensions(): Promise<void> {
  // 1. Load cloud extension if in cloud mode
  const cloudExtension = await loadCloudExtension();
  if (cloudExtension) registerExtension(cloudExtension);

  // 2. Load plugin extensions from NETPAD_EXTENSIONS
  const pluginExtensions = await loadPluginExtensions();
  for (const extension of pluginExtensions) {
    registerExtension(extension);
  }

  // 3. Initialize all registered extensions
  await initializeExtensions();
}
```

**Key functions:**

| Function | Description |
|----------|-------------|
| `loadExtensions()` | Main entry point, loads all extensions |
| `loadExtensionPackage(name)` | Dynamically imports an extension package |
| `extensionsLoaded()` | Returns true if extensions have been loaded |
| `waitForExtensions()` | Awaits extension loading completion |
| `resetLoader()` | Resets loader state (for testing) |

### Extension Registry (`src/lib/extensions/registry.ts`)

The registry maintains the state of all loaded extensions and provides access to their capabilities.

```typescript
// Registry state
interface ExtensionRegistryState {
  extensions: Map<string, NetPadExtension>;
  features: Set<ExtensionFeature>;
  initialized: boolean;
}

// Key operations
registerExtension(extension: NetPadExtension): void
initializeExtensions(): Promise<void>
getExtension(id: string): NetPadExtension | undefined
isFeatureAvailable(feature: ExtensionFeature): boolean
getExtensionRoutes(): ExtensionRoute[]
getExtensionMiddleware(): ExtensionMiddleware[]
getService<T>(extensionId: string, serviceName: string): T | undefined
```

### Extension Types (`src/lib/extensions/types.ts`)

Core type definitions for the extension system:

```typescript
/**
 * Main extension interface - all extensions must implement this
 */
export interface NetPadExtension {
  metadata: ExtensionMetadata;
  features: ExtensionFeature[];
  routes?: ExtensionRoute[];
  middleware?: ExtensionMiddleware[];
  services?: Record<string, unknown>;
  components?: Record<string, React.ComponentType>;
  initialize?: () => Promise<void>;
  cleanup?: () => Promise<void>;
}

/**
 * Extension metadata
 */
export interface ExtensionMetadata {
  id: string;           // Unique identifier
  name: string;         // Display name
  version: string;      // Semantic version
  description?: string; // Human-readable description
  author?: string;      // Package author
  homepage?: string;    // Documentation URL
}

/**
 * API route definition
 */
export interface ExtensionRoute {
  path: string;                                    // URL path
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  handler: (req: NextRequest, ctx?: RouteContext) => Promise<NextResponse>;
  middleware?: string[];  // Middleware IDs to apply
}

/**
 * Middleware definition
 */
export interface ExtensionMiddleware {
  id?: string;          // Optional identifier
  path: string;         // Path pattern to match
  handler: MiddlewareHandler;
  priority?: number;    // Execution order (lower = earlier)
}

/**
 * Feature flags
 */
export type ExtensionFeature =
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
  | `custom:${string}`;  // Custom features use this prefix
```

## Extension Lifecycle

### 1. Discovery Phase

Extensions are discovered through:

1. **Environment Variables** - `NETPAD_EXTENSIONS` contains comma-separated package names
2. **Cloud Mode Detection** - `NETPAD_CLOUD=true` triggers cloud extension loading
3. **Static Registration** - Known extensions are pre-registered in the loader

```typescript
// Known extension loaders (enables webpack static analysis)
const knownExtensionLoaders: Record<string, () => Promise<unknown>> = {
  '@netpad/cloud-features': () => import('@netpad/cloud-features').catch(() => null),
  '@netpad/collaborate': () => import('@netpad/collaborate').catch(() => null),
};
```

### 2. Loading Phase

Each extension package is dynamically imported and validated:

```typescript
async function loadExtensionPackage(packageName: string): Promise<NetPadExtension | null> {
  // Try known loaders first (for webpack compatibility)
  if (knownExtensionLoaders[packageName]) {
    const module = await knownExtensionLoaders[packageName]();
    // Extract extension from module exports
  }

  // Look for default export or named exports
  // - module.default
  // - module.extension
  // - module.{packageName}Extension
}
```

### 3. Registration Phase

Extensions are registered in the global registry:

```typescript
function registerExtension(extension: NetPadExtension): void {
  // Add to extensions map
  state.extensions.set(extension.metadata.id, extension);

  // Register features
  for (const feature of extension.features) {
    state.features.add(feature);
  }

  console.log(`[Extensions] Registered: ${extension.metadata.name} v${extension.metadata.version}`);
}
```

### 4. Initialization Phase

Each extension's `initialize()` hook is called:

```typescript
async function initializeExtensions(): Promise<void> {
  for (const [id, extension] of state.extensions) {
    if (extension.initialize) {
      await extension.initialize();
      console.log(`[Extensions] Initialized: ${id}`);
    }
  }
  state.initialized = true;
}
```

### 5. Runtime Phase

During runtime, the application accesses extension capabilities:

- **Routes** are matched via the catch-all handler at `/api/ext/[...path]`
- **Features** are checked via `isFeatureAvailable()`
- **Services** are accessed via `getService()`
- **Middleware** is applied based on path matching

### 6. Cleanup Phase

When the application shuts down or during hot reload:

```typescript
async function cleanupExtensions(): Promise<void> {
  for (const [id, extension] of state.extensions) {
    if (extension.cleanup) {
      await extension.cleanup();
    }
  }
}
```

## Route Handling

Extension routes are handled by a catch-all Next.js route:

```
src/app/api/ext/[...path]/route.ts
```

This handler:

1. Loads extensions if not already loaded
2. Extracts the path from the URL
3. Matches against registered routes
4. Applies any associated middleware
5. Invokes the route handler

```typescript
// Route matching
async function handleExtensionRoute(
  request: NextRequest,
  method: HttpMethod,
  pathParts: string[]
): Promise<NextResponse> {
  // Ensure extensions are loaded
  if (!extensionsLoaded()) {
    await loadExtensions();
  }

  // Build full path
  const fullPath = `/api/ext/${pathParts.join('/')}`;

  // Find matching route
  const routes = getExtensionRoutes();
  const matchingRoute = routes.find(
    route => route.method === method && route.path === fullPath
  );

  if (!matchingRoute) {
    return NextResponse.json(
      { error: 'Extension route not found', path: fullPath, method },
      { status: 404 }
    );
  }

  // Execute handler
  return await matchingRoute.handler(request, { params: { path: pathParts } });
}
```

## Feature Flag System

Features allow conditional functionality based on which extensions are loaded:

```typescript
// Check feature availability
function isFeatureAvailable(feature: ExtensionFeature): boolean {
  return state.features.has(feature);
}

// Get feature availability details
function getFeatureAvailability(feature: ExtensionFeature): {
  available: boolean;
  provider?: string;
  message?: string;
} {
  if (!state.features.has(feature)) {
    return {
      available: false,
      message: `Feature "${feature}" requires an extension that is not installed`,
    };
  }

  // Find which extension provides this feature
  for (const [id, extension] of state.extensions) {
    if (extension.features.includes(feature)) {
      return {
        available: true,
        provider: extension.metadata.name,
      };
    }
  }

  return { available: true };
}
```

### Using Features in Code

```typescript
// In API routes
import { isFeatureAvailable } from '@/lib/extensions/registry';

export async function POST(request: NextRequest) {
  if (!isFeatureAvailable('billing')) {
    return NextResponse.json(
      { error: 'Billing features are not available in this deployment' },
      { status: 400 }
    );
  }

  // Process billing request...
}

// In React components
function BillingSection() {
  const billingAvailable = isFeatureAvailable('billing');

  if (!billingAvailable) {
    return <SelfHostedBillingMessage />;
  }

  return <BillingDashboard />;
}
```

## Service Architecture

Extensions can expose services for shared functionality:

```typescript
// Define a service
interface MyService {
  doSomething(): Promise<void>;
  getSomething(): Promise<Data>;
}

// Register in extension
const myExtension: NetPadExtension = {
  // ...
  services: {
    myService: myServiceImplementation,
  },
};

// Access from other code
import { getService } from '@/lib/extensions/registry';

const myService = getService<MyService>('my-extension', 'myService');
if (myService) {
  await myService.doSomething();
}
```

## Middleware System

Extensions can provide middleware that processes requests:

```typescript
// Define middleware
const authMiddleware: ExtensionMiddleware = {
  id: 'my-extension:auth',
  path: '/api/ext/my-extension/*',
  priority: 10,  // Lower = runs earlier
  handler: async (request, next) => {
    // Verify authentication
    const token = request.headers.get('authorization');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Continue to next middleware or route handler
    return next(request);
  },
};
```

Middleware is executed in priority order:

```typescript
function getExtensionMiddleware(): ExtensionMiddleware[] {
  const allMiddleware: ExtensionMiddleware[] = [];

  for (const extension of state.extensions.values()) {
    if (extension.middleware) {
      allMiddleware.push(...extension.middleware);
    }
  }

  // Sort by priority (lower first)
  return allMiddleware.sort((a, b) => (a.priority ?? 100) - (b.priority ?? 100));
}
```

## Error Handling

Extensions are designed to fail gracefully:

```typescript
// Extension loading errors are caught
async function loadExtensionPackage(packageName: string) {
  try {
    // Attempt to load
  } catch (error) {
    // Log but don't crash
    console.error(`[Extensions] Error loading ${packageName}:`, error);
    return null;
  }
}

// Initialization errors are isolated
async function initializeExtensions() {
  for (const [id, extension] of state.extensions) {
    try {
      await extension.initialize?.();
    } catch (error) {
      console.error(`[Extensions] Failed to initialize ${id}:`, error);
      // Continue with other extensions
    }
  }
}
```

## Testing Extensions

The extension system provides testing utilities:

```typescript
import { resetRegistry } from '@/lib/extensions/registry';
import { resetLoader } from '@/lib/extensions/loader';

describe('My Extension', () => {
  beforeEach(() => {
    resetRegistry();
    resetLoader();
  });

  it('should register correctly', () => {
    registerExtension(myExtension);
    expect(getExtension('my-extension')).toBeDefined();
  });

  it('should provide features', () => {
    registerExtension(myExtension);
    expect(isFeatureAvailable('custom:my_feature')).toBe(true);
  });
});
```

## Next Steps

- [Building Extensions](./building-extensions) - Create your own extension
- [API Reference](./api-reference) - Complete API documentation
- [Example: Collaborate Extension](./example-collaborate) - Real-world walkthrough
