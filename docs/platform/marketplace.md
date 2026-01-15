# Application Marketplace

The Application Marketplace is a public catalog where you can discover, share, and install NetPad applications. Browse applications created by the community or publish your own.

## Overview

The marketplace provides:

- **Discovery**: Find applications by category, tags, or search
- **Sharing**: Publish your applications for others to use
- **Installation**: One-click import into your projects
- **npm Integration**: Install applications from npm registry
- **Official Apps**: NetPad-verified applications

## Browsing the Marketplace

### Accessing the Marketplace

1. Navigate to **Marketplace** in the sidebar
2. Browse applications by category
3. Use search to find specific applications
4. Filter by source (web marketplace or npm packages)

### Marketplace Categories

Applications are organized by category:

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
- **Category Filter**: Filter by application category
- **Source Filter**: Web marketplace or npm packages
- **Official Filter**: Show only official NetPad applications
- **Tags**: Filter by application tags

## Application Details

### Viewing Application Details

Click on an application to see:

- **Overview**: Description and key features
- **Screenshots**: Visual previews of the application
- **Requirements**: Dependencies and prerequisites
- **Installation**: How to install and set up
- **Documentation**: Usage instructions
- **Reviews**: User reviews and ratings
- **Version History**: Available versions

### Application Metadata

Each application includes:

- **Name**: Application name
- **Description**: What it does
- **Category**: Application category
- **Tags**: Searchable tags
- **Author**: Who created it
- **Version**: Current version
- **License**: License information
- **Source**: Official or Community

## Publishing Applications

### Preparing Your Application

Before publishing:

1. **Create Release**: Create a release version
2. **Test Thoroughly**: Ensure everything works
3. **Documentation**: Write clear documentation
4. **Screenshots**: Take good screenshots
5. **Metadata**: Complete all metadata fields

### Publishing Process

1. **Open Application**: Navigate to your application
2. **Publish to Marketplace**: Click **"Publish to Marketplace"**
3. **Fill Out Form**:
   - Application name and description
   - Category and tags
   - Screenshots
   - Documentation
   - License information

4. **Submit for Review**: Submit to marketplace
5. **Admin Review**: Platform admins review submission
6. **Approval**: Application published after approval

### Admin Review Workflow

Platform admins review submissions:

- **Review Criteria**: Functionality, documentation, quality
- **Approval**: Approve for marketplace publication
- **Rejection**: Reject with feedback for improvements
- **Official Designation**: Mark as official if verified

### My Applications

Manage your published applications:

- **View Published**: See all your published applications
- **Edit Listing**: Update marketplace listing
- **Unpublish**: Remove from marketplace
- **Delete**: Delete application (requires confirmation)

## Installing Applications

### From Marketplace

1. **Browse Marketplace**: Find application you want
2. **Preview**: Review application details
3. **Import**: Click **"Import"** button
4. **Select Project**: Choose target project
5. **Configure**: Set up connections and customize

### From npm

Install applications directly from npm registry:

1. **Search npm**: Find NetPad packages
2. **Install via CLI**:
   ```bash
   npm install @netpad/customer-portal
   # or
   npx @netpad/cli install @netpad/customer-portal
   ```

3. **Import in NetPad**: Application appears in marketplace
4. **Configure**: Set up as needed

### Dependency Resolution

When installing applications:

- **Automatic Dependencies**: Dependencies installed automatically
- **Version Compatibility**: Checks version compatibility
- **Conflict Resolution**: Handles dependency conflicts
- **Installation Log**: Shows what was installed

## Official vs Community Applications

### Official Applications

NetPad-verified applications:

- **@netpad/ Scope**: Official package scope
- **Verified**: Reviewed and verified by NetPad team
- **Supported**: Official support available
- **Quality**: Meets NetPad quality standards

### Community Applications

User-created applications:

- **Various Scopes**: Different npm scopes
- **Community Support**: Community-provided support
- **Varied Quality**: Quality varies by author
- **Open Source**: Often open source

## npm Package Integration

### Package Discovery

NetPad automatically discovers packages:

- **Keyword Search**: Searches npm for `netpad-app`, `netpad-plugin`
- **Scope Support**: Supports `@netpad/` and community scopes
- **Background Sync**: Keeps marketplace up-to-date
- **Manual Sync**: Trigger sync via API

### Package Structure

NetPad packages include:

- **package.json**: Standard npm package.json with NetPad metadata
- **Application Metadata**: Name, description, version, category, tags
- **Dependencies**: Application, plugin, workflow template dependencies
- **Configuration Schemas**: Setup configuration schemas
- **Bundle.json**: Complete application bundle

### Publishing to npm

1. **Generate Package**: Create npm-ready package from application
2. **Package Metadata**: Add NetPad-specific metadata
3. **Bundle Export**: Include complete application bundle
4. **Publish**: Publish to npm registry

### Installing from npm

1. **Search**: Find packages using npm search or NetPad CLI
2. **Install**: Use npm install or NetPad CLI
3. **Sync**: Package appears in marketplace after sync
4. **Use**: Import and configure in NetPad

## Best Practices

### For Publishers

1. **Complete Metadata**: Fill out all fields
2. **Good Screenshots**: Show application in action
3. **Clear Documentation**: Explain how to use
4. **Test Before Publishing**: Ensure everything works
5. **Maintain**: Keep applications updated
6. **Respond to Feedback**: Engage with users

### For Users

1. **Review Before Installing**: Check requirements and documentation
2. **Test in Dev**: Test in development environment first
3. **Customize**: Adapt to your needs
4. **Report Issues**: Report bugs or suggest improvements
5. **Review**: Leave reviews to help others

## Next Steps

- [Applications](./applications.md) - Learn about applications
- [Projects](./projects.md) - Organize applications in projects
- [Developer Packages](../developer/packages.md) - Use CLI and packages
