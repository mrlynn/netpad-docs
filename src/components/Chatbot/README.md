# NetPad Documentation Chatbot

A floating chatbot widget for the NetPad documentation site that forwards questions to the NetPad cloud instance chatbot.

## Features

- 🎨 Modern, responsive UI that matches Docusaurus theme
- 💬 Real-time chat interface with message history
- 🔄 Loading states and error handling
- 📱 Mobile-responsive design
- 🌓 Dark mode support
- ⚡ Smooth animations and transitions

## Configuration

### API Endpoint

Update the `CHATBOT_API_URL` constant in `src/components/Chatbot/index.jsx`:

```javascript
const CHATBOT_API_URL = 'https://netpad.io/api/chatbot'; // Your actual endpoint
```

### Common API Endpoints

Depending on your NetPad instance, the chatbot API might be at:

- `https://netpad.io/api/chatbot`
- `https://netpad.io/api/ai/chat`
- `https://netpad.io/api/conversational/chat`
- `https://netpad.io/api/chat`

### API Request Format

The component sends POST requests with this structure:

```json
{
  "message": "User's question",
  "conversationId": "docs-chatbot",
  "context": {
    "source": "documentation",
    "url": "Current page URL",
    "page": "Current page path"
  }
}
```

### API Response Format

The component expects responses in one of these formats:

```json
{
  "message": "Bot response text"
}
```

Or:

```json
{
  "response": "Bot response text"
}
```

Or:

```json
{
  "text": "Bot response text"
}
```

### Authentication

If your chatbot API requires authentication, uncomment and update the Authorization header in the `handleSendMessage` function:

```javascript
headers: {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_API_KEY',
}
```

## Customization

### Disable the Chatbot

Set `CHATBOT_ENABLED` to `false`:

```javascript
const CHATBOT_ENABLED = false;
```

### Change Placeholder Text

Update the default placeholder in the Root component:

```javascript
<Chatbot placeholder="Your custom placeholder text..." />
```

### Styling

Modify `src/components/Chatbot/styles.module.css` to customize:

- Colors and themes
- Sizes and spacing
- Animations
- Responsive breakpoints

## Testing

1. Start the Docusaurus dev server:
   ```bash
   npm start
   ```

2. The chatbot button should appear in the bottom-right corner

3. Click to open the chat window

4. Send a test message to verify API connectivity

## Troubleshooting

### Chatbot Not Appearing

- Check that `CHATBOT_ENABLED` is set to `true`
- Verify the Root component is properly swizzled
- Check browser console for errors

### API Errors

- Verify the API endpoint URL is correct
- Check CORS settings on your NetPad instance
- Ensure authentication headers are correct (if required)
- Check the Network tab in browser DevTools for request/response details

### Styling Issues

- Ensure CSS modules are being loaded correctly
- Check for CSS conflicts with Docusaurus theme
- Verify dark mode variables are available

## Integration with NetPad Cloud

This chatbot forwards questions to your NetPad cloud instance. Make sure:

1. Your NetPad instance has a chatbot API endpoint
2. The endpoint accepts POST requests with the expected format
3. CORS is configured to allow requests from your documentation domain
4. Authentication is set up if required

For more information about the NetPad chatbot API, refer to your NetPad instance documentation or contact support.
