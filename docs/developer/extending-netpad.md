---
title: Extending NetPad
description: Build custom extensions to add features to NetPad
---

# Extending NetPad

NetPad's extension system allows you to add custom functionality through modular, independently deployable packages. Extensions can provide API routes, UI components, services, middleware, and more.

:::tip Looking for the full documentation?
The complete Extensions Developer Guide has moved to its own section:

- [Extensions Overview](/docs/extensions/overview) - Introduction to extensions
- [Extension Architecture](/docs/extensions/architecture) - System internals
- [Building Extensions](/docs/extensions/building-extensions) - Step-by-step tutorial
- [API Reference](/docs/extensions/api-reference) - Complete API docs
- [Example: Collaborate Extension](/docs/extensions/example-collaborate) - Real-world walkthrough
:::

## Quick Start

### 1. Create an Extension Package

```bash
mkdir -p packages/my-extension
cd packages/my-extension
npm init -y
```

### 2. Define Your Extension

```typescript
// src/index.ts
import { NextRequest, NextResponse } from 'next/server';

export const myExtension = {
  metadata: {
    id: 'my-extension',
    name: 'My Extension',
    version: '1.0.0',
  },
  features: ['custom:my_feature'],
  routes: [
    {
      path: '/api/ext/my-extension/hello',
      method: 'GET',
      handler: async () => NextResponse.json({ message: 'Hello!' }),
    },
  ],
  initialize: async () => {
    console.log('Extension initialized!');
  },
};

export default myExtension;
```

### 3. Enable the Extension

```bash
# .env.local
NETPAD_EXTENSIONS=@myorg/my-extension
```

### 4. Test It

```bash
curl http://localhost:3000/api/ext/my-extension/hello
# {"message":"Hello!"}
```

## Learn More

See the [Extensions documentation](/docs/extensions/overview) for complete guides on:

- Extension architecture and lifecycle
- Creating routes, middleware, and services
- Building React components
- Testing and publishing extensions
