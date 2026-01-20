# QA Testing Overview

Quality Assurance is essential to ensuring NetPad delivers a reliable, bug-free experience for all users. This section provides structured guidelines, templates, and resources for testing NetPad's features systematically.

## What's Covered

This QA Testing section includes:

| Document | Purpose |
|----------|---------|
| **[QA Framework](./netpad-qa-framework.md)** | Comprehensive testing guidelines, test cases, and user journeys |
| **[Quick Reference](./netpad-qa-quick-reference.md)** | Printable quick reference card for testers |
| **[Bug Report Template](./netpad-bug-report-template.md)** | Standardized template for reporting bugs |
| **[Test Tracker](./netpad-test-tracker.csv)** | CSV file for tracking test execution and results |

## Testing Philosophy

NetPad QA follows five core principles:

1. **Test as a real user** — Follow the journey a customer would take
2. **Document everything** — Screenshots, screen recordings, exact steps
3. **Test edge cases** — Empty inputs, special characters, large files, slow connections
4. **Test across browsers** — Chrome, Firefox, Safari, Edge
5. **Test responsive design** — Desktop, tablet, mobile viewports

## NetPad's Core Pillars

Testing is organized around NetPad's four core pillars:

| Pillar | Components | Priority |
|--------|------------|----------|
| **Forms** | Form builder, 30+ field types, conditional logic, multi-page, theming | Critical |
| **Workflows** | Workflow editor, 25+ node types, triggers, execution engine | Critical |
| **Data Management** | Data browser, connections, import/export | High |
| **AI/Conversational** | Conversational forms, RAG, AI form generation | Medium |

## Testing Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| Production | https://app.netpad.io | Final verification only |
| Staging | https://staging.netpad.io | Primary testing environment |
| Development | https://dev.netpad.io | Early feature testing |
| Local | http://localhost:3000 | Developer testing |

## Quick Start

### Smoke Test (5 minutes)

A quick test to verify core functionality is working:

1. Login → Dashboard loads
2. Create form → Add 1 field → Save
3. Preview → Submit test data
4. View submissions → Data appears

### Pre-Release Checklist

Critical paths that must pass before any release:

- [ ] User can sign up and create organization
- [ ] User can create form with basic fields
- [ ] User can publish form
- [ ] End user can submit form
- [ ] Admin can view submissions
- [ ] Workflow triggers on form submission
- [ ] Email notifications send correctly

## Bug Severity Levels

| Severity | Definition | Response Time |
|----------|------------|---------------|
| **Critical** | System unusable, data loss, security issue | Immediate |
| **Major** | Feature broken, no workaround, blocks workflow | 24 hours |
| **Minor** | Feature impaired but workaround exists | Next sprint |
| **Trivial** | Cosmetic issue, typo, minor UI glitch | Backlog |

## Test Data Guidelines

- **Never use real customer data** for testing
- Use clearly fake data: "Test User", "test@example.com", "555-0100"
- Prefix test records with `[TEST]` for easy cleanup
- Clean up test data after completing test cycles

## Getting Started

1. **[QA Framework](./netpad-qa-framework.md)** — Start here for comprehensive test cases and user journeys
2. **[Quick Reference](./netpad-qa-quick-reference.md)** — Keep this handy while testing
3. **[Bug Report Template](./netpad-bug-report-template.md)** — Use this template when filing bugs

## Next Steps

Ready to start testing? Begin with the [QA Framework](./netpad-qa-framework.md) for detailed test cases covering all NetPad features.
