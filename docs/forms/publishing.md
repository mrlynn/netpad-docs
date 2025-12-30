# Publishing Forms

Once you've built and tested your form, it's time to publish it and make it accessible to users.

## Publishing Your Form

### Before Publishing

1. **Review Your Form**:
   - Test all fields and validation
   - Verify conditional logic works
   - Check form appearance and layout
   - Review form settings

2. **Configure Access Control**:
   - Decide who can submit (public, authenticated, restricted)
   - Set up domain restrictions if needed
   - Configure user whitelist if using restricted access

3. **Set Up Redirects**:
   - Configure thank you message
   - Set redirect URL if needed
   - Test redirect behavior

### Publishing Steps

1. **Click "Publish" Button**:
   - Located in the top toolbar
   - Form status changes from "Draft" to "Published"

2. **Get Shareable URL**:
   - URL is generated automatically
   - Copy URL to share
   - URL format: `https://yourdomain.com/forms/[formId]`

3. **Verify Publication**:
   - Form is now live and accessible
   - Test the published form URL
   - Verify submissions are being collected

## Form Status

### Draft Mode

- **Not Accessible**: Form not available publicly
- **Editable**: Can make changes freely
- **No Submissions**: Cannot receive submissions
- **Team Only**: Visible only to you and team members

### Published Mode

- **Live**: Form accessible via shareable URL
- **Collecting Data**: Receiving submissions
- **Editable**: Can still edit (changes are versioned)
- **Public/Private**: Based on access control settings

## Sharing Your Form

### Shareable URL

Every published form gets a unique URL:
```
https://yourdomain.com/forms/form_abc123
```

**Features**:
- Direct link to form
- Can be shared via email, social media, etc.
- Works on any device
- Responsive design

### Embedding Forms

Embed forms on your website:

1. **Get Embed Code**:
   - Click "Share" button
   - Select "Embed" tab
   - Copy embed code

2. **Iframe Embed**:
   ```html
   <iframe 
     src="https://yourdomain.com/forms/form_abc123" 
     width="100%" 
     height="600"
     frameborder="0">
   </iframe>
   ```

3. **JavaScript Embed** (if available):
   ```html
   <div id="netpad-form-form_abc123"></div>
   <script src="https://yourdomain.com/embed.js"></script>
   ```

### URL Pre-filling

Pre-populate form fields via URL parameters:

```
https://yourdomain.com/forms/form_abc123?name=John&email=john@example.com
```

**Configuration**:
- Enable URL pre-fill in form settings
- Map query parameters to field IDs
- Set default values if parameter missing

## Access Control

### Public Forms

Anyone with the URL can submit:
- No authentication required
- Accessible to everyone
- Best for: Surveys, contact forms, public registrations

**Configuration**:
- Set access control to "Public"
- No additional setup needed

### Authenticated Forms

Users must sign in to submit:
- Requires NetPad account
- Tracks who submitted
- Best for: Internal forms, member-only content

**Configuration**:
- Set access control to "Authenticated"
- Users will be prompted to sign in
- Submission linked to user account

### Restricted Forms

Only specific users/domains can submit:
- Domain whitelist
- User email whitelist
- Best for: Private forms, exclusive access

**Configuration**:
- Set access control to "Restricted"
- Add allowed domains or email addresses
- Unauthorized users see access denied message

## Form Settings

### General Settings

- **Form Name**: Display name
- **Description**: Shown to users
- **Thank You Message**: Message after submission
- **Redirect URL**: Where to redirect after submission

### Appearance

- **Theme**: Color scheme
- **Logo**: Organization logo
- **Background**: Background color or image
- **Custom CSS**: Advanced styling (if enabled)

### Advanced Settings

- **Bot Protection**: Enable Turnstile CAPTCHA
- **Webhooks**: Configure webhook URLs
- **Submission Limit**: Max submissions per user/IP
- **Auto-Close**: Close form after date/number of submissions

## Version Control

### Version History

All form changes are tracked:
- View version history
- See what changed in each version
- Compare versions side-by-side

### Reverting Changes

If something goes wrong:
1. Go to version history
2. Select previous version
3. Click "Revert to This Version"
4. Form returns to selected version

### Publishing Updates

When you edit a published form:
- Changes are saved as new version
- Form remains live during editing
- New version published when you click "Publish"
- Previous version remains in history

## Unpublishing Forms

### Unpublish a Form

1. **Click "Unpublish"**:
   - Form returns to draft mode
   - No longer accessible via URL
   - Existing submissions preserved

2. **Effects**:
   - Form URL returns 404
   - No new submissions accepted
   - Form still visible in dashboard
   - Can republish anytime

### Archiving Forms

For forms you no longer need:
1. Unpublish the form
2. Archive from dashboard
3. Form hidden from main list
4. Can restore if needed

## Analytics & Monitoring

### View Submissions

- **Dashboard**: See submission count
- **Responses Page**: View all submissions
- **Export**: Download as JSON or CSV

### Submission Trends

- **Chart View**: See submissions over time
- **Peak Times**: Identify busy periods
- **Completion Rates**: Track form performance

### Field Analytics

- **Completion Rates**: See which fields are skipped
- **Response Distribution**: View answer patterns
- **Average Time**: See how long forms take

See [Analytics](./analytics.md) for more details.

## Best Practices

### Before Publishing

1. **Test Thoroughly**: Test all fields, validation, and logic
2. **Review Settings**: Check access control and appearance
3. **Set Up Monitoring**: Configure analytics and notifications
4. **Prepare Support**: Have help documentation ready

### After Publishing

1. **Monitor Submissions**: Watch for issues or errors
2. **Review Analytics**: Track form performance
3. **Gather Feedback**: Collect user feedback
4. **Iterate**: Make improvements based on data

### Security

1. **Access Control**: Use appropriate access levels
2. **Bot Protection**: Enable CAPTCHA for public forms
3. **Rate Limiting**: Configure submission limits
4. **Data Privacy**: Follow privacy best practices

## Troubleshooting

**Form Not Accessible**:
- Verify form is published (not draft)
- Check access control settings
- Verify URL is correct

**Submissions Not Saving**:
- Check MongoDB connection
- Verify collection permissions
- Review error logs

**Embed Not Working**:
- Verify embed code is correct
- Check iframe permissions
- Test in different browsers

## Next Steps

- [Analytics](./analytics.md) - Track form performance
- [Building Forms](./building-forms.md) - Learn form building
- [Workflows](../workflows/overview.md) - Automate with workflows
