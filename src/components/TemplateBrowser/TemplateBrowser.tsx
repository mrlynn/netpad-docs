/**
 * TemplateBrowser Component
 * Main container component for the template gallery
 */

import React from 'react';
import { useTemplates } from './hooks/useTemplates';
import { TemplateBrowserFilters } from './TemplateBrowserFilters';
import { TemplateGrid } from './TemplateGrid';
import type { TemplateBrowserProps } from './types';
import styles from './styles.module.css';

export function TemplateBrowser({
  // Filtering
  category,
  categories,
  complexity,
  initialSearch,

  // Display
  limit = 12,
  showSearch = true,
  showCategoryTabs = true,
  showHeader = true,
  compact = false,
  defaultExpanded,

  // Behavior
  netpadBaseUrl = 'https://www.netpad.io',
  defaultConfigFormat = 'typescript',
  onTemplateSelect,
  onConfigCopy,
}: TemplateBrowserProps) {
  const {
    displayedTemplates,
    totalCount,
    filteredCount,
    hasMore,
    filterState,
    setSearch,
    setCategory,
    setComplexity,
    loadMore,
    resetFilters,
    categoryCounts,
  } = useTemplates({
    category,
    categories,
    complexity,
    initialSearch,
    limit,
  });

  return (
    <div className={styles.container}>
      {showHeader && (
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Template Gallery</h2>
          <p className={styles.headerSubtitle}>
            Browse and use pre-built form templates
            <span className={styles.templateCount}>{totalCount} templates</span>
          </p>
        </div>
      )}

      <TemplateBrowserFilters
        filterState={filterState}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onComplexityChange={setComplexity}
        categoryCounts={categoryCounts}
        showSearch={showSearch}
        showCategoryTabs={showCategoryTabs}
      />

      {displayedTemplates.length === 0 && filterState.search ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>🔍</div>
          <h3 className={styles.emptyStateTitle}>No templates found</h3>
          <p className={styles.emptyStateText}>
            No templates match "{filterState.search}". Try a different search term.
          </p>
          <button className={styles.resetButton} onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <TemplateGrid
            templates={displayedTemplates}
            compact={compact}
            netpadBaseUrl={netpadBaseUrl}
            defaultConfigFormat={defaultConfigFormat}
            defaultExpanded={defaultExpanded}
            onTemplateSelect={onTemplateSelect}
            onConfigCopy={onConfigCopy}
          />

          {hasMore && (
            <div className={styles.loadMore}>
              <div>
                <button className={styles.loadMoreButton} onClick={loadMore}>
                  Load More Templates
                </button>
                <p className={styles.loadMoreText}>
                  Showing {displayedTemplates.length} of {filteredCount} templates
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
