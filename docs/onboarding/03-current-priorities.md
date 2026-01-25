# Current Priorities

## What We're Working On Now

---

## Priority Tiers

We organize work into three tiers with distinct timelines:

| Tier | Focus | Timeframe |
|------|-------|-----------|
| **Tier 1** | Active sprint work | Now |
| **Tier 2** | Strategic foundation | Q1 2025 |
| **Tier 3** | Important but not urgent | Ongoing |

---

## Tier 1: Active Sprint Work

These are the initiatives we're actively working on right now.

### Cloud Platform UX

**Goal:** Improve navigation and reduce friction in the cloud platform.

**Problem:** Users get lost navigating the organizational hierarchy (Org → Project → Application → Form/Workflow). The current hierarchy-first approach creates friction.

**Solution:** Move to an application-centric navigation model where Applications are the primary "gravity well" and organizational structure is supporting metadata.

**Status:** Active design and implementation

**Help Needed:**
- UX research and feedback
- Frontend implementation
- User testing

---

### Conversational Forms Enhancement

**Goal:** Polish the "build once, deploy twice" experience.

**What it is:** Users can create a form schema once and deploy it as both:
1. Traditional field-based UI
2. AI-powered conversational interface

**Current Focus:**
- Progress tracker improvements (topic coverage display)
- Data extraction accuracy
- Conversation flow optimization

**Status:** Core functionality working, polishing UX

**Help Needed:**
- AI/ML improvements to extraction
- Frontend polish
- Testing across different form types

---

### Testing Infrastructure

**Goal:** Expand automated and manual QA coverage.

**Current State:**
- Backend: 25/25 tests passing
- E2E: 22 test cases, 7 user journeys
- Manual: Structured test frameworks in place

**Focus Areas:**
- Increase E2E coverage
- Add visual regression testing
- Improve test documentation

**Help Needed:**
- Test case development
- Playwright expertise
- QA process improvements

---

### Template Enhancement

**Goal:** Add rich metadata to templates for better discovery and SEO.

**What we're adding:**
- Marketing copy (headlines, descriptions, use cases)
- SEO metadata (keywords, schema markup)
- Developer documentation
- Sample data and examples

**Status:** In progress across 100+ templates

**Help Needed:**
- Content writing
- SEO optimization
- Template categorization review

---

## Tier 2: Strategic Foundation (Q1 2025)

### @netpad/templates NPM Package

**Target:** February 1, 2025 (announcement)

**Goal:** Extract template library into standalone NPM package for:
- Use by AI assistants (via MCP)
- External developer consumption
- Documentation site integration

**Status:** Extraction in progress

**What's Included:**
- 100+ form templates
- 11+ workflow templates
- TypeScript definitions
- Rich metadata

**Help Needed:**
- Package architecture review
- TypeScript definitions
- Documentation

---

### Documentation Overhaul

**Goal:** Developer-focused docs at docs.netpad.io

**Current State:** Documentation exists but needs improvement for developer audience.

**Focus Areas:**
- API reference
- SDK documentation
- Tutorial content
- Architecture guides

**Help Needed:**
- Technical writing
- Example creation
- Documentation structure

---

### MCP Tools Refinement

**Goal:** Improve AI-powered form/workflow generation.

**Current State:** MCP server works with Claude and Cursor.

**Focus Areas:**
- Tool reliability improvements
- Better error messages
- Expanded capabilities

**Help Needed:**
- MCP/AI integration experience
- Testing with different AI assistants
- Tool design feedback

---

## Tier 3: Important but Not Sprint Focus

### Standalone Export Documentation

**Status:** Feature exists and works, but documentation is insufficient.

**Why It Matters:** This is the "escape hatch" that gives developers confidence—they can export any NetPad app as a standalone Next.js application.

**Need:** Better documentation and examples.

---

### Community Marketplace

**Status:** Committed feature, timeline TBD.

**What it is:** User-submitted applications with approval workflow, "Official App" badges, third-party integrations.

**Current State:** Infrastructure exists, needs polish and launch plan.

---

### Self-Hosted Deployment

**Status:** Works, but no production enterprise customers yet.

**Why It Matters:** Important for compliance-heavy verticals (Finance, Healthcare).

**Need:** Documentation, deployment guides, customer feedback.

---

## Where Help Is Most Needed

### High Impact, Good Entry Points

| Area | Skills Needed | Complexity |
|------|--------------|------------|
| Template metadata | Content writing | Low |
| Test case development | Testing, Playwright | Low-Medium |
| Documentation | Technical writing | Low-Medium |
| Frontend polish | React, MUI | Medium |
| UX research | User research | Medium |

### High Impact, Higher Complexity

| Area | Skills Needed | Complexity |
|------|--------------|------------|
| Conversational forms | AI/ML, React | High |
| MCP tools | AI integration | Medium-High |
| Workflow execution | Node.js, async | High |
| Performance optimization | Profiling, MongoDB | High |

---

## How to Pick Something

### If You're New to the Codebase

1. Start with template metadata or documentation
2. Write test cases (forces you to understand features)
3. Review and provide feedback on UX

### If You're an Experienced Engineer

1. Look at the Tier 1 initiatives
2. Pick an area matching your skills
3. Propose an approach before diving deep

### If You're Product/Design Focused

1. Explore the live product thoroughly
2. Focus on UX research and feedback
3. Help with template curation and content

---

## Current Blockers

| Blocker | Impact | Status |
|---------|--------|--------|
| Navigation UX design | Affects all users | In progress |
| Conversational form progress tracker | User confusion | Known bug, investigating |
| MCP form generation parsing | AI tool reliability | Identified, needs fix |

---

## Upcoming Milestones

| Date | Milestone | Preparation Needed |
|------|-----------|-------------------|
| **Feb 1, 2025** | @netpad/templates announcement | Package ready, waitlist active |
| **Feb 2025** | Documentation site launch | Content complete, reviewed |
| **Q1 2025** | First paying customers | Pricing finalized, onboarding ready |

---

## Questions to Consider

As you're ramping up, think about:

1. **What interests you most?** Forms, workflows, AI, infrastructure?
2. **What's your time availability?** This helps scope contributions.
3. **What do you want to learn?** We can match work to growth areas.
4. **What confuses you?** Fresh eyes find friction we've become blind to.

---

## Next Steps

1. Read [04-contribution-guide.md](./04-contribution-guide.md) to get set up
2. Explore the product at [netpad.io](https://www.netpad.io)
3. Pick an area from this document
4. Reach out to discuss your interests

---

*Priorities shift—this document is updated regularly.*
