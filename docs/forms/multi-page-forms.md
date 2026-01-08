# Multi-Page Forms

Break long forms into multiple pages or steps. Improve user experience with progress indicators and per-page validation.

## Setting Up Pages

### Enable Multi-Page Mode

1. Open **Page Configuration** panel in Form Builder
2. Enable **Multi-page mode**
3. Create pages with titles and descriptions
4. Assign fields to each page
5. Drag to reorder pages

### Page Properties

Each page has:

- **Title** - Page name shown to users
- **Description** - Optional explanation text
- **Fields** - Fields assigned to this page
- **Conditions** - When to show this page

## Step Indicator Styles

Choose how to display progress:

### Dots
Simple dot indicators showing current position:
```
● ○ ○ ○
```

### Numbers
Numbered steps with titles:
```
1. Contact Info → 2. Details → 3. Review → 4. Submit
```

### Progress Bar
Linear progress bar showing completion:
```
[████████░░░░░░░░] 50%
```

### Tabs
Clickable tab navigation:
```
[Contact] [Details] [Review] [Submit]
```

## Navigation Options

### Allow Jump to Page
Let users click to any page directly:
- Enable for non-linear forms
- Disable to enforce sequential completion

### Validate on Page Change
Check required fields before proceeding:
- Prevent moving forward with errors
- Show validation messages
- Highlight incomplete fields

### Show Page Titles
Display current page title:
- Header shows page name
- Subtitle shows description

### Custom Button Labels
Customize navigation buttons:
- **Next** → "Continue", "Next Step"
- **Previous** → "Back", "Go Back"
- **Submit** → "Complete", "Finish"

## Conditional Pages

Add conditional logic to pages to show or hide entire sections:

### Example: Business Details Page

```
Page: Business Details
Show When: Account Type equals "Business"
```

Business-only information appears only when relevant.

### Branching Logic

Create different paths through the form:

```
Page 1: Introduction
  ↓
Page 2: Personal Info (always)
  ↓
Page 3a: Business Details (if Business)
Page 3b: Individual Details (if Personal)
  ↓
Page 4: Review (always)
```

## Page Validation

### Per-Page Validation
- Validate fields on current page
- Show errors before allowing navigation
- Real-time validation as user types

### Summary Validation
- Final validation on submit
- Review all pages for errors
- Jump to pages with issues

## Best Practices

1. **Logical grouping** - Group related fields on same page
2. **Clear progress** - Show where user is in process
3. **Save progress** - Auto-save between pages
4. **Allow back navigation** - Let users review and edit
5. **Clear titles** - Name pages descriptively
6. **Minimal pages** - Don't over-segment

## Page Layout Tips

### Keep Pages Balanced
- Similar number of fields per page
- Don't overwhelm on any single page

### Put Required Fields Early
- Critical information on first pages
- Optional fields on later pages

### Review Page
- Consider a final review page
- Show summary of all entries
- Allow editing before submit

## Example: Job Application

```
Page 1: Personal Information
- Name, Email, Phone
- Resume upload

Page 2: Work Experience
- Repeater: Previous positions
- Skills checkboxes

Page 3: Education
- Repeater: Degrees/certifications
- Conditional: Show "Other" details

Page 4: Additional Questions
- Availability
- Salary expectations
- Cover letter

Page 5: Review & Submit
- Summary of all entries
- Edit links for each section
- Submit button
```

:::tip
Add conditional logic to pages to show or hide entire sections based on previous answers.
:::

## Mobile Considerations

- Pages help mobile users
- Single-column layout per page
- Large touch targets for navigation
- Clear progress on small screens

## Next Steps

- [Form Builder](./form-builder.md) - Build your form
- [Conditional Logic](./conditional-logic.md) - Add page conditions
- [Field Configuration](./field-configuration.md) - Configure fields
