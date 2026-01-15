# Quick Start

Get up and running with NetPad in 5 minutes. This guide will walk you through creating your first form and connecting it to MongoDB.

## Step 1: Sign Up or Sign In

1. Visit your NetPad instance (or `http://localhost:3000` for local development)
2. Click "Sign Up" or use magic link authentication
3. Complete the authentication process

## Step 2: Create Your First Form

You can create a form in three ways:

### Option A: Start from Template (Fastest - Recommended)

1. **Navigate to Form Builder**:
   - Click "New Form" or navigate to `/builder`

2. **Open Template Gallery**:
   - Click the "Templates" tab
   - Browse templates by category (Business, Events, Feedback, etc.)

3. **Choose a Template**:
   - Click a template card to preview
   - Review fields and details
   - Click "Use Template" or "Customize"

4. **Configure Form**:
   - Name your form
   - Select target MongoDB collection
   - Customize fields as needed

:::tip
Templates provide pre-configured forms for common use cases. See the [Template Gallery Guide](../forms/template-gallery.md) for details.
:::

### Option B: Import from Schema

1. **Navigate to Form Builder**:
   - Click "New Form" or navigate to `/builder`

2. **Connect to MongoDB**:
   - Enter a MongoDB connection string, OR
   - Select from saved connections, OR
   - Use auto-provisioned Atlas cluster (if available)

3. **Import Schema**:
   - Click "Import from Collection"
   - Select a collection to auto-generate form fields
   - NetPad will create fields based on your MongoDB schema

4. **Customize Fields**:
   - Review and adjust field properties
   - Add or remove fields as needed

### Option C: Build from Scratch

1. **Navigate to Form Builder**:
   - Click "New Form" or navigate to `/builder`

2. **Connect to MongoDB**:
   - Enter a MongoDB connection string, OR
   - Select from saved connections, OR
   - Use auto-provisioned Atlas cluster (if available)

3. **Add Fields Manually**:
   - Drag fields from the sidebar
   - Configure field properties (name, type, validation)
   - Add more fields as needed

5. **Configure Form Settings**:
   - Set form name and description
   - Configure access control (public, authenticated, or restricted)
   - Customize theme (optional)

6. **Test Your Form**:
   - Use preview mode to test the form
   - Fill out the form and verify validation works

7. **Publish**:
   - Click "Publish" to make the form live
   - Copy the shareable URL
   - Share with users or embed on your website

## Step 3: Submit Test Data

1. Open the published form URL
2. Fill out the form
3. Submit the form
4. Data will be saved to your MongoDB collection

## Step 4: View Submissions

1. Navigate to your form in the dashboard
2. Click "View Responses" or "Analytics"
3. See all submissions in a table view
4. Export data as JSON or CSV if needed

## Example: Contact Form

Here's a simple example to get you started:

1. **Create Form**: Name it "Contact Form"
2. **Add Fields**:
   - Text field: "Name" (required)
   - Email field: "Email" (required, email validation)
   - Textarea: "Message" (required, min 10 characters)
3. **Connect to MongoDB**: 
   - Collection: `contacts`
   - Database: Your chosen database
4. **Publish**: Get your shareable URL
5. **Test**: Submit a test entry

## Next Steps

Now that you've created your first form, explore more features:

- [Template Gallery](../forms/template-gallery.md) - Browse more form templates
- [Form Builder Guide](../forms/building-forms.md) - Learn advanced form building
- [Field Types](../forms/field-types.md) - Explore all available field types
- [Workflows](../workflows/overview.md) - Automate processes with workflows
- [Data Explorer](../data-explorer/overview.md) - Browse and manage your data

## Common Questions

**Q: Do I need to create the MongoDB collection first?**  
A: No, NetPad will create the collection automatically when the first submission is made.

**Q: Can I edit a published form?**  
A: Yes, you can edit forms at any time. Changes are versioned, and you can revert if needed.

**Q: How do I restrict who can submit?**  
A: Configure access control in form settings: public (anyone), authenticated (must sign in), or restricted (domain/user whitelist).

For more help, see the [FAQ](./faq.md) or [Form Builder Documentation](../forms/overview.md).
