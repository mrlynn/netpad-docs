# Field Types

NetPad supports 30+ field types for collecting various types of data. This guide covers all available field types and their configuration options.

## Text Fields

### Single-Line Text

Basic text input for short responses.

**Configuration**:
- Min/max length
- Pattern validation (regex)
- Placeholder text
- Default value

**Use Cases**: Names, emails, short answers

### Multi-Line Text (Textarea)

For longer text responses.

**Configuration**:
- Min/max length
- Rows (height)
- Character counter
- Rich text editor (optional)

**Use Cases**: Comments, descriptions, messages

## Number Fields

### Integer

Whole numbers only.

**Configuration**:
- Min/max value
- Default value
- Step increment

**Use Cases**: Quantities, counts, ratings

### Decimal

Numbers with decimal places.

**Configuration**:
- Min/max value
- Decimal places
- Default value
- Step increment

**Use Cases**: Prices, measurements, percentages

### Currency

Formatted currency input.

**Configuration**:
- Currency symbol
- Min/max value
- Decimal places
- Locale formatting

**Use Cases**: Prices, costs, budgets

### Percentage

Percentage values (0-100).

**Configuration**:
- Min/max percentage
- Default value
- Display format

**Use Cases**: Completion rates, discounts, allocations

## Date & Time Fields

### Date Picker

Select a date.

**Configuration**:
- Date format
- Min/max date
- Default date
- Calendar style

**Use Cases**: Birth dates, event dates, deadlines

### Time Picker

Select a time.

**Configuration**:
- Time format (12/24 hour)
- Min/max time
- Default time
- Time intervals

**Use Cases**: Meeting times, schedules

### DateTime Picker

Select both date and time.

**Configuration**:
- Date and time formats
- Min/max datetime
- Default datetime
- Timezone handling

**Use Cases**: Event start times, deadlines with time

## Choice Fields

### Radio Buttons

Single choice from options.

**Configuration**:
- Options list
- Default selection
- Layout (vertical/horizontal)
- "Other" option

**Use Cases**: Single-choice questions, preferences

### Dropdown (Select)

Single choice from dropdown menu.

**Configuration**:
- Options list
- Default selection
- Searchable
- "Other" option

**Use Cases**: Categories, selections from many options

### Checkboxes

Multiple selections allowed.

**Configuration**:
- Options list
- Default selections
- Min/max selections
- Layout

**Use Cases**: Multiple selections, interests, features

### Multi-Select Dropdown

Multiple selections from dropdown.

**Configuration**:
- Options list
- Default selections
- Searchable
- Min/max selections

**Use Cases**: Tags, categories, multiple choices

### Rating Scale

Star or numeric rating.

**Configuration**:
- Scale (1-5, 1-10, etc.)
- Icon style (stars, hearts, etc.)
- Labels for scale points
- Default rating

**Use Cases**: Product reviews, satisfaction ratings

### NPS (Net Promoter Score)

Standard NPS question (0-10 scale).

**Configuration**:
- Question text
- Labels for scale ends
- Default value

**Use Cases**: Customer satisfaction, loyalty measurement

### Matrix

Grid of questions with shared options.

**Configuration**:
- Rows (questions)
- Columns (options)
- Required per row
- Layout

**Use Cases**: Surveys, evaluations, comparisons

## File Fields

### Single File Upload

Upload one file.

**Configuration**:
- Allowed file types
- Max file size
- Storage location
- Preview enabled

**Use Cases**: Documents, images, resumes

### Multiple File Upload

Upload multiple files.

**Configuration**:
- Allowed file types
- Max file size per file
- Max number of files
- Total size limit

**Use Cases**: Portfolios, document sets, galleries

## Special Fields

### Signature

Digital signature capture.

**Configuration**:
- Required
- Background color
- Pen color
- Clear button

**Use Cases**: Agreements, approvals, consent

### Lookup Field

Reference data from another collection.

**Configuration**:
- Source collection
- Display field
- Search field
- Filter query
- Multiple selection

**Use Cases**: Related records, foreign keys, references

### Computed Field

Formula-based calculated field.

**Configuration**:
- Formula expression
- Field references
- Result type
- Decimal places

**Use Cases**: Totals, calculations, derived values

**Example Formulas**:
- `field1 + field2` - Sum
- `field1 * field2` - Multiply
- `field1 / field2` - Divide
- `field1 - field2` - Subtract
- `CONCAT(field1, " ", field2)` - Concatenate

## Complex Fields

### Nested Object

Group related fields together.

**Configuration**:
- Child fields
- Collapsible
- Repeatable (array of objects)

**Use Cases**: Addresses, contact info, complex structures

**Example Structure**:
```json
{
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  }
}
```

### Array Field

Dynamic list of values.

**Configuration**:
- Item field type
- Min/max items
- Add/remove buttons
- Default items

**Use Cases**: Lists, tags, multiple entries

**Example Structure**:
```json
{
  "tags": ["tag1", "tag2", "tag3"]
}
```

## Layout Fields

### Section Divider

Visual separator and grouping.

**Configuration**:
- Title
- Description
- Collapsible
- Style

**Use Cases**: Organizing long forms, grouping related fields

### Page Break

Separate form into multiple pages.

**Configuration**:
- Page title
- Page description
- Progress indicator
- Navigation buttons

**Use Cases**: Multi-step forms, wizards

### HTML Content

Custom HTML content.

**Configuration**:
- HTML content
- Styling options

**Use Cases**: Instructions, images, custom content

## Field Properties

All fields share these common properties:

### Basic Properties

- **Field ID**: Unique identifier (auto-generated, can customize)
- **Label**: Display name
- **Placeholder**: Hint text
- **Help Text**: Additional guidance
- **Required**: Must be filled
- **Default Value**: Pre-filled value

### Validation Properties

- **Min/Max**: Minimum and maximum constraints
- **Pattern**: Regex pattern validation
- **Custom Validation**: JavaScript expression
- **Error Message**: Custom error text

### Display Properties

- **Width**: Field width (full, half, third, etc.)
- **Visibility**: Show/hide conditions
- **Read-only**: Display only, no editing
- **Hidden**: Hidden from users (for computed fields)

## Choosing the Right Field Type

**Text Input**: Short, free-form text
**Textarea**: Longer text responses
**Number**: Numeric values, calculations
**Date/Time**: Temporal data
**Choice Fields**: Limited options, selections
**File Upload**: Documents, images, files
**Signature**: Legal agreements, approvals
**Lookup**: Related data from other collections
**Computed**: Calculated values
**Nested/Array**: Complex data structures

## Best Practices

1. **Match Field Type to Data**: Use appropriate types for your data
2. **Provide Defaults**: Pre-fill when possible
3. **Use Help Text**: Guide users on what to enter
4. **Validate Appropriately**: Set min/max, patterns, required fields
5. **Group Related Fields**: Use sections and nested objects
6. **Keep It Simple**: Don't overcomplicate field types

## Next Steps

- [Validation](./validation.md) - Set up validation rules
- [Conditional Logic](./conditional-logic.md) - Show/hide fields dynamically
- [Building Forms](./building-forms.md) - Learn form building basics
