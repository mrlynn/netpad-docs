# Computed Fields

Create fields that automatically calculate their value based on formulas using other field values.

## Formula Syntax

Use field paths in your formulas to reference other field values. Basic arithmetic operators (+, -, *, /) are supported.

```javascript
// Total calculation
price * quantity

// With discount
price * quantity * (1 - discountRate)

// String concatenation
firstName + " " + lastName
```

## Output Types

When creating a computed field, specify the output type:

- **Number** - For mathematical calculations
- **String** - For text concatenation
- **Boolean** - For true/false results

## Examples

### Price Calculation

```javascript
// Subtotal
unitPrice * quantity

// With tax
unitPrice * quantity * 1.08

// With discount and tax
unitPrice * quantity * (1 - discount) * (1 + taxRate)
```

### String Operations

```javascript
// Full name
firstName + " " + lastName

// Full address
street + ", " + city + ", " + state + " " + zipCode
```

### Boolean Logic

```javascript
// Check if over limit
total > 1000

// Check if complete
firstName && lastName && email
```

## Creating a Computed Field

1. Add a **Computed** field type to your form
2. Set the **Label** for display
3. Enter the **Formula** using field references
4. Select the **Output Type** (number, string, boolean)
5. Configure **Display Options** (decimal places, format)

## Available Functions

### Math Functions
- Basic arithmetic: `+`, `-`, `*`, `/`
- Modulo: `%`
- Parentheses for order of operations

### String Functions
- Concatenation with `+`
- Template literals with field references

### Comparison Operators
- `==`, `!=` - Equality
- `>`, `<`, `>=`, `<=` - Comparisons
- `&&`, `||` - Logical AND/OR

## Field References

Reference other fields by their path:

```javascript
// Simple field
fieldName

// Nested field
address.city

// Array field (first item)
items[0].price
```

:::warning
Computed fields are read-only and recalculate automatically when their dependencies change.
:::

## Display Configuration

### Number Formatting
- **Decimal Places** - Number of decimals to show
- **Currency Format** - Display as currency
- **Percentage** - Display as percentage

### Visibility
- **Show in Form** - Display to users
- **Hidden** - Calculate but don't show
- **Read-only** - Always true for computed fields

## Use Cases

- **Order Totals** - Sum line items, apply discounts
- **Full Names** - Combine first and last names
- **Age Calculation** - Calculate from birth date
- **Progress Percentage** - Calculate completion
- **Running Totals** - Cumulative calculations

## Best Practices

1. **Keep formulas simple** - Break complex calculations into steps
2. **Handle edge cases** - Consider null/undefined values
3. **Test thoroughly** - Verify calculations with different inputs
4. **Document formulas** - Add help text explaining the calculation
5. **Consider performance** - Complex formulas may slow the form

## Troubleshooting

**Field showing NaN:**
- Check that referenced fields have numeric values
- Verify field paths are correct

**Calculation not updating:**
- Ensure dependency fields are correctly referenced
- Check for circular dependencies

**Wrong result:**
- Verify order of operations
- Test with known values

## Next Steps

- [Field Configuration](./field-configuration.md) - Configure field properties
- [Form Variables](./form-variables.md) - Use variables in forms
- [Conditional Logic](./conditional-logic.md) - Show fields based on calculations
