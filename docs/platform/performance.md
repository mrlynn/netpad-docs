---
sidebar_position: 12
title: Performance Instrumentation
description: Monitor, measure, and optimize NetPad performance with built-in instrumentation
---

# Performance Instrumentation

NetPad includes comprehensive performance instrumentation to help you monitor API latency, database queries, client-side metrics, and system health. This guide covers how to enable, configure, and use these tools.

:::tip New in v4.14.0
Performance instrumentation was significantly enhanced in v4.14.0 with client-side collectors, query timing, and improved aggregation.
:::

## Overview

The performance system consists of four main components:

| Component | Purpose | Location |
|-----------|---------|----------|
| **API Metrics Middleware** | Track API request counts, latency, and status codes | Server-side |
| **Timing Instrumentation** | Detailed request timing with database query breakdowns | Server-side |
| **Performance Collector** | Client-side metric batching and transmission | Browser |
| **Observability Types** | Health monitoring, error tracking, and alerting | Platform-wide |

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Browser                           │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │ NavigationTimer  │  │ PerformanceCollector │                │
│  │  (Navigation)    │  │  (Batching & Flush)   │                │
│  └────────┬─────────┘  └────────┬─────────────┘                │
│           │                     │                               │
│           └──────────┬──────────┘                               │
│                      │ POST /api/telemetry/performance          │
└──────────────────────┼──────────────────────────────────────────┘
                       │
┌──────────────────────┼──────────────────────────────────────────┐
│                      ▼           Server                         │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              API Routes                               │      │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐  │      │
│  │  │ withTiming  │  │ withMetrics │  │ timedQuery   │  │      │
│  │  │  (Latency)  │  │  (Counts)   │  │ (DB timing)  │  │      │
│  │  └──────┬──────┘  └──────┬──────┘  └──────┬───────┘  │      │
│  └─────────┼────────────────┼────────────────┼──────────┘      │
│            │                │                │                  │
│            ▼                ▼                ▼                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              MongoDB Collections                      │      │
│  │  api_metrics_samples → api_metrics (hourly/daily)    │      │
│  └──────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘
```

## API Metrics Middleware

The metrics middleware automatically records request counts, latencies, and status codes for API endpoints.

### Enabling Metrics

Wrap your API route handlers with `withMetrics`:

```typescript
import { withMetrics } from '@/lib/api/metricsMiddleware';
import { NextRequest, NextResponse } from 'next/server';

async function handleGET(request: NextRequest) {
  // Your handler logic
  return NextResponse.json({ success: true });
}

// Export with metrics recording
export const GET = withMetrics(handleGET);
```

### Configuration Options

```typescript
export const GET = withMetrics(handler, {
  // Override the endpoint name (useful for dynamic routes)
  endpoint: '/api/forms/[id]',
  
  // Skip metrics recording for this route
  skip: false,
});
```

### Endpoint Normalization

Dynamic route segments are automatically normalized:

| Actual Path | Normalized Path |
|------------|-----------------|
| `/api/forms/abc123def456` | `/api/forms/[id]` |
| `/api/users/550e8400-e29b-41d4-a716-446655440000` | `/api/users/[id]` |
| `/api/orgs/my-org-id/forms` | `/api/orgs/[id]/forms` |

This ensures metrics are aggregated correctly across dynamic routes.

### Collected Metrics

For each request, the middleware records:

- **Endpoint** - Normalized API path
- **Method** - HTTP method (GET, POST, etc.)
- **Status Code** - Response status (200, 404, 500, etc.)
- **Latency** - Response time in milliseconds
- **Timestamp** - When the request occurred
- **User/Organization** - Optional context identifiers

## Timing Instrumentation

For detailed request analysis including database query breakdowns, use `withTiming`.

### Basic Usage

```typescript
import { withTiming } from '@/lib/performance/withTiming';

async function handleGET(request: NextRequest) {
  // Database queries are automatically tracked
  const data = await db.collection('forms').find({}).toArray();
  return NextResponse.json(data);
}

export const GET = withTiming(handleGET);
```

### Response Headers

Timed requests include performance headers:

```http
X-Response-Time: 145ms
Server-Timing: total;dur=145
```

### Query Tracking

Use `timedQuery` for detailed database operation tracking:

```typescript
import { timedQuery } from '@/lib/performance/timedQuery';

const results = await timedQuery(
  async () => {
    return db.collection('submissions')
      .find({ formId: id })
      .limit(100)
      .toArray();
  },
  {
    operation: 'find',
    collection: 'submissions',
    filter: { formId: id },
  }
);
```

### Timing Context

The timing context uses `AsyncLocalStorage` to track nested queries:

```typescript
import { 
  getCurrentTimingContext, 
  addQueryTiming 
} from '@/lib/performance/withTiming';

// Get current request context
const context = getCurrentTimingContext();
if (context) {
  console.log(`Route: ${context.route}`);
  console.log(`Queries so far: ${context.queries.length}`);
}

// Manually add a query timing
addQueryTiming({
  operation: 'aggregate',
  collection: 'analytics',
  duration: 45,
});
```

### Combining with Metrics

For routes using `withMetrics`, use `withTimingContext` to enable query tracking without duplicate logging:

```typescript
import { withMetrics } from '@/lib/api/metricsMiddleware';
import { withTimingContext } from '@/lib/performance/withTiming';

async function handler(request: NextRequest) {
  // Query timings are tracked
  const data = await timedQuery(
    () => db.collection('forms').findOne({ _id: id }),
    { operation: 'findOne', collection: 'forms' }
  );
  return NextResponse.json(data);
}

// Combine both middlewares
export const GET = withMetrics(withTimingContext(handler));
```

## Client-Side Performance Collector

The `PerformanceCollector` batches and transmits client-side metrics to the server.

### Metric Types

```typescript
// Navigation timing (page transitions)
interface NavigationMetric {
  type: 'navigation';
  from: string;
  to: string;
  duration: number;
  ttfb?: number;      // Time to First Byte
  fcp?: number;       // First Contentful Paint
  lcp?: number;       // Largest Contentful Paint
}

// Component render timing
interface RenderMetric {
  type: 'render';
  component: string;
  duration: number;
  renderCount?: number;
}

// Network request timing
interface NetworkMetric {
  type: 'network';
  url: string;
  method: string;
  duration: number;
  status: number;
  size?: number;
}

// Custom metrics
interface CustomMetric {
  type: 'custom';
  name: string;
  duration: number;
  metadata?: Record<string, unknown>;
}
```

### Recording Metrics

```typescript
import { performanceCollector } from '@/lib/performance/PerformanceCollector';

// Record a custom metric
performanceCollector.record({
  type: 'custom',
  name: 'form-submission',
  duration: 250,
  timestamp: Date.now(),
  metadata: { formId: 'abc123' },
});

// Use the timer helper
const stopTimer = performanceCollector.startTimer('my-operation');
await doExpensiveWork();
stopTimer(); // Automatically records the duration
```

### Configuration

```typescript
performanceCollector.configure({
  batchSize: 10,        // Flush after 10 metrics
  flushInterval: 5000,  // Flush every 5 seconds
  endpoint: '/api/telemetry/performance',
  enabled: true,
});

// Disable in tests
performanceCollector.disable();

// Re-enable
performanceCollector.enable();
```

### Automatic Behaviors

The collector automatically:
- **Batches metrics** - Reduces network requests
- **Flushes on unload** - Uses `sendBeacon` for reliability
- **Handles visibility changes** - Flushes when tab becomes hidden
- **Manages sessions** - Groups metrics by session ID

## Metrics Aggregation

Raw metrics are aggregated into hourly and daily summaries.

### Hourly Aggregation

Run periodically (every 5-10 minutes):

```typescript
import { aggregateHourlyMetrics } from '@/lib/api/metricsMiddleware';

const result = await aggregateHourlyMetrics();
// { period: "2026-01-31T14:00", endpointsProcessed: 42, samplesProcessed: 1250 }
```

### Daily Aggregation

Run once per day:

```typescript
import { aggregateDailyMetrics } from '@/lib/api/metricsMiddleware';

const result = await aggregateDailyMetrics(new Date());
// { period: "2026-01-31", endpointsProcessed: 85 }
```

### Aggregated Data Structure

```typescript
interface APIMetricAggregation {
  period: string;              // "2026-01-31T14:00" or "2026-01-31"
  periodType: 'hourly' | 'daily';
  totalRequests: number;
  totalErrors: number;
  avgLatencyMs: number;
  p95LatencyMs: number;
  endpoints: Record<string, EndpointMetrics>;
  createdAt: Date;
  updatedAt: Date;
}

interface EndpointMetrics {
  totalRequests: number;
  successCount: number;
  errorCount: number;
  avgLatencyMs: number;
  minLatencyMs: number;
  maxLatencyMs: number;
  p50LatencyMs: number;
  p95LatencyMs: number;
  p99LatencyMs: number;
  statusCodes: Record<number, number>;
  methods: Record<string, number>;
}
```

## Querying Metrics

### Get Metrics Summary

```typescript
import { getMetricsSummary } from '@/lib/api/metricsMiddleware';

const summary = await getMetricsSummary(24); // Last 24 hours

console.log(summary);
// {
//   totalRequests: 15000,
//   avgLatencyMs: 45.3,
//   p95LatencyMs: 180,
//   errorRate: 0.5,  // Percentage
//   topEndpoints: [...],
//   slowestEndpoints: [...],
//   statusCodeDistribution: { '2xx': 14500, '4xx': 400, '5xx': 100 },
//   requestsByHour: [...]
// }
```

### Get Raw Metrics

```typescript
import { getAPIMetrics } from '@/lib/api/metricsMiddleware';

const metrics = await getAPIMetrics({
  periodType: 'hourly',
  startDate: new Date('2026-01-30'),
  endDate: new Date('2026-01-31'),
  limit: 48,
});
```

## Performance Thresholds

Built-in thresholds for identifying performance issues:

```typescript
// From src/lib/performance/types.ts
export const SLOW_QUERY_THRESHOLD_MS = 100;      // DB queries
export const SLOW_API_THRESHOLD_MS = 1000;       // API endpoints
export const SLOW_NAVIGATION_THRESHOLD_MS = 500; // Page navigations
```

### Slow Query Logging

Queries exceeding the threshold are logged in development:

```
[Performance] ⚠️ Slow query: findOne on forms took 245ms
```

### Custom Thresholds

```typescript
import { timedQuery } from '@/lib/performance/timedQuery';

const result = await timedQuery(
  () => expensiveAggregation(),
  {
    operation: 'aggregate',
    collection: 'analytics',
    allowSlow: true,  // Suppress slow query warning
  }
);
```

## Observability Dashboard

The admin dashboard displays real-time performance metrics:

### API Metrics Section
- Total requests (24h)
- Average latency
- P95 latency
- Error rate
- Top endpoints by traffic
- Slowest endpoints by latency
- Requests by hour chart

### Endpoint Drilldown
- Status code distribution
- Latency percentiles (p50, p95, p99)
- Request methods breakdown
- Error trends

## Alerting Integration

Performance metrics integrate with the alerting system:

```typescript
// Example alert rules
const alertRules = [
  {
    metric: 'api_latency_p95',
    condition: { operator: 'gt', value: 500, unit: 'ms' },
    name: 'High API Latency',
  },
  {
    metric: 'error_rate',
    condition: { operator: 'gt', value: 5, unit: 'percent' },
    name: 'Elevated Error Rate',
  },
];
```

See [Alerting](/docs/platform/alerting) for configuration details.

## Best Practices

### 1. Use Appropriate Middleware

| Scenario | Middleware |
|----------|-----------|
| Production metrics only | `withMetrics` |
| Development debugging | `withTiming` |
| Both with query tracking | `withMetrics(withTimingContext(handler))` |

### 2. Monitor Key Endpoints

Prioritize instrumentation for:
- Form submission endpoints
- Authentication routes
- Frequently accessed API endpoints
- Endpoints with complex database queries

### 3. Set Up Aggregation Jobs

```typescript
// Example cron schedule
// Hourly aggregation: every 10 minutes
// Daily aggregation: once at midnight
```

### 4. Configure Alerts

Set alerts for:
- P95 latency > 500ms
- Error rate > 1%
- Database query time > 100ms

### 5. Review Periodically

Schedule weekly reviews of:
- Slowest endpoints
- Error trends
- Query performance
- Client-side metrics

## Database Collections

Performance data is stored in these collections:

| Collection | Purpose | TTL |
|------------|---------|-----|
| `api_metric_samples` | Raw request samples | 1 hour |
| `api_metrics` | Hourly aggregations | 30 days |
| `api_metrics` (daily) | Daily aggregations | 365 days |
| `performance_client` | Client-side metrics | 7 days |

## Related Documentation

- [System Status](/docs/platform/system-status) - Health monitoring
- [Alerting](/docs/platform/alerting) - Alert configuration
- [Error Tracking](/docs/platform/error-tracking) - Error monitoring
- [Admin Dashboard](/docs/platform/admin-dashboard) - Platform administration
