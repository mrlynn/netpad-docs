# API Overview

NetPad provides a REST API for programmatic access to forms, workflows, and data.

## Base URL

```
https://yourdomain.com/api
```

## Authentication

All API requests require authentication:
- **Session Cookie**: Use browser session
- **API Key**: (Future feature)

## Response Format

All responses are JSON:
```json
{
  "success": true,
  "data": {...}
}
```

## Error Handling

Errors return standard HTTP status codes:
- **200**: Success
- **400**: Bad Request
- **401**: Unauthorized
- **404**: Not Found
- **500**: Server Error

## Rate Limiting

- **1000 requests/hour** per user
- **Headers**: Rate limit info in response headers
- **429**: Too Many Requests if exceeded

## Endpoints

- [Authentication](./authentication.md) - Auth endpoints
- [Forms](./forms.md) - Form management
- [Workflows](./workflows.md) - Workflow management
- [Data](./data.md) - Data operations
- [Webhooks](./webhooks.md) - Webhook events
