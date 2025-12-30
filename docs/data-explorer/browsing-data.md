# Browsing Data

Learn how to browse and view MongoDB collections in the Data Explorer.

## Accessing Data Explorer

1. **Navigate to Data Explorer**:
   - Click "Data Explorer" in navigation
   - Or go to `/data`

2. **Select Connection**:
   - Choose MongoDB connection from vault
   - Or enter connection string
   - Select database

## Viewing Collections

### Collection List

See all collections in your database:
- **Collection Names**: List of all collections
- **Document Counts**: Number of documents per collection
- **Last Updated**: Last modification time
- **Quick Actions**: View, edit, delete collections

### Opening a Collection

1. **Click Collection Name**:
   - Opens collection view
   - Shows documents in table format
   - Displays first 50 documents

2. **Collection Info**:
   - Total document count
   - Collection size
   - Index information

## View Modes

### Table View

Spreadsheet-like view of documents:
- **Rows**: Each document is a row
- **Columns**: Document fields as columns
- **Sortable**: Click headers to sort
- **Resizable**: Adjust column widths

**Best For**: Quick overview, comparing documents

### Card View

Formatted card display:
- **Cards**: Each document as a card
- **Formatted**: Human-readable format
- **Expandable**: Click to see full document

**Best For**: Reading individual documents

### JSON View

Raw JSON structure:
- **Formatted JSON**: Pretty-printed
- **Collapsible**: Expand/collapse objects
- **Searchable**: Find text in JSON

**Best For**: Developers, debugging, complex structures

## Navigating Documents

### Pagination

Navigate through large collections:
- **Page Size**: 10, 25, 50, 100 documents per page
- **Page Navigation**: Previous/Next buttons
- **Jump to Page**: Go to specific page
- **Total Pages**: See total page count

### Sorting

Sort documents by field:
1. **Click Column Header**: Sort ascending
2. **Click Again**: Sort descending
3. **Multiple Sorts**: Sort by multiple fields

### Filtering

Filter documents:

1. **Quick Filter**:
   - Type in search box
   - Searches across all fields
   - Real-time filtering

2. **Field Filters**:
   - Click filter icon on column
   - Set filter condition
   - Apply filter

3. **Advanced Filters**:
   - Build complex queries
   - Multiple conditions
   - AND/OR logic

## Searching Data

### Full-Text Search

Search across all fields:
- **Search Box**: Top of collection view
- **Real-Time**: Results update as you type
- **Highlighted**: Matching text highlighted

### Field-Specific Search

Search within specific fields:
1. **Click Field Filter**
2. **Enter Search Term**
3. **Select Operator**: equals, contains, starts with, etc.

### Advanced Query Builder

Build complex queries:
- **Multiple Conditions**: Add multiple filters
- **Operators**: equals, not equals, greater than, etc.
- **Logic**: AND/OR between conditions
- **Save Query**: Save for reuse

## Viewing Document Details

### Document Viewer

Click any document to view details:
- **Full Document**: See complete structure
- **Formatted**: Human-readable format
- **Editable**: Click to edit fields
- **Actions**: Edit, delete, duplicate

### Field Values

View field values:
- **Simple Fields**: Direct display
- **Nested Objects**: Expandable sections
- **Arrays**: List view
- **Dates**: Formatted dates
- **Links**: Clickable URLs

## Editing Documents

### Inline Editing

Edit documents directly:
1. **Click Field**: Field becomes editable
2. **Make Changes**: Modify value
3. **Save**: Click save button
4. **Cancel**: Discard changes

### Full Document Editor

Edit entire document:
1. **Click "Edit" Button**
2. **Schema-Aware Editor**: Helps with structure
3. **Make Changes**: Modify fields
4. **Save**: Save changes
5. **Validate**: Check for errors

## Document Actions

### Delete Document

Remove document:
1. **Select Document**: Click checkbox
2. **Click "Delete"**: Or delete button
3. **Confirm**: Confirm deletion
4. **Permanent**: Cannot be undone

### Duplicate Document

Copy document:
1. **Click "Duplicate"**: On document
2. **New Document**: Created with same data
3. **Edit**: Modify as needed
4. **Save**: Save new document

### Bulk Operations

Operate on multiple documents:
1. **Select Documents**: Check multiple documents
2. **Choose Action**: Delete, update, export
3. **Apply**: Execute on all selected

## Schema Detection

### Auto-Detection

NetPad automatically detects:
- **Field Types**: String, number, date, etc.
- **Field Names**: All field names
- **Structure**: Nested objects, arrays
- **Patterns**: Common data patterns

### Schema View

View collection schema:
- **Fields**: List of all fields
- **Types**: Field data types
- **Required**: Which fields are always present
- **Examples**: Sample values

## Best Practices

1. **Use Filters**: Filter before browsing large collections
2. **Pagination**: Use pagination for large datasets
3. **Search First**: Search before scrolling
4. **Save Queries**: Save frequently used filters
5. **Backup**: Export before bulk operations

## Next Steps

- [Importing Data](./importing-data.md) - Import data from files
- [Exporting Data](./exporting-data.md) - Export data for analysis
