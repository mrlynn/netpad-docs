# Webhooks

Send form data to external services when forms are submitted. Integrate with any system that can receive HTTP requests.

## What Are Webhooks?

Webhooks send an HTTP POST request to a URL you specify when a form is submitted. This allows you to:

- Integrate with third-party services
- Trigger automated workflows
- Sync data to other systems
- Send notifications
- Process submissions externally

## Configuration

### Webhook URL
The endpoint that will receive form data:
```
https://your-service.com/webhook/form-submission
```

### HTTP Method
Choose the HTTP method:
- **POST** (recommended)
- PUT
- PATCH

### Authentication
Secure your webhook endpoint:

#### API Key
Include API key in headers:
```
Authorization: Bearer your-api-key
```

#### Basic Auth
Username and password:
```
Authorization: Basic base64(username:password)
```

#### Custom Headers
Add any custom headers:
```
X-Custom-Header: value
X-API-Version: 1.0
```

## Payload Format

### Default Payload
Standard submission data:
```json
{
  "formId": "abc123",
  "formName": "Contact Form",
  "responseId": "resp_xyz789",
  "submittedAt": "2024-01-15T10:30:00Z",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello world"
  }
}
```

### Custom Payload
Configure custom payload structure:
```json
{
  "customer_name": "{{name}}",
  "customer_email": "{{email}}",
  "inquiry": "{{message}}",
  "source": "website_form",
  "timestamp": "{{submittedAt}}"
}
```

### Include Metadata
Optionally include:
- IP address
- User agent
- Referrer URL
- Form version
- Submission duration

## When Webhooks Fire

### On Submission
Default trigger when form is submitted:
- After validation passes
- After data saved to MongoDB
- Before success message shown

### On Specific Status
Trigger on status changes:
- New submission
- Updated submission
- Deleted submission

### Conditional Webhooks
Fire based on conditions:
```
Trigger when: accountType == "business"
```

## Testing Webhooks

### Test Mode
Send test payloads:
1. Click **Send Test**
2. Review payload
3. Check response
4. Verify endpoint received data

### Webhook Logs
View webhook history:
- Request sent
- Response received
- Status code
- Response time
- Errors

### Debug Mode
Enable detailed logging:
- Full request body
- Response body
- Headers sent/received
- Timing information

## Error Handling

### Retry Policy
Automatic retries on failure:
- **3 retries** by default
- Exponential backoff
- 1 min, 5 min, 15 min intervals

### Failure Notifications
Get notified on webhook failures:
- Email notification
- Dashboard alert
- Slack notification (if configured)

### Manual Retry
Retry failed webhooks manually:
1. Go to webhook logs
2. Find failed request
3. Click **Retry**

## Response Handling

### Success Response
Webhook expects 2xx status:
- 200 OK
- 201 Created
- 202 Accepted

### Failure Response
Non-2xx triggers retry:
- 4xx - Client error (won't retry)
- 5xx - Server error (will retry)
- Timeout - Will retry

### Response Data
Optionally store response:
- Log response body
- Use in subsequent actions
- Display to user

## Example Integrations

### Slack Notification
```json
{
  "text": "New form submission from {{name}}",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*New Contact Form Submission*\n• Name: {{name}}\n• Email: {{email}}\n• Message: {{message}}"
      }
    }
  ]
}
```

### Zapier
Send to Zapier webhook:
1. Create Zap with webhook trigger
2. Copy webhook URL
3. Paste in NetPad webhook config
4. Connect to any Zapier action

### Make (Integromat)
Connect to Make scenarios:
1. Create scenario with webhook
2. Copy webhook URL
3. Configure in NetPad
4. Build automation

### CRM Integration
Send leads to CRM:
```json
{
  "contact": {
    "firstName": "{{firstName}}",
    "lastName": "{{lastName}}",
    "email": "{{email}}",
    "phone": "{{phone}}",
    "source": "Website Form"
  }
}
```

:::tip
Store webhook URLs securely. Never expose them in client-side code. Use environment variables for sensitive endpoints.
:::

## Best Practices

1. **Secure endpoints** - Use HTTPS and authentication
2. **Handle failures gracefully** - Implement retry logic
3. **Validate payloads** - Verify data on receiving end
4. **Monitor webhooks** - Track success/failure rates
5. **Set timeouts** - Don't wait forever for responses

## Webhook Security

### Signature Verification
Verify webhook authenticity:
```javascript
const signature = req.headers['x-webhook-signature'];
const expectedSignature = crypto
  .createHmac('sha256', secret)
  .update(JSON.stringify(req.body))
  .digest('hex');

if (signature !== expectedSignature) {
  return res.status(401).send('Invalid signature');
}
```

### IP Whitelisting
Restrict to NetPad IPs if supported by your endpoint.

## Next Steps

- [Email Notifications](./email-notifications.md) - Send emails on submission
- [Form Publishing](../forms/publishing.md) - Publish forms
- [API Reference](../api/webhooks.md) - Webhook API documentation
