# Field Types

NetPad supports 30+ field types for collecting various types of data. This guide covers all available field types and their configuration options.

:::tip Live Previews
Each field type below includes an interactive preview. Try filling in the fields, triggering validation, and click "Config" to see the underlying configuration.
:::

## Text Fields

### Single-Line Text

Basic text input for short responses.

<FormPreview
  fields={[
    {
      type: 'short_text',
      path: 'name',
      label: 'Full Name',
      required: true,
      placeholder: 'Enter your full name',
      helpText: 'First and last name',
      validation: { minLength: 2, maxLength: 100 }
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Try entering a single character to see validation"
/>

**Configuration**:
- Min/max length
- Pattern validation (regex)
- Placeholder text
- Default value

**Use Cases**: Names, emails, short answers

### Multi-Line Text (Textarea)

For longer text responses.

<FormPreview
  fields={[
    {
      type: 'long_text',
      path: 'description',
      label: 'Description',
      required: true,
      placeholder: 'Enter a detailed description...',
      rows: 4,
      validation: { maxLength: 500 }
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Multi-line text field with 4 rows"
/>

**Configuration**:
- Min/max length
- Rows (height)
- Character counter
- Rich text editor (optional)

**Use Cases**: Comments, descriptions, messages

## Number Fields

### Integer

Whole numbers only.

<FormPreview
  fields={[
    {
      type: 'number',
      path: 'quantity',
      label: 'Quantity',
      required: true,
      placeholder: 'Enter quantity',
      min: 1,
      max: 100,
      step: 1,
      defaultValue: 1
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Number field with min 1, max 100, step 1"
/>

**Configuration**:
- Min/max value
- Default value
- Step increment

**Use Cases**: Quantities, counts, ratings

### Decimal

Numbers with decimal places.

<FormPreview
  fields={[
    {
      type: 'number',
      path: 'price',
      label: 'Unit Price',
      required: true,
      placeholder: '0.00',
      min: 0,
      step: 0.01,
      defaultValue: 29.99
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Decimal field with step 0.01 for precise values"
/>

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

<FormPreview
  fields={[
    {
      type: 'date',
      path: 'eventDate',
      label: 'Event Date',
      required: true,
      helpText: 'Select the date for your event'
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Date picker using native browser input"
/>

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

<FormPreview
  fields={[
    {
      type: 'radio',
      path: 'priority',
      label: 'Priority Level',
      required: true,
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
        { label: 'Critical', value: 'critical' }
      ],
      helpText: 'Select the priority level for this request'
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Radio buttons for single selection"
/>

**Configuration**:
- Options list
- Default selection
- Layout (vertical/horizontal)
- "Other" option

**Use Cases**: Single-choice questions, preferences

### Dropdown (Select)

Single choice from dropdown menu.

<FormPreview
  fields={[
    {
      type: 'dropdown',
      path: 'department',
      label: 'Department',
      required: true,
      options: [
        { label: 'Engineering', value: 'engineering' },
        { label: 'Design', value: 'design' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Sales', value: 'sales' },
        { label: 'Human Resources', value: 'hr' },
        { label: 'Finance', value: 'finance' }
      ],
      helpText: 'Select your department'
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Dropdown for selecting from many options"
/>

**Configuration**:
- Options list
- Default selection
- Searchable
- "Other" option

**Use Cases**: Categories, selections from many options

### Checkboxes

Multiple selections allowed.

<FormPreview
  fields={[
    {
      type: 'checkbox',
      path: 'interests',
      label: 'Areas of Interest',
      required: true,
      options: [
        { label: 'Product Updates', value: 'products' },
        { label: 'Industry News', value: 'news' },
        { label: 'Tutorials & Guides', value: 'tutorials' },
        { label: 'Events & Webinars', value: 'events' }
      ],
      helpText: 'Select all that apply'
    }
  ]}
  settings={{ showSubmitButton: false }}
  hint="Checkboxes for multiple selections"
/>

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

### Tags

Interactive tag input with autocomplete and custom tag creation.

**Configuration**:
- Predefined tag options
- Allow custom tags
- Min/max tags
- Tag validation

**Use Cases**: Keywords, categories, labels, skills

### Smart Dropdown

Auto-populate dropdown options from distinct database values.

**Configuration**:
- Source collection and connection
- Field to get distinct values from
- Filter query (optional)
- Sort order
- Maximum options
- Refresh frequency

**How It Works**:
1. Queries your MongoDB collection
2. Gets distinct values for the specified field
3. Populates dropdown options automatically
4. Can refresh on form load or on-demand

**Use Cases**: Dynamic category lists, user selection, status values

### Ranking

Drag-and-drop ranking of items.

**Configuration**:
- Items to rank
- Min/max items
- Randomize order
- Show numbers

**Use Cases**: Preference ordering, priority lists, surveys

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

## Location Fields

### Address

Structured address input with autocomplete.

**Configuration**:
- Countries allowed
- Autocomplete provider
- Required components (street, city, state, zip, country)
- Address format

**Use Cases**: Shipping addresses, billing addresses, locations

### Geolocation

Capture user's geographic coordinates.

**Configuration**:
- Precision level
- Fallback address input
- Show map preview
- Default location

**Use Cases**: Check-in, delivery location, asset tracking

### Map Picker

Interactive map for selecting a location.

**Configuration**:
- Default center and zoom
- Map provider (Google Maps, Mapbox, OpenStreetMap)
- Allow search
- Show coordinates
- Marker customization

**Use Cases**: Event location, property location, delivery point

## Advanced Input Fields

### OTP Input

One-time password or verification code input.

**Configuration**:
- Number of digits (4, 6, 8)
- Auto-submit on complete
- Allow paste
- Show/hide toggle

**Use Cases**: Two-factor authentication, verification codes, PIN entry

### Color Picker

Visual color selection.

**Configuration**:
- Color format (hex, rgb, hsl)
- Preset colors
- Allow alpha/opacity
- Default color

**Use Cases**: Branding colors, theme customization, design tools

### Slider

Range selection with visual slider.

**Configuration**:
- Min/max values
- Step increment
- Show labels
- Dual handles (range)
- Default value

**Use Cases**: Price ranges, ratings, quantity selection, filters

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

## Advanced Field Features

### URL Pre-fill

Auto-populate form fields from URL query parameters.

**How It Works**:
```
https://yourform.netpad.io/form/abc123?name=John&email=john@example.com
```

When users access this URL, the `name` and `email` fields are automatically filled with the provided values.

**Configuration**:
1. Enable URL pre-fill on your form
2. Map query parameter names to field IDs
3. Optionally lock pre-filled fields to prevent editing

**Use Cases**:
- Personalized form links from email campaigns
- Pre-filled referral information
- Integration with external systems

### Field Encryption

Encrypt sensitive field data using MongoDB Queryable Encryption.

**Configuration**:
- Enable encryption per field
- Select encryption algorithm
- Configure key management

**Supported Encryption**:
- AES-256-GCM encryption
- Queryable encryption for search
- At-rest encryption

**Use Cases**:
- Social security numbers
- Medical records (HIPAA)
- Financial data (PCI-DSS)
- Personal identifiable information (GDPR)

**Note**: Encrypted fields require proper key management configuration. See [Encryption Guide](../security/encryption.md) for setup details.

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

## Complete Example: Contact Form

Here's a complete example combining multiple field types into a functional contact form:

<FormPreview
  fields={[
    {
      type: 'short_text',
      path: 'fullName',
      label: 'Full Name',
      required: true,
      placeholder: 'John Smith',
      validation: { minLength: 2 }
    },
    {
      type: 'email',
      path: 'email',
      label: 'Email Address',
      required: true,
      placeholder: 'john@example.com'
    },
    {
      type: 'phone',
      path: 'phone',
      label: 'Phone Number',
      placeholder: '(555) 123-4567',
      helpText: 'Optional - we\'ll only call if needed'
    },
    {
      type: 'dropdown',
      path: 'subject',
      label: 'Subject',
      required: true,
      options: [
        { label: 'General Inquiry', value: 'general' },
        { label: 'Technical Support', value: 'support' },
        { label: 'Sales Question', value: 'sales' },
        { label: 'Partnership', value: 'partnership' }
      ]
    },
    {
      type: 'long_text',
      path: 'message',
      label: 'Message',
      required: true,
      placeholder: 'How can we help you?',
      rows: 4,
      validation: { minLength: 10 }
    },
    {
      type: 'toggle',
      path: 'newsletter',
      label: 'Subscribe to our newsletter',
      defaultValue: false
    }
  ]}
  settings={{
    submitButtonText: 'Send Message',
    showSubmitButton: true
  }}
  showViewportSwitcher={true}
  hint="Complete contact form with validation - try switching viewports to see responsive behavior"
/>

## Next Steps

- [Validation](./validation.md) - Set up validation rules
- [Conditional Logic](./conditional-logic.md) - Show/hide fields dynamically
- [Building Forms](./building-forms.md) - Learn form building basics
