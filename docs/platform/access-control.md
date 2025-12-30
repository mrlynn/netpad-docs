# Access Control

NetPad provides granular access control at multiple levels.

## Access Control Levels

### Organization Level

Control organization access:
- **Members**: Who can access organization
- **Roles**: Owner, Admin, Member, Viewer
- **Permissions**: What each role can do

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

## Best Practices

1. **Principle of Least Privilege**: Grant minimum needed access
2. **Regular Reviews**: Review permissions regularly
3. **Use Roles**: Assign appropriate roles
4. **Document Access**: Keep access documented
