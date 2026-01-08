# Sample Documents

Preview sample documents from your MongoDB collection before building forms or pipelines.

## How It Works

When you select a collection, NetPad analyzes a sample of documents to show you the data structure. This helps you understand your schema before building.

## Viewing Samples

### Automatic Sampling
When you connect to a collection:
1. NetPad fetches sample documents
2. Displays them in the preview panel
3. Shows inferred schema

### Sample Size
By default, NetPad samples:
- Up to 100 documents
- Random selection
- Representative of collection

### Refresh Samples
Click **Refresh** to get new samples:
- Fetches fresh documents
- May show different data
- Useful for large collections

## Sample Display

### JSON View
Full document structure:
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Table View
Tabular format:
| _id | name | email | createdAt |
|-----|------|-------|-----------|
| 507f... | John Doe | john@... | 2024-01-15 |

### Schema View
Inferred field types:
```
_id: ObjectId
name: String
email: String
createdAt: Date
```

## Using Samples

### For Form Building
Understand fields before creating forms:
- See actual field names
- Identify data types
- Find nested structures
- Discover arrays

### For Pipeline Building
Know your data before aggregating:
- Identify fields to match
- See groupable values
- Find join keys
- Understand nesting

### For Schema Design
Validate your schema:
- Check consistency
- Find variations
- Identify missing fields
- Spot type mismatches

## Schema Analysis

### Field Detection
NetPad detects fields across samples:
- Common fields (in most documents)
- Optional fields (in some documents)
- Nested object fields
- Array fields

### Type Inference
Infers field types:
- String, Number, Boolean, Date
- ObjectId
- Array (with element type)
- Object (with nested schema)

### Type Variations
Flags fields with multiple types:
- "status" is sometimes String, sometimes Number
- Helps identify data quality issues

## Sample Document Options

### Filter Samples
View specific documents:
- Enter filter criteria
- See matching samples
- Understand subsets

### Sort Samples
Order sample documents:
- By date (newest/oldest)
- By any field
- See edge cases

### Sample Count
Adjust sample size:
- Fewer for quick view
- More for better coverage
- Balance speed and accuracy

:::tip
Sample documents help you understand your data structure. Use them to identify fields, types, and patterns before building forms or pipelines.
:::

## Common Uses

### Discover Schema
New to a collection? View samples to learn:
- What fields exist
- What types are used
- How data is structured

### Validate Data
Check data quality:
- Expected values present
- Types are consistent
- No unexpected nulls

### Plan Aggregations
Before building pipelines:
- See values to group by
- Find fields to calculate
- Identify join fields

### Design Forms
Before building forms:
- Map fields to form fields
- Plan field types
- Identify required fields

## Limitations

### Sample May Not Be Representative
- Large collections may have varied data
- Recent changes may not appear
- Rare fields might be missed

### No Real-Time Updates
- Samples are point-in-time
- Refresh to see changes
- Not live data

## Next Steps

- [Pipeline Builder](./overview.md) - Build aggregation pipelines
- [Results Viewer](./results-viewer.md) - View pipeline results
- [Document Editing](./document-editing.md) - Edit documents
