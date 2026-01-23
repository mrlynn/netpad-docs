# NetPad Quickstart: Your First Form in 15 Minutes

Build a feedback form that works as a traditional form *and* a conversational chat interface—with email notifications and data capture.

---

## What You'll Build

A customer feedback form that:
- Captures name, email, rating, and comments
- Uses conditional logic (asks follow-up based on rating)
- Deploys as traditional form AND conversational interface
- Sends email notification on submission
- Stores responses in your Data Explorer

**Time:** 15 minutes
**Prerequisites:** NetPad account (already logged in)
**Difficulty:** Beginner

---

<!-- ## The End Result

| Traditional Form | Conversational Interface |
|------------------|--------------------------|
| ![Traditional form view](/img/quickstart-form.png) | ![Chat interface](/img/quickstart-chat.png) | -->

Both capture identical data. Your users choose their preferred experience.

---

# Let's Build It

---

## Step 1: Create a New Form (3 minutes)

### 1.1 Start a new form

From your NetPad dashboard:

1. Click **"+ New Form"** in the top right
2. Select **"Blank Form"** (we'll build from scratch)
3. Name it: `Customer Feedback`
4. Click **"Create"**

---

### 1.2 Add your fields

You're now in the form builder. Add these 5 fields:

**Field 1: Name**
- Click **"+ Add Field"**
- Select **"Short Text"**
- Label: `Your Name`
- Toggle **"Required"** on
- Click **"Save Field"**

**Field 2: Email**
- Click **"+ Add Field"**
- Select **"Email"**
- Label: `Email Address`
- Toggle **"Required"** on
- Click **"Save Field"**

**Field 3: Rating**
- Click **"+ Add Field"**
- Select **"Dropdown"**
- Label: `How would you rate your experience?`
- Add these options:
  - `5 - Excellent`
  - `4 - Good`
  - `3 - Okay`
  - `2 - Poor`
  - `1 - Terrible`
- Toggle **"Required"** on
- Click **"Save Field"**

**Field 4: Feedback**
- Click **"+ Add Field"**
- Select **"Long Text"**
- Label: `Tell us more`
- Placeholder: `What's on your mind?`
- Leave as optional
- Click **"Save Field"**

**Field 5: Recommend (Yes/No)**
- Click **"+ Add Field"**
- Select **"Dropdown"** (or **"Radio"** if you prefer)
- Label: `Would you recommend us to a friend?`
- Add options:
  - `Yes, definitely`
  - `Maybe`
  - `No`
- Toggle **"Required"** on
- Click **"Save Field"**

---

### 1.3 Add conditional logic

Let's make the form smarter. If someone rates us poorly (1 or 2), we'll ask what we could do better.

**Add a conditional field:**

1. Click **"+ Add Field"**
2. Select **"Long Text"**
3. Label: `What could we do better?`
4. Placeholder: `We'd love to improve...`
5. Click the **"Logic"** tab (or **"Conditional"** button)
6. Set:
   - **Show this field when:**
   - Field: `How would you rate your experience?`
   - Operator: `is one of`
   - Values: `2 - Poor`, `1 - Terrible`
7. Click **"Save Field"**

Now this field only appears when someone gives a low rating.

---

### Checkpoint

Your form should have 6 fields:
1. Your Name (required)
2. Email Address (required)
3. How would you rate your experience? (required)
4. Tell us more (optional)
5. Would you recommend us? (required)
6. What could we do better? (conditional, shows on low ratings)

**Time check:** ~3 minutes elapsed.

---

## Step 2: Enable Conversational Mode (3 minutes)

Now let's turn this form into a conversational experience.

### 2.1 Open conversation settings

1. Click the **"Settings"** tab in the form builder
2. Find **"Conversational Mode"** section
3. Toggle **"Enable Conversational Interface"** on

---

### 2.2 Configure the conversation

Once enabled, you'll see conversation options:

**Greeting Message:**
```
Hey! Thanks for taking a moment to share your feedback. Let's start with your name—what should I call you?
```

**Closing Message:**
```
Thanks so much for your feedback! We really appreciate you taking the time. Have a great day!
```

**Conversation Style:** Select `Friendly`

---

### 2.3 Preview both interfaces

Click **"Preview"** in the top right. You'll see two tabs:

- **Form View** — Traditional fields, all visible at once
- **Chat View** — Conversational, one question at a time

Try both:
1. In Form View, fill out the fields normally
2. In Chat View, have a conversation—watch how it asks one question at a time

Notice: The conditional field ("What could we do better?") appears in both modes only when you select a low rating.

---

### Checkpoint

You now have:
- A 6-field form with conditional logic
- Both traditional and conversational interfaces
- Custom greeting and closing messages

**Time check:** ~6 minutes elapsed.

---

## Step 3: Add Email Notification (4 minutes)

Let's send an email whenever someone submits feedback.

### 3.1 Open the Workflows tab

1. In your form, click the **"Workflows"** tab
2. Click **"+ Add Workflow"**
3. Name it: `Feedback Notification`

---

### 3.2 Configure the trigger

The trigger is already set: **"When form is submitted"**

You'll see this displayed at the top of the workflow builder.

---

### 3.3 Add an email action

1. Click **"+ Add Action"**
2. Select **"Send Email"**
3. Configure:

**To:**
```
your-email@yourcompany.com
```
(Use your real email so you can test it!)

**Subject:**
```
New Feedback: {{rating}} rating from {{name}}
```

**Body:**
```
You received new customer feedback!

From: {{name}} ({{email}})
Rating: {{rating}}
Would recommend: {{recommend}}

Their feedback:
{{feedback}}

{{#if improvement_feedback}}
What could be better:
{{improvement_feedback}}
{{/if}}

---
View all responses in NetPad Data Explorer.
```

---

### 3.4 Map your fields

The email template uses variables. Map them to your form fields:

| Variable | Maps to Field |
|----------|---------------|
| `{{name}}` | Your Name |
| `{{email}}` | Email Address |
| `{{rating}}` | How would you rate... |
| `{{feedback}}` | Tell us more |
| `{{recommend}}` | Would you recommend... |
| `{{improvement_feedback}}` | What could we do better? |

NetPad may auto-detect these. If not, click each variable and select the matching field.

---

### 3.5 Save the workflow

1. Click **"Save Workflow"**
2. Toggle the workflow **"Active"**

---

### Checkpoint

You now have:
- Form with conditional logic
- Traditional + conversational interfaces
- Email workflow that triggers on submission

**Time check:** ~10 minutes elapsed.

---

## Step 4: Deploy and Test (3 minutes)

### 4.1 Publish your form

1. Click **"Publish"** in the top right
2. Confirm the publish dialog

Your form is now live!

---

### 4.2 Get your links

After publishing, you'll see your form URLs:

**Traditional Form:**
```
https://forms.netpad.io/your-org/customer-feedback
```

**Conversational Interface:**
```
https://forms.netpad.io/your-org/customer-feedback?mode=conversation
```

Copy both links.

---

### 4.3 Submit a test response

Open the **conversational link** in a new tab. Let's submit real feedback:

1. The chat greets you: *"Hey! Thanks for taking a moment..."*
2. Enter your name
3. Enter your email
4. Select a rating (try **"2 - Poor"** to see the conditional question)
5. Answer the follow-up: "What could we do better?"
6. Answer the recommendation question
7. See the closing message

---

### 4.4 Check your email

Within a few seconds, you should receive an email with the feedback details.

Your workflow is working!

---

### Checkpoint

You now have:
- Form published and live
- Test submission completed via conversation
- Email notification received

**Time check:** ~13 minutes elapsed.

---

## Step 5: View in Data Explorer (2 minutes)

### 5.1 Open Data Explorer

1. Go back to your NetPad dashboard
2. Click **"Data Explorer"** in the left sidebar
3. Select your form: `Customer Feedback`

---

### 5.2 See your submission

Your test submission appears in the table:

| Name | Email | Rating | Recommend | Submitted |
|------|-------|--------|-----------|-----------|
| [Your name] | [Your email] | 2 - Poor | Maybe | Just now |

Click the row to expand and see all fields, including the conditional "What could we do better?" response.

---

### 5.3 Export or filter (optional)

From here you can:
- **Export** to CSV or JSON
- **Filter** by rating, date, or any field
- **Search** for specific submissions

---

## You Did It!

**In 15 minutes, you built:**

- A feedback form with 6 fields
- Conditional logic (follow-up on low ratings)
- Two interfaces (traditional + conversational)
- Email notifications on submission
- Data capture with Data Explorer access

---

## Quick Reference: The Complete Form Config

If you prefer code, here's the complete configuration you just built:

```json
{
  "name": "Customer Feedback",
  "slug": "customer-feedback",
  "fields": [
    {
      "path": "name",
      "label": "Your Name",
      "type": "short_text",
      "required": true
    },
    {
      "path": "email",
      "label": "Email Address",
      "type": "email",
      "required": true
    },
    {
      "path": "rating",
      "label": "How would you rate your experience?",
      "type": "dropdown",
      "required": true,
      "options": [
        { "label": "5 - Excellent", "value": "5" },
        { "label": "4 - Good", "value": "4" },
        { "label": "3 - Okay", "value": "3" },
        { "label": "2 - Poor", "value": "2" },
        { "label": "1 - Terrible", "value": "1" }
      ]
    },
    {
      "path": "feedback",
      "label": "Tell us more",
      "type": "long_text",
      "required": false,
      "placeholder": "What's on your mind?"
    },
    {
      "path": "recommend",
      "label": "Would you recommend us to a friend?",
      "type": "dropdown",
      "required": true,
      "options": [
        { "label": "Yes, definitely", "value": "yes" },
        { "label": "Maybe", "value": "maybe" },
        { "label": "No", "value": "no" }
      ]
    },
    {
      "path": "improvement_feedback",
      "label": "What could we do better?",
      "type": "long_text",
      "required": false,
      "placeholder": "We'd love to improve...",
      "conditionalLogic": {
        "action": "show",
        "logicType": "any",
        "conditions": [
          { "field": "rating", "operator": "equals", "value": "2" },
          { "field": "rating", "operator": "equals", "value": "1" }
        ]
      }
    }
  ],
  "conversational": {
    "enabled": true,
    "greeting": "Hey! Thanks for taking a moment to share your feedback. Let's start with your name—what should I call you?",
    "closing": "Thanks so much for your feedback! We really appreciate you taking the time. Have a great day!",
    "persona": {
      "style": "friendly"
    }
  },
  "workflow": {
    "name": "Feedback Notification",
    "trigger": {
      "type": "form_submission",
      "formSlug": "customer-feedback"
    },
    "actions": [
      {
        "type": "send_email",
        "config": {
          "to": "your-email@yourcompany.com",
          "subject": "New Feedback: {{rating}} rating from {{name}}",
          "body": "You received new customer feedback!\n\nFrom: {{name}} ({{email}})\nRating: {{rating}}\nWould recommend: {{recommend}}\n\nTheir feedback:\n{{feedback}}\n\n{{#if improvement_feedback}}What could be better:\n{{improvement_feedback}}{{/if}}"
        }
      }
    ]
  }
}
```

---

## What's Next?

Now that you've built your first form, try these:

### Customize further
- Add your brand colors in **Form Settings → Theme**
- Add a logo to the form header
- Customize the submit button text

### Embed on your website

```html
<!-- Traditional form -->
<iframe
  src="https://forms.netpad.io/your-org/customer-feedback?embed=true"
  width="100%"
  height="500"
  frameborder="0">
</iframe>

<!-- Conversational (chat widget) -->
<iframe
  src="https://forms.netpad.io/your-org/customer-feedback?embed=true&mode=conversation"
  width="400"
  height="600"
  frameborder="0">
</iframe>
```

### Explore more

- [Add Slack notifications](../workflows/templates.md) - Connect to Slack for real-time alerts
- [Build a multi-page form](../forms/multi-page-forms.md) - Organize complex forms into steps
- [Use @netpad/forms package](../api/forms.md) - Embed forms in your React app
- [AI-assisted building with MCP](../developer/mcp-server.md) - Use Claude to build forms

---

## Need Help?

- [Full documentation](./introduction.md)
- [FAQ](./faq.md)
- [Form Builder Guide](../forms/building-forms.md)

---

**Congrats on building your first NetPad form!**
