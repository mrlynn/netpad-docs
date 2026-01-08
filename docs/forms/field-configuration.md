# Field Configuration

Configure how each field appears and behaves in your form. Set labels, types, validation rules, and default values.

## Field Properties

Every field has the following basic properties:

- **Label** - The display name shown to users
- **Type** - Data type (string, number, boolean, date, etc.)
- **Required** - Whether the field must be filled
- **Default Value** - Pre-populated value for new entries
- **Placeholder** - Hint text shown in empty fields
- **Included** - Whether to show the field in the form

## Field Types

### Text Types
- **String** - Text input for short text
- **Email** - Email input with validation
- **URL** - URL input with validation

### Numeric Types
- **Number** - Numeric input with optional min/max
- **Integer** - Whole numbers only
- **Decimal** - Numbers with decimal places
- **Currency** - Formatted currency input
- **Percentage** - Percentage values (0-100)

### Date & Time Types
- **Date** - Date picker with calendar
- **Time** - Time picker
- **DateTime** - Combined date and time picker

### Choice Types
- **Boolean** - Checkbox or toggle switch
- **Radio** - Single choice from options
- **Dropdown** - Single choice dropdown
- **Checkboxes** - Multiple selections
- **Multi-Select** - Multiple selections dropdown

### Complex Types
- **Array** - List of values (tags, items)
- **Object** - Nested object with sub-fields

## Validation Rules

Add validation rules to ensure data quality. Available validations include:

### Numeric Validation
- **Min** - Minimum value allowed
- **Max** - Maximum value allowed

### Text Validation
- **Min Length** - Minimum character count
- **Max Length** - Maximum character count
- **Pattern** - Regular expression validation

### Custom Validation
- Custom validation expressions
- Field-level error messages

## Configuring a Field

1. **Select the field** - Click on the field in the form canvas
2. **Open properties panel** - The right sidebar shows field properties
3. **Set basic properties** - Label, placeholder, help text
4. **Configure type** - Select appropriate field type
5. **Add validation** - Set required, min/max, patterns
6. **Set default value** - Pre-fill if needed

:::tip
Drag fields to reorder them in the form. The order in the configuration panel matches the order in the form preview.
:::

## Field Display Options

### Width
- **Full** - Takes entire row
- **Half** - Takes half the row
- **Third** - Takes one-third of the row

### Visibility
- **Show/Hide conditions** - Based on other field values
- **Read-only** - Display only, no editing
- **Hidden** - Hidden from users (for computed fields)

## Best Practices

1. **Use clear labels** - Make field names descriptive
2. **Add help text** - Guide users when needed
3. **Set appropriate types** - Match field type to data
4. **Validate appropriately** - Set constraints that make sense
5. **Provide defaults** - Pre-fill when possible
6. **Mark required fields** - Use asterisks for required fields

## Next Steps

- [Conditional Logic](./conditional-logic.md) - Show/hide fields dynamically
- [Lookup Fields](./lookup-fields.md) - Reference other collections
- [Computed Fields](./computed-fields.md) - Calculate values automatically
