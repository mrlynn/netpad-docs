# Architecture

Overview of NetPad's technical architecture.

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **UI Framework**: Material-UI (MUI)
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **State Management**: React Context + Hooks

## Project Structure

```
netpad-v3/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── (auth)/       # Auth pages
│   │   └── (dashboard)/  # Dashboard pages
│   ├── components/       # React components
│   │   ├── common/       # Shared components
│   │   ├── forms/        # Form builder components
│   │   ├── workflows/    # Workflow components
│   │   └── data/         # Data explorer components
│   ├── lib/              # Utility libraries
│   ├── hooks/            # Custom React hooks
│   ├── contexts/         # React contexts
│   └── types/            # TypeScript types
├── public/               # Static assets
└── docs/                 # Documentation
```

## Key Components

### Form Builder

The form builder uses a modular field system:

```typescript
interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  validation?: ValidationRule[];
  conditionalLogic?: ConditionalRule[];
}
```

### Workflow Engine

Workflows use a node-based execution system:

```typescript
interface WorkflowNode {
  id: string;
  type: NodeType;
  inputs: Connection[];
  outputs: Connection[];
  config: NodeConfig;
}
```

### Data Layer

MongoDB connections are managed through a vault system:

```typescript
interface Connection {
  id: string;
  name: string;
  uri: string; // Encrypted
  organizationId: string;
}
```

## API Design

RESTful API design principles:

- Resource-based URLs
- Standard HTTP methods
- JSON request/response
- Consistent error handling

## Security

- Environment-based secrets
- Encrypted connection strings
- Role-based access control
- Input validation

## Related

- [Contributing](./contributing.md)
- [Testing](./testing.md)
- [Developer Architecture](../developer/architecture.md)
