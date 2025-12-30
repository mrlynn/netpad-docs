# Workflow Templates

NetPad provides pre-built workflow templates for common use cases. Use templates as starting points for your workflows.

## Available Templates

### Form Processing Templates

#### Email Confirmation

Send confirmation email after form submission.

**Nodes**:
- Form Trigger
- Email Send

**Configuration**:
- Form: Your form
- Email To: Form submitter email
- Email Subject: "Thank you for your submission"
- Email Body: Include form data

#### Team Notification

Notify team members of new form submissions.

**Nodes**:
- Form Trigger
- Email Send (to team)

**Configuration**:
- Form: Your form
- Email To: Team email addresses
- Email Subject: "New form submission"
- Email Body: Submission details

#### Data Validation

Validate and enrich form data before saving.

**Nodes**:
- Form Trigger
- Transform (validate data)
- Conditional (check validation)
- MongoDB Write (save if valid)
- Email Send (notify if invalid)

### Data Synchronization Templates

#### Sync Collections

Sync data between MongoDB collections.

**Nodes**:
- Schedule Trigger (or Form Trigger)
- MongoDB Query (source collection)
- Transform (map fields)
- MongoDB Write (target collection)

#### Update Related Records

Update related documents when data changes.

**Nodes**:
- Form Trigger
- MongoDB Query (find related)
- Transform (update data)
- MongoDB Write (update related)

### Integration Templates

#### Webhook to MongoDB

Save webhook data to MongoDB.

**Nodes**:
- Webhook Trigger
- Transform (format data)
- MongoDB Write

#### API to Form

Send API data to form submission.

**Nodes**:
- API Trigger
- Transform (format as form data)
- Form Submission (internal)

### Business Automation Templates

#### Order Processing

Process orders from form submissions.

**Nodes**:
- Form Trigger (order form)
- Conditional (check inventory)
- MongoDB Write (create order)
- Email Send (confirmation)
- HTTP Request (notify fulfillment)

#### Approval Workflow

Multi-step approval process.

**Nodes**:
- Form Trigger (request)
- Conditional (routing logic)
- Email Send (notify approver)
- Delay (wait for approval)
- Conditional (approved/rejected)
- Email Send (notify requester)

## Using Templates

### Selecting a Template

1. **Click "New Workflow"**
2. **Choose "From Template"**
3. **Browse Templates**:
   - Form Processing
   - Data Synchronization
   - Integration
   - Business Automation

4. **Select Template**:
   - Preview template
   - See node structure
   - Read description

### Customizing Templates

After selecting template:

1. **Configure Nodes**:
   - Update node settings
   - Map to your data
   - Adjust logic

2. **Add/Remove Nodes**:
   - Add additional nodes
   - Remove unnecessary nodes
   - Modify connections

3. **Test Workflow**:
   - Test with your data
   - Verify behavior
   - Make adjustments

### Saving Custom Templates

Create your own templates:

1. **Build Workflow**:
   - Create workflow
   - Configure nodes
   - Test thoroughly

2. **Save as Template**:
   - Click "Save as Template"
   - Name template
   - Add description
   - Choose category

3. **Share Template**:
   - Make template public (optional)
   - Share with team
   - Use in other workflows

## Template Categories

### Form Processing

Templates for processing form submissions:
- Email confirmations
- Team notifications
- Data validation
- Submission routing

### Data Management

Templates for data operations:
- Collection syncing
- Data transformation
- Bulk operations
- Data cleanup

### Integration

Templates for external integrations:
- API connections
- Webhook handling
- Database syncing
- Service integrations

### Automation

Templates for business automation:
- Order processing
- Approval workflows
- Notification systems
- Scheduled tasks

## Creating Custom Templates

### Best Practices

1. **Keep It Generic**: Make templates reusable
2. **Document Well**: Add clear descriptions
3. **Test Thoroughly**: Ensure templates work
4. **Use Variables**: Make templates configurable
5. **Handle Errors**: Include error handling

### Template Structure

Good templates include:
- Clear trigger configuration
- Well-documented nodes
- Error handling
- Configurable settings
- Example data

## Community Templates

### Sharing Templates

Share templates with the community:
- Make template public
- Add to template gallery
- Help others automate

### Finding Templates

Browse community templates:
- Template gallery
- Search by use case
- Filter by category
- Rate and review

## Next Steps

- [Creating Workflows](./creating-workflows.md) - Build custom workflows
- [Node Types](./node-types.md) - Learn about nodes
- [Execution](./execution.md) - Understand execution
