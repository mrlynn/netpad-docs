# Product Context

## Understanding NetPad's Users and Market

---

## Why NetPad Exists

Internal tooling at SMBs is broken. Teams need tools for data collection, routing, and workflow automation, but their options are:

| Option | Reality |
|--------|---------|
| **Enterprise SaaS** | $50+/user/month, overkill features, vendor lock-in |
| **Custom Development** | 3+ months of dev time they don't have |
| **No-Code Combos** | Typeform + Zapier + Airtable = integration nightmares |

**NetPad's insight**: Most internal tools follow the same pattern—collect data, store it, route it, act on it. We make that loop fast with native MongoDB integration.

---

## Target Users

### Primary: Internal Platform Teams at SMBs

**Profile:**
- Company size: 50-500 employees (sweet spot)
- Role: IT managers, operations leads, platform teams
- Technical level: Can follow instructions, not full developers

**Priority Verticals:**

| Vertical | Why | Example Use Cases |
|----------|-----|-------------------|
| **Finance** | Compliance needs, approval workflows | Expense reports, budget requests, audit trails |
| **Healthcare** | Data collection requirements, HIPAA concerns | Patient intake, medical history, appointment scheduling |

**Pain Points:**
- "We need this tool yesterday but dev team is busy for 3 months"
- "Our current solution costs $X per seat and we only use 10% of it"
- "Data lives in 5 different tools that don't talk to each other"

**What They Evaluate:**
- Time to first working app (target: under 30 minutes)
- Can it connect to our existing MongoDB?
- Does it handle our workflow/routing needs?
- What does deployment look like?
- What's the escape hatch if we outgrow it?

### Secondary: Developers Evaluating Build vs. Buy

**Profile:**
- Senior developers or tech leads
- Researching internal tooling options
- Will inspect code quality and architecture first

**What They Care About:**
- Is the architecture sound?
- Can I extend it if needed?
- Is there lock-in? (Open source + export = no lock-in)
- How does it compare to Retool/Appsmith?

**Where They Find Us:**
- GitHub (inspect the repo)
- Hacker News discussions
- Technical blog posts
- Word of mouth from other developers

---

## User Journeys

### Journey 1: IT Manager Needs a Help Desk

**Scenario:** Sarah manages IT at a 200-person company. Employees email her directly with issues, things get lost, there's no tracking.

**Current Pain:**
- Issues come via email, Slack, hallway conversations
- No way to prioritize or track resolution
- Can't report on response times to leadership

**NetPad Journey:**
1. Finds NetPad via search for "internal help desk without Zendesk"
2. Signs up, sees IT Help Desk template
3. Customizes fields for her environment (adds department dropdown)
4. Creates workflow: route high-priority to Slack #it-urgent
5. Deploys form to company intranet
6. Tracks submissions in Data Browser

**Success Metric:** Working help desk in 30 minutes, not 3 months.

---

### Journey 2: Developer Evaluating Options

**Scenario:** Marcus is a senior dev at a fintech. Product wants internal tools but his team is fully allocated to the main product.

**Current Pain:**
- Backlog of internal tool requests
- Previous "quick" internal projects became maintenance burdens
- Needs something he can trust architecturally

**NetPad Journey:**
1. Finds NetPad on GitHub or Hacker News
2. Inspects the repo: Next.js, TypeScript, MongoDB—checks out
3. Reads architecture docs, likes the patterns
4. Tries the template gallery, impressed by variety
5. Tests standalone export—confirms he can eject if needed
6. Recommends to product team for internal tools

**Success Metric:** Confident it's a sound technical choice.

---

### Journey 3: Healthcare Admin Needs Patient Intake

**Scenario:** Clinic manager needs digital patient intake forms to replace paper.

**Current Pain:**
- Paper forms are slow and error-prone
- Existing form builders don't handle HIPAA properly
- Need data to flow to their MongoDB-based system

**NetPad Journey:**
1. Finds NetPad via "MongoDB patient intake form"
2. Sees Healthcare templates with relevant fields
3. Appreciates self-hosted option for compliance
4. Customizes Patient Intake template
5. Enables conversational mode for patients who prefer chat
6. Integrates with their MongoDB via connection vault

**Success Metric:** HIPAA-conscious digital intake in production.

---

## Use Cases by Category

### Business & Sales
- Contact forms
- Lead capture
- Demo requests
- Quote requests
- Partnership inquiries

### HR & Recruitment
- Job applications
- Employee onboarding
- Time off requests
- Performance reviews
- Exit interviews

### Healthcare
- Patient intake
- Medical history
- Appointment scheduling
- Symptom checkers
- Prescription refills

### Finance
- Expense reports
- Budget requests
- Invoice submissions
- Reimbursements
- Audit questionnaires

### IT & Operations
- Help desk tickets
- Bug reports
- Feature requests
- Asset checkout
- Access requests

### Events
- Event registration
- RSVPs
- Speaker submissions
- Feedback surveys
- Volunteer signup

---

## Competitive Landscape

### Direct Competitors

| Competitor | Strength | Weakness | NetPad Advantage |
|------------|----------|----------|------------------|
| **Retool** | Mature, feature-rich | Expensive, complex | MongoDB-native, simpler pricing |
| **Appsmith** | Open source | Generic, not data-focused | Purpose-built for MongoDB |
| **Budibase** | Self-hosted focus | Limited workflow | Better workflow automation |

### Adjacent Solutions

| Solution | Use Case | NetPad Advantage |
|----------|----------|------------------|
| **Typeform** | Pretty forms | MongoDB-native, workflows included |
| **Jotform** | Simple forms | More powerful, developer-friendly |
| **Zendesk** | Help desk | No per-seat pricing, customizable |
| **Jira Service Desk** | IT ticketing | Simpler, MongoDB-native |
| **Custom dev** | Full control | 30 min vs. 3 months |

### Our Positioning

**We are:** MongoDB-native platform for internal tools

**We are not:** Generic form builder competing with Typeform

**Key differentiators:**
1. **MongoDB-native** — Not another integration to maintain
2. **"Build once, deploy twice"** — Same schema, traditional + conversational
3. **Open source + export** — True ownership, no lock-in
4. **Workflow automation** — Not just forms, complete automation

---

## Messaging Framework

### Elevator Pitch (10 seconds)

> "NetPad lets teams build internal tools in 30 minutes instead of 3 months. It's MongoDB-native, so your data stays in one place, and you can export anytime—no lock-in."

### Value Props by Audience

**For IT Managers:**
> "Stop cobbling together Typeform, Zapier, and spreadsheets. NetPad gives you forms, workflows, and data management in one tool that connects directly to MongoDB."

**For Developers:**
> "It's open source, architecturally sound, and you can export any app as standalone Next.js. If you outgrow NetPad, you're not locked in."

**For Finance/Compliance:**
> "Self-hosted option keeps data in your environment. MongoDB-native means one source of truth for audits."

### Headlines That Work

- "Build MongoDB Forms & Workflows Without Code"
- "Internal Tools in 30 Minutes, Not 3 Months"
- "MongoDB-Native. No Lock-In. Your Data, Your Way."
- "From Form to Workflow to Production in Minutes"

### Headlines to Avoid

- "The Best Form Builder" (we're not positioning as form builder)
- "No-Code Revolution" (we're developer-friendly, not anti-code)
- "Enterprise-Grade" (we're SMB-focused)

---

## Current Go-to-Market

### Distribution Channels (Active)

| Channel | Status | Strategy |
|---------|--------|----------|
| **Organic search** | Active | Template pages, use case content |
| **GitHub** | Active | Open source discovery |
| **Template gallery** | Active | Conversion funnel, SEO |
| **Documentation** | Building | Developer trust |

### Distribution Channels (Planned)

| Channel | Timeline | Strategy |
|---------|----------|----------|
| **Hacker News** | When ready | "Show HN" with IT Help Desk tutorial |
| **Dev.to / Hashnode** | Q1 2025 | Technical tutorials |
| **YouTube** | Q1 2025 | Walkthrough videos |
| **LinkedIn** | Q1 2025 | Carousel posts for IT managers |

### No Active Paid Marketing

We're focused on organic discovery initially. Paid campaigns are future consideration after:
- Product-market fit confirmed
- Pricing finalized
- Onboarding optimized

---

## Pricing (Draft)

**Note:** Pricing model exists but will likely change before release.

| Tier | Price | Target |
|------|-------|--------|
| **Free** | $0 | Individual, evaluation |
| **Team** | TBD | SMB teams |
| **Enterprise** | TBD | Large orgs, compliance needs |

**Considerations:**
- 3-day free trial planned (all features)
- No per-seat pricing (differentiator vs. Zendesk/Retool)
- Self-hosted may have different model

---

## Metrics We Care About

### Activation
- Time to first form created
- Time to first submission received
- Template usage rate

### Engagement
- Forms created per organization
- Workflows created per organization
- Conversational form usage

### Retention
- Weekly active organizations
- Form submission volume over time

### Growth
- Organic signups
- Template gallery traffic
- GitHub stars

---

## Product Feedback Themes

What we're hearing from early users:

| Theme | Frequency | Response |
|-------|-----------|----------|
| "Navigation is confusing" | High | Tier 1 priority—UX redesign |
| "Love the templates" | High | Expanding template library |
| "Conversational forms are cool" | Medium | Polishing the experience |
| "Need more integrations" | Medium | Roadmap item |
| "Export feature is reassuring" | Medium | Need better documentation |

---

## Questions for Product/Design Contributors

As you explore NetPad, consider:

1. **First impressions** — What confuses you in the first 5 minutes?
2. **Navigation** — Can you find what you need? Where do you get lost?
3. **Templates** — Which templates would you add? Which seem weak?
4. **Conversational forms** — Is the AI experience intuitive?
5. **Competitive gaps** — What would make you choose a competitor?

Your fresh perspective is valuable—document what you observe.

---

## Next Steps

1. **Explore the product**: Create an account at [netpad.io](https://www.netpad.io)
2. **Try the template gallery**: [netpad.io/templates](https://www.netpad.io/templates)
3. **Test conversational mode**: Pick a template and try "Conversational" tab
4. **Document your experience**: Note friction points and ideas
5. **Share feedback**: Discuss with Michael

---

*Product context evolves—this document is updated as we learn.*
