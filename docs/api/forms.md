# Forms API

API endpoints for managing forms.

## List Forms

Retrieve all forms in your organization.

```http
GET /api/v1/forms
```

**Required Permission:** `forms:read`

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Page number |
| `pageSize` | number | 20 | Items per page (max 100) |
| `status` | string | - | Filter by status: `draft` or `published` |

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/v1/forms?status=published&page=1&pageSize=10" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "form_abc123",
      "slug": "contact-form",
      "name": "Contact Form",
      "description": "Customer contact form",
      "status": "published",
      "responseCount": 42,
      "createdAt": "2024-01-15T10:00:00.000Z",
      "updatedAt": "2024-01-20T15:30:00.000Z",
      "publishedAt": "2024-01-16T09:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 5,
    "page": 1,
    "pageSize": 10,
    "totalPages": 1,
    "hasMore": false
  },
  "requestId": "req_abc123"
}
```

## Get Form

Retrieve a single form by ID or slug.

```http
GET /api/v1/forms/:formId
```

**Required Permission:** `forms:read`

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/v1/forms/contact-form" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "id": "form_abc123",
    "slug": "contact-form",
    "name": "Contact Form",
    "description": "Customer contact form",
    "status": "published",
    "responseCount": 42,
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2024-01-20T15:30:00.000Z",
    "publishedAt": "2024-01-16T09:00:00.000Z",
    "fields": [
      {
        "id": "field_1",
        "path": "name",
        "label": "Full Name",
        "type": "text",
        "required": true,
        "placeholder": "Enter your name"
      },
      {
        "id": "field_2",
        "path": "email",
        "label": "Email Address",
        "type": "email",
        "required": true,
        "validation": {
          "pattern": "^[^@]+@[^@]+\\.[^@]+$"
        }
      }
    ],
    "settings": {
      "submitButtonText": "Send Message",
      "successMessage": "Thank you for contacting us!"
    }
  },
  "requestId": "req_abc123"
}
```

## Create Form

Create a new form.

```http
POST /api/v1/forms
```

**Required Permission:** `forms:write`

**Request Body:**

```json
{
  "name": "Feedback Form",
  "description": "Collect customer feedback",
  "fields": [
    {
      "path": "rating",
      "label": "Rating",
      "type": "number",
      "required": true,
      "validation": {
        "min": 1,
        "max": 5
      }
    },
    {
      "path": "comments",
      "label": "Comments",
      "type": "textarea",
      "required": false,
      "placeholder": "Tell us more..."
    }
  ]
}
```

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/v1/forms" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Feedback Form",
    "description": "Collect customer feedback",
    "fields": [
      {
        "path": "rating",
        "label": "Rating",
        "type": "number",
        "required": true
      }
    ]
  }'
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "id": "form_new123",
    "slug": "feedback-form",
    "name": "Feedback Form",
    "status": "draft",
    "createdAt": "2024-01-20T16:00:00.000Z"
  },
  "requestId": "req_abc123"
}
```

## Update Form

Update an existing form.

```http
PATCH /api/v1/forms/:formId
```

**Required Permission:** `forms:write`

**Request Body:**

```json
{
  "name": "Updated Form Name",
  "description": "Updated description",
  "status": "published"
}
```

**Example Request:**

```bash
curl -X PATCH "https://your-domain.com/api/v1/forms/form_abc123" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Contact Form",
    "status": "published"
  }'
```

## Delete Form

Delete a form and all its submissions.

```http
DELETE /api/v1/forms/:formId
```

**Required Permission:** `forms:delete`

**Example Request:**

```bash
curl -X DELETE "https://your-domain.com/api/v1/forms/form_abc123" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "deleted": true,
    "formId": "form_abc123"
  },
  "requestId": "req_abc123"
}
```

:::warning
Deleting a form permanently removes all associated submissions. This action cannot be undone.
:::

## Field Types

Forms support the following field types:

| Type | Description |
|------|-------------|
| `text` | Single-line text input |
| `textarea` | Multi-line text input |
| `email` | Email address with validation |
| `number` | Numeric input |
| `phone` | Phone number input |
| `date` | Date picker |
| `datetime` | Date and time picker |
| `select` | Dropdown selection |
| `multiselect` | Multiple selection |
| `checkbox` | Single checkbox |
| `checkboxGroup` | Multiple checkboxes |
| `radio` | Radio button group |
| `file` | File upload |
| `signature` | Signature capture |
| `rating` | Star rating |

## Related

- [API Overview](./overview.md)
- [Submissions API](./submissions.md)
- [Forms Guide](../forms/overview.md)
