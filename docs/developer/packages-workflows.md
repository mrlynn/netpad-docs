# @netpad/workflows

Type-safe TypeScript client for programmatically triggering and managing NetPad workflows from your applications. Enable external systems, CI/CD pipelines, and server-side code to execute workflows, monitor execution status, and retrieve results.

## Installation

```bash
npm install @netpad/workflows
# or
yarn add @netpad/workflows
# or
pnpm add @netpad/workflows
```

## Quick Start

```typescript
import { createNetPadWorkflowClient } from '@netpad/workflows';

const client = createNetPadWorkflowClient({
  baseUrl: 'https://your-netpad-instance.com',
  apiKey: 'np_live_xxx'
});

// Execute a workflow
const execution = await client.executeWorkflow('workflow-id', {
  variables: { userId: 123, action: 'process' }
});

// Wait for completion
const result = await client.waitForExecution(execution.executionId);
console.log(result.status, result.outputs);
```

## Client Configuration

```typescript
interface WorkflowClientConfig {
  baseUrl: string;        // Your NetPad instance URL
  apiKey: string;        // Your API key (np_live_xxx or np_test_xxx)
  timeout?: number;      // Request timeout in ms (default: 30000)
  retries?: number;      // Number of retries on failure (default: 3)
}
```

## Workflow Management

### List Workflows

```typescript
// List all workflows
const workflows = await client.listWorkflows();

// List with filtering and pagination
const workflows = await client.listWorkflows({
  status: 'active',
  page: 1,
  pageSize: 20
});
```

### Get Workflow Details

```typescript
const workflow = await client.getWorkflow('workflow-id');
console.log(workflow.name, workflow.status, workflow.nodeCount);
```

### Create Workflow

```typescript
const newWorkflow = await client.createWorkflow({
  name: 'My Workflow',
  description: 'Processes customer orders',
  nodes: [/* workflow nodes */],
  edges: [/* workflow edges */]
});
```

### Update Workflow

```typescript
await client.updateWorkflow('workflow-id', {
  name: 'Updated Workflow Name',
  // ... updated configuration
});
```

### Delete Workflow

```typescript
await client.deleteWorkflow('workflow-id');
```

### Activate/Pause Workflow

```typescript
// Activate a workflow
await client.activateWorkflow('workflow-id');

// Pause a workflow
await client.pauseWorkflow('workflow-id');

// Archive a workflow
await client.archiveWorkflow('workflow-id');
```

## Workflow Execution

### Execute Workflow

Start a workflow execution:

```typescript
const execution = await client.executeWorkflow('workflow-id', {
  variables: {
    email: 'user@example.com',
    orderId: '12345',
    action: 'process'
  }
});

console.log('Execution ID:', execution.executionId);
console.log('Status:', execution.status); // 'pending' | 'running'
```

### Execute and Wait Pattern

Start execution and wait for completion:

```typescript
// Start execution
const execution = await client.executeWorkflow('workflow-id', {
  variables: { email: 'user@example.com' }
});

// Wait for completion
const result = await client.waitForExecution(execution.executionId, {
  timeout: 300000,     // 5 minutes
  pollInterval: 2000   // Check every 2 seconds
});

if (result.status === 'completed') {
  console.log(result.context.outputs);
} else if (result.status === 'failed') {
  console.error(result.context.errors);
}
```

### Get Execution Status

```typescript
const status = await client.getExecutionStatus('execution-id');
console.log(status.status); // 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'
```

### Get Execution Details

```typescript
const execution = await client.getExecution('workflow-id', 'execution-id');
console.log(execution.status, execution.context, execution.outputs);
```

### List Executions

```typescript
// List all executions for a workflow
const executions = await client.listExecutions('workflow-id');

// List with filtering
const executions = await client.listExecutions('workflow-id', {
  status: 'completed',
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  page: 1,
  pageSize: 50
});
```

### Retry Execution

```typescript
await client.retryExecution('workflow-id', 'execution-id');
```

### Cancel Execution

```typescript
await client.cancelExecution('workflow-id', 'execution-id');
```

## Execution Status Values

- **`pending`** - Execution is queued but not started
- **`running`** - Execution is currently in progress
- **`paused`** - Execution is paused (waiting for input)
- **`completed`** - Execution finished successfully
- **`failed`** - Execution encountered an error
- **`cancelled`** - Execution was manually cancelled

## Polling for Completion

The `waitForExecution` method polls until completion:

```typescript
const result = await client.waitForExecution('execution-id', {
  timeout: 300000,        // Maximum time to wait (5 minutes)
  pollInterval: 2000,    // Poll every 2 seconds
  onProgress: (status) => {
    console.log('Progress:', status);
  }
});
```

## Error Handling

```typescript
import { NetPadWorkflowError } from '@netpad/workflows';

try {
  await client.executeWorkflow('workflow-id', {
    variables: {}
  });
} catch (error) {
  if (error instanceof NetPadWorkflowError) {
    if (error.status === 404) {
      console.error('Workflow not found');
    } else if (error.status === 429) {
      console.error('Rate limit exceeded, retry later');
    } else {
      console.error('Workflow error:', error.message);
      console.error('Error code:', error.code);
      console.error('Error details:', error.details);
    }
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## TypeScript Support

All types are exported for full type safety:

```typescript
import type {
  WorkflowDocument,
  WorkflowExecution,
  ExecutionStatus,
  WorkflowVariable,
  ExecuteWorkflowOptions,
  WorkflowClientConfig,
  WorkflowClient
} from '@netpad/workflows';

const client: WorkflowClient = createNetPadWorkflowClient({
  baseUrl: 'https://your-netpad-instance.com',
  apiKey: 'np_live_xxx'
});

const execution: WorkflowExecution = await client.executeWorkflow(
  'workflow-id',
  { variables: {} }
);

const status: ExecutionStatus = execution.status;
```

## Batch Execution

Execute multiple workflows in parallel:

```typescript
const users = [1, 2, 3, 4, 5];

const executions = await Promise.allSettled(
  users.map(userId =>
    client.executeWorkflow('onboarding-workflow', {
      variables: { userId }
    })
  )
);

executions.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`User ${users[index]} execution started:`, result.value.executionId);
  } else {
    console.error(`User ${users[index]} execution failed:`, result.reason);
  }
});
```

## Examples

### Order Processing Workflow

```typescript
import { createNetPadWorkflowClient } from '@netpad/workflows';

async function processOrder(orderData) {
  const client = createNetPadWorkflowClient({
    baseUrl: process.env.NEXT_PUBLIC_NETPAD_URL,
    apiKey: process.env.NETPAD_API_KEY
  });

  // Execute order processing workflow
  const execution = await client.executeWorkflow('order-processing', {
    variables: {
      order: orderData,
      customerId: orderData.customerId,
      total: orderData.total
    }
  });

  // Wait for completion
  const result = await client.waitForExecution(execution.executionId, {
    timeout: 300000, // 5 minutes
    pollInterval: 2000
  });

  if (result.status === 'completed') {
    return result.context.outputs;
  } else {
    throw new Error('Workflow failed');
  }
}
```

### Scheduled Workflow Execution

```typescript
// Execute workflow on a schedule (using cron or similar)
async function runScheduledWorkflow() {
  const client = createNetPadWorkflowClient({
    baseUrl: process.env.NETPAD_URL,
    apiKey: process.env.NETPAD_API_KEY
  });

  try {
    const execution = await client.executeWorkflow('daily-report', {
      variables: {
        date: new Date().toISOString().split('T')[0]
      }
    });

    console.log('Scheduled workflow started:', execution.executionId);
  } catch (error) {
    console.error('Failed to start scheduled workflow:', error);
  }
}
```

### Workflow with Error Recovery

```typescript
async function executeWithRetry(workflowId, variables, maxRetries = 3) {
  const client = createNetPadWorkflowClient({
    baseUrl: process.env.NETPAD_URL,
    apiKey: process.env.NETPAD_API_KEY
  });

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const execution = await client.executeWorkflow(workflowId, { variables });
      const result = await client.waitForExecution(execution.executionId);

      if (result.status === 'completed') {
        return result;
      } else if (result.status === 'failed' && attempt < maxRetries) {
        console.log(`Attempt ${attempt} failed, retrying...`);
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        continue;
      } else {
        throw new Error(`Workflow failed after ${attempt} attempts`);
      }
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      console.log(`Attempt ${attempt} error, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
}
```

## API Reference

### createNetPadWorkflowClient

Creates a workflow client instance.

**Parameters**:
- `config: WorkflowClientConfig` - Client configuration

**Returns**: `WorkflowClient` instance

### WorkflowClient

Client for interacting with workflows.

#### Workflow Management Methods

- `listWorkflows(options?)` - List workflows with optional filtering
- `getWorkflow(workflowId)` - Get workflow details
- `createWorkflow(config)` - Create a new workflow
- `updateWorkflow(workflowId, config)` - Update workflow configuration
- `deleteWorkflow(workflowId)` - Delete a workflow
- `activateWorkflow(workflowId)` - Activate a workflow
- `pauseWorkflow(workflowId)` - Pause a workflow
- `archiveWorkflow(workflowId)` - Archive a workflow

#### Execution Methods

- `executeWorkflow(workflowId, options)` - Execute a workflow
- `listExecutions(workflowId, options?)` - List execution history
- `getExecution(workflowId, executionId)` - Get execution details
- `getExecutionStatus(executionId)` - Get current execution status
- `waitForExecution(executionId, options?)` - Poll until completion
- `retryExecution(workflowId, executionId)` - Retry a failed execution
- `cancelExecution(workflowId, executionId)` - Cancel running execution

### waitForExecution

Utility method to poll for execution completion.

**Parameters**:
- `executionId: string` - Execution ID
- `options?: WaitOptions` - Polling options
  - `timeout?: number` - Maximum time to wait (default: 300000ms)
  - `pollInterval?: number` - Poll interval in ms (default: 1000ms)
  - `onProgress?: (status) => void` - Progress callback

**Returns**: Promise resolving to execution result

## Best Practices

1. **Use Environment Variables**: Store API keys and base URLs in environment variables
2. **Handle Errors Gracefully**: Always wrap execution calls in try-catch blocks
3. **Set Appropriate Timeouts**: Use `waitForExecution` with appropriate timeout values for long-running workflows
4. **Monitor Execution Status**: Use `onProgress` callback to track execution progress
5. **Batch Operations**: Use `Promise.allSettled` for parallel executions
6. **Retry Logic**: Implement retry logic for transient failures

## Resources

- **NPM Package**: [@netpad/workflows](https://www.npmjs.com/package/@netpad/workflows)
- **GitHub**: [github.com/mongodb/netpad](https://github.com/mongodb/netpad)
- **API Documentation**: [API Reference](../api/overview.md)
- **Workflow Guide**: [Workflows Documentation](../workflows/overview.md)

## Related Documentation

- [Developer Packages Overview](./packages.md) - All NetPad packages
- [Forms Package](./packages-forms.md) - React form renderer
- [MCP Server](./mcp-server.md) - AI-powered development tools
- [Workflows Guide](../workflows/creating-workflows.md) - Building workflows in NetPad
