# Document Editing

Edit MongoDB documents directly from the results viewer. Make changes and save them back to the database.

## Opening the Editor

Double-click any document row in the results viewer to open it in the JSON editor modal:
- Complete document structure shown
- Syntax highlighting
- Field validation

## Editing Documents

### JSON Editor
Edit JSON directly in the text field:
- Full document visible
- Syntax highlighting
- Line numbers
- Auto-formatting

### Making Changes
1. Click in the editor
2. Modify field values
3. Add new fields
4. Remove fields
5. Edit nested objects

### Real-Time Validation
The editor validates as you type:
- Valid JSON syntax required
- Error messages show issues
- Line-level error indicators
- Cannot save with errors

## Saving Changes

Click **Save Changes** to update the document in MongoDB:
- Document is updated using replacement
- All changes applied atomically
- Confirmation shown on success

### What Gets Saved
- All fields in the editor
- Fields you added
- Modified values
- Nested object changes

### What Doesn't Change
- The `_id` field (immutable)
- Fields in other documents
- Collection structure

:::warning
Changes are immediate and permanent. The document is replaced with your edited version. Use caution when editing production data.
:::

## Validation

### JSON Syntax
Valid JSON required:
- Proper quotes on strings
- Commas between fields
- Matching brackets
- No trailing commas

### Error Display
Syntax errors are highlighted:
- Red underline on error line
- Error message shown
- Must fix before saving

### Example Errors
```
// Missing quote
{ name: John }

// Trailing comma
{ "name": "John", }

// Mismatched brackets
{ "name": "John"
```

## Copy Document

Copy the document JSON to clipboard:
1. Click **Copy** button
2. JSON copied to clipboard
3. Paste anywhere needed

Uses:
- Share document with team
- Backup before editing
- Use in other tools

## Document Structure

### Simple Fields
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "active": true
}
```

### Nested Objects
```json
{
  "name": "John Doe",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  }
}
```

### Arrays
```json
{
  "name": "John Doe",
  "tags": ["customer", "premium", "verified"],
  "orders": [
    { "id": 1, "total": 100 },
    { "id": 2, "total": 250 }
  ]
}
```

## Best Practices

1. **Backup first** - Copy document before major changes
2. **Test in dev** - Edit test data before production
3. **Validate structure** - Ensure consistent schema
4. **Check references** - Update related documents if needed
5. **Use transactions** - For multi-document updates

## Common Operations

### Update Field Value
Change an existing field:
```json
// Before
{ "status": "pending" }

// After
{ "status": "completed" }
```

### Add New Field
Add a field that doesn't exist:
```json
// Before
{ "name": "John" }

// After
{ "name": "John", "verified": true }
```

### Remove Field
Delete a field entirely:
```json
// Before
{ "name": "John", "tempField": "delete me" }

// After
{ "name": "John" }
```

### Edit Nested Object
Modify nested values:
```json
// Change address.city
{
  "address": {
    "city": "Boston"  // was "New York"
  }
}
```

## Limitations

### Cannot Edit _id
The `_id` field is immutable:
- Shown in editor but read-only
- Attempting to change will fail
- Use insert/delete for new ID

### Single Document
Edit one document at a time:
- No bulk editing
- No multi-select edit
- Use pipelines for bulk updates

### No Schema Validation
Editor doesn't enforce schema:
- You can add any field
- Type changes allowed
- Validate manually

## Next Steps

- [Results Viewer](./results-viewer.md) - View pipeline results
- [Sample Documents](./sample-documents.md) - Browse collection samples
- [Pipeline Builder](./overview.md) - Build aggregation pipelines
