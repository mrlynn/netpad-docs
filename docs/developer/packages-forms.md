# @netpad/forms

React component library for rendering NetPad forms in your applications. Build sophisticated multi-page wizards, add conditional logic, create computed fields, and integrate with your backend—all with declarative configuration.

## Installation

```bash
npm install @netpad/forms
# or
yarn add @netpad/forms
# or
pnpm add @netpad/forms
```

### Peer Dependencies

The package requires the following peer dependencies:

```bash
npm install react react-dom @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## Quick Start

```tsx
import { FormRenderer } from '@netpad/forms';

function MyComponent() {
  const formConfig = {
    name: 'Contact Form',
    fieldConfigs: [
      { path: 'name', label: 'Name', type: 'short_text', included: true, required: true },
      { path: 'email', label: 'Email', type: 'email', included: true, required: true },
      { path: 'message', label: 'Message', type: 'long_text', included: true }
    ]
  };

  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormRenderer
      config={formConfig}
      onSubmit={handleSubmit}
    />
  );
}
```

## Key Features

- **Multi-page wizards** with progress tracking
- **Conditional logic** for dynamic field visibility
- **Computed fields** with formula evaluation
- **Built-in validation** with custom error messages
- **Nested data structures** with dot notation paths
- **Customizable theming** (colors, fonts, input styles)
- **28+ field types** (text, number, date, file upload, and more)

## Form Configuration

### Basic Configuration

```typescript
interface FormConfig {
  name: string;
  fieldConfigs: FieldConfig[];
  multiPageConfig?: MultiPageConfig;
  variables?: Variable[];
  theme?: FormTheme;
}
```

### Form Modes

Forms can operate in different modes:

```typescript
interface FormRendererProps {
  config: FormConfig;
  mode?: 'create' | 'edit' | 'view' | 'clone';
  documentId?: string;
  prefillData?: Record<string, any>;
  onSubmit?: (data: FormData) => void | Promise<void>;
  onError?: (error: FormError) => void;
  theme?: FormTheme;
}
```

## Field Types

The package supports 28+ field types organized by category:

### Basic Input Fields

- **`short_text`** - Single-line text input
- **`long_text`** - Multi-line textarea
- **`email`** - Email input with validation
- **`phone`** - Phone number input
- **`url`** - URL input with validation
- **`password`** - Password input (masked)

### Numeric Fields

- **`number`** - Numeric input with min/max validation
- **`slider`** - Range slider input
- **`rating`** - Star rating input

### Selection Fields

- **`dropdown`** - Single-select dropdown
- **`multiple_choice`** - Radio button group
- **`checkboxes`** - Multiple checkbox selection
- **`yes_no`** - Boolean toggle/checkbox
- **`tags`** - Tag input with autocomplete

### Date/Time Fields

- **`date`** - Date picker with calendar
- **`time`** - Time picker
- **`datetime`** - Combined date and time picker
- **`date_range`** - Date range selection

### Advanced Fields

- **`autocomplete`** - Autocomplete input with suggestions
- **`file_upload`** - Single file upload
- **`image_upload`** - Image upload with preview
- **`signature`** - Digital signature pad
- **`nps`** - Net Promoter Score (0-10 scale)

### Layout Fields

- **`section-header`** - Section divider with title
- **`description`** - Rich text description block
- **`divider`** - Visual divider
- **`spacer`** - Spacing element
- **`image`** - Image display

### Data Fields

- **`lookup`** - Cross-collection reference with autocomplete
- **`computed`** - Formula-based calculated field
- **`nested_object`** - Nested object structure
- **`repeater`** - Array of structured items

## Multi-Page Forms

Create step-by-step wizards with progress indicators:

```tsx
const config = {
  name: 'Employee Onboarding',
  multiPageConfig: {
    enabled: true,
    stepIndicator: 'numbers', // 'dots' | 'numbers' | 'progress' | 'tabs'
    pages: [
      { id: 'personal', title: 'Personal Info', type: 'form' },
      { id: 'employment', title: 'Employment', type: 'form' },
      { id: 'review', title: 'Review', type: 'summary' }
    ]
  },
  fieldConfigs: [
    { path: 'name', label: 'Name', pageId: 'personal', ... },
    { path: 'department', label: 'Department', pageId: 'employment', ... }
  ]
};

<FormRenderer config={config} onSubmit={handleSubmit} />
```

### Step Indicator Styles

- **`dots`** - Simple dot indicators
- **`numbers`** - Numbered steps with titles
- **`progress`** - Linear progress bar
- **`tabs`** - Clickable tab navigation

## Conditional Logic

Show or hide fields based on other field values:

```tsx
const fieldConfig = {
  path: 'companyName',
  label: 'Company Name',
  type: 'short_text',
  conditionalLogic: {
    action: 'show',
    logicType: 'all', // 'all' (AND) | 'any' (OR)
    conditions: [
      { field: 'accountType', operator: 'equals', value: 'business' }
    ]
  }
};
```

### Available Operators

- **`equals`** / **`notEquals`** - Exact value matching
- **`contains`** / **`notContains`** - Partial text matching
- **`greaterThan`** / **`lessThan`** - Numeric comparisons
- **`isEmpty`** / **`isNotEmpty`** - Check for values
- **`isTrue`** / **`isFalse`** - Boolean checks

## Computed Fields

Create fields that automatically calculate their value:

```tsx
const fieldConfig = {
  path: 'total',
  label: 'Total',
  type: 'number',
  computed: {
    formula: 'price * quantity',
    outputType: 'number'
  }
};
```

### Formula Syntax

- Use field paths to reference other fields: `price * quantity`
- Basic arithmetic: `+`, `-`, `*`, `/`
- String concatenation: `firstName + " " + lastName`
- Parentheses for grouping: `(price * quantity) * (1 - discountRate)`

## Custom Styling

Customize the appearance of your forms:

```tsx
import { FormRenderer } from '@netpad/forms';

const customTheme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  errorColor: '#dc3545',
  successColor: '#28a745',
  fontFamily: 'Inter, sans-serif',
  borderRadius: '8px',
  // ... more theme options
};

<FormRenderer
  config={formConfig}
  theme={customTheme}
  onSubmit={handleSubmit}
/>
```

## API Client

The package includes a client for fetching forms and submitting data:

```typescript
import { createNetPadClient } from '@netpad/forms';

const client = createNetPadClient({
  baseUrl: 'https://your-netpad-instance.com',
  apiKey: 'np_live_xxx'
});

// Fetch form configuration
const form = await client.getForm('my-form-id');

// Submit form data
await client.submitForm('my-form-id', formData);
```

## Utility Functions

The package exports utility functions for advanced use cases:

```typescript
import {
  evaluateConditionalLogic,
  validateField,
  validateForm,
  evaluateFormula,
  getNestedValue,
  setNestedValue
} from '@netpad/forms';

// Evaluate conditional logic
const shouldShow = evaluateConditionalLogic(
  field.conditionalLogic,
  formData
);

// Validate a field
const errors = validateField(field, value);

// Validate entire form
const formErrors = validateForm(config, formData);

// Evaluate computed field formula
const result = evaluateFormula(field.computed.formula, formData);

// Handle nested data paths
const value = getNestedValue(formData, 'user.address.city');
setNestedValue(formData, 'user.address.city', 'New York');
```

## TypeScript Support

Full TypeScript support with exported types:

```typescript
import type {
  FormConfiguration,
  FieldConfig,
  FormRendererProps,
  FormData,
  FormError,
  FormTheme,
  MultiPageConfig,
  Variable
} from '@netpad/forms';

const config: FormConfiguration = {
  name: 'My Form',
  fieldConfigs: [
    // TypeScript will validate field configurations
  ]
};
```

## Examples

### Complete Form with Validation

```tsx
import { FormRenderer } from '@netpad/forms';

function ContactForm() {
  const config = {
    name: 'Contact Form',
    fieldConfigs: [
      {
        path: 'name',
        label: 'Full Name',
        type: 'short_text',
        included: true,
        required: true,
        validation: {
          minLength: 2,
          maxLength: 100
        }
      },
      {
        path: 'email',
        label: 'Email Address',
        type: 'email',
        included: true,
        required: true
      },
      {
        path: 'message',
        label: 'Message',
        type: 'long_text',
        included: true,
        required: true,
        validation: {
          minLength: 10
        }
      }
    ]
  };

  const handleSubmit = async (data) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      alert('Thank you for your message!');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return <FormRenderer config={config} onSubmit={handleSubmit} />;
}
```

### Multi-Page Wizard

```tsx
function OnboardingWizard() {
  const config = {
    name: 'Employee Onboarding',
    multiPageConfig: {
      enabled: true,
      stepIndicator: 'numbers',
      pages: [
        { id: 'personal', title: 'Personal Information', type: 'form' },
        { id: 'employment', title: 'Employment Details', type: 'form' },
        { id: 'review', title: 'Review & Submit', type: 'summary' }
      ]
    },
    fieldConfigs: [
      // Personal info fields with pageId: 'personal'
      // Employment fields with pageId: 'employment'
    ]
  };

  return <FormRenderer config={config} onSubmit={handleSubmit} />;
}
```

## API Reference

### FormRenderer

Main component for rendering forms.

**Props**:
- `config: FormConfiguration` - Form configuration object
- `mode?: 'create' | 'edit' | 'view' | 'clone'` - Form mode (default: 'create')
- `documentId?: string` - Document ID for edit/view/clone modes
- `prefillData?: Record<string, any>` - Pre-fill form with data
- `onSubmit?: (data: FormData) => void | Promise<void>` - Submit handler
- `onError?: (error: FormError) => void` - Error handler
- `theme?: FormTheme` - Custom theme configuration

### FormConfiguration

Complete form configuration object.

**Properties**:
- `name: string` - Form name
- `fieldConfigs: FieldConfig[]` - Array of field configurations
- `multiPageConfig?: MultiPageConfig` - Multi-page wizard configuration
- `variables?: Variable[]` - Form variables
- `theme?: FormTheme` - Form theme

### FieldConfig

Individual field configuration.

**Properties**:
- `path: string` - Field path (supports dot notation for nested fields)
- `label: string` - Field label
- `type: FieldType` - Field type
- `included: boolean` - Whether field is included in form
- `required?: boolean` - Whether field is required
- `defaultValue?: any` - Default value
- `placeholder?: string` - Placeholder text
- `validation?: ValidationRules` - Validation rules
- `conditionalLogic?: ConditionalLogic` - Conditional visibility rules
- `computed?: ComputedField` - Computed field configuration
- `pageId?: string` - Page ID for multi-page forms

## Resources

- **NPM Package**: [@netpad/forms](https://www.npmjs.com/package/@netpad/forms)
- **GitHub**: [github.com/mongodb/netpad](https://github.com/mongodb/netpad)
- **Examples**: Check the `/examples/` directory in the repository
- **Form Builder Guide**: [Form Builder Documentation](../forms/form-builder.md)

## Related Documentation

- [Developer Packages Overview](./packages.md) - All NetPad packages
- [Workflows Package](./packages-workflows.md) - Workflow API client
- [MCP Server](./mcp-server.md) - AI-powered development tools
- [Form Builder Guide](../forms/form-builder.md) - Building forms in NetPad
