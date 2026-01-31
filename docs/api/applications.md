# Applications API

The Applications API provides endpoints for managing NetPad applications, releases, permissions, and contracts. Applications are first-class entities that group related forms, workflows, and connections together.

## Endpoints Overview

### Application CRUD

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/applications` | List all applications |
| **POST** | `/api/applications` | Create a new application |
| **GET** | `/api/applications/:id` | Get application details |
| **PUT** | `/api/applications/:id` | Update an application |
| **DELETE** | `/api/applications/:id` | Delete an application |

### Releases

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/applications/:id/releases` | List application releases |
| **POST** | `/api/applications/:id/releases` | Create a new release |
| **GET** | `/api/applications/:id/releases/:releaseId` | Get release details |

### Permissions

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/applications/:id/permissions` | Get application permissions |
| **POST** | `/api/applications/:id/permissions` | Grant permission |
| **PATCH** | `/api/applications/:id/permissions/:permId` | Update permission |
| **DELETE** | `/api/applications/:id/permissions/:permId` | Revoke permission |

### Contracts

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/applications/:id/contracts` | List contracts |
| **POST** | `/api/applications/:id/contracts` | Create contract |
| **GET** | `/api/applications/:id/contracts/:contractId` | Get contract details |
| **PUT** | `/api/applications/:id/contracts/:contractId` | Update contract |
| **DELETE** | `/api/applications/:id/contracts/:contractId` | Delete contract |
| **POST** | `/api/applications/:id/contracts/:contractId/compare` | Compare contracts |

### Protection

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/applications/:id/components/:componentId/protect` | Protect component |
| **POST** | `/api/applications/:id/components/:componentId/unprotect` | Unprotect component |

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

### Grant Permission

```http
POST /api/applications/:id/permissions
```

**Request Body:**

```json
{
  "userId": "user_abc123",
  "role": "editor"
}
```

**Permission Roles:**

| Role | Capabilities |
|------|--------------|
| **owner** | Full control: edit, manage permissions, create releases, delete |
| **editor** | Edit application, create releases, cannot manage permissions |
| **analyst** | View application, analyze data, read-only access |
| **viewer** | Read-only access to application and its resources |

## Contracts

Application contracts define the public API surface of an application, enabling breaking change detection and version management.

### List Contracts

```http
GET /api/applications/:id/contracts
```

**Response:**

```json
{
  "success": true,
  "contracts": [
    {
      "id": "contract_abc123",
      "name": "Customer Portal API",
      "version": "1.0.0",
      "status": "active",
      "createdAt": "2024-01-15T10:00:00Z"
    }
  ]
}
```

### Create Contract

```http
POST /api/applications/:id/contracts
```

**Request Body:**

```json
{
  "name": "API Contract v1",
  "description": "Initial API contract",
  "inputs": [
    {
      "name": "customerId",
      "type": "string",
      "required": true,
      "description": "Customer identifier"
    }
  ],
  "outputs": [
    {
      "name": "customer",
      "type": "object",
      "description": "Customer data"
    }
  ],
  "sideEffects": ["Creates audit log entry"],
  "behaviors": ["Returns 404 if customer not found"]
}
```

**Contract Statuses:**

| Status | Description |
|--------|-------------|
| `draft` | Being developed, not enforced |
| `active` | Enforced, breaking changes require major version |
| `deprecated` | Marked for removal in future version |

### Compare Contracts

```http
POST /api/applications/:id/contracts/:contractId/compare
```

Compare two contract versions to identify breaking changes.

**Request Body:**

```json
{
  "compareToContractId": "contract_older123"
}
```

**Response:**

```json
{
  "success": true,
  "hasBreakingChanges": true,
  "changes": [
    {
      "type": "removed_input",
      "field": "legacyField",
      "impact": "breaking",
      "description": "Required input field was removed"
    },
    {
      "type": "added_output",
      "field": "newField",
      "impact": "non-breaking",
      "description": "New optional output field added"
    }
  ],
  "migrationGuide": "Remove usage of 'legacyField' parameter..."
}
```

## Component Protection

Protect forms and workflows from accidental modifications.

### Protect Component

```http
POST /api/applications/:id/components/:componentId/protect
```

**Request Body:**

```json
{
  "componentType": "form",
  "editableFields": ["theme", "description"],
  "reason": "Contract-locked, critical production form"
}
```

### Unprotect Component

```http
POST /api/applications/:id/components/:componentId/unprotect
```

**Request Body:**

```json
{
  "reason": "Unlocking for major version update"
}
```

## Application Stats

Get application statistics:

```http
GET /api/applications/:id/stats
```

**Response:**

```json
{
  "success": true,
  "stats": {
    "formsCount": 5,
    "workflowsCount": 3,
    "connectionsCount": 2,
    "releasesCount": 4,
    "totalSubmissions": 1250,
    "lastActivityAt": "2024-01-20T14:30:00Z"
  }
}
```

## Error Codes

| Code | Description |
|------|-------------|
| `APPLICATION_NOT_FOUND` | Application does not exist |
| `RELEASE_NOT_FOUND` | Release does not exist |
| `CONTRACT_NOT_FOUND` | Contract does not exist |
| `PERMISSION_DENIED` | Insufficient permissions |
| `BREAKING_CHANGE` | Contract violation, requires major version |
| `COMPONENT_PROTECTED` | Component is locked for editing |
