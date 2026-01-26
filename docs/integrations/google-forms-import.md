---
sidebar_position: 4
title: Google Forms Import
description: Import existing Google Forms into NetPad with intelligent field mapping
---

# Google Forms Import

Import existing Google Forms into NetPad with intelligent field mapping, preserving structure, validation rules, and multi-page layouts.

## Overview

NetPad can import forms directly from Google Forms, automatically mapping field types, validation rules, and form structure. This allows you to:

- **Migrate existing forms** from Google Forms to NetPad
- **Leverage Google Forms as a design tool** before customizing in NetPad
- **Consolidate forms** from multiple sources into one platform

## Two Import Methods

NetPad offers two ways to import Google Forms, depending on whether your form is public or private:

| Method | Authentication | Best For |
|--------|---------------|----------|
| **URL Import** | None required | Public forms, quick import, no setup |
| **OAuth Import** | Google account | Private forms, full access, better field detection |

### URL Import (Public Forms)

For publicly accessible Google Forms, simply paste the form URL. NetPad parses the form structure directly from the page without requiring authentication.

**How it works:**
1. Paste any public Google Form URL
2. NetPad fetches and parses the form structure
3. Preview the field mappings
4. Import into your project

**Supported URL formats:**
- Full URLs: `https://docs.google.com/forms/d/e/FORM_ID/viewform`
- Short URLs: `https://forms.gle/XXXXX`

:::tip
URL import is the fastest way to import a form. Make sure your Google Form is set to "Anyone with the link can view" for this to work.
:::

### OAuth Import (Private Forms)

Connect your Google account to browse and import any form you have access to, including private forms.

**Benefits:**
- Access all your Google Forms, including private ones
- Better field type detection using the full Google Forms API
- Browse and search your forms library
- Pagination support for large form collections

**OAuth scopes used (read-only):**
- `forms.readonly` - Read form structure and fields
- `drive.readonly` - List forms from your Drive

## Supported Field Types

NetPad maps Google Forms field types to equivalent NetPad fields:

| Google Forms Type | NetPad Type | Confidence |
|-------------------|-------------|------------|
| Short Answer | Text | Exact |
| Paragraph | Long Text | Exact |
| Multiple Choice | Radio | Exact |
| Checkboxes | Checkbox Group | Exact |
| Dropdown | Dropdown | Exact |
| Linear Scale | Rating | Exact |
| Date | Date Picker | Exact |
| Time | Time Picker | Exact |
| File Upload | File Upload | Exact |
| Multiple Choice Grid | Matrix | Approximate |
| Checkbox Grid | Matrix | Approximate |

### Mapping Confidence

Each field mapping shows a confidence level:
- **Exact**: Perfect 1:1 mapping between Google Forms and NetPad
- **Approximate**: Mapped to the closest equivalent (e.g., grid questions become matrix fields)

## Preserved Features

The import process preserves many Google Forms features:

### Field Properties
- Required/optional status
- Field descriptions and help text
- Options for choice fields (radio, checkbox, dropdown)
- Scale ranges and labels for rating fields

### Validation Rules
- Number validation → Number field type
- Email validation → Email field type
- URL validation → URL field type
- Min/max length constraints
- Regular expression patterns

### Form Structure
- Form title and description
- Multi-page structure with page breaks
- Field ordering

### File Uploads
- Maximum file count
- Maximum file size
- Allowed file types

## Import Wizard

The import wizard guides you through the process:

### Step 1: Choose Method
Select URL import or OAuth import based on your needs.

### Step 2: Enter Source
- **URL method**: Paste the Google Form URL
- **OAuth method**: Connect your Google account and select from your forms

### Step 3: Preview
Review the import before committing:
- See all field mappings with confidence indicators
- View any warnings about unsupported features
- Check which fields will be created

### Step 4: Import
Execute the import with progress tracking.

### Step 5: Complete
- View import summary
- Open the form directly in the Form Builder
- Customize and enhance your imported form

## How to Import

1. Navigate to the **Forms** page within an application
2. Click the **Import** dropdown button
3. Select **Import from Google Forms**
4. Follow the import wizard steps

## Limitations

Some Google Forms features cannot be imported:

| Feature | Status | Notes |
|---------|--------|-------|
| Go-to section logic | Not imported | Conditional navigation not supported |
| Image items | Skipped | Images embedded in forms are not imported |
| Video items | Skipped | Videos embedded in forms are not imported |
| TEXT_CONTAINS validation | Warning | Cannot be directly translated |
| TEXT_NOT_CONTAINS validation | Warning | Cannot be directly translated |
| Grading/quiz features | Not imported | Quiz metadata is not preserved |

:::warning
These limitations are shown in the preview step so you can review them before importing.
:::

## Import Metadata

Each imported form stores complete provenance information:

```json
{
  "source": "google_forms" | "google_forms_url",
  "sourceFormId": "original-google-form-id",
  "sourceFormUrl": "https://docs.google.com/forms/...",
  "sourceFormTitle": "Original Form Title",
  "importedAt": "2026-01-26T10:30:00Z",
  "mappingReport": {
    "totalSourceItems": 15,
    "successfulMappings": 14,
    "warnings": [...],
    "unsupportedItems": [...]
  }
}
```

This enables:
- Tracking where forms originated
- Audit trail of imports
- Future re-import capabilities

## After Import

Once imported, your form is fully customizable in NetPad:

- **Add advanced features** not available in Google Forms:
  - Conditional logic (show/hide fields)
  - Computed fields with formulas
  - Lookup fields for database references
  - Repeater fields for dynamic arrays

- **Connect to workflows** for automation:
  - Email notifications on submission
  - Data processing pipelines
  - Integration with external services

- **Publish with more options**:
  - Custom URLs and slugs
  - Embeddable forms
  - Access control (public, authenticated, restricted)
  - Bot protection

## API Endpoints

For programmatic access, NetPad provides API endpoints for Google Forms import:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/integrations/google-forms` | List credentials or forms |
| POST | `/api/integrations/google-forms/parse-url` | Parse public form from URL |
| GET | `/api/integrations/google-forms/preview` | Preview OAuth form import |
| POST | `/api/integrations/google-forms/import` | Execute OAuth import |
| POST | `/api/integrations/google-forms/import-url` | Execute URL import |

### Parse URL Example

```bash
curl -X POST https://your-netpad-instance/api/integrations/google-forms/parse-url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://docs.google.com/forms/d/e/FORM_ID/viewform"}'
```

### Import URL Example

```bash
curl -X POST https://your-netpad-instance/api/integrations/google-forms/import-url \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "url": "https://docs.google.com/forms/d/e/FORM_ID/viewform",
    "orgId": "your-org-id",
    "projectId": "your-project-id",
    "customizations": {
      "name": "Custom Form Name"
    }
  }'
```

## Best Practices

1. **Preview before importing** - Always review the field mappings and warnings before committing to an import.

2. **Check validation rules** - Some Google Forms validation types cannot be directly translated. Review the warnings and add equivalent validation in NetPad after import.

3. **Test the imported form** - After import, test the form to ensure all fields work as expected.

4. **Enhance with NetPad features** - Take advantage of NetPad's advanced features like conditional logic, computed fields, and workflow automation.

5. **Keep source reference** - The import metadata preserves the source URL, making it easy to reference the original form if needed.
