---
sidebar_position: 2
---

# Template Gallery

Browse our complete library of form templates. Use the search and filters to find the perfect starting point for your form.

**Click any template** to view its fields and configuration. Copy the TypeScript or JSON config, or click **"Try on NetPad"** to use it directly.

<TemplateBrowser />

---

## Using a Template

Found a template you like? Here's how to get started:

1. **Click the template card** to expand and view details
2. **Review the fields** to ensure it fits your use case
3. **Copy the config** (TypeScript or JSON) for programmatic use, or
4. **Click "Try on NetPad"** to use it in the platform

For detailed instructions, see [Using Templates](./using-templates.md).

## Can't Find What You Need?

- **Customize an existing template** — Start with the closest match and modify it. See [Customizing Templates](./customizing.md).
- **Build from scratch** — Use the [Form Builder](../forms/form-builder.md) to create a custom form.
- **Use AI** — Describe your form in natural language and let [Conversational Forms](../ai/conversational-forms.md) generate it.

## Developer Access

For programmatic access to all templates, use the `@netpad/templates` package:

```typescript
import { getTemplateById, templates } from '@netpad/templates';

// Get a specific template
const contactForm = getTemplateById('contact-form');

// List all templates
console.log(`${templates.length} templates available`);
```

See [@netpad/templates Package](../developer/packages-templates.md) for full documentation.
