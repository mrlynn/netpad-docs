---
sidebar_position: 5
title: "Example: Collaborate Extension"
description: A real-world walkthrough of the @netpad/collaborate extension
---

# Example: The Collaborate Extension

This guide walks through `@netpad/collaborate`, a real NetPad extension that provides community collaboration features. We'll examine its architecture, implementation patterns, and lessons learned.

## Overview

The collaborate extension provides:

- **Community Gallery** - Showcase of community-contributed forms, workflows, and integrations
- **Contributor Leaderboard** - Recognition for top contributors
- **Collaboration Applications** - System for soliciting and managing collaborator applications
- **Email Notifications** - Notifications for new submissions
- **React Components** - Pre-built UI components for custom pages

## Package Structure

```
packages/collaborate/
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── README.md
├── src/
│   ├── index.ts              # Main extension definition
│   ├── types/
│   │   └── index.ts          # Type definitions
│   └── components/
│       ├── index.ts          # Component exports
│       ├── GalleryGrid.tsx
│       ├── ContributorCard.tsx
│       ├── ContributorLeaderboard.tsx
│       └── CollaborateHero.tsx
└── dist/                     # Built output
```

## Type Definitions

The extension starts with clear type definitions:

```typescript
// src/types/index.ts

/**
 * Collaborator submission data
 */
export interface CollaboratorSubmission {
  submissionId: string;
  name: string;
  email: string;
  lane: 'product' | 'engineering' | 'integrations' | 'not_sure';
  shipped?: string;
  whyNetpad?: string;
  availability?: string;
  location?: string;
  workLinks?: string;
  submittedAt: Date;
  source: 'form' | 'conversational';
  status: 'pending' | 'reviewed' | 'contacted' | 'declined';
}

/**
 * Gallery item for community showcase
 */
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'template' | 'workflow' | 'integration' | 'app';
  author: {
    name: string;
    avatar?: string;
    githubUrl?: string;
  };
  thumbnailUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
  tags: string[];
  createdAt: Date;
  featured: boolean;
  views: number;
  likes: number;
}

/**
 * Contributor profile
 */
export interface Contributor {
  id: string;
  name: string;
  avatarUrl?: string;
  githubUsername?: string;
  contributions: number;
  contributionTypes: ('code' | 'docs' | 'templates' | 'workflows' | 'design')[];
  joinedAt: Date;
  bio?: string;
}
```

## Extension Configuration

The extension loads configuration from environment variables:

```typescript
// src/index.ts

interface CollaborateConfig {
  resendApiKey?: string;
  notificationEmail?: string;
  enabled: boolean;
}

let config: CollaborateConfig = {
  enabled: true,
};

// Called during initialization
function loadConfig(): void {
  config = {
    resendApiKey: process.env.RESEND_API_KEY,
    notificationEmail: process.env.COLLABORATE_NOTIFICATION_EMAIL || 'team@netpad.io',
    enabled: process.env.COLLABORATE_ENABLED !== 'false',
  };
}
```

## API Routes Implementation

### Gallery Endpoint

```typescript
/**
 * GET /api/ext/collaborate/gallery
 *
 * Returns community gallery items with optional filtering.
 */
async function handleGetGallery(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const category = searchParams.get('category') as GalleryItem['category'] | null;
  const featured = searchParams.get('featured') === 'true';
  const limit = parseInt(searchParams.get('limit') || '20');
  const offset = parseInt(searchParams.get('offset') || '0');

  try {
    // In production, this would query MongoDB
    const items = await collaborateService.getGalleryItems({
      category: category || undefined,
      featured: featured || undefined,
      limit,
      offset,
    });

    return NextResponse.json({
      success: true,
      items: items.items,
      total: items.total,
      pagination: { limit, offset },
    });
  } catch (error) {
    console.error('[Collaborate] Gallery error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
}
```

### Submission Endpoint

```typescript
/**
 * POST /api/ext/collaborate/submit
 *
 * Handles collaboration applications.
 */
async function handleSubmit(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'lane'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create submission
    const submissionId = `collab_${Date.now()}_${generateId()}`;

    const submission: CollaboratorSubmission = {
      submissionId,
      name: body.name,
      email: body.email,
      lane: body.lane,
      shipped: body.shipped,
      whyNetpad: body.whyNetpad,
      availability: body.availability,
      location: body.location,
      workLinks: body.workLinks,
      submittedAt: new Date(),
      source: body.conversationId ? 'conversational' : 'form',
      status: 'pending',
    };

    // Store submission (in production, save to MongoDB)
    await collaborateService.storeSubmission(submission);

    // Send notification asynchronously
    sendNotificationAsync(submission);

    return NextResponse.json({
      success: true,
      submissionId,
      message: 'Thank you for your interest! We will review your application shortly.',
    });
  } catch (error) {
    console.error('[Collaborate] Submit error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
```

### Email Notification

```typescript
/**
 * Sends email notification for new submissions.
 * Uses Resend API directly to avoid package dependencies.
 */
async function sendNotification(submission: CollaboratorSubmission): Promise<void> {
  if (!config.resendApiKey) {
    console.log('[Collaborate] No Resend API key, skipping notification');
    return;
  }

  const html = `
    <h2>New Collaborator Application</h2>
    <p><strong>Name:</strong> ${submission.name}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Lane:</strong> ${submission.lane}</p>
    <p><strong>What they've shipped:</strong> ${submission.shipped || 'Not provided'}</p>
    <p><strong>Why NetPad:</strong> ${submission.whyNetpad || 'Not provided'}</p>
    <p><strong>Availability:</strong> ${submission.availability || 'Not provided'}</p>
    <p><strong>Location:</strong> ${submission.location || 'Not provided'}</p>
    <p><strong>Source:</strong> ${submission.source}</p>
  `;

  // Use fetch directly to avoid resend package dependency
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'NetPad Collaborate <collaborate@netpad.io>',
      to: config.notificationEmail,
      subject: `New Collaborator: ${submission.name} (${submission.lane})`,
      html,
    }),
  });

  if (!response.ok) {
    console.error('[Collaborate] Failed to send notification:', await response.text());
  }
}
```

## Extension Definition

The complete extension definition ties everything together:

```typescript
export const collaborateExtension: NetPadExtension = {
  metadata: {
    id: 'netpad-collaborate',
    name: 'NetPad Collaborate',
    version: '1.0.0',
    description: 'Community collaboration features for NetPad',
    author: 'NetPad Team',
    homepage: 'https://docs.netpad.io/extensions/example-collaborate',
  },

  features: [
    'custom:collaborate',
    'custom:community_gallery',
    'custom:contributor_leaderboard',
  ],

  routes: [
    {
      path: '/api/ext/collaborate/gallery',
      method: 'GET',
      handler: handleGetGallery,
    },
    {
      path: '/api/ext/collaborate/contributors',
      method: 'GET',
      handler: handleGetContributors,
    },
    {
      path: '/api/ext/collaborate/submit',
      method: 'POST',
      handler: handleSubmit,
    },
    {
      path: '/api/ext/collaborate/notify',
      method: 'POST',
      handler: handleNotify,
    },
  ],

  services: {
    collaborate: collaborateService,
  },

  initialize: async () => {
    console.log('[Collaborate] Initializing...');
    loadConfig();
    console.log('[Collaborate] Extension initialized');
  },

  cleanup: async () => {
    console.log('[Collaborate] Cleaning up...');
  },
};

export default collaborateExtension;
```

## React Components

### GalleryGrid Component

The GalleryGrid component fetches and displays gallery items:

```tsx
// src/components/GalleryGrid.tsx
'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Skeleton,
  Alert,
} from '@mui/material';
import type { GalleryItem } from '../types';

export interface GalleryGridProps {
  /** API endpoint (defaults to /api/ext/collaborate/gallery) */
  endpoint?: string;
  /** Filter by category */
  category?: GalleryItem['category'];
  /** Only show featured items */
  featured?: boolean;
  /** Maximum items to display */
  limit?: number;
  /** Number of columns */
  columns?: 1 | 2 | 3 | 4;
  /** Callback when item is clicked */
  onItemClick?: (item: GalleryItem) => void;
}

export function GalleryGrid({
  endpoint = '/api/ext/collaborate/gallery',
  category,
  featured,
  limit = 12,
  columns = 3,
  onItemClick,
}: GalleryGridProps) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (category) params.set('category', category);
        if (featured) params.set('featured', 'true');
        if (limit) params.set('limit', String(limit));

        const response = await fetch(`${endpoint}?${params}`);
        const data = await response.json();

        if (data.success) {
          setItems(data.items);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to load gallery');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [endpoint, category, featured, limit]);

  if (loading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: limit }).map((_, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Skeleton variant="rectangular" height={200} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={12 / columns} key={item.id}>
          <Card
            onClick={() => onItemClick?.(item)}
            sx={{ cursor: onItemClick ? 'pointer' : 'default' }}
          >
            {item.thumbnailUrl && (
              <CardMedia
                component="img"
                height="180"
                image={item.thumbnailUrl}
                alt={item.title}
              />
            )}
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', gap: 0.5 }}>
                {item.tags.slice(0, 3).map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
```

### Component Exports

```typescript
// src/components/index.ts

export { GalleryGrid } from './GalleryGrid';
export type { GalleryGridProps } from './GalleryGrid';

export { ContributorCard } from './ContributorCard';
export type { ContributorCardProps } from './ContributorCard';

export { ContributorLeaderboard } from './ContributorLeaderboard';
export type { ContributorLeaderboardProps } from './ContributorLeaderboard';

export { CollaborateHero } from './CollaborateHero';
export type { CollaborateHeroProps } from './CollaborateHero';

// Component IDs for extension system
export const COLLABORATE_COMPONENTS = {
  GALLERY_GRID: 'collaborate:gallery',
  CONTRIBUTOR_CARD: 'collaborate:contributor',
  LEADERBOARD: 'collaborate:leaderboard',
  HERO: 'collaborate:hero',
} as const;
```

## Using the Extension

### Enable the Extension

```bash
# .env.local
NETPAD_EXTENSIONS=@netpad/collaborate
RESEND_API_KEY=re_xxxxx
COLLABORATE_NOTIFICATION_EMAIL=team@example.com
```

### Use Components in Pages

```tsx
// app/community/page.tsx
'use client';

import { Container, Typography } from '@mui/material';
import {
  CollaborateHero,
  GalleryGrid,
  ContributorLeaderboard,
} from '@netpad/collaborate/components';

export default function CommunityPage() {
  return (
    <Container>
      <CollaborateHero
        title="NetPad Community"
        subtitle="Discover forms, workflows, and integrations built by the community"
        ctaText="Contribute"
        ctaAction="/collaborate"
      />

      <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
        Featured Projects
      </Typography>
      <GalleryGrid featured={true} limit={6} />

      <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
        Top Contributors
      </Typography>
      <ContributorLeaderboard variant="podium" limit={10} />
    </Container>
  );
}
```

### Check Feature Availability

```typescript
import { isFeatureAvailable } from '@/lib/extensions/registry';

// In a component or API route
if (isFeatureAvailable('custom:community_gallery')) {
  // Show gallery features
}
```

## Build Configuration

The tsup configuration handles the dual entry points:

```typescript
// tsup.config.ts
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
  sourcemap: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
```

## Testing

```typescript
// tests/collaborate.test.ts
import { collaborateExtension } from '@netpad/collaborate';

describe('@netpad/collaborate', () => {
  it('should have correct metadata', () => {
    expect(collaborateExtension.metadata.id).toBe('netpad-collaborate');
    expect(collaborateExtension.metadata.version).toBe('1.0.0');
  });

  it('should declare custom features', () => {
    expect(collaborateExtension.features).toContain('custom:collaborate');
    expect(collaborateExtension.features).toContain('custom:community_gallery');
  });

  it('should define 4 routes', () => {
    expect(collaborateExtension.routes).toHaveLength(4);
  });

  it('should expose collaborate service', () => {
    expect(collaborateExtension.services?.collaborate).toBeDefined();
  });
});
```

## Lessons Learned

### 1. Avoid Package Dependencies in Handlers

The extension uses `fetch` directly for the Resend API instead of importing the `resend` package. This avoids dependency resolution issues when the extension is loaded dynamically.

```typescript
// Instead of: import { Resend } from 'resend';
// Use direct fetch to the API
const response = await fetch('https://api.resend.com/emails', { ... });
```

### 2. Namespace Everything

All routes, features, and component IDs use the `collaborate` prefix to avoid conflicts:

- Routes: `/api/ext/collaborate/*`
- Features: `custom:collaborate`, `custom:community_gallery`
- Component IDs: `collaborate:gallery`, `collaborate:hero`

### 3. Graceful Degradation

The extension checks for configuration before using features:

```typescript
if (!config.resendApiKey) {
  console.log('[Collaborate] No API key, skipping notification');
  return;
}
```

### 4. Separate Component Builds

Components are built to a separate entry point (`components/index`) so they can be imported independently:

```typescript
import { GalleryGrid } from '@netpad/collaborate/components';
```

### 5. Clear Loading States

Components handle loading, error, and empty states appropriately:

```tsx
if (loading) return <Skeleton />;
if (error) return <Alert severity="error">{error}</Alert>;
if (items.length === 0) return <EmptyState />;
```

## Summary

The collaborate extension demonstrates:

- ✅ Clean package structure with separate type definitions
- ✅ Multiple API routes with validation
- ✅ Environment-based configuration
- ✅ External API integration (Resend)
- ✅ Reusable React components
- ✅ Feature flags for capability detection
- ✅ Proper error handling
- ✅ Comprehensive testing

Use this as a template for building your own NetPad extensions!

## Related Documentation

- [Extensions Overview](./overview)
- [Extension Architecture](./architecture)
- [Building Extensions](./building-extensions)
- [API Reference](./api-reference)
