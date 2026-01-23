# Claude Code Context - NetPad Documentation Site

This is the official documentation site for **NetPad** (docs.netpad.io), built with Docusaurus 3.7.0.

## Quick Reference

- **Site URL**: https://docs.netpad.io
- **Framework**: Docusaurus 3.7.0 + React 19 + Material-UI 7
- **Deployment**: GitHub Pages via GitHub Actions (push to `main`)
- **Build**: `npm run build` | **Dev**: `npm run start`

## What is NetPad?

NetPad is a MongoDB-native platform for building data collection applications with:
- **Forms** - Visual builder with 30+ field types, conversational AI forms
- **Workflows** - Automation with 25+ node types
- **AI Features** - RAG-powered conversational forms, 15+ AI agents
- **Platform** - Organizations, applications, marketplace, projects

## Key Reference Documents

| Document | Purpose |
|----------|---------|
| `NETPAD_PLATFORM_CAPABILITIES_2026.md` | **Source of truth** for all NetPad platform features, architecture, and implementation status |
| `memory-bank/activeContext.md` | Current documentation priorities and focus |
| `memory-bank/progress.md` | What's been completed and what's in progress |
| `memory-bank/projectbrief.md` | Project scope and goals |

**When documenting new features**, always check `NETPAD_PLATFORM_CAPABILITIES_2026.md` first for accurate technical details.

## Three Deployment Modes

NetPad supports three deployment modes (recently documented in `docs/deployment-modes.md`):

| Mode | Description | Data Location |
|------|-------------|---------------|
| **Cloud** | Managed SaaS at netpad.io | NetPad infrastructure |
| **Self-Hosted** | Full platform on your infrastructure | Your MongoDB Atlas |
| **Standalone** | Exported apps running independently | User's own MongoDB |

Key differences documented in the deployment modes page include data architecture (transcript storage paths differ between modes).

## Documentation Structure

```
docs/
├── getting-started/     # Introduction, installation, quickstart
├── forms/               # Form builder, field types, validation
├── workflows/           # Workflow creation, node types, execution
├── ai/                  # Conversational forms, RAG, agents
├── platform/            # Organizations, apps, marketplace, projects
├── api/                 # API reference (165+ endpoints)
├── deployment/          # Vercel, self-hosted, Docker guides
├── deployment-modes.md  # Cloud vs Self-Hosted vs Standalone
├── developer/           # Packages, MCP server, architecture
└── security/            # Encryption, access control
```

## Custom Components

Register in `src/theme/MDXComponents.js` for MDX use:
- `DocImage` - Enhanced images with captions
- `SpotlightCard` - Feature highlight cards
- `WorkflowEmbed` - Workflow visualizations
- `NetPadMongoControlPlane` - MongoDB control plane viz

## Common Tasks

### Add new documentation page
1. Create `.md` file in appropriate `docs/` subdirectory
2. Add to `sidebars.js` in the correct section
3. Run `npm run build` to verify

### Update existing page
1. Edit the `.md` file directly
2. Build verifies link validity

### Add images
1. Place in `static/img/docs/[section]/`
2. Reference as `/img/docs/[section]/filename.png`
3. Use `<DocImage>` component for enhanced display

## Important Conventions

- **MDX format** for all documentation
- **Dark theme** is default
- **Sidebar structure** defined in `sidebars.js`
- **Memory bank sync** - Keep memory-bank files updated when making significant changes
- **Cross-references** - Link related docs (especially deployment modes page)

## Recent Work (January 2026)

- Created comprehensive **Deployment Modes** documentation (`docs/deployment-modes.md`)
- Added deployment modes to top-level navigation
- Updated cross-references in: introduction, self-hosted, RAG, conversational forms, applications, code-generation

## When Working on Documentation

1. Check `NETPAD_PLATFORM_CAPABILITIES_2026.md` for feature accuracy
2. Follow existing patterns in similar docs
3. Update `memory-bank/progress.md` after significant work
4. Run `npm run build` to verify no broken links
5. Keep cross-references consistent (especially deployment modes)
