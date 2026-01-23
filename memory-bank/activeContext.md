## Active Context — NetPad Documentation Site (docs.netpad.io)

### Current Focus & Priorities

This is the Docusaurus-based documentation site for the NetPad platform (netpad.io). The documentation site is actively maintained and must stay synchronized with the platform engineering project's memory bank, which serves as the source of truth for platform capabilities, features, and architecture.

**Source of Truth**: `NETPAD_PLATFORM_CAPABILITIES_2026.md` contains the authoritative reference for all platform features.

**Tier 1: Documentation Site Maintenance (Now)**

| Initiative | Description | Status |
|------------|-------------|--------|
| Memory bank sync | Keep documentation memory bank synchronized with application engineering project | Active |
| Documentation coverage | Ensure all platform features are comprehensively documented | Active |
| Deployment modes documentation | New page documenting Cloud, Self-Hosted, and Standalone modes | ✅ Complete |
| Custom components | Maintain and enhance custom React components (SpotlightCard, WorkflowEmbed, etc.) | Active |
| Search functionality | Local search with @easyops-cn/docusaurus-search-local | Active |
| Deployment automation | GitHub Actions deployment to GitHub Pages | Active |

**Tier 2: Documentation Enhancements (Ongoing)**

| Initiative | Description | Status |
|------------|-------------|--------|
| Standalone export docs | Documented in deployment-modes.md with data architecture details | ✅ Complete |
| Community marketplace docs | Document marketplace features as they launch | Pending platform timeline |
| Self-hosted deployment | Enhanced with deployment modes cross-references | ✅ Enhanced |
| API reference completeness | Ensure all API endpoints are documented | Ongoing |
| Code examples | Add more code examples throughout documentation | Ongoing |

**Tier 3: Future Enhancements**

| Initiative | Description | Notes |
|------------|-------------|-------|
| Multi-language support | Add i18n support for documentation | Future consideration |
| Interactive tutorials | Add interactive step-by-step tutorials | Future enhancement |
| Video content | Add video tutorials for complex features | Future consideration |
| Chatbot integration | Complete Chatbot component integration | Component exists, needs completion |

### Recent Changes (January 2026)

- **Created `CLAUDE.md`** for Claude Code project context (auto-loaded each session)
- **Created `docs/deployment-modes.md`** - Comprehensive deployment modes documentation covering:
  - Cloud mode (netpad.io managed SaaS)
  - Self-Hosted mode (your infrastructure with Atlas Local)
  - Standalone mode (exported apps running independently)
  - Feature comparison matrix
  - Data architecture differences (transcript storage paths)
  - Environment variables reference
  - Migration guides
  - FAQ section
- **Added deployment modes to top-level navigation** in `sidebars.js`
- **Updated cross-references** in multiple existing docs:
  - `getting-started/introduction.md` - Added "Choose Your Deployment" section
  - `deployment/overview.md` - Clarified modes vs methods distinction
  - `deployment/self-hosted.md` - Added deployment modes tip
  - `ai/rag-knowledge-guided.md` - Referenced deployment modes for requirements
  - `ai/conversational-forms.md` - Added note about transcript storage differences
  - `platform/applications.md` - Added standalone export tip
  - `forms/code-generation.md` - Added standalone deployment use case
- Memory bank synchronized with `NETPAD_PLATFORM_CAPABILITIES_2026.md`

### Next Steps

1. Monitor for new platform features requiring documentation
2. Continue enhancing code examples throughout documentation
3. Update documentation based on user feedback
4. Keep CLAUDE.md current with project context changes
5. Consider interactive tutorials for complex features

### Open Questions

- Should we add multi-language support? (Currently English only)
- Should we add interactive tutorials? (Future enhancement consideration)
- What additional code examples would be most valuable?

### Key Documentation Areas

- **Complete:** Forms, Workflows, AI & Conversational, Platform, API Reference, Deployment Modes
- **Well Documented:** Developer packages, MCP server, Deployment guides, Security
- **Monitoring:** Keep aligned with platform feature releases

### Key Reference Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Claude Code context (auto-loaded) |
| `NETPAD_PLATFORM_CAPABILITIES_2026.md` | Platform source of truth |
| `docs/deployment-modes.md` | Deployment modes documentation |
| `sidebars.js` | Navigation structure |
