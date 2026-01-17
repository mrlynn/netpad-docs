# Applications API

The Applications API provides endpoints for managing NetPad applications, releases, and permissions.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/applications` | List all applications |
| **POST** | `/api/applications` | Create a new application |
| **GET** | `/api/applications/:id` | Get application details |
| **PUT** | `/api/applications/:id` | Update an application |
| **DELETE** | `/api/applications/:id` | Delete an application |
| **GET** | `/api/applications/:id/releases` | List application releases |
| **POST** | `/api/applications/:id/releases` | Create a new release |
| **GET** | `/api/applications/:id/permissions` | Get application permissions |
| **PUT** | `/api/applications/:id/permissions` | Update application permissions |

## List Applications

```http
GET /api/applications
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default: 1) |
| `pageSize` | number | Items per page (default: 20) |
| `search` | string | Search by name |
| `status` | string | Filter by status: `draft`, `published`, `archived` |

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/applications?status=published" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "app_abc123",
      "name": "Customer Portal",
      "description": "Customer self-service portal",
      "status": "published",
      "version": "1.2.0",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-20T14:45:00.000Z"
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "pageSize": 20,
    "totalPages": 1
  }
}
```

## Create Application

```http
POST /api/applications
```

**Request Body:**

```json
{
  "name": "My Application",
  "description": "Application description",
  "config": {
    "theme": "default",
    "features": ["forms", "workflows"]
  }
}
```

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/applications" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{"name": "My Application", "description": "A new application"}'
```

## Get Application

```http
GET /api/applications/:id
```

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/applications/app_abc123" \
  -H "Authorization: Bearer np_live_your_api_key"
```

## Update Application

```http
PUT /api/applications/:id
```

**Request Body:**

```json
{
  "name": "Updated Name",
  "description": "Updated description",
  "status": "published"
}
```

## Delete Application

```http
DELETE /api/applications/:id
```

:::warning
Deleting an application is irreversible. All associated data, releases, and configurations will be permanently removed.
:::

## Application Releases

### List Releases

```http
GET /api/applications/:id/releases
```

### Create Release

```http
POST /api/applications/:id/releases
```

**Request Body:**

```json
{
  "version": "1.3.0",
  "notes": "Release notes for this version",
  "changes": [
    "Added new dashboard widgets",
    "Fixed form submission bug"
  ]
}
```

## Permissions

### Get Permissions

```http
GET /api/applications/:id/permissions
```

### Update Permissions

```http
PUT /api/applications/:id/permissions
```

**Request Body:**

```json
{
  "public": false,
  "allowedOrganizations": ["org_123", "org_456"],
  "allowedUsers": ["user_789"]
}
```
