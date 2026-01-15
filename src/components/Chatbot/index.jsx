import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

// Configuration
// Update these values to match your NetPad chatbot API endpoint
const CHATBOT_API_URL = 'https://netpad.io/api/chatbot'; // Update this to the actual chatbot API endpoint
const CHATBOT_ENABLED = true; // Set to false to disable the chatbot

// Note: You may need to update the API endpoint based on your NetPad instance.
// Common endpoints might be:
// - https://netpad.io/api/chatbot
// - https://netpad.io/api/ai/chat
// - https://netpad.io/api/conversational/chat
// Check your NetPad API documentation for the correct endpoint.

/**
 * Chatbot Widget Component
 * 
 * A floating chatbot that forwards questions to the NetPad cloud instance chatbot.
 * 
 * @param {string} apiUrl - The chatbot API endpoint URL
 * @param {string} placeholder - Placeholder text for the input
 */
export default function Chatbot({ 
  apiUrl = CHATBOT_API_URL,
  placeholder = 'Ask a question about NetPad...'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      type: 'bot',
      text: 'Hi! I\'m here to help with NetPad documentation. What would you like to know?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    try {
      // Try multiple possible API endpoint formats
      // Adjust the request body structure based on your NetPad API requirements
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any required headers (e.g., API keys, authentication tokens)
          // 'Authorization': 'Bearer YOUR_API_KEY',
        },
        body: JSON.stringify({
          // Adjust these fields based on your NetPad chatbot API requirements
          message: messageToSend,
          query: messageToSend, // Alternative field name
          text: messageToSend, // Alternative field name
          conversationId: 'docs-chatbot', // You may want to persist this in localStorage
          context: {
            source: 'documentation',
            url: typeof window !== 'undefined' ? window.location.href : '',
            page: typeof window !== 'undefined' ? window.location.pathname : '',
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Handle different possible response formats
      const botResponseText = 
        data.message || 
        data.response || 
        data.text ||
        data.answer ||
        data.content ||
        (data.choices && data.choices[0] && data.choices[0].message?.content) ||
        'I apologize, but I couldn\'t process your question. Please try again.';
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botResponseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: 'Sorry, I\'m having trouble connecting to the chatbot service. Please try again later or visit https://netpad.io for support.',
        timestamp: new Date(),
        error: true
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (!CHATBOT_ENABLED) {
    return null;
  }

  return (
    <div className={styles.chatbotContainer}>
      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderContent}>
              <div className={styles.chatHeaderIcon}>💬</div>
              <div>
                <div className={styles.chatHeaderTitle}>NetPad Assistant</div>
                <div className={styles.chatHeaderSubtitle}>Ask me anything about NetPad</div>
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={handleToggle}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${styles[message.type]} ${message.error ? styles.error : ''}`}
              >
                <div className={styles.messageContent}>
                  {message.text}
                </div>
                <div className={styles.messageTime}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.messageContent}>
                  <span className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputForm} onSubmit={handleSendMessage}>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send message"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`}
        onClick={handleToggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
        {!isOpen && messages.length > 1 && (
          <span className={styles.notificationBadge}>{messages.length - 1}</span>
        )}
      </button>
    </div>
  );
}
