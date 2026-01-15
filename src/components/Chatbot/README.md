# NetPad Documentation Chatbot

A floating chatbot widget for the NetPad documentation site that redirects questions to the NetPad cloud instance chatbot page.

## Features

- 🎨 Modern, responsive UI that matches Docusaurus theme
- 💬 Question input interface
- 🔗 Redirects to NetPad instance with question pre-filled
- 📱 Mobile-responsive design
- 🌓 Dark mode support
- ⚡ Smooth animations and transitions
- 🆕 Opens in new tab to keep documentation accessible

## How It Works

Instead of making API calls, this chatbot:
1. Collects the user's question
2. Redirects to the NetPad instance chatbot page
3. Passes the question as a URL parameter
4. Opens in a new tab so users can continue browsing documentation

## Configuration

### NetPad Instance URL

Update the `NETPAD_INSTANCE_URL` constant in `src/components/Chatbot/index.jsx`:

```javascript
const NETPAD_INSTANCE_URL = 'https://netpad.io'; // Your NetPad instance URL
```

### Chatbot Page Path

Update the `CHATBOT_PAGE_PATH` to match your NetPad chatbot page route:

```javascript
const CHATBOT_PAGE_PATH = '/chatbot'; // Path to chatbot page on NetPad
```

Common paths might be:
- `/chatbot`
- `/ai/chat`
- `/conversational/chat`
- `/help/chat`

### URL Parameters

The component redirects with these URL parameters:

- `question` - The user's question
- `source` - Always set to "documentation"
- `url` - The current documentation page URL
- `page` - The current documentation page path

Example redirect URL:
```
https://netpad.io/chatbot?question=How+do+I+create+a+form&source=documentation&url=https://docs.netpad.io/docs/forms/overview&page=/docs/forms/overview
```

## NetPad Side Implementation

You'll need to create a chatbot page on your NetPad instance that:

1. **Accepts URL parameters** - Reads the `question` parameter from the URL
2. **Pre-fills the chatbot** - Automatically sends the question to the chatbot when the page loads
3. **Handles context** - Optionally uses the `source`, `url`, and `page` parameters for context

### Example NetPad Page Implementation

```javascript
// Example: pages/chatbot.js or app/chatbot/page.js (Next.js)
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ChatbotPage() {
  const searchParams = useSearchParams();
  const question = searchParams.get('question');
  const source = searchParams.get('source');
  const url = searchParams.get('url');
  
  useEffect(() => {
    if (question) {
      // Pre-fill and send the question to your chatbot
      // This depends on your chatbot implementation
      sendMessageToChatbot(question, {
        source,
        url,
      });
    }
  }, [question, source, url]);
  
  return (
    <div>
      {/* Your chatbot UI component */}
      <ChatbotComponent />
    </div>
  );
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

### Change Redirect Behavior

By default, the chatbot opens in a new tab. To redirect in the same window, update `handleSendMessage`:

```javascript
// Change from:
window.open(redirectUrl, '_blank', 'noopener,noreferrer');

// To:
window.location.href = redirectUrl;
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

4. Enter a question and submit

5. Verify it redirects to your NetPad instance with the question parameter

## Troubleshooting

### Chatbot Not Appearing

- Check that `CHATBOT_ENABLED` is set to `true`
- Verify the Root component is properly swizzled
- Check browser console for errors

### Redirect Not Working

- Verify `NETPAD_INSTANCE_URL` is correct
- Check that `CHATBOT_PAGE_PATH` matches your NetPad route
- Ensure the chatbot page exists on your NetPad instance
- Check browser console for errors

### URL Parameters Not Received

- Verify the NetPad chatbot page reads URL search parameters
- Check that the parameter names match (`question`, `source`, `url`, `page`)
- Test the redirect URL manually in your browser

### Styling Issues

- Ensure CSS modules are being loaded correctly
- Check for CSS conflicts with Docusaurus theme
- Verify dark mode variables are available

## NetPad Side Requirements

To complete the integration, you need to:

1. **Create a chatbot page** on your NetPad instance (e.g., `/chatbot`)
2. **Read URL parameters** - Extract the `question` parameter
3. **Pre-fill chatbot** - Automatically send the question when the page loads
4. **Handle context** - Use `source`, `url`, and `page` parameters for better context

The chatbot page should be accessible without authentication (or handle authentication gracefully) so users from the documentation site can access it.
