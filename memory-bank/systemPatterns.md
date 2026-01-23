## System Patterns — NetPad Documentation Site

### High-level Architecture

- **Docusaurus 3.7.0** as the documentation framework
- **React 19** for UI components
- **Material-UI (MUI) 7** for custom components and styling
- **MDX** for documentation content (Markdown with JSX)
- **Local Search** via `@easyops-cn/docusaurus-search-local` plugin
- **GitHub Pages** for deployment (automated via GitHub Actions)
- **Custom Domain** docs.netpad.io via CNAME file

### Repository Structure

```
docs.netpad.io/
├── docs/                  # Documentation content (MDX/Markdown)
│   ├── getting-started/   # Introduction, installation, quick start
│   ├── forms/            # Form builder documentation
│   ├── workflows/        # Workflow documentation
│   ├── ai/               # AI & conversational forms
│   ├── platform/         # Platform features (apps, marketplace, etc.)
│   ├── api/              # API reference
│   ├── deployment/       # Deployment guides
│   ├── developer/        # Developer documentation
│   └── ...               # Other documentation sections
├── src/                  # Docusaurus source code
│   ├── components/       # Custom React components
│   │   ├── SpotlightCard/      # Feature highlighting cards
│   │   ├── WorkflowEmbed/      # Workflow visualizations
│   │   ├── NetPadMongoControlPlane/  # MongoDB control plane viz
│   │   ├── DocImage/           # Enhanced image component
│   │   ├── HomepageFeatures/  # Homepage feature showcase
│   │   ├── CopyPageButton/     # Copy page URL
│   │   └── Chatbot/            # AI chatbot (in development)
│   ├── pages/            # Custom pages (homepage, etc.)
│   ├── css/              # Custom CSS styles
│   └── theme/             # Theme customizations
│       ├── MDXComponents.js  # MDX component mapping
│       └── DocItem/          # Custom doc item components
├── static/               # Static assets (images, etc.)
├── blog/                 # Blog posts
├── sidebars.js           # Sidebar navigation configuration
├── docusaurus.config.js  # Docusaurus configuration
├── package.json          # Dependencies and scripts
├── vercel.json           # Vercel deployment config (alternative)
└── memory-bank/          # Memory bank for project context
```

### Core Modules and Responsibilities

**Documentation Content:**
- `docs/` — All documentation content in MDX/Markdown format
- Organized by feature area (forms, workflows, platform, etc.)
- Sidebar navigation configured in `sidebars.js`

**Custom Components:**
- `src/components/SpotlightCard/` — Feature highlighting cards with spotlight effect
- `src/components/WorkflowEmbed/` — Embedded workflow visualizations
- `src/components/NetPadMongoControlPlane/` — MongoDB control plane visualization
- `src/components/DocImage/` — Enhanced image component with styling
- `src/components/HomepageFeatures/` — Homepage feature showcase
- `src/components/CopyPageButton/` — Copy page URL functionality
- `src/components/Chatbot/` — AI chatbot integration (in development)

**Theme Customization:**
- `src/theme/MDXComponents.js` — Maps custom components for use in MDX
- `src/theme/DocItem/` — Custom doc item components
- `src/css/custom.css` — Custom CSS styles

**Configuration:**
- `docusaurus.config.js` — Main Docusaurus configuration (theme, plugins, etc.)
- `sidebars.js` — Sidebar navigation structure
- `vercel.json` — Vercel deployment configuration (alternative to GitHub Pages)

### Critical Architecture Rules

| Rule | Description | Why |
|------|-------------|-----|
| Memory bank sync | Keep documentation memory bank synchronized with application engineering project | Ensures documentation reflects current platform state |
| Custom components | Register custom components in `src/theme/MDXComponents.js` | Enables use of custom components in MDX documentation |
| Documentation structure | Follow established sidebar structure in `sidebars.js` | Maintains consistent navigation and organization |
| MDX format | Use MDX for documentation content (Markdown + JSX) | Enables rich content with React components |
| Static assets | Place images in `static/img/` directory | Proper asset management for Docusaurus |
| Deployment | Use GitHub Actions for automated deployment | Ensures consistent, automated deployments |

### Documentation Patterns

- **MDX Components** — Custom React components used within MDX documentation
- **Sidebar Navigation** — Hierarchical structure defined in `sidebars.js`
- **Search Integration** — Local search via `@easyops-cn/docusaurus-search-local`
- **Theme Customization** — Custom theme components in `src/theme/`
- **Static Site Generation** — Docusaurus generates static HTML at build time

### Cross-cutting Patterns

**Documentation Organization:**
- Content organized by feature area in `docs/` directory
- Sidebar navigation reflects documentation structure
- Each major feature has overview + detailed guides

**Custom Component Usage:**
- Components registered in `MDXComponents.js` for MDX use
- Components enhance documentation with visualizations and interactivity
- Consistent styling via Material-UI and custom CSS

**Deployment:**
- Automated via GitHub Actions on push to `main`
- Builds static site and deploys to GitHub Pages
- Custom domain configured via CNAME file

**Memory Bank Synchronization:**
- Memory bank tracks application engineering project state
- Documentation updated to reflect platform capabilities
- Source of truth relationship maintained
