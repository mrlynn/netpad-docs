# Creating Workflows

This guide walks you through creating your first workflow in NetPad's visual workflow editor.

## Creating a New Workflow

You can create a workflow in two ways:

### Method 1: Start from Template (Recommended)

1. **Navigate to Workflows**:
   - Click "New Workflow" from dashboard, or
   - Navigate to `/workflows`

2. **Open Template Gallery**:
   - Click the "Templates" tab
   - Browse templates by category or search

3. **Preview Template**:
   - Click a template card to see details
   - Review nodes, edges, and metadata

4. **Use Template**:
   - Click "Use Template" to apply
   - Name your workflow
   - Workflow editor opens with template loaded

5. **Customize**:
   - Modify nodes and connections
   - Configure node settings
   - Add or remove nodes as needed

:::tip
Templates provide pre-configured workflows for common use cases. See the [Workflow Templates](./templates.md) guide for details.
:::

### Method 2: Start from Scratch

1. **Navigate to Workflows**:
   - Click "New Workflow" from dashboard, or
   - Navigate to `/workflows`

2. **Name Your Workflow**:
   - Enter a descriptive name
   - Add optional description

3. **Open Workflow Editor**:
   - Visual canvas opens
   - Node palette on the left
   - Properties panel on the right

## Building a Workflow

### Step 1: Add a Trigger

Every workflow starts with a trigger:

1. **Drag Trigger Node**:
   - Find trigger nodes in the palette
   - Drag onto canvas
   - Common triggers: Form Trigger, Webhook Trigger, Schedule Trigger

2. **Configure Trigger**:
   - Click trigger node
   - Configure settings in properties panel
   - Example: Select form for Form Trigger

### Step 2: Add Processing Nodes

Add nodes to process data:

1. **Drag Nodes**:
   - Logic nodes (If/Else, Switch, Loop)
   - Data nodes (Transform, Filter, Aggregate)
   - Integration nodes (HTTP Request, MongoDB Query)

2. **Connect Nodes**:
   - Click output handle of source node
   - Drag to input handle of target node
   - Connection shows data flow

3. **Configure Nodes**:
   - Click each node
   - Set properties in right panel
   - Map data from previous nodes

### Step 3: Configure Data Flow

Map data between nodes:

1. **View Data Structure**:
   - Click node to see input/output data
   - Data structure shown in properties panel

2. **Map Fields**:
   - Select source field
   - Map to target field
   - Use expressions for transformations

3. **Test Data Flow**:
   - Use test execution
   - Verify data passes correctly
   - Check transformations

## Example: Form Submission Workflow

Let's build a workflow that sends an email when a form is submitted:

### Step 1: Add Form Trigger

1. Drag "Form Trigger" node
2. Select your form
3. Configure: Trigger on "Form Submitted"

### Step 2: Add Email Node

1. Drag "Email Send" node
2. Connect from Form Trigger
3. Configure email:
   - To: `{{trigger.data.email}}`
   - Subject: "Thank you for your submission"
   - Body: Include form data

### Step 3: Add MongoDB Write

1. Drag "MongoDB Write" node
2. Connect from Form Trigger
3. Configure:
   - Collection: `submissions`
   - Operation: Insert
   - Data: Form submission data

### Step 4: Activate Workflow

1. Click "Activate" button
2. Workflow is now live
3. Test by submitting the form

## Workflow Best Practices

### Organization

1. **Name Nodes Clearly**: Use descriptive names
2. **Add Comments**: Document complex logic
3. **Group Related Nodes**: Organize visually
4. **Use Colors**: Color-code node types

### Error Handling

1. **Add Error Nodes**: Handle errors gracefully
2. **Configure Retries**: Set retry policies
3. **Log Errors**: Track error occurrences
4. **Notify on Failure**: Send alerts

### Performance

1. **Optimize Node Count**: Keep workflows focused
2. **Use Parallel Execution**: When possible
3. **Limit Data Size**: Filter early
4. **Set Timeouts**: Prevent hanging workflows

### Testing

1. **Test Each Node**: Verify individual nodes
2. **Test Data Flow**: Check data transformations
3. **Test Error Cases**: Handle failures
4. **Monitor Execution**: Watch first few runs

## Workflow Settings

### Execution Mode

- **Sequential**: Execute nodes one at a time
- **Parallel**: Execute independent nodes simultaneously
- **Auto**: NetPad determines best mode

### Timeout Configuration

- **Max Execution Time**: Overall workflow timeout
- **Node Timeout**: Per-node timeout
- **Retry Policy**: Retry failed nodes

### Error Handling

- **Stop on Error**: Halt workflow on error
- **Continue on Error**: Skip failed nodes
- **Rollback**: Undo changes on error

## Variables

### Defining Variables

Store values for use across workflow:

1. **Add Set Variable Node**:
   - Drag "Set Variable" node
   - Define variable name
   - Set variable value

2. **Use Variables**:
   - Reference with `{{variableName}}`
   - Available in all subsequent nodes
   - Scoped to workflow execution

### Variable Types

- **String**: Text values
- **Number**: Numeric values
- **Boolean**: True/false
- **Object**: Complex data structures
- **Array**: Lists of values

## Conditional Logic

### If/Else Node

Route workflow based on conditions:

1. **Add If/Else Node**:
   - Drag "If/Else" node
   - Configure condition

2. **Set Condition**:
   - Field: `{{trigger.data.status}}`
   - Operator: equals
   - Value: "approved"

3. **Connect Branches**:
   - True branch: Approved path
   - False branch: Rejected path

### Switch Node

Multi-branch routing:

1. **Add Switch Node**:
   - Drag "Switch" node
   - Configure switch field

2. **Add Cases**:
   - Case 1: Value "option1"
   - Case 2: Value "option2"
   - Default: Other values

## Testing Workflows

### Manual Testing

1. **Click "Test" Button**:
   - Opens test execution dialog
   - Enter test data
   - Execute workflow

2. **View Execution**:
   - See node-by-node execution
   - Check data at each step
   - Verify results

### Execution History

1. **View Past Executions**:
   - Click "Executions" tab
   - See all workflow runs
   - Filter by status, date

2. **View Execution Details**:
   - Click execution
   - See node execution order
   - Check data at each node
   - View error logs

## Activating Workflows

### Activate Workflow

1. **Click "Activate"**:
   - Workflow status changes to "Active"
   - Begins listening for triggers
   - Executes on trigger events

2. **Monitor Execution**:
   - Watch real-time execution
   - Check execution history
   - Review error logs

### Pausing Workflows

1. **Click "Pause"**:
   - Workflow stops executing
   - Configuration preserved
   - Can reactivate anytime

## Next Steps

- [Templates](./templates.md) - Use pre-built workflow templates
- [Node Types](./node-types.md) - Learn about all node types
- [Execution](./execution.md) - Understand workflow execution
