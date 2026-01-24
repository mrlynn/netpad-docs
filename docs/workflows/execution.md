# Workflow Execution

Understanding how workflows execute, monitoring execution, and troubleshooting issues.

## Execution Modes

### Sequential Execution

Nodes execute one at a time, in order:

<WorkflowViewer
  title="Sequential Execution"
  description="Each node waits for the previous to complete before starting."
  height={280}
  minimap={false}
  layoutDirection="LR"
  workflow={{
    nodes: [
      { id: 't', type: 'form_trigger', data: { label: '1. Trigger' } },
      { id: 'v', type: 'transform', data: { label: '2. Transform' } },
      { id: 's', type: 'mongo_insert', data: { label: '3. Save' } },
      { id: 'e', type: 'email_send', data: { label: '4. Notify' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'v' },
      { id: 'e2', source: 'v', target: 's' },
      { id: 'e3', source: 's', target: 'e' }
    ]
  }}
/>

**Use When**:
- Nodes depend on previous results
- Order matters
- Simple workflows

### Parallel Execution

Independent nodes execute simultaneously:

<WorkflowViewer
  title="Parallel Execution"
  description="Independent branches run at the same time, then merge results."
  height={350}
  minimap={false}
  workflow={{
    nodes: [
      { id: 't', type: 'webhook_trigger', data: { label: 'Trigger' } },
      { id: 'p', type: 'parallel', data: { label: 'Split' } },
      { id: 'e', type: 'email_send', data: { label: 'Send Email' } },
      { id: 's', type: 'slack_send', data: { label: 'Post Slack' } },
      { id: 'd', type: 'mongo_insert', data: { label: 'Save to DB' } },
      { id: 'm', type: 'merge', data: { label: 'Merge Results' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'p' },
      { id: 'e2', source: 'p', target: 'e' },
      { id: 'e3', source: 'p', target: 's' },
      { id: 'e4', source: 'p', target: 'd' },
      { id: 'e5', source: 'e', target: 'm' },
      { id: 'e6', source: 's', target: 'm' },
      { id: 'e7', source: 'd', target: 'm' }
    ]
  }}
/>

**Use When**:
- Nodes are independent
- Performance is critical
- Multiple operations can run together

### Auto Mode

NetPad determines best execution mode:
- Analyzes node dependencies
- Chooses sequential or parallel
- Optimizes automatically

**Use When**:
- Unsure of best mode
- Want automatic optimization
- Complex workflows

## Execution Flow

### 1. Trigger Event

Workflow starts when trigger fires:
- Form submitted
- Webhook received
- Schedule time reached
- Manual trigger

### 2. Node Execution

Each node executes:
- Receives input data
- Processes according to configuration
- Produces output data
- Passes to next node(s)

### 3. Data Flow

Data flows between nodes:
- Output of one node → Input of next
- Can be transformed
- Can be split or merged

### 4. Completion

Workflow completes when:
- All nodes executed
- Or error occurs
- Or timeout reached

## Monitoring Execution

### Real-Time Monitoring

Watch workflow execute live:
- **Execution View**: See current execution
- **Node Status**: Green (success), Yellow (running), Red (error)
- **Data Flow**: See data at each node
- **Progress**: Percentage complete

### Execution History

View past executions:
- **List View**: All executions
- **Filter**: By status, date, trigger
- **Search**: Find specific executions
- **Details**: Click to see full execution

### Execution Details

For each execution, see:
- **Status**: Success, Failed, Running, Cancelled
- **Start Time**: When execution started
- **End Time**: When execution completed
- **Duration**: Total execution time
- **Node Logs**: Execution log for each node
- **Data Snapshots**: Data at each node
- **Errors**: Any errors that occurred

## Execution Status

### Success

All nodes completed successfully:
- Green status indicator
- All data processed
- Output available

### Failed

Error occurred during execution:
- Red status indicator
- Error message shown
- Execution stopped (or continued based on settings)

### Running

Execution in progress:
- Yellow status indicator
- Current node highlighted
- Progress shown

### Cancelled

Execution manually cancelled:
- Grey status indicator
- Partial results may be available

## Error Handling

<WorkflowViewer
  title="Error Handling Pattern"
  description="Workflows can include dedicated error handling paths to gracefully manage failures."
  height={350}
  minimap={false}
  workflow={{
    nodes: [
      { id: 't', type: 'webhook_trigger', data: { label: 'API Request' } },
      { id: 'h', type: 'http_request', data: { label: 'Call External API' } },
      { id: 'c', type: 'filter', data: { label: 'Success?' } },
      { id: 's', type: 'mongo_insert', data: { label: 'Save Result' } },
      { id: 'r', type: 'delay', data: { label: 'Wait & Retry' } },
      { id: 'e', type: 'email_send', data: { label: 'Alert on Failure' } }
    ],
    edges: [
      { id: 'e1', source: 't', target: 'h' },
      { id: 'e2', source: 'h', target: 'c' },
      { id: 'e3', source: 'c', target: 's', sourceHandle: 'yes', data: { label: 'OK' } },
      { id: 'e4', source: 'c', target: 'r', sourceHandle: 'no', data: { label: 'Error' } },
      { id: 'e5', source: 'r', target: 'h' },
      { id: 'e6', source: 'r', target: 'e' }
    ]
  }}
/>

### Node Errors

When a node fails:
- Error logged
- Error message captured
- Execution behavior depends on settings

### Retry Policy

Configure retries for failed nodes:
- **Max Retries**: Number of retry attempts
- **Retry Delay**: Time between retries
- **Retry Condition**: When to retry

### Error Recovery

Options when errors occur:
- **Stop**: Halt workflow execution
- **Continue**: Skip failed node, continue
- **Rollback**: Undo changes made so far

### Error Logs

View detailed error information:
- Error message
- Stack trace
- Node configuration
- Input data at time of error

## Timeouts

### Workflow Timeout

Maximum time for entire workflow:
- Default: 5 minutes
- Configurable per workflow
- Execution cancelled if exceeded

### Node Timeout

Maximum time for individual node:
- Default: 30 seconds
- Configurable per node
- Node fails if exceeded

## Performance Optimization

### Execution Speed

Improve execution time:
- Use parallel execution when possible
- Minimize data size
- Optimize node configurations
- Use efficient queries

### Resource Usage

Monitor resource consumption:
- Execution time
- Memory usage
- API call counts
- Database queries

## Debugging

### Test Execution

Test workflows before activating:
- Use test data
- Execute manually
- Verify results
- Check data flow

### Execution Logs

Review detailed logs:
- Node execution order
- Data at each step
- Error messages
- Performance metrics

### Common Issues

**Workflow Not Triggering**:
- Check trigger configuration
- Verify trigger conditions
- Check workflow status (must be Active)

**Node Failing**:
- Review node configuration
- Check input data
- Verify connections/permissions
- Review error logs

**Slow Execution**:
- Check for bottlenecks
- Optimize slow nodes
- Use parallel execution
- Reduce data size

**Data Not Flowing**:
- Verify node connections
- Check data mapping
- Review data structure
- Test individual nodes

## Best Practices

1. **Test Before Activating**: Always test workflows
2. **Monitor First Runs**: Watch initial executions closely
3. **Set Appropriate Timeouts**: Prevent hanging workflows
4. **Handle Errors Gracefully**: Configure error handling
5. **Log Important Events**: Use logging for debugging
6. **Optimize Performance**: Improve slow workflows
7. **Document Workflows**: Add comments and descriptions

## Next Steps

- [Creating Workflows](./creating-workflows.md) - Build workflows
- [Node Types](./node-types.md) - Learn about nodes
- [Templates](./templates.md) - Use templates
