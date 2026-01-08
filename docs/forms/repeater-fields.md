# Repeater Fields

Create fields that allow users to add multiple entries of a structured item, like line items in an order or multiple addresses.

## Configuration

When setting up a repeater field, configure:

- **Min Items** - Minimum number of entries required
- **Max Items** - Maximum entries allowed
- **Item Schema** - Define the structure of each entry
- **Allow Duplication** - Enable duplicating existing entries
- **Collapsible** - Allow collapsing entries to save space

## Item Schema Fields

Each item in the repeater can have multiple fields. Define the field name, type, label, and whether it's required.

### Example: Order Line Items

```json
{
  "itemSchema": [
    {
      "name": "productName",
      "type": "string",
      "label": "Product Name",
      "required": true
    },
    {
      "name": "quantity",
      "type": "number",
      "label": "Quantity",
      "required": true,
      "min": 1
    },
    {
      "name": "unitPrice",
      "type": "number",
      "label": "Unit Price",
      "required": true
    }
  ]
}
```

## Creating a Repeater Field

1. Add a **Repeater** field type to your form
2. Set the **Label** (e.g., "Line Items")
3. Define the **Item Schema** with sub-fields
4. Configure **Min/Max Items**
5. Enable options like **Collapsible** or **Allow Duplication**

## Resulting Data Structure

Repeater fields store data as arrays of objects in MongoDB:

```json
{
  "lineItems": [
    {
      "productName": "Widget A",
      "quantity": 2,
      "unitPrice": 25.00
    },
    {
      "productName": "Widget B",
      "quantity": 1,
      "unitPrice": 50.00
    }
  ]
}
```

## User Interface

### Adding Items
- Click **Add Item** button
- New entry appears with all schema fields
- Fill in the fields for each item

### Removing Items
- Click the **Remove** or **Delete** icon on an item
- Confirmation may be required

### Reordering Items
- Drag items to reorder (if enabled)
- Order is preserved in the stored array

### Duplicating Items
- Click **Duplicate** to copy an existing item
- Edit the copied item as needed

### Collapsing Items
- Click to collapse/expand individual items
- Shows summary when collapsed
- Useful for long repeater lists

## Validation

### Item-Level Validation
- Each sub-field can have its own validation
- Required fields must be filled in each item

### Repeater-Level Validation
- **Min Items** - Ensure at least N items are added
- **Max Items** - Limit the number of items
- Custom validation across all items

## Calculated Fields in Repeaters

Add computed fields within repeater items:

```javascript
// Line total for each item
quantity * unitPrice
```

Calculate totals across all items:

```javascript
// Sum all line totals
lineItems.reduce((sum, item) => sum + item.lineTotal, 0)
```

:::tip
Use repeater fields for arrays of objects in your MongoDB documents. The resulting structure matches the nested array format.
:::

## Use Cases

- **Order Line Items** - Products, quantities, prices
- **Contact Information** - Multiple phone numbers, emails
- **Education History** - Schools, degrees, dates
- **Work Experience** - Jobs, companies, durations
- **Addresses** - Multiple shipping/billing addresses
- **Attendees** - Event registration with multiple people

## Best Practices

1. **Limit complexity** - Keep item schemas simple
2. **Set reasonable limits** - Don't allow hundreds of items
3. **Use collapsible** - For items with many fields
4. **Provide defaults** - Pre-fill common values
5. **Clear labels** - Make each item field clear

## Next Steps

- [Field Configuration](./field-configuration.md) - Configure field properties
- [Computed Fields](./computed-fields.md) - Add calculations
- [Form Variables](./form-variables.md) - Reference repeater data
