# Email Notifications

Send automatic email notifications when forms are submitted. Notify your team, confirm with submitters, or trigger email workflows.

## Types of Notifications

### Admin Notifications
Notify your team of new submissions:
- Send to multiple recipients
- Include submission details
- Customizable content

### Respondent Confirmations
Confirm receipt to form submitters:
- Auto-send to email field
- Personalized thank you message
- Include submission summary

### Conditional Notifications
Send based on form values:
- Different recipients based on selection
- Priority notifications
- Escalation workflows

## Configuration

### Recipients

#### Static Recipients
Fixed email addresses:
```
admin@company.com, support@company.com
```

#### Dynamic Recipients
From form field:
```
{{email}}
```

#### Conditional Recipients
Based on form values:
```
If department == "Sales": sales@company.com
If department == "Support": support@company.com
```

### Subject Line
Email subject with variables:
```
New submission from {{name}} - {{formName}}
```

### Email Body
HTML or plain text content:
```html
<h2>New Form Submission</h2>
<p>You have received a new submission from {{name}}.</p>

<h3>Details:</h3>
<ul>
  <li><strong>Name:</strong> {{name}}</li>
  <li><strong>Email:</strong> {{email}}</li>
  <li><strong>Message:</strong> {{message}}</li>
</ul>

<p>Submitted at: {{submittedAt}}</p>
```

## Available Variables

### Form Fields
Use any form field:
```
{{fieldName}}
{{nested.field.path}}
```

### Metadata
System information:
- `{{formId}}` - Form identifier
- `{{formName}}` - Form display name
- `{{responseId}}` - Submission ID
- `{{submittedAt}}` - Submission timestamp

### Formatting
Format values:
```
{{date | formatDate:"MMMM D, YYYY"}}
{{amount | currency:"USD"}}
```

## Email Templates

### Simple Notification
```
Subject: New {{formName}} submission

You have received a new submission.

Name: {{name}}
Email: {{email}}

View details: {{responseUrl}}
```

### Rich HTML Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .header { background: #3b82f6; color: white; padding: 20px; }
    .content { padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Form Submission</h1>
  </div>
  <div class="content">
    <div class="field">
      <span class="label">Name:</span> {{name}}
    </div>
    <div class="field">
      <span class="label">Email:</span> {{email}}
    </div>
    <div class="field">
      <span class="label">Message:</span>
      <p>{{message}}</p>
    </div>
  </div>
</body>
</html>
```

### Respondent Confirmation
```
Subject: Thank you for your submission, {{name}}!

Dear {{name}},

Thank you for contacting us. We have received your message and will respond within 24 hours.

Your reference number is: {{responseId}}

What you submitted:
- Name: {{name}}
- Email: {{email}}
- Message: {{message}}

Best regards,
The Team
```

## Conditional Logic

### Based on Field Values
```
Send to: sales@company.com
When: inquiryType == "Sales"
```

### Multiple Conditions
```
Send to: urgent@company.com
When: priority == "High" AND department == "Support"
```

### Different Templates
Use different templates based on conditions:
- Welcome email for new customers
- Support ticket confirmation
- Order confirmation

## Reply-To Configuration

Set reply address:

### Static Reply-To
Fixed address:
```
Reply-To: support@company.com
```

### Dynamic Reply-To
From form field:
```
Reply-To: {{email}}
```

Allows direct replies to submitter.

## Attachments

Include attachments:

### File Upload Fields
Attach uploaded files:
- Include in notification
- As attachment or link
- Size limits apply

### Generated Documents
Attach generated files:
- PDF summary
- CSV data export

:::tip
Be careful with file attachments. Large files may cause delivery issues. Consider linking to files instead of attaching.
:::

## Delivery Settings

### Send Timing
When to send:
- **Immediately** - On submission
- **Delayed** - After specified time
- **Scheduled** - At specific time

### Rate Limiting
Prevent email flooding:
- Maximum per hour
- Batch notifications
- Digest option

## Testing

### Send Test Email
Test your notification:
1. Configure notification
2. Click **Send Test**
3. Enter test recipient
4. Review received email

### Preview
Preview email content:
- See formatted HTML
- Check variable substitution
- Verify layout

## Troubleshooting

### Email Not Received
- Check spam folder
- Verify recipient address
- Check notification logs
- Confirm notification enabled

### Variables Not Replaced
- Check field names match
- Verify syntax (`{{fieldName}}`)
- Ensure field has value

### Formatting Issues
- Test across email clients
- Use inline CSS
- Keep HTML simple

## Best Practices

1. **Clear subject lines** - Include form name and key info
2. **Mobile-friendly** - Many read on phones
3. **Test thoroughly** - Check different scenarios
4. **Don't over-notify** - Avoid email fatigue
5. **Include unsubscribe** - For marketing emails

## Next Steps

- [Webhooks](./webhooks.md) - Send data to external services
- [Form Publishing](../forms/publishing.md) - Publish forms
- [Form Variables](../forms/form-variables.md) - Use variables in emails
