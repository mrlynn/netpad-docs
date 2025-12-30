# Frequently Asked Questions

Common questions about NetPad and how to use it.

## General Questions

### What is NetPad?

NetPad is an open-source platform for creating MongoDB-connected data entry forms, workflows, and data management applications without writing code. It provides a visual interface for building forms, automating processes, and managing data.

### Is NetPad free?

NetPad is open-source software. You can self-host it for free. Cloud hosting and managed services may have associated costs (MongoDB Atlas, Vercel, etc.).

### What version of MongoDB do I need?

NetPad works with MongoDB 4.4+ and is optimized for MongoDB Atlas. Any MongoDB instance (Atlas, self-hosted, or cloud) will work.

### Do I need to know how to code?

No! NetPad is designed for non-developers. The visual form builder and workflow editor require no coding knowledge. However, some advanced features may benefit from basic technical understanding.

## Forms

### How do I create a form?

1. Navigate to the Form Builder (`/builder`)
2. Click "New Form"
3. Connect to MongoDB (or use auto-provisioned cluster)
4. Add fields by dragging from the sidebar
5. Configure settings and publish

See the [Quick Start Guide](./quickstart.md) for detailed steps.

### Can I edit a published form?

Yes! You can edit published forms at any time. All changes are versioned, so you can revert to previous versions if needed.

### How do I restrict who can submit my form?

In form settings, configure access control:
- **Public**: Anyone with the URL can submit
- **Authenticated**: Users must sign in to submit
- **Restricted**: Only specific domains or users can submit

### What happens to form data?

Form submissions are:
1. Saved to NetPad's platform database
2. Synced to your MongoDB collection
3. Available in the Data Explorer
4. Can be exported as JSON or CSV

### Can I embed forms on my website?

Yes! Published forms can be embedded using an iframe or JavaScript snippet. Find the embed code in the form's share settings.

### How many fields can I have in a form?

There's no hard limit, but forms with 50+ fields may have performance considerations. NetPad supports multi-page forms to organize large forms.

## Workflows

### What are workflows?

Workflows automate processes using a visual editor. You can trigger workflows from form submissions, schedules, webhooks, or manually.

### Do I need to know programming to use workflows?

No! Workflows use a visual drag-and-drop interface. However, understanding basic logic concepts (if/then, loops) is helpful.

### Can workflows call external APIs?

Yes! The HTTP Request node allows you to make API calls to any external service.

### How do I debug a workflow?

Use the execution history to view detailed logs for each workflow run. You can see which nodes executed, what data passed through, and any errors.

## Data & MongoDB

### Do I need to create MongoDB collections first?

No! NetPad will automatically create collections when the first document is inserted.

### Can I use my existing MongoDB database?

Yes! You can connect to any MongoDB instance. NetPad will work with your existing collections and data.

### How is my data secured?

- Connection strings are encrypted in the vault
- Field-level encryption is supported (MongoDB Queryable Encryption)
- All connections use TLS/SSL
- Role-based access control limits who can access what

### Can I export my data?

Yes! You can export data as JSON or CSV from the Data Explorer or form analytics.

### How do I import existing data?

Use the Data Import wizard in the Data Explorer. Upload CSV or XLSX files and map columns to MongoDB fields.

## Authentication

### What authentication methods are supported?

- Magic links (passwordless email)
- Passkeys (WebAuthn/FIDO2)
- OAuth (Google, GitHub, and more)

### Do I need to set up email for magic links?

Yes, you need SMTP configuration for magic links to work. See [Configuration](./configuration.md) for details.

### Can I disable certain authentication methods?

Yes, you can configure which authentication methods are available in your deployment.

## Organizations & Teams

### What are organizations?

Organizations allow you to group forms, workflows, and data. They support multi-tenant isolation and team collaboration.

### How do I invite team members?

Organization owners and admins can invite team members from the organization settings page.

### What are the different roles?

- **Owner**: Full control, can delete organization
- **Admin**: Can manage members and settings
- **Member**: Can create and edit forms/workflows
- **Viewer**: Read-only access

## Deployment

### Can I self-host NetPad?

Yes! NetPad is open-source and can be self-hosted. See the [Deployment Guide](../deployment/self-hosted.md) for details.

### What are the system requirements?

- Node.js 18+
- MongoDB connection
- 512MB+ RAM
- HTTPS certificate (for production)

### Can I deploy to Vercel?

Yes! Vercel is the recommended deployment platform. See [Vercel Deployment](../deployment/vercel.md) for details.

## Troubleshooting

### My form isn't saving submissions

- Check MongoDB connection in Connection Vault
- Verify collection permissions
- Check form is published
- Review error logs in browser console

### I can't connect to MongoDB

- Verify connection string is correct
- Check network access to MongoDB
- Verify database user has proper permissions
- Test connection in Connection Vault

### Workflows aren't executing

- Check workflow status (must be "active")
- Verify trigger configuration
- Review execution logs for errors
- Check node configurations

### Authentication isn't working

- Verify environment variables are set
- Check SMTP configuration for magic links
- Verify OAuth callback URLs match
- Check session secret is configured

## Getting Help

- **Documentation**: Browse the docs for detailed guides
- **GitHub Issues**: Report bugs or request features
- **GitHub Discussions**: Ask questions and get community help

For more specific help, see the relevant documentation sections:
- [Form Builder Guide](../forms/overview.md)
- [Workflow Guide](../workflows/overview.md)
- [Troubleshooting](../advanced/troubleshooting.md)
