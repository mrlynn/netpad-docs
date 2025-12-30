# Connection Vault

The Connection Vault securely stores MongoDB connection strings with encryption.

## What is the Connection Vault?

The Connection Vault provides:
- **Secure Storage**: Encrypted connection strings
- **Easy Access**: Use saved connections
- **Team Sharing**: Share connections with team
- **Connection Testing**: Verify connections work

## Adding Connections

### Manual Entry

1. **Go to Connection Vault**:
   - Navigate to settings
   - Click "Connection Vault"
   - Click "Add Connection"

2. **Enter Details**:
   - **Name**: Descriptive name
   - **Connection String**: MongoDB URI
   - **Database**: Default database
   - **Allowed Collections**: Restrict access (optional)

3. **Test Connection**:
   - Click "Test Connection"
   - Verify connection works
   - Save if successful

### From Atlas

If using MongoDB Atlas:
1. **Auto-Detect**: NetPad can detect clusters
2. **Select Cluster**: Choose from available clusters
3. **Auto-Configure**: Connection configured automatically

## Connection Security

### Encryption

- **AES-256-GCM**: Strong encryption
- **Encrypted Storage**: Connection strings encrypted at rest
- **Key Management**: Encryption keys managed securely
- **Never Exposed**: Keys never stored in database

### Access Control

- **Organization Level**: Connections per organization
- **Role-Based**: Access based on role
- **Permission Control**: Who can view/use connections

## Using Connections

### In Forms

When creating forms:
1. **Select Connection**: Choose from vault
2. **Select Database**: Choose database
3. **Select Collection**: Choose collection
4. **Auto-Connect**: Connection used automatically

### In Workflows

When building workflows:
1. **MongoDB Nodes**: Use saved connections
2. **Select Connection**: Choose from vault
3. **Configure Query**: Set up query
4. **Execute**: Workflow uses connection

### In Data Explorer

When browsing data:
1. **Select Connection**: Choose connection
2. **Browse Collections**: View collections
3. **Access Data**: Use connection securely

## Managing Connections

### Editing Connections

1. **Open Connection**: Click connection
2. **Edit Details**: Modify settings
3. **Update**: Save changes
4. **Test**: Verify still works

### Testing Connections

- **Test Button**: Test connection anytime
- **Status Indicator**: Shows connection status
- **Error Messages**: Clear error information
- **Auto-Test**: Periodic health checks

### Deleting Connections

1. **Select Connection**: Choose to delete
2. **Confirm Deletion**: Confirm action
3. **Check Dependencies**: Warn if in use
4. **Delete**: Remove connection

## Sharing Connections

### With Team Members

- **Organization Level**: Shared with organization
- **Role-Based**: Based on permissions
- **View Only**: Some roles view-only
- **Full Access**: Admins have full access

### Connection Permissions

- **Owner**: Full control
- **Admin**: Can edit and use
- **User**: Can use connection
- **Viewer**: View only

## Best Practices

1. **Use Descriptive Names**: Name connections clearly
2. **Test Regularly**: Verify connections work
3. **Limit Access**: Use allowed collections
4. **Rotate Credentials**: Update passwords regularly
5. **Monitor Usage**: Track connection usage
