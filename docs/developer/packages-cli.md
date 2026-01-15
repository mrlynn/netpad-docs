# @netpad/cli

Command-line tool for managing NetPad applications. Search for packages, install applications from npm, create new application packages, and manage your NetPad projects from the terminal.

## Installation

### Global Installation

```bash
npm install -g @netpad/cli
```

### Using npx (Recommended)

```bash
npx @netpad/cli
```

This allows you to use the CLI without installing it globally.

## Authentication

Before using most commands, you'll need to authenticate with your NetPad instance:

```bash
netpad auth login
```

This will prompt you for:
- Your NetPad instance URL
- Your API key (get from Settings > API Keys)

The CLI stores your credentials securely for future use.

### Logout

```bash
netpad auth logout
```

## Package Management

### Search for Packages

Search the npm registry for NetPad packages:

```bash
# Search for packages
netpad search customer-portal

# Search with filters
netpad search feedback --type application
```

### Install Package

Install a NetPad application package from npm:

```bash
# Install from npm
netpad install @netpad/customer-portal

# Install specific version
netpad install @netpad/customer-portal@1.2.0

# Install to specific project
netpad install @netpad/customer-portal --project my-project
```

### List Installed Packages

```bash
# List all installed applications
netpad list

# List with details
netpad list --verbose
```

### Uninstall Package

```bash
netpad uninstall @netpad/customer-portal
```

## Application Package Development

### Create New Application Package

Scaffold a new NetPad application package:

```bash
# Create new application
netpad create my-application

# Create with template
netpad create my-application --template customer-portal
```

This creates a new directory with:
- `package.json` with NetPad metadata
- `dist/bundle.json` structure
- `README.md` template
- `CHANGELOG.md` template

### Build Package

Build your application package:

```bash
# Build package
netpad build

# Build with validation
netpad build --validate
```

This validates the package structure and generates the bundle.json file.

### Publish Package

Publish your application to npm:

```bash
# Publish to npm
netpad publish

# Publish with specific version
netpad publish --version 1.2.0

# Dry run (test without publishing)
netpad publish --dry-run
```

## Project Management

### List Projects

```bash
# List all projects
netpad projects list

# List with details
netpad projects list --verbose
```

### Create Project

```bash
netpad projects create my-project --env production
```

### Switch Project

```bash
netpad projects use my-project
```

## Configuration

### View Configuration

```bash
# View current configuration
netpad config

# View specific setting
netpad config get baseUrl
```

### Set Configuration

```bash
# Set configuration value
netpad config set baseUrl https://app.netpad.io
```

## Commands Reference

### Authentication

- `netpad auth login` - Authenticate with NetPad API
- `netpad auth logout` - Log out and clear credentials
- `netpad auth status` - Check authentication status

### Package Management

- `netpad search <query>` - Search for NetPad packages
- `netpad install <package>` - Install package from npm
- `netpad list` - List installed applications
- `netpad uninstall <package>` - Uninstall a package

### Package Development

- `netpad create <name>` - Create new application package
- `netpad build` - Build application package
- `netpad publish` - Publish application to npm
- `netpad validate` - Validate package structure

### Project Management

- `netpad projects list` - List all projects
- `netpad projects create <name>` - Create new project
- `netpad projects use <name>` - Switch to project
- `netpad projects delete <name>` - Delete project

### Configuration

- `netpad config` - View configuration
- `netpad config get <key>` - Get configuration value
- `netpad config set <key> <value>` - Set configuration value

### Utility

- `netpad version` - Show CLI version
- `netpad help` - Show help information
- `netpad help <command>` - Show help for specific command

## Examples

### Complete Workflow: Install and Use Package

```bash
# 1. Authenticate
netpad auth login

# 2. Search for packages
netpad search customer-portal

# 3. Install package
netpad install @netpad/customer-portal

# 4. List installed packages
netpad list
```

### Create and Publish Application

```bash
# 1. Create new application
netpad create my-customer-portal

# 2. Edit your application files
cd my-customer-portal
# ... make changes ...

# 3. Build package
netpad build

# 4. Test locally (optional)
# ... test your application ...

# 5. Publish to npm
netpad publish
```

### Working with Projects

```bash
# List projects
netpad projects list

# Create new project
netpad projects create staging --env staging

# Switch to project
netpad projects use staging

# Install package to specific project
netpad install @netpad/customer-portal --project staging
```

## Package Structure

When you create a new package, it follows this structure:

```
my-application/
├── package.json          # npm package.json with NetPad metadata
├── dist/
│   └── bundle.json       # Application bundle
├── README.md            # Package documentation
├── CHANGELOG.md         # Version history
└── src/                 # Source files (optional)
```

### package.json NetPad Metadata

```json
{
  "name": "@netpad/app-my-application",
  "version": "1.0.0",
  "description": "My NetPad application",
  "keywords": ["netpad", "netpad-app"],
  "netpad": {
    "type": "application",
    "applicationId": "app_my_application",
    "name": "My Application",
    "version": "1.0.0",
    "minNetPadVersion": "3.0.0",
    "category": "customer-engagement"
  }
}
```

## Environment Variables

The CLI respects these environment variables:

- `NETPAD_URL` - NetPad instance URL (overrides config)
- `NETPAD_API_KEY` - API key (overrides config)
- `NETPAD_PROJECT` - Default project to use

## Troubleshooting

### Authentication Issues

If you're having authentication problems:

```bash
# Check auth status
netpad auth status

# Re-authenticate
netpad auth logout
netpad auth login
```

### Package Installation Issues

If package installation fails:

```bash
# Check npm registry access
npm ping

# Verify package exists
npm view @netpad/customer-portal

# Install with verbose logging
netpad install @netpad/customer-portal --verbose
```

### Build Issues

If package build fails:

```bash
# Validate package structure
netpad validate

# Build with verbose output
netpad build --verbose
```

## Resources

- **NPM Package**: [@netpad/cli](https://www.npmjs.com/package/@netpad/cli)
- **GitHub**: [github.com/mongodb/netpad](https://github.com/mongodb/netpad)
- **Marketplace**: [Browse Applications](../platform/marketplace.md)
- **Applications Guide**: [Applications Documentation](../platform/applications.md)

## Related Documentation

- [Developer Packages Overview](./packages.md) - All NetPad packages
- [Forms Package](./packages-forms.md) - React form renderer
- [Workflows Package](./packages-workflows.md) - Workflow API client
- [MCP Server](./mcp-server.md) - AI-powered development tools
- [Marketplace](../platform/marketplace.md) - Discover and share applications
- [Applications](../platform/applications.md) - Building applications
