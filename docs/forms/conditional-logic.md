# Conditional Logic

Conditional logic allows you to show or hide fields, change field values, and customize form behavior based on user responses. This creates dynamic, personalized form experiences.

## What is Conditional Logic?

Conditional logic lets you:
- **Show/Hide Fields**: Display fields only when relevant
- **Change Field Values**: Auto-populate based on other fields
- **Skip Pages**: Skip irrelevant pages in multi-page forms
- **Customize Messages**: Change help text based on responses

## Basic Conditional Rules

### Show/Hide Fields

The most common use case: show a field only when certain conditions are met.

**Example**: Show "Company Name" only if "Account Type" is "Business"

```
Field: Company Name
Show When: Account Type equals "Business"
```

**Configuration**:
1. Select the field to conditionally show
2. Click "Add Condition"
3. Choose trigger field
4. Set condition (equals, not equals, contains, etc.)
5. Set value(s) to match

### Condition Operators

- **Equals**: Exact match
- **Not Equals**: Does not match
- **Contains**: Contains text/value
- **Not Contains**: Does not contain
- **Greater Than**: Numeric comparison
- **Less Than**: Numeric comparison
- **Is Empty**: Field is empty
- **Is Not Empty**: Field has value

## Advanced Conditions

### Multiple Conditions

Combine multiple conditions with AND/OR logic:

**AND Logic** (all must be true):
```
Show "Shipping Address" when:
  - "Delivery Method" equals "Ship"
  AND
  - "Country" equals "United States"
```

**OR Logic** (any can be true):
```
Show "Discount Code" when:
  - "Customer Type" equals "VIP"
  OR
  - "Promotion Code" contains "SAVE"
```

### Nested Conditions

Create complex logic with nested conditions:

```
Show "Business Details" when:
  (Account Type equals "Business" AND Country equals "US")
  OR
  (Account Type equals "Business" AND Has Tax ID equals "Yes")
```

## Conditional Field Values

### Auto-Populate Fields

Set field values based on other fields:

**Example**: Auto-fill "Full Name" from "First Name" and "Last Name"

```
Field: Full Name
Value: CONCAT(FirstName, " ", LastName)
```

### Conditional Defaults

Set default values based on conditions:

```
Field: Country Code
Default: 
  If "Country" equals "United States": "+1"
  If "Country" equals "United Kingdom": "+44"
  Else: ""
```

## Conditional Validation

Make validation rules conditional:

**Example**: Require "Business Phone" only for business accounts

```
Field: Business Phone
Required: If "Account Type" equals "Business"
```

## Use Cases

### Progressive Disclosure

Show fields progressively as users provide information:

```
1. Ask "Are you a business or individual?"
2. If "Business": Show business fields
3. If "Individual": Show personal fields
```

### Skip Logic

Skip irrelevant sections:

```
If "Has Previous Experience" equals "No":
  Skip "Experience Details" page
```

### Dynamic Pricing

Calculate prices based on selections:

```
Field: Total Price
Computed: 
  Base Price + 
  (If "Premium Features" selected: +$50) +
  (If "Support Package" selected: +$25)
```

### Conditional Help Text

Change guidance based on responses:

```
Field: Tax ID
Help Text: 
  If "Country" equals "US": "Enter your EIN"
  If "Country" equals "UK": "Enter your VAT number"
  Else: "Enter your tax identification number"
```

## Building Conditional Rules

### Step-by-Step

1. **Select Target Field**:
   - Choose the field that will be shown/hidden/modified

2. **Add Condition**:
   - Click "Add Condition" or "Show When"
   - Select trigger field
   - Choose operator
   - Set value(s)

3. **Add More Conditions** (optional):
   - Add additional conditions
   - Choose AND/OR logic

4. **Test Condition**:
   - Use preview mode
   - Test all condition branches
   - Verify behavior

### Visual Rule Builder

NetPad provides a visual interface for building conditions:

```
┌─────────────────────────────────┐
│ Show this field when:            │
├─────────────────────────────────┤
│ [Field] [Operator] [Value]      │
│   ▼      ▼         ▼            │
│ Account  equals    Business     │
│ Type                             │
├─────────────────────────────────┤
│ [AND] [OR] [Add Condition]      │
└─────────────────────────────────┘
```

## Examples

### Contact Form with Business/Personal

```
Field: Account Type (Radio)
Options: Personal, Business

Field: Company Name (Text)
Show When: Account Type equals "Business"
Required: If Account Type equals "Business"

Field: Personal Interests (Checkboxes)
Show When: Account Type equals "Personal"
```

### Survey with Skip Logic

```
Page 1: Demographics
  - Age
  - Location
  - Experience Level

Page 2: Experience Details
  Show When: Experience Level not equals "None"
  - Years of Experience
  - Previous Projects
  - Skills

Page 3: Feedback
  - Always shown
```

### Registration Form

```
Field: Registration Type (Dropdown)
Options: Free, Premium, Enterprise

Field: Credit Card (Text)
Show When: Registration Type not equals "Free"
Required: If Registration Type not equals "Free"

Field: Company Size (Dropdown)
Show When: Registration Type equals "Enterprise"
Options: Small, Medium, Large
```

## Best Practices

1. **Keep It Simple**: Don't overcomplicate conditional logic
2. **Test Thoroughly**: Test all condition branches
3. **Clear Labels**: Make it obvious why fields appear
4. **Progressive Disclosure**: Show fields as needed, not all at once
5. **User Feedback**: Provide clear indication when fields appear/disappear
6. **Fallback Values**: Handle cases where conditions aren't met
7. **Performance**: Avoid too many nested conditions

## Common Patterns

### Show/Hide Based on Selection

Most common pattern:
```
Field A: Selection
Field B: Show when Field A equals "Option X"
```

### Cascade Selections

Chain multiple conditional fields:
```
Field 1: Country
Field 2: State (show when Country selected)
Field 3: City (show when State selected)
```

### Conditional Required

Make fields required conditionally:
```
Field: Business Phone
Required: If Account Type equals "Business"
```

### Multi-Condition Logic

Complex business rules:
```
Show "Shipping Options" when:
  (Product Type equals "Physical" AND Quantity > 0)
  AND
  (Delivery Method not equals "Pickup")
```

## Testing Conditional Logic

1. **Test Each Branch**: Test all possible condition outcomes
2. **Test Edge Cases**: Test empty values, invalid inputs
3. **Test Transitions**: Verify smooth show/hide animations
4. **Test Validation**: Ensure conditional validation works
5. **User Experience**: Verify logic feels natural

## Troubleshooting

**Field Not Showing**:
- Check condition values match exactly (case-sensitive)
- Verify AND/OR logic is correct
- Test condition in preview mode

**Field Always Showing**:
- Check for conflicting conditions
- Verify condition logic
- Review field visibility settings

**Performance Issues**:
- Reduce number of conditions
- Simplify nested logic
- Use computed fields for calculations

## Next Steps

- [Validation](./validation.md) - Set up validation rules
- [Building Forms](./building-forms.md) - Learn form building basics
- [Publishing](./publishing.md) - Make your form live
