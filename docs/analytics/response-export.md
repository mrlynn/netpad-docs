# Response Export

Export form responses in multiple formats: CSV, Excel, JSON, or PDF. Customize which fields and metadata to include.

## Export Formats

### CSV
Comma-separated values for spreadsheet applications:
- Universal format
- Compatible with Excel, Google Sheets
- Simple structure
- Best for: Data analysis, imports

### Excel (XLSX)
Microsoft Excel format with formatting:
- Native Excel format
- Preserves formatting
- Multiple sheets possible
- Best for: Business reports, sharing

### JSON
Raw data format for developers:
- Preserves data structure
- Includes nested objects
- Array handling intact
- Best for: Integrations, APIs, backups

### PDF
Formatted document for sharing and printing:
- Professional appearance
- Print-ready
- Summary and detail views
- Best for: Reports, archiving

## Field Selection

Choose which form fields to include in the export:

### All Fields
By default, all fields are selected. Export everything captured.

### Custom Selection
Uncheck fields you don't need:
- Reduce file size
- Focus on relevant data
- Exclude sensitive information

### Field Order
Drag to reorder fields in export:
- Match your analysis needs
- Group related fields
- ID fields first or last

## Metadata Options

Include additional submission information:

### Include Metadata
Add submission details:
- **Submission timestamp** - When form was submitted
- **IP address** - Submitter's IP (if collected)
- **User agent** - Browser information
- **Referrer** - Source page URL

### Include Response ID
Add unique response identifier:
- Useful for tracking
- Required for updates
- Links to original response

### Include Form ID
Add form identifier:
- Useful when exporting multiple forms
- Links response to form

## Filtering Before Export

Apply filters in the Response List before exporting:

### Date Range
Only export responses from specific period:
- Last 30 days
- This month
- Custom range

### Status Filter
Export only certain statuses:
- Completed only
- Exclude drafts
- Specific statuses

### Search Filter
Export matching responses:
- Text search results
- Specific values only

:::warning
Large exports may take time to generate. For very large datasets, consider filtering by date range or status before exporting.
:::

## Export Process

1. **Navigate to Responses** - Open form's response list
2. **Apply Filters** - (Optional) Filter responses
3. **Click Export** - Open export dialog
4. **Select Format** - Choose CSV, Excel, JSON, or PDF
5. **Configure Options** - Select fields, metadata
6. **Generate Export** - Click export button
7. **Download File** - Save to your computer

## Scheduled Exports

Set up automatic exports on a schedule:

### Daily Export
Receive daily summary:
- Previous day's responses
- Sent via email
- Attached file or download link

### Weekly Export
Weekly report:
- Previous week's data
- Summary statistics included
- Delivered Monday morning

### Monthly Export
Monthly data export:
- Full month's responses
- Analytics summary
- Delivered first of month

### Custom Schedule
Configure your own schedule:
- Specific days
- Specific times
- Custom recipients

## Export Examples

### CSV Structure
```csv
responseId,submittedAt,name,email,message
abc123,2024-01-15T10:30:00Z,John Doe,john@example.com,Hello world
def456,2024-01-15T11:45:00Z,Jane Smith,jane@example.com,Test message
```

### JSON Structure
```json
[
  {
    "responseId": "abc123",
    "submittedAt": "2024-01-15T10:30:00Z",
    "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello world"
    }
  }
]
```

### Excel Structure
| Response ID | Submitted | Name | Email | Message |
|-------------|-----------|------|-------|---------|
| abc123 | 1/15/2024 10:30 AM | John Doe | john@example.com | Hello world |

## Best Practices

1. **Filter first** - Export only what you need
2. **Include IDs** - For tracking and updates
3. **Regular backups** - Schedule periodic exports
4. **Secure storage** - Protect exported files
5. **Cleanup exports** - Delete old export files

## Handling Large Exports

For forms with many responses:

### Pagination
Export in batches:
- 1,000 responses per file
- Numbered file sequence
- Combine as needed

### Date Ranges
Break into smaller periods:
- Monthly exports
- Weekly chunks
- Easier to process

### Background Processing
Large exports process in background:
- Notification when ready
- Download link emailed
- Available for 24 hours

## Next Steps

- [Response Management](./response-management.md) - View and filter responses
- [Form Analytics](./overview.md) - View analytics dashboard
- [Field Analytics](./field-analytics.md) - Field-level statistics
