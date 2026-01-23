# Current Priorities

This is a living document that tracks what we're actively working on and where help is most valuable.

**Last Updated:** January 2026

---

## Tier 1: Active Sprint Work

These are the highest priority items we're actively working on.

### NPM Package Launch: `@netpad/templates`

**Status:** In Progress
**Target:** February 2026
**Track:** Engineering

Launching the templates package with 100+ production-ready form templates.

**What's needed:**
- Template validation and testing
- Documentation for each template category
- TypeScript type improvements
- Package publishing workflow

### Cloud Platform UX

**Status:** In Progress
**Track:** Product & Design

Improving the user experience for first-time users on netpad.io.

**What's needed:**
- Onboarding flow improvements
- Dashboard UX refinements
- Form builder polish
- Error message improvements

### Testing Infrastructure

**Status:** In Progress
**Track:** Engineering

Building out comprehensive testing coverage.

**What's needed:**
- Unit test coverage for core libraries
- Integration tests for API endpoints
- E2E tests for critical user flows
- Test documentation

---

## Tier 2: Strategic Work

Important work that's coming up next.

### Extensions System

**Status:** Planning
**Track:** Engineering

Enabling third-party extensions for custom workflow nodes, field types, and integrations.

**What's needed:**
- Extension API design
- Plugin architecture
- Extension marketplace infrastructure
- Developer documentation

### MCP Server Enhancements

**Status:** Ongoing
**Track:** Integrations

Improving the `@netpad/mcp-server` for better AI assistant integration.

**What's needed:**
- Additional tools for common operations
- Better error handling and feedback
- Claude Desktop integration testing
- Cursor IDE integration testing

### Self-Hosted Documentation

**Status:** Planned
**Track:** Documentation

Comprehensive guides for self-hosted deployments.

**What's needed:**
- Docker Compose configurations
- Kubernetes deployment guides
- Environment variable reference
- Troubleshooting guides

---

## Good First Issues

These are well-scoped issues good for getting started:

| Issue | Area | Complexity |
|-------|------|------------|
| Add unit tests for form validation | Testing | Low |
| Improve error messages in workflow editor | UX | Low |
| Document keyboard shortcuts | Docs | Low |
| Add loading states to data browser | UI | Medium |
| Implement form field search | Feature | Medium |

Check [GitHub Issues](https://github.com/mongodb/netpad/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) for the latest list.

---

## What's NOT a Priority Right Now

To save time, here's what we're explicitly **not** focusing on:

- **Mobile app** - Web-first for now
- **i18n/localization** - English only initially
- **Real-time collaboration** - Single-user editing for now
- **Custom theming system** - Using MUI defaults
- **Payment integrations** - Billing comes later

This may change, but for now these are parked.

---

## Where Help is Most Valuable

### Engineering Track

1. **Testing** - We need more test coverage across the board
2. **Performance** - Profiling and optimization opportunities
3. **TypeScript** - Improving type safety and reducing `any` usage
4. **Documentation** - Code comments and architectural docs

### Product & Design Track

1. **UX Research** - User feedback and usability testing
2. **Template Curation** - Reviewing and improving templates
3. **Error Messages** - Making errors actionable
4. **Onboarding** - First-time user experience

### Integrations Track

1. **MCP Tools** - New tools for the MCP server
2. **Workflow Nodes** - New node types for common integrations
3. **Third-Party Connectors** - Slack, Google Sheets, etc.
4. **Developer Experience** - CLI improvements

---

## How to Pick Up Work

1. **Check this page** for current priorities
2. **Browse GitHub Issues** for specific tasks
3. **Comment on an issue** you want to work on
4. **Create a draft PR** early to signal you're working on it
5. **Ask questions** in PR comments or discussions

No need for formal assignment. Just communicate what you're working on.

---

## Weekly Focus

We'll update this section with the current week's focus:

**This Week (January 20-26):**
- Template package final testing
- Documentation site updates
- In-app help system enhancements
- Extension system architecture design

---

## Next Steps

- [Getting Started](./getting-started.md) - Set up your environment
- [Contribution Guide](./contribution-guide.md) - Learn our PR process
- [Architecture Overview](./architecture-overview.md) - Understand the codebase
