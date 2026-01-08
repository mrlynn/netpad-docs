# Form Lifecycle

Configure how your form behaves in different modes: create, edit, view, and clone. Define submission behavior, delete actions, and mode-specific field rules.

## Form Modes

NetPad forms can operate in four different modes:

### Create Mode
For new documents:
- Default values apply
- All editable fields are active
- Inserts a new document on submission

### Edit Mode
For existing documents:
- Loads existing document data
- Fields can be modified
- Document can be deleted
- Updates the document on submission

### View Mode
Read-only display:
- Shows existing document data
- All fields are read-only
- No submission button
- Used for reviewing data

### Clone Mode
Copy an existing document:
- Loads existing document as template
- Creates a new document (new ID)
- Useful for duplicating records

## Submission Configuration

Each mode can have its own submission behavior. Configure what happens when the user saves:

### Insert
Creates a new document in the collection.
- Used in: Create mode, Clone mode
- Generates new `_id`

### Update
Modifies an existing document.
- Used in: Edit mode
- Requires document `_id`

### Upsert
Creates or updates based on ID.
- Creates if document doesn't exist
- Updates if document exists

### Custom
Calls a webhook for custom handling.
- Full control over data processing
- Implement custom business logic

## Delete Action

In edit mode, configure whether users can delete documents:

### Enable Delete
- Show delete button in edit mode
- Requires confirmation

### Confirmation Dialog
Customize the confirmation:
- Title: "Confirm Delete"
- Message: "Are you sure you want to delete this record?"
- Confirm button text

### Delete Types
- **Hard Delete** - Permanently removes document
- **Soft Delete** - Marks as deleted but retains data

## Field Mode Overrides

Control field behavior per mode:

### Visible In
Specify which modes show the field:
- Create, Edit, View, Clone
- Field hidden in unchecked modes

### Editable In
Specify which modes allow editing:
- Create, Edit, Clone
- View mode is always read-only

### Required In
Specify which modes require the field:
- May be required in Create but optional in Edit
- Validation applies per mode

### Immutable Fields
Fields that cannot be changed after creation:
- Editable only in Create mode
- Read-only in Edit mode
- Examples: Account type, Creation date

## Example Configuration

### User Account Form

**Email Field:**
- Visible in: All modes
- Editable in: Create only (immutable)
- Required in: Create, Edit

**Created At Field:**
- Visible in: View, Edit
- Editable in: Never (auto-generated)
- Default: Current timestamp

**Account Type Field:**
- Visible in: All modes
- Editable in: Create only
- Required in: Create

**Profile Picture Field:**
- Visible in: All modes
- Editable in: Create, Edit
- Required in: None

:::tip
Use lifecycle configuration to build complete CRUD workflows without writing code. Forms become workflow nodes, not just UI.
:::

## Mode Detection

Forms detect their mode from:

### URL Parameters
```
/form/123?mode=edit
/form/123?mode=view
/form?mode=create
```

### Document ID Presence
- No ID: Create mode
- ID present: Edit mode (default)
- ID + clone parameter: Clone mode

### Programmatic
Set mode via API or embedding:
```javascript
NetPadForm.render({
  formId: 'abc123',
  mode: 'edit',
  documentId: 'doc456'
});
```

## Submission Events

Configure what happens after submission:

### Success Actions
- Show success message
- Redirect to URL
- Close modal/dialog
- Trigger webhook
- Send email notification

### Error Handling
- Display error message
- Highlight invalid fields
- Log to console
- Trigger error webhook

## Best Practices

1. **Define clear modes** - Know when each mode is used
2. **Protect immutable fields** - Prevent changes to critical data
3. **Confirm deletes** - Always ask before deleting
4. **Handle all modes** - Test form in every mode
5. **Consider soft delete** - Preserve data for audit trails

## Use Cases

- **CRM Records** - Create, view, edit customer data
- **Order Management** - Create orders, edit until shipped
- **Content Management** - Draft, publish, archive workflow
- **User Profiles** - Create account, edit profile later
- **Inventory** - Add items, update quantities

## Next Steps

- [Form Builder](./form-builder.md) - Build your form
- [Field Configuration](./field-configuration.md) - Configure fields
- [Form Publishing](./publishing.md) - Publish your form
