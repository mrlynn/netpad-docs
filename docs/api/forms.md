# Forms API

API endpoints for managing forms and form submissions.

## List Forms

```http
GET /api/forms/list?orgId=org_123
```

**Response**:
```json
{
  "forms": [
    {
      "formId": "form_123",
      "name": "Contact Form",
      "published": true,
      "submissionCount": 42,
      "updatedAt": "2024-01-15T10:00:00Z"
    }
  ]
}
```

## Get Form

```http
GET /api/forms/[formId]
```

**Response**:
```json
{
  "formId": "form_123",
  "name": "Contact Form",
  "fields": [...],
  "settings": {...},
  "published": true
}
```

## Create Form

```http
POST /api/forms
Content-Type: application/json

{
  "name": "My Form",
  "fields": [...],
  "orgId": "org_123"
}
```

## Update Form

```http
PATCH /api/forms/[formId]
Content-Type: application/json

{
  "name": "Updated Name",
  "fields": [...]
}
```

## Delete Form

```http
DELETE /api/forms/[formId]
```

## Submit Form

```http
POST /api/forms/[formId]/submit
Content-Type: application/json

{
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response**:
```json
{
  "success": true,
  "submissionId": "sub_123"
}
```

## Get Form Responses

```http
GET /api/forms/[formId]/responses?page=1&limit=50
```

**Query Parameters**:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 50)
- `sortBy`: Sort field (default: "submittedAt")
- `sortOrder`: "asc" | "desc" (default: "desc")

## Get Form Analytics

```http
GET /api/forms/[formId]/analytics
```

**Response**:
```json
{
  "totalSubmissions": 150,
  "completionRate": 0.85,
  "submissionsByDate": [...],
  "fieldAnalytics": {...}
}
```

## Export Form Data

```http
POST /api/forms/[formId]/export?format=json
```

**Query Parameters**:
- `format`: "json" | "csv" (default: "json")
