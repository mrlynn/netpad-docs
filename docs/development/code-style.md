# Code Style

Coding standards and conventions for NetPad development.

## TypeScript

Use TypeScript strict mode:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### Type Definitions

Always define explicit types:

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): Promise<User> {
  // ...
}

// Avoid
function getUser(id: any): any {
  // ...
}
```

## React Components

### Functional Components

Use functional components with hooks:

```typescript
// Good
const MyComponent: React.FC<Props> = ({ title, onClick }) => {
  const [state, setState] = useState<string>('');

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

// Avoid class components
```

### Component Organization

```typescript
// 1. Imports
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

// 2. Types
interface Props {
  title: string;
}

// 3. Component
export const MyComponent: React.FC<Props> = ({ title }) => {
  // 4. Hooks
  const [state, setState] = useState('');

  // 5. Effects
  useEffect(() => {
    // ...
  }, []);

  // 6. Handlers
  const handleClick = () => {
    // ...
  };

  // 7. Render
  return <div>{title}</div>;
};
```

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `FormBuilder` |
| Functions | camelCase | `handleSubmit` |
| Constants | UPPER_SNAKE | `MAX_FILE_SIZE` |
| Types/Interfaces | PascalCase | `UserProfile` |
| Files (components) | PascalCase | `FormBuilder.tsx` |
| Files (utilities) | camelCase | `formatDate.ts` |

## ESLint Rules

Key ESLint rules enforced:

```javascript
{
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Prettier Config

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

## Import Order

Organize imports in this order:

```typescript
// 1. React/Next.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// 2. External packages
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

// 3. Internal modules
import { useAuth } from '@/hooks/useAuth';
import { formatDate } from '@/lib/utils';

// 4. Types
import type { User } from '@/types';

// 5. Styles
import styles from './Component.module.css';
```

## Related

- [Contributing](./contributing.md)
- [Testing](./testing.md)
- [Architecture](./architecture.md)
