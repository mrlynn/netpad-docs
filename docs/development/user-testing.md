# NetPad QA Testing Framework

## Document Information

| Field | Value |
|-------|-------|
| Version | 1.0 |
| Last Updated | January 2026 |
| Owner | QA Team |
| Status | Active |

---

## Table of Contents

1. [Introduction](#introduction)
2. [Testing Environments](#testing-environments)
3. [Test Case Structure](#test-case-structure)
4. [Bug Reporting Guidelines](#bug-reporting-guidelines)
5. [User Journeys](#user-journeys)
6. [Field Type Testing Matrix](#field-type-testing-matrix)
7. [Workflow Node Testing Matrix](#workflow-node-testing-matrix)
8. [Testing Checklist Templates](#testing-checklist-templates)

---

## Introduction

### Purpose

This document provides the QA team with structured guidelines for testing NetPad's features. It ensures consistent, thorough testing across all platform capabilities.

### Scope

NetPad has four core pillars that require testing:

| Pillar | Components | Priority |
|--------|------------|----------|
| **Forms** | Form builder, 30+ field types, conditional logic, multi-page, theming | Critical |
| **Workflows** | Workflow editor, 25+ node types, triggers, execution engine | Critical |
| **Data Management** | Data browser, connections, import/export | High |
| **AI/Conversational** | Conversational forms, RAG, AI form generation | Medium |

### Testing Principles

1. **Test as a real user** — Follow the journey a customer would take
2. **Document everything** — Screenshots, screen recordings, exact steps
3. **Test edge cases** — Empty inputs, special characters, large files, slow connections
4. **Test across browsers** — Chrome, Firefox, Safari, Edge
5. **Test responsive design** — Desktop, tablet, mobile viewports

---

## Testing Environments

### Environment URLs

| Environment | URL | Purpose |
|-------------|-----|---------|
| Production | https://app.netpad.io | Final verification only |
| Staging | https://staging.netpad.io | Primary testing environment |
| Development | https://dev.netpad.io | Early feature testing |
| Local | http://localhost:3000 | Developer testing |

### Test Accounts

| Role | Email | Password | Use For |
|------|-------|----------|---------|
| Owner | owner@test.netpad.io | [See 1Password] | Full admin testing |
| Admin | admin@test.netpad.io | [See 1Password] | Admin feature testing |
| Member | member@test.netpad.io | [See 1Password] | Standard user testing |
| Viewer | viewer@test.netpad.io | [See 1Password] | Read-only testing |

### Test Data Guidelines

- **Never use real customer data** for testing
- Use clearly fake data: "Test User", "test@example.com", "555-0100"
- Prefix test records with `[TEST]` for easy cleanup
- Clean up test data after completing test cycles

---

## Test Case Structure

Every test case follows this standard format:

### Test Case Template

```
┌─────────────────────────────────────────────────────────────────┐
│ TEST CASE: [TC-XXX-000]                                         │
├─────────────────────────────────────────────────────────────────┤
│ Title:        [Descriptive name of what's being tested]         │
│ Module:       [Forms | Workflows | Data | AI | Auth | Other]    │
│ Priority:     [P0-Critical | P1-High | P2-Medium | P3-Low]      │
│ Estimated Time: [X minutes]                                     │
├─────────────────────────────────────────────────────────────────┤
│ PRECONDITIONS                                                   │
│ • [What must be true before starting]                           │
│ • [Required setup, data, or state]                              │
├─────────────────────────────────────────────────────────────────┤
│ TEST STEPS                                                      │
│                                                                 │
│ Step 1: [Action]                                                │
│   → Expected: [What should happen]                              │
│   → Actual: _______ [Fill during testing]                       │
│   → Status: ☐ Pass ☐ Fail ☐ Blocked                            │
│                                                                 │
│ Step 2: [Action]                                                │
│   → Expected: [What should happen]                              │
│   → Actual: _______                                             │
│   → Status: ☐ Pass ☐ Fail ☐ Blocked                            │
│                                                                 │
│ [Continue for all steps...]                                     │
├─────────────────────────────────────────────────────────────────┤
│ POSTCONDITIONS                                                  │
│ • [Expected state after test completes]                         │
│ • [Any cleanup required]                                        │
├─────────────────────────────────────────────────────────────────┤
│ TEST RESULT                                                     │
│ Overall Status: ☐ Pass ☐ Fail ☐ Blocked ☐ Skipped              │
│ Tester:         _______________________                         │
│ Date:           _______________________                         │
│ Environment:    _______________________                         │
│ Browser:        _______________________                         │
│ Notes:          _______________________                         │
│ Bug IDs:        _______________________                         │
└─────────────────────────────────────────────────────────────────┘
```

### Priority Definitions

| Priority | Definition | Examples |
|----------|------------|----------|
| **P0 - Critical** | Core functionality that blocks all users | Login, form submission, data saving |
| **P1 - High** | Important features used frequently | Form builder, workflow editor, publishing |
| **P2 - Medium** | Features used regularly but have workarounds | Theming, import/export, analytics |
| **P3 - Low** | Nice-to-have features, edge cases | Keyboard shortcuts, minor UI polish |

---

## Bug Reporting Guidelines

### Bug Report Template

When a test fails, create a bug report with this information:

```
┌─────────────────────────────────────────────────────────────────┐
│ BUG REPORT: [BUG-000]                                           │
├─────────────────────────────────────────────────────────────────┤
│ Title:        [Short, descriptive summary]                      │
│ Severity:     [Critical | Major | Minor | Trivial]              │
│ Module:       [Forms | Workflows | Data | AI | Auth | Other]    │
│ Found In:     [Test Case ID, e.g., TC-FRM-001]                  │
├─────────────────────────────────────────────────────────────────┤
│ ENVIRONMENT                                                     │
│ • URL: [exact URL where bug occurred]                           │
│ • Browser: [Chrome 120, Firefox 121, Safari 17, etc.]           │
│ • OS: [macOS 14.2, Windows 11, etc.]                            │
│ • Screen Size: [1920x1080, mobile, etc.]                        │
│ • Account: [which test account was used]                        │
├─────────────────────────────────────────────────────────────────┤
│ STEPS TO REPRODUCE                                              │
│ 1. [First step]                                                 │
│ 2. [Second step]                                                │
│ 3. [Continue until bug appears]                                 │
├─────────────────────────────────────────────────────────────────┤
│ EXPECTED RESULT                                                 │
│ [What should have happened]                                     │
├─────────────────────────────────────────────────────────────────┤
│ ACTUAL RESULT                                                   │
│ [What actually happened]                                        │
├─────────────────────────────────────────────────────────────────┤
│ ATTACHMENTS                                                     │
│ • Screenshot: [filename or link]                                │
│ • Screen Recording: [filename or link]                          │
│ • Console Errors: [paste any browser console errors]            │
│ • Network Errors: [paste any failed API calls]                  │
├─────────────────────────────────────────────────────────────────┤
│ ADDITIONAL CONTEXT                                              │
│ • Reproducibility: [Always | Sometimes | Rarely | Once]         │
│ • Workaround: [Is there a way to work around this?]             │
│ • Related Bugs: [Any similar bugs?]                             │
│ • Notes: [Any other relevant information]                       │
└─────────────────────────────────────────────────────────────────┘
```

### Severity Definitions

| Severity | Definition | Response Time |
|----------|------------|---------------|
| **Critical** | System unusable, data loss, security issue | Immediate |
| **Major** | Feature broken, no workaround, blocks workflow | 24 hours |
| **Minor** | Feature impaired but workaround exists | Next sprint |
| **Trivial** | Cosmetic issue, typo, minor UI glitch | Backlog |

### How to Capture Evidence

**Screenshots:**
- Use full-page screenshots when possible
- Highlight the problem area with a red box/arrow
- Include the URL bar in the screenshot
- Name files descriptively: `bug-form-validation-error-2026-01-20.png`

**Screen Recordings:**
- Record the full reproduction steps
- Keep under 2 minutes if possible
- Use tools: Loom, CleanShot X, or built-in OS recording
- Narrate what you're doing (optional but helpful)

**Console Errors:**
- Open DevTools (F12 or Cmd+Option+I)
- Go to Console tab
- Filter by Errors
- Copy the full error message including stack trace

**Network Errors:**
- Open DevTools → Network tab
- Reproduce the bug
- Look for red (failed) requests
- Right-click → Copy → Copy as cURL (for API issues)

---

## User Journeys

### Journey Map Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        NETPAD USER JOURNEY MAP                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│  │  Signup  │───▶│  Create  │───▶│  Build   │───▶│  Publish │          │
│  │  Login   │    │   Org    │    │   Form   │    │   Form   │          │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘          │
│       │                               │               │                 │
│       │                               ▼               ▼                 │
│       │                         ┌──────────┐    ┌──────────┐           │
│       │                         │  Build   │    │  View    │           │
│       │                         │ Workflow │    │   Data   │           │
│       │                         └──────────┘    └──────────┘           │
│       │                               │                                 │
│       ▼                               ▼                                 │
│  ┌──────────┐                   ┌──────────┐                           │
│  │  Invite  │                   │  Test    │                           │
│  │  Team    │                   │ Workflow │                           │
│  └──────────┘                   └──────────┘                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### UJ-001: New User Onboarding

**Journey Description:** A new user signs up, creates their first organization, and explores the dashboard.

**Personas:** First-time user, Developer, IT Manager

**Priority:** P0 - Critical

---

#### TC-ONB-001: Email Signup Flow

| Field | Value |
|-------|-------|
| Module | Authentication |
| Priority | P0 - Critical |
| Estimated Time | 5 minutes |

**Preconditions:**
- User has not signed up before
- User has access to email for verification

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to https://app.netpad.io | Landing page loads, "Get Started" button visible | ☐ |
| 2 | Click "Get Started" or "Sign Up" | Signup form appears with email, password fields | ☐ |
| 3 | Enter valid email: `testuser+[timestamp]@example.com` | Email field accepts input | ☐ |
| 4 | Enter password: `TestPass123!` | Password field shows dots, strength indicator shows "Strong" | ☐ |
| 5 | Click "Create Account" | Loading indicator appears, then redirects to verification page | ☐ |
| 6 | Check email inbox | Verification email received within 2 minutes | ☐ |
| 7 | Click verification link in email | Browser opens, shows "Email Verified" success message | ☐ |
| 8 | Observe redirect | Automatically redirected to onboarding or dashboard | ☐ |

**Edge Cases to Test:**
- [ ] Invalid email format (missing @, no domain)
- [ ] Weak password (less than 8 chars, no special chars)
- [ ] Already registered email
- [ ] Expired verification link (wait 24+ hours)
- [ ] Clicking verification link twice

---

#### TC-ONB-002: Organization Creation

| Field | Value |
|-------|-------|
| Module | Organizations |
| Priority | P0 - Critical |
| Estimated Time | 3 minutes |

**Preconditions:**
- User is logged in
- User has no existing organizations (new account)

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Observe onboarding flow | "Create Your Organization" step appears | ☐ |
| 2 | Enter organization name: `[TEST] My Company` | Name field accepts input | ☐ |
| 3 | Enter slug: `test-my-company` | Slug auto-generates from name or accepts custom input | ☐ |
| 4 | Select industry (optional) | Dropdown shows industry options | ☐ |
| 5 | Click "Create Organization" | Loading indicator, then success message | ☐ |
| 6 | Observe dashboard | Dashboard loads with organization name in header | ☐ |
| 7 | Check sidebar navigation | Projects, Forms, Workflows, Data sections visible | ☐ |

**Edge Cases to Test:**
- [ ] Organization name with special characters
- [ ] Duplicate organization slug
- [ ] Very long organization name (100+ characters)
- [ ] Empty organization name (validation)

---

#### TC-ONB-003: First Project Creation

| Field | Value |
|-------|-------|
| Module | Projects |
| Priority | P1 - High |
| Estimated Time | 2 minutes |

**Preconditions:**
- User is logged in
- Organization exists
- No projects exist yet

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Click "Projects" in sidebar | Projects list page loads (empty state) | ☐ |
| 2 | Click "Create Project" button | Project creation modal/form appears | ☐ |
| 3 | Enter project name: `[TEST] Development` | Name field accepts input | ☐ |
| 4 | Enter description: `Testing environment` | Description field accepts input | ☐ |
| 5 | Click "Create" | Project created, redirected to project view | ☐ |
| 6 | Verify project appears in sidebar | Project name visible in navigation | ☐ |

---

### UJ-002: Form Builder Journey

**Journey Description:** User creates a form from scratch using the visual form builder, adds various field types, configures validation and conditional logic, then previews and saves.

**Personas:** Developer, IT Manager, Business User

**Priority:** P0 - Critical

---

#### TC-FRM-001: Create New Form (Blank)

| Field | Value |
|-------|-------|
| Module | Forms |
| Priority | P0 - Critical |
| Estimated Time | 5 minutes |

**Preconditions:**
- User is logged in
- Organization and Project exist
- User is in a Project context

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Click "Forms" in sidebar | Forms list page loads | ☐ |
| 2 | Click "Create Form" button | Form creation options appear | ☐ |
| 3 | Select "Blank Form" option | Form builder opens with empty canvas | ☐ |
| 4 | Enter form name: `[TEST] Contact Form` | Name field in header accepts input | ☐ |
| 5 | Observe form builder UI | Left panel shows field types, center shows canvas, right shows properties | ☐ |
| 6 | Click "Save" | Form saved, success toast appears | ☐ |
| 7 | Refresh page | Form reloads with saved name | ☐ |

---

#### TC-FRM-002: Add Basic Field Types

| Field | Value |
|-------|-------|
| Module | Forms |
| Priority | P0 - Critical |
| Estimated Time | 10 minutes |

**Preconditions:**
- Blank form is open in form builder

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Drag "Short Text" field to canvas | Field appears on canvas with default label | ☐ |
| 2 | Click on the field | Properties panel shows field settings | ☐ |
| 3 | Change label to `Full Name` | Label updates on canvas in real-time | ☐ |
| 4 | Change path to `full_name` | Path field accepts valid input | ☐ |
| 5 | Toggle "Required" on | Required indicator (*) appears on field | ☐ |
| 6 | Add placeholder: `Enter your full name` | Placeholder shows in field preview | ☐ |
| 7 | Drag "Email" field to canvas | Email field appears below first field | ☐ |
| 8 | Configure email field (label: `Email Address`, path: `email`) | Field configured correctly | ☐ |
| 9 | Drag "Long Text" field to canvas | Long text (textarea) field appears | ☐ |
| 10 | Configure (label: `Message`, path: `message`) | Field configured correctly | ☐ |
| 11 | Click "Save" | All fields saved | ☐ |
| 12 | Click "Preview" | Preview modal shows form with all 3 fields | ☐ |

---

#### TC-FRM-003: Add Selection Field Types

| Field | Value |
|-------|-------|
| Module | Forms |
| Priority | P1 - High |
| Estimated Time | 10 minutes |

**Preconditions:**
- Form is open in form builder

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Drag "Dropdown" field to canvas | Dropdown field appears | ☐ |
| 2 | Set label: `Department` | Label updates | ☐ |
| 3 | Click "Add Option" | New option row appears | ☐ |
| 4 | Add options: `Sales`, `Engineering`, `Marketing`, `Support` | All options added and visible | ☐ |
| 5 | Preview form | Dropdown shows all 4 options | ☐ |
| 6 | Drag "Radio" field to canvas | Radio button group appears | ☐ |
| 7 | Set label: `Priority` | Label updates | ☐ |
| 8 | Add options: `Low`, `Medium`, `High`, `Critical` | Radio options visible | ☐ |
| 9 | Drag "Checkbox" field to canvas | Checkbox group appears | ☐ |
| 10 | Set label: `Interests` | Label updates | ☐ |
| 11 | Add options: `Product Updates`, `Newsletter`, `Events` | Checkbox options visible | ☐ |
| 12 | Set "Allow multiple" to true | Multiple selection enabled | ☐ |
| 13 | Save and Preview | All selection fields work correctly | ☐ |

---

#### TC-FRM-004: Configure Conditional Logic

| Field | Value |
|-------|-------|
| Module | Forms |
| Priority | P1 - High |
| Estimated Time | 15 minutes |

**Preconditions:**
- Form exists with a dropdown field (e.g., "Department")

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Add new Short Text field: `Manager Name` | Field added | ☐ |
| 2 | Click on "Manager Name" field | Properties panel opens | ☐ |
| 3 | Scroll to "Conditional Logic" section | Conditional logic options visible | ☐ |
| 4 | Toggle "Enable Conditional Logic" on | Condition builder appears | ☐ |
| 5 | Set action: `Show this field` | Action selected | ☐ |
| 6 | Set condition: `Department` `equals` `Engineering` | Condition configured | ☐ |
| 7 | Save form | Form saved | ☐ |
| 8 | Open Preview | Preview modal opens | ☐ |
| 9 | Verify "Manager Name" is hidden initially | Field not visible | ☐ |
| 10 | Select "Engineering" from Department dropdown | "Manager Name" field appears | ☐ |
| 11 | Select "Sales" from Department dropdown | "Manager Name" field hides | ☐ |
| 12 | Test with all department options | Field shows only for Engineering | ☐ |

**Edge Cases to Test:**
- [ ] Multiple conditions (AND logic)
- [ ] Multiple conditions (OR logic)
- [ ] Nested conditions (condition depends on conditional field)
- [ ] Condition on required field (validation behavior)

---

#### TC-FRM-005: Configure Field Validation

| Field | Value |
|-------|-------|
| Module | Forms |
| Priority | P1 - High |
| Estimated Time | 10 minutes |

**Preconditions:**
- Form is open in form builder with at least one text field

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Add Number field: `Age` | Number field added | ☐ |
| 2 | Open field properties | Properties panel shows | ☐ |
| 3 | Set minimum value: `18` | Minimum configured | ☐ |
| 4 | Set maximum value: `120` | Maximum configured | ☐ |
| 5 | Set custom error message: `Age must be between 18 and 120` | Message saved | ☐ |
| 6 | Add Short Text field: `Username` | Text field added | ☐ |
| 7 | Set minimum length: `3` | Min length configured | ☐ |
| 8 | Set maximum length: `20` | Max length configured | ☐ |
| 9 | Set pattern: `^[a-zA-Z0-9_]+$` | Regex pattern configured | ☐ |
| 10 | Save and Preview | Preview opens | ☐ |
| 11 | Enter age: `15`, try to submit | Validation error shows | ☐ |
| 12 | Enter age: `25`, try to submit | Validation passes | ☐ |
| 13 | Enter username: `ab`, try to submit | "Too short" error shows | ☐ |
| 14 | Enter username: `user@name`, try to submit | Pattern error shows | ☐ |
| 15 | Enter username: `valid_user`, try to submit | Validation passes | ☐ |

---

#### TC-FRM-006: Create Form from Template

| Field | Value |
|-------|-------|
| Module | Forms |
| Priority | P1 - High |
| Estimated Time | 5 minutes |

**Preconditions:**
- User is logged in with organization/project

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Forms → Create Form | Creation options appear | ☐ |
| 2 | Select "Use Template" | Template gallery opens | ☐ |
| 3 | Browse template categories | Categories visible: Business, Events, Feedback, etc. | ☐ |
| 4 | Click on "IT Support Request" template | Template preview shows | ☐ |
| 5 | Review template fields | All fields listed with descriptions | ☐ |
| 6 | Click "Use This Template" | Form builder opens with template fields | ☐ |
| 7 | Verify all fields loaded | 5+ fields from template present | ☐ |
| 8 | Verify conditional logic loaded | Template conditions working | ☐ |
| 9 | Customize form name: `[TEST] IT Support` | Name changed | ☐ |
| 10 | Save form | Form saved successfully | ☐ |

---

#### TC-FRM-007: Multi-Page Form Configuration

| Field | Value |
|-------|-------|
| Module | Forms |
| Priority | P2 - Medium |
| Estimated Time | 15 minutes |

**Preconditions:**
- Form with 6+ fields exists

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Open form in builder | Form builder loads | ☐ |
| 2 | Click "Form Settings" or gear icon | Settings panel opens | ☐ |
| 3 | Enable "Multi-Page Form" | Page configuration options appear | ☐ |
| 4 | Click "Add Page" | Second page created | ☐ |
| 5 | Set Page 1 title: `Personal Information` | Title saved | ☐ |
| 6 | Set Page 2 title: `Contact Details` | Title saved | ☐ |
| 7 | Drag fields to assign to pages | Fields organized by page | ☐ |
| 8 | Save and Preview | Multi-page preview opens | ☐ |
| 9 | Fill Page 1 fields | Fields accept input | ☐ |
| 10 | Click "Next" | Page 2 loads | ☐ |
| 11 | Click "Previous" | Page 1 loads with data preserved | ☐ |
| 12 | Complete all pages and submit | Submission successful | ☐ |

---

### UJ-003: Form Publishing & Submission

**Journey Description:** User publishes a form, shares it with end-users, and receives submissions.

**Personas:** Form Creator, End User (submitter)

**Priority:** P0 - Critical

---

#### TC-PUB-001: Publish Form

| Field | Value |
|-------|-------|
| Module | Forms / Publishing |
| Priority | P0 - Critical |
| Estimated Time | 5 minutes |

**Preconditions:**
- Form exists with at least 2 fields
- Form is saved

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Open form in builder | Form loads | ☐ |
| 2 | Click "Publish" button | Publishing modal/panel opens | ☐ |
| 3 | Review publishing options | Standalone URL, Embed Code visible | ☐ |
| 4 | Toggle "Published" to ON | Form status changes to published | ☐ |
| 5 | Copy standalone URL | URL copied to clipboard | ☐ |
| 6 | Open URL in new incognito window | Public form loads without login | ☐ |
| 7 | Verify form displays correctly | All fields visible and functional | ☐ |
| 8 | Verify branding/theme applied | Form matches configured theme | ☐ |

---

#### TC-PUB-002: Form Submission (End User)

| Field | Value |
|-------|-------|
| Module | Forms / Submission |
| Priority | P0 - Critical |
| Estimated Time | 5 minutes |

**Preconditions:**
- Form is published
- Testing in incognito/logged-out state

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to published form URL | Form loads | ☐ |
| 2 | Fill in required field: Name = `John Test` | Field accepts input | ☐ |
| 3 | Fill in required field: Email = `john@test.com` | Field accepts input | ☐ |
| 4 | Fill in optional fields | Fields accept input | ☐ |
| 5 | Click "Submit" button | Loading indicator appears | ☐ |
| 6 | Observe success state | Success message displays | ☐ |
| 7 | Verify redirect (if configured) | Redirects to thank you page or URL | ☐ |
| 8 | Try to submit again | Either allowed or "already submitted" based on config | ☐ |

**Edge Cases to Test:**
- [ ] Submit with missing required field
- [ ] Submit with invalid email format
- [ ] Submit with file upload (if applicable)
- [ ] Submit on slow connection (throttle network)
- [ ] Submit and immediately close browser (data loss?)

---

#### TC-PUB-003: View Submissions (Admin)

| Field | Value |
|-------|-------|
| Module | Data Management |
| Priority | P0 - Critical |
| Estimated Time | 5 minutes |

**Preconditions:**
- Form has at least 1 submission
- User is logged in as form owner/admin

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to form in dashboard | Form overview shows | ☐ |
| 2 | Click "Submissions" or "Data" tab | Submissions list loads | ☐ |
| 3 | Verify submission from TC-PUB-002 appears | Submission visible in list | ☐ |
| 4 | Click on submission row | Submission detail view opens | ☐ |
| 5 | Verify all submitted data shows | Name, email, all fields present | ☐ |
| 6 | Verify timestamp is correct | Submission time within expected range | ☐ |
| 7 | Test export to CSV | CSV downloads with correct data | ☐ |
| 8 | Test export to JSON | JSON downloads with correct structure | ☐ |

---

### UJ-004: Workflow Builder Journey

**Journey Description:** User creates an automated workflow triggered by form submission that sends notifications and saves data.

**Personas:** Developer, IT Manager

**Priority:** P0 - Critical

---

#### TC-WFL-001: Create Form-to-Email Workflow

| Field | Value |
|-------|-------|
| Module | Workflows |
| Priority | P0 - Critical |
| Estimated Time | 15 minutes |

**Preconditions:**
- Published form exists with submissions enabled
- User is logged in

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Workflows | Workflow list page loads | ☐ |
| 2 | Click "Create Workflow" | Workflow creation options appear | ☐ |
| 3 | Select "Blank Workflow" | Workflow editor opens with empty canvas | ☐ |
| 4 | Enter workflow name: `[TEST] Contact Form Notifications` | Name saved | ☐ |
| 5 | Drag "Form Trigger" node to canvas | Trigger node appears | ☐ |
| 6 | Click on trigger node | Properties panel opens | ☐ |
| 7 | Select form: `[TEST] Contact Form` | Form connected to trigger | ☐ |
| 8 | Drag "Send Email" node to canvas | Email node appears | ☐ |
| 9 | Connect trigger output to email input | Edge drawn between nodes | ☐ |
| 10 | Click on email node | Email properties panel opens | ☐ |
| 11 | Set "To": `admin@test.com` | Recipient configured | ☐ |
| 12 | Set "Subject": `New Contact: {{trigger.data.name}}` | Subject with template variable | ☐ |
| 13 | Set "Body": `Email: {{trigger.data.email}}\nMessage: {{trigger.data.message}}` | Body with template variables | ☐ |
| 14 | Click "Save" | Workflow saved | ☐ |
| 15 | Toggle "Active" to ON | Workflow activated | ☐ |

---

#### TC-WFL-002: Test Workflow Execution

| Field | Value |
|-------|-------|
| Module | Workflows |
| Priority | P0 - Critical |
| Estimated Time | 10 minutes |

**Preconditions:**
- Workflow from TC-WFL-001 is active
- Email service is configured

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Open published form in new window | Form loads | ☐ |
| 2 | Submit form with test data | Submission successful | ☐ |
| 3 | Return to workflow in dashboard | Workflow page loads | ☐ |
| 4 | Click "Execution History" or "Logs" | Execution log opens | ☐ |
| 5 | Verify new execution appears | Execution logged with timestamp | ☐ |
| 6 | Click on execution | Execution detail shows | ☐ |
| 7 | Verify trigger data captured | Form submission data visible | ☐ |
| 8 | Verify email node executed | Email node shows "Success" | ☐ |
| 9 | Check email inbox (admin@test.com) | Email received with correct data | ☐ |
| 10 | Verify template variables replaced | Subject and body show actual values, not `{{}}` | ☐ |

---

#### TC-WFL-003: Conditional Workflow Logic

| Field | Value |
|-------|-------|
| Module | Workflows |
| Priority | P1 - High |
| Estimated Time | 20 minutes |

**Preconditions:**
- Form exists with "Priority" field (Low/Medium/High/Critical options)

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Create new workflow | Workflow editor opens | ☐ |
| 2 | Add Form Trigger → connect to form | Trigger configured | ☐ |
| 3 | Drag "Condition" node to canvas | Condition node appears | ☐ |
| 4 | Connect trigger to condition | Edge created | ☐ |
| 5 | Configure condition: `trigger.data.priority` `equals` `Critical` | Condition set | ☐ |
| 6 | Add two "Send Email" nodes | Two email nodes on canvas | ☐ |
| 7 | Connect condition "True" output → first email (urgent@team.com) | Edge created | ☐ |
| 8 | Connect condition "False" output → second email (support@team.com) | Edge created | ☐ |
| 9 | Save and activate workflow | Workflow active | ☐ |
| 10 | Submit form with Priority = "Critical" | Submission successful | ☐ |
| 11 | Verify urgent@team.com received email | Email received | ☐ |
| 12 | Verify support@team.com did NOT receive email | No email | ☐ |
| 13 | Submit form with Priority = "Low" | Submission successful | ☐ |
| 14 | Verify support@team.com received email | Email received | ☐ |
| 15 | Verify urgent@team.com did NOT receive email | No email | ☐ |

---

### UJ-005: Data Management Journey

**Journey Description:** User connects a MongoDB database, browses data, and manages connections securely.

**Personas:** Developer, Database Admin

**Priority:** P1 - High

---

#### TC-DAT-001: Add MongoDB Connection

| Field | Value |
|-------|-------|
| Module | Data Management |
| Priority | P1 - High |
| Estimated Time | 10 minutes |

**Preconditions:**
- User has MongoDB Atlas connection string
- User is logged in as Admin or Owner

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Settings → Connection Vault | Connection vault page loads | ☐ |
| 2 | Click "Add Connection" | Connection form opens | ☐ |
| 3 | Enter connection name: `[TEST] Atlas Dev` | Name accepted | ☐ |
| 4 | Paste MongoDB connection string | String accepted (hidden/masked) | ☐ |
| 5 | Click "Test Connection" | Connection test runs | ☐ |
| 6 | Verify "Connection Successful" message | Success message appears | ☐ |
| 7 | Click "Save" | Connection saved | ☐ |
| 8 | Verify connection appears in list | Connection visible with status | ☐ |
| 9 | Verify connection string is masked | String shows as `mongodb+srv://***` | ☐ |

**Edge Cases to Test:**
- [ ] Invalid connection string format
- [ ] Valid format but wrong credentials
- [ ] Connection timeout (unreachable server)
- [ ] Connection with special characters in password

---

#### TC-DAT-002: Browse MongoDB Data

| Field | Value |
|-------|-------|
| Module | Data Management |
| Priority | P1 - High |
| Estimated Time | 10 minutes |

**Preconditions:**
- MongoDB connection is configured
- Database has at least one collection with data

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Data Browser | Data browser loads | ☐ |
| 2 | Select connection from dropdown | Databases list loads | ☐ |
| 3 | Expand database | Collections list appears | ☐ |
| 4 | Click on collection | Documents load in table view | ☐ |
| 5 | Verify document data displays | Fields and values visible | ☐ |
| 6 | Click on a document row | Document detail view opens | ☐ |
| 7 | Verify nested objects display | Nested data expandable/visible | ☐ |
| 8 | Use filter: `{"status": "active"}` | Filtered results show | ☐ |
| 9 | Use sort: `{"createdAt": -1}` | Results sorted descending | ☐ |
| 10 | Paginate through results | Pagination works correctly | ☐ |

---

### UJ-006: AI & Conversational Forms Journey

**Journey Description:** User creates an AI-powered conversational form and tests the chat-based data collection experience.

**Personas:** Developer, Product Manager

**Priority:** P2 - Medium

---

#### TC-AI-001: Generate Form with AI

| Field | Value |
|-------|-------|
| Module | AI |
| Priority | P2 - Medium |
| Estimated Time | 10 minutes |

**Preconditions:**
- User is logged in
- AI features are enabled for the account

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Forms → Create Form | Creation options appear | ☐ |
| 2 | Select "Generate with AI" | AI generation interface opens | ☐ |
| 3 | Enter prompt: `Create a job application form with personal info, work history, and resume upload` | Prompt accepted | ☐ |
| 4 | Click "Generate" | Loading indicator, AI processing | ☐ |
| 5 | Wait for generation (may take 10-30 seconds) | Form fields generated | ☐ |
| 6 | Review generated fields | Relevant fields present (name, email, experience, file upload) | ☐ |
| 7 | Verify field types are appropriate | Email field for email, file upload for resume, etc. | ☐ |
| 8 | Click "Use This Form" or "Accept" | Form loaded into builder | ☐ |
| 9 | Customize if needed | Fields editable | ☐ |
| 10 | Save form | Form saved | ☐ |

---

#### TC-AI-002: Conversational Form Experience

| Field | Value |
|-------|-------|
| Module | Conversational Forms |
| Priority | P2 - Medium |
| Estimated Time | 15 minutes |

**Preconditions:**
- Conversational form template exists
- AI service is configured

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to form with conversational mode | Form loads | ☐ |
| 2 | Click "Preview as Conversational" | Chat interface opens | ☐ |
| 3 | Observe initial AI greeting | AI introduces itself and purpose | ☐ |
| 4 | Type: `Hi, I need help with a software issue` | AI responds and asks clarifying question | ☐ |
| 5 | Answer AI's question | AI acknowledges and asks next question | ☐ |
| 6 | Continue conversation until all data collected | AI guides through all required fields | ☐ |
| 7 | Verify AI summarizes collected information | Summary presented | ☐ |
| 8 | Confirm submission | Submission successful | ☐ |
| 9 | View submission in data browser | All fields populated from conversation | ☐ |

**Edge Cases to Test:**
- [ ] User provides incomplete information
- [ ] User goes off-topic
- [ ] User provides conflicting information
- [ ] User asks to change previous answer

---

### UJ-007: Team Collaboration Journey

**Journey Description:** Organization owner invites team members with different roles and verifies permission boundaries.

**Personas:** Organization Owner, Team Admin, Team Member

**Priority:** P1 - High

---

#### TC-TEAM-001: Invite Team Member

| Field | Value |
|-------|-------|
| Module | Team Management |
| Priority | P1 - High |
| Estimated Time | 10 minutes |

**Preconditions:**
- User is logged in as Organization Owner
- Have access to a second email for the invitee

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Navigate to Settings → Team | Team management page loads | ☐ |
| 2 | Click "Invite Member" | Invitation form opens | ☐ |
| 3 | Enter email: `newmember@test.com` | Email accepted | ☐ |
| 4 | Select role: `Member` | Role selected | ☐ |
| 5 | Click "Send Invitation" | Invitation sent, success message | ☐ |
| 6 | Verify pending invitation appears in list | Invitation shown with "Pending" status | ☐ |
| 7 | Check invitee's email inbox | Invitation email received | ☐ |
| 8 | Click invitation link (as invitee) | Invitation acceptance page loads | ☐ |
| 9 | Create account or sign in (as invitee) | Account created/linked | ☐ |
| 10 | Verify invitee sees organization | Organization appears in invitee's dashboard | ☐ |
| 11 | Verify invitee has Member permissions | Can view but not delete forms | ☐ |

---

#### TC-TEAM-002: Role-Based Access Control

| Field | Value |
|-------|-------|
| Module | Permissions |
| Priority | P1 - High |
| Estimated Time | 15 minutes |

**Preconditions:**
- Team has members with different roles (Owner, Admin, Member, Viewer)

**Test Steps:**

| Step | Action | Expected Result | Status |
|------|--------|-----------------|--------|
| 1 | Log in as Viewer | Dashboard loads | ☐ |
| 2 | Navigate to Forms | Forms list visible | ☐ |
| 3 | Try to create new form | "Create" button disabled or hidden | ☐ |
| 4 | Try to edit existing form | "Edit" button disabled or hidden | ☐ |
| 5 | Verify can view form submissions | Submissions readable | ☐ |
| 6 | Log in as Member | Dashboard loads | ☐ |
| 7 | Create new form | Form created successfully | ☐ |
| 8 | Try to delete form created by Owner | Delete fails or button hidden | ☐ |
| 9 | Log in as Admin | Dashboard loads | ☐ |
| 10 | Delete form created by Member | Delete successful | ☐ |
| 11 | Navigate to Team settings | Team settings accessible | ☐ |
| 12 | Log in as Owner | Dashboard loads | ☐ |
| 13 | Access Billing settings | Billing accessible (Admin cannot) | ☐ |

---

## Field Type Testing Matrix

Use this matrix to ensure all 30+ field types are tested:

| Field Type | Add to Form | Configure | Validate | Submit | View Data | Notes |
|------------|-------------|-----------|----------|--------|-----------|-------|
| Short Text | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Long Text | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Email | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Phone | ☐ | ☐ | ☐ | ☐ | ☐ | |
| URL | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Number | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Currency | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Percentage | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Date | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Time | ☐ | ☐ | ☐ | ☐ | ☐ | |
| DateTime | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Dropdown | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Radio | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Checkbox | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Toggle | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Rating | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Slider | ☐ | ☐ | ☐ | ☐ | ☐ | |
| File Upload | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Image Upload | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Signature | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Rich Text | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Hidden | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Computed | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Address | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Name (composite) | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Matrix | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Ranking | ☐ | ☐ | ☐ | ☐ | ☐ | |
| NPS | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Legal/Consent | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Section Header | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Divider | ☐ | ☐ | ☐ | ☐ | ☐ | |

---

## Workflow Node Testing Matrix

| Node Type | Add to Canvas | Configure | Connect | Execute | View Logs | Notes |
|-----------|---------------|-----------|---------|---------|-----------|-------|
| **Triggers** | | | | | | |
| Form Trigger | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Webhook Trigger | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Schedule Trigger | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Manual Trigger | ☐ | ☐ | ☐ | ☐ | ☐ | |
| **Logic** | | | | | | |
| Condition | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Switch | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Loop | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Delay | ☐ | ☐ | ☐ | ☐ | ☐ | |
| **Data** | | | | | | |
| Transform | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Filter | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Aggregate | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Set Variable | ☐ | ☐ | ☐ | ☐ | ☐ | |
| **MongoDB** | | | | | | |
| Find | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Insert | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Update | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Delete | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Aggregate | ☐ | ☐ | ☐ | ☐ | ☐ | |
| **Actions** | | | | | | |
| Send Email | ☐ | ☐ | ☐ | ☐ | ☐ | |
| HTTP Request | ☐ | ☐ | ☐ | ☐ | ☐ | |
| Slack Message | ☐ | ☐ | ☐ | ☐ | ☐ | |
| **AI** | | | | | | |
| AI Generate | ☐ | ☐ | ☐ | ☐ | ☐ | |
| AI Classify | ☐ | ☐ | ☐ | ☐ | ☐ | |
| AI Extract | ☐ | ☐ | ☐ | ☐ | ☐ | |

---

## Testing Checklist Templates

### Pre-Release Checklist

Use this checklist before any production release:

**Critical Path (Must Pass):**
- [ ] User can sign up and create organization
- [ ] User can create form with basic fields
- [ ] User can publish form
- [ ] End user can submit form
- [ ] Admin can view submissions
- [ ] Workflow triggers on form submission
- [ ] Email notifications send correctly

**Regression (Should Pass):**
- [ ] All 30+ field types render correctly
- [ ] Conditional logic shows/hides fields
- [ ] Validation errors display properly
- [ ] Multi-page forms navigate correctly
- [ ] File uploads complete successfully
- [ ] Form themes apply correctly
- [ ] Mobile responsive layout works

**Integration (Should Pass):**
- [ ] MongoDB connections work
- [ ] Webhook triggers fire
- [ ] Scheduled workflows run
- [ ] Slack integration sends messages
- [ ] CSV/JSON export works

### Browser Compatibility Checklist

| Browser | Version | Forms | Workflows | Data | AI |
|---------|---------|-------|-----------|------|-----|
| Chrome | Latest | ☐ | ☐ | ☐ | ☐ |
| Chrome | Latest-1 | ☐ | ☐ | ☐ | ☐ |
| Firefox | Latest | ☐ | ☐ | ☐ | ☐ |
| Safari | Latest | ☐ | ☐ | ☐ | ☐ |
| Edge | Latest | ☐ | ☐ | ☐ | ☐ |
| Mobile Safari | iOS 17 | ☐ | ☐ | ☐ | ☐ |
| Mobile Chrome | Android 14 | ☐ | ☐ | ☐ | ☐ |

### Performance Checklist

| Scenario | Target | Actual | Status |
|----------|--------|--------|--------|
| Form builder load time | < 3s | ___s | ☐ |
| Form preview load time | < 2s | ___s | ☐ |
| Form submission time | < 1s | ___s | ☐ |
| Workflow editor load time | < 3s | ___s | ☐ |
| Data browser query (1000 docs) | < 2s | ___s | ☐ |
| Dashboard initial load | < 3s | ___s | ☐ |

---

## Appendix

### Glossary

| Term | Definition |
|------|------------|
| **Form** | A collection of fields used to collect data from users |
| **Field** | An individual input element in a form (text, dropdown, etc.) |
| **Workflow** | An automated sequence of actions triggered by events |
| **Node** | A single step in a workflow (trigger, action, condition) |
| **Edge** | A connection between two nodes in a workflow |
| **Submission** | Data entered by a user when completing a form |
| **Conditional Logic** | Rules that show/hide fields based on other field values |
| **Template** | A pre-built form or workflow configuration |

### Contact & Escalation

| Role | Name | Contact | Escalate When |
|------|------|---------|---------------|
| QA Lead | [Name] | [email] | Test blockers, environment issues |
| Dev Lead | [Name] | [email] | Critical bugs, technical questions |
| Product | [Name] | [email] | Requirements unclear, feature questions |

---

*Document generated for NetPad QA Team*