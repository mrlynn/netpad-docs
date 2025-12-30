# Exporting Data

Export MongoDB collection data to JSON or CSV files for analysis, backup, or migration.

## Starting an Export

1. **Navigate to Collection**:
   - Open Data Explorer
   - Select collection to export
   - Click "Export" button

2. **Or Use Export Menu**:
   - Go to Data Explorer
   - Click "Export Data"
   - Select collection

## Export Options

### Export Format

Choose export format:

**JSON**:
- Preserves data structure
- Includes nested objects
- Maintains data types
- Best for: Developers, APIs, backups

**CSV**:
- Spreadsheet-compatible
- Flat structure
- Easy to analyze
- Best for: Analysis, Excel, reporting

### Export Scope

What to export:

**All Documents**:
- Export entire collection
- No filters applied
- Complete dataset

**Filtered Documents**:
- Export only filtered results
- Apply filters first
- Export subset

**Selected Documents**:
- Export only selected documents
- Select documents first
- Export specific items

## Export Configuration

### Field Selection

Choose which fields to export:

1. **Select Fields**:
   - Check fields to include
   - Uncheck to exclude
   - Select all/none

2. **Field Order**:
   - Reorder fields
   - Drag to rearrange
   - Affects export order

### Data Formatting

Configure how data is formatted:

**Dates**:
- ISO format (default)
- Custom format
- Timestamp

**Numbers**:
- Preserve decimals
- Round to places
- Format as currency

**Nested Objects**:
- Flatten (CSV)
- Preserve structure (JSON)
- Custom separator

## JSON Export

### JSON Options

**Pretty Print**:
- Formatted JSON
- Human-readable
- Larger file size

**Compact**:
- Minified JSON
- Smaller file size
- Machine-readable

**Include Metadata**:
- Add `_id`, timestamps
- Export metadata
- Full document info

### JSON Structure

Exported JSON format:
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:00:00Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "createdAt": "2024-01-15T11:00:00Z"
  }
]
```

## CSV Export

### CSV Options

**Headers**:
- Include column headers
- First row field names
- Makes file readable

**Delimiter**:
- Comma (default)
- Semicolon
- Tab
- Custom

**Encoding**:
- UTF-8 (default)
- UTF-8 BOM
- Other encodings

### CSV Structure

Exported CSV format:
```csv
_id,name,email,createdAt
507f1f77bcf86cd799439011,John Doe,john@example.com,2024-01-15T10:00:00Z
507f1f77bcf86cd799439012,Jane Smith,jane@example.com,2024-01-15T11:00:00Z
```

### Handling Nested Data

For CSV, nested objects are:
- **Flattened**: Converted to flat structure
- **Separated**: Using dot notation (e.g., `address.city`)
- **Or Excluded**: Nested data not included

## Export Process

### Starting Export

1. **Configure Options**:
   - Select format
   - Choose fields
   - Set formatting

2. **Click "Export"**:
   - Export starts
   - Progress shown
   - File generates

3. **Download File**:
   - File ready when complete
   - Click to download
   - Save to computer

### Large Exports

For large collections:
- **Progress Indicator**: Shows export progress
- **Estimated Time**: Time remaining
- **Background Export**: Continues in background
- **Email Notification**: Notify when complete (optional)

## Exporting Form Data

### From Form Analytics

Export form submissions:
1. **Open Form**: Go to form
2. **Click "Responses"**: View submissions
3. **Click "Export"**: Export all responses
4. **Choose Format**: JSON or CSV

### Filtered Exports

Export filtered submissions:
1. **Apply Filters**: Filter submissions
2. **Click "Export"**: Export filtered results
3. **Only Filtered**: Only filtered data exported

## Scheduled Exports

### Setting Up Scheduled Exports

Automate regular exports:
1. **Create Schedule**: Set export schedule
2. **Configure Export**: Set options
3. **Set Destination**: Email or storage
4. **Activate**: Enable schedule

### Export Schedule Options

- **Daily**: Export every day
- **Weekly**: Export weekly
- **Monthly**: Export monthly
- **Custom**: Custom cron schedule

## Best Practices

1. **Filter First**: Export only what you need
2. **Choose Format**: Use appropriate format
3. **Test Export**: Test with small dataset first
4. **Verify Data**: Check exported data
5. **Secure Files**: Protect exported files
6. **Regular Backups**: Export regularly for backups

## Use Cases

### Data Analysis

Export for analysis tools:
- Excel/Google Sheets
- Python/R scripts
- Business intelligence tools
- Data visualization

### Data Migration

Export for migration:
- Move to new database
- Migrate to different system
- Backup before migration
- Transfer between environments

### Reporting

Export for reports:
- Generate reports
- Share with stakeholders
- Archive historical data
- Compliance reporting

### Backup

Export for backup:
- Regular backups
- Point-in-time recovery
- Disaster recovery
- Data preservation

## Next Steps

- [Browsing Data](./browsing-data.md) - View your data
- [Importing Data](./importing-data.md) - Import data
