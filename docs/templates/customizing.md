---
sidebar_position: 4
---

# Customizing Templates

Templates are starting points, not final solutions. This guide covers how to customize templates to match your specific requirements.

## What You Can Customize

Everything in a template is fully editable:

| Element | What You Can Change |
|---------|---------------------|
| **Fields** | Add, remove, reorder, change types |
| **Labels** | Update field labels and descriptions |
| **Validation** | Modify required status, add rules |
| **Layout** | Change field widths, add sections |
| **Logic** | Add conditional visibility rules |
| **Settings** | Update form name, messages, appearance |

## Modifying Fields

### Edit Field Properties

1. **Click any field** in the Form Builder
2. **Properties panel** opens on the right
3. **Modify properties**:
   - Label and placeholder text
   - Help text and descriptions
   - Required status
   - Default values
   - Validation rules

### Change Field Type

Sometimes a template uses a field type that doesn't quite fit:

1. Select the field
2. Click **"Change Type"** in the properties panel
3. Choose a new field type
4. Adjust type-specific settings

:::tip
Common conversions: `short_text` → `email`, `dropdown` → `radio`, `long_text` → `short_text`
:::

### Reorder Fields

Drag and drop fields to reorder them:

1. **Hover** over a field
2. **Grab** the drag handle (⋮⋮)
3. **Drag** to the new position
4. **Drop** to place the field

### Add New Fields

1. Open the **Field Palette** (left sidebar)
2. **Drag a field type** onto the canvas
3. **Drop** it where you want it
4. **Configure** the field properties

### Remove Fields

1. **Select the field** to remove
2. Click the **Delete** button (🗑️) or press `Delete`
3. **Confirm** removal

## Adjusting Validation

### Required Fields

Toggle required status:

1. Select the field
2. Check/uncheck **"Required"** in properties

### Validation Rules

Add or modify validation:

```typescript
// Example: Add length validation
{
  type: 'short_text',
  path: 'username',
  label: 'Username',
  validation: {
    minLength: 3,
    maxLength: 20,
    pattern: '^[a-zA-Z0-9_]+$',
    customMessage: 'Username must be 3-20 alphanumeric characters'
  }
}
```

See [Validation](../forms/validation.md) for all available rules.

## Adding Conditional Logic

Make fields show/hide based on other field values:

1. Select a field
2. Open **"Conditional Logic"** section
3. Add a rule:
   - **When** [field] [operator] [value]
   - **Then** show/hide/require this field

Example: Show "Other" text field when dropdown selection is "Other":

```typescript
conditionalLogic: [
  {
    action: 'show',
    targetField: 'otherReason',
    logicType: 'all',
    conditions: [
      { field: 'reason', operator: 'equals', value: 'other' }
    ]
  }
]
```

See [Conditional Logic](../forms/conditional-logic.md) for details.

## Layout Changes

### Field Widths

Adjust how much horizontal space a field takes:

1. Select the field
2. Set **Width**: `full`, `half`, `third`, or `quarter`

```typescript
{ type: 'short_text', path: 'firstName', label: 'First Name', width: 'half' }
{ type: 'short_text', path: 'lastName', label: 'Last Name', width: 'half' }
```

### Adding Sections

Group related fields with section headers:

1. Drag a **Section** field from the palette
2. Give it a title
3. Place fields below it

### Multi-Page Forms

Convert to a wizard-style form:

1. Add **Page Break** fields where you want page divisions
2. Configure page titles and navigation
3. See [Multi-Page Forms](../forms/multi-page-forms.md)

## Form Settings

### Basic Settings

Update in the Form Settings panel:

- **Form Name** — Internal identifier
- **Title** — Displayed to users
- **Description** — Form introduction text
- **Submit Button Text** — "Submit", "Send", etc.
- **Success Message** — Thank you message after submission

### Appearance

Customize the look:

- **Theme** — Light/Dark mode
- **Primary Color** — Accent color for buttons and highlights
- **Border Radius** — Rounded or square corners

## Best Practices

### Do's

- **Start simple** — Use the template as-is first, then customize
- **Test frequently** — Preview after each significant change
- **Keep structure** — Maintain logical field ordering
- **Preserve validation** — Keep important validation rules unless you have a reason to remove them

### Don'ts

- **Don't over-customize** — If you're changing everything, consider starting from scratch
- **Don't remove required validation** — Unless you're sure it's not needed
- **Don't change field paths** — If you have existing data, changing paths will break references

## Common Customization Scenarios

### Scenario: Adding Company-Specific Fields

```typescript
// Add to a contact form template
{
  type: 'dropdown',
  path: 'department',
  label: 'Department',
  required: true,
  options: [
    { label: 'Sales', value: 'sales' },
    { label: 'Support', value: 'support' },
    { label: 'Engineering', value: 'engineering' },
    { label: 'Other', value: 'other' }
  ]
}
```

### Scenario: Making Optional Fields Required

```typescript
// Original template field
{ type: 'phone', path: 'phone', label: 'Phone Number' }

// Modified to be required
{ type: 'phone', path: 'phone', label: 'Phone Number', required: true }
```

### Scenario: Adding Validation to Existing Fields

```typescript
// Add URL validation to a text field
{
  type: 'url',  // Changed from short_text
  path: 'website',
  label: 'Company Website',
  placeholder: 'https://example.com'
}
```

## Saving Customizations

### Save as New Template

Save your customized form as a reusable template:

1. Click **"Save as Template"** in the Form Builder
2. Give it a name and description
3. Choose a category
4. Your template appears in the Template Gallery

### Export Configuration

Export the form config for backup or sharing:

1. Go to Form Settings
2. Click **"Export"**
3. Choose TypeScript or JSON format
4. Save the file

## Related Pages

- [Template Gallery](./gallery.md) — Browse templates
- [Using Templates](./using-templates.md) — Apply templates
- [Form Builder](../forms/form-builder.md) — Builder interface
- [Field Types](../forms/field-types.md) — Available field types
- [Validation](../forms/validation.md) — Validation rules
- [Conditional Logic](../forms/conditional-logic.md) — Dynamic field visibility
