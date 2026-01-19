# @netpad/templates Package

The `@netpad/templates` package provides 100+ production-ready form templates for common business use cases. Templates include field configurations, validation rules, conditional logic, and optional field-level encryption for sensitive data.

## Overview

### Key Features

- **100+ Templates** across 15 categories (healthcare, HR, finance, legal, etc.)
- **Field-Level Encryption** using MongoDB Queryable Encryption
- **Compliance Support** for HIPAA, PCI-DSS, GDPR, SOC2, CCPA, FERPA
- **TypeScript Support** with full type definitions
- **Tree-Shakeable** imports for optimal bundle size
- **Zero Dependencies** - standalone package

### Package Info

| Property | Value |
|----------|-------|
| Package | `@netpad/templates` |
| Version | 1.0.x |
| License | MIT |

## Installation

```bash
# npm
npm install @netpad/templates

# yarn
yarn add @netpad/templates

# pnpm
pnpm add @netpad/templates
```

## Basic Usage

### Import All Templates

```typescript
import { allTemplates, getTemplateById } from '@netpad/templates';

// Get total count
console.log(`Total templates: ${allTemplates.length}`);

// Get specific template
const template = getTemplateById('patient-intake');
console.log(template.name); // "Patient Intake Form"
```

### Import Specific Category

```typescript
// Tree-shakeable - only loads healthcare templates
import { healthcareWellnessTemplates } from '@netpad/templates';

healthcareWellnessTemplates.forEach(template => {
  console.log(template.name);
});
```

### Import Types Only

```typescript
import type {
  FormTemplate,
  FieldConfig,
  FieldEncryptionConfig
} from '@netpad/templates';
```

### Import Field Helpers

```typescript
import {
  textField,
  emailField,
  selectField,
  createTemplate
} from '@netpad/templates/helpers';
```

## Template Structure

Each template follows this TypeScript interface:

```typescript
interface FormTemplate {
  // Identification
  id: string;                    // Unique template ID (e.g., 'patient-intake')
  name: string;                  // Display name
  shortDescription: string;      // Brief description (1-2 sentences)
  fullDescription: string;       // Detailed description

  // Categorization
  category: FormTemplateCategory; // Category ID (e.g., 'healthcare-wellness')
  icon: string;                   // Icon name from icon library
  tags: string[];                 // Search tags

  // Metadata
  complexity: 'simple' | 'moderate' | 'advanced';
  estimatedTime: number;          // Minutes to complete
  isFeatured: boolean;            // Show in featured section
  displayOrder: number;           // Sort order within category

  // Content
  fieldConfigs: FieldConfig[];    // Form field definitions
  useCases: string[];             // Example use cases
  features: string[];             // Key features list

  // Enhanced content (optional)
  enhanced?: EnhancedTemplateContent;
}
```

### Field Configuration

```typescript
interface FieldConfig {
  path: string;                   // Field path/name (e.g., 'ssn', 'email')
  label: string;                  // Display label
  type: string;                   // Field type (text, email, date, etc.)
  included: boolean;              // Include in form
  required: boolean;              // Required field

  // Optional properties
  defaultValue?: any;
  placeholder?: string;
  fieldWidth?: 'full' | 'half' | 'third' | 'quarter';
  validation?: FieldValidation;
  conditionalLogic?: ConditionalLogic;
  encryption?: FieldEncryptionConfig;  // Encryption settings
}
```

## Template Categories

| Category | ID | Templates | Description |
|----------|-----|-----------|-------------|
| Healthcare & Wellness | `healthcare-wellness` | 8 | Patient intake, appointments, assessments |
| HR & Recruitment | `hr-recruitment` | 7 | Job applications, onboarding, reviews |
| Finance & Accounting | `finance-accounting` | 6 | Invoices, expenses, budgets |
| Legal & Compliance | `legal-compliance` | 5 | Contracts, NDAs, compliance forms |
| Customer Service | `customer-service` | 7 | Support tickets, feedback, surveys |
| Marketing & Research | `marketing-research` | 6 | Surveys, lead capture, research |
| Education & Training | `education-training` | 6 | Enrollments, assessments, feedback |
| Real Estate | `real-estate` | 5 | Applications, listings, inspections |
| Events & Hospitality | `events-hospitality` | 6 | Registrations, RSVPs, bookings |
| Nonprofit & Community | `nonprofit-community` | 5 | Donations, volunteers, memberships |
| Technology & IT | `technology-it` | 6 | Bug reports, feature requests, access |
| Sports & Fitness | `sports-fitness` | 5 | Memberships, waivers, registrations |
| Travel & Tourism | `travel-tourism` | 5 | Bookings, itineraries, feedback |
| Government & Public | `government-public` | 5 | Permits, applications, reports |
| Business & Sales | `business-sales` | 8 | Leads, quotes, orders |

## API Reference

### Functions

#### `getTemplateById(id: string): FormTemplate | undefined`

Returns a template by its unique ID.

```typescript
import { getTemplateById } from '@netpad/templates';

const template = getTemplateById('patient-intake');
if (template) {
  console.log(template.name);           // "Patient Intake Form"
  console.log(template.fieldConfigs);   // Array of field configurations
}
```

#### `getTemplatesByCategory(category: FormTemplateCategory): FormTemplate[]`

Returns all templates in a category.

```typescript
import { getTemplatesByCategory } from '@netpad/templates';

const healthcareTemplates = getTemplatesByCategory('healthcare-wellness');
console.log(`Healthcare templates: ${healthcareTemplates.length}`);
```

#### `getFeaturedTemplates(): FormTemplate[]`

Returns templates marked as featured.

```typescript
import { getFeaturedTemplates } from '@netpad/templates';

const featured = getFeaturedTemplates();
// Returns templates where isFeatured === true
```

#### `searchTemplates(query: string, filters?: TemplateFilters): FormTemplate[]`

Searches templates by keyword with optional filters.

```typescript
import { searchTemplates } from '@netpad/templates';

// Search by keyword
const results = searchTemplates('patient');
// Returns templates matching "patient" in name, description, or tags

// Search with filters
const filtered = searchTemplates('intake', {
  category: 'healthcare-wellness',
  complexity: 'advanced',
});
```

#### `getTemplateCounts(): Record<FormTemplateCategory, number>`

Returns count of templates per category.

```typescript
import { getTemplateCounts } from '@netpad/templates';

const counts = getTemplateCounts();
console.log(counts['healthcare-wellness']); // 8
```

#### `filterTemplates(filters: TemplateFilters): FormTemplate[]`

Filters templates by multiple criteria.

```typescript
import { filterTemplates } from '@netpad/templates';

const templates = filterTemplates({
  category: 'healthcare-wellness',
  complexity: 'simple',
  hasEncryption: true,
});
```

### Constants

#### `TEMPLATE_CATEGORIES`

Array of category metadata.

```typescript
import { TEMPLATE_CATEGORIES } from '@netpad/templates';

TEMPLATE_CATEGORIES.forEach(category => {
  console.log(category.id, category.name, category.icon);
});
```

#### `allTemplates`

Array containing all 100+ templates.

```typescript
import { allTemplates } from '@netpad/templates';

console.log(`Total templates: ${allTemplates.length}`);
```

## Field Types & Helpers

### Available Field Types

| Type | Helper Function | Description |
|------|-----------------|-------------|
| `text` | `textField()` | Single-line text input |
| `textarea` | `textareaField()` | Multi-line text input |
| `email` | `emailField()` | Email with validation |
| `phone` | `phoneField()` | Phone number with formatting |
| `number` | `numberField()` | Numeric input |
| `currency` | `currencyField()` | Currency with formatting |
| `date` | `dateField()` | Date picker |
| `time` | `timeField()` | Time picker |
| `datetime` | `dateTimeField()` | Combined date/time |
| `select` | `selectField()` | Dropdown selection |
| `multiSelect` | `multiSelectField()` | Multiple selection |
| `checkbox` | `checkboxField()` | Single checkbox |
| `radio` | `radioField()` | Radio button group |
| `yesNo` | `yesNoField()` | Yes/No toggle |
| `rating` | `ratingField()` | Star rating |
| `scale` | `scaleField()` | Numeric scale (1-10) |
| `file` | `fileField()` | File upload |
| `image` | `imageField()` | Image upload |
| `signature` | `signatureField()` | Digital signature |
| `address` | `addressField()` | Full address |
| `url` | `urlField()` | URL with validation |
| `color` | `colorField()` | Color picker |
| `tags` | `tagsField()` | Tag input |
| `slider` | `sliderField()` | Range slider |
| `sectionHeader` | `sectionHeader()` | Section divider |

### Using Field Helpers

```typescript
import {
  createTemplate,
  textField,
  emailField,
  phoneField,
  selectField,
  dateField,
  sectionHeader,
} from '@netpad/templates/helpers';

const customTemplate = createTemplate({
  id: 'custom-form',
  name: 'Custom Form',
  shortDescription: 'A custom form template',
  category: 'business-sales',
  fieldConfigs: [
    sectionHeader('contact', 'Contact Information'),
    textField('firstName', 'First Name', {
      required: true,
      fieldWidth: 'half'
    }),
    textField('lastName', 'Last Name', {
      required: true,
      fieldWidth: 'half'
    }),
    emailField('email', 'Email Address', { required: true }),
    phoneField('phone', 'Phone Number'),
    selectField('source', 'How did you hear about us?', [
      'Google',
      'Social Media',
      'Referral',
      'Other',
    ]),
  ],
});
```

## Security & Encryption

Templates support MongoDB Queryable Encryption for protecting sensitive data. Encryption happens **client-side** before data reaches the database.

### How It Works

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   User Input    │      │  NetPad App     │      │   MongoDB       │
│  SSN: 123-45-67 │ ───▶ │  Encrypts SSN   │ ───▶ │  Stores only    │
│                 │      │  before insert  │      │  ciphertext     │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

### Encryption Configuration

```typescript
interface FieldEncryptionConfig {
  enabled: boolean;              // Enable encryption
  algorithm: EncryptionAlgorithm;
  queryType: EncryptedQueryType;
  sensitivityLevel: DataSensitivityLevel;
  compliance?: ComplianceFramework[];
  contentionFactor?: number;     // For Indexed algorithm (1-8)
  rangeMin?: number | string;    // For Range algorithm
  rangeMax?: number | string;    // For Range algorithm
  encryptionReason?: string;     // Audit trail
}
```

### Encryption Algorithms

| Algorithm | Query Support | Use Case | Security Level |
|-----------|---------------|----------|----------------|
| `Indexed` | Equality queries | SSN lookups, email search | High |
| `Unindexed` | No queries | Medical records, bank accounts | Maximum |
| `Range` | Range queries | Salary ranges, dates | High (MongoDB 7.0+) |

### Query Types

| Type | Description | Example |
|------|-------------|---------|
| `none` | Cannot query this field | Medical history |
| `equality` | Exact match only | Find by SSN |
| `range` | Greater/less than | Salary > $50,000 |

### Sensitivity Levels

| Level | Description | Encryption |
|-------|-------------|------------|
| `public` | No sensitive data | Not needed |
| `internal` | Low sensitivity | Optional |
| `confidential` | Medium sensitivity | Recommended |
| `restricted` | High sensitivity (PII/PHI) | Required |
| `secret` | Maximum sensitivity | Mandatory |

### Example: Encrypted SSN Field

```typescript
textField('ssn', 'Social Security Number', {
  required: true,
  fieldWidth: 'half',
  encryption: {
    enabled: true,
    algorithm: 'Indexed',           // Can search by SSN
    queryType: 'equality',          // Exact match only
    sensitivityLevel: 'secret',
    compliance: ['HIPAA', 'GDPR', 'CCPA'],
    contentionFactor: 4,            // Balance insert/query performance
    encryptionReason: 'PII - SSN required for identity verification',
  },
})
```

### Example: Encrypted Medical Records

```typescript
textareaField('medicalHistory', 'Medical History', {
  encryption: {
    enabled: true,
    algorithm: 'Unindexed',         // Maximum security
    queryType: 'none',              // Cannot be searched
    sensitivityLevel: 'restricted',
    compliance: ['HIPAA'],
    encryptionReason: 'PHI - Protected health information',
  },
})
```

### Example: Encrypted Bank Account

```typescript
textField('accountNumber', 'Bank Account Number', {
  required: true,
  encryption: {
    enabled: true,
    algorithm: 'Unindexed',         // Never needs to be searched
    queryType: 'none',
    sensitivityLevel: 'secret',
    compliance: ['PCI-DSS', 'SOC2'],
    encryptionReason: 'Financial data - Bank account for direct deposit',
  },
})
```

## Compliance Frameworks

### Supported Frameworks

| Framework | Full Name | Use Case |
|-----------|-----------|----------|
| `HIPAA` | Health Insurance Portability and Accountability Act | Healthcare data (PHI) |
| `PCI-DSS` | Payment Card Industry Data Security Standard | Payment/financial data |
| `GDPR` | General Data Protection Regulation | EU personal data |
| `SOC2` | Service Organization Control 2 | Security audits |
| `CCPA` | California Consumer Privacy Act | California residents' data |
| `FERPA` | Family Educational Rights and Privacy Act | Student records |

### Compliance by Template

| Template | Compliance Frameworks |
|----------|----------------------|
| Patient Intake | HIPAA, GDPR, CCPA |
| Employee Onboarding | GDPR, CCPA, PCI-DSS, SOC2 |
| Payment Form | PCI-DSS |
| Student Enrollment | FERPA |

## Featured Templates with Encryption

These templates include pre-configured field-level encryption:

### Patient Intake Form (`patient-intake`)

- **Category**: Healthcare & Wellness
- **Encrypted Fields**: SSN, Date of Birth, Insurance Policy Number, Medical Conditions, Medications, Allergies
- **Compliance**: HIPAA, GDPR, CCPA

```typescript
import { getTemplateById } from '@netpad/templates';

const patientIntake = getTemplateById('patient-intake');

// View encrypted fields
const encryptedFields = patientIntake.fieldConfigs.filter(
  field => field.encryption?.enabled
);
console.log(encryptedFields.map(f => f.label));
// ['Social Security Number', 'Date of Birth', 'Insurance Policy Number', ...]
```

### Employee Onboarding Form (`employee-onboarding`)

- **Category**: HR & Recruitment
- **Encrypted Fields**: SSN, Date of Birth, Bank Routing Number, Bank Account Number
- **Compliance**: GDPR, CCPA, PCI-DSS, SOC2

## Customizing Templates

### Clone and Modify

```typescript
import { getTemplateById, textField } from '@netpad/templates';

const baseTemplate = getTemplateById('patient-intake');

// Clone and customize
const customTemplate = {
  ...baseTemplate,
  id: 'my-patient-intake',
  name: 'Custom Patient Intake',
  fieldConfigs: [
    ...baseTemplate.fieldConfigs,
    // Add custom fields
    textField('referralSource', 'Referral Source'),
  ],
};
```

### Add Encryption to Existing Fields

```typescript
import { getTemplateById } from '@netpad/templates';

const template = getTemplateById('contact-form');

// Add encryption to specific fields
const secureTemplate = {
  ...template,
  fieldConfigs: template.fieldConfigs.map(field => {
    if (field.path === 'email') {
      return {
        ...field,
        encryption: {
          enabled: true,
          algorithm: 'Indexed',
          queryType: 'equality',
          sensitivityLevel: 'confidential',
          compliance: ['GDPR'],
        },
      };
    }
    return field;
  }),
};
```

### Create from Scratch

```typescript
import { createTemplate, textField, emailField } from '@netpad/templates/helpers';

const myTemplate = createTemplate({
  id: 'my-custom-form',
  name: 'My Custom Form',
  shortDescription: 'A custom form for my use case',
  fullDescription: 'Detailed description of the form purpose and usage.',
  category: 'business-sales',
  icon: 'ClipboardList',
  complexity: 'simple',
  estimatedTime: 5,
  tags: ['custom', 'example'],
  useCases: ['Example use case 1', 'Example use case 2'],
  features: ['Feature 1', 'Feature 2'],
  fieldConfigs: [
    textField('name', 'Full Name', { required: true }),
    emailField('email', 'Email', { required: true }),
  ],
});
```

## TypeScript Types

### Main Types

```typescript
type FormTemplateCategory =
  | 'healthcare-wellness'
  | 'hr-recruitment'
  | 'finance-accounting'
  | 'legal-compliance'
  | 'customer-service'
  | 'marketing-research'
  | 'education-training'
  | 'real-estate'
  | 'events-hospitality'
  | 'nonprofit-community'
  | 'technology-it'
  | 'sports-fitness'
  | 'travel-tourism'
  | 'government-public'
  | 'business-sales';

type TemplateComplexity = 'simple' | 'moderate' | 'advanced';

type EncryptionAlgorithm = 'Indexed' | 'Unindexed' | 'Range';

type EncryptedQueryType = 'none' | 'equality' | 'range';

type DataSensitivityLevel =
  | 'public'
  | 'internal'
  | 'confidential'
  | 'restricted'
  | 'secret';

type ComplianceFramework =
  | 'HIPAA'
  | 'PCI-DSS'
  | 'GDPR'
  | 'SOC2'
  | 'CCPA'
  | 'FERPA';
```

## KMS Provider Setup

To use encryption, you must configure a Key Management Service (KMS) provider.

### Option 1: Local KMS (Development Only)

:::warning
Local KMS is NOT secure for production. Use only for development/testing.
:::

```bash
# .env.local
QE_KMS_PROVIDER=local
QE_LOCAL_MASTER_KEY=<96-byte-base64-key>
QE_KEY_VAULT_DB=encryption
QE_KEY_VAULT_COLLECTION=__keyVault
```

Generate a local master key:

```bash
node -e "console.log(require('crypto').randomBytes(96).toString('base64'))"
```

### Option 2: AWS KMS (Recommended for Production)

```bash
# .env
QE_KMS_PROVIDER=aws
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_KMS_KEY_ARN=arn:aws:kms:us-east-1:123456789:key/12345678-1234-...
AWS_KMS_KEY_REGION=us-east-1
```

**AWS Setup Steps:**
1. Create a KMS key in AWS Console
2. Create an IAM user with `kms:Encrypt` and `kms:Decrypt` permissions
3. Copy the key ARN and credentials to environment variables

### Option 3: Azure Key Vault

```bash
# .env
QE_KMS_PROVIDER=azure
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_SECRET=<secret>
AZURE_KEY_VAULT_ENDPOINT=https://vault-name.vault.azure.net/
AZURE_KEY_NAME=netpad-master-key
```

### Option 4: Google Cloud KMS

```bash
# .env
QE_KMS_PROVIDER=gcp
GCP_SERVICE_ACCOUNT_EMAIL=<email>
GCP_PRIVATE_KEY=<private-key>
GCP_PROJECT_ID=my-project
GCP_LOCATION=global
GCP_KEY_RING=netpad-keys
GCP_KEY_NAME=master-key
```

### MongoDB Requirements

| Feature | MongoDB Version |
|---------|-----------------|
| Queryable Encryption | 7.0+ |
| Legacy CSFLE | 4.2+ |
| Range Queries | 7.0+ (preview) |

## Troubleshooting

### Common Issues

#### "Encryption key not found"

- Ensure KMS provider environment variables are set
- Verify the key vault collection exists in MongoDB
- Check that the Data Encryption Key (DEK) was created

#### "Cannot query encrypted field"

- Field may be using `Unindexed` algorithm (no queries allowed)
- Change to `Indexed` algorithm if queries are needed
- Ensure `queryType` matches your query needs

#### "MongoDB version not supported"

- Queryable Encryption requires MongoDB 7.0+
- For MongoDB 4.2-6.x, use legacy CSFLE mode
- Range queries require MongoDB 7.0+

### Debug Mode

Enable encryption debug logging:

```bash
DEBUG=netpad:encryption npm run dev
```

## Resources

- [MongoDB Queryable Encryption Documentation](https://www.mongodb.com/docs/manual/core/queryable-encryption/)
- [NetPad GitHub Repository](https://github.com/mongodb/netpad)
- [HIPAA Compliance Guide](https://www.hhs.gov/hipaa/index.html)
- [PCI-DSS Requirements](https://www.pcisecuritystandards.org/)

## Changelog

### v1.0.1

- Added encryption support to Patient Intake and Employee Onboarding templates
- Added encryption types: `FieldEncryptionConfig`, `EncryptionAlgorithm`, etc.
- Added compliance framework types

### v1.0.0

- Initial release with 100+ templates
- 15 template categories
- 33 field types
- TypeScript support

## Next Steps

- [Template Gallery](../forms/template-gallery.md) - Browse templates in the UI
- [Security & Encryption](../security/encryption.md) - Full encryption documentation
- [Forms Package](./packages-forms.md) - Render forms in React
- [Field Types](../forms/field-types.md) - All available field types
