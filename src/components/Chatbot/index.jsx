import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

// Configuration
// The NetPad instance URL where the chatbot page is hosted
const NETPAD_INSTANCE_URL = 'https://netpad.io'; // Update this to your NetPad instance URL
const CHATBOT_PAGE_PATH = '/chatbot'; // The path to the chatbot page on NetPad instance
const CHATBOT_ENABLED = true; // Set to false to disable the chatbot

// Full URL to the chatbot page
const CHATBOT_URL = `${NETPAD_INSTANCE_URL}${CHATBOT_PAGE_PATH}`;

/**
 * Chatbot Widget Component
 * 
 * A floating chatbot that redirects questions to the NetPad cloud instance chatbot page.
 * Questions are passed as URL parameters and the user is redirected to the NetPad instance.
 * 
 * @param {string} netpadUrl - The NetPad instance URL
 * @param {string} chatbotPath - The path to the chatbot page on NetPad
 * @param {string} placeholder - Placeholder text for the input
 */
export default function Chatbot({ 
  netpadUrl = NETPAD_INSTANCE_URL,
  chatbotPath = CHATBOT_PAGE_PATH,
  placeholder = 'Ask a question about NetPad...'
}) {
  const chatbotUrl = `${netpadUrl}${chatbotPath}`;
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

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    const question = inputValue.trim();
    setInputValue('');

    // Build the redirect URL with the question as a parameter
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const currentPage = typeof window !== 'undefined' ? window.location.pathname : '';
    
    const params = new URLSearchParams({
      question: question,
      source: 'documentation',
      url: currentUrl,
      page: currentPage,
    });

    // Redirect to NetPad chatbot page with the question
    const redirectUrl = `${chatbotUrl}?${params.toString()}`;
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
    
    // Optionally, you can redirect in the same window:
    // window.location.href = redirectUrl;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleOpenNetPadChatbot = () => {
    // Open NetPad chatbot in a new tab
    window.open(chatbotUrl, '_blank', 'noopener,noreferrer');
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
                {message.timestamp && (
                  <div className={styles.messageTime}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                )}
              </div>
            ))}
            <div className={styles.infoMessage}>
              <div className={styles.infoIcon}>ℹ️</div>
              <div className={styles.infoText}>
                Your question will open in a new tab on the NetPad instance where you can continue the conversation.
              </div>
            </div>
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
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!inputValue.trim()}
              aria-label="Send message and open NetPad chatbot"
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
          <div className={styles.footerActions}>
            <button
              className={styles.openChatButton}
              onClick={handleOpenNetPadChatbot}
              aria-label="Open NetPad chatbot"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open in NetPad
            </button>
          </div>
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
