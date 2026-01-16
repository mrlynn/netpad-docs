import React, { useState } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

// Simple HTML to Markdown converter
function htmlToMarkdown(element) {
  let markdown = '';

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return '';
    }

    const tag = node.tagName.toLowerCase();
    const children = Array.from(node.childNodes).map(processNode).join('');

    switch (tag) {
      case 'h1':
        return `# ${children}\n\n`;
      case 'h2':
        return `## ${children}\n\n`;
      case 'h3':
        return `### ${children}\n\n`;
      case 'h4':
        return `#### ${children}\n\n`;
      case 'h5':
        return `##### ${children}\n\n`;
      case 'h6':
        return `###### ${children}\n\n`;
      case 'p':
        return `${children}\n\n`;
      case 'strong':
      case 'b':
        return `**${children}**`;
      case 'em':
      case 'i':
        return `*${children}*`;
      case 'code':
        // Check if it's inside a pre (code block)
        if (node.parentElement?.tagName.toLowerCase() === 'pre') {
          return children;
        }
        return `\`${children}\``;
      case 'pre':
        const codeEl = node.querySelector('code');
        const lang = codeEl?.className?.match(/language-(\w+)/)?.[1] || '';
        const codeContent = codeEl?.textContent || children;
        return `\`\`\`${lang}\n${codeContent}\n\`\`\`\n\n`;
      case 'a':
        const href = node.getAttribute('href') || '';
        return `[${children}](${href})`;
      case 'ul':
        return `${children}\n`;
      case 'ol':
        return `${children}\n`;
      case 'li':
        const parent = node.parentElement?.tagName.toLowerCase();
        const index = Array.from(node.parentElement?.children || []).indexOf(node);
        const prefix = parent === 'ol' ? `${index + 1}. ` : '- ';
        return `${prefix}${children.trim()}\n`;
      case 'blockquote':
        return children.split('\n').map(line => `> ${line}`).join('\n') + '\n\n';
      case 'hr':
        return '---\n\n';
      case 'br':
        return '\n';
      case 'img':
        const alt = node.getAttribute('alt') || '';
        const src = node.getAttribute('src') || '';
        return `![${alt}](${src})`;
      case 'table':
        return processTable(node);
      case 'div':
      case 'span':
      case 'section':
      case 'article':
        return children;
      default:
        return children;
    }
  }

  function processTable(table) {
    const rows = Array.from(table.querySelectorAll('tr'));
    if (rows.length === 0) return '';

    let md = '';
    rows.forEach((row, rowIndex) => {
      const cells = Array.from(row.querySelectorAll('th, td'));
      const cellContents = cells.map(cell => processNode(cell).trim());
      md += '| ' + cellContents.join(' | ') + ' |\n';

      // Add header separator after first row
      if (rowIndex === 0) {
        md += '| ' + cells.map(() => '---').join(' | ') + ' |\n';
      }
    });
    return md + '\n';
  }

  markdown = processNode(element);

  // Clean up excessive newlines
  return markdown.replace(/\n{3,}/g, '\n\n').trim();
}

export default function CopyPageButton() {
  const [copied, setCopied] = useState(false);
  const { metadata } = useDoc();

  const handleCopy = async () => {
    // Find the main content area
    const contentEl = document.querySelector('.theme-doc-markdown');

    if (!contentEl) {
      console.error('Could not find content element');
      return;
    }

    // Convert to markdown
    const markdown = `# ${metadata.title}\n\n${htmlToMarkdown(contentEl)}`;

    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      className={styles.copyButton}
      onClick={handleCopy}
      title={copied ? 'Copied!' : 'Copy page as Markdown'}
      aria-label={copied ? 'Copied!' : 'Copy page as Markdown'}
    >
      {copied ? (
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span className={styles.label}>{copied ? 'Copied!' : 'Copy page'}</span>
    </button>
  );
}
