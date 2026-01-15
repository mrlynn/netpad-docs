# NetPad Chatbot Page Implementation Example

This document provides example implementations for the NetPad side chatbot page that receives questions from the documentation site.

## URL Parameters

The documentation chatbot redirects with these URL parameters:

- `question` - The user's question (required)
- `source` - Always "documentation"
- `url` - The documentation page URL where the question was asked
- `page` - The documentation page path

Example URL:
```
https://netpad.io/chatbot?question=How+do+I+create+a+form&source=documentation&url=https://docs.netpad.io/docs/forms/overview&page=/docs/forms/overview
```

## Next.js App Router Implementation

```tsx
// app/chatbot/page.tsx or app/chatbot/page.jsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import YourChatbotComponent from '@/components/Chatbot'; // Your existing chatbot component

export default function ChatbotPage() {
  const searchParams = useSearchParams();
  const [question, setQuestion] = useState<string | null>(null);
  const [context, setContext] = useState<any>(null);

  useEffect(() => {
    // Read URL parameters
    const questionParam = searchParams.get('question');
    const source = searchParams.get('source');
    const url = searchParams.get('url');
    const page = searchParams.get('page');

    if (questionParam) {
      setQuestion(questionParam);
      setContext({
        source: source || 'documentation',
        url: url || '',
        page: page || '',
      });

      // Optionally, automatically send the question to your chatbot
      // This depends on your chatbot implementation
      // sendMessageToChatbot(questionParam, { source, url, page });
    }
  }, [searchParams]);

  return (
    <div className="chatbot-page">
      <div className="container">
        <h1>NetPad Assistant</h1>
        
        {question && (
          <div className="pre-filled-question">
            <p>Question from documentation:</p>
            <blockquote>{question}</blockquote>
          </div>
        )}

        {/* Your existing chatbot component */}
        <YourChatbotComponent 
          initialQuestion={question}
          context={context}
        />
      </div>
    </div>
  );
}
```

## Next.js Pages Router Implementation

```tsx
// pages/chatbot.tsx or pages/chatbot.jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import YourChatbotComponent from '@/components/Chatbot'; // Your existing chatbot component

export default function ChatbotPage() {
  const router = useRouter();
  const [question, setQuestion] = useState<string | null>(null);
  const [context, setContext] = useState<any>(null);

  useEffect(() => {
    if (router.isReady) {
      const { question: questionParam, source, url, page } = router.query;

      if (questionParam && typeof questionParam === 'string') {
        setQuestion(questionParam);
        setContext({
          source: source || 'documentation',
          url: url || '',
          page: page || '',
        });

        // Optionally, automatically send the question to your chatbot
        // sendMessageToChatbot(questionParam, { source, url, page });
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div className="chatbot-page">
      <div className="container">
        <h1>NetPad Assistant</h1>
        
        {question && (
          <div className="pre-filled-question">
            <p>Question from documentation:</p>
            <blockquote>{question}</blockquote>
          </div>
        )}

        {/* Your existing chatbot component */}
        <YourChatbotComponent 
          initialQuestion={question}
          context={context}
        />
      </div>
    </div>
  );
}
```

## React Router Implementation

```tsx
// routes/Chatbot.tsx or components/ChatbotPage.tsx
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import YourChatbotComponent from '@/components/Chatbot'; // Your existing chatbot component

export default function ChatbotPage() {
  const [searchParams] = useSearchParams();
  const [question, setQuestion] = useState<string | null>(null);
  const [context, setContext] = useState<any>(null);

  useEffect(() => {
    const questionParam = searchParams.get('question');
    const source = searchParams.get('source');
    const url = searchParams.get('url');
    const page = searchParams.get('page');

    if (questionParam) {
      setQuestion(questionParam);
      setContext({
        source: source || 'documentation',
        url: url || '',
        page: page || '',
      });

      // Optionally, automatically send the question to your chatbot
      // sendMessageToChatbot(questionParam, { source, url, page });
    }
  }, [searchParams]);

  return (
    <div className="chatbot-page">
      <div className="container">
        <h1>NetPad Assistant</h1>
        
        {question && (
          <div className="pre-filled-question">
            <p>Question from documentation:</p>
            <blockquote>{question}</blockquote>
          </div>
        )}

        {/* Your existing chatbot component */}
        <YourChatbotComponent 
          initialQuestion={question}
          context={context}
        />
      </div>
    </div>
  );
}
```

## Integration with Existing Chatbot

If you already have a chatbot component, you can modify it to accept an initial question:

```tsx
// Example: Modifying your existing chatbot component
interface ChatbotProps {
  initialQuestion?: string | null;
  context?: {
    source?: string;
    url?: string;
    page?: string;
  };
}

export default function YourChatbotComponent({ 
  initialQuestion, 
  context 
}: ChatbotProps) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (initialQuestion) {
      // Pre-fill the input or automatically send
      setInputValue(initialQuestion);
      
      // Or automatically send the question
      // handleSendMessage(initialQuestion, context);
    }
  }, [initialQuestion]);

  // ... rest of your chatbot implementation
}
```

## Automatic Question Sending

If you want to automatically send the question when the page loads:

```tsx
useEffect(() => {
  if (question) {
    // Wait for chatbot to be ready, then send
    setTimeout(() => {
      sendMessageToChatbot(question, {
        source: context?.source,
        url: context?.url,
        page: context?.page,
        metadata: {
          fromDocumentation: true,
          documentationUrl: context?.url,
        }
      });
    }, 500); // Small delay to ensure chatbot is initialized
  }
}, [question, context]);
```

## Styling the Pre-filled Question

```css
.pre-filled-question {
  padding: 16px;
  margin-bottom: 24px;
  background: var(--ifm-color-info-lightest);
  border-left: 4px solid var(--ifm-color-primary);
  border-radius: 8px;
}

.pre-filled-question p {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--ifm-color-content);
}

.pre-filled-question blockquote {
  margin: 0;
  padding: 12px;
  background: var(--ifm-background-color);
  border-radius: 4px;
  font-size: 15px;
  font-style: italic;
  color: var(--ifm-color-content);
}
```

## Testing

1. Test the redirect URL manually:
   ```
   https://netpad.io/chatbot?question=test+question&source=documentation
   ```

2. Verify parameters are being read correctly

3. Test with your existing chatbot component

4. Ensure the question is automatically sent or pre-filled

## Security Considerations

- **URL Encoding**: The documentation site URL-encodes the question, so decode it properly:
  ```tsx
  const question = decodeURIComponent(questionParam || '');
  ```

- **XSS Prevention**: Sanitize the question before displaying or sending:
  ```tsx
  import DOMPurify from 'dompurify';
  const safeQuestion = DOMPurify.sanitize(question);
  ```

- **Rate Limiting**: Consider rate limiting for questions coming from the documentation site

- **Authentication**: Decide if the chatbot page should be public or require authentication

## Next Steps

1. Create the `/chatbot` route on your NetPad instance
2. Implement URL parameter reading
3. Integrate with your existing chatbot component
4. Test the redirect flow from the documentation site
5. Add any additional context handling you need
