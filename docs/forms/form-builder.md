# Form Builder

The Form Builder allows you to create dynamic data entry forms based on your MongoDB collection schema. Forms can be saved, versioned, and published for end-user data entry.

## Getting Started

Connect to your MongoDB database and select a collection. The Form Builder will automatically analyze sample documents to generate field configurations based on your schema.

## Key Features

- **Automatic schema detection** from sample documents
- **Configure field types**, labels, and validation rules
- **Add conditional logic** to show/hide fields
- **Create lookup fields** for cross-collection references
- **Build computed fields** with formulas
- **Organize forms** into multiple pages
- **Version control** for form configurations
- **Publish forms** for public data entry

:::tip
Use the Document Preview panel on the right to see how your form data will be structured when inserted into MongoDB.
:::

## Creating a New Form

1. **Navigate to Form Builder** - Click "New Form" from the dashboard or navigate to `/builder`
2. **Name Your Form** - Enter a descriptive name and add an optional description
3. **Connect to MongoDB** - Enter a connection string, select from saved connections, or use an auto-provisioned Atlas cluster
4. **Select Database and Collection** - Choose your target database and collection

## Adding Fields

### Method 1: Import from Schema

1. Click **Import from Collection**
2. Select a collection from your database
3. NetPad analyzes the schema and creates fields automatically
4. Review and adjust field mappings as needed

### Method 2: Drag and Drop

1. Open the **Field Palette** in the left sidebar
2. Drag a field type onto the form canvas
3. Configure field properties in the right panel

## Form Settings

Access form settings from the top toolbar:

### General Settings
- **Form Name** - Display name for the form
- **Description** - Form description shown to users
- **Thank You Message** - Message after submission
- **Redirect URL** - Where to redirect after submission

### Access Control
- **Public** - Anyone with the URL can submit
- **Authenticated** - Users must sign in
- **Restricted** - Domain or user whitelist

### Appearance
- **Theme** - Choose color scheme
- **Custom CSS** - Add custom styles
- **Logo** - Upload organization logo
- **Background** - Set background color or image

## Testing Your Form

### Preview Mode

1. Click **Preview** to see the form as users will see it
2. Test all fields and validation
3. Check conditional logic behavior
4. Verify data structure in Document Preview

### Test Submission

- Fill out the form completely
- Submit test data
- Verify data appears correctly in MongoDB

## Saving Your Form

### Auto-Save
NetPad automatically saves your work every few seconds. You never lose progress and can resume editing anytime.

### Manual Save
- Click **Save** to force save
- Use keyboard shortcut `Cmd/Ctrl + S`

## Next Steps

- [Field Configuration](./field-configuration.md) - Configure field properties
- [Conditional Logic](./conditional-logic.md) - Add dynamic behavior
- [Form Publishing](./publishing.md) - Make your form live
- [Form Versioning](./form-versioning.md) - Manage form versions
