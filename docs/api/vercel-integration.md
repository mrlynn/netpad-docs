# Vercel Integration API

These endpoints support the Vercel Integration for automated deployment and configuration of NetPad instances.

## Get Environment Variables Template

Retrieve the environment variables needed for deployment, optionally pre-filled with organization data.

```http
GET /api/integrations/vercel/env
```

**Authentication:** Session authentication required

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organizationId` | string | No | Organization ID to get pre-filled values |

**Example Request (Template Only):**

```bash
curl -X GET "https://your-domain.com/api/integrations/vercel/env" \
  -H "Authorization: Bearer your_session_token"
```

**Example Response:**

```json
{
  "success": true,
  "envVars": {
    "MONGODB_URI": {
      "value": "",
      "description": "MongoDB connection string. Get from MongoDB Atlas.",
      "required": true
    },
    "MONGODB_DATABASE": {
      "value": "forms",
      "description": "Database name for NetPad data.",
      "required": true
    },
    "SESSION_SECRET": {
      "value": "auto-generated-64-char-hex",
      "description": "Secret key for session encryption. Auto-generated.",
      "required": true
    },
    "VAULT_ENCRYPTION_KEY": {
      "value": "auto-generated-base64-key",
      "description": "Key for vault encryption. Auto-generated.",
      "required": true
    },
    "NEXT_PUBLIC_APP_URL": {
      "value": "${VERCEL_URL}",
      "description": "Public URL of your app. Use ${VERCEL_URL} for auto-detection.",
      "required": true
    }
  }
}
```

---

## Push Environment Variables to Vercel Project

Push environment variables to a connected Vercel project.

```http
POST /api/integrations/vercel/env
```

**Authentication:** Session authentication and Vercel integration installed

**Request Body:**

```json
{
  "installationId": "oac_xxx",
  "projectId": "prj_xxx",
  "organizationId": "org_xxx"
}
```

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/integrations/vercel/env" \
  -H "Authorization: Bearer your_session_token" \
  -H "Content-Type: application/json" \
  -d '{
    "installationId": "oac_xxx",
    "projectId": "prj_xxx",
    "organizationId": "org_xxx"
  }'
```

**Example Response:**

```json
{
  "success": true,
  "message": "Environment variables configured successfully",
  "envVarsSet": [
    "MONGODB_URI",
    "MONGODB_DATABASE",
    "SESSION_SECRET",
    "VAULT_ENCRYPTION_KEY",
    "NEXT_PUBLIC_APP_URL",
    "APP_URL"
  ]
}
```

---

## Vercel OAuth Callback

Handle OAuth callback from Vercel Integration installation.

```http
GET /api/integrations/vercel/callback
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `code` | string | OAuth authorization code from Vercel |
| `configurationId` | string | Vercel configuration ID |
| `teamId` | string | Optional Vercel team ID |
| `next` | string | Redirect URL after installation |

:::note
This endpoint is called automatically by Vercel during integration installation. You typically won't call this directly.
:::

---

## Provision MongoDB Atlas Cluster

Provision a new MongoDB Atlas M0 cluster for Vercel deployments.

```http
POST /api/integrations/vercel/provision
```

**Authentication:** Session authentication required

**Request Body:**

```json
{
  "installationId": "oac_xxx",
  "organizationId": "org_xxx"
}
```

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/integrations/vercel/provision" \
  -H "Authorization: Bearer your_session_token" \
  -H "Content-Type: application/json" \
  -d '{
    "installationId": "oac_xxx",
    "organizationId": "org_xxx"
  }'
```

**Example Response:**

```json
{
  "success": true,
  "message": "MongoDB cluster provisioned successfully",
  "clusterName": "netpad-cluster-abc123",
  "database": "forms",
  "envVars": {
    "MONGODB_URI": "mongodb+srv://...",
    "MONGODB_DATABASE": "forms",
    "SESSION_SECRET": "auto-generated",
    "VAULT_ENCRYPTION_KEY": "auto-generated"
  }
}
```

---

## Integration Flow

The Vercel integration follows this flow:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   User clicks   │────>│  Vercel OAuth   │────>│   Callback to   │
│  "Add to Vercel"│     │   Authorization │     │    /callback    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Deployment    │<────│  Push env vars  │<────│  Configure      │
│    Complete     │     │  to Vercel      │     │  env vars       │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **User initiates**: Clicks "Deploy to Vercel" button
2. **OAuth flow**: User authorizes NetPad to access their Vercel account
3. **Callback**: Vercel redirects to `/api/integrations/vercel/callback`
4. **Configuration**: User configures environment variables
5. **Push**: Environment variables are pushed to the Vercel project
6. **Deploy**: Vercel builds and deploys the application

---

## Environment Variables Reference

The integration automatically configures these environment variables:

| Variable | Description | Auto-Generated |
|----------|-------------|----------------|
| `MONGODB_URI` | MongoDB connection string | No (user provides) |
| `MONGODB_DATABASE` | Database name | Yes (default: `forms`) |
| `SESSION_SECRET` | Session encryption key | Yes |
| `VAULT_ENCRYPTION_KEY` | Vault encryption key | Yes |
| `NEXT_PUBLIC_APP_URL` | Public application URL | Yes (uses `${VERCEL_URL}`) |
| `APP_URL` | Server-side application URL | Yes (uses `${VERCEL_URL}`) |

---

## Error Handling

### Common Errors

| Error Code | Description | Resolution |
|------------|-------------|------------|
| `INTEGRATION_NOT_INSTALLED` | Vercel integration not installed | Install the integration first |
| `INVALID_INSTALLATION_ID` | Installation ID not found | Verify the installation ID |
| `PERMISSION_DENIED` | Insufficient Vercel permissions | Re-authorize with correct scopes |
| `PROJECT_NOT_FOUND` | Vercel project not found | Verify project ID |
| `PROVISIONING_FAILED` | MongoDB provisioning failed | Check Atlas API credentials |

### Example Error Response

```json
{
  "success": false,
  "error": {
    "code": "INTEGRATION_NOT_INSTALLED",
    "message": "Vercel integration is not installed for this organization",
    "details": {
      "organizationId": "org_xxx"
    }
  }
}
```

---

## Related

- [Deploy to Vercel](../deployment/vercel.md) - Complete deployment guide
- [API Overview](./overview.md) - API authentication and basics
