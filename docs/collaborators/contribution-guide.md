# Contribution Guide

This guide covers our code standards, PR process, and how we work together.

## Code Style & Conventions

### TypeScript

We use TypeScript throughout the codebase. Key conventions:

```typescript
// ✅ Good: Explicit types for function parameters and returns
function processForm(form: FormDefinition): ProcessedForm {
  // ...
}

// ❌ Avoid: Using `any`
function processForm(form: any): any {
  // ...
}

// ✅ Good: Use interfaces for object shapes
interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required?: boolean;
}

// ✅ Good: Use enums or union types for known values
type FieldType = 'text' | 'number' | 'select' | 'date';
```

### React Components

```tsx
// ✅ Good: Functional components with TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button className={variant} onClick={onClick}>
      {label}
    </button>
  );
}

// ✅ Good: Use 'use client' directive for client components
'use client';

export function InteractiveComponent() {
  const [state, setState] = useState(false);
  // ...
}
```

### File Organization

```
// ✅ Good: One component per file, named after the component
src/components/FormBuilder/FieldPalette.tsx

// ✅ Good: Index files for clean imports
src/components/FormBuilder/index.ts
export { FormBuilder } from './FormBuilder';
export { FieldPalette } from './FieldPalette';

// ✅ Good: Colocate related files
src/components/FormBuilder/
├── FormBuilder.tsx
├── FormBuilder.test.tsx
├── FormBuilder.styles.ts
└── index.ts
```

### Styling

We use **Material-UI (MUI)** for components. Avoid Tailwind.

```tsx
// ✅ Good: MUI components and sx prop
import { Box, Button, Typography } from '@mui/material';

<Box sx={{ p: 2, display: 'flex', gap: 2 }}>
  <Typography variant="h6">Title</Typography>
  <Button variant="contained">Action</Button>
</Box>

// ❌ Avoid: Tailwind classes
<div className="p-2 flex gap-2">
```

---

## PR Expectations

### PR Size

Keep PRs focused and reviewable:

| Size | Lines Changed | Review Time |
|------|---------------|-------------|
| Small | < 100 | Same day |
| Medium | 100-300 | 1-2 days |
| Large | 300-500 | 2-3 days |
| Too Large | 500+ | Please split |

**Rule of thumb:** If a PR does multiple things, split it.

### PR Description

Every PR should include:

```markdown
## Summary
Brief description of what this PR does.

## Changes
- Added X
- Fixed Y
- Updated Z

## Testing
How you tested these changes:
- [ ] Unit tests pass
- [ ] Manual testing done
- [ ] Tested on Chrome/Firefox/Safari

## Screenshots
(If UI changes, include before/after screenshots)

## Related Issues
Fixes #123
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format
<type>(<scope>): <description>

# Examples
feat(forms): add date range field type
fix(workflows): resolve execution timeout issue
docs(api): update authentication examples
refactor(lib): simplify form validation logic
test(forms): add unit tests for conditional logic
chore(deps): update dependencies
```

Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `refactor` - Code refactoring (no behavior change)
- `test` - Adding or updating tests
- `chore` - Maintenance, dependencies

---

## Review Process

### What We Look For

1. **Correctness** - Does it work as intended?
2. **Code Quality** - Is it readable and maintainable?
3. **TypeScript** - Are types correct and helpful?
4. **Tests** - Are changes tested appropriately?
5. **Performance** - Any obvious performance issues?
6. **Security** - No security vulnerabilities introduced?

### Turnaround

- **Small PRs:** Same day or next day
- **Medium PRs:** 1-2 days
- **Large PRs:** 2-3 days

If you haven't heard back in 3 days, ping in the PR comments.

### Review Feedback

We use conventional comments:

```
// nitpick: Consider renaming for clarity
// suggestion: Could use a helper function here
// question: Why is this needed?
// issue: This will cause a bug when...
// praise: Nice refactor!
```

---

## Testing

### What Needs Tests

| Change Type | Testing Required |
|-------------|------------------|
| New feature | Unit tests + integration tests |
| Bug fix | Test that reproduces the bug |
| Refactoring | Existing tests should pass |
| UI component | Component tests (optional for now) |

### Running Tests

```bash
# Run all tests
npm run test

# Run specific test file
npm run test -- path/to/file.test.ts

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage
```

### Test Structure

```typescript
describe('FormValidator', () => {
  describe('validateField', () => {
    it('should return error for required empty field', () => {
      const field = { required: true, value: '' };
      const result = validateField(field);
      expect(result.valid).toBe(false);
      expect(result.error).toBe('This field is required');
    });

    it('should pass for valid email', () => {
      const field = { type: 'email', value: 'test@example.com' };
      const result = validateField(field);
      expect(result.valid).toBe(true);
    });
  });
});
```

---

## How Decisions Get Made

### Small Decisions

Make them yourself. If it's easily reversible and doesn't affect architecture, just do it.

### Medium Decisions

Discuss in PR comments or GitHub Discussions. Get one other person's input before proceeding.

### Large Decisions

For architectural changes or new features:

1. Open a GitHub Discussion with a proposal
2. Get feedback from multiple people
3. Document the decision
4. Implement

---

## Communication Norms

### Async-First

We work async. Expectations:

- **Response time:** Within 24-48 hours on weekdays
- **No real-time requirement:** No Slack or instant messaging
- **Written communication:** Discussions happen in GitHub

### Where Discussions Happen

| Topic | Location |
|-------|----------|
| Code questions | PR comments |
| Feature ideas | GitHub Discussions |
| Bug reports | GitHub Issues |
| Architecture decisions | GitHub Discussions |
| General questions | GitHub Discussions |

### When to Ask vs. When to Decide

**Ask when:**
- It affects other people's work
- It's not easily reversible
- You're genuinely unsure

**Decide when:**
- It's within your PR scope
- It's easily reversible
- You've done the research

---

## Getting Unstuck

If you're blocked:

1. **Check existing code** - Similar patterns probably exist
2. **Search GitHub Issues** - Someone may have faced this
3. **Read the docs** - Architecture overview might help
4. **Ask in your PR** - Create a draft PR and ask questions there
5. **Open a Discussion** - For broader questions

No question is too small. We'd rather you ask than spin.

---

## Next Steps

- [Getting Started](./getting-started.md) - Set up your environment
- [Current Priorities](./current-priorities.md) - See where help is needed
- [Architecture Overview](./architecture-overview.md) - Understand the codebase
