# Submissions API

API endpoints for managing form submissions.

## List Submissions

Retrieve all submissions for a form.

```http
GET /api/v1/forms/:formId/submissions
```

**Required Permission:** `submissions:read`

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Page number |
| `pageSize` | number | 20 | Items per page (max 100) |
| `startDate` | ISO date | - | Filter submissions after this date |
| `endDate` | ISO date | - | Filter submissions before this date |

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/v1/forms/contact-form/submissions?page=1&pageSize=50" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "sub_xyz789",
      "formId": "form_abc123",
      "data": {
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Hello!"
      },
      "metadata": {
        "submittedAt": "2024-01-20T14:30:00.000Z",
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0...",
        "referrer": "https://example.com"
      }
    }
  ],
  "pagination": {
    "total": 42,
    "page": 1,
    "pageSize": 50,
    "totalPages": 1,
    "hasMore": false
  },
  "requestId": "req_abc123"
}
```

## Get Submission

Retrieve a single submission.

```http
GET /api/v1/forms/:formId/submissions/:submissionId
```

**Required Permission:** `submissions:read`

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/v1/forms/contact-form/submissions/sub_xyz789" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "id": "sub_xyz789",
    "formId": "form_abc123",
    "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello!"
    },
    "metadata": {
      "submittedAt": "2024-01-20T14:30:00.000Z",
      "ipAddress": "192.168.1.1",
      "userAgent": "Mozilla/5.0...",
      "referrer": "https://example.com"
    }
  },
  "requestId": "req_abc123"
}
```

## Create Submission

Submit data to a form programmatically.

```http
POST /api/v1/forms/:formId/submissions
```

**Required Permission:** `submissions:write`

**Request Body:**

```json
{
  "data": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "I have a question about your product."
  },
  "metadata": {
    "referrer": "https://myapp.com/contact",
    "customFields": {
      "source": "mobile-app",
      "version": "2.1.0"
    }
  }
}
```

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/v1/forms/contact-form/submissions" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "message": "Hello from the API!"
    }
  }'
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "submissionId": "sub_new123",
    "formId": "form_abc123",
    "submittedAt": "2024-01-20T16:45:00.000Z"
  },
  "requestId": "req_abc123"
}
```

:::note
The form must be published to accept submissions with a `live` API key. Use a `test` API key to submit to unpublished forms during development.
:::

## Delete Submission

Delete a submission.

```http
DELETE /api/v1/forms/:formId/submissions/:submissionId
```

**Required Permission:** `submissions:delete`

**Example Request:**

```bash
curl -X DELETE "https://your-domain.com/api/v1/forms/contact-form/submissions/sub_xyz789" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "deleted": true,
    "submissionId": "sub_xyz789"
  },
  "requestId": "req_abc123"
}
```

## Filter by Date Range

You can filter submissions by date range using the `startDate` and `endDate` parameters.

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/v1/forms/contact-form/submissions?startDate=2024-01-01&endDate=2024-01-31" \
  -H "Authorization: Bearer np_live_your_api_key"
```

## Code Examples

### JavaScript/Node.js

```javascript
const API_KEY = 'np_live_your_api_key';
const BASE_URL = 'https://your-domain.com/api/v1';

// List submissions
async function listSubmissions(formId) {
  const response = await fetch(`${BASE_URL}/forms/${formId}/submissions`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.json();
}

// Submit to a form
async function submitForm(formId, data) {
  const response = await fetch(`${BASE_URL}/forms/${formId}/submissions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });
  return response.json();
}

// Usage
const submissions = await listSubmissions('contact-form');
console.log(submissions.data);

const result = await submitForm('contact-form', {
  name: 'API User',
  email: 'api@example.com',
});
console.log(result.data.submissionId);
```

### Python

```python
import requests

API_KEY = 'np_live_your_api_key'
BASE_URL = 'https://your-domain.com/api/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json',
}

# List submissions
response = requests.get(
    f'{BASE_URL}/forms/contact-form/submissions',
    headers=headers
)
submissions = response.json()
print(submissions['data'])

# Submit to a form
submission_data = {
    'data': {
        'name': 'API User',
        'email': 'api@example.com',
    }
}
response = requests.post(
    f'{BASE_URL}/forms/contact-form/submissions',
    headers=headers,
    json=submission_data,
)
result = response.json()
print(result['data']['submissionId'])
```

## Related

- [API Overview](./overview.md)
- [Forms API](./forms.md)
- [Webhooks](./webhooks.md)
