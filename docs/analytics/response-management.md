# Response Management

View, search, filter, and manage form responses. Access detailed response information and perform bulk operations.

## Viewing Responses

The Response List displays all submissions for your form in a sortable, filterable table. Click any response to view its full details.

### Response Table

| Column | Description |
|--------|-------------|
| ID | Unique response identifier |
| Submitted | Submission timestamp |
| Status | Submission status |
| Key Fields | Important field values |
| Actions | View, edit, delete |

### Opening Details

Click any response row to view the complete submission details:
- All field values
- Metadata (IP address, user agent, referrer)
- Submission timestamp
- Response ID

## Search and Filter

### Search
Full-text search across all response fields:
- Type in search box
- Results filter instantly
- Matches any field value

### Status Filter
Filter by submission status:
- **Submitted** - Completed submissions
- **Draft** - Partially completed
- **Pending** - Awaiting processing

### Date Range
Filter responses by submission date:
- Select start and end dates
- Preset ranges (today, this week, this month)
- Custom date range

### Device Type
Filter by device used:
- **Desktop** - Computer submissions
- **Mobile** - Phone submissions
- **Tablet** - Tablet submissions

## Response Details

Click on any response row to view complete submission details:

### Field Values
All form field values displayed:
- Field label and value
- Nested objects expanded
- Arrays listed
- Files shown with download links

### Metadata
Submission metadata:
- **IP Address** - Submitter's IP (if collected)
- **User Agent** - Browser information
- **Referrer** - Source page
- **Submission Time** - Exact timestamp
- **Duration** - Time to complete

### Response History
If responses can be edited:
- Version history
- Changes tracked
- Previous values viewable

## Bulk Operations

Select multiple responses for batch actions:

### Selecting Responses
- Click checkbox on each row
- Use "Select All" for current page
- Selection persists across pages

### Available Actions

#### Bulk Delete
Remove multiple responses:
1. Select responses
2. Click **Delete Selected**
3. Confirm deletion
4. Responses permanently removed

#### Bulk Export
Export selected responses:
1. Select responses
2. Click **Export Selected**
3. Choose format (CSV, JSON, etc.)
4. Download file

#### Bulk Status Update
Change status of multiple responses:
1. Select responses
2. Click **Change Status**
3. Select new status
4. Apply to all selected

## Pagination

Large response sets are paginated for performance:

### Navigation
- **Page numbers** - Click to jump to page
- **Previous/Next** - Navigate sequentially
- **First/Last** - Jump to beginning or end

### Page Size
Configure items per page:
- 10, 25, 50, 100 options
- Larger pages = more data loaded

### Total Count
Shows total responses:
```
Showing 1-25 of 1,247 responses
```

## Sorting

Sort responses by column:
- Click column header to sort
- Click again to reverse order
- Sort indicator shows direction

### Sortable Columns
- Submission date
- Response ID
- Status
- Any field value

:::tip
Use filters to narrow down responses before exporting. This ensures you only export the data you need.
:::

## Actions Menu

Per-response actions:

### View
Open full response details in a modal or new page.

### Edit
Modify response values (if enabled):
- Open in edit mode
- Change field values
- Save changes

### Delete
Remove single response:
1. Click delete icon
2. Confirm deletion
3. Response removed

### Download
Download individual response:
- JSON format
- PDF format
- Include metadata option

## Best Practices

1. **Filter first** - Narrow down before searching
2. **Use date ranges** - Focus on relevant time periods
3. **Regular cleanup** - Archive or delete old responses
4. **Export regularly** - Backup important data
5. **Check metadata** - Identify spam or issues

## Next Steps

- [Form Analytics](./overview.md) - View analytics dashboard
- [Response Export](./response-export.md) - Export all responses
- [Field Analytics](./field-analytics.md) - Field-level statistics
