---
sidebar_position: 2
title: "@netpad/cli"
description: "Command-line interface for managing NetPad forms, workflows, and applications"
---

# @netpad/cli

The official command-line interface for NetPad. Manage forms, query data, generate code, and control your entire NetPad workspace from the terminal.

<div className="badges">

[![npm version](https://img.shields.io/npm/v/@netpad/cli.svg)](https://www.npmjs.com/package/@netpad/cli)
[![npm downloads](https://img.shields.io/npm/dm/@netpad/cli.svg)](https://www.npmjs.com/package/@netpad/cli)

</div>

## Features

| Feature | Description |
|---------|-------------|
| 🚀 **Interactive Shell** | Full terminal experience with Unix-like commands |
| 📊 **Data Queries** | Query submissions with MongoDB-like filters |
| ⚡ **Code Generation** | Scaffold React/Next.js components from forms |
| 👥 **RBAC Management** | Manage users, groups, roles, and permissions |
| 📦 **Package Management** | Install and publish marketplace packages |

---

## Installation

### Global Installation (Recommended)

```bash
npm install -g @netpad/cli
```

### Using npx

```bash
npx @netpad/cli <command>
```

### Verify Installation

```bash
netpad --version
netpad whoami
```

---

## Quick Start

```bash
# 1. Authenticate with your NetPad account
netpad login

# 2. Start interactive shell
netpad

# 3. List your forms
> list forms

# 4. Query submissions
> query submissions --form contact-form --limit 10

# 5. Generate a React component
> scaffold react contact-form
```

---

## Interactive Shell

When you run `netpad` with no arguments, it launches an interactive shell that mirrors the NetPad web terminal experience.

```bash
netpad
```

```
 _   _      _   ____           _
| \ | | ___| |_|  _ \ __ _  __| |
|  \| |/ _ \ __| |_) / _` |/ _` |
| |\  |  __/ |_|  __/ (_| | (_| |
|_| \_|\___|\__|_|   \__,_|\__,_|

Welcome to NetPad CLI v0.3.0
Type 'help' for available commands

netpad> _
```

### Shell Commands

| Command | Description |
|---------|-------------|
| `ls`, `cd`, `pwd` | Navigate the virtual filesystem |
| `cat <file>` | View form/workflow definitions |
| `tree` | Display directory structure |
| `list forms` | List all forms |
| `list workflows` | List all workflows |
| `list submissions` | List form submissions |
| `show form <id>` | Display form details |
| `create form "Name"` | Create a new form |
| `query submissions` | Query data with filters |
| `scaffold react <id>` | Generate React component |
| `help` | Show all commands |
| `exit` | Exit the shell |

---

## Authentication

### Login

Authenticate with NetPad and store credentials securely.

```bash
# Interactive login (opens browser)
netpad login

# Login with API key
netpad login --api-key np_live_xxxxxxxxxxxx

# Login with specific org and project
netpad login --api-key np_live_xxx --org org_xxx --project proj_xxx

# Use named profile for multiple environments
netpad login --profile production --api-key np_live_xxx
netpad login --profile staging --api-key np_test_xxx
```

**Options:**

| Option | Description |
|--------|-------------|
| `--api-key <key>` | NetPad API key |
| `-o, --org <orgId>` | Organization ID |
| `-p, --project <projectId>` | Project ID |
| `--profile <name>` | Named profile for multi-environment setups |
| `--api-url <url>` | Custom API URL (for self-hosted instances) |

Credentials are stored in `~/.netpad/config.json`.

### Logout

```bash
netpad logout
```

### Check Status

```bash
netpad whoami
netpad whoami --effective  # Show computed permissions
```

---

## Data Commands

### Query Submissions

Query form submissions with MongoDB-like filters. Supports natural language conditions and JSON filters.

```bash
# Basic query
netpad query submissions --form contact-form

# Filter with natural language
netpad query submissions --form feedback --where "rating < 3"
netpad query submissions --where "status = pending"

# Complex MongoDB filter
netpad query submissions --filter '{"data.category": "bug", "data.priority": {"$gte": 3}}'

# Limit and format
netpad query submissions --form survey --limit 50 --json
```

**Options:**

| Option | Description |
|--------|-------------|
| `-f, --form <formId>` | Filter by form ID or slug |
| `-w, --where <condition>` | Natural language filter (e.g., `"rating < 3"`) |
| `--filter <json>` | MongoDB query filter as JSON |
| `-l, --limit <n>` | Maximum results (default: 20, max: 100) |
| `--json` | Output raw JSON (for piping) |

**Supported Operators:**

| Operator | Aliases | Example |
|----------|---------|---------|
| `=` | `==`, `eq`, `equals` | `rating = 5` |
| `!=` | `<>`, `ne`, `not` | `status != closed` |
| `<` | `lt`, `less` | `score < 50` |
| `<=` | `lte` | `age <= 30` |
| `>` | `gt`, `greater` | `priority > 2` |
| `>=` | `gte` | `amount >= 100` |
| `contains` | `like` | `email contains @gmail` |
| `in` | | `status in open,pending` |

**Examples:**

```bash
# Find low-rated feedback
netpad query submissions --form nps-survey --where "rating < 3"

# Find pending support tickets
netpad query submissions --form support --where "status = pending" --limit 100

# Complex query with JSON
netpad query submissions --filter '{"data.urgency": "high", "createdAt": {"$gte": "2024-01-01"}}'

# Pipe to jq for processing
netpad query submissions --form contact --json | jq '.[] | .data.email'
```

---

### Scaffold Components

Generate React or Next.js components from a NetPad form. Includes TypeScript interfaces, proper imports, and usage instructions.

```bash
# Generate React component (prints to console)
netpad scaffold react contact-form

# Generate Next.js page
netpad scaffold nextjs feedback-form

# Save to file
netpad scaffold react contact-form --output ./src/components
netpad scaffold nextjs survey --output ./src/pages
```

**Frameworks:**

| Framework | Output |
|-----------|--------|
| `react` | Standalone React component with `@netpad/forms` |
| `nextjs` | Next.js page with form component and API route |

**Options:**

| Option | Description |
|--------|-------------|
| `-o, --output <path>` | Output directory (prints to console if omitted) |

**Generated Code Includes:**

- ✅ TypeScript interface derived from form fields
- ✅ Proper type mappings (text → string, rating → number, etc.)
- ✅ Import statements for `@netpad/forms`
- ✅ Props interface with `onSubmit` and `defaultValues`
- ✅ (Next.js) API route boilerplate with submission handling

**Example Output:**

```typescript
'use client';

import { NetPadForm } from '@netpad/forms';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  priority?: number;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void | Promise<void>;
  defaultValues?: Partial<ContactFormData>;
}

export function ContactForm({ onSubmit, defaultValues }: ContactFormProps) {
  return (
    <NetPadForm
      formId="form_abc123"
      onSubmit={onSubmit}
      defaultValues={defaultValues}
    />
  );
}
```

---

## Package Management

### Install Applications

Install a NetPad application or plugin from npm.

```bash
netpad install @netpad/app-customer-feedback
netpad install @netpad/app-helpdesk --version 1.2.0
netpad install @netpad/app-survey --overwrite  # Update existing
```

**Options:**

| Option | Description |
|--------|-------------|
| `-v, --version <version>` | Package version (default: latest) |
| `-o, --org <orgId>` | Organization ID |
| `-p, --project <projectId>` | Project ID |
| `--overwrite` | Overwrite existing application |
| `--no-deps` | Skip dependency installation |

### List Installed

```bash
netpad list
netpad list --org org_xxx
```

### Search Packages

```bash
netpad search                         # List all packages
netpad search "customer feedback"     # Search by query
netpad search --type application      # Only applications
netpad search --verified              # Only verified packages
```

**Options:**

| Option | Description |
|--------|-------------|
| `--type <type>` | Filter: `application`, `plugin`, or `all` |
| `--verified` | Only show verified packages |
| `--limit <n>` | Maximum results (default: 20) |

### Create Application Package

Scaffold a new NetPad application package.

```bash
netpad create-app customer-feedback
netpad create-app my-app --scope @myorg --dir ./packages
```

---

## RBAC Commands

NetPad CLI provides full Role-Based Access Control management.

### Users

Manage organization members.

```bash
netpad users list                           # List all users
netpad users show user@example.com          # Show user details
netpad users invite user@example.com        # Invite new user
netpad users remove user_xxx                # Remove user
netpad users update user_xxx --role admin   # Change role
```

### Groups

Manage user groups for team-based permissions.

```bash
netpad groups list                          # List all groups
netpad groups create "Engineering"          # Create group
netpad groups add-member eng_group user_xxx # Add user to group
netpad groups remove-member eng_group user_xxx
netpad groups delete eng_group
```

### Roles

Manage custom roles and permissions.

```bash
netpad roles list                           # List all roles
netpad roles show admin                     # Show role details
netpad roles create "Form Editor" --base viewer --description "Can edit forms"
netpad roles permissions editor             # View role permissions
```

### Assign Roles

```bash
netpad assign user user_xxx editor
netpad assign group eng_group admin
netpad assign user user_xxx editor --scope project:proj_xxx
netpad assign user user_xxx viewer --expires 2024-12-31
```

**Options:**

| Option | Description |
|--------|-------------|
| `--scope <type:id>` | Scope to project or form |
| `--expires <date>` | Expiration date for assignment |
| `--reason <text>` | Reason for assignment (audit trail) |

### Remove Assignments

```bash
netpad unassign user user_xxx editor
netpad unassign group eng_group admin
```

### Check Permissions

```bash
netpad permissions list                     # List all permissions
netpad permissions check forms:create       # Check if you have permission
netpad permissions effective user_xxx       # View user's effective permissions
```

---

## Configuration

### Config File

Credentials and settings are stored in `~/.netpad/config.json`:

```json
{
  "currentProfile": "default",
  "profiles": {
    "default": {
      "apiUrl": "https://netpad.io",
      "apiKey": "np_live_xxxxxxxxxxxx",
      "organizationId": "org_xxx",
      "projectId": "proj_xxx"
    },
    "staging": {
      "apiUrl": "https://staging.netpad.io",
      "apiKey": "np_test_xxxxxxxxxxxx"
    }
  }
}
```

<<<<<<< Updated upstream
### Environment Variables
=======
---

## RBAC Commands

The CLI includes commands for managing users, groups, roles, and permissions.

### Users

```bash
# List organization members
netpad users list -o org_xxx

# Add user to organization
netpad users add user@example.com -o org_xxx --role member

# Update user role
netpad users update user@example.com -o org_xxx --role admin

# Remove user from organization
netpad users remove user@example.com -o org_xxx
```

### Groups

```bash
# List groups
netpad groups list -o org_xxx

# Create group
netpad groups create "Engineering" -o org_xxx

# Add user to group
netpad groups add-member grp_xxx user@example.com -o org_xxx

# Remove user from group
netpad groups remove-member grp_xxx user@example.com -o org_xxx

# Delete group
netpad groups delete grp_xxx -o org_xxx
```

### Roles

```bash
# List roles (builtin + custom)
netpad roles list -o org_xxx

# Create custom role
netpad roles create "Reviewer" -o org_xxx \
  --base viewer \
  --description "Can review submissions"

# Delete custom role
netpad roles delete role_xxx -o org_xxx
```

### Role Assignments

```bash
# Assign role to user
netpad assign user user@example.com role_xxx -o org_xxx

# Assign role to group
netpad assign group grp_xxx role_xxx -o org_xxx

# Assign with scope (project or form level)
netpad assign user user@example.com project:editor -o org_xxx \
  --scope project:proj_xxx

# List all assignments
netpad assign list -o org_xxx

# Remove assignment
netpad unassign user user@example.com role_xxx -o org_xxx
```

### Permissions

```bash
# List available permissions
netpad permissions list -o org_xxx

# Check user's effective permissions
netpad permissions check user@example.com -o org_xxx

# Check if user can perform action
netpad permissions can user@example.com "forms:create" -o org_xxx
```

For detailed RBAC documentation, see [RBAC & Access Control](/docs/admin/rbac).

---

## Environment Variables
>>>>>>> Stashed changes

| Variable | Description |
|----------|-------------|
| `NETPAD_API_URL` | NetPad API URL |
| `NETPAD_API_KEY` | API key |
| `NETPAD_ORG_ID` | Default organization ID |
| `NETPAD_PROJECT_ID` | Default project ID |

**Priority:** CLI options > Environment variables > Config file

### Multiple Environments

Use profiles for different environments:

```bash
# Setup profiles
netpad login --profile production --api-key np_live_xxx
netpad login --profile staging --api-key np_test_xxx
netpad login --profile local --api-url http://localhost:3000
```

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Deploy Forms
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Generate Components
        env:
          NETPAD_API_KEY: ${{ secrets.NETPAD_API_KEY }}
        run: |
          npx @netpad/cli scaffold react contact-form --output ./src/components
          npx @netpad/cli scaffold react feedback --output ./src/components
      
      - name: Export Submissions
        env:
          NETPAD_API_KEY: ${{ secrets.NETPAD_API_KEY }}
        run: |
          npx @netpad/cli query submissions --form contact --json > data/submissions.json
```

### Shell Scripting

```bash
#!/bin/bash
# Export all low-rated feedback to CSV

netpad query submissions \
  --form nps-survey \
  --where "rating < 3" \
  --json \
  | jq -r '.[] | [.data.email, .data.rating, .data.feedback] | @csv' \
  > low-ratings.csv

echo "Exported $(wc -l < low-ratings.csv) low ratings"
```

### Batch Operations

```bash
#!/bin/bash
# Generate components for all forms

forms=$(netpad list forms --json | jq -r '.[].formId')

for form in $forms; do
  echo "Generating component for $form..."
  netpad scaffold react $form --output ./src/forms
done

echo "Done! Generated components for all forms."
```

---

## Command Reference

### Global Options

These options are available on all commands:

| Option | Description |
|--------|-------------|
| `--api-url <url>` | Override API URL |
| `--api-key <key>` | Override API key |
| `-o, --org <orgId>` | Override organization ID |
| `--help` | Show command help |
| `--version` | Show CLI version |

### Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Success |
| `1` | General error |
| `2` | Authentication error |
| `3` | Not found |
| `4` | Permission denied |

### All Commands

| Command | Description |
|---------|-------------|
| `netpad` | Start interactive shell |
| `netpad login` | Authenticate with NetPad |
| `netpad logout` | Clear credentials |
| `netpad whoami` | Show auth status |
| `netpad query submissions` | Query form submissions |
| `netpad scaffold <framework> <form>` | Generate components |
| `netpad install <package>` | Install from npm |
| `netpad list` | List installed apps |
| `netpad search [query]` | Search packages |
| `netpad create-app <name>` | Scaffold new app |
| `netpad users <action>` | Manage users |
| `netpad groups <action>` | Manage groups |
| `netpad roles <action>` | Manage roles |
| `netpad assign` | Assign roles |
| `netpad unassign` | Remove role assignments |
| `netpad permissions` | Check permissions |

---

## Troubleshooting

### Authentication Issues

```bash
# Check current auth status
netpad whoami

# Re-authenticate
netpad logout
netpad login
```

### Connection Issues

```bash
# Test API connectivity
curl -I https://netpad.io/api/health

# Use custom API URL
netpad login --api-url https://your-instance.netpad.io
```

### Debug Mode

```bash
# Enable verbose logging
DEBUG=netpad:* netpad query submissions --form test
```

---

## Related Documentation

- [Developer Packages Overview](./packages.md) - All NetPad packages
- [@netpad/forms](./packages-forms.md) - React form renderer
- [@netpad/workflows](./packages-workflows.md) - Workflow API client
- [@netpad/mcp-server](./mcp-server.md) - AI-powered development tools
- [Marketplace](../platform/marketplace.md) - Discover and share applications
- [API Reference](../api/overview.md) - REST API documentation

---

## Resources

- **NPM Package**: [@netpad/cli](https://www.npmjs.com/package/@netpad/cli)
- **GitHub**: [github.com/mrlynn/netpad-v3](https://github.com/mrlynn/netpad-v3)
- **Discord**: [Join our community](https://discord.gg/netpad)
- **Issues**: [Report bugs](https://github.com/mrlynn/netpad-v3/issues)
