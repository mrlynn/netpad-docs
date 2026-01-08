# Projects

Projects allow you to organize your work by environment (development, staging, production) or by initiative. Group forms, workflows, and connections within projects for better organization and management.

## What Are Projects?

Projects provide environment-based organization for your NetPad resources:

- **Group Resources**: Organize forms, workflows, and connections
- **Environment Separation**: Separate dev, staging, and production
- **Project Analytics**: Track performance per project
- **Export Projects**: Export entire projects for backup or migration

## Project Structure

```
Organization
├── Projects
│   ├── Development
│   │   ├── Forms
│   │   ├── Workflows
│   │   └── Connections
│   ├── Staging
│   │   ├── Forms
│   │   ├── Workflows
│   │   └── Connections
│   └── Production
│       ├── Forms
│       ├── Workflows
│       └── Connections
```

## Creating Projects

### Step 1: Create New Project

1. Navigate to **Projects** in the sidebar
2. Click **"New Project"**
3. Enter project details:
   - **Name**: Project name (e.g., "Production", "Client ABC")
   - **Description**: Optional description
   - **Environment**: Development, Staging, Production, or Custom

### Step 2: Configure Project

Set up project settings:

- **Environment Type**: Development, Staging, Production, Custom
- **Default Connection**: Default MongoDB connection for this project
- **Settings**: Project-specific settings

## Project Environments

### Development

**Purpose**: Build and test

- Experiment with new features
- Test form configurations
- Develop workflows
- Safe to make changes

### Staging

**Purpose**: Pre-production validation

- Test before production
- Validate configurations
- User acceptance testing
- Final checks

### Production

**Purpose**: Live deployment

- Active user forms
- Real data collection
- Production workflows
- Stable configurations

### Custom

**Purpose**: Client-specific or initiative-based

- Client-specific projects
- Initiative-based organization
- Custom categorization
- Flexible organization

## Managing Projects

### Viewing Projects

The projects dashboard shows:

- **Project Name**: Display name
- **Environment**: Environment type
- **Forms Count**: Number of forms
- **Workflows Count**: Number of workflows
- **Last Updated**: Last activity date
- **Actions**: Edit, Delete, Export

### Switching Projects

1. Click project selector in sidebar
2. Select project from list
3. All resources switch to selected project
4. Forms, workflows, and data are project-scoped

### Editing Projects

1. Open project settings
2. Modify project details
3. Update environment type
4. Change default connection
5. Save changes

### Deleting Projects

1. Open project settings
2. Click **"Delete Project"**
3. Confirm deletion
4. **Warning**: This deletes all project resources

## Project Resources

### Forms

Forms belong to projects:

- **Create Forms**: Forms created in project context
- **Move Forms**: Move forms between projects
- **Project Forms**: View all forms in project
- **Project Analytics**: Analytics per project

### Workflows

Workflows belong to projects:

- **Create Workflows**: Workflows created in project context
- **Move Workflows**: Move workflows between projects
- **Project Workflows**: View all workflows in project
- **Project Execution**: Execution tracking per project

### Connections

Connections can be project-specific:

- **Project Connections**: Connections for this project
- **Shared Connections**: Organization-level connections
- **Default Connection**: Set default for project

## Project Analytics

### Overview Dashboard

View project-level analytics:

- **Total Forms**: Forms in project
- **Total Workflows**: Workflows in project
- **Form Submissions**: Submissions across project forms
- **Workflow Executions**: Executions across project workflows
- **Activity Trends**: Activity over time

### Form Analytics

Aggregated form analytics per project:

- **Total Submissions**: All form submissions
- **Completion Rates**: Average completion rate
- **Top Forms**: Most active forms
- **Trends**: Submission trends

### Workflow Analytics

Aggregated workflow analytics per project:

- **Total Executions**: All workflow executions
- **Success Rate**: Average success rate
- **Top Workflows**: Most active workflows
- **Performance**: Execution performance

## Exporting Projects

### Export Entire Project

1. Open project settings
2. Click **"Export Project"**
3. Select what to export:
   - Forms
   - Workflows
   - Connections (metadata only)
   - Analytics data
4. Download export file

### Export Format

Projects export as JSON:

```json
{
  "project": {
    "name": "Production",
    "environment": "production",
    "description": "..."
  },
  "forms": [...],
  "workflows": [...],
  "connections": [...],
  "analytics": {...}
}
```

### Importing Projects

1. Navigate to Projects
2. Click **"Import Project"**
3. Upload project JSON file
4. Review import preview
5. Confirm import

## Project Best Practices

### Environment Separation

1. **Clear Separation**: Keep dev, staging, prod separate
2. **No Cross-Contamination**: Don't mix environments
3. **Promotion Path**: Dev → Staging → Production
4. **Testing**: Test in staging before production

### Naming Conventions

1. **Clear Names**: Use descriptive names
2. **Environment Prefix**: Prefix with environment (e.g., "Prod - Main")
3. **Client Names**: Include client name if applicable
4. **Consistent**: Use consistent naming across projects

### Resource Organization

1. **Group Related**: Group related forms/workflows
2. **Logical Structure**: Organize logically
3. **Documentation**: Document project purpose
4. **Clean Up**: Remove unused resources

### Access Control

1. **Project Permissions**: Control who can access projects
2. **Role-Based**: Use roles appropriately
3. **Restrict Production**: Limit production access
4. **Audit**: Track project access

## Use Cases

### Environment-Based

```
Development Project
├── Test Forms
├── Development Workflows
└── Test Connections

Staging Project
├── Pre-Production Forms
├── Validation Workflows
└── Staging Connections

Production Project
├── Live Forms
├── Production Workflows
└── Production Connections
```

### Client-Based

```
Client ABC Project
├── Client Forms
├── Client Workflows
└── Client Connections

Client XYZ Project
├── Client Forms
├── Client Workflows
└── Client Connections
```

### Initiative-Based

```
Q1 Campaign Project
├── Campaign Forms
├── Campaign Workflows
└── Campaign Analytics

Product Launch Project
├── Launch Forms
├── Launch Workflows
└── Launch Tracking
```

## Next Steps

- [Organizations](./organizations.md) - Learn about organizations
- [Forms](../forms/overview.md) - Create forms in projects
- [Workflows](../workflows/overview.md) - Create workflows in projects
