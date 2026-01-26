---
sidebar_position: 5
title: Google Forms Add-on
description: Import Google Forms directly from Google Drive using the NetPad Workspace Add-on
---

# Google Forms Add-on

Import Google Forms directly from Google Drive or the Google Forms editor using the NetPad Forms Importer add-on for Google Workspace.

## Overview

The NetPad Forms Importer add-on lets you export any Google Form to NetPad without leaving Google Drive or Google Forms. The add-on appears in the sidebar when you're viewing or editing a Google Form.

**Key features:**
- Import forms directly from Google Drive
- Automatic field mapping with preview
- Select which NetPad project to import to
- Preserves form structure, validation, and options

## Installation

### From Google Workspace Marketplace

1. Visit the [Google Workspace Marketplace](https://workspace.google.com/marketplace)
2. Search for "NetPad Forms Importer"
3. Click **Install**
4. Grant the required permissions
5. The add-on will appear in Google Drive and Google Forms

### Required Permissions

The add-on requests these permissions:

| Permission | Purpose |
|-----------|---------|
| View your Google Forms | Read form structure and fields |
| View your Google Drive files | List and access your forms |
| View your email address | Identify your account for settings |

:::note
All permissions are read-only. The add-on cannot modify your Google Forms or Drive files.
:::

## Getting Started

### Step 1: Configure Your API Key

Before importing forms, you need to connect the add-on to your NetPad account:

1. Open Google Drive or Google Forms
2. Click the **NetPad Forms Importer** icon in the sidebar
3. Click **Settings**
4. Enter your NetPad API key
5. Click **Save & Test Connection**

:::tip Getting an API Key
Get your API key from [NetPad Settings](https://www.netpad.io/settings?tab=api-keys). Create a new key with `forms:write` permission.
:::

### Step 2: Browse Your Forms

1. From the add-on homepage, click **Browse Forms**
2. Your Google Forms are listed with modification dates
3. Click any form to preview it

### Step 3: Preview and Export

1. Review the form details and field mapping summary
2. Click **Export to NetPad**
3. Select the NetPad project to import into
4. Click **Export Form**
5. Once complete, click **Open in NetPad** to view your imported form

## Using the Add-on

### Homepage

The homepage shows quick actions:

- **Browse Forms** - List and select from your Google Forms
- **Export Current Form** - If you have a form open in the editor, export it directly
- **Settings** - Configure your NetPad API key

### Browse Forms

Lists all Google Forms in your Drive:

- Forms are sorted by modification date
- Click any form to see a preview
- Use **Load More** to see additional forms

### Form Preview

Shows details about the selected form:

- Form title and description
- Number of questions
- Fields that will be imported
- Mapping statistics (exact vs. approximate mappings)

### Export Options

Before exporting:

- **Select Project** - Choose which NetPad project to add the form to
- The selected project is remembered for future exports

### Export Results

After successful export:

- See how many fields were imported
- View any warnings about unsupported features
- Click **Open in NetPad** to edit the form

## Field Mapping

The add-on maps Google Forms field types to NetPad equivalents:

| Google Forms | NetPad | Notes |
|-------------|--------|-------|
| Short answer | Text | Exact match |
| Paragraph | Long Text | Exact match |
| Multiple choice | Radio | Options preserved |
| Checkboxes | Checkbox Group | Options preserved |
| Dropdown | Dropdown | Options preserved |
| Linear scale | Rating | Scale range preserved |
| Date | Date | Exact match |
| Time | Time | Exact match |
| File upload | File | Settings preserved |
| Multiple choice grid | Matrix | Radio buttons |
| Checkbox grid | Matrix | Checkboxes |

### Preserved Properties

- Required/optional status
- Field labels and descriptions
- Choice options with "Other" option support
- Scale labels (low/high text)
- File upload settings (types, size, count)
- Multi-page structure

### Limitations

Some Google Forms features cannot be imported:

| Feature | Status |
|---------|--------|
| Go-to-section logic | Not imported |
| Image questions | Skipped |
| Video questions | Skipped |
| Quiz grading | Not imported |

Warnings about unsupported features are shown in the preview and export summary.

## Troubleshooting

### "Connection Failed" Error

**Cause:** Invalid or expired API key

**Solution:**
1. Go to Settings in the add-on
2. Enter a new API key from [NetPad Settings](https://www.netpad.io/settings?tab=api-keys)
3. Click **Save & Test Connection**

### "No Projects Found" Error

**Cause:** No projects exist in your NetPad organization

**Solution:**
1. Log into [NetPad](https://www.netpad.io)
2. Create a new project
3. Return to the add-on and try again

### "API Key Required" Error

**Cause:** API key not configured

**Solution:**
1. Click **Settings** in the add-on
2. Enter your NetPad API key
3. Save and test the connection

### Add-on Not Appearing

**Cause:** Add-on not installed or permissions issue

**Solution:**
1. Refresh the page
2. Check that the add-on is installed in [Workspace Marketplace](https://workspace.google.com/marketplace)
3. Re-authorize the add-on if prompted

### Form Not Importing Correctly

**Cause:** Unsupported field types or complex validation

**Solution:**
1. Check the warnings in the export summary
2. Edit the form in NetPad to add missing fields or validation
3. Review the [field mapping table](#field-mapping) for supported types

## Privacy & Security

### Data Handling

- The add-on reads your Google Forms structure (fields, options, settings)
- Form data is sent to NetPad's API to create the imported form
- Your API key is stored locally in the add-on (per-user, per-session)
- The add-on does not store any form data

### Permissions

- All Google permissions are read-only
- The add-on cannot modify your Google Forms
- The add-on cannot access form responses (submissions)

## API Key Best Practices

1. **Create a dedicated key** - Use a separate API key for the add-on
2. **Limit permissions** - Only grant `forms:write` permission
3. **Rotate regularly** - Replace your API key periodically
4. **Don't share** - Keep your API key confidential

## Support

- **Documentation:** [docs.netpad.io/integrations/google-forms](https://docs.netpad.io/integrations/google-forms)
- **Issues:** [github.com/mrlynn/netpad/issues](https://github.com/mrlynn/netpad/issues)
- **Email:** support@netpad.io

## Related

- [Google Forms Import (In-App)](/docs/integrations/google-forms-import) - Import forms from within NetPad
- [API Keys](/docs/api/authentication) - Managing API keys
- [Forms Overview](/docs/forms/overview) - Working with NetPad forms
