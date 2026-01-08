# Pipeline Builder

Build MongoDB aggregation pipelines visually. Add stages, configure options, and preview results in real-time.

## Getting Started

Connect to MongoDB, select a database and collection, then start adding aggregation stages. Each stage transforms the data flowing through the pipeline.

## Pipeline Operations

### Add Stages
Click the **+** button to add a new stage:
- Browse available stage types
- Select the stage you need
- Configure stage options

### Reorder Stages
Drag stages to reorder them:
- Order affects results
- Earlier stages filter data for later stages
- Optimize by filtering early

### Toggle Stages
Enable or disable stages to test combinations:
- Click the toggle icon
- Disabled stages are skipped
- Great for debugging

### View Results
See results after each stage:
- Click on a stage
- Results panel shows output
- Compare before and after

### Export Pipeline
Export the pipeline as code:
- JavaScript/Node.js
- Python (PyMongo)
- MongoDB Shell
- Copy to clipboard

:::tip
Use $match early in your pipeline to filter documents and improve performance.
:::

## Building a Pipeline

### Step 1: Connect to MongoDB
1. Enter connection string or select saved connection
2. Choose database
3. Choose collection

### Step 2: Add Stages
1. Click **Add Stage**
2. Select stage type (e.g., $match, $group)
3. Configure stage options

### Step 3: Configure Stage
1. Fill in stage parameters
2. Use JSON editor for complex queries
3. Validate syntax

### Step 4: View Results
1. Click **Run Pipeline**
2. See results in results panel
3. Check document count and data

### Step 5: Iterate
1. Add more stages as needed
2. Reorder for optimization
3. Toggle to test variations

## Visual Interface

### Stage Cards
Each stage appears as a card:
- Stage type icon
- Stage name
- Configuration summary
- Toggle, delete, and reorder controls

### Results Panel
Shows pipeline output:
- Document count
- Sample documents
- Execution time
- Any errors

### Pipeline Canvas
Visual representation:
- Stages connected in sequence
- Data flows top to bottom
- Drag to reorder

## Performance Tips

1. **Filter early** - Use $match first to reduce documents
2. **Project early** - Use $project to reduce field count
3. **Limit during development** - Add $limit while building
4. **Index awareness** - Know which fields are indexed
5. **Avoid $unwind on large arrays** - Can explode document count

## Use Cases

- **Reporting** - Aggregate data for reports
- **Analytics** - Calculate statistics and metrics
- **Data transformation** - Reshape documents
- **Search** - Complex query patterns
- **Data migration** - Transform and move data

## Next Steps

- [Aggregation Stages](./aggregation-stages.md) - Learn about all stages
- [AI Pipeline Generation](./ai-pipeline-generation.md) - Generate with AI
- [Results Viewer](./results-viewer.md) - View and export results
