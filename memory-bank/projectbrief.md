## Project Brief — NetPad Documentation Site (docs.netpad.io)

### Overview

This project is the official documentation site for **NetPad**, a MongoDB-native data management platform. The documentation site is built with Docusaurus 3.7.0 and deployed to docs.netpad.io. It provides comprehensive documentation for the NetPad platform, including user guides, API references, developer documentation, and deployment guides.

**Primary goal:** Provide clear, comprehensive, and up-to-date documentation for the NetPad platform, enabling users and developers to effectively use and extend the platform.

**Relationship to NetPad Application:** This documentation site documents the NetPad application (netpad.io). The application's memory bank serves as the source of truth for platform capabilities, features, and architecture. This documentation project must stay synchronized with the application's state.

### Documentation Site Components

1. **Docusaurus Site** — Built with Docusaurus 3.7.0, React 19, Material-UI 7
2. **Documentation Structure** — Organized into major sections:
   - Getting Started (introduction, installation, quick start, configuration, FAQ)
   - Forms (builder, templates, field types, validation, conditional logic, etc.)
   - Analytics & Responses (response management, export, field analytics)
   - Data Explorer (browsing, importing, exporting, ERD viewer)
   - Workflows (creating, node types, execution, templates, embedding)
   - Integrations (webhooks, email notifications)
   - AI & Conversational (overview, conversational forms, RAG, templates, agents, configuration)
   - Platform (organizations, applications, marketplace, projects, authentication, connection vault, access control, billing, pricing)
   - API Reference (overview, authentication, forms, submissions, webhooks, workflows, vercel integration, marketplace)
   - Security (overview, encryption, access control, best practices)
   - Deployment (overview, Vercel, self-hosted, Docker)
   - Developer (packages, MCP server, architecture, contributing, testing, code style)
   - QA Testing (framework, quick reference, bug report template)
   - Guides (keyboard shortcuts, brand standards, adding images)
   - Legal (privacy policy, terms of service)
3. **Custom Components** — React components for enhanced documentation:
   - `SpotlightCard` — Feature highlighting cards
   - `WorkflowEmbed` — Embedded workflow visualizations
   - `NetPadMongoControlPlane` — MongoDB control plane visualization
   - `DocImage` — Enhanced image component with styling
   - `HomepageFeatures` — Homepage feature showcase
   - `CopyPageButton` — Copy page URL functionality
   - `Chatbot` — AI chatbot integration (in development)
4. **Deployment** — Automated deployment via GitHub Actions to GitHub Pages with custom domain (docs.netpad.io)

### Documentation Site Deployment

1. **GitHub Pages (PRIMARY)** — Automated deployment via GitHub Actions
   - Deploys on every push to `main` branch
   - Custom domain: docs.netpad.io (via CNAME file)
   - Build command: `npm run build`
   - Output directory: `build/`
   - Node.js 20+ required for builds

2. **Vercel (ALTERNATIVE)** — Configured via `vercel.json`
   - Framework: docusaurus-2
   - Can be used as alternative deployment target
   - Currently configured but GitHub Pages is primary

### Documentation Coverage Status

**Comprehensive Coverage:**
- ✅ Forms (all aspects documented)
- ✅ Workflows (creation, execution, embedding)
- ✅ AI & Conversational Forms (complete coverage)
- ✅ Platform features (organizations, applications, marketplace, projects)
- ✅ API Reference (all endpoints documented)
- ✅ Developer packages and MCP server
- ✅ Deployment guides (Vercel, self-hosted, Docker)
- ✅ Security and access control

**Areas Needing Enhancement:**
- ⚠️ Standalone export documentation (feature exists in platform, needs better docs)
- ⚠️ Community marketplace timeline (committed feature, timeline TBD)
- ⚠️ Self-hosted deployment details (theoretical customers, important for positioning)

### Target Documentation Users

**Primary Persona:** NetPad Platform Users
- Internal platform teams at SMBs using NetPad Cloud
- Developers building with NetPad packages
- Teams deploying self-hosted NetPad instances
- Need clear, comprehensive guides for platform features

**Secondary Persona:** Developers Extending NetPad
- Developers using `@netpad/*` packages
- Contributors to NetPad open source project
- Developers building custom integrations
- Need API references, architecture docs, and developer guides

**Documentation Goals:**
- Clear, step-by-step guides for all platform features
- Comprehensive API reference for programmatic access
- Developer documentation for extending and contributing
- Deployment guides for all deployment modes

### Scope

**In Scope:**
- Complete documentation for all NetPad platform features
- User guides for forms, workflows, data explorer, analytics
- API reference documentation
- Developer documentation (packages, MCP server, architecture)
- Deployment guides (Vercel, self-hosted, Docker)
- Security and best practices documentation
- QA testing framework documentation
- Legal documentation (privacy policy, terms of service)
- Custom React components for enhanced documentation experience
- Search functionality (local search via @easyops-cn/docusaurus-search-local)
- Blog for announcements and updates

**Out of Scope (for current focus):**
- Platform application code (documented, not implemented here)
- Platform infrastructure management
- Marketing content (focused on technical documentation)
- Multi-language support (English only currently)

### Key Documentation Site Features

- **Comprehensive Coverage** — Documents all NetPad platform features comprehensively
- **Developer-Focused** — Extensive API references and developer guides
- **Custom Components** — Enhanced documentation experience with custom React components
- **Search Functionality** — Local search with highlighting and keyboard shortcuts
- **Dark Theme** — Default dark mode with light mode support
- **Material-UI Integration** — Consistent design system using MUI components
- **Automated Deployment** — CI/CD via GitHub Actions
- **Source of Truth Sync** — Memory bank tracks application state to keep docs current
