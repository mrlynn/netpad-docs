# Search Forms

Search Forms allow you to query and filter existing data in your MongoDB collections through an intuitive visual interface. Instead of creating new documents, search forms help users find, view, and manage existing records.

## What Are Search Forms?

Search forms are a special form type that:

- **Query Existing Data**: Search through your MongoDB collections
- **Multiple Operators**: Support equals, contains, between, in, regex, and more
- **Visual Results**: Display results in tables, cards, or list views
- **Result Actions**: View, edit, delete, or export found records
- **Smart Dropdowns**: Auto-populate options from distinct database values

## Form Types Comparison

| Type | Purpose | Data Flow |
|------|---------|-----------|
| **Data Entry** | Create new documents | User → MongoDB |
| **Search** | Query existing data | MongoDB → User |
| **Both** | Flexible mode switching | Bidirectional |
| **Conversational** | AI-powered collection | User ↔ AI → MongoDB |

## Creating a Search Form

### Step 1: Select Form Type

1. Click **"New Form"** from your dashboard
2. Select **"Search Form"** as the form type
3. Choose a template or start from scratch

### Step 2: Connect to Data

1. Select the MongoDB connection from your vault
2. Choose the target database and collection
3. NetPad analyzes the schema to suggest searchable fields

### Step 3: Configure Searchable Fields

Add fields that users can search by:

```javascript
{
  path: "customerName",
  label: "Customer Name",
  searchable: true,
  operator: "contains"  // Default operator
}
```

### Step 4: Configure Result Display

Choose how to display search results:

- **Table View**: Spreadsheet-style with sortable columns
- **Card View**: Individual cards for each record
- **List View**: Compact list with key information

### Step 5: Set Up Result Actions

Configure what users can do with found records:

- **View**: Open full document details
- **Edit**: Open edit form for the record
- **Delete**: Remove the record (with confirmation)
- **Export**: Download selected records

## Search Operators

### Text Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `equals` | Exact match | `status = "active"` |
| `not_equals` | Not equal | `status ≠ "deleted"` |
| `contains` | Substring match | `name contains "John"` |
| `starts_with` | Prefix match | `email starts with "admin"` |
| `ends_with` | Suffix match | `domain ends with ".com"` |
| `regex` | Regular expression | `phone matches /^\d{3}-\d{4}$/` |

### Numeric Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `equals` | Exact value | `quantity = 10` |
| `greater_than` | Greater than | `amount > 100` |
| `less_than` | Less than | `age < 30` |
| `between` | Range (inclusive) | `price between 10 and 50` |
| `in` | Value in list | `priority in ["high", "critical"]` |

### Date Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `equals` | Exact date | `createdAt = "2024-01-15"` |
| `before` | Before date | `deadline before "2024-12-31"` |
| `after` | After date | `startDate after "2024-01-01"` |
| `between` | Date range | `orderDate between Jan 1 and Dec 31` |
| `last_n_days` | Relative | `updatedAt in last 7 days` |

### Special Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `exists` | Field exists | `email exists` |
| `not_exists` | Field doesn't exist | `deletedAt not exists` |
| `is_null` | Field is null | `assignee is null` |
| `is_not_null` | Field is not null | `completedAt is not null` |

## Smart Dropdowns

Smart dropdowns automatically populate options from distinct database values.

### How It Works

1. NetPad queries your collection for distinct values
2. Values are used as dropdown options
3. Options update automatically as data changes

### Configuration

```javascript
{
  path: "category",
  label: "Category",
  type: "dropdown",
  smartOptions: {
    enabled: true,
    sourceCollection: "products",  // Optional: use different collection
    sourceField: "category",       // Field to get distinct values
    filter: { active: true },      // Optional filter
    sort: "asc",                   // Sort order
    maxOptions: 100                // Limit options
  }
}
```

### Use Cases

- **Status filters**: Active, Pending, Completed
- **Category selectors**: Product categories, departments
- **Location filters**: Cities, countries, regions
- **User selectors**: Team members, assignees

## Result Display Configuration

### Table View

```javascript
{
  resultDisplay: "table",
  tableConfig: {
    columns: [
      { field: "name", header: "Name", sortable: true },
      { field: "email", header: "Email", sortable: true },
      { field: "createdAt", header: "Created", format: "date" },
      { field: "status", header: "Status", badge: true }
    ],
    defaultSort: { field: "createdAt", direction: "desc" },
    pageSize: 25,
    pageSizes: [10, 25, 50, 100]
  }
}
```

### Card View

```javascript
{
  resultDisplay: "cards",
  cardConfig: {
    title: "{{name}}",
    subtitle: "{{email}}",
    description: "{{description}}",
    image: "{{avatar}}",
    badges: ["status", "priority"],
    cardsPerRow: 3
  }
}
```

### List View

```javascript
{
  resultDisplay: "list",
  listConfig: {
    title: "{{name}}",
    subtitle: "{{email}} • {{phone}}",
    trailing: "{{createdAt | date}}"
  }
}
```

## Pagination

Configure how large result sets are handled:

```javascript
{
  pagination: {
    enabled: true,
    pageSize: 25,
    pageSizes: [10, 25, 50, 100],
    showTotal: true,
    showPageNumbers: true,
    maxPages: 10
  }
}
```

## Result Actions

### View Action

Open a detail view of the record:

```javascript
{
  action: "view",
  icon: "eye",
  label: "View Details",
  mode: "modal"  // or "page"
}
```

### Edit Action

Open an edit form for the record:

```javascript
{
  action: "edit",
  icon: "edit",
  label: "Edit",
  formId: "edit-form-id",  // Optional: use specific form
  mode: "modal"
}
```

### Delete Action

Remove the record with confirmation:

```javascript
{
  action: "delete",
  icon: "trash",
  label: "Delete",
  confirmMessage: "Are you sure you want to delete this record?",
  requireConfirmation: true
}
```

### Export Action

Export selected records:

```javascript
{
  action: "export",
  icon: "download",
  label: "Export",
  formats: ["csv", "json", "excel"],
  fields: ["name", "email", "createdAt"]  // Fields to export
}
```

### Custom Actions

Define custom actions:

```javascript
{
  action: "custom",
  icon: "mail",
  label: "Send Email",
  workflowId: "send-email-workflow",
  confirmMessage: "Send email to this customer?"
}
```

## Search Form Templates

NetPad includes pre-built search form templates:

| Template | Description | Use Case |
|----------|-------------|----------|
| **Customer Search** | Search and manage customers | CRM, support |
| **Order Search** | Find and track orders | E-commerce, fulfillment |
| **Support Ticket Search** | Search support tickets | Help desk, IT |

### Using Templates

1. Click **"New Form"** → **"Search Form"**
2. Browse template gallery
3. Select a search template
4. Preview the template configuration
5. Click **"Use Template"**
6. Customize for your data

## Both Mode (Data Entry + Search)

Forms can operate in "Both" mode, allowing users to switch between:

- **Search Mode**: Find existing records
- **Create Mode**: Add new records

### Configuration

```javascript
{
  formType: "both",
  defaultMode: "search",  // Start in search mode
  allowModeSwitch: true,
  modeLabels: {
    search: "Find Record",
    create: "New Record"
  }
}
```

## API Reference

### Search Endpoint

```http
POST /api/forms/{formId}/search?orgId={orgId}
Content-Type: application/json

{
  "filters": {
    "status": { "operator": "equals", "value": "active" },
    "createdAt": { "operator": "after", "value": "2024-01-01" }
  },
  "sort": { "field": "createdAt", "direction": "desc" },
  "page": 1,
  "pageSize": 25
}
```

### Response

```json
{
  "success": true,
  "results": [...],
  "total": 156,
  "page": 1,
  "pageSize": 25,
  "totalPages": 7
}
```

## Best Practices

1. **Index Searchable Fields**: Ensure MongoDB indexes for performance
2. **Limit Default Results**: Use pagination to avoid large result sets
3. **Smart Defaults**: Pre-configure common filters
4. **Clear Labels**: Use descriptive field labels and operators
5. **Permission Control**: Restrict sensitive search capabilities
6. **Audit Logging**: Log searches for compliance if needed

## Common Use Cases

### Customer Lookup

Search customers by name, email, or phone:
- Quick search with autocomplete
- View customer history
- Edit customer details

### Order Management

Find orders by status, date, or customer:
- Filter by date range
- Bulk actions (export, status update)
- Order detail view with line items

### Support Ticket System

Search tickets by status, priority, or assignee:
- Smart dropdown for status and assignee
- Quick filters for "My Tickets" or "Unassigned"
- Inline status updates

### Inventory Search

Search products by SKU, category, or availability:
- Stock level filtering (low stock, out of stock)
- Category-based filtering with smart dropdowns
- Bulk export for reporting

## Next Steps

- [Template Gallery](./template-gallery.md) - Browse search form templates
- [Field Types](./field-types.md) - Configure search fields
- [Publishing](./publishing.md) - Make your search form live
- [Analytics](./analytics.md) - Track search usage
