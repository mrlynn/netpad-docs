# Getting Started

This guide walks you through setting up your local development environment and making your first contribution to NetPad.

## Prerequisites

Before you begin, ensure you have:

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | 18+ | LTS recommended |
| npm | 9+ | Comes with Node.js |
| Git | Latest | For version control |
| MongoDB Atlas Account | Free tier works | For database access |
| Code Editor | VS Code recommended | With TypeScript support |

### Optional but Recommended

- **Docker** - For running MongoDB locally or Atlas Local (for RAG features)
- **MongoDB Compass** - Visual database management

---

## Clone and Install

### 1. Fork the Repository

Fork [github.com/mongodb/netpad](https://github.com/mongodb/netpad) to your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/netpad.git
cd netpad
```

### 3. Install Dependencies

```bash
npm install
```

This installs all dependencies for the monorepo including the main app and packages.

---

## Environment Setup

### 1. Create Environment File

```bash
cp .env.example .env.local
```

### 2. Configure Required Variables

Edit `.env.local` with your values:

```bash
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/netpad

# Authentication (NextAuth)
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers (optional for local dev)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# AI Features (optional)
OPENAI_API_KEY=your-openai-api-key

# Deployment Mode
NETPAD_DEPLOYMENT_MODE=self-hosted
```

### 3. Database Options

**Option A: Use MongoDB Atlas (Recommended)**

1. Create a free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a database user
3. Whitelist your IP address
4. Copy the connection string to `MONGODB_URI`

**Option B: Run MongoDB Locally with Docker**

```bash
docker run -d -p 27017:27017 --name mongodb mongo:7
```

Then set:
```bash
MONGODB_URI=mongodb://localhost:27017/netpad
```

**Option C: Atlas Local (for RAG features)**

```bash
docker run -d -p 27017:27017 mongodb/mongodb-atlas-local
```

This gives you Vector Search support locally.

---

## Running Locally

### Start the Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Other Useful Commands

```bash
# Run tests
npm run test

# Run linter
npm run lint

# Build for production
npm run build

# Type checking
npm run type-check
```

---

## Project Structure

```
netpad/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── lib/                 # Core libraries and utilities
│   │   ├── forms/           # Form engine
│   │   ├── workflows/       # Workflow engine
│   │   ├── ai/              # AI/LLM integrations
│   │   └── platform/        # Platform services
│   └── types/               # TypeScript type definitions
├── packages/
│   ├── forms/               # @netpad/forms package
│   ├── workflows/           # @netpad/workflows package
│   ├── templates/           # @netpad/templates package
│   ├── cli/                 # @netpad/cli package
│   └── mcp-server/          # @netpad/mcp-server package
├── public/                  # Static assets
└── docs/                    # Documentation site (you're here!)
```

---

## First Contribution Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Use prefixes:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring

### 2. Make Your Changes

Write your code, following the patterns in [Contribution Guide](./contribution-guide.md).

### 3. Test Your Changes

```bash
# Run the test suite
npm run test

# Check for type errors
npm run type-check

# Ensure linting passes
npm run lint
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub with:
- Clear description of changes
- Screenshots if UI changes
- Link to related issues

---

## Getting Help

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and ideas
- **Pull Request Comments** - Code-specific discussions

### Useful Resources

- [Architecture Overview](./architecture-overview.md) - Understand the system design
- [Current Priorities](./current-priorities.md) - See where help is needed
- [FAQ](./faq.md) - Common questions answered

---

## Next Steps

Once you're set up:

1. **Explore the codebase** - Get familiar with the structure
2. **Check current priorities** - See [Current Priorities](./current-priorities.md) for active work
3. **Find a good first issue** - Look for issues labeled `good-first-issue`
4. **Read the contribution guide** - Understand our [PR process](./contribution-guide.md)

Welcome aboard!
