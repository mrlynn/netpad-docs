# Form Reactions

Form Reactions enable real-time field updates by connecting form field events to workflows. When a user interacts with a field (blur, change, focus), a reaction can execute a workflow and automatically update other form fields with the results.

## What Are Form Reactions?

Form Reactions are a powerful feature that bridges forms and workflows, enabling dynamic, intelligent forms that respond to user input in real-time.

**Example Use Cases:**
- **Company Lookup**: User enters a company domain → workflow fetches company data from an API → auto-fills company name, industry, and size fields
- **Address Validation**: User enters a postal code → workflow validates and looks up location → auto-fills city and state
- **Price Calculation**: User selects products → workflow calculates pricing → updates total price field
- **AI Categorization**: User enters a description → AI classifies the content → suggests category and tags
- **Real-time Validation**: User enters an email → workflow checks database → shows availability status

## How Reactions Work

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│   Form Field    │         │    Workflow     │         │  Form Fields    │
│     Event       │ ──────► │   Execution     │ ──────► │    Updated      │
│  (blur/change)  │         │                 │         │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘

1. User interacts with a form field (e.g., leaves domain field)
2. Reaction detects the configured event (blur)
3. Workflow executes with form data as context
4. Workflow processes data (API calls, transforms, AI, etc.)
5. Form Field Update node returns field mappings
6. Form fields are automatically updated with new values
```

## Creating a Form Reaction

### Step 1: Build the Reaction Workflow

First, create a workflow with these key nodes:

1. **Field Event Trigger** (entry point)
   - Receives the triggering field data and full form context
   - Configure trigger mode (any/all) and debounce

2. **Processing Nodes** (your business logic)
   - HTTP Request to fetch external data
   - Transform to modify data structure
   - AI nodes for classification or extraction
   - MongoDB queries for database lookups

3. **Form Field Update** (output)
   - Maps workflow data to form fields
   - Configures null value handling
   - Sets feedback mode (silent, subtle, toast)

### Step 2: Configure the Reaction on Your Form

Once your workflow is ready:

1. Open your form in the Form Builder
2. Navigate to the Reactions section
3. Click "Add Reaction"
4. Configure:
   - **Name**: Descriptive name (e.g., "Company Domain Lookup")
   - **Workflow**: Select your reaction workflow
   - **Trigger Fields**: Which fields trigger this reaction
   - **Trigger Event**: When to fire (blur, change, focus)
   - **Debounce**: Delay to prevent rapid firing (recommended: 500ms for text)

## Workflow Nodes for Reactions

### Field Event Trigger

The entry point for all reaction workflows.

**Configuration:**
| Option | Description |
|--------|-------------|
| Form ID | Usually set automatically by the reaction system |
| Trigger Mode | `any` fires on any field, `all` requires all fields to have values |
| Debounce (ms) | Delay before executing (0-30000ms) |

**Output Data:**
```javascript
{
  triggerField: "companyDomain",       // Field that triggered
  triggerEvent: "blur",                // Event type
  fieldValue: "mongodb.com",           // Value of triggering field
  formData: {                          // Complete form data
    companyDomain: "mongodb.com",
    companyName: "",
    industry: ""
  },
  formId: "form_abc123",
  reactionId: "reaction_xyz789"
}
```

**Accessing Data in Downstream Nodes:**
```
// Access the triggering field value
{{nodes.fieldEventTrigger.fieldValue}}

// Access a specific form field
{{nodes.fieldEventTrigger.formData.companyDomain}}

// Access the event type
{{nodes.fieldEventTrigger.triggerEvent}}
```

### Form Field Update

Maps workflow outputs to form fields.

**Configuration:**
| Option | Description |
|--------|-------------|
| Feedback Mode | How to notify users: `silent`, `subtle`, or `toast` |
| Validate After Update | Run form validation after applying updates |
| Field Mappings | Array of source → field mappings |

**Field Mapping Options:**
| Option | Description |
|--------|-------------|
| Form Field Path | Target field (e.g., `companyName`, `address.city`) |
| Source Data Path | Path in workflow data (e.g., `httpRequest.data.company.name`) |
| Null Behavior | `skip` (default), `clear`, or `default` |

**Example Mappings:**
```
Source: httpRequest.data.company.name     → Field: companyName
Source: httpRequest.data.company.industry → Field: industry
Source: httpRequest.data.company.size     → Field: employeeCount
```

**Output Data:**
```javascript
{
  success: true,
  updates: {
    companyName: "MongoDB, Inc.",
    industry: "Technology",
    employeeCount: "5000+"
  },
  updatedFields: ["companyName", "industry", "employeeCount"],
  skippedFields: []
}
```

## Reaction Configuration

### Reaction Object Structure

```typescript
interface FormReaction {
  id: string;                    // Unique identifier
  name: string;                  // Display name
  description?: string;          // Optional description
  workflowId: string;            // ID of the workflow to execute

  trigger: {
    fields?: string[];           // Fields that trigger this reaction
    event?: 'change' | 'blur' | 'focus' | 'validate' | 'clear';
    debounceMs?: number;         // Delay before executing (0-30000ms)
    condition?: string;          // Optional trigger condition
  };

  execution: {
    mode: 'sync';                // Synchronous execution (v1)
    timeoutMs?: number;          // Max execution time (default: 10000ms)
  };

  feedback?: {
    showLoading?: boolean;       // Show loading indicator
    loadingText?: string;        // Custom loading message
    showSuccess?: boolean;       // Show success feedback
    showError?: boolean;         // Show error messages
  };

  enabled: boolean;              // Whether reaction is active
}
```

### Trigger Events

| Event | When It Fires | Best For |
|-------|---------------|----------|
| `blur` | User leaves the field | Domain lookups, validation |
| `change` | Value changes | Calculations, live updates |
| `focus` | User enters the field | Pre-loading data |
| `validate` | Field validation runs | Custom validation |
| `clear` | Field is cleared | Resetting related fields |

### Debounce Settings

| Field Type | Recommended Debounce |
|------------|---------------------|
| Text input | 500ms |
| Select/Dropdown | 0ms |
| Checkbox/Radio | 0ms |
| Search field | 300-500ms |

## API Reference

All endpoints require authentication and an `orgId` query parameter.

### List Reactions

```http
GET /api/forms/{formId}/reactions?orgId={orgId}
```

**Response:**
```json
{
  "success": true,
  "reactions": [...],
  "total": 3
}
```

### Create Reaction

```http
POST /api/forms/{formId}/reactions?orgId={orgId}
Content-Type: application/json

{
  "name": "Company Lookup",
  "description": "Fetch company data on domain blur",
  "workflowId": "wf_abc123",
  "trigger": {
    "fields": ["companyDomain"],
    "event": "blur",
    "debounceMs": 500
  },
  "execution": {
    "mode": "sync",
    "timeoutMs": 10000
  },
  "feedback": {
    "showLoading": true,
    "loadingText": "Looking up company..."
  }
}
```

### Get Reaction

```http
GET /api/forms/{formId}/reactions/{reactionId}?orgId={orgId}
```

### Update Reaction

```http
PUT /api/forms/{formId}/reactions/{reactionId}?orgId={orgId}
Content-Type: application/json

{
  "enabled": false,
  "trigger": { "debounceMs": 1000 }
}
```

### Delete Reaction

```http
DELETE /api/forms/{formId}/reactions/{reactionId}?orgId={orgId}
```

### Execute Reaction

```http
POST /api/forms/{formId}/reactions/execute?orgId={orgId}
Content-Type: application/json

{
  "reactionId": "reaction_abc123",
  "triggerField": "companyDomain",
  "triggerEvent": "blur",
  "fieldValue": "mongodb.com",
  "formData": {
    "companyDomain": "mongodb.com",
    "companyName": ""
  }
}
```

**Response:**
```json
{
  "success": true,
  "status": "completed",
  "updates": {
    "companyName": "MongoDB, Inc.",
    "industry": "Technology"
  },
  "durationMs": 850
}
```

## React Integration

### useFormReactions Hook

The `useFormReactions` hook provides React integration for form reactions.

```tsx
import { useFormReactions } from '@/hooks/useFormReactions';

function MyForm({ formId, orgId, reactions }) {
  const {
    triggerReaction,
    cancelReaction,
    hasReaction,
    getFieldReactions,
    reactionStates,
    pendingFields,
    recentlyUpdatedFields,
  } = useFormReactions({
    formId,
    orgId,
    reactions,
    onFieldUpdate: (fieldPath, value) => {
      // Update your form state
      setFormData(prev => ({ ...prev, [fieldPath]: value }));
    },
    onReactionStart: (reactionId) => {
      console.log('Reaction started:', reactionId);
    },
    onReactionComplete: (reactionId, result) => {
      console.log('Reaction completed:', result);
    },
    onReactionError: (reactionId, error) => {
      console.error('Reaction failed:', error);
    },
  });

  // Trigger a reaction on field blur
  const handleFieldBlur = (fieldName: string, value: any) => {
    triggerReaction(reactionId, {
      triggerField: fieldName,
      triggerEvent: 'blur',
      fieldValue: value,
      formData: currentFormData,
    });
  };

  // Show loading state for a field
  const isFieldLoading = pendingFields.has('companyName');

  // Check if field was recently updated
  const wasRecentlyUpdated = recentlyUpdatedFields.has('companyName');

  return (
    <form>
      <input
        name="companyDomain"
        onBlur={(e) => handleFieldBlur('companyDomain', e.target.value)}
      />
      <input
        name="companyName"
        disabled={isFieldLoading}
        className={wasRecentlyUpdated ? 'highlight' : ''}
      />
    </form>
  );
}
```

### Hook Return Values

| Value | Type | Description |
|-------|------|-------------|
| `triggerReaction` | Function | Manually trigger a reaction |
| `cancelReaction` | Function | Cancel a pending reaction |
| `hasReaction` | Function | Check if field has reactions |
| `getFieldReactions` | Function | Get all reactions for a field |
| `reactionStates` | Map | Current state of each reaction |
| `pendingFields` | Set | Fields with pending reactions |
| `recentlyUpdatedFields` | Set | Fields recently updated |

### Reaction States

```typescript
interface ReactionState {
  status: 'idle' | 'pending' | 'loading' | 'success' | 'error';
  error?: string;
  lastExecutedAt?: Date;
  lastResult?: any;
}
```

## Best Practices

### 1. Use Appropriate Debounce

```typescript
// Text fields - wait for user to finish typing
trigger: { debounceMs: 500 }

// Select fields - respond immediately
trigger: { debounceMs: 0 }
```

### 2. Handle Errors Gracefully

Configure feedback to show errors:
```typescript
feedback: {
  showError: true,
  showLoading: true
}
```

### 3. Set Reasonable Timeouts

```typescript
execution: {
  timeoutMs: 10000  // 10 seconds is usually sufficient
}
```

### 4. Use Null Behavior Wisely

```typescript
// Skip update if API returns null
{ nullBehavior: 'skip' }

// Clear field if source is empty
{ nullBehavior: 'clear' }

// Use default value
{ nullBehavior: 'default', defaultValue: 'Unknown' }
```

### 5. Keep Workflows Simple

- Focus on single responsibility
- Use transforms to shape data
- Handle errors in the workflow

## Limitations

### Current Phase (v1)

- **Synchronous execution only**: Workflows run inline, not via job queue
- **Manual trigger**: Auto-attachment to field events coming in Phase 3
- **Transform expressions**: Accepted but not executed (requires sandboxing)
- **Cascade depth**: Maximum of 3 to prevent infinite loops

### Planned Features

- Async execution via job queue (Phase 5)
- Automatic field event attachment (Phase 3)
- Transform expression execution
- Visual reaction builder in Form Builder

## Troubleshooting

### Reaction Not Firing

1. Check that the reaction is enabled
2. Verify the trigger field name matches exactly
3. Ensure the workflow exists and is accessible
4. Check debounce isn't too long

### Field Updates Not Appearing

1. Verify the Form Field Update node mappings
2. Check source paths match workflow output
3. Ensure null behavior is configured correctly
4. Look for errors in reaction execution

### Timeout Errors

1. Increase the execution timeout
2. Optimize the workflow (fewer nodes, faster API calls)
3. Check for slow external API responses

### Cascade Loop Detected

1. Ensure reactions don't update their own trigger fields
2. Review all reactions that might create circular updates
3. Simplify reaction chains

## Next Steps

- [Workflows Overview](../workflows/overview.md) - Learn about workflow basics
- [Node Types](../workflows/node-types.md) - Explore all workflow nodes
- [Field Types](./field-types.md) - Available form field types
- [Conditional Logic](./conditional-logic.md) - Dynamic form behavior
