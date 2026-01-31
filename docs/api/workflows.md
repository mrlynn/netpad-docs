# Workflows API

API endpoints for managing workflows and executions. NetPad provides a comprehensive workflow engine with 25+ node types for automating business processes.

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/workflows` | List all workflows |
| **POST** | `/api/workflows` | Create new workflow |
| **GET** | `/api/workflows/{id}` | Get workflow details |
| **PATCH** | `/api/workflows/{id}` | Update workflow |
| **DELETE** | `/api/workflows/{id}` | Delete workflow |
| **POST** | `/api/workflows/{id}/execute` | Execute workflow |
| **POST** | `/api/workflows/{id}/publish` | Publish workflow |
| **GET** | `/api/workflows/{id}/executions` | List executions |
| **GET** | `/api/executions/{id}` | Get execution details |
| **POST** | `/api/executions/{id}/cancel` | Cancel execution |
| **POST** | `/api/executions/{id}/retry` | Retry failed execution |

## List Workflows

```http
GET /api/workflows?orgId=org_123
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `orgId` | string | Required. Organization ID |
| `projectId` | string | Filter by project |
| `status` | string | Filter by status (draft, published, disabled) |
| `page` | number | Page number (default: 1) |
| `limit` | number | Items per page (default: 20, max: 100) |

**Response:**

```json
{
  "success": true,
  "workflows": [
    {
      "id": "wf_abc123",
      "name": "Form to Email",
      "description": "Send email on form submission",
      "status": "published",
      "lastExecutedAt": "2024-01-15T10:00:00Z",
      "executionCount": 156,
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-10T00:00:00Z"
    }
  ],
  "total": 25,
  "page": 1,
  "pageSize": 20
}

## Get Workflow

```http
GET /api/workflows/[workflowId]
```

## Create Workflow

```http
POST /api/workflows
Content-Type: application/json

{
  "name": "My Workflow",
  "canvas": {
    "nodes": [...],
    "edges": [...]
  },
  "orgId": "org_123"
}
```

## Update Workflow

```http
PATCH /api/workflows/[workflowId]
Content-Type: application/json

{
  "name": "Updated Name",
  "canvas": {...}
}
```

## Delete Workflow

```http
DELETE /api/workflows/[workflowId]
```

## Execute Workflow

```http
POST /api/workflows/[workflowId]/execute
Content-Type: application/json

{
  "input": {
    "data": {...}
  }
}
```

## Get Workflow Executions

```http
GET /api/workflows/[workflowId]/executions?page=1&limit=50
```

## Get Execution Details

```http
GET /api/executions/[executionId]
```

**Response**:
```json
{
  "executionId": "exec_123",
  "status": "completed",
  "startedAt": "2024-01-15T10:00:00Z",
  "completedAt": "2024-01-15T10:00:02Z",
  "durationMs": 2000,
  "currentNodeId": null,
  "completedNodes": ["node_1", "node_2"],
  "context": {
    "nodeOutputs": {...}
  }
}
```

## Cancel Execution

```http
POST /api/executions/[executionId]/cancel
```

Cancel a running workflow execution.

**Response**:
```json
{
  "success": true,
  "executionId": "exec_123",
  "status": "cancelled"
}
```

## Retry Execution

```http
POST /api/executions/[executionId]/retry
```

Retry a failed workflow execution.

**Request Body (optional)**:
```json
{
  "fromNode": "node_id_to_start_from"
}
```

**Response**:
```json
{
  "success": true,
  "newExecutionId": "exec_456",
  "status": "running"
}
```

## Publish Workflow

```http
POST /api/workflows/[workflowId]/publish
```

Publish a draft workflow to make it active.

**Response**:
```json
{
  "success": true,
  "workflowId": "wf_abc123",
  "status": "published",
  "version": 2
}
```

## Execution Status Values

| Status | Description |
|--------|-------------|
| `pending` | Waiting to start |
| `running` | Currently executing |
| `completed` | Successfully finished |
| `failed` | Execution failed |
| `cancelled` | Manually cancelled |
| `timeout` | Exceeded timeout limit |

## Workflow Limits

Workflow limits depend on your subscription tier:

| Tier | Executions/Month | Active Workflows |
|------|------------------|------------------|
| **Free** | 50 | 1 |
| **Pro** | 500 | 5 |
| **Team** | 5,000 | 25 |
| **Enterprise** | Unlimited | Unlimited |

## Error Codes

| Code | Description |
|------|-------------|
| `WORKFLOW_NOT_FOUND` | Workflow does not exist |
| `EXECUTION_NOT_FOUND` | Execution does not exist |
| `WORKFLOW_DISABLED` | Workflow is disabled |
| `EXECUTION_LIMIT_REACHED` | Monthly execution limit reached |
| `WORKFLOW_LIMIT_REACHED` | Active workflow limit reached |
| `INVALID_INPUT` | Invalid execution input data |

## Webhook Trigger URL

When using a webhook trigger, the generated URL format is:

```
https://your-domain.com/api/workflows/webhook/[workflowId]/[triggerId]
```

Send a POST request to this URL to trigger the workflow.
