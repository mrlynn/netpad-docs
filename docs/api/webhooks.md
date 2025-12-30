# Webhooks

NetPad can send webhook events to external services.

## Webhook Events

### Form Submitted

Triggered when a form is submitted.

**Payload**:
```json
{
  "event": "form.submitted",
  "formId": "form_123",
  "submissionId": "sub_456",
  "data": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "metadata": {
    "submittedAt": "2024-01-15T10:00:00Z",
    "ipAddress": "192.168.1.1"
  }
}
```

### Workflow Completed

Triggered when a workflow completes.

**Payload**:
```json
{
  "event": "workflow.completed",
  "workflowId": "wf_123",
  "executionId": "exec_456",
  "status": "completed",
  "output": {...}
}
```

## Configuring Webhooks

### In Form Settings

1. **Open Form**: Go to form settings
2. **Webhooks**: Click "Webhooks" tab
3. **Add Webhook**: Enter webhook URL
4. **Save**: Webhook configured

### Webhook URL

Your webhook endpoint should:
- Accept POST requests
- Return 200 status for success
- Handle errors gracefully
- Be publicly accessible

## Webhook Security

### Signature Verification

(Optional) Verify webhook authenticity:
- **Signature Header**: `X-NetPad-Signature`
- **Algorithm**: HMAC-SHA256
- **Secret**: Configure in settings

### Retry Policy

- **Retries**: 3 attempts
- **Backoff**: Exponential backoff
- **Timeout**: 30 seconds per attempt

## Testing Webhooks

### Test Endpoint

Use a test service:
- **webhook.site**: Test webhook receiver
- **RequestBin**: Temporary webhook endpoint
- **Your Server**: Your own endpoint

### Verify Delivery

- Check webhook logs
- Verify payload received
- Confirm processing
