# Contributing

Thank you for contributing to NetPad! This guide will help you get started.

## Getting Started

1. **Fork Repository**: Fork on GitHub
2. **Clone**: Clone your fork
3. **Install**: `npm install`
4. **Develop**: Make changes
5. **Test**: Run tests
6. **Submit PR**: Create pull request

## Development Setup

```bash
# Clone repository
git clone https://github.com/yourusername/netpad-v3
cd netpad-v3

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local

# Run development server
npm run dev
```

## Code Style

- **TypeScript**: Strict mode
- **ESLint**: Follow ESLint rules
- **Prettier**: Auto-format code
- **Material-UI**: Preferred over Tailwind

## Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## Pull Request Process

1. **Create Branch**: `git checkout -b feature/my-feature`
2. **Make Changes**: Implement feature
3. **Write Tests**: Add tests
4. **Update Docs**: Update documentation
5. **Submit PR**: Create pull request
6. **Address Feedback**: Respond to reviews

## Next Steps

- [Architecture](./architecture.md) - Understand codebase
- [Testing](./testing.md) - Testing guide
- [Code Style](./code-style.md) - Coding standards
