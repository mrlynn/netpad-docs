# Form Library

Save and manage your form configurations. Load saved forms, duplicate them, or delete ones you no longer need.

## Saving Forms

Click **Save Form** to save your current configuration:

1. Provide a **name** for the form
2. Add an optional **description**
3. Select the target **collection**
4. Click **Save**

Forms are saved to your workspace and persist across sessions.

## Managing Forms

### Viewing Forms

Access the Form Library from:
- Dashboard **Forms** section
- Form Builder **Open** menu
- Direct navigation to `/forms`

### Form List

The library shows all your forms with:
- Form name
- Description
- Target collection
- Created/updated timestamps
- Published status
- Response count

### Search and Filter

- **Search** - Find forms by name
- **Filter by collection** - Show forms for specific collection
- **Filter by status** - Draft, Published, Archived
- **Sort** - By name, date, or response count

## Form Actions

### Load
Restore a saved form configuration:
1. Click on the form in the library
2. Opens in Form Builder
3. Continue editing or view

### Duplicate
Create a copy with a new name:
1. Click **Duplicate** on the form
2. Enter new name
3. Creates independent copy
4. Edit without affecting original

### Delete
Remove a saved form:
1. Click **Delete** on the form
2. Confirm deletion
3. Form is permanently removed

:::warning
Deleting a published form will make the public URL unavailable. Responses are retained unless explicitly deleted.
:::

### Publish
Make a form publicly accessible:
1. Click **Publish** on the form
2. Configure publish settings
3. Get shareable URL

## Form Properties

Each form has these properties:

### Basic Properties
- **Name** - Display name for the form
- **Description** - Details about the form's purpose
- **Collection** - Target MongoDB collection
- **Database** - Target MongoDB database

### Timestamps
- **Created** - When form was created
- **Updated** - Last modification time
- **Published** - When form was published (if applicable)

### Statistics
- **Field count** - Number of fields
- **Page count** - Number of pages
- **Response count** - Number of submissions
- **Version count** - Number of saved versions

## Organization

### Folders
Organize forms into folders:
- Create folders for projects
- Move forms between folders
- Nested folder structure

### Tags
Add tags for categorization:
- Multiple tags per form
- Filter by tags
- Common tags: "Production", "Draft", "Template"

### Favorites
Mark frequently used forms:
- Star to add to favorites
- Quick access from dashboard
- Favorites appear first in lists

## Sharing Forms

### Within Workspace
- All workspace members can access
- Set per-form permissions
- View-only or full edit access

### Export/Import
- Export form configuration as JSON
- Import to another workspace
- Share form templates

## Form Templates

Save forms as reusable templates:

1. Create a well-configured form
2. Click **Save as Template**
3. Add template description
4. Template available for new forms

### Using Templates

1. Click **New Form from Template**
2. Select template
3. Customize for your needs
4. Save as new form

:::tip
Use descriptive names for your forms, including the target collection, to easily find them later.
:::

## Best Practices

1. **Descriptive names** - Include purpose in name
2. **Add descriptions** - Explain form's use case
3. **Organize consistently** - Use folders and tags
4. **Archive unused** - Don't delete, archive for reference
5. **Document changes** - Use version notes

## Next Steps

- [Form Builder](./form-builder.md) - Create new forms
- [Form Versioning](./form-versioning.md) - Version control
- [Form Publishing](./publishing.md) - Make forms live
