# Deployment Modes

NetPad supports three distinct deployment modes, each designed for different use cases. Understanding the differences helps you choose the right approach for your needs.

## Quick Overview

| Mode | Best For | Data Location | Multi-tenancy |
|------|----------|---------------|---------------|
| **Cloud** | Teams wanting zero infrastructure management | Managed by NetPad | Yes |
| **Self-Hosted** | Enterprises with compliance/data residency requirements | Your MongoDB Atlas cluster | Yes |
| **Standalone** | Production deployment of specific apps without NetPad dependency | Your own MongoDB | No |

## Mode 1: Cloud (netpad.io)

The **Cloud** mode is NetPad's fully managed SaaS offering at [netpad.io](https://netpad.io).

| Aspect | Details |
|--------|---------|
| **What it is** | Fully managed SaaS at netpad.io |
| **Best for** | Teams wanting zero infrastructure management |
| **Data location** | Managed by NetPad |
| **Multi-tenancy** | Yes (organizations, projects, teams) |
| **RAG/Vector Search** | Requires Team tier + M10+ Atlas cluster |
| **Environment variable** | `NETPAD_DEPLOYMENT_MODE=cloud` |
| **Billing** | Stripe-integrated subscription tiers |
| **Updates** | Automatic, managed by NetPad |

### Key Points

- **Recommended starting point** - Zero setup required to get started
- **All features available** based on your subscription tier
- **No infrastructure to manage** - NetPad handles hosting, scaling, and maintenance
- **Automatic updates** - Always running the latest version
- **Data stored on NetPad's managed infrastructure** - We handle backups and security

### When to Choose Cloud

- You want to start building immediately without setup
- Your team doesn't have DevOps resources
- You prefer predictable subscription pricing
- You don't have strict data residency requirements

## Mode 2: Self-Hosted

**Self-Hosted** mode runs the full NetPad platform on your own infrastructure.

| Aspect | Details |
|--------|---------|
| **What it is** | Full NetPad platform on your infrastructure |
| **Best for** | Enterprises with compliance/data residency requirements |
| **Data location** | Your MongoDB Atlas cluster |
| **Multi-tenancy** | Yes (same architecture as Cloud) |
| **RAG/Vector Search** | Available to ALL tiers with Atlas Local |
| **Environment variable** | `NETPAD_DEPLOYMENT_MODE=self-hosted` |
| **Billing** | You manage (can disable Stripe features) |
| **Updates** | Manual - you pull from GitHub |

### Key Points

- **Same codebase as Cloud** - Full feature parity
- **Complete data control** - Your data stays on your infrastructure
- **RAG for all tiers** - Use Atlas Local (Docker) for Vector Search without M10+ upgrade
- **You are responsible for** updates, security, backups, and maintenance
- **Ideal for** data sovereignty, air-gapped environments, custom integrations

### When to Choose Self-Hosted

- You have compliance requirements (HIPAA, GDPR, SOC2)
- Data must reside in specific geographic regions
- You need air-gapped deployment
- You want RAG features without paying for M10+ Atlas clusters
- You have existing infrastructure and DevOps expertise

See the [Self-Hosted Deployment Guide](./deployment/self-hosted.md) for detailed setup instructions.

## Mode 3: Standalone (Exported Apps)

**Standalone** mode is for single exported applications running completely independently from NetPad.

| Aspect | Details |
|--------|---------|
| **What it is** | Single exported application running independently |
| **Best for** | Production deployment of specific apps without NetPad dependency |
| **Data location** | User's own MongoDB (direct connection) |
| **Multi-tenancy** | No - single application only |
| **RAG/Vector Search** | User provides OpenAI API key |
| **Environment variable** | `STANDALONE_MODE=true` |
| **Billing** | None - completely independent |
| **Updates** | None - exported code is yours |

### Key Points

- **True ownership** - This is the "escape hatch" for complete independence
- **No NetPad infrastructure required** to run the exported app
- **Simplified architecture** - No Platform Database, direct MongoDB connection
- **You must provide your own:**
  - MongoDB connection string
  - OpenAI API key (for conversational forms)
- **Conversation transcripts stored differently** (see [Data Architecture](#data-architecture) below)

### When to Choose Standalone

- You've built a production-ready app and want to own the deployment
- You need a dedicated app without ongoing NetPad dependency
- You want to embed a form in your existing application
- You need maximum control over the runtime environment

---

## Feature Comparison

| Feature                    | Cloud        | Self-Hosted  | Standalone   |
|----------------------------|--------------|--------------|--------------|
| Infrastructure management  | NetPad       | You          | You          |
| Multi-tenancy             | ✅           | ✅           | ❌           |
| Organizations & Teams     | ✅           | ✅           | ❌           |
| Automatic updates         | ✅           | ❌           | ❌           |
| Data ownership            | NetPad       | You          | You          |
| RAG without M10 cluster   | ❌           | ✅           | N/A          |
| Custom domain             | Premium      | ✅           | ✅           |
| Billing integration       | ✅           | Optional     | ❌           |
| Marketplace access        | ✅           | ✅           | ❌           |
| Export to Standalone      | ✅           | ✅           | N/A          |

---

## Data Architecture

Understanding how data is stored differently across deployment modes is critical for developers.

### Conversation Transcript Storage

| Mode | Storage Path | Description |
|------|--------------|-------------|
| Cloud | `_formMetadata.conversational` | Nested under form metadata |
| Self-Hosted | `_formMetadata.conversational` | Same as Cloud |
| Standalone | `conversational` (root level) | Simplified, at document root |

**Why the difference?**

- **Cloud/Self-Hosted** use a Platform Database that syncs to target MongoDB, requiring a structured metadata wrapper
- **Standalone** writes directly to user's MongoDB with a simpler schema for easier querying
- This is intentional - standalone apps prioritize simplicity and direct database access

### Submission Document Structure

#### Cloud/Self-Hosted Structure

```javascript
{
  _id: ObjectId,
  submissionId: "sub_xxx",
  formId: "form_xxx",
  orgId: "org_xxx",
  data: { /* form field values */ },
  _formMetadata: {
    formName: "Contact Form",
    formSlug: "contact",
    submittedAt: ISODate,
    conversational: {
      conversationId: "conv_xxx",
      transcript: [
        { role: "assistant", content: "Hello!", timestamp: ISODate },
        { role: "user", content: "Hi there", timestamp: ISODate }
      ],
      topicsCovered: [...],
      overallConfidence: 0.95,
      turnCount: 8,
      durationSeconds: 120
    }
  }
}
```

#### Standalone Structure

```javascript
{
  _id: ObjectId,
  submissionId: "sub_xxx",
  formSlug: "contact",
  data: { /* form field values */ },
  conversational: {
    conversationId: "conv_xxx",
    transcript: [...],
    topicsCovered: [...],
    overallConfidence: 0.95,
    turnCount: 8,
    durationSeconds: 120
  },
  metadata: {
    submittedAt: ISODate,
    isConversational: true
  }
}
```

---

## Environment Variables Reference

### Cloud Mode

```bash
NETPAD_DEPLOYMENT_MODE=cloud
NEXT_PUBLIC_NETPAD_DEPLOYMENT_MODE=cloud  # For client-side badge
```

### Self-Hosted Mode

```bash
NETPAD_DEPLOYMENT_MODE=self-hosted
NEXT_PUBLIC_NETPAD_DEPLOYMENT_MODE=self-hosted
MONGODB_URI=mongodb+srv://...

# Optional: Atlas Local for RAG
# docker run -d -p 27017:27017 mongodb/mongodb-atlas-local
```

### Standalone Mode

```bash
STANDALONE_MODE=true
MONGODB_URI=mongodb+srv://...
MONGODB_DATABASE=my_app_db
OPENAI_API_KEY=sk-...  # Required for conversational forms
NEXT_PUBLIC_APP_URL=https://myapp.com
```

See the [Configuration Guide](./getting-started/configuration.md) for a complete environment variables reference.

---

## Migration Guides

### Cloud → Standalone Export

1. Navigate to your application in NetPad Cloud
2. Click **"Export"** → **"Standalone Next.js App"**
3. Download the generated project
4. Configure environment variables (see [Standalone Mode](#standalone-mode) above)
5. Deploy to Vercel, Netlify, or your own infrastructure

### Self-Hosted → Cloud

- Contact the NetPad team for data migration assistance
- Note: Organization structure will need to be recreated in the Cloud instance

---

## Decision Flowchart

Use this guide to choose the right deployment mode:

1. **Do you need zero maintenance and want to start immediately?**
   - Yes → **Cloud**

2. **Do you have compliance or data residency requirements?**
   - Yes → **Self-Hosted**

3. **Do you need a dedicated production app without NetPad dependency?**
   - Yes → **Standalone**

4. **Do you need multi-tenancy (organizations, teams, projects)?**
   - Yes → **Cloud** or **Self-Hosted**
   - No → Consider **Standalone** for single-app deployments

5. **Do you want RAG features without M10+ Atlas costs?**
   - Yes → **Self-Hosted** with Atlas Local

---

## How to Identify Your Current Mode

In the NetPad application, check the badge in your user menu (top-right avatar dropdown):

- **"Cloud"** badge → Running on netpad.io
- **"Self-Hosted"** badge → Running on your infrastructure

Standalone apps don't have this UI element since they operate independently.

---

## Frequently Asked Questions

### Can I start with Cloud and move to Standalone later?

Yes! This is a recommended pattern. Prototype and develop in Cloud, then export to Standalone when you're ready for production deployment.

### Will my conversational form transcripts work the same in Standalone?

Yes, the functionality is identical. However, transcripts are stored at a different path in the document (`conversational` vs `_formMetadata.conversational`). Update your queries accordingly if migrating.

### Do I need an M10 Atlas cluster for Self-Hosted?

No! Self-hosted deployments can use [Atlas Local](https://www.mongodb.com/docs/atlas/atlas-local/) (Docker) for Vector Search features without upgrading to M10. This is one of the main benefits of self-hosting.

### Can Standalone apps connect back to NetPad?

No, standalone apps are completely independent. They have no connection to NetPad infrastructure and operate as self-contained applications.

### How do updates work for each mode?

| Mode | Update Process |
|------|----------------|
| Cloud | Automatic - always on the latest version |
| Self-Hosted | Manual - pull from GitHub and redeploy |
| Standalone | None - exported code is yours to maintain |

### Can I switch between modes?

- **Cloud ↔ Self-Hosted**: Contact NetPad team for migration assistance
- **Cloud/Self-Hosted → Standalone**: Use the Export feature
- **Standalone → Cloud/Self-Hosted**: Not directly supported - would require recreating the form

---

## Next Steps

- [Vercel Deployment](./deployment/vercel.md) - Deploy to Vercel (recommended for Cloud-like experience)
- [Self-Hosted Deployment](./deployment/self-hosted.md) - Full self-hosting guide
- [Configuration](./getting-started/configuration.md) - Complete environment variables reference
- [RAG Documentation](./ai/rag-knowledge-guided.md) - Learn about RAG features and Atlas Local
