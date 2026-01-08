# Code Generation

Generate production-ready code for your forms in multiple languages and frameworks. Export forms as reusable components.

## Supported Frameworks

Generate code for popular frontend and backend frameworks, including React, Vue, Angular, Next.js, Python Flask/FastAPI/Django, Node.js Express, and more.

## Frontend Frameworks

### React
- React with hooks
- Functional components
- State management included

### React Hook Form
- Form validation
- Zod schema integration
- Error handling

### Vue.js
- Vue 3 Composition API
- Reactive forms
- Validation included

### Angular
- Reactive forms
- TypeScript
- Angular Material compatible

### Next.js
- App Router compatible
- Server actions
- API routes

### Svelte
- Svelte stores
- Form actions
- Validation

### SolidJS
- Reactive primitives
- Signal-based forms
- Validation

### Remix
- Form component
- Actions
- Loaders

### Plain HTML/JavaScript
- Vanilla JS
- No dependencies
- Universal compatibility

## Backend Frameworks

### Python

#### Flask
```python
from flask import Flask, request, jsonify
from pymongo import MongoClient

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.json
    # Validation and database insert
```

#### FastAPI
```python
from fastapi import FastAPI
from pydantic import BaseModel

class FormData(BaseModel):
    name: str
    email: str
    # Generated from form fields
```

#### Django
- Django forms
- Model forms
- REST framework serializers

### Node.js

#### Express
```javascript
app.post('/submit', async (req, res) => {
  const data = req.body;
  // Validation and database insert
});
```

### PHP
- Native PHP
- Laravel compatible
- Form handling

### Ruby on Rails
- Strong parameters
- Model validation
- Active Record

### Go (Gin)
- Gin framework
- Struct binding
- Validation tags

### Java (Spring Boot)
- Spring MVC
- Bean validation
- JPA entities

## Schema Generation

Generate validation schemas to ensure type safety:

### Zod
```typescript
const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18),
});
```

### Yup
```javascript
const formSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().min(18),
});
```

### TypeScript Types
```typescript
interface FormData {
  name: string;
  email: string;
  age: number;
  address?: {
    street: string;
    city: string;
  };
}
```

## Using Generated Code

### Copy to Clipboard
Copy code for immediate use:
1. Select framework
2. Click **Copy**
3. Paste into your project

### Download as File
Download as a file:
1. Select framework
2. Click **Download**
3. Save to your project

### What's Included
Generated code includes:
- All form field configurations
- Conditional logic
- Validation rules
- Form submission handling

## Code Configuration

### Include Options
Select what to include:
- **Form Component** - UI component
- **Validation Schema** - Zod/Yup schema
- **TypeScript Types** - Type definitions
- **API Handler** - Backend endpoint
- **Styles** - CSS/Tailwind styles

### Customization
Configure generated code:
- Component naming
- File structure
- Import paths
- Styling approach

## Example: React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Submit to API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      {errors.name && <span>{errors.name.message}</span>}

      <input {...register('email')} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea {...register('message')} placeholder="Message" />
      {errors.message && <span>{errors.message.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

:::tip
Generated code follows best practices for each framework. Customize the generated code to match your project's coding standards and add additional features as needed.
:::

## Best Practices

1. **Review generated code** - Understand before using
2. **Customize styling** - Match your design system
3. **Add error handling** - Enhance error messages
4. **Secure endpoints** - Add authentication/authorization
5. **Test thoroughly** - Verify all functionality

## Use Cases

- **Rapid prototyping** - Quick form implementations
- **Consistency** - Same form across platforms
- **Learning** - See framework patterns
- **Documentation** - Reference implementations
- **Integration** - Embed in existing apps

## Next Steps

- [Form Builder](./form-builder.md) - Create forms visually
- [Form Publishing](./publishing.md) - Publish forms directly
- [Field Configuration](./field-configuration.md) - Configure fields
