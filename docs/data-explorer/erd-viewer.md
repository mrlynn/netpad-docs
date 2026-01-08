# Entity Relationship Diagram (ERD)

Visualize your MongoDB database schema with an interactive Entity Relationship Diagram showing collections and their fields.

## Getting Started

Connect to your MongoDB database and select a database. The ERD automatically generates a visual representation of all collections and their field structures.

## ERD Features

### Collection Nodes
Each collection is displayed as a node:
- Collection name as header
- Field list with types
- Document count badge
- Click to select

### Field Information
See field names and types for each collection:
- Field name
- Inferred data type
- Required/optional indicator
- Nested object indicator

### Document Counts
View approximate document counts per collection:
- Shown on collection node
- Helps identify large/small collections
- Updates on refresh

### Interactive Layout
Drag nodes to reorganize the diagram:
- Click and drag collection nodes
- Arrange for best visibility
- Layout persists during session

### Zoom and Pan
Navigate large schemas easily:
- Scroll to zoom in/out
- Click and drag background to pan
- Fit all button to view entire diagram

## Schema Analysis

The ERD analyzes sample documents from each collection to infer field types and structures:

### Field Type Detection
- String, Number, Boolean, Date
- ObjectId (potential references)
- Array (with element types)
- Nested Object (with sub-fields)

### Nested Structures
Nested objects and arrays are represented in the field list:
```
address: Object
  ├── street: String
  ├── city: String
  └── zip: String
tags: Array<String>
```

### Reference Detection
Potential relationships between collections:
- ObjectId fields that may reference other collections
- Field names suggesting relationships (userId, orderId)
- Matching patterns across collections

## Using the ERD

### Understand Database Structure
Before building forms or pipelines:
- See all collections at a glance
- Understand data organization
- Identify main entities

### Identify Relationships
Find connections between collections:
- Foreign key patterns
- Reference fields
- Join opportunities

### Discover Available Fields
Before building forms:
- See all fields in a collection
- Understand field types
- Plan form field mappings

### Plan Aggregation Pipelines
Before building pipelines:
- Identify join paths
- Understand data structure
- Plan $lookup stages

:::tip
The ERD updates automatically when you change databases. Use it as a reference when configuring lookup fields or building aggregation pipelines.
:::

## ERD Controls

### Refresh
Reload schema from database:
- Gets latest structure
- Updates document counts
- Refreshes field types

### Zoom Controls
- **Zoom In (+)** - Closer view
- **Zoom Out (-)** - Wider view
- **Fit All** - Show entire diagram
- **Reset** - Default zoom level

### Layout Options
- **Auto Layout** - Arrange nodes automatically
- **Horizontal** - Left-to-right layout
- **Vertical** - Top-to-bottom layout

### Filter
Filter visible collections:
- Search by name
- Show/hide specific collections
- Focus on relevant tables

## Collection Details

Click on a collection to see details:

### Statistics
- Document count
- Average document size
- Index information
- Storage size

### Schema
- All fields detected
- Type distribution
- Optional/required fields
- Nested structure

### Sample Data
- View sample documents
- See actual values
- Understand data patterns

## Export Options

### Export Image
Save ERD as an image:
- PNG format
- High resolution
- Include/exclude details

### Export Schema
Export schema as JSON:
```json
{
  "collections": {
    "users": {
      "fields": {
        "name": "String",
        "email": "String",
        "createdAt": "Date"
      }
    }
  }
}
```

## Best Practices

1. **Refresh regularly** - Schema may change
2. **Note relationships** - Track foreign keys
3. **Document discoveries** - Note unexpected structures
4. **Use for planning** - Before building forms/pipelines
5. **Share with team** - Export for documentation

## Limitations

### Sampling-Based
Schema is inferred from samples:
- May miss rare fields
- Types based on observed values
- Refresh for better coverage

### No Enforced Relationships
MongoDB doesn't enforce relationships:
- ERD shows inferred connections
- Verify relationships manually
- Reference patterns may vary

## Next Steps

- [Pipeline Builder](../pipeline-builder/overview.md) - Build aggregation pipelines
- [Form Builder](../forms/form-builder.md) - Create data entry forms
- [Sample Documents](../pipeline-builder/sample-documents.md) - View collection data
