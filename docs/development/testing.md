# Testing

Guide to testing NetPad applications.

## Test Framework

NetPad uses the following testing tools:

- **Jest**: Unit and integration tests
- **React Testing Library**: Component tests
- **Playwright**: End-to-end tests

## Running Tests

```bash
# Run all tests
npm test

# Run in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## Unit Tests

Test individual functions and utilities:

```typescript
// lib/utils.test.ts
import { formatDate, validateEmail } from './utils';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date)).toBe('Jan 15, 2024');
  });
});

describe('validateEmail', () => {
  it('validates correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  it('rejects invalid email', () => {
    expect(validateEmail('invalid')).toBe(false);
  });
});
```

## Component Tests

Test React components:

```typescript
// components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with label', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## API Tests

Test API endpoints:

```typescript
// api/forms.test.ts
import { createMocks } from 'node-mocks-http';
import handler from './forms';

describe('/api/forms', () => {
  it('returns forms list', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});
```

## E2E Tests

Test complete user flows:

```typescript
// e2e/form-builder.spec.ts
import { test, expect } from '@playwright/test';

test('create new form', async ({ page }) => {
  await page.goto('/forms');
  await page.click('text=New Form');
  await page.fill('[name="title"]', 'Test Form');
  await page.click('text=Save');
  await expect(page.locator('.success')).toBeVisible();
});
```

## Test Coverage

Maintain minimum coverage thresholds:

```json
{
  "coverageThreshold": {
    "global": {
      "branches": 70,
      "functions": 70,
      "lines": 70,
      "statements": 70
    }
  }
}
```

## Related

- [Contributing](./contributing.md)
- [Architecture](./architecture.md)
- [Code Style](./code-style.md)
