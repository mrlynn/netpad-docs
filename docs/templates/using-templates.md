---
sidebar_position: 3
---

# Using Templates

This guide walks you through how to access, preview, and apply templates to create new forms.

## Accessing the Template Gallery

The Template Gallery is available in several places:

### From the Dashboard

1. Navigate to **Forms** section
2. Click **"Create New Form"**
3. Select the **"Templates"** tab

### From the Form Builder

1. Open the Form Builder
2. Click **"Start from Template"** in the empty state
3. Browse or search for templates

### From This Documentation

Browse templates directly in the [Template Gallery](./gallery.md) page, then click **"Try on NetPad"** to use them.

## Browsing Templates

### Category Filtering

Templates are organized into 14 categories:

1. Click a **category tab** to filter (Business, Healthcare, HR, etc.)
2. View templates in that category
3. Click **"All"** to see all templates again

### Search

1. Type keywords in the **search bar**
2. Results update as you type (fuzzy matching)
3. Search matches template names, descriptions, and tags

### Complexity Filter

Use the **complexity dropdown** to filter by difficulty:

- **Simple** — Basic forms, quick to customize
- **Moderate** — Some conditional logic or multiple sections
- **Advanced** — Multi-page wizards, complex validation

## Previewing Templates

Before using a template, preview it to see what's included:

### Template Card Information

Each card shows:
- **Icon and Name** — Visual identifier
- **Description** — What the template is for
- **Complexity Badge** — Simple, Moderate, or Advanced
- **Field Count** — Number of fields included
- **Estimated Time** — How long to complete the form

### Expanded View

Click a template card to expand it and see:

- **Complete field list** with types and required indicators
- **Configuration code** in TypeScript or JSON format
- **Copy button** for the configuration
- **"Try on NetPad"** link to use the template

## Applying a Template

### Method 1: From NetPad Platform

1. Click **"Try on NetPad"** on any template
2. You'll be taken to netpad.io with the template loaded
3. Enter a **form name**
4. Select a **target MongoDB collection**
5. Click **"Create Form"**
6. The Form Builder opens with template fields loaded

### Method 2: Using Configuration Code

For programmatic use:

1. Click a template card to expand it
2. Select **TypeScript** or **JSON** format
3. Click **Copy** to copy the configuration
4. Use the config in your code:

```typescript
import { createForm } from '@netpad/forms';

const contactFormConfig = {
  name: 'Contact Form',
  fields: [
    { type: 'short_text', path: 'firstName', label: 'First Name', required: true },
    { type: 'short_text', path: 'lastName', label: 'Last Name', required: true },
    { type: 'email', path: 'email', label: 'Email Address', required: true },
    // ... more fields
  ],
};

const form = createForm(contactFormConfig);
```

### Method 3: Using @netpad/templates Package

```typescript
import { getTemplateById } from '@netpad/templates';

// Get the full template configuration
const template = getTemplateById('contact-form');

// Use the config
console.log(template.name);        // "Contact Form"
console.log(template.fields);      // Array of field configurations
console.log(template.config);      // Full form configuration
```

## After Applying a Template

Once a template is applied:

1. **Review the fields** — Ensure they match your needs
2. **Customize as needed** — See [Customizing Templates](./customizing.md)
3. **Configure settings** — Set name, description, thank you message
4. **Test the form** — Preview and submit test data
5. **Publish** — Make the form live

## Tips for Choosing Templates

| Scenario | Recommendation |
|----------|----------------|
| New to NetPad | Start with a **Simple** template |
| Exact match exists | Use the template as-is |
| Close match exists | Start with closest template, then customize |
| No good match | Consider building from scratch or using AI |
| Need compliance | Use templates with encryption indicators |

## Related Pages

- [Template Gallery](./gallery.md) — Browse all templates
- [Customizing Templates](./customizing.md) — Modify templates for your needs
- [Form Builder](../forms/form-builder.md) — Build forms from scratch
- [@netpad/templates Package](../developer/packages-templates.md) — Programmatic access
