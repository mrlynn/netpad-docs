# npm Integration API

The npm Integration API provides endpoints for searching, installing, and syncing NetPad packages from npm.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/marketplace/npm/search` | Search npm for NetPad packages |
| **POST** | `/api/marketplace/npm/install` | Install a package from npm |
| **GET** | `/api/marketplace/npm/sync` | Get sync status |
| **POST** | `/api/marketplace/npm/sync` | Trigger manual sync |

## Search npm Packages

Search for NetPad-compatible packages on npm.

```http
GET /api/marketplace/npm/search
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | string | Search query |
| `page` | number | Page number (default: 1) |
| `pageSize` | number | Items per page (default: 20) |
| `scope` | string | npm scope filter (e.g., `@netpad`) |

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/marketplace/npm/search?query=customer-portal" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "name": "@netpad/customer-portal",
      "version": "1.2.3",
      "description": "Customer self-service portal for NetPad",
      "author": "NetPad Team",
      "keywords": ["netpad", "portal", "customer"],
      "repository": "https://github.com/netpad/customer-portal",
      "npmUrl": "https://www.npmjs.com/package/@netpad/customer-portal",
      "downloads": {
        "weekly": 450,
        "monthly": 1800
      },
      "publishedAt": "2024-01-10T08:30:00.000Z"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "pageSize": 20
  }
}
```

## Install from npm

Install a NetPad package directly from npm into your organization.

```http
POST /api/marketplace/npm/install
```

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `packageName` | string | Yes | npm package name |
| `version` | string | No | Version to install (default: `latest`) |
| `targetOrganization` | string | No | Organization to install to |

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/marketplace/npm/install" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "packageName": "@netpad/customer-portal",
    "version": "1.2.3"
  }'
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "installId": "inst_abc123",
    "packageName": "@netpad/customer-portal",
    "version": "1.2.3",
    "status": "installing",
    "applicationId": null
  }
}
```

## Get Sync Status

Check the status of npm package synchronization.

```http
GET /api/marketplace/npm/sync
```

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/marketplace/npm/sync" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "lastSync": "2024-01-20T06:00:00.000Z",
    "nextSync": "2024-01-20T12:00:00.000Z",
    "status": "idle",
    "packagesIndexed": 156,
    "syncInterval": "6h"
  }
}
```

## Trigger Manual Sync

Manually trigger a sync of npm packages.

```http
POST /api/marketplace/npm/sync
```

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `scope` | string | No | Limit sync to specific npm scope |
| `force` | boolean | No | Force re-sync all packages |

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/marketplace/npm/sync" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{"scope": "@netpad", "force": false}'
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "syncId": "sync_xyz789",
    "status": "started",
    "startedAt": "2024-01-20T14:30:00.000Z",
    "estimatedDuration": "2m"
  }
}
```

## Package Naming Convention

NetPad-compatible npm packages should follow these conventions:

- **Scoped packages**: `@netpad/*` or `@your-org/netpad-*`
- **Unscoped packages**: `netpad-*`

Packages must include a `netpad` field in their `package.json`:

```json
{
  "name": "@netpad/my-package",
  "version": "1.0.0",
  "netpad": {
    "type": "application",
    "category": "workflows",
    "minVersion": "2.0.0"
  }
}
```

## Related Documentation

- [Marketplace API](./marketplace.md) - Full marketplace documentation
- [Applications API](./applications.md) - Application management
