# Organizations

Organizations allow you to group forms, workflows, and data. They support multi-tenant isolation and team collaboration.

## What are Organizations?

Organizations provide:
- **Data Isolation**: Separate data per organization
- **Team Collaboration**: Share resources with team members
- **Access Control**: Manage permissions
- **Billing**: Track usage and billing per organization

## Creating an Organization

1. **From Dashboard**:
   - Click "New Organization"
   - Enter organization name
   - Set organization settings

2. **Auto-Creation**:
   - First organization created automatically
   - On first sign-up
   - Can create additional organizations

## Organization Settings

### General Settings

- **Name**: Organization name
- **Description**: Organization description
- **Logo**: Organization logo
- **Domain**: Custom domain (if configured)

### Database Settings

- **Database Name**: Auto-generated as `org_{orgId}`
- **Connection**: MongoDB connection settings
- **Collections**: Manage collections

### Limits & Quotas

- **Forms**: Max number of forms
- **Workflows**: Max number of workflows
- **Submissions**: Max submissions per month
- **Storage**: Max storage space

## Team Members

### Inviting Members

1. **Go to Members**:
   - Organization settings
   - Click "Members" tab
   - Click "Invite Member"

2. **Enter Email**:
   - Enter member email
   - Select role
   - Send invitation

3. **Member Accepts**:
   - Receives email invitation
   - Clicks link to accept
   - Added to organization

### Roles

**Owner**:
- Full control
- Can delete organization
- Manage billing
- All permissions

**Admin**:
- Manage members
- Configure settings
- Create/edit resources
- Cannot delete organization

**Member**:
- Create forms/workflows
- Edit own resources
- View organization data
- Limited settings access

**Viewer**:
- Read-only access
- View resources
- View data
- Cannot make changes

### Managing Members

- **Change Role**: Update member role
- **Remove Member**: Remove from organization
- **Resend Invitation**: Resend invite email

## Organization Resources

### Forms

- **Organization Forms**: All forms in organization
- **Shared Access**: Team members can access
- **Permissions**: Based on role

### Workflows

- **Organization Workflows**: All workflows
- **Shared Execution**: Team can execute
- **Monitoring**: All members can monitor

### Data

- **Organization Database**: Isolated database
- **Collections**: Organization collections
- **Access Control**: Role-based access

## Switching Organizations

1. **Organization Switcher**:
   - Click organization name
   - See all organizations
   - Select organization

2. **Context Switch**:
   - All resources switch
   - Forms, workflows, data
   - Maintains session

## Best Practices

1. **Organize by Team**: One organization per team
2. **Use Roles**: Assign appropriate roles
3. **Manage Access**: Regularly review members
4. **Set Limits**: Configure quotas appropriately
