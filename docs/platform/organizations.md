# Organizations

Organizations allow you to group forms, workflows, and data. They support multi-tenant isolation and team collaboration.

## What are Organizations?

Organizations provide:
- **Data Isolation**: Separate data per organization
- **Team Collaboration**: Share resources with team members
- **Access Control**: Manage permissions
- **Billing**: Track usage and billing per organization

## Organization Structure

```
Organization
├── Projects (dev, staging, prod)
│   ├── Applications
│   │   ├── Forms
│   │   ├── Workflows
│   │   ├── Connections
│   │   └── Releases (versioned snapshots)
│   ├── Forms (standalone)
│   └── Workflows (standalone)
├── Members (with roles)
├── Groups (teams)
├── Custom Roles
├── Connection Vault
├── Templates
├── Referrals (code, earnings, payouts)
└── Billing/Subscription
```

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

### Built-in Roles

| Role | Description | Key Capabilities |
|------|-------------|------------------|
| **Owner** | Full control | Delete org, manage billing, all permissions |
| **Admin** | Management access | Manage members, settings, resources |
| **Member** | Standard access | Create forms/workflows, edit own resources |
| **Viewer** | Read-only | View resources, no editing |

### Managing Members

- **Change Role**: Update member role
- **Remove Member**: Remove from organization
- **Resend Invitation**: Resend invite email

## RBAC - Role-Based Access Control

NetPad provides comprehensive RBAC capabilities for managing organization access.

### RBAC Structure

```
Organization RBAC
├── Users (Members)
│   ├── Direct Role Assignment (Owner, Admin, Member, Viewer)
│   └── Effective Permissions (computed from all sources)
├── Groups (Teams)
│   ├── Engineering, Marketing, Contractors, etc.
│   ├── Default Role (inherited by all members)
│   └── Group Role Assignments
└── Roles
    ├── Built-in (Owner, Admin, Member, Viewer)
    └── Custom Roles
        ├── Base Role Inheritance
        └── 40+ Granular Permissions
```

### Groups (Teams)

Create teams to organize members and assign shared permissions:

- **Create Teams**: Engineering, Marketing, Contractors, etc.
- **Default Role**: All members of a group inherit the group's default role
- **Add/Remove Users**: Dynamically manage group membership
- **Assign Custom Roles**: Assign custom roles to entire groups

### Custom Roles

Create organization-specific roles beyond the built-in options:

- **Base Role Inheritance**: Start from a built-in role
- **Add Permissions**: Grant additional permissions
- **Remove Permissions**: Revoke specific permissions
- **40+ Permissions**: Fine-grained control across 11 categories

### Permission Categories

| Category | Permissions |
|----------|-------------|
| **org** | read, update, delete, manage_billing, manage_settings |
| **members** | read, invite, remove, update_role |
| **groups** | read, create, update, delete, manage_members |
| **roles** | read, create, update, delete, assign |
| **projects** | read, create, update, delete |
| **forms** | read, create, update, delete, publish, manage_permissions |
| **responses** | read, export, delete |
| **connections** | read, create, update, delete, use, view_credentials |
| **workflows** | read, create, update, delete, execute |
| **integrations** | read, create, update, delete |
| **audit** | read |

### Role Assignments

- **Assign to Users or Groups**: Flexible assignment targets
- **Scope to Project or Form**: Optional scoping for fine-grained control
- **Time-Limited Assignments**: Set expiration for temporary access
- **Audit Trail**: All assignments are logged

### RBAC Management Interfaces

1. **Web UI**: Organization Settings → Members/Groups/Roles tabs
2. **CLI**: `netpad users|groups|roles|assign|permissions` commands
3. **Terminal**: Same commands available in web terminal
4. **API**: Full REST API for programmatic access

### CLI/Terminal Commands

```bash
# Users
netpad users list -o <orgId>
netpad users add jane@example.com --role member
netpad users update jane@example.com --role admin
netpad users remove jane@example.com

# Groups
netpad groups create "Engineering" --role member
netpad groups add-member engineering jane@example.com
netpad groups remove-member engineering jane@example.com

# Custom Roles
netpad roles create "Billing Admin" --base viewer
netpad roles grant billing-admin org:manage_billing
netpad roles info billing-admin

# Role Assignments
netpad assign user jane@example.com editor
netpad assign group engineering admin
netpad unassign user jane@example.com editor

# Permissions
netpad permissions list
netpad permissions check forms:create
netpad whoami --effective
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | `/api/platform/orgs/{orgId}/members` | Member management |
| GET/POST | `/api/platform/orgs/{orgId}/groups` | Group CRUD |
| GET/POST | `/api/platform/orgs/{orgId}/roles` | Role management |
| GET/POST | `/api/platform/orgs/{orgId}/assignments` | Role assignments |
| GET | `/api/platform/users/me/permissions` | Effective permissions |

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
