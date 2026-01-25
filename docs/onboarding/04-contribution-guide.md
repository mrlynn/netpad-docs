# Contribution Guide

## Getting Started with NetPad Development

---

## Prerequisites

Before you begin, ensure you have:

| Requirement | Version | Notes |
|-------------|---------|-------|
| **Node.js** | 18+ | LTS recommended |
| **npm** | 9+ | Comes with Node.js |
| **Git** | 2.30+ | For version control |
| **MongoDB Atlas** | Account | Free tier works for development |
| **Code Editor** | VS Code recommended | With TypeScript support |

### Optional but Recommended

| Tool | Purpose |
|------|---------|
| **Ollama** | Local LLM for AI features (free) |
| **Docker** | For local services |
| **Postman/Insomnia** | API testing |

---

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/netpad-io/netpad.git
cd netpad
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB Atlas

1. Create a free account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier M0 is fine)
3. Create a database user with read/write permissions
4. Get your connection string

### 4. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Required
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net
MONGODB_DATABASE=netpad_dev

# Auth (generate a random string)
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=http://localhost:3000

# AI Provider (at least one recommended)
# Option 1: Ollama (local, free)
OLLAMA_BASE_URL=http://localhost:11434

# Option 2: OpenAI
OPENAI_API_KEY=sk-...

# Option 3: OpenRouter
OPENROUTER_API_KEY=sk-or-...
```

### 5. Set Up Ollama (Recommended)

Ollama lets you run AI features locally for free:

```bash
# Install Ollama (macOS)
brew install ollama

# Or download from ollama.ai

# Start Ollama
ollama serve

# Pull a model (in another terminal)
ollama pull llama3.2
```

### 6. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 7. Verify Everything Works

- [ ] Homepage loads
- [ ] Can create an account
- [ ] Can create a new form
- [ ] AI features work (if configured)

---

## Project Structure Overview

```
netpad/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes (165+)
│   │   ├── (dashboard)/    # Dashboard pages
│   │   └── (public)/       # Public pages
│   ├── components/         # React components
│   ├── lib/               # Core libraries
│   ├── hooks/             # Custom React hooks
│   └── types/             # TypeScript definitions
├── packages/              # NPM packages
├── docs/                  # Documentation
├── public/               # Static assets
└── tests/                # Test files
```

Key directories to know:

| Directory | What's There |
|-----------|--------------|
| `src/components/FormBuilder/` | Form builder UI |
| `src/components/WorkflowEditor/` | Workflow editor UI |
| `src/lib/ai/` | AI service layer |
| `src/lib/platform/` | Database operations |
| `src/app/api/` | All API endpoints |

---

## Code Standards

### TypeScript

- Strict mode enabled
- No `any` types (use `unknown` if needed)
- Export interfaces for public APIs
- Document complex types

```typescript
// ✅ Good
interface FormConfig {
  name: string;
  fields: FieldConfig[];
  settings?: FormSettings;
}

// ❌ Avoid
const form: any = { ... };
```

### React Components

- Functional components only
- Use hooks for state management
- Colocate related files

```typescript
// ✅ Good
export function FormField({ field, value, onChange }: FormFieldProps) {
  // ...
}

// ❌ Avoid
class FormField extends React.Component { ... }
```

### Styling

- **Use Material-UI (MUI)** - not Tailwind
- Use MUI's `sx` prop for component-specific styles
- Use theme tokens for consistency

```typescript
// ✅ Good
<Box sx={{ p: 2, bgcolor: 'background.paper' }}>

// ❌ Avoid
<div className="p-4 bg-white">
```

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `FormBuilder.tsx` |
| Hooks | camelCase with `use` prefix | `useFormState.ts` |
| Utilities | camelCase | `validation.ts` |
| Types | PascalCase | `FormTypes.ts` |

### Imports

```typescript
// Order: React, external, internal, types, styles
import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { FormField } from '@/components/FormBuilder';
import type { FieldConfig } from '@/types';
```

---

## Making Changes

### Branch Naming

```
feature/add-rating-field
fix/form-validation-error
docs/update-api-reference
refactor/extract-form-utils
```

### Commit Messages

Follow conventional commits:

```
feat: add rating field type
fix: resolve form validation on empty fields
docs: update API reference for submissions
refactor: extract validation utilities
test: add form builder integration tests
```

### Pull Request Process

1. **Create a branch** from `main`
2. **Make your changes** with clear commits
3. **Test locally** - ensure existing tests pass
4. **Open a PR** with:
   - Clear title describing the change
   - Description of what and why
   - Screenshots for UI changes
   - Link to related issue (if any)
5. **Address feedback** promptly
6. **Merge** after approval

### PR Template

```markdown
## What

Brief description of changes.

## Why

Motivation or problem being solved.

## How

Technical approach taken.

## Screenshots

(For UI changes)

## Testing

How you tested these changes.

## Checklist

- [ ] Tests pass locally
- [ ] No TypeScript errors
- [ ] Follows code standards
- [ ] Documentation updated (if needed)
```

---

## Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run specific test file
npm run test -- forms.test.ts

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

### Writing Tests

```typescript
// Example test
describe('FormBuilder', () => {
  it('should add a new field', async () => {
    // Arrange
    const form = createTestForm();
    
    // Act
    const result = await addField(form, newField);
    
    // Assert
    expect(result.fields).toHaveLength(form.fields.length + 1);
  });
});
```

### Test Coverage Goals

| Area | Current | Target |
|------|---------|--------|
| Backend | 80%+ | Maintain |
| Components | Growing | 70%+ |
| E2E | 22 cases | Expand |

---

## Common Tasks

### Adding a New Form Field Type

1. Add to `FieldType` union in `src/types/form.ts`
2. Create renderer component in `src/components/FormBuilder/Fields/`
3. Add to field palette in `FieldPalette.tsx`
4. Add validation logic if needed
5. Update MCP field type reference
6. Add tests
7. Update documentation

### Adding a New API Endpoint

1. Create route file in `src/app/api/`
2. Follow existing patterns for auth/validation
3. Add TypeScript types
4. Add tests
5. Document the endpoint

### Fixing a Bug

1. Reproduce the bug locally
2. Write a failing test (if possible)
3. Fix the issue
4. Verify test passes
5. Check for related issues
6. Submit PR with clear description

---

## Getting Help

### Documentation

- **Architecture**: [02-architecture.md](./02-architecture.md)
- **Priorities**: [03-current-priorities.md](./03-current-priorities.md)
- **External docs**: [docs.netpad.io](https://docs.netpad.io)

### Communication

- **Questions**: Open a GitHub discussion
- **Bugs**: Open a GitHub issue
- **Ideas**: Discuss before implementing large changes

### Common Issues

| Issue | Solution |
|-------|----------|
| Build error with MongoDB | Ensure you're not importing server code in client components |
| AI features not working | Check your LLM provider configuration |
| Auth errors | Verify NEXTAUTH_SECRET is set |
| Database connection fails | Check MongoDB Atlas IP allowlist |

---

## Development Tips

### VS Code Extensions

Recommended extensions:
- ESLint
- Prettier
- TypeScript Importer
- GitLens
- Thunder Client (API testing)

### Debugging

```typescript
// Use console.log strategically
console.log('[FormBuilder]', { fields, values });

// For API routes
console.log('[API /forms]', { method: req.method, body: req.body });
```

### Performance

- Use React DevTools to identify re-renders
- Check Network tab for API call efficiency
- Profile with Chrome DevTools for bottlenecks

---

## First Contribution Ideas

### Good First Issues

| Task | Difficulty | Skills |
|------|------------|--------|
| Fix typo in documentation | Easy | None |
| Add test case | Easy | Testing |
| Improve error message | Easy | TypeScript |
| Add field validation | Medium | TypeScript |
| UI polish task | Medium | React, MUI |

### How to Find Issues

1. Check GitHub Issues labeled `good-first-issue`
2. Look at [03-current-priorities.md](./03-current-priorities.md)
3. Ask what's needed

---

## Checklist Before Submitting

- [ ] Code follows project standards
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Tests pass (`npm run test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Tested locally
- [ ] PR description is clear
- [ ] Screenshots for UI changes

---

## Questions?

Don't hesitate to ask. No question is too basic. We'd rather help you succeed than have you struggle silently.

Welcome to NetPad! 🎉
