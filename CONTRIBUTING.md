# Contributing to NetPad

Thank you for your interest in contributing to NetPad! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)
- Git

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/netpad-v3.git
   cd netpad-v3
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

   Configure the required variables:
   - `MONGODB_URI` - Your MongoDB connection string
   - `SESSION_SECRET` - Generate with `openssl rand -hex 32`
   - `VAULT_ENCRYPTION_KEY` - Generate with `openssl rand -base64 32`

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open** http://localhost:3000

## Development Workflow

### Branch Naming

Use descriptive branch names:
- `feature/add-new-field-type` - For new features
- `fix/form-validation-bug` - For bug fixes
- `docs/update-api-docs` - For documentation
- `refactor/improve-performance` - For refactoring

### Making Changes

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the code style guidelines

3. Write or update tests as needed

4. Run the test suite:
   ```bash
   npm test
   ```

5. Run the linter:
   ```bash
   npm run lint
   ```

6. Build to check for TypeScript errors:
   ```bash
   npm run build
   ```

### Commit Messages

Follow conventional commit format:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add date range picker field type

- Added DateRangePicker component
- Integrated with form builder
- Added validation for date ranges
```

## Pull Requests

### Before Submitting

- [ ] Code follows the project style guidelines
- [ ] Tests pass locally (`npm test`)
- [ ] Lint checks pass (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow conventional format

### PR Description

Include in your PR description:
- **Summary** of changes
- **Motivation** for the change
- **Testing** done
- **Screenshots** (for UI changes)

### Review Process

1. Submit your PR against the `main` branch
2. Wait for CI checks to pass
3. Request review from maintainers
4. Address any feedback
5. Once approved, your PR will be merged

## Code Style

### TypeScript

- Use TypeScript for all new code
- Define interfaces for component props
- Avoid `any` types where possible
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use MUI components consistently

### File Organization

```
src/
  app/           # Next.js app router pages
  components/    # React components
  contexts/      # React contexts
  hooks/         # Custom hooks
  lib/           # Utility functions and core logic
  types/         # TypeScript type definitions
```

### Naming Conventions

- **Components**: PascalCase (`FormBuilder.tsx`)
- **Hooks**: camelCase with `use` prefix (`useFormData.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types**: PascalCase (`FormField.ts`)
- **API Routes**: kebab-case (`/api/form-submissions`)

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Place tests next to the code they test
- Use descriptive test names
- Test both success and error cases
- Mock external dependencies

## Documentation

### Code Documentation

- Add JSDoc comments to exported functions
- Document complex logic with inline comments
- Keep README and docs up to date

### API Documentation

When adding new API endpoints:
1. Update `docs/API.md` with endpoint documentation
2. Include request/response examples
3. Document error cases

## Reporting Issues

### Bug Reports

Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/environment info
- Screenshots (if applicable)

### Feature Requests

Include:
- Clear description of the feature
- Use case / motivation
- Any relevant examples

## Security

If you discover a security vulnerability:
1. **Do not** open a public issue
2. Email security@netpad.io with details
3. We'll respond within 48 hours

## Community

- Be respectful and inclusive
- Help others when you can
- Ask questions if you're unsure
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to NetPad!
