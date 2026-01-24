/**
 * TemplateCard Component
 * Individual template card with collapsed and expanded states
 */

import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { categoryMeta } from './utils/categoryMeta';
import { serialize } from './utils/configSerializer';
import type { Template, ConfigFormat } from './types';
import styles from './styles.module.css';

interface TemplateCardProps {
  template: Template;
  expanded?: boolean;
  onToggle?: () => void;
  showConfig?: boolean;
  configFormat?: ConfigFormat;
  compact?: boolean;
  netpadBaseUrl?: string;
  onConfigCopy?: (templateId: string, format: string) => void;
}

export function TemplateCard({
  template,
  expanded = false,
  onToggle,
  showConfig = true,
  configFormat: defaultFormat = 'typescript',
  compact = false,
  netpadBaseUrl = 'https://www.netpad.io',
  onConfigCopy,
}: TemplateCardProps) {
  const [configFormat, setConfigFormat] = useState<ConfigFormat>(defaultFormat);
  const [copied, setCopied] = useState(false);

  const meta = categoryMeta[template.category];
  const complexityClass = {
    simple: styles.badgeSimple,
    moderate: styles.badgeModerate,
    advanced: styles.badgeAdvanced,
  }[template.complexity];

  const handleCopy = async () => {
    const code = serialize(template, configFormat);
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      onConfigCopy?.(template.id, configFormat);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCardClick = () => {
    if (!expanded && onToggle) {
      onToggle();
    }
  };

  const configCode = serialize(template, configFormat);

  return (
    <div
      className={`${styles.card} ${expanded ? styles.cardExpanded : ''} ${compact ? styles.cardCompact : ''}`}
      onClick={handleCardClick}
    >
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{meta?.icon || '📋'}</span>
        <h3 className={styles.cardTitle}>{template.name}</h3>
        {template.featured && <span className={styles.badge}>Featured</span>}
      </div>

      <p className={styles.cardDescription}>{template.description}</p>

      <div className={styles.cardMeta}>
        <span className={`${styles.badge} ${styles.badgeComplexity} ${complexityClass}`}>
          {template.complexity}
        </span>
        <span className={styles.badge}>{template.fieldCount} fields</span>
        <span className={styles.badge}>{template.estimatedTime}</span>
      </div>

      {!expanded && (
        <div className={styles.cardActions}>
          <button
            className={styles.btnSecondary}
            onClick={(e) => {
              e.stopPropagation();
              onToggle?.();
            }}
          >
            View Config
          </button>
          <a
            href={`${netpadBaseUrl}/templates/${template.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
            onClick={(e) => e.stopPropagation()}
          >
            Try on NetPad
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}

      {expanded && (
        <div className={styles.expandedContent}>
          {/* Fields List */}
          <div className={styles.fieldsList}>
            <h4 className={styles.fieldsTitle}>Fields ({template.fields.length})</h4>
            <div className={styles.fieldsGrid}>
              {template.fields.map((field) => (
                <div key={field.path} className={styles.fieldItem}>
                  <span className={styles.fieldLabel}>{field.label}</span>
                  <span className={styles.fieldType}>{field.type}</span>
                  {field.required && <span className={styles.fieldRequired}>*</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Config Viewer */}
          {showConfig && (
            <div className={styles.configViewer}>
              <div className={styles.configHeader}>
                <div className={styles.configFormatTabs}>
                  <button
                    className={`${styles.configFormatTab} ${configFormat === 'typescript' ? styles.configFormatTabActive : ''}`}
                    onClick={() => setConfigFormat('typescript')}
                  >
                    TypeScript
                  </button>
                  <button
                    className={`${styles.configFormatTab} ${configFormat === 'json' ? styles.configFormatTabActive : ''}`}
                    onClick={() => setConfigFormat('json')}
                  >
                    JSON
                  </button>
                </div>

                <button
                  className={`${styles.copyButton} ${copied ? styles.copyButtonSuccess : ''}`}
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        width="12"
                        height="12"
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
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className={styles.configCode}>
                <Highlight
                  theme={themes.nightOwl}
                  code={configCode}
                  language={configFormat === 'typescript' ? 'typescript' : 'json'}
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={styles.configCodePre} style={{ ...style, background: 'transparent' }}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className={styles.cardActions} style={{ marginTop: '1rem' }}>
            <button className={styles.btnSecondary} onClick={onToggle}>
              Collapse
            </button>
            <a
              href={`${netpadBaseUrl}/templates/${template.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Try on NetPad
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
