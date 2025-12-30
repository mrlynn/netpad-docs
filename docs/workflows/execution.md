# Workflow Execution

Understanding how workflows execute, monitoring execution, and troubleshooting issues.

## Execution Modes

### Sequential Execution

Nodes execute one at a time, in order:
- Node 1 completes → Node 2 starts
- Data flows sequentially
- Simple and predictable

**Use When**:
- Nodes depend on previous results
- Order matters
- Simple workflows

### Parallel Execution

Independent nodes execute simultaneously:
- Multiple nodes run at once
- Faster overall execution
- More complex data flow

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
