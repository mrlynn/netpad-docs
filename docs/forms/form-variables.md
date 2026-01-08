# Form Variables & References

Learn how to reference field values, use variables, and create dynamic content in forms with template syntax.

## Field References

Reference form field values using their field path. In formulas, use the path directly. In template contexts (like success messages), use double curly braces.

```javascript
// In formulas (computed fields)
price * quantity
firstName + " " + lastName

// In templates (success messages, webhooks)
{{email}}
{{user.firstName}}
{{order.total}}
```

## Where Variables Can Be Used

- **Computed Fields** - Calculate values using formulas with field references
- **Success Messages** - Include field values in confirmation messages
- **Redirect URLs** - Pass field values as URL parameters
- **Webhook Payloads** - Send field data to external services
- **Conditional Logic** - Compare field values to show/hide fields
- **Variable Formulas** - Create derived values from other fields

## Template Syntax

Use `{{fieldPath}}` syntax in templates to insert field values dynamically:

```
Thank you, {{name}}! Your order #{{responseId}} has been received.
We will send confirmation to {{email}}.
```

## Variable Types

Variables can hold different types of values:

- **String** - Text values
- **Number** - Numeric values
- **Boolean** - True/false flags
- **Array** - Lists of values
- **Object** - Complex structured data

## Value Sources

Variables can get their values from different sources:

- **Static** - A fixed default value
- **Field** - Mirrors the value of a form field
- **Formula** - Calculated from other values
- **URL Parameter** - Read from the page URL

## Available Metadata

In templates, you can access submission metadata:

- `{{responseId}}` - Unique ID of the submitted response
- `{{submittedAt}}` - Timestamp when form was submitted
- `{{formId}}` - ID of the form
- `{{formName}}` - Name of the form

## Using the Variable Picker

Click the **\{x\}** icon next to any text field that supports variables to open the picker:

1. Browse available fields, variables, and functions
2. Click to insert the variable reference
3. Preview the result

:::tip
The variable picker shows all available options based on context. In formula fields, it includes functions. In template fields, it includes metadata like responseId.
:::

## Examples

### Success Message with Variables

```
Thank you, {{firstName}} {{lastName}}!

Your submission has been received.
Reference Number: {{responseId}}
Submitted: {{submittedAt}}

We'll contact you at {{email}} within 24 hours.
```

### Redirect URL with Parameters

```
https://example.com/thank-you?name={{firstName}}&email={{email}}&ref={{responseId}}
```

### Webhook Payload

```json
{
  "customer": "{{firstName}} {{lastName}}",
  "email": "{{email}}",
  "total": "{{order.total}}",
  "submissionId": "{{responseId}}"
}
```

### Conditional Variable

Create an `isBusinessAccount` boolean variable that is true when the account type field equals "business":

```javascript
accountType === "business"
```

Use this variable to show/hide business-specific fields.

## URL Parameters

Pre-fill form fields from URL parameters:

```
https://forms.example.com/contact?name=John&email=john@example.com
```

Configure fields to read from URL parameters:

1. Enable **URL Pre-fill** in form settings
2. Set the **URL Parameter Name** for each field
3. Values from the URL automatically populate the form

## Best Practices

1. **Use meaningful names** - Make variable names descriptive
2. **Document variables** - Add descriptions for team members
3. **Test templates** - Verify variable substitution works
4. **Handle missing values** - Consider what happens if a field is empty
5. **Escape special characters** - Be careful with user input in URLs

## Troubleshooting

**Variable not replaced:**
- Check the variable name matches exactly (case-sensitive)
- Verify the field exists and has a value
- Ensure correct syntax (`{{variable}}` in templates)

**URL encoding issues:**
- Special characters may need URL encoding
- Test with various input values

**Empty values:**
- Consider providing fallback text
- Use conditional logic to handle empty states

## Next Steps

- [Conditional Logic](./conditional-logic.md) - Use variables in conditions
- [Computed Fields](./computed-fields.md) - Create formula-based variables
- [Form Lifecycle](./form-lifecycle.md) - Understand form modes and submission
