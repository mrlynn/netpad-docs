import React, { useEffect, useRef, useState } from 'react';
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
 */
export default function WorkflowEmbed({
  workflowSlug,
  theme = 'auto',
  hideHeader = false,
  hideBranding = false,
  height = '500px',
  baseUrl = DEFAULT_BASE_URL,
}) {
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Only render iframe on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const embedUrl = `${baseUrl}/workflows/view/${workflowSlug}?embedded=true&theme=${theme}&hideHeader=${hideHeader}&hideBranding=${hideBranding}`;

  useEffect(() => {
    if (!isClient) return;

    const handleMessage = (event) => {
      try {
        const baseUrlHost = new URL(baseUrl).host;
        if (!event.origin.includes(baseUrlHost)) return;

        if (event.data?.type === 'netpad-workflow-loaded') {
          setIsLoading(false);
        }
        if (event.data?.type === 'netpad-workflow-error') {
          setIsLoading(false);
        }
      } catch (e) {
        // Ignore URL parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [baseUrl, isClient]);

  // Fallback timeout for loading state
  useEffect(() => {
    if (!isClient) return;

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isClient]);

  // Client-side only iframe injection to avoid any SSR issues
  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    // Clear any existing content
    const container = containerRef.current;
    const existingIframe = container.querySelector('iframe');
    if (existingIframe) return; // Already created

    const iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.className = styles.iframe;
    iframe.title = `NetPad Workflow: ${workflowSlug}`;
    iframe.setAttribute('allow', 'clipboard-write');
    iframe.setAttribute('loading', 'lazy');
    iframe.style.opacity = '0';

    iframe.onload = () => {
      setIsLoading(false);
      iframe.style.opacity = '1';
    };

    container.appendChild(iframe);

    return () => {
      if (container.contains(iframe)) {
        container.removeChild(iframe);
      }
    };
  }, [isClient, embedUrl, workflowSlug]);

  return (
    <div className={styles.container} style={{ height }}>
      {isLoading && (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading workflow...</span>
        </div>
      )}
      <div ref={containerRef} className={styles.iframeContainer} />
    </div>
  );
}
