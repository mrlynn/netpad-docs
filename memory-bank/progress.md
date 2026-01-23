## Progress — NetPad Documentation Site (docs.netpad.io)

### Overall Status

The NetPad documentation site is actively maintained and comprehensively documents the NetPad platform. The site is built with Docusaurus 3.7.0, deployed to docs.netpad.io, and includes custom components for enhanced documentation experience. Memory bank synchronization with the application engineering project ensures documentation stays current.

**Source of Truth**: `NETPAD_PLATFORM_CAPABILITIES_2026.md` - Check this file for accurate platform feature details.

### Completed

**Documentation Site Infrastructure:**
- [x] Docusaurus 3.7.0 setup and configuration
- [x] Custom domain (docs.netpad.io) configured
- [x] Automated deployment via GitHub Actions
- [x] Local search functionality (@easyops-cn/docusaurus-search-local)
- [x] Dark theme as default with light mode support
- [x] Material-UI integration for custom components
- [x] Memory bank established and synchronized
- [x] **CLAUDE.md created** for Claude Code context (January 2026)

**Documentation Coverage:**
- [x] Getting Started (introduction, installation, quick start, configuration, FAQ)
- [x] Forms (comprehensive coverage: builder, templates, field types, validation, conditional logic, etc.)
- [x] Analytics & Responses (response management, export, field analytics)
- [x] Data Explorer (browsing, importing, exporting, ERD viewer)
- [x] Workflows (creating, node types, execution, templates, embedding)
- [x] Integrations (webhooks, email notifications)
- [x] AI & Conversational (overview, conversational forms, RAG, templates, agents, configuration)
- [x] Platform (organizations, applications, marketplace, projects, authentication, connection vault, access control, billing, pricing)
- [x] API Reference (overview, authentication, forms, submissions, webhooks, workflows, vercel integration, marketplace)
- [x] Security (overview, encryption, access control, best practices)
- [x] Deployment (overview, Vercel, self-hosted, Docker)
- [x] **Deployment Modes** (Cloud, Self-Hosted, Standalone comparison) - **NEW January 2026**
- [x] Developer (packages, MCP server, architecture, contributing, testing, code style)
- [x] QA Testing (framework, quick reference, bug report template)
- [x] Guides (in-app help, keyboard shortcuts, brand standards, adding images)
- [x] Legal (privacy policy, terms of service)

**Custom Components:**
- [x] SpotlightCard (feature highlighting cards)
- [x] WorkflowEmbed (workflow visualizations)
- [x] NetPadMongoControlPlane (MongoDB control plane visualization)
- [x] DocImage (enhanced image component)
- [x] HomepageFeatures (homepage feature showcase)
- [x] CopyPageButton (copy page URL functionality)
- [x] Chatbot component (exists, may need completion)

**January 2026 Collaborators Section:**
- [x] Created new `docs/collaborators/` section with 6 documents:
  - `index.md` - Overview with project vision, capabilities, and collaboration tracks
  - `getting-started.md` - Local dev setup, environment variables, first PR workflow
  - `architecture-overview.md` - System design, four pillars, key patterns, directory structure
  - `current-priorities.md` - Active sprint work, strategic work, good first issues
  - `contribution-guide.md` - Code style, PR expectations, review process, testing
  - `faq.md` - Common questions about collaboration, project, access, and process
- [x] Added Collaborators category to sidebar with link to index as landing page
- [x] Build verified successful

**January 2026 In-App Help System Documentation:**
- [x] Created new `docs/guides/in-app-help.md` with comprehensive help system documentation:
  - Keyboard shortcuts (`Cmd/Ctrl + /`, `F1`, `Cmd/Ctrl + Shift + ?`)
  - Global help button location
  - Context-sensitive help buttons and inline help icons
  - Context-aware intelligence (automatic detection, smart topic boosting)
  - Search capabilities (keyword search, relevance scoring, category filtering)
  - Help topics coverage (100+ topics across all features)
  - Context-sensitive help components (ContextHelpButton, InlineHelpIcon)
  - Tips for using help effectively
- [x] Updated `docs/guides/keyboard-shortcuts.md`:
  - Added Global Shortcuts section with help shortcuts
  - Added Help System Shortcuts section
  - Added tip box about context-aware help
  - Added link to in-app-help guide
- [x] Updated `docs/getting-started/introduction.md`:
  - Added "Getting Help" section explaining help system access
  - Added link to in-app-help guide in Next Steps
- [x] Added `guides/in-app-help` to sidebar navigation (first item in Guides)
- [x] Build verified successful

**January 2026 Marketplace Package Types & Publishing Guide:**
- [x] Updated `docs/platform/marketplace.md` with three distinct package types:
  - Applications (primary) - complete solution bundles with forms + workflows + connections
  - Forms - standalone form definitions
  - Workflows - standalone automation templates
- [x] Added package type filtering documentation
- [x] Emphasized Applications as the primary, featured package type
- [x] Created new `docs/platform/publishing-packages.md` with comprehensive publishing guide:
  - Package formats for all three types (Application, Form, Workflow)
  - `package.json` structure with `netpad` field for each type
  - `bundle.json`, `form.json`, and `workflow.json` structure documentation
  - Web UI publishing process (step-by-step)
  - npm publishing process with CLI commands
  - Package discovery and naming conventions
  - Review process and approval criteria
  - Best practices for each package type
- [x] Added publishing-packages to sidebar navigation
- [x] Updated npm package discovery keywords (`netpad-app`, `netpad-form`, `netpad-workflow`)
- [x] Build verified successful

**January 2026 Deployment Modes Work:**
- [x] Created `docs/deployment-modes.md` with comprehensive coverage:
  - Cloud mode (netpad.io) documentation
  - Self-Hosted mode documentation
  - Standalone mode (exported apps) documentation
  - Feature comparison matrix
  - Data architecture section (transcript storage paths)
  - Environment variables reference
  - Migration guides
  - Decision flowchart
  - FAQ section
- [x] Added "Deployment Modes" to top-level sidebar navigation
- [x] Updated cross-references in 7 existing docs:
  - `getting-started/introduction.md`
  - `deployment/overview.md`
  - `deployment/self-hosted.md`
  - `ai/rag-knowledge-guided.md`
  - `ai/conversational-forms.md`
  - `platform/applications.md`
  - `forms/code-generation.md`
- [x] Build verified successful

### In Progress

**Documentation Maintenance:**
- [ ] Memory bank synchronization (ongoing - keep synced with application engineering project)
- [ ] Documentation updates as platform features evolve
- [ ] Code examples enhancement throughout documentation
- [ ] Chatbot component completion (if needed)

### Not Started / Lower Priority

**Future Enhancements:**
- [ ] Multi-language support (i18n)
- [ ] Interactive step-by-step tutorials
- [ ] Video content for complex features
- [ ] Enhanced search features
- [ ] Documentation analytics and feedback collection

### Known Issues / Risks

- Memory bank must stay synchronized with application engineering project (critical for accuracy)
- Documentation may lag behind rapid platform feature development
- Community marketplace documentation pending platform timeline (committed feature)

### Documentation Quality

- **Coverage:** Comprehensive coverage of all major platform features including deployment modes
- **Structure:** Well-organized with clear navigation via sidebars
- **Custom Components:** Enhanced documentation experience with custom React components
- **Search:** Local search functionality with highlighting
- **Deployment:** Automated and reliable via GitHub Actions
- **Synchronization:** Memory bank tracks application state for accuracy
- **Cross-References:** Deployment modes integrated throughout relevant docs

### Documentation Sections Status

| Section | Status | Coverage |
|---------|--------|----------|
| Getting Started | ✅ Complete | Introduction, installation, quick start, configuration, FAQ |
| **Deployment Modes** | ✅ **NEW** | Cloud, Self-Hosted, Standalone comparison with data architecture |
| Forms | ✅ Complete | Comprehensive coverage of all form features |
| Workflows | ✅ Complete | Creation, execution, embedding, node types |
| AI & Conversational | ✅ Complete | Overview, conversational forms, RAG, agents, configuration |
| Platform | ✅ Complete | Organizations, applications, marketplace, projects, auth, etc. |
| API Reference | ✅ Complete | All endpoints documented |
| Deployment | ✅ Complete | Vercel, self-hosted, Docker guides |
| Developer | ✅ Complete | Packages, MCP server, architecture, contributing |
| Security | ✅ Complete | Overview, encryption, access control, best practices |
| **Collaborators** | ✅ **NEW** | Overview, getting started, architecture, priorities, contribution guide, FAQ |

### Key Files Reference

| File | Description |
|------|-------------|
| `CLAUDE.md` | Claude Code context - auto-loaded each session |
| `NETPAD_PLATFORM_CAPABILITIES_2026.md` | Platform source of truth |
| `docs/deployment-modes.md` | Deployment modes documentation |
| `sidebars.js` | Navigation structure |
| `memory-bank/*.md` | Project context files |
