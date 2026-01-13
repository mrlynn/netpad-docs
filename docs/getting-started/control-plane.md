# The Operational Control Plane

NetPad serves as an **operational control plane** around MongoDB, governing the complete lifecycle of your documents—from creation through evolution.

<NetPadMongoControlPlane
  title="NetPad becomes the control plane around MongoDB"
  subtitle="MongoDB remains the engine of truth. NetPad manages intake, decisions, automation, and auditability."
  bg="transparent"
  animated={true}
  pulse={true}
/>

## What is a Control Plane?

In distributed systems, a **control plane** manages and orchestrates how data flows through a system, while the **data plane** handles the actual data storage and retrieval.

NetPad applies this concept to document management:

- **MongoDB** is the data plane—storing documents, executing queries, maintaining collections
- **NetPad** is the control plane—governing how documents are created, reviewed, transformed, and tracked

## The Document Lifecycle

Every document in your MongoDB database has a lifecycle. NetPad provides tools and governance for each stage:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>

<SpotlightCard>

### Create
**Forms · APIs · AI Intake**

Documents enter your system through multiple channels. NetPad provides visual form builders, API endpoints, and AI-powered conversational intake to capture data consistently and validate it before it reaches MongoDB.

</SpotlightCard>

<SpotlightCard>

### Review
**Ownership · Approvals**

Not every document should go straight to the database. NetPad enables approval workflows, ownership assignment, and review gates to ensure data quality and compliance before documents are committed.

</SpotlightCard>

<SpotlightCard>

### Decide
**State Transitions**

Documents move through states—draft to submitted, pending to approved, active to archived. NetPad workflows manage these transitions with conditional logic, ensuring business rules are enforced.

</SpotlightCard>

<SpotlightCard>

### Act
**Automation · Integrations**

When documents reach certain states or conditions, actions need to happen. NetPad triggers webhooks, sends notifications, updates related documents, and integrates with external systems automatically.

</SpotlightCard>

<SpotlightCard>

### Audit
**Immutable Events**

Every change, every approval, every state transition is logged. NetPad maintains an immutable audit trail, providing compliance evidence and enabling forensic analysis when needed.

</SpotlightCard>

<SpotlightCard>

### Evolve
**Schemas & Workflows**

As your business changes, so do your data requirements. NetPad supports schema evolution, form versioning, and workflow updates—all without disrupting existing data or processes.

</SpotlightCard>

</div>

## Why a Control Plane Matters

### Without a Control Plane

When applications interact directly with MongoDB without governance:

- **Inconsistent data** enters the database through different code paths
- **No audit trail** of who changed what and when
- **Manual processes** for approvals and state changes
- **Scattered business logic** across multiple services
- **Difficult compliance** with regulations requiring data lineage

### With NetPad as Control Plane

<NetPadMongoControlPlane
  title=""
  subtitle=""
  bg="dark"
  animated={false}
  pulse={true}
/>

NetPad provides:

- **Unified intake** through forms, APIs, and AI—all validated against your schemas
- **Complete auditability** with immutable event logs
- **Automated workflows** that enforce business rules consistently
- **Centralized governance** without sacrificing flexibility
- **Built-in compliance** with versioning and audit trails

## The Three Interfaces

NetPad accepts input from three types of actors:

| Interface | Description | Use Cases |
|-----------|-------------|-----------|
| **Humans** | Web forms, dashboards, admin interfaces | Data entry, approvals, manual overrides |
| **Systems** | REST APIs, webhooks, integrations | Automated data sync, external triggers |
| **AI** | Conversational forms, intelligent routing | Natural language intake, smart triage |

All three interfaces feed into the same control plane, ensuring consistent governance regardless of how data enters your system.

## MongoDB Remains Central

It's important to understand what NetPad **doesn't** do:

- NetPad doesn't replace MongoDB—it enhances how you interact with it
- NetPad doesn't copy your data—MongoDB remains the single source of truth
- NetPad doesn't lock you in—your data stays in standard MongoDB collections

Think of NetPad as the **governance layer** that sits around MongoDB, providing the operational controls that MongoDB itself doesn't offer out of the box.

## Getting Started

Ready to implement an operational control plane for your MongoDB data?

1. **[Connect your database](./configuration.md)** — Set up your MongoDB connection
2. **[Build your first form](../forms/form-builder.md)** — Create a data intake point
3. **[Create a workflow](../workflows/creating-workflows.md)** — Automate document processing
4. **[Set up audit logging](../security/overview.md)** — Enable compliance tracking

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     NetPad Control Plane                     │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│   Forms     │  Workflows  │    APIs     │   AI Intake      │
├─────────────┴─────────────┴─────────────┴──────────────────┤
│                    Validation & Governance                   │
├─────────────────────────────────────────────────────────────┤
│                      Audit Trail                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         MongoDB                              │
│              Documents · Collections · Queries               │
└─────────────────────────────────────────────────────────────┘
```

## Next Steps

- [Introduction](./introduction.md) — Overview of NetPad
- [Quick Start](./quick-start.md) — Get up and running in minutes
- [Forms Overview](../forms/overview.md) — Learn about data intake
- [Workflows Overview](../workflows/overview.md) — Understand automation
