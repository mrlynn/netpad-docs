# Forms Overview

Forms are the core of NetPad. They allow you to collect data from users and store it directly in MongoDB collections. With NetPad's visual form builder, you can create sophisticated data entry forms without writing any code.

## What Can Forms Do?

- **Collect Data**: Gather information from users through intuitive forms
- **Validate Input**: Ensure data quality with built-in validation rules
- **Conditional Logic**: Show or hide fields based on user responses
- **Connect to MongoDB**: Automatically sync submissions to your database
- **Trigger Workflows**: Start automated processes when forms are submitted
- **Analytics**: Track submissions, completion rates, and field-level insights

## Form Lifecycle

### 1. Draft Mode

When you first create a form, it's in **draft mode**. Draft forms are:
- Not accessible publicly
- Only visible to you and your team
- Safe to edit and experiment with

### 2. Published Mode

When you're ready, **publish** your form to make it live:
- Get a shareable URL
- Form becomes accessible to users
- Submissions start being collected
- Can still be edited (changes are versioned)

### 3. Versioning

All form changes are tracked:
- View version history
- Revert to previous versions
- Compare versions side-by-side

## Key Features

### Visual Form Builder

- **Drag-and-Drop Interface**: Build forms visually
- **Real-time Preview**: See your form as users will see it
- **Multi-page Forms**: Organize large forms into steps
- **Keyboard Shortcuts**: Power user productivity features

### 30+ Field Types

From simple text inputs to complex nested objects, NetPad supports:
- Text fields (single-line, multi-line)
- Numbers (integer, decimal, currency, percentage)
- Dates and times
- Choice fields (radio, dropdown, checkboxes, rating, NPS, matrix)
- File uploads
- Digital signatures
- Lookup fields (reference other collections)
- Computed fields (formula-based calculations)
- Nested objects and arrays

### Schema Import

Import existing MongoDB collection schemas to auto-generate forms:
1. Connect to your MongoDB instance
2. Select a collection
3. NetPad analyzes the schema
4. Form fields are created automatically

### Conditional Logic

Show or hide fields based on user input:
- "If field X equals Y, show field Z"
- Multiple conditions with AND/OR logic
- Nested conditional rules

### Validation Rules

Ensure data quality:
- Required fields
- Min/max length
- Pattern matching (regex)
- Custom validation expressions
- Field-level error messages

### Access Control

Control who can submit your forms:
- **Public**: Anyone with the URL
- **Authenticated**: Must sign in first
- **Restricted**: Domain or user whitelist

### Bot Protection

Integrate Cloudflare Turnstile CAPTCHA to prevent spam submissions.

### Webhooks

Send form data to external services when forms are submitted.

### Customization

- Custom themes (colors, backgrounds, branding)
- Custom redirect URLs after submission
- URL pre-fill (auto-populate from query parameters)
- Embeddable forms (iframe or JavaScript)

## Getting Started

1. [Building Forms](./building-forms.md) - Learn how to build forms
2. [Field Types](./field-types.md) - Explore all available fields
3. [Validation](./validation.md) - Set up validation rules
4. [Conditional Logic](./conditional-logic.md) - Add dynamic behavior
5. [Publishing](./publishing.md) - Make your form live
6. [Analytics](./analytics.md) - Track form performance

## Use Cases

- **Contact Forms**: Collect customer inquiries
- **Surveys**: Gather feedback and opinions
- **Registrations**: Event sign-ups, user registration
- **Applications**: Job applications, grant applications
- **Orders**: Product orders, service requests
- **Data Entry**: Internal data collection forms
- **Feedback**: Customer satisfaction surveys

## Next Steps

Ready to build your first form? Start with the [Building Forms Guide](./building-forms.md).
