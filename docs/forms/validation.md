# Validation

Validation ensures that form submissions contain high-quality, correctly formatted data. NetPad provides multiple validation options for fields.

## Validation Types

### Required Fields

Mark fields as required to ensure they're filled out.

**Configuration**:
- Check "Required" checkbox in field properties
- Custom error message (optional)

**Example**:
```
Field: Email
Required: Yes
Error Message: "Please provide your email address"
```

### Length Validation

Control minimum and maximum character/word length.

**Text Fields**:
- Min length: Minimum characters
- Max length: Maximum characters
- Character counter (optional)

**Example**:
```
Field: Password
Min Length: 8
Max Length: 50
```

### Numeric Validation

Set min/max values for number fields.

**Configuration**:
- Min value: Minimum number
- Max value: Maximum number
- Step: Increment value

**Example**:
```
Field: Age
Min: 18
Max: 100
```

### Pattern Validation (Regex)

Validate text against regular expression patterns.

**Common Patterns**:

- **Email**: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- **Phone**: `^\+?[\d\s\-\(\)]+$`
- **URL**: `^https?://.+`
- **ZIP Code**: `^\d{5}(-\d{4})?$`
- **Credit Card**: `^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$`

**Example**:
```
Field: Phone Number
Pattern: ^\+?[\d\s\-\(\)]+$
Error Message: "Please enter a valid phone number"
```

### Date Validation

Set min/max dates for date fields.

**Configuration**:
- Min date: Earliest allowed date
- Min date relative: "Today", "Tomorrow", "+7 days"
- Max date: Latest allowed date
- Max date relative: "Today", "Tomorrow", "+30 days"

**Example**:
```
Field: Event Date
Min Date: Today
Max Date: +365 days
```

### File Validation

Validate uploaded files.

**Configuration**:
- Allowed file types: `.pdf`, `.jpg`, `.png`, etc.
- Max file size: 5MB, 10MB, etc.
- Min file size: Optional minimum
- Max number of files: For multi-file uploads

**Example**:
```
Field: Resume Upload
Allowed Types: .pdf, .doc, .docx
Max Size: 5MB
```

### Custom Validation

Write custom JavaScript expressions for complex validation.

**Syntax**:
```javascript
// Return true if valid, false or error message if invalid
function validate(value, formData) {
  if (condition) {
    return true; // Valid
  }
  return "Error message"; // Invalid with message
}
```

**Example**:
```
Field: Confirm Password
Custom Validation: formData.password === value || "Passwords must match"
```

**Accessing Other Fields**:
- Use `formData.fieldId` to access other field values
- Use `value` for current field value

## Validation Behavior

### Real-Time Validation

Validation occurs as users type:
- Immediate feedback
- Error messages appear below fields
- Fields highlighted in red when invalid

### On Submit Validation

All fields validated when form is submitted:
- Prevents submission if errors exist
- Scrolls to first error
- Highlights all invalid fields

### Error Messages

**Default Messages**:
- Required: "This field is required"
- Min length: "Must be at least X characters"
- Max length: "Must be no more than X characters"
- Pattern: "Invalid format"

**Custom Messages**:
- Override default messages per field
- Provide helpful, specific guidance
- Use clear, user-friendly language

## Validation Examples

### Email Validation

```
Field: Email Address
Type: Single-line Text
Required: Yes
Pattern: ^[^\s@]+@[^\s@]+\.[^\s@]+$
Error Message: "Please enter a valid email address"
```

### Password Strength

```
Field: Password
Type: Single-line Text
Required: Yes
Min Length: 8
Pattern: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$
Error Message: "Password must be at least 8 characters and contain uppercase, lowercase, and a number"
```

### Age Verification

```
Field: Age
Type: Integer
Required: Yes
Min: 18
Max: 120
Error Message: "You must be 18 or older"
```

### File Upload

```
Field: Document Upload
Type: Single File Upload
Required: Yes
Allowed Types: .pdf, .doc, .docx
Max Size: 5MB
Error Message: "Please upload a PDF, DOC, or DOCX file under 5MB"
```

### Conditional Validation

Use conditional logic to validate based on other fields:

```
Field: Business Phone
Type: Single-line Text
Required: If "Business Type" equals "Corporation"
Pattern: ^\+?[\d\s\-\(\)]+$
```

## Best Practices

1. **Validate Early**: Use real-time validation for immediate feedback
2. **Clear Messages**: Write helpful, specific error messages
3. **Don't Over-Validate**: Only validate what's necessary
4. **Test Validation**: Test all validation rules thoroughly
5. **User-Friendly**: Make validation helpful, not frustrating
6. **Pattern Examples**: Show examples for pattern validation
7. **Progressive Validation**: Validate as users complete fields

## Advanced Validation

### Cross-Field Validation

Validate relationships between fields:

```
Field: End Date
Custom Validation: 
  formData.startDate < value || "End date must be after start date"
```

### Conditional Required

Make fields required based on other fields:

```
Field: Company Name
Required: If "Account Type" equals "Business"
```

### Dynamic Validation

Change validation rules based on other fields:

```
Field: Phone Number
Pattern: 
  formData.country === "US" 
    ? "^\\d{10}$" 
    : "^\\+?[\\d\\s\\-\\(\\)]+$"
```

## Testing Validation

1. **Test Required Fields**: Try submitting without required fields
2. **Test Min/Max**: Test boundary values
3. **Test Patterns**: Try invalid formats
4. **Test Custom Rules**: Test all custom validation logic
5. **Test Error Messages**: Verify messages are clear and helpful

## Next Steps

- [Conditional Logic](./conditional-logic.md) - Show/hide fields based on validation
- [Building Forms](./building-forms.md) - Learn form building basics
- [Field Types](./field-types.md) - Explore field options
