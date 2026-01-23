---
sidebar_position: 1
title: Extensions Overview
description: Learn about NetPad's extension system for adding custom features, routes, and services
---

# NetPad Extensions

NetPad's extension system allows you to add custom functionality to your NetPad installation through modular, independently deployable packages. Extensions can provide API routes, UI components, services, middleware, and more.

## What Are Extensions?

Extensions are npm packages that follow the `NetPadExtension` interface. They integrate seamlessly with NetPad's core functionality while remaining isolated and independently maintainable.

```
┌─────────────────────────────────────────────────────────────┐
│                     NetPad Core                              │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │  Extension  │  │  Extension  │  │  Extension  │  ...     │
│  │   (Cloud)   │  │(Collaborate)│  │  (Custom)   │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

## Extension Capabilities

Extensions can provide:

| Capability | Description |
|------------|-------------|
| **Routes** | Custom API endpoints under `/api/ext/{extension-name}/` |
| **Services** | Shared business logic accessible throughout the extension |
| **Middleware** | Request/response processing with priority ordering |
| **Components** | React UI components for use in pages |
| **Features** | Feature flags that enable/disable functionality |
| **Lifecycle Hooks** | Initialize and cleanup logic |

## Built-in Extensions

NetPad includes several built-in extensions:

### @netpad/cloud-features

The cloud features extension provides premium functionality for NetPad Cloud:

- **Billing & Subscriptions** - Stripe integration for payments
- **Atlas Provisioning** - Automatic MongoDB cluster creation
- **Premium AI Features** - Advanced RAG and AI capabilities
- **Usage Analytics** - Detailed usage tracking and reporting

### @netpad/collaborate

Community collaboration features:

- **Gallery** - Community showcase of forms, workflows, and integrations
- **Contributors** - Leaderboard and contributor profiles
- **Submissions** - Collaboration application system
- **UI Components** - Pre-built React components

### @netpad/demo-node

A beginner-friendly demonstration extension:

- **Log Message Node** - A simple workflow node for debugging
- **Extensively Commented** - Learn by reading the source code
- **Template Ready** - Copy and modify for your own extensions

See [Example: Demo Node Extension](./example-demo-node) for a complete walkthrough.

## Extension Architecture

Extensions follow a clear architectural pattern:

```typescript
// Extension structure
const myExtension: NetPadExtension = {
  metadata: {
    id: 'my-extension',
    name: 'My Extension',
    version: '1.0.0',
    description: 'Description of what this extension does',
  },

  // Features this extension provides
  features: ['custom:my_feature'],

  // API routes
  routes: [
    { path: '/api/ext/my-extension/data', method: 'GET', handler: handleGet },
    { path: '/api/ext/my-extension/data', method: 'POST', handler: handlePost },
  ],

  // Request middleware
  middleware: [
    { path: '/api/ext/my-extension/*', handler: authMiddleware, priority: 10 },
  ],

  // Shared services
  services: {
    myService: myServiceInstance,
  },

  // Lifecycle hooks
  initialize: async () => { /* Setup logic */ },
  cleanup: async () => { /* Cleanup logic */ },
};
```

## Quick Start

### 1. Enable an Extension

Add the extension package name to your `.env.local`:

```bash
# Enable single extension
NETPAD_EXTENSIONS=@netpad/collaborate

# Enable multiple extensions
NETPAD_EXTENSIONS=@netpad/collaborate,@myorg/custom-extension
```

### 2. Install the Package

```bash
npm install @netpad/collaborate
```

### 3. Restart NetPad

Extensions are loaded during application startup.

## Creating Custom Extensions

Ready to build your own extension? See the following guides:

- [Extension Architecture](./architecture) - Deep dive into extension internals
- [Building Extensions](./building-extensions) - Step-by-step tutorial
- [Workflow Node Extensions](./workflow-nodes) - Creating custom workflow nodes
- [API Reference](./api-reference) - Complete API documentation

### Examples

- [Example: Demo Node Extension](./example-demo-node) - **Start here!** Beginner-friendly walkthrough
- [Example: Collaborate Extension](./example-collaborate) - Production-ready example

## Extension Loading

Extensions are loaded in this order:

1. **Cloud Extension** - `@netpad/cloud-features` (if `NETPAD_CLOUD=true`)
2. **Plugin Extensions** - Packages listed in `NETPAD_EXTENSIONS`
3. **Programmatic Extensions** - Registered via `registerExtensionManually()`

Each extension goes through:
1. Package resolution and import
2. Registration in the extension registry
3. Initialization via the `initialize()` hook

## Feature Checking

Extensions can declare features that other parts of the application can check:

```typescript
import { isFeatureAvailable } from '@/lib/extensions/registry';

// Check if a feature is available
if (isFeatureAvailable('billing')) {
  // Show billing UI
}

// Custom extension features use the custom: prefix
if (isFeatureAvailable('custom:collaborate')) {
  // Show collaborate features
}
```

## Best Practices

1. **Use descriptive metadata** - Clear names and descriptions help users understand your extension
2. **Namespace your routes** - Always use `/api/ext/{your-extension}/` for routes
3. **Handle errors gracefully** - Extensions should not crash the main application
4. **Clean up resources** - Implement the `cleanup()` hook for proper teardown
5. **Document your extension** - Provide clear usage instructions and API documentation

## Next Steps

- [Example: Demo Node Extension](./example-demo-node) - **Best starting point** for beginners
- [Extension Architecture](./architecture) - Understand how extensions work internally
- [Building Extensions](./building-extensions) - Create your first extension
- [Workflow Node Extensions](./workflow-nodes) - Add custom workflow nodes
- [API Reference](./api-reference) - Complete API documentation
