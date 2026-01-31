---
sidebar_position: 2
title: Public API (v1)
description: External API for forms and submissions
---

# Public API (v1)

The NetPad Public API allows external applications to create forms, submit data, and query submissions programmatically.

## Base URL

```
https://www.netpad.io/api/v1
```

For self-hosted instances:
```
https://your-domain.com/api/v1
```

## Authentication

All requests require an API key in the Authorization header:

```bash
curl -H "Authorization: Bearer np_live_xxx" \
  "https://www.netpad.io/api/v1/forms"
```

### API Key Types

| Type | Prefix | Usage |
|------|--------|-------|
| **Live** | `np_live_` | Production - published forms only |
| **Test** | `np_test_` | Development - can submit to draft forms |

### Getting an API Key

1. Go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Copy the key immediately (shown only once)

---

## Projects

Forms belong to projects. List projects to get the `projectId` needed for creating forms.

### List Projects

```bash
GET /api/v1/projects
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "projectId": "proj_xxx",
      "name": "General",
      "slug": "general",
      "description": "Default project",
      "organizationId": "org_xxx",
      "createdAt": "2026-01-01T00:00:00.000Z"
    }
  ]
}
```

---

## Forms

### List Forms

```bash
GET /api/v1/forms
GET /api/v1/forms?status=published
GET /api/v1/forms?search=contact&pageSize=50
```

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `page` | int | 1 | Page number |
| `pageSize` | int | 20 | Items per page (max 100) |
| `status` | string | - | `draft` or `published` |
| `search` | string | - | Search name/description |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "frm_xxx",
      "slug": "contact-form",
      "name": "Contact Form",
      "status": "published",
      "responseCount": 42,
      "createdAt": "2026-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "pageSize": 20,
    "hasMore": true
  }
}
```

### Get Form

```bash
GET /api/v1/forms/{formId}
```

Returns full form details including fields.

### Create Form

```bash
POST /api/v1/forms
Content-Type: application/json

{
  "name": "Contact Form",
  "description": "Simple contact form",
  "projectId": "proj_xxx",
  "slug": "contact-form",
  "fields": [
    {
      "path": "name",
      "label": "Your Name",
      "type": "text",
      "required": true
    },
    {
      "path": "email",
      "label": "Email Address",
      "type": "email",
      "required": true
    },
    {
      "path": "message",
      "label": "Message",
      "type": "textarea",
      "placeholder": "How can we help?"
    }
  ]
}
```

:::note
Forms are created as `draft`. Use PATCH to publish.
:::

### Update Form

```bash
PATCH /api/v1/forms/{formId}
Content-Type: application/json

{
  "name": "Updated Name",
  "status": "published",
  "fields": [...]
}
```

### Delete Form

```bash
DELETE /api/v1/forms/{formId}
```

:::warning
Deleting a form also deletes all its submissions.
:::

---

## Field Types

| Type | Description | Validation Options |
|------|-------------|-------------------|
| `text` | Single line text | minLength, maxLength, pattern |
| `email` | Email address | Built-in validation |
| `phone` | Phone number | Built-in validation |
| `number` | Numeric input | min, max |
| `date` | Date picker | - |
| `select` | Dropdown | options: [{value, label}] |
| `checkbox` | Boolean | - |
| `textarea` | Multi-line text | minLength, maxLength |
| `file` | File upload | - |

### Field Schema

```json
{
  "path": "fieldName",
  "label": "Display Label",
  "type": "text",
  "required": true,
  "placeholder": "Hint text",
  "helpText": "Additional guidance",
  "options": [
    {"value": "opt1", "label": "Option 1"},
    {"value": "opt2", "label": "Option 2"}
  ],
  "validation": {
    "minLength": 1,
    "maxLength": 500,
    "pattern": "^[A-Z].*",
    "min": 0,
    "max": 100
  }
}
```

---

## Submissions

### List Submissions

```bash
GET /api/v1/forms/{formId}/submissions
GET /api/v1/forms/{formId}/submissions?pageSize=100&sortOrder=asc
```

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `page` | int | 1 | Page number |
| `pageSize` | int | 20 | Items per page (max 100) |
| `startDate` | datetime | - | Filter after date |
| `endDate` | datetime | - | Filter before date |
| `sortBy` | string | submittedAt | Sort field |
| `sortOrder` | string | desc | `asc` or `desc` |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "sub_xxx",
      "formId": "frm_xxx",
      "data": {
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Hello!"
      },
      "metadata": {
        "submittedAt": "2026-01-15T12:00:00.000Z",
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0...",
        "referrer": "https://example.com"
      }
    }
  ],
  "pagination": {...}
}
```

### Create Submission

```bash
POST /api/v1/forms/{formId}/submissions
Content-Type: application/json

{
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello from the API!"
  },
  "metadata": {
    "referrer": "https://myapp.com",
    "customFields": {
      "campaign": "winter2026"
    }
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "submissionId": "sub_xxx",
    "formId": "frm_xxx",
    "submittedAt": "2026-01-15T12:00:00.000Z"
  }
}
```

### Get Submission

```bash
GET /api/v1/forms/{formId}/submissions/{submissionId}
```

### Delete Submission

```bash
DELETE /api/v1/forms/{formId}/submissions/{submissionId}
```

---

## System

### Health Check

```bash
GET /api/v1/health
```

```json
{
  "status": "healthy",
  "timestamp": "2026-01-15T12:00:00.000Z",
  "version": "1.0.0",
  "services": {
    "api": {"status": "up", "responseTime": 5},
    "database": {"status": "up", "responseTime": 12}
  }
}
```

---

## Rate Limits

| Limit | Default |
|-------|---------|
| Per Hour | 1,000 requests |
| Per Day | 10,000 requests |

**Headers:**
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1704067200
```

---

## Error Codes

| Code | HTTP | Description |
|------|------|-------------|
| `INVALID_API_KEY` | 401 | Missing or invalid API key |
| `FORBIDDEN` | 403 | No access to resource |
| `NOT_FOUND` | 404 | Resource doesn't exist |
| `VALIDATION_ERROR` | 400 | Invalid request body |
| `DUPLICATE_SLUG` | 409 | Slug already in use |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `FORM_NOT_PUBLISHED` | 400 | Form is draft (use test key) |

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "projectId is required",
    "details": {"field": "projectId"}
  },
  "requestId": "req_xxx"
}
```

---

## Examples

### Create and Publish a Form

```bash
# 1. Get project ID
PROJECT_ID=$(curl -s -H "Authorization: Bearer $NETPAD_API_KEY" \
  "https://www.netpad.io/api/v1/projects" | jq -r '.data[0].projectId')

# 2. Create form
FORM=$(curl -s -X POST -H "Authorization: Bearer $NETPAD_API_KEY" \
  -H "Content-Type: application/json" \
  "https://www.netpad.io/api/v1/forms" \
  -d "{\"name\":\"Feedback\",\"projectId\":\"$PROJECT_ID\",\"fields\":[{\"path\":\"rating\",\"label\":\"Rating\",\"type\":\"number\",\"validation\":{\"min\":1,\"max\":5}}]}")
FORM_ID=$(echo $FORM | jq -r '.data.id')

# 3. Publish
curl -X PATCH -H "Authorization: Bearer $NETPAD_API_KEY" \
  -H "Content-Type: application/json" \
  "https://www.netpad.io/api/v1/forms/$FORM_ID" \
  -d '{"status":"published"}'
```

### Export All Submissions

```bash
curl -H "Authorization: Bearer $NETPAD_API_KEY" \
  "https://www.netpad.io/api/v1/forms/{formId}/submissions?pageSize=1000" \
  | jq '.data[].data' > submissions.json
```

### Webhook-style Integration

```bash
# Submit data from your app
curl -X POST -H "Authorization: Bearer $NETPAD_API_KEY" \
  -H "Content-Type: application/json" \
  "https://www.netpad.io/api/v1/forms/contact-form/submissions" \
  -d '{
    "data": {
      "name": "'"$USER_NAME"'",
      "email": "'"$USER_EMAIL"'",
      "source": "mobile-app"
    }
  }'
```

---

## SDK & Tools

- **CLI Wrapper**: See [CLI documentation](/docs/developer/packages-cli) for `netpad.sh` helper script
- **OpenAPI Spec**: `GET /api/v1/openapi.json`
