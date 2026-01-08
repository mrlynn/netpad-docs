# Integrations Overview

Connect NetPad to external services and automate your workflows. Send data to other systems, receive notifications, and extend functionality.

## Available Integrations

### Built-in Integrations

#### Webhooks
Send HTTP requests when forms are submitted:
- Any URL endpoint
- Custom payloads
- Authentication support
- [Learn more →](./webhooks.md)

#### Email Notifications
Automatic email on submission:
- Team notifications
- Respondent confirmations
- HTML templates
- [Learn more →](./email-notifications.md)

#### Vercel Integration
Deploy and host forms on Vercel:
- One-click deployment
- Automatic builds
- Edge functions
- [Learn more →](../deployment/vercel.md)

### Third-Party Platforms

#### Zapier
Connect to 5000+ apps:
- Use webhook trigger
- No code automation
- Extensive app library

#### Make (Integromat)
Visual automation:
- Complex workflows
- Data transformation
- Multi-step scenarios

#### n8n
Self-hosted automation:
- Open source
- Full control
- Custom nodes

## Integration Methods

### Webhooks
HTTP-based integration:
```
Form Submit → Webhook POST → Your Service
```
- Real-time
- Any endpoint
- Custom auth

### API
Programmatic access:
```
Your App → NetPad API → Data
```
- Full control
- Two-way sync
- Batch operations

### Embedding
Embed forms anywhere:
```html
<iframe src="https://forms.netpad.io/your-form"></iframe>
```
- No backend needed
- Responsive
- Customizable

## Common Integration Patterns

### CRM Sync
Form submission → CRM contact:
1. User submits contact form
2. Webhook sends to CRM API
3. New lead created in CRM

### Notification Chain
Form → Multiple notifications:
1. User submits form
2. Email sent to user (confirmation)
3. Slack notification to team
4. CRM updated
5. Task created in project management

### Data Pipeline
Form → Transform → Store:
1. User submits data
2. Webhook to serverless function
3. Data transformed/enriched
4. Stored in data warehouse

### Approval Workflow
Form → Review → Action:
1. Request form submitted
2. Notification to approver
3. Approver reviews in dashboard
4. Approval triggers next step

## Setting Up Integrations

### Step 1: Configure Source
Set up the trigger:
- Form submission
- Status change
- Scheduled event

### Step 2: Configure Destination
Where data goes:
- Webhook URL
- Email address
- API endpoint

### Step 3: Map Data
Match fields:
- Form field → Destination field
- Transformations
- Defaults

### Step 4: Test
Verify integration:
- Send test data
- Check destination
- Verify format

### Step 5: Monitor
Ongoing monitoring:
- Check logs
- Track errors
- Optimize

## Authentication

### API Keys
Simple token auth:
```
Authorization: Bearer sk_live_xxx
```

### OAuth
Third-party auth:
- Connect accounts
- Token refresh
- Scope-based access

### Webhooks
Secure webhooks:
- Signature verification
- IP allowlisting
- HTTPS required

## Best Practices

1. **Use HTTPS** - Always encrypt data in transit
2. **Handle errors** - Implement retry logic
3. **Monitor integrations** - Track success/failure
4. **Document flows** - Map your integrations
5. **Test thoroughly** - Verify before production

## Troubleshooting

### Integration Not Triggering
- Check integration is enabled
- Verify trigger conditions
- Review logs

### Data Not Arriving
- Check endpoint URL
- Verify authentication
- Test with webhook.site

### Format Issues
- Review payload structure
- Check field mappings
- Validate JSON

## Next Steps

- [Webhooks](./webhooks.md) - HTTP integrations
- [Email Notifications](./email-notifications.md) - Email automation
- [API Reference](../api/overview.md) - API documentation
