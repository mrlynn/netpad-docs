/**
 * TemplateGrid Component
 * Responsive grid layout for template cards
 */

import React, { useState } from 'react';
import { TemplateCard } from './TemplateCard';
import type { Template, ConfigFormat } from './types';
import styles from './styles.module.css';

interface TemplateGridProps {
  templates: Template[];
  compact?: boolean;
  netpadBaseUrl?: string;
  defaultConfigFormat?: ConfigFormat;
  defaultExpanded?: string;
  onTemplateSelect?: (templateId: string) => void;
  onConfigCopy?: (templateId: string, format: string) => void;
}

export function TemplateGrid({
  templates,
  compact = false,
  netpadBaseUrl,
  defaultConfigFormat,
  defaultExpanded,
  onTemplateSelect,
  onConfigCopy,
}: TemplateGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(defaultExpanded || null);

  const handleToggle = (templateId: string) => {
    if (expandedId === templateId) {
      setExpandedId(null);
    } else {
      setExpandedId(templateId);
      onTemplateSelect?.(templateId);
    }
  };

  if (templates.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>🔍</div>
        <h3 className={styles.emptyStateTitle}>No templates found</h3>
        <p className={styles.emptyStateText}>
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className={`${styles.grid} ${compact ? styles.gridCompact : ''}`}>
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          expanded={expandedId === template.id}
          onToggle={() => handleToggle(template.id)}
          compact={compact}
          netpadBaseUrl={netpadBaseUrl}
          configFormat={defaultConfigFormat}
          onConfigCopy={onConfigCopy}
        />
      ))}
    </div>
  );
}
