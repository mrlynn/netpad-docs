# Aggregation Stages

Learn about the available aggregation stages and how to use them to transform your data.

## Common Stages

### $match
Filter documents by conditions:
```javascript
{
  $match: {
    status: "active",
    age: { $gte: 18 }
  }
}
```
Use early in pipeline to reduce documents processed.

### $project
Select or transform fields:
```javascript
{
  $project: {
    name: 1,
    email: 1,
    fullName: { $concat: ["$firstName", " ", "$lastName"] },
    _id: 0
  }
}
```
Include fields (1), exclude fields (0), or create computed fields.

### $group
Group documents and calculate aggregates:
```javascript
{
  $group: {
    _id: "$category",
    count: { $sum: 1 },
    avgPrice: { $avg: "$price" },
    totalRevenue: { $sum: "$amount" }
  }
}
```

### $sort
Order documents by field values:
```javascript
{
  $sort: {
    createdAt: -1,  // descending
    name: 1         // ascending
  }
}
```

### $limit
Restrict number of documents:
```javascript
{
  $limit: 10
}
```

### $skip
Skip first N documents (for pagination):
```javascript
{
  $skip: 20
}
```

### $lookup
Join with another collection:
```javascript
{
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "customerId",
    as: "orders"
  }
}
```

### $unwind
Flatten arrays into documents:
```javascript
{
  $unwind: "$tags"
}
```
Each array element becomes a separate document.

## Advanced Stages

### $addFields
Add new calculated fields:
```javascript
{
  $addFields: {
    total: { $multiply: ["$price", "$quantity"] },
    discountedPrice: { $subtract: ["$price", "$discount"] }
  }
}
```

### $bucket
Group into ranges:
```javascript
{
  $bucket: {
    groupBy: "$age",
    boundaries: [0, 18, 30, 50, 100],
    default: "Other",
    output: {
      count: { $sum: 1 }
    }
  }
}
```

### $facet
Multiple parallel pipelines:
```javascript
{
  $facet: {
    "byCategory": [
      { $group: { _id: "$category", count: { $sum: 1 } } }
    ],
    "byStatus": [
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ],
    "total": [
      { $count: "count" }
    ]
  }
}
```

### $graphLookup
Recursive lookups (for hierarchies):
```javascript
{
  $graphLookup: {
    from: "employees",
    startWith: "$managerId",
    connectFromField: "managerId",
    connectToField: "_id",
    as: "reportingChain"
  }
}
```

### $merge
Write results to collection:
```javascript
{
  $merge: {
    into: "reports",
    on: "_id",
    whenMatched: "replace",
    whenNotMatched: "insert"
  }
}
```

### $out
Output to new collection:
```javascript
{
  $out: "aggregated_results"
}
```

## Aggregation Operators

### Arithmetic
- `$add` - Add numbers
- `$subtract` - Subtract
- `$multiply` - Multiply
- `$divide` - Divide
- `$mod` - Modulo

### String
- `$concat` - Concatenate strings
- `$substr` - Substring
- `$toLower` - Lowercase
- `$toUpper` - Uppercase
- `$trim` - Trim whitespace

### Array
- `$arrayElemAt` - Get element by index
- `$size` - Array length
- `$filter` - Filter array
- `$map` - Transform array
- `$reduce` - Reduce array

### Date
- `$year`, `$month`, `$dayOfMonth` - Extract date parts
- `$dateToString` - Format date
- `$dateFromString` - Parse date

### Conditional
- `$cond` - If-then-else
- `$ifNull` - Null check
- `$switch` - Multiple conditions

## Example Pipeline

Group products by category and calculate statistics:

```javascript
[
  // Filter active products
  {
    $match: {
      status: "active"
    }
  },
  // Group by category
  {
    $group: {
      _id: "$category",
      count: { $sum: 1 },
      avgPrice: { $avg: "$price" },
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" }
    }
  },
  // Sort by count
  {
    $sort: {
      count: -1
    }
  },
  // Limit results
  {
    $limit: 10
  }
]
```

## Stage Selection Tips

| Need | Stage |
|------|-------|
| Filter documents | $match |
| Select/rename fields | $project |
| Group and aggregate | $group |
| Sort results | $sort |
| Join collections | $lookup |
| Flatten arrays | $unwind |
| Add computed fields | $addFields |
| Multiple aggregations | $facet |

## Next Steps

- [Pipeline Builder](./overview.md) - Build pipelines visually
- [AI Pipeline Generation](./ai-pipeline-generation.md) - Generate with AI
- [Results Viewer](./results-viewer.md) - View pipeline output
