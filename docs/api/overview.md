# API Overview

The NetPad API provides programmatic access to your forms and submissions. Use it to integrate NetPad with your applications, automate workflows, or build custom dashboards.

## Base URL

```
https://your-domain.com/api/v1
```

**Examples:**
- Self-hosted: `https://netpad.example.com/api/v1`
- Local development: `http://localhost:3000/api/v1`

## Authentication

All API requests require authentication using an API key. Include your API key in the `Authorization` header:

```
Authorization: Bearer np_live_your_api_key_here
```

### API Key Types

| Type | Prefix | Description |
|------|--------|-------------|
| Live | `np_live_` | For production use |
| Test | `np_test_` | For development/testing (can submit to unpublished forms) |

### Creating API Keys

1. Navigate to **Settings > API Keys** in the NetPad dashboard
2. Click **Create API Key**
3. Configure the key name, permissions, and expiration
4. Copy the key immediately - it won't be shown again

## Rate Limiting

API requests are rate limited to protect the service:

| Limit | Default |
|-------|---------|
| Per Hour | 1,000 requests |
| Per Day | 10,000 requests |

Rate limit headers are included in all responses:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1704067200
X-Request-Id: req_abc123
```

## Response Format

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "requestId": "req_abc123"
}
```

### Paginated Response

```json
{
  "success": true,
  "data": [ ... ],
  "pagination": {
    "total": 100,
    "page": 1,
    "pageSize": 20,
    "totalPages": 5,
    "hasMore": true
  },
  "requestId": "req_abc123"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "FORM_NOT_FOUND",
    "message": "Form not found",
    "details": {}
  },
  "requestId": "req_abc123"
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `UNAUTHORIZED` | 401 | Missing or invalid API key |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `FORM_NOT_FOUND` | 404 | Form does not exist |
| `SUBMISSION_NOT_FOUND` | 404 | Submission does not exist |
| `VALIDATION_ERROR` | 400 | Invalid request data |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

## Permissions

When creating an API key, you can assign the following permissions:

| Permission | Description |
|------------|-------------|
| `forms:read` | View form definitions and settings |
| `forms:write` | Create and update forms |
| `forms:delete` | Delete forms |
| `submissions:read` | View form submissions |
| `submissions:write` | Create new submissions |
| `submissions:delete` | Delete submissions |
| `analytics:read` | View analytics data |
| `webhooks:manage` | Configure webhooks |

## API Documentation

### API Playground

Test the NetPad API interactively in your browser:

```
/api-playground
```

The API Playground provides:
- Enter your API key and make live requests
- Select from all available endpoints
- Edit request URLs and JSON bodies
- View response status, headers, and body
- Track request history during your session
- Quick example buttons for common operations

### Interactive Documentation (Swagger UI)

View the full API documentation with a built-in testing interface:

```
/api/docs
```

This provides:
- Browse all endpoints with descriptions
- Try out API calls directly in the browser
- View request/response schemas
- Test authentication with your API key

### OpenAPI Specification

The complete OpenAPI 3.0 specification is available at:

```
GET /api/v1/openapi.json
```

You can use this specification with:
- **Postman**: Import the URL to auto-generate a complete collection
- **Code Generators**: Generate client SDKs in any language using `openapi-generator`
- **Swagger UI**: Host your own documentation instance
- **API Testing Tools**: Integrate with tools like Insomnia, Thunder Client, etc.

## Endpoints

- [Authentication](./authentication.md) - Auth endpoints
- [Forms](./forms.md) - Form management
- [Submissions](./submissions.md) - Form submissions
- [Webhooks](./webhooks.md) - Webhook events

## Webhooks (Coming Soon)

Configure webhooks to receive real-time notifications when events occur:

- `form.submission.created` - New submission received
- `form.submission.updated` - Submission modified
- `form.submission.deleted` - Submission deleted
- `form.published` - Form published
- `form.unpublished` - Form unpublished

## Support

- **Documentation:** [docs.netpad.io](https://docs.netpad.io)
- **API Status:** [status.netpad.io](https://status.netpad.io)
- **Contact:** support@netpad.io
