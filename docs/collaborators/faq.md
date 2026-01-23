# Frequently Asked Questions

Common questions from collaborators across all tracks.

---

## About Collaboration

### Is this a job?

**No.** This is flexible, open-source collaboration. There's no employment relationship, no set hours, and no formal obligations.

You contribute because you want to build something meaningful, learn, and ship real features. Time commitment is entirely up to you.

### What's the time commitment?

**Flexible.** Some collaborators contribute a few hours a week, others more. What matters is momentum—consistent progress beats sporadic bursts.

A reasonable starting point might be 5-10 hours per week, but even smaller contributions are valuable if they're focused.

### What if I want to stop contributing?

**No problem.** Life happens. Just let us know so we can reassign any work in progress. There's no commitment, no guilt, no process. We appreciate any time you've contributed.

### How do decisions get made?

**Mostly async, mostly consensus.** Small decisions happen in PRs. Larger decisions go through GitHub Discussions. We aim for rough consensus—not perfect agreement, but no strong objections.

For architectural decisions, we document the reasoning so future contributors understand why things are the way they are.

---

## About the Project

### Who owns the IP?

**MIT License.** NetPad is fully open source under the MIT license. You retain copyright to your contributions, and they're licensed under MIT like everything else.

There's no CLA (Contributor License Agreement). Standard open-source contribution rules apply.

### What's the business model?

**Cloud SaaS.** NetPad will be offered as a managed cloud service at netpad.io with a freemium model. Self-hosted remains free forever.

Pricing tiers are still being finalized, but the pattern is: free tier for individuals, paid tiers for teams with higher limits and support.

### Can I use NetPad for my own projects?

**Absolutely.** MIT license means you can use NetPad for anything—personal projects, client work, commercial products. No restrictions.

### Is NetPad production-ready?

**Getting there.** The core functionality works well. We're currently focused on polish, testing, and documentation before recommending it for critical production use.

For internal tools and non-critical applications, it's already being used successfully.

---

## Getting Access

### How do I get sandbox/cloud access?

**Waitlist.** Cloud access at netpad.io is currently via waitlist. Collaborators get priority access—just mention you're contributing when you sign up.

For development, you can run NetPad locally with your own MongoDB Atlas cluster (free tier works fine).

### Do I need a MongoDB Atlas account?

**Yes, for local development.** You'll need a MongoDB connection string. Options:

1. **MongoDB Atlas** - Free M0 cluster works great
2. **Local MongoDB** - Run via Docker
3. **Atlas Local** - Docker image with Vector Search support

See [Getting Started](./getting-started.md) for setup details.

### How do I get API keys for AI features?

**Bring your own.** For AI features (conversational forms, RAG), you'll need an OpenAI API key. Set it in your `.env.local` file.

For testing without AI, most of the platform works fine without it.

---

## Technical Questions

### What's the tech stack?

- **Frontend:** Next.js 14+ (App Router), React 18+, Material-UI, TypeScript
- **Backend:** Next.js API Routes, MongoDB Driver
- **AI:** OpenAI API, MongoDB Atlas Vector Search
- **Infrastructure:** Vercel, MongoDB Atlas

See [Architecture Overview](./architecture-overview.md) for more details.

### Why Material-UI instead of Tailwind?

**Consistency and components.** MUI provides a complete component library that ensures visual consistency. For a complex application like NetPad with many interactive components, having a design system matters more than utility-first styling.

### Why Next.js App Router?

**Server components and streaming.** App Router gives us better performance through server components, streaming responses, and more granular caching. It's the future of Next.js.

### Can I add a new dependency?

**Maybe.** For small, well-maintained packages—go for it. For large dependencies, discuss first. We try to keep the bundle size reasonable.

Check if a similar capability already exists in the codebase before adding new dependencies.

---

## Contribution Process

### How do I pick something to work on?

1. Check [Current Priorities](./current-priorities.md)
2. Browse GitHub Issues for `good-first-issue` labels
3. Look at the codebase and find something that bugs you
4. Propose something new in GitHub Discussions

If you're unsure, ask. We'd rather help you find the right thing than have you spin on something misaligned.

### How do I know if someone else is working on something?

**Check the issue.** If there's an open PR or someone commented they're working on it, it's taken. Otherwise, comment that you're picking it up.

For untracked work, create a draft PR early to signal you're working on it.

### How long should a PR take to review?

| PR Size | Expected Turnaround |
|---------|---------------------|
| Small (< 100 lines) | Same day or next day |
| Medium (100-300 lines) | 1-2 days |
| Large (300+ lines) | 2-3 days |

If you haven't heard back in 3 days, ping in the PR comments.

### What if my PR has been open for a while?

Ping in the comments. Sometimes things slip through. We aim to not leave PRs hanging.

---

## Communication

### Where should I ask questions?

| Question Type | Location |
|---------------|----------|
| Code-specific | PR comments |
| Feature ideas | GitHub Discussions |
| Bug reports | GitHub Issues |
| General questions | GitHub Discussions |

### Is there a Slack or Discord?

**Not currently.** We're async-first and use GitHub for all communication. This keeps everything searchable and doesn't create pressure for real-time response.

If the community grows, we might add a Discord, but for now GitHub works well.

### How do I share feedback about the collaboration experience?

**GitHub Discussions or directly.** We want to improve how we work together. If something isn't working for you, let us know.

---

## Miscellaneous

### Can I blog/tweet about my contributions?

**Absolutely.** Please do. We appreciate any visibility. Tag @netpad_io if you want a retweet.

### Will there be contributor recognition?

**Yes.** Contributors are acknowledged in releases, and significant contributors may be highlighted on the website. We believe in recognizing the people who build this.

### Can I use NetPad in my portfolio?

**Yes.** Your contributions are public and can absolutely be referenced in your portfolio, resume, or anywhere else.

---

## Still Have Questions?

Open a [GitHub Discussion](https://github.com/mongodb/netpad/discussions) with your question. We're happy to help.
