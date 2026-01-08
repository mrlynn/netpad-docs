# Results Viewer

View and interact with aggregation pipeline results. Navigate through paginated results and switch between different view modes.

## View Modes

### Table View
Structured table with expandable rows for nested data:
- Column headers from field names
- Sortable columns
- Expandable nested objects
- Click row for details

### List View
Card-based layout with full document preview:
- Each document as a card
- Full content visible
- Good for complex documents
- Scrollable list

### JSON View
Raw JSON output for all results:
- Syntax highlighted
- Copy to clipboard
- Full document structure
- Collapsible sections

## Switching Views

Toggle between views using the view selector:
- Click **Table**, **List**, or **JSON**
- Preference saved per session
- Choose based on data structure

## Pagination

Large result sets are automatically paginated to improve performance.

### Navigation Controls
- **Previous/Next** buttons
- **Page numbers** for direct navigation
- **Jump to page** input

### Page Size
Select items per page:
- 10, 25, 50, 100 options
- Affects load time

### Total Count
```
Showing 1-25 of 1,247 documents
```

## Document Interaction

### View Document Details
Double-click any row to open the document:
- Full JSON view
- All fields displayed
- Nested objects expanded

### Expand Nested Data
In table view, expand nested objects and arrays:
- Click expand icon
- See nested content inline
- Collapse to hide

### Copy Document
Copy document JSON to clipboard:
- Click copy icon
- Copies full document
- Paste anywhere

## Filtering Results

### Search
Search within results:
- Type in search box
- Filters displayed results
- Matches any field value

### Sort
Sort by column:
- Click column header
- Click again to reverse
- Sort indicator shows direction

## Exporting Results

### Copy All
Copy all results as JSON:
- Full result set
- Formatted JSON
- Ready to paste

### Download
Download results as file:
- JSON format
- CSV format
- Excel format

### Export Pipeline
Export the pipeline code:
- JavaScript/Node.js
- Python
- MongoDB Shell

## Results Information

### Document Count
Total documents in result:
- Before pagination
- After all stages applied
- Updates with pipeline changes

### Execution Time
How long the pipeline took:
- In milliseconds
- Helps identify slow stages
- Compare optimizations

### Stage Results
View results after each stage:
- Click on a stage
- See intermediate output
- Debug step by step

:::tip
Use the JSON view to see the exact structure of your pipeline output. This is helpful for debugging and understanding data transformations.
:::

## Performance

Pagination ensures only a manageable number of documents are loaded at once:
- Prevents memory issues
- Faster initial load
- Navigate as needed

### Large Result Sets
For very large results:
- Use pagination
- Add $limit during development
- Export for full analysis

## Common Actions

### Debug Pipeline
1. Run pipeline
2. Check each stage's output
3. Identify issues
4. Modify and re-run

### Verify Aggregations
1. Check grouped results
2. Verify calculations
3. Spot check values
4. Compare with expectations

### Export for Analysis
1. Run full pipeline
2. Download results
3. Open in Excel/Sheets
4. Further analysis

## Next Steps

- [Pipeline Builder](./overview.md) - Build pipelines
- [Document Editing](./document-editing.md) - Edit documents
- [Sample Documents](./sample-documents.md) - View collection samples
