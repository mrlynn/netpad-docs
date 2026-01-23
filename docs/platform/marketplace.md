# Marketplace

The NetPad Marketplace is a public catalog where you can discover, share, and install packages. Browse packages created by the community or publish your own.

## Package Types

The marketplace offers three distinct types of packages:

| Package Type | Description | Contents |
|--------------|-------------|----------|
| **Applications** | Complete solution bundles | Forms + Workflows + Connections + Configuration |
| **Forms** | Standalone form definitions | Single form with fields, validation, and styling |
| **Workflows** | Automation templates | Workflow definitions with nodes and triggers |

### Applications (Primary)

**Applications are the primary and most comprehensive package type.** They represent complete, ready-to-deploy solutions that bundle everything needed for a specific use case:

- **Forms**: All forms associated with the application
- **Workflows**: Automation workflows that process form data
- **Connections**: Form-to-workflow triggers and integrations
- **Configuration**: Settings, themes, and customizations
- **Releases**: Versioned snapshots with semantic versioning (X.Y.Z)

Applications are ideal when you need a complete solution—for example, a Customer Portal application that includes intake forms, approval workflows, and notification triggers all working together.

### Forms

**Standalone forms** are individual form definitions that can be imported independently:

- Single form with all field configurations
- Validation rules and conditional logic
- Theming and branding settings
- No workflow dependencies

Forms are ideal when you need a specific form type (like a survey, registration form, or feedback form) without the accompanying automation.

### Workflows

**Standalone workflows** are automation templates that can be imported independently:

- Workflow definition with node configurations
- Trigger configurations (form submission, webhook, schedule, etc.)
- Node connections and data mappings
- No specific form dependencies

Workflows are ideal when you need a specific automation pattern (like email notifications, data sync, or approval routing) that can be connected to your existing forms.

## Browsing the Marketplace

### Accessing the Marketplace

1. Navigate to **Marketplace** in the sidebar
2. Browse packages by type and category
3. Use search to find specific packages
4. Filter by source (web marketplace or npm packages)

### Filtering by Package Type

The marketplace provides clear filtering options to find exactly what you need:

- **All Packages**: View everything available
- **Applications**: Complete solution bundles (featured first)
- **Forms**: Standalone form definitions
- **Workflows**: Automation templates

Applications are prominently displayed at the top of the marketplace, as they represent the most comprehensive and immediately useful packages.

### Categories

Packages are organized by category:

- **Business**: CRM, sales, operations
- **Support**: Helpdesk, ticketing, customer service
- **Events**: Registration, RSVP, event management
- **Healthcare**: Patient intake, medical forms
- **Finance**: Expense reports, financial applications
- **Education**: Course enrollment, student management
- **Real Estate**: Property management, rental applications
- **E-commerce**: Order forms, product management
- **And more**: Custom categories as needed

### Search and Filter

- **Text Search**: Search by name, description, tags
- **Type Filter**: Applications, Forms, or Workflows
- **Category Filter**: Filter by package category
- **Source Filter**: Web marketplace or npm packages
- **Official Filter**: Show only official NetPad packages
- **Tags**: Filter by package tags

## Package Details

### Viewing Package Details

Click on a package to see:

- **Overview**: Description and key features
- **Screenshots**: Visual previews
- **Contents**: What's included (forms, workflows, etc.)
- **Requirements**: Dependencies and prerequisites
- **Installation**: How to install and set up
- **Documentation**: Usage instructions
- **Reviews**: User reviews and ratings
- **Version History**: Available versions

### Package Metadata

Each package includes:

- **Name**: Package name
- **Type**: Application, Form, or Workflow
- **Description**: What it does
- **Category**: Package category
- **Tags**: Searchable tags
- **Author**: Who created it
- **Version**: Current version
- **License**: License information
- **Source**: Official or Community

## Publishing to the Marketplace

You can publish any of the three package types to the marketplace. There are two publishing methods:

1. **Web UI Publishing** - Publish directly from the NetPad interface (easiest)
2. **npm Publishing** - Publish as an npm package for developer distribution

| Type | Publish From | npm Keyword |
|------|--------------|-------------|
| **Application** | Application detail page | `netpad-app` |
| **Form** | Form editor menu | `netpad-form` |
| **Workflow** | Workflow editor menu | `netpad-workflow` |

### Quick Start: Publish a Form

1. Open your form in the **Form Builder**
2. Click the **menu icon** (⋮) → **"Publish to Marketplace"**
3. Fill out name, description, category, and tags
4. Add screenshots
5. Click **"Submit for Review"**

That's it! Platform admins will review and approve your form.

### Full Publishing Guide

For detailed information on package formats, npm publishing, and best practices:

**[📖 Complete Publishing Guide →](./publishing-packages.md)**

The guide covers:
- Package formats for Applications, Forms, and Workflows
- `package.json` and `bundle.json` structure
- CLI commands for creating and publishing packages
- The review process and approval criteria
- Managing published packages

## Installing Packages

### Installing Applications

1. Browse the marketplace and find an application
2. Click **"Import"**
3. Select target project
4. Configure connections and customize settings
5. Application is ready to use with all forms and workflows

### Installing Forms

1. Browse forms in the marketplace
2. Click **"Import"**
3. Select target project (or application)
4. Form is added and ready for customization

### Installing Workflows

1. Browse workflows in the marketplace
2. Click **"Import"**
3. Select target project (or application)
4. Connect triggers to your forms
5. Workflow is ready for execution

### From npm

Install packages directly from npm registry:

```bash
# Install an application
npm install @netpad/customer-portal

# Using NetPad CLI
npx @netpad/cli install @netpad/customer-portal
```

### Dependency Resolution

When installing packages:

- **Automatic Dependencies**: Dependencies installed automatically
- **Version Compatibility**: Checks version compatibility
- **Conflict Resolution**: Handles dependency conflicts
- **Installation Log**: Shows what was installed

## Official vs Community

### Official Packages

NetPad-verified packages:

- **@netpad/ Scope**: Official package scope
- **Verified**: Reviewed and verified by NetPad team
- **Supported**: Official support available
- **Quality**: Meets NetPad quality standards

### Community Packages

User-created packages:

- **Various Scopes**: Different npm scopes
- **Community Support**: Community-provided support
- **Varied Quality**: Quality varies by author
- **Open Source**: Often open source

## npm Package Integration

### Package Discovery

NetPad automatically discovers packages:

- **Keyword Search**: Searches npm for `netpad-app`, `netpad-form`, `netpad-workflow`
- **Scope Support**: Supports `@netpad/` and community scopes
- **Background Sync**: Keeps marketplace up-to-date
- **Manual Sync**: Trigger sync via API

### Package Structure

NetPad packages include:

- **package.json**: Standard npm package.json with NetPad metadata
- **Package Type**: `application`, `form`, or `workflow`
- **Package Metadata**: Name, description, version, category, tags
- **Dependencies**: Application, plugin, workflow template dependencies
- **Configuration Schemas**: Setup configuration schemas
- **Bundle Content**: Application bundle, form definition, or workflow definition

### Publishing to npm

1. **Generate Package**: Create npm-ready package from your content
2. **Package Metadata**: Add NetPad-specific metadata including type
3. **Bundle Export**: Include complete bundle
4. **Publish**: Publish to npm registry

## Best Practices

### For Publishers

1. **Choose the Right Type**:
   - Use **Application** for complete solutions with forms + workflows
   - Use **Form** for reusable form templates
   - Use **Workflow** for reusable automation patterns
2. **Complete Metadata**: Fill out all fields including type
3. **Good Screenshots**: Show the package in action
4. **Clear Documentation**: Explain how to use and customize
5. **Test Before Publishing**: Ensure everything works
6. **Maintain**: Keep packages updated
7. **Respond to Feedback**: Engage with users

### For Users

1. **Filter by Type**: Use type filters to find exactly what you need
2. **Start with Applications**: For complete solutions, look at applications first
3. **Review Before Installing**: Check requirements and documentation
4. **Test in Dev**: Test in development environment first
5. **Customize**: Adapt to your needs
6. **Report Issues**: Report bugs or suggest improvements
7. **Review**: Leave reviews to help others

## Next Steps

- [Publishing Guide](./publishing-packages.md) - Detailed guide on publishing packages
- [Applications](./applications.md) - Learn about applications
- [Projects](./projects.md) - Organize packages in projects
- [Developer Packages](../developer/packages.md) - Use CLI and packages
