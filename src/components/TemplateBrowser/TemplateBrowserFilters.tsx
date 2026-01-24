/**
 * TemplateBrowserFilters Component
 * Search input, category tabs, and filter dropdowns
 */

import React from 'react';
import { categoryMeta, getAllCategories } from './utils/categoryMeta';
import type { TemplateCategory, TemplateComplexity, FilterState } from './types';
import styles from './styles.module.css';

interface TemplateBrowserFiltersProps {
  filterState: FilterState;
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: TemplateCategory | 'all') => void;
  onComplexityChange: (complexity: TemplateComplexity | 'all') => void;
  categoryCounts: Record<string, number>;
  showSearch?: boolean;
  showCategoryTabs?: boolean;
}

export function TemplateBrowserFilters({
  filterState,
  onSearchChange,
  onCategoryChange,
  onComplexityChange,
  categoryCounts,
  showSearch = true,
  showCategoryTabs = true,
}: TemplateBrowserFiltersProps) {
  const categories = getAllCategories();

  return (
    <div className={styles.filters}>
      {showSearch && (
        <div className={styles.searchRow}>
          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search templates..."
              value={filterState.search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <select
            className={styles.filterDropdown}
            value={filterState.complexity}
            onChange={(e) => onComplexityChange(e.target.value as TemplateComplexity | 'all')}
          >
            <option value="all">All Complexity</option>
            <option value="simple">Simple</option>
            <option value="moderate">Moderate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      )}

      {showCategoryTabs && (
        <div className={styles.categoryTabs}>
          <button
            className={`${styles.categoryTab} ${filterState.category === 'all' ? styles.categoryTabActive : ''}`}
            onClick={() => onCategoryChange('all')}
          >
            All
            <span className={styles.categoryTabCount}>({categoryCounts.all || 0})</span>
          </button>

          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const count = categoryCounts[cat] || 0;
            if (count === 0) return null;

            return (
              <button
                key={cat}
                className={`${styles.categoryTab} ${filterState.category === cat ? styles.categoryTabActive : ''}`}
                onClick={() => onCategoryChange(cat)}
              >
                <span>{meta.icon}</span>
                {meta.label}
                <span className={styles.categoryTabCount}>({count})</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
