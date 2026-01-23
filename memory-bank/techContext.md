## Tech Context — NetPad Documentation Site

### Core Technologies

| Layer | Technology | Notes |
|-------|------------|-------|
| Documentation Framework | Docusaurus 3.7.0 | Required |
| UI Library | React 19 | Required |
| Component Library | Material-UI (MUI) 7 | For custom components |
| Content Format | MDX | Markdown with JSX support |
| Search | @easyops-cn/docusaurus-search-local | Local search plugin |
| Deployment | GitHub Pages | Automated via GitHub Actions |
| Node Version | Node.js 18+ | Required for builds |
| Build Tool | Docusaurus CLI | Built-in build system |

### Project Conventions

**Directory structure:**
- `docs/` for documentation content (MDX/Markdown)
- `src/components/` for custom React components
- `src/pages/` for custom pages (homepage, etc.)
- `src/css/` for custom CSS styles
- `src/theme/` for theme customizations
- `static/` for static assets (images, etc.)
- `blog/` for blog posts
- `memory-bank/` for project context and state

**Documentation format:**
- Use MDX (Markdown + JSX) for documentation content
- Register custom components in `src/theme/MDXComponents.js`
- Follow sidebar structure in `sidebars.js`

**Styling:**
- Material-UI components for custom components
- Custom CSS in `src/css/custom.css`
- Dark theme by default (configurable in `docusaurus.config.js`)

**Language preferences:**
- Documentation content: Markdown/MDX
- Custom components: JavaScript (JSX)
- Configuration files: JavaScript (docusaurus.config.js, sidebars.js)

### Dependencies

**Core:**
- `@docusaurus/core` (3.7.0)
- `@docusaurus/preset-classic` (3.7.0)
- `react` (19.0.0)
- `react-dom` (19.0.0)
- `@mdx-js/react` (3.0.0)

**UI Components:**
- `@mui/material` (7.0.2)
- `@mui/icons-material` (7.0.2)
- `@emotion/react` (11.14.0)
- `@emotion/styled` (11.14.0)

**Search:**
- `@easyops-cn/docusaurus-search-local` (0.52.2)

**Utilities:**
- `clsx` (2.0.0)
- `prism-react-renderer` (2.3.0)

### Constraints

- **Must** use Docusaurus 3.7.0+ for documentation framework
- **Must** register custom components in `src/theme/MDXComponents.js`
- **Must** follow sidebar structure in `sidebars.js`
- **Must** keep memory bank synchronized with application engineering project
- **Must** use MDX format for documentation content
- **Must not** modify Docusaurus core files directly (use swizzle if needed)
- **Must not** break existing documentation structure without updating sidebars

### Environment Variables

- No environment variables required for documentation site
- All configuration in `docusaurus.config.js`
- GitHub Actions uses default Node.js environment

### Development Setup

- Node.js 18+ required
- Install dependencies: `npm install`
- Start dev server: `npm run start` (runs on http://localhost:3000)
- Build for production: `npm run build`
- Serve production build: `npm run serve`
- Clear cache: `npm run clear`

### Deployment Setup

- Automated via GitHub Actions (`.github/workflows/deploy.yml`)
- Deploys on push to `main` branch
- Builds static site and deploys to GitHub Pages
- Custom domain: docs.netpad.io (via CNAME file)
- Alternative: Vercel deployment configured via `vercel.json`
