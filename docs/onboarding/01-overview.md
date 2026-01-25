# NetPad Overview

## Build MongoDB Apps in Minutes, Not Months

---

## What We're Building

NetPad is a **MongoDB-native development platform** that lets teams build internal tools, data collection apps, and automated workflows without the typical 3-month dev cycle.

Think of it as **MongoDB Atlas + form builder + workflow automation** in one open-source package.

The core insight: most internal tools follow the same pattern—collect data, store it, route it, act on it. NetPad makes that loop fast.

---

## The Problem We Solve

Internal tooling at SMBs is stuck between two extremes:

| Option | Problem |
|--------|---------|
| **Enterprise SaaS** (Zendesk, ServiceNow) | Expensive per-seat pricing, lock-in, overkill for internal tools |
| **Custom Development** | 3+ months of dev time, ongoing maintenance burden |
| **No-code tools** (Typeform + Zapier + Airtable) | Integration tax, data fragmentation, not MongoDB-native |

**NetPad bridges this gap**: Build complete applications in 30 minutes with native MongoDB storage, visual workflow automation, and multiple deployment options.

---

## What Makes NetPad Different

### 1. "Build Once, Deploy Twice"

Create a form schema once, deploy it as **both**:
- **Traditional form UI**: Field-based with validation, conditional logic, multi-page
- **Conversational interface**: AI-powered chat that collects the same data naturally

Same data model, two user experiences. This is our key differentiator.

### 2. MongoDB-Native

Not another integration to maintain:
- Forms map directly to document schemas
- Workflows query and update collections natively
- No translation layer, no sync issues

### 3. True Ownership

- **Open source** (MIT license)
- **Export any app** as standalone Next.js project
- **No lock-in**—real escape hatches that developers trust

---

## Platform Capabilities

### Forms (30+ Field Types)

| Category | Examples |
|----------|----------|
| Text | Short text, long text, email, phone, URL |
| Selection | Dropdown, radio, checkbox, multi-select |
| Date/Time | Date picker, time, datetime |
| Interactive | Rating, slider, signature, file upload |
| Layout | Sections, dividers, headings |
| Advanced | Computed fields, conditional logic, validation |

### Workflows (25+ Node Types)

| Category | Examples |
|----------|----------|
| Triggers | Form submission, webhook, schedule, manual |
| Logic | Filter, switch, delay, loop, parallel |
| Data | MongoDB query, insert, update, delete, transform |
| Actions | Email, Slack, webhook, HTTP request, SMS |
| AI | LLM generate, classify, extract, summarize |

### Templates (100+)

Pre-built templates across 14 categories:
- Business & Sales
- Healthcare & Wellness
- HR & Recruitment
- Finance & Accounting
- Customer Service
- Education & Training
- Events & Registration
- And more...

---

## Current State

This is a **real product** with substantial functionality:

| Metric | Status |
|--------|--------|
| API Endpoints | 165+ |
| Form Field Types | 30+ |
| Workflow Node Types | 25+ |
| Templates | 100+ across 14 categories |
| Test Coverage | Backend 25/25 tests passing |

### What's Working

- ✅ Visual form builder (WYSIWYG)
- ✅ Conversational forms with AI
- ✅ Visual workflow editor (ReactFlow)
- ✅ MongoDB Atlas integration
- ✅ Template gallery
- ✅ Application export/import
- ✅ Marketplace infrastructure
- ✅ RAG support for knowledge-grounded conversations

### Current Focus

- 🔄 Cloud platform UX improvements
- 🔄 @netpad/templates NPM package (Feb 1 launch)
- 🔄 Testing infrastructure expansion
- 🔄 Documentation overhaul

---

## Target Users

### Primary: Internal Platform Teams at SMBs

**Company size**: 50-500 employees

**Priority verticals**: 
- **Finance** (expense reports, approvals, compliance)
- **Healthcare** (patient intake, medical history, appointments)

**Pain point**: "We need this internal tool but don't have 3 months of dev time"

**Success metric**: First working app in under 30 minutes

### Secondary: Developers Evaluating Build vs. Buy

Senior developers or tech leads who:
- Inspect architecture and code quality first
- Care about extensibility and escape hatches
- Compare against Retool, Appsmith, custom builds

---

## Deployment Modes

### 1. NetPad Cloud (Primary)

Fully managed SaaS at netpad.io
- Zero infrastructure management
- Team collaboration built-in
- Waitlist currently active

### 2. Self-Hosted (Secondary)

Deploy on your own infrastructure
- For compliance/data residency requirements
- Full feature parity with cloud

### 3. Standalone Export (Tertiary)

Export as standalone Next.js application
- True ownership—eject from NetPad if needed
- No lock-in guarantee

---

## The Opportunity

Michael is on sabbatical from MongoDB, building NetPad full-time. The platform is past "proof of concept"—architecture is solid, core features work, and there's a clear path to market.

**What's needed**: Collaborators who want to build something meaningful, not just ship tickets.

### What Collaboration Looks Like

- Ship real features that users will touch
- Have actual influence on product direction
- Work async with high autonomy
- Build something you're proud to show

### Tracks

| Track | Focus Areas |
|-------|-------------|
| **Product & Design** | UX flows, template curation, user research |
| **Full-Stack Engineering** | Features, infrastructure, DX improvements |
| **Integrations & Ecosystem** | MCP tools, third-party connectors, packages |

Time commitment is flexible. What matters is momentum, not hours logged.

---

## Competitive Positioning

### NetPad Is

- MongoDB-native development platform
- "MongoDB Atlas + form builder + workflow automation" in one
- Open source (MIT) with cloud option
- Optimized for internal tools at SMBs

### NetPad Is Not

- A Typeform competitor (we're developer-focused)
- A general-purpose database tool (MongoDB only)
- An enterprise-first platform (SMBs are primary)
- No-code only (developers can access code, configs, schemas)

### Competitive Advantages

| vs. Competitor | NetPad Advantage |
|----------------|------------------|
| **Retool/Appsmith** | MongoDB-native, conversational forms, open source |
| **Zendesk/Jira** | Self-hosted option, no per-seat pricing, schema ownership |
| **Custom dev** | 30 minutes vs. 3 months, templates, maintained platform |
| **Typeform + Zapier** | Single platform, no integration tax, native data model |

---

## Next Steps

1. **Explore the product**: [netpad.io/templates](https://www.netpad.io/templates)
2. **Read the architecture**: [02-architecture.md](./02-architecture.md)
3. **See current work**: [03-current-priorities.md](./03-current-priorities.md)
4. **Get set up**: [04-contribution-guide.md](./04-contribution-guide.md)

---

*Questions? Reach out to Michael directly.*
