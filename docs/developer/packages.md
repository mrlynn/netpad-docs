# Developer Packages

NetPad provides npm packages for developers who want to integrate NetPad forms and workflows into their applications.

## Available Packages

### @netpad/forms

React component library for rendering NetPad forms in your applications.

**Installation**:
```bash
npm install @netpad/forms
```

**Features**:
- 28+ field types
- Multi-page wizard support
- Conditional logic engine
- TypeScript support
- Form validation
- Custom styling

### @netpad/workflows

Type-safe TypeScript API client for NetPad workflows.

**Installation**:
```bash
npm install @netpad/workflows
```

**Features**:
- Workflow API client
- Execution management
- Type-safe TypeScript API
- Status polling utilities
- Error handling

## @netpad/forms

### Installation

```bash
npm install @netpad/forms
# or
yarn add @netpad/forms
# or
pnpm add @netpad/forms
```

### Basic Usage

```tsx
import { FormRenderer } from '@netpad/forms';

function MyComponent() {
  const formConfig = {
    formId: 'your-form-id',
    // ... form configuration
  };

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormRenderer
      config={formConfig}
      onSubmit={handleSubmit}
    />
  );
}
```

### Form Configuration

```typescript
interface FormConfig {
  formId: string;
  mode?: 'create' | 'edit' | 'view';
  documentId?: string;
  prefillData?: Record<string, any>;
  theme?: FormTheme;
  onSubmit?: (data: FormData) => void | Promise<void>;
  onError?: (error: FormError) => void;
}
```

### Field Types

The package supports 28+ field types:

- Text, Number, Email, Phone, URL, Password
- Select, Multi-Select, Radio, Checkbox, Tags
- Date Picker, Time Picker, Date Range
- Text Area, Rich Text Editor, Code Editor
- File Upload, Image Upload, Multiple Files
- Signature, Rating, NPS, Matrix, Ranking
- Address, Geolocation, Map Picker
- Color Picker, Slider, OTP Input
- Lookup, Computed, Nested Object, Repeater

### Multi-Page Forms

```tsx
<FormRenderer
  config={formConfig}
  multiPage={true}
  progressStyle="dots" // or "numbers", "progress-bar", "tabs"
  onSubmit={handleSubmit}
/>
```

### Conditional Logic

Conditional logic is handled automatically based on form configuration:

```tsx
// Form config includes conditional rules
// Package handles show/hide automatically
<FormRenderer
  config={formConfigWithConditionalLogic}
  onSubmit={handleSubmit}
/>
```

### Custom Styling

```tsx
import { FormRenderer } from '@netpad/forms';

const customTheme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  errorColor: '#dc3545',
  successColor: '#28a745',
  // ... more theme options
};

<FormRenderer
  config={formConfig}
  theme={customTheme}
  onSubmit={handleSubmit}
/>
```

### TypeScript Support

Full TypeScript support with type definitions:

```typescript
import { FormRenderer, FormConfig, FormData } from '@netpad/forms';

const config: FormConfig = {
  formId: 'my-form',
  // TypeScript will validate configuration
};

const handleSubmit = (data: FormData) => {
  // TypeScript knows the structure of data
  console.log(data.fieldName);
};
```

### API Reference

#### FormRenderer

Main component for rendering forms.

**Props**:
- `config: FormConfig` - Form configuration
- `onSubmit?: (data: FormData) => void` - Submit handler
- `onError?: (error: FormError) => void` - Error handler
- `theme?: FormTheme` - Custom theme
- `multiPage?: boolean` - Enable multi-page mode
- `progressStyle?: 'dots' | 'numbers' | 'progress-bar' | 'tabs'` - Progress indicator style

#### FormConfig

Form configuration object.

#### FormData

Submitted form data structure.

#### FormError

Error object structure.

## @netpad/workflows

### Installation

```bash
npm install @netpad/workflows
# or
yarn add @netpad/workflows
# or
pnpm add @netpad/workflows
```

### Basic Usage

```typescript
import { createNetPadWorkflowClient } from '@netpad/workflows';

const client = createNetPadWorkflowClient({
  baseUrl: 'https://your-netpad-instance.com',
  apiKey: 'your-api-key',
  orgId: 'your-org-id',
});

// Execute a workflow
const result = await client.executeWorkflow('workflow-id', {
  payload: {
    // workflow input data
  },
});

console.log('Execution ID:', result.executionId);
console.log('Status:', result.status);
```

### Client Configuration

```typescript
interface WorkflowClientConfig {
  baseUrl: string;
  apiKey: string;
  orgId: string;
  timeout?: number;
  retries?: number;
}
```

### Executing Workflows

```typescript
// Execute workflow
const execution = await client.executeWorkflow('workflow-id', {
  payload: {
    formData: {
      name: 'John Doe',
      email: 'john@example.com',
    },
  },
});

// Check execution status
const status = await client.getExecutionStatus(execution.executionId);

// Get execution result
const result = await client.getExecutionResult(execution.executionId);
```

### Status Polling

Poll for execution completion:

```typescript
import { pollExecutionStatus } from '@netpad/workflows';

const result = await pollExecutionStatus(
  client,
  execution.executionId,
  {
    interval: 1000, // Poll every 1 second
    timeout: 60000, // Timeout after 60 seconds
  }
);

if (result.status === 'completed') {
  console.log('Workflow completed:', result.result);
} else if (result.status === 'failed') {
  console.error('Workflow failed:', result.error);
}
```

### Workflow Management

```typescript
// List workflows
const workflows = await client.listWorkflows();

// Get workflow details
const workflow = await client.getWorkflow('workflow-id');

// Create workflow
const newWorkflow = await client.createWorkflow({
  name: 'My Workflow',
  // ... workflow configuration
});

// Update workflow
await client.updateWorkflow('workflow-id', {
  // ... updated configuration
});

// Delete workflow
await client.deleteWorkflow('workflow-id');
```

### Execution Management

```typescript
// List executions
const executions = await client.listExecutions({
  workflowId: 'workflow-id',
  status: 'completed',
  limit: 10,
});

// Get execution details
const execution = await client.getExecution('execution-id');

// Cancel execution
await client.cancelExecution('execution-id');

// Get execution logs
const logs = await client.getExecutionLogs('execution-id');
```

### TypeScript Support

Full TypeScript support with type definitions:

```typescript
import {
  createNetPadWorkflowClient,
  WorkflowExecution,
  WorkflowStatus,
} from '@netpad/workflows';

const client = createNetPadWorkflowClient({
  baseUrl: 'https://your-netpad-instance.com',
  apiKey: 'your-api-key',
  orgId: 'your-org-id',
});

// TypeScript knows the return types
const execution: WorkflowExecution = await client.executeWorkflow(
  'workflow-id',
  { payload: {} }
);

const status: WorkflowStatus = execution.status;
```

### Error Handling

```typescript
import { WorkflowError } from '@netpad/workflows';

try {
  const result = await client.executeWorkflow('workflow-id', {
    payload: {},
  });
} catch (error) {
  if (error instanceof WorkflowError) {
    console.error('Workflow error:', error.message);
    console.error('Error code:', error.code);
    console.error('Error details:', error.details);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

### API Reference

#### createNetPadWorkflowClient

Creates a workflow client instance.

**Parameters**:
- `config: WorkflowClientConfig` - Client configuration

**Returns**: `WorkflowClient` instance

#### WorkflowClient

Client for interacting with workflows.

**Methods**:
- `executeWorkflow(workflowId, options)` - Execute a workflow
- `getExecutionStatus(executionId)` - Get execution status
- `getExecutionResult(executionId)` - Get execution result
- `listWorkflows(options)` - List workflows
- `getWorkflow(workflowId)` - Get workflow details
- `createWorkflow(config)` - Create a workflow
- `updateWorkflow(workflowId, config)` - Update a workflow
- `deleteWorkflow(workflowId)` - Delete a workflow
- `listExecutions(options)` - List executions
- `getExecution(executionId)` - Get execution details
- `cancelExecution(executionId)` - Cancel execution
- `getExecutionLogs(executionId)` - Get execution logs

#### pollExecutionStatus

Utility function to poll for execution status.

**Parameters**:
- `client: WorkflowClient` - Workflow client
- `executionId: string` - Execution ID
- `options: PollOptions` - Polling options

**Returns**: Promise resolving to execution result

## Examples

### React Form Integration

```tsx
import React, { useState } from 'react';
import { FormRenderer } from '@netpad/forms';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (data) => {
    try {
      // Submit to your API
      await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (submitted) {
    return <div>Thank you for your submission!</div>;
  }

  return (
    <FormRenderer
      config={{
        formId: 'contact-form',
      }}
      onSubmit={handleSubmit}
    />
  );
}
```

### Workflow Integration

```typescript
import { createNetPadWorkflowClient, pollExecutionStatus } from '@netpad/workflows';

async function processOrder(orderData) {
  const client = createNetPadWorkflowClient({
    baseUrl: process.env.NEXT_PUBLIC_NETPAD_URL,
    apiKey: process.env.NETPAD_API_KEY,
    orgId: process.env.NETPAD_ORG_ID,
  });

  // Execute order processing workflow
  const execution = await client.executeWorkflow('order-processing', {
    payload: {
      order: orderData,
    },
  });

  // Poll for completion
  const result = await pollExecutionStatus(client, execution.executionId, {
    interval: 2000,
    timeout: 300000, // 5 minutes
  });

  if (result.status === 'completed') {
    return result.result;
  } else {
    throw new Error('Workflow failed');
  }
}
```

## Resources

- **NPM Packages**:
  - [@netpad/forms](https://www.npmjs.com/package/@netpad/forms)
  - [@netpad/workflows](https://www.npmjs.com/package/@netpad/workflows)
- **GitHub**: [github.com/mongodb/netpad](https://github.com/mongodb/netpad)
- **Examples**: `/examples/` directory in repository
- **API Documentation**: [API Reference](../api/overview.md)

## Next Steps

- [API Reference](../api/overview.md) - Complete API documentation
- [Getting Started](../getting-started/introduction.md) - Get started with NetPad
- [Forms](../forms/overview.md) - Learn about forms
