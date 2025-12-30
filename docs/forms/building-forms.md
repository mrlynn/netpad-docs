# Building Forms

This guide walks you through creating forms in NetPad's visual form builder.

## Creating a New Form

1. **Navigate to Form Builder**:
   - Click "New Form" from the dashboard, or
   - Navigate to `/builder`

   ![Form Builder Dashboard](/img/docs/forms/1.png)
2. **Name Your Form**:
   - Enter a descriptive name
   - Add an optional description

3. **Connect to MongoDB**:
   - Enter a connection string, OR
   - Select from saved connections in the vault, OR
   - Use auto-provisioned Atlas cluster
   - Select target database and collection

   <!-- Example image - add when screenshot is available:
   ![MongoDB Connection Dialog](/img/docs/forms/mongodb-connection-dialog.png)
   -->

## Adding Fields

### Method 1: Drag and Drop

1. **Open Field Palette**:
   - Fields are listed in the left sidebar
   - Organized by category (Text, Numbers, Choices, etc.)

   ![Field Palette with categories](/img/docs/forms/3.png)


2. **Add a Field**:
   - Drag a field type from the sidebar
   - Drop it onto the form canvas
   - Field appears in the form

   <!-- Example image - add when screenshot is available:
   ![Dragging field to canvas](/img/docs/forms/drag-field-to-canvas.png)
   -->

3. **Configure Field**:
   - Click the field to open properties panel
   - Set field name, label, placeholder
   - Configure validation rules
   - Set default values

   <!-- Example image - add when screenshot is available:
   ![Field Properties Panel](/img/docs/forms/field-properties-panel.png)
   -->

### Method 2: Import from Schema

1. **Click "Import from Collection"**:
   - Available after connecting to MongoDB

2. **Select Collection**:
   - Choose a collection from your database
   - NetPad analyzes the schema

3. **Review Generated Fields**:
   - Fields are created based on collection structure
   - You can edit, remove, or add fields

4. **Map Field Types**:
   - NetPad maps MongoDB types to form fields
   - Review and adjust mappings as needed

## Organizing Your Form

### Single Page Forms

Simple forms can fit on one page:
- Add all fields to the main canvas
- Use sections to group related fields
- Add page breaks if needed

### Multi-Page Forms

For longer forms, use multiple pages:

1. **Add a Page Break**:
   - Drag "Page Break" from layout fields
   - Or click "Add Page" button

2. **Configure Pages**:
   - Name each page
   - Set page descriptions
   - Enable progress indicator

3. **Navigation**:
   - Users can navigate between pages
   - Previous/Next buttons automatically added
   - Progress bar shows completion status

### Sections and Dividers

Organize fields with sections:

1. **Add Section Divider**:
   - Drag "Section" from layout fields
   - Add a title and description

2. **Group Related Fields**:
   - Place related fields within sections
   - Improves form organization and UX

## Field Configuration

### Basic Properties

Every field has these properties:

- **Field ID**: Unique identifier (auto-generated)
- **Label**: Display name for the field
- **Placeholder**: Hint text shown in empty fields
- **Help Text**: Additional guidance for users
- **Required**: Whether field must be filled

### Field-Specific Settings

Each field type has unique settings:

- **Text Fields**: Min/max length, pattern validation
- **Number Fields**: Min/max values, decimal places
- **Choice Fields**: Options list, single vs. multiple selection
- **Date Fields**: Date format, min/max dates
- **File Fields**: File types, max file size, multiple files

See [Field Types](./field-types.md) for detailed configuration options.

## Form Settings

Access form settings from the top toolbar:

### General Settings

- **Form Name**: Display name
- **Description**: Form description (shown to users)
- **Thank You Message**: Message after submission
- **Redirect URL**: Where to redirect after submission

### Access Control

- **Public**: Anyone with URL can submit
- **Authenticated**: Users must sign in
- **Restricted**: Domain or user whitelist

### Appearance

- **Theme**: Choose color scheme
- **Custom CSS**: Add custom styles (advanced)
- **Logo**: Upload organization logo
- **Background**: Set background color or image

### Advanced Settings

- **Bot Protection**: Enable Turnstile CAPTCHA
- **Webhooks**: Configure webhook URLs
- **URL Pre-fill**: Enable query parameter pre-filling
- **Submission Limit**: Max submissions per user/IP

## Testing Your Form

### Preview Mode

1. **Click "Preview"**:
   - See form as users will see it
   - Test all fields and validation
   - Check conditional logic

2. **Test Submission**:
   - Fill out the form
   - Submit test data
   - Verify data appears in MongoDB

### Validation Testing

- Test required fields
- Test min/max constraints
- Test pattern matching
- Test conditional logic
- Verify error messages

## Saving Your Form

### Auto-Save

NetPad automatically saves your work:
- Drafts saved every few seconds
- Never lose your progress
- Resume editing anytime

### Manual Save

- Click "Save" to force save
- Or use keyboard shortcut (Cmd/Ctrl + S)

## Publishing Your Form

When ready to go live:

1. **Review Form**:
   - Test all fields
   - Verify validation
   - Check conditional logic

2. **Click "Publish"**:
   - Form becomes live
   - Get shareable URL
   - Form accessible to users

3. **Share Your Form**:
   - Copy the URL
   - Share via email, social media, or embed
   - Generate embed code for websites

See [Publishing](./publishing.md) for more details.

## Best Practices

### Form Design

- **Keep it Simple**: Don't overwhelm users
- **Logical Order**: Group related fields
- **Clear Labels**: Use descriptive field names
- **Help Text**: Guide users when needed
- **Progress Indicators**: Show progress for long forms

### Validation

- **Validate Early**: Use real-time validation
- **Clear Errors**: Provide helpful error messages
- **Required Fields**: Mark clearly with asterisks
- **Pattern Validation**: Use regex for complex rules

### Performance

- **Limit Fields**: Keep forms under 50 fields when possible
- **Use Multi-Page**: Break large forms into steps
- **Optimize Images**: Compress file uploads
- **Test Performance**: Check load times

## Next Steps

- [Field Types](./field-types.md) - Learn about all field types
- [Validation](./validation.md) - Set up validation rules
- [Conditional Logic](./conditional-logic.md) - Add dynamic behavior
- [Publishing](./publishing.md) - Make your form live
