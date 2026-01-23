# Publishing to the Marketplace

This guide explains how to publish your forms, workflows, and applications to the NetPad Marketplace. Whether you want to share a single form, a workflow template, or a complete application bundle, this guide covers the package formats and publishing process for each.

## Overview

The marketplace supports three package types:

| Package Type | What It Contains | npm Keyword | Use Case |
|--------------|------------------|-------------|----------|
| **Application** | Forms + Workflows + Connections | `netpad-app` | Complete solutions |
| **Form** | Single form definition | `netpad-form` | Reusable form templates |
| **Workflow** | Single workflow definition | `netpad-workflow` | Automation patterns |

## Publishing Methods

There are two ways to publish to the marketplace:

1. **Web UI Publishing** - Publish directly from the NetPad interface (easiest)
2. **npm Publishing** - Publish as an npm package for developer distribution

---

## Method 1: Web UI Publishing

### Publishing a Form

If you've built a form you want to share:

1. **Open your form** in the Form Builder
2. Click the **menu icon** (⋮) in the top right
3. Select **"Publish to Marketplace"**
4. Fill out the publishing form:
   - **Name**: Display name for the marketplace
   - **Description**: What the form does and who it's for
   - **Category**: Select the best fit (Business, Support, Healthcare, etc.)
   - **Tags**: Keywords for discovery (e.g., "survey", "feedback", "nps")
   - **Screenshots**: Upload previews showing the form in action
5. Click **"Submit for Review"**
6. Platform admins will review and approve your submission

**What Gets Published:**
- Complete form schema (all fields, validation rules)
- Conditional logic configuration
- Theming and styling settings
- Form metadata (description, collection name, etc.)

### Publishing a Workflow

If you've built a workflow automation pattern:

1. **Open your workflow** in the Workflow Editor
2. Click the **menu icon** (⋮) in the top right
3. Select **"Publish to Marketplace"**
4. Fill out the publishing form:
   - **Name**: Display name for the marketplace
   - **Description**: What the workflow automates
   - **Category**: Select the best fit
   - **Tags**: Keywords (e.g., "notification", "approval", "sync")
   - **Trigger Type**: Document what triggers the workflow
5. Click **"Submit for Review"**

**What Gets Published:**
- Complete workflow definition (all nodes, connections)
- Node configurations
- Trigger configuration
- Variable mappings

### Publishing an Application

Applications are complete solution bundles:

1. **Navigate to your Application** in the Applications list
2. Click **"Publish to Marketplace"**
3. Fill out the comprehensive publishing form:
   - **Name**: Application display name
   - **Description**: Full description of what the app does
   - **Category**: Primary category
   - **Tags**: Discovery keywords
   - **Screenshots**: Multiple screenshots showing the app
   - **Documentation**: Usage instructions, setup guide
   - **License**: License terms
4. Click **"Submit for Review"**

**What Gets Published:**
- All forms in the application
- All workflows in the application
- Form-to-workflow connections
- Application configuration
- Release version information

---

## Method 2: npm Package Publishing

For developers who want to distribute packages via npm.

### Package Formats

#### Application Package Format

```
my-application/
├── package.json          # npm metadata + netpad config
├── dist/
│   └── bundle.json       # Complete application bundle
├── README.md
└── CHANGELOG.md
```

**package.json:**

```json
{
  "name": "@yourorg/netpad-customer-portal",
  "version": "1.0.0",
  "description": "Customer self-service portal with intake forms and approval workflows",
  "keywords": ["netpad", "netpad-app", "portal", "customer"],
  "main": "dist/bundle.json",
  "netpad": {
    "type": "application",
    "name": "Customer Portal",
    "category": "business",
    "tags": ["portal", "customer", "intake"],
    "minNetPadVersion": "3.0.0"
  }
}
```

**bundle.json structure:**

```json
{
  "version": "1.0.0",
  "type": "application",
  "application": {
    "name": "Customer Portal",
    "description": "Customer self-service portal",
    "category": "business"
  },
  "forms": [
    {
      "name": "Customer Intake",
      "slug": "customer-intake",
      "schema": { /* complete form schema */ },
      "config": { /* form configuration */ }
    }
  ],
  "workflows": [
    {
      "name": "Intake Approval",
      "nodes": [ /* workflow nodes */ ],
      "edges": [ /* node connections */ ],
      "trigger": { /* trigger config */ }
    }
  ],
  "connections": [
    {
      "formSlug": "customer-intake",
      "workflowId": "intake-approval",
      "trigger": "submission"
    }
  ]
}
```

#### Form Package Format

```
my-form/
├── package.json
├── dist/
│   └── form.json         # Form definition
└── README.md
```

**package.json:**

```json
{
  "name": "@yourorg/netpad-nps-survey",
  "version": "1.0.0",
  "description": "Net Promoter Score survey form with analytics",
  "keywords": ["netpad", "netpad-form", "survey", "nps", "feedback"],
  "main": "dist/form.json",
  "netpad": {
    "type": "form",
    "name": "NPS Survey",
    "category": "feedback",
    "tags": ["survey", "nps", "feedback", "analytics"],
    "minNetPadVersion": "3.0.0"
  }
}
```

**form.json structure:**

```json
{
  "version": "1.0.0",
  "type": "form",
  "form": {
    "name": "NPS Survey",
    "description": "Collect Net Promoter Scores from customers",
    "slug": "nps-survey",
    "collectionName": "nps_responses",
    "formType": "create",
    "schema": {
      "fields": [
        {
          "id": "nps_score",
          "type": "rating",
          "label": "How likely are you to recommend us?",
          "required": true,
          "config": {
            "min": 0,
            "max": 10
          }
        },
        {
          "id": "feedback",
          "type": "textarea",
          "label": "What's the main reason for your score?",
          "required": false
        }
      ]
    },
    "validation": {
      "rules": []
    },
    "conditionalLogic": [],
    "theme": {
      "preset": "professional"
    }
  }
}
```

#### Workflow Package Format

```
my-workflow/
├── package.json
├── dist/
│   └── workflow.json     # Workflow definition
└── README.md
```

**package.json:**

```json
{
  "name": "@yourorg/netpad-email-notification",
  "version": "1.0.0",
  "description": "Send email notifications on form submission",
  "keywords": ["netpad", "netpad-workflow", "email", "notification"],
  "main": "dist/workflow.json",
  "netpad": {
    "type": "workflow",
    "name": "Email Notification",
    "category": "integrations",
    "tags": ["email", "notification", "alert"],
    "triggerType": "form-submission",
    "minNetPadVersion": "3.0.0"
  }
}
```

**workflow.json structure:**

```json
{
  "version": "1.0.0",
  "type": "workflow",
  "workflow": {
    "name": "Email Notification",
    "description": "Send email when a form is submitted",
    "trigger": {
      "type": "form-submission",
      "config": {
        "formId": null
      }
    },
    "nodes": [
      {
        "id": "trigger_1",
        "type": "trigger",
        "position": { "x": 100, "y": 100 },
        "data": {
          "triggerType": "form-submission"
        }
      },
      {
        "id": "email_1",
        "type": "email",
        "position": { "x": 100, "y": 250 },
        "data": {
          "to": "{{submitter_email}}",
          "subject": "Form Submission Received",
          "body": "Thank you for your submission!"
        }
      }
    ],
    "edges": [
      {
        "source": "trigger_1",
        "target": "email_1"
      }
    ],
    "variables": [
      {
        "name": "submitter_email",
        "description": "Email address from form submission",
        "source": "trigger.data.email"
      }
    ]
  }
}
```

### Publishing to npm

#### Using the CLI

```bash
# 1. Create a new package
netpad create my-package --type form

# 2. Build the package
netpad build

# 3. Validate before publishing
netpad validate

# 4. Publish to npm
netpad publish

# Or publish directly to npm
npm publish --access public
```

#### Manual Process

1. **Export from NetPad:**
   - Forms: Form menu → Export → JSON
   - Workflows: Workflow menu → Export → JSON
   - Applications: Application menu → Export Bundle

2. **Create package structure** (see formats above)

3. **Add package.json** with `netpad` field

4. **Publish to npm:**
   ```bash
   npm publish --access public
   ```

5. **Sync to marketplace:**
   The marketplace automatically discovers npm packages with `netpad-app`, `netpad-form`, or `netpad-workflow` keywords.

---

## Package Discovery

### How Packages Are Found

The marketplace discovers npm packages by:

1. **Keywords**: Packages with `netpad-app`, `netpad-form`, or `netpad-workflow`
2. **Scope**: Official `@netpad/` scope and community packages
3. **Naming**: Packages starting with `netpad-`

### Naming Conventions

| Type | Official Scope | Community Pattern |
|------|----------------|-------------------|
| Application | `@netpad/app-*` | `@yourorg/netpad-*` or `netpad-app-*` |
| Form | `@netpad/form-*` | `@yourorg/netpad-form-*` or `netpad-form-*` |
| Workflow | `@netpad/workflow-*` | `@yourorg/netpad-workflow-*` or `netpad-workflow-*` |

---

## The Review Process

### What Happens After Submission

1. **Submitted**: Your package enters the review queue
2. **In Review**: Platform admins check functionality, documentation, and quality
3. **Approved**: Package is published to the marketplace
4. **Or Rejected**: You receive feedback on what to improve

### Review Criteria

- **Functionality**: Does the package work as described?
- **Documentation**: Is there clear documentation for users?
- **Quality**: Does it follow NetPad best practices?
- **Security**: No security concerns or malicious code
- **Originality**: Not a duplicate of existing packages

### Tips for Approval

1. **Write clear descriptions** explaining what the package does
2. **Include screenshots** showing the package in use
3. **Test thoroughly** before submitting
4. **Document configuration** if any setup is required
5. **Use appropriate categories and tags** for discovery

---

## Managing Published Packages

### My Publications

Access your published packages at **Marketplace → My Publications**:

- **View stats**: Installs, ratings, reviews
- **Edit listing**: Update description, screenshots, tags
- **Publish updates**: Release new versions
- **Unpublish**: Remove from marketplace
- **Delete**: Permanently remove (requires confirmation)

### Updating Packages

**Web UI:**
1. Make changes to your form/workflow/application
2. Go to the published listing
3. Click "Update Version"
4. Submit for review

**npm:**
1. Update your package files
2. Bump version in package.json
3. `npm publish`
4. Marketplace syncs automatically

---

## Best Practices

### For Forms

- Include meaningful field labels and help text
- Set up validation rules appropriately
- Use conditional logic to simplify complex forms
- Choose an appropriate theme that others can customize
- Include sample data or clear field descriptions

### For Workflows

- Document what trigger type the workflow expects
- Use clear, descriptive node labels
- Include error handling nodes
- Document any required connections or API keys
- Provide variable mapping documentation

### For Applications

- Ensure all forms and workflows work together
- Include a setup guide in documentation
- Document any external dependencies
- Create a release with semantic versioning
- Provide example use cases

---

## Next Steps

- [Marketplace Overview](./marketplace.md) - Browse and install packages
- [Applications](./applications.md) - Build applications
- [CLI Package](../developer/packages-cli.md) - Use the CLI for publishing
- [npm Integration API](../api/marketplace-npm.md) - API documentation
