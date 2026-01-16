# Access Control

NetPad provides granular access control at multiple levels with a comprehensive three-tier permission system.

## Three-Tier Permission System

NetPad uses a hierarchical permission system with three levels:

```
Organization Level
└── Application Level
    └── Form Level
```

| Level | Description | Roles |
|-------|-------------|-------|
| **Organization** | Access to organization and its resources | Owner, Admin, Member, Viewer |
| **Application** | Fine-grained permissions within specific applications | Owner, Editor, Analyst, Viewer |
| **Form** | Permissions on individual forms | Owner, Editor, Analyst, Viewer |

## Access Control Levels

### Organization Level

Control organization access:
- **Members**: Who can access organization
- **Roles**: Owner, Admin, Member, Viewer
- **Permissions**: What each role can do
- **Inheritance**: Organization owners/admins have full access to all applications

### Application Level

Control application access separate from organization roles:
- **Access Modes**: `org_members` (all org members) or `explicit` (permission-based)
- **Roles**: Owner, Editor, Analyst, Viewer
- **Contract Integration**: Active contracts restrict editing to owners and explicit permission holders
- **Permission Grants**: Explicit grants to specific organization members

### Form Level

Control form access:
- **Public**: Anyone with URL
- **Authenticated**: Must sign in
- **Restricted**: Domain/user whitelist
- **Roles**: Owner, Editor, Analyst, Viewer

### Connection Level

Control connection access:
- **Organization**: Shared with organization
- **Roles**: Owner, Admin, User, Viewer
- **Permissions**: View, use, edit, delete

## Organization Roles

### Owner

Full control:
- Delete organization
- Manage billing
- All admin permissions
- Manage members

### Admin

Management permissions:
- Manage members
- Configure settings
- Create/edit resources
- Cannot delete organization

### Member

Standard permissions:
- Create forms/workflows
- Edit own resources
- View organization data
- Limited settings access

### Viewer

Read-only access:
- View resources
- View data
- Cannot make changes
- No creation permissions

## Form Access Control

### Public Forms

- **Anyone**: Can submit with URL
- **No Authentication**: No sign-in required
- **Best For**: Surveys, contact forms

### Authenticated Forms

- **Must Sign In**: Users must authenticate
- **Tracked**: Submissions linked to user
- **Best For**: Internal forms, member content

### Restricted Forms

- **Domain Whitelist**: Only specific domains
- **User Whitelist**: Only specific users
- **Best For**: Private forms, exclusive access

## Form Roles

### Owner

- Full control
- Delete form
- Manage access
- All permissions

### Editor

- Edit form
- View responses
- Cannot delete
- Manage settings

### Analyst

- View responses
- View analytics
- Export data
- Cannot edit form

### Viewer

- View form only
- Cannot see responses
- Read-only access

## Application Roles

Application-level roles provide fine-grained access control separate from organization roles.

### Owner

Full application control:
- Edit application and all resources
- Manage permissions (grant, update, revoke)
- Create releases
- Delete application
- Manage contracts and protection

### Editor

Edit permissions:
- Edit application and resources
- Create releases
- Cannot manage permissions
- Cannot delete application

### Analyst

Analysis permissions:
- View application
- Analyze data
- Export data
- Read-only access
- Cannot edit or create releases

### Viewer

Read-only access:
- View application
- View resources
- Cannot edit or analyze
- Cannot create releases

### Managing Application Permissions

1. **Open Application**: Navigate to application detail view
2. **Permissions Tab**: Click **"Permissions"** tab
3. **Grant Permissions**:
   - Click **"Add Permission"**
   - Select user from organization members
   - Choose role (Owner, Editor, Analyst, Viewer)
   - Click **"Grant"**
4. **Update Permissions**: Edit existing permissions to change roles
5. **Revoke Permissions**: Delete permission to remove access

### Access Modes

Applications support two access modes:

| Mode | Description | Use Case |
|------|-------------|----------|
| **org_members** | All organization members have access (based on org role) | Team-shared applications |
| **explicit** | Only users with explicit permission grants have access | Sensitive or restricted applications |

### Contract Integration

When an application has an active contract:
- **Owners**: Always have full access
- **Explicit Permission Holders**: Users with explicit permissions can edit
- **Others**: Read-only access to protected components

## Best Practices

1. **Principle of Least Privilege**: Grant minimum needed access
2. **Regular Reviews**: Review permissions regularly
3. **Use Roles**: Assign appropriate roles
4. **Document Access**: Keep access documented
5. **Use Contracts**: Protect critical applications with contracts
6. **Explicit Access for Sensitive Apps**: Use explicit access mode for sensitive applications
7. **Audit Permissions**: Regularly audit application permissions
