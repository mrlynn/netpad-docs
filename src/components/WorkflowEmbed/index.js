import React, { useEffect, useRef, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

// Configuration - change this for production
const DEFAULT_BASE_URL = 'http://localhost:3000'; // Change to 'https://www.netpad.io' for production

/**
 * WorkflowEmbed - Embeds a NetPad workflow viewer
 *
 * @param {string} workflowSlug - The workflow slug to embed
 * @param {string} theme - 'light', 'dark', or 'auto'
 * @param {boolean} hideHeader - Hide the header bar
 * @param {boolean} hideBranding - Hide NetPad branding
 * @param {string} height - Container height (default: '500px')
 * @param {string} baseUrl - NetPad base URL
 * @param {boolean} showPlaceholder - Show placeholder when workflow unavailable
 */
function WorkflowEmbedInner({
  workflowSlug,
  theme = 'auto',
  hideHeader = false,
  hideBranding = false,
  height = '500px',
  baseUrl = DEFAULT_BASE_URL,
  showPlaceholder = true,
}) {
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const embedUrl = `${baseUrl}/workflows/view/${workflowSlug}?embedded=true&theme=${theme}&hideHeader=${hideHeader}&hideBranding=${hideBranding}`;

  useEffect(() => {
    const handleMessage = (event) => {
      // Only accept messages from the embed origin
      if (!event.origin.includes(new URL(baseUrl).host)) return;

      if (event.data?.type === 'netpad-workflow-loaded') {
        setIsLoading(false);
      }
      if (event.data?.type === 'netpad-workflow-error') {
        setError(event.data.error || 'Failed to load workflow');
        setIsLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [baseUrl]);

  // Fallback timeout for loading state
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container} style={{ height }}>
      {isLoading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <span>Loading workflow...</span>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <span>Error: {error}</span>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={embedUrl}
        className={styles.iframe}
        style={{ opacity: isLoading ? 0 : 1 }}
        title={`NetPad Workflow: ${workflowSlug}`}
        allow="clipboard-write"
        loading="lazy"
      />
    </div>
  );
}

export default function WorkflowEmbed(props) {
  return (
    <BrowserOnly fallback={<div className={styles.container} style={{ height: props.height || '500px' }}>Loading...</div>}>
      {() => <WorkflowEmbedInner {...props} />}
    </BrowserOnly>
  );
}
