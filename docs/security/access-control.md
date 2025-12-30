# Access Control

NetPad provides granular access control at multiple levels.

## Access Control Levels

### Organization Level

Control who can access the organization:
- **Members**: Organization members
- **Roles**: Owner, Admin, Member, Viewer
- **Permissions**: What each role can do

### Form Level

Control form access:
- **Public**: Anyone with URL
- **Authenticated**: Must sign in
- **Restricted**: Domain/user whitelist

### Connection Level

Control connection access:
- **Organization**: Shared with organization
- **Roles**: Based on organization role
- **Permissions**: View, use, edit

## Role-Based Access Control

### Organization Roles

**Owner**:
- Full control
- Delete organization
- Manage billing
- All permissions

**Admin**:
- Manage members
- Configure settings
- Create/edit resources
- Cannot delete

**Member**:
- Create forms/workflows
- Edit own resources
- View data
- Limited settings

**Viewer**:
- Read-only access
- View resources
- View data
- No changes

## Form Access Control

### Public Forms

- Anyone with URL can submit
- No authentication required
- Best for: Surveys, contact forms

### Authenticated Forms

- Must sign in to submit
- Tracks who submitted
- Best for: Internal forms

### Restricted Forms

- Domain whitelist
- User whitelist
- Best for: Private forms

## Best Practices

1. **Principle of Least Privilege**: Grant minimum needed
2. **Regular Reviews**: Review permissions regularly
3. **Use Roles**: Assign appropriate roles
4. **Monitor Access**: Track access patterns

## Next Steps

- [Overview](./overview.md) - Security overview
- [Best Practices](./best-practices.md) - Security best practices
