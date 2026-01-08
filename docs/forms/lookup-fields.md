# Lookup Fields

Create dropdown fields that fetch options from another MongoDB collection. Enable cascading lookups for dependent selections.

## Configuration

When configuring a lookup field, you need to specify:

- **Collection** - The source collection to fetch options from
- **Display Field** - Which field to show in the dropdown (e.g., "name")
- **Value Field** - Which field to store as the value (e.g., "_id")
- **Searchable** - Enable autocomplete search
- **Multiple** - Allow selecting multiple values

## Basic Lookup Example

To create a lookup that references a `customers` collection:

1. Add a **Lookup** field type to your form
2. Set **Collection** to `customers`
3. Set **Display Field** to `name`
4. Set **Value Field** to `_id`
5. Enable **Searchable** if the collection is large

The dropdown will show customer names, but store the customer `_id` in your document.

## Cascading Lookups

Create dependent dropdowns where the options in one field are filtered based on another field's selection.

### Example: Country → State

First, select a Country, then the State dropdown shows only states from that country.

**Configuration Steps:**

1. Create a **Country** lookup field
   - Collection: `countries`
   - Display Field: `name`
   - Value Field: `_id`

2. Create a **State** lookup field
   - Collection: `states`
   - Display Field: `name`
   - Value Field: `_id`
   - **Filter Field**: `countryId`
   - **Filter Source**: Point to the Country field

When a country is selected, the State lookup automatically filters to show only states where `countryId` matches the selected country.

## Filter Options

### Static Filters

Filter lookup options with a static query:

```json
{
  "status": "active",
  "type": "customer"
}
```

### Dynamic Filters

Filter based on other form field values:

- Reference current form values
- Update options when dependencies change
- Chain multiple cascading lookups

## Advanced Options

### Searchable Lookups

Enable search for large collections:

- Users can type to filter options
- Server-side search for performance
- Debounced search requests

### Multiple Selection

Allow selecting multiple values:

- Stores as array in MongoDB
- Tag-style display
- Min/max selection limits

### Custom Display

Customize how options appear:

- Combine multiple fields for display
- Format values (currency, dates)
- Add icons or badges

:::tip
For large collections, enable "Searchable" to let users type and filter options instead of loading all values upfront.
:::

## Use Cases

- **Customer Selection** - Pick from existing customers
- **Category Assignment** - Assign categories from a list
- **User Assignment** - Assign tasks to team members
- **Product Selection** - Select products for an order
- **Location Hierarchy** - Country → State → City

## Best Practices

1. **Index lookup fields** - Ensure MongoDB indexes on queried fields
2. **Limit results** - Don't load thousands of options at once
3. **Enable search** - For collections with many documents
4. **Use meaningful displays** - Show names, not IDs
5. **Consider performance** - Use pagination for large datasets

## Next Steps

- [Field Configuration](./field-configuration.md) - Configure other field properties
- [Computed Fields](./computed-fields.md) - Calculate values from lookups
- [Conditional Logic](./conditional-logic.md) - Show fields based on lookup values
