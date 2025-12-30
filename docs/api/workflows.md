# Workflows API

API endpoints for managing workflows and executions.

## List Workflows

```http
GET /api/workflows?orgId=org_123
```

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
  "currentNodeId": null,
  "completedNodes": ["node_1", "node_2"],
  "context": {
    "nodeOutputs": {...}
  }
}
```
