# AI Pipeline Generation

Use artificial intelligence to generate MongoDB aggregation pipelines from natural language descriptions.

## How It Works

Describe what you want to do with your data in plain English, and the AI will generate a complete aggregation pipeline with the appropriate stages and configurations.

## Using AI Generation

1. Click the **Build pipeline with AI** button
2. Enter your query in natural language
3. Review the generated pipeline stages
4. Click **Approve** to add stages to your canvas, or **Cancel** to try again

## Example Queries

```
// Basic queries
Group products by category and calculate average price
Find all orders from the last 30 days
Count documents by status and sort by count

// Join queries
Join users with their orders and calculate total spent
Get customer details with their recent purchases

// Analytical queries
Calculate monthly sales totals for the past year
Find top 10 customers by order value
Calculate completion rate by product category
```

## Best Practices

### Be Specific
Mention field names and collection names:
```
// Good
Group the "products" collection by "category" field and count items

// Less specific
Group products by category
```

### Describe the Output
Explain what result you want:
```
// Good
Show category name, product count, and average price, sorted by count descending

// Less specific
Group by category
```

### Mention Filters
Include any conditions:
```
// Good
Find all orders where status is "completed" from the past 30 days

// Less specific
Find recent orders
```

### Specify Aggregations
Be clear about calculations:
```
// Good
Calculate sum of amount, average of quantity, and count of orders per customer

// Less specific
Aggregate order data by customer
```

## Reviewing Generated Pipelines

Always review the generated pipeline before applying it:

### Stage Explanation
The AI provides an explanation of what each stage does:
- Why the stage was added
- What it accomplishes
- How it transforms data

### Verify Logic
Check that the pipeline:
- Filters the right documents
- Groups by correct fields
- Calculates expected values
- Sorts in desired order

### Test Results
Before using in production:
1. Run the pipeline
2. Check output documents
3. Verify counts and values
4. Test with edge cases

:::warning
AI-generated pipelines are suggestions based on your query. Verify the logic matches your requirements, especially for complex aggregations.
:::

## Modifying Generated Pipelines

After generation, you can:

### Edit Stages
- Click on any stage to edit
- Modify conditions or fields
- Change aggregation operators

### Add Stages
- Insert additional stages
- Add $project for field selection
- Add $limit for testing

### Remove Stages
- Delete unnecessary stages
- Simplify the pipeline
- Remove debug stages

### Reorder Stages
- Drag to optimize order
- Move $match earlier
- Adjust for performance

:::tip
Use AI generation as a starting point, then refine stages using the visual builder. Combine AI assistance with manual configuration for best results.
:::

## Common Query Patterns

### Counting by Category
```
Count all documents grouped by [field name]
```

### Time-Based Analysis
```
Show daily totals for [metric] over the past [time period]
```

### Top N Results
```
Find the top 10 [items] by [metric] sorted descending
```

### Joining Collections
```
Join [collection A] with [collection B] using [field] and include [fields]
```

### Filtering and Aggregating
```
For documents where [condition], calculate [aggregations] grouped by [field]
```

## Limitations

AI generation works best for:
- Standard aggregation patterns
- Clear, well-structured queries
- Common analytical tasks

May need manual refinement for:
- Complex nested pipelines
- Unusual data structures
- Highly specific business logic
- Performance-critical queries

## Next Steps

- [Pipeline Builder](./overview.md) - Manual pipeline building
- [Aggregation Stages](./aggregation-stages.md) - Learn all stages
- [Results Viewer](./results-viewer.md) - View and export results
