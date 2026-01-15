# Applications

Applications are first-class entities in NetPad that group related forms, workflows, and connections together. They provide organization, versioning, sharing, and access control capabilities.

## What Are Applications?

Applications are containers that organize related resources:

- **Forms**: All forms associated with the application
- **Workflows**: Automation workflows for the application
- **Connections**: Form-to-workflow triggers and integrations
- **Releases**: Versioned snapshots with semantic versioning
- **Stats**: Application-level metrics

## Why Use Applications?

Applications provide several benefits:

- **Organization**: Group related forms and workflows logically
- **Versioning**: Create releases to snapshot applications at specific versions
- **Sharing**: Publish applications to the marketplace
- **Export**: Export entire applications as bundles
- **Access Control**: Fine-grained permissions at application level
- **Insights**: Track application-level statistics

## Creating Applications

### Step 1: Create New Application

1. Navigate to **Applications** in the sidebar
2. Click **"New Application"**
3. Enter application details:
   - **Name**: Descriptive name (e.g., "Customer Portal")
   - **Description**: What the application does
   - **Category**: Application category
   - **Tags**: Searchable tags

### Step 2: Add Resources

Add forms, workflows, and connections to your application:

1. **Add Forms**:
   - Click **"Add Form"** in application
   - Select existing forms or create new ones
   - Forms are linked to the application

2. **Add Workflows**:
   - Click **"Add Workflow"**
   - Select existing workflows or create new ones
   - Workflows are linked to the application

3. **Add Connections**:
   - Configure form-to-workflow triggers
   - Set up integrations
   - Define data flows

## Application Structure

```
Application: Customer Portal
├── Forms
│   ├── Contact Form
│   ├── Support Ticket Form
│   └── Feedback Form
├── Workflows
│   ├── Email Notification Workflow
│   └── Ticket Routing Workflow
├── Connections
│   ├── Contact → Email Notification
│   └── Support Ticket → Ticket Routing
└── Releases
    ├── v1.0.0 (Initial release)
    ├── v1.1.0 (Added feedback form)
    └── v2.0.0 (Major update)
```

## Application Releases

### Creating Releases

Releases are versioned snapshots of your application:

1. **Prepare Application**:
   - Ensure all forms and workflows are configured
   - Test everything works correctly
   - Document changes

2. **Create Release**:
   - Click **"Create Release"** in application
   - Enter version number (semantic versioning: X.Y.Z)
   - Add changelog notes
   - Click **"Create Release"**

3. **Release Snapshot**:
   - Forms, workflows, and connections are snapshotted
   - Release is immutable
   - Can be restored or exported

### Semantic Versioning

Releases use semantic versioning (Major.Minor.Patch):

- **Major (X.0.0)**: Breaking changes
- **Minor (0.X.0)**: New features, backward compatible
- **Patch (0.0.X)**: Bug fixes, backward compatible

**Example**:
```
v1.0.0 - Initial release
v1.1.0 - Added feedback form (new feature)
v1.1.1 - Fixed email notification bug (patch)
v2.0.0 - Redesigned forms (breaking changes)
```

### Release Features

- **Immutable Snapshots**: Releases cannot be modified
- **Changelog Tracking**: Document what changed
- **Manifest Generation**: Automatic manifest for marketplace
- **Version Suggestion**: AI suggests next version based on changes
- **Export**: Export releases as bundles

## Application Permissions (RBAC)

Applications have fine-grained access control separate from organization roles.

### Permission Roles

| Role | Capabilities |
|------|--------------|
| **Owner** | Full control: edit, manage permissions, create releases, delete |
| **Editor** | Edit application, create releases, cannot manage permissions |
| **Analyst** | View application, analyze data, read-only access |
| **Viewer** | Read-only access to application and its resources |

### Access Modes

Applications can be set to:

- **org_members**: All organization members have access (based on org role)
- **explicit**: Permission-based access (requires explicit permission grants)

### Managing Permissions

1. **Open Application**: Navigate to application detail view
2. **Permissions Tab**: Click **"Permissions"** tab
3. **Grant Permissions**:
   - Click **"Add Permission"**
   - Select user from organization members
   - Choose role (Editor, Analyst, Viewer)
   - Click **"Grant"**

4. **Update Permissions**:
   - Click edit on existing permission
   - Change role
   - Save changes

5. **Revoke Permissions**:
   - Click delete on permission
   - Confirm removal

### Contract Integration

Active contracts restrict editing:

- **Owners**: Always have full access
- **Explicit Permissions**: Users with explicit permissions can edit
- **Others**: Read-only access when contract is active

## Application Contracts & Protection

### Contract Definition

Define public API surface for your application:

- **Inputs**: What data the application accepts
- **Outputs**: What data the application produces
- **Side Effects**: External actions (emails, webhooks, etc.)
- **Events**: Events the application emits
- **Behaviors**: How the application behaves

### Contract Lifecycle

Contracts have lifecycle states:

- **Draft**: Being defined, not enforced
- **Active**: Enforced, breaking changes require major version bump
- **Deprecated**: Still active but being phased out

### Breaking Change Detection

When creating a release:

1. **Contract Comparison**: Compare current contract with previous release
2. **Change Detection**: Identify breaking vs non-breaking changes
3. **Version Validation**: Require major version bump for breaking changes
4. **Migration Guides**: Auto-generate migration instructions

### Component Protection

Lock forms and workflows to prevent accidental modifications:

- **Protection Indicators**: Visual lock status in editors
- **Editable Fields**: Explicit fields that can be modified
- **Protected Fields**: Fields locked by contract
- **Unlock Process**: Owners can unlock for updates

## Application Marketplace

### Publishing Applications

Share your applications with the community:

1. **Prepare Application**:
   - Create release
   - Add marketplace metadata
   - Write description
   - Add screenshots

2. **Submit to Marketplace**:
   - Click **"Publish to Marketplace"**
   - Fill out marketplace form
   - Submit for review

3. **Admin Review**:
   - Platform admins review submission
   - Approve or reject with feedback
   - Official designation for verified apps

4. **Published**:
   - Application appears in marketplace
   - Others can discover and import
   - You can manage from "My Applications"

### My Applications

Manage your published applications:

- **View Published**: See all your published applications
- **Edit Listing**: Update marketplace listing
- **Unpublish**: Remove from marketplace
- **Delete**: Delete application (requires confirmation)

### Importing Applications

Import applications from the marketplace:

1. **Browse Marketplace**: Find applications by category, tags, or search
2. **Preview Application**: View details, screenshots, requirements
3. **Import**: Click **"Import"** to add to your project
4. **Configure**: Set up connections and customize as needed

### Official vs Community

- **Official**: NetPad-verified applications (`@netpad/` scope)
- **Community**: User-created applications (various scopes)

## npm Package Integration

### Publishing to npm

Applications can be published as npm packages:

1. **Generate Package**: Create npm-ready package from application
2. **Package Structure**: Automatic package.json with NetPad metadata
3. **Bundle Export**: Complete application bundle included
4. **Publish**: Publish to npm registry

### Installing from npm

Install applications directly from npm:

1. **Search npm**: Find NetPad packages by keywords
2. **Install**: Use npm install or NetPad CLI
3. **Dependency Resolution**: Automatic dependency installation
4. **Version Support**: Install specific versions or ranges

### npm Registry Sync

- **Automatic Discovery**: NetPad discovers packages on npm
- **Background Sync**: Keeps marketplace up-to-date
- **Manual Sync**: Trigger sync via API
- **Status Tracking**: Monitor sync status and errors

## Application Analytics

Track application-level metrics:

- **Forms Count**: Number of forms in application
- **Workflows Count**: Number of workflows
- **Connections Count**: Number of connections
- **Submissions**: Total form submissions
- **Workflow Executions**: Total workflow runs
- **Release History**: All releases and versions

## Best Practices

### Organization

1. **Logical Grouping**: Group related forms and workflows
2. **Clear Naming**: Use descriptive application names
3. **Good Descriptions**: Explain what the application does
4. **Consistent Structure**: Follow consistent patterns

### Versioning

1. **Semantic Versioning**: Follow X.Y.Z format
2. **Clear Changelogs**: Document all changes
3. **Test Before Release**: Ensure everything works
4. **Major Versions**: Use for breaking changes

### Permissions

1. **Principle of Least Privilege**: Grant minimum necessary permissions
2. **Regular Review**: Review permissions periodically
3. **Document Access**: Document who has access and why
4. **Contract Protection**: Use contracts to protect critical applications

### Marketplace

1. **Complete Metadata**: Fill out all marketplace fields
2. **Good Screenshots**: Show application in action
3. **Clear Documentation**: Explain how to use
4. **Maintain**: Keep applications updated

## Next Steps

- [Application Marketplace](./marketplace.md) - Discover and share applications
- [Projects](./projects.md) - Organize applications in projects
- [Organizations](./organizations.md) - Manage organization resources
