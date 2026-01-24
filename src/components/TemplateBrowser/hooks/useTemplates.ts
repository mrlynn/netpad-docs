/**
 * useTemplates Hook
 * Manages template data, filtering, and pagination
 */

import { useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { templates as allTemplates } from '../data/templates';
import type { Template, TemplateCategory, TemplateComplexity, FilterState } from '../types';

interface UseTemplatesOptions {
  category?: TemplateCategory;
  categories?: TemplateCategory[];
  complexity?: TemplateComplexity;
  initialSearch?: string;
  limit?: number;
}

interface UseTemplatesResult {
  templates: Template[];
  filteredTemplates: Template[];
  displayedTemplates: Template[];
  totalCount: number;
  filteredCount: number;
  displayedCount: number;
  hasMore: boolean;
  filterState: FilterState;
  setSearch: (search: string) => void;
  setCategory: (category: TemplateCategory | 'all') => void;
  setComplexity: (complexity: TemplateComplexity | 'all') => void;
  loadMore: () => void;
  resetFilters: () => void;
  categoryCounts: Record<string, number>;
}

// Fuse.js configuration for fuzzy search
const fuseOptions: Fuse.IFuseOptions<Template> = {
  keys: [
    { name: 'name', weight: 2 },
    { name: 'description', weight: 1 },
    { name: 'tags', weight: 1.5 },
    { name: 'category', weight: 0.5 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
  includeScore: true,
};

export function useTemplates(options: UseTemplatesOptions = {}): UseTemplatesResult {
  const {
    category: initialCategory,
    categories: initialCategories,
    complexity: initialComplexity,
    initialSearch = '',
    limit = 12,
  } = options;

  // Filter state
  const [filterState, setFilterState] = useState<FilterState>({
    search: initialSearch,
    category: initialCategory || 'all',
    complexity: initialComplexity || 'all',
  });

  // Pagination
  const [displayLimit, setDisplayLimit] = useState(limit);

  // Create Fuse instance
  const fuse = useMemo(() => new Fuse(allTemplates, fuseOptions), []);

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allTemplates.length };
    allTemplates.forEach(t => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter templates based on current state
  const filteredTemplates = useMemo(() => {
    let result = allTemplates;

    // Apply category filter from options (for embedded views)
    if (initialCategories && initialCategories.length > 0) {
      result = result.filter(t => initialCategories.includes(t.category));
    }

    // Apply user-selected category filter
    if (filterState.category !== 'all') {
      result = result.filter(t => t.category === filterState.category);
    }

    // Apply complexity filter
    if (filterState.complexity !== 'all') {
      result = result.filter(t => t.complexity === filterState.complexity);
    }

    // Apply search
    if (filterState.search.trim()) {
      // Filter the already-filtered results through Fuse
      const searchFuse = new Fuse(result, fuseOptions);
      const searchResults = searchFuse.search(filterState.search);
      result = searchResults.map(r => r.item);
    }

    return result;
  }, [filterState, initialCategories, fuse]);

  // Get displayed templates (with pagination)
  const displayedTemplates = useMemo(() => {
    return filteredTemplates.slice(0, displayLimit);
  }, [filteredTemplates, displayLimit]);

  // State update functions
  const setSearch = useCallback((search: string) => {
    setFilterState(prev => ({ ...prev, search }));
    setDisplayLimit(limit); // Reset pagination on search
  }, [limit]);

  const setCategory = useCallback((category: TemplateCategory | 'all') => {
    setFilterState(prev => ({ ...prev, category }));
    setDisplayLimit(limit); // Reset pagination on filter change
  }, [limit]);

  const setComplexity = useCallback((complexity: TemplateComplexity | 'all') => {
    setFilterState(prev => ({ ...prev, complexity }));
    setDisplayLimit(limit); // Reset pagination on filter change
  }, [limit]);

  const loadMore = useCallback(() => {
    setDisplayLimit(prev => prev + limit);
  }, [limit]);

  const resetFilters = useCallback(() => {
    setFilterState({
      search: '',
      category: initialCategory || 'all',
      complexity: initialComplexity || 'all',
    });
    setDisplayLimit(limit);
  }, [initialCategory, initialComplexity, limit]);

  return {
    templates: allTemplates,
    filteredTemplates,
    displayedTemplates,
    totalCount: allTemplates.length,
    filteredCount: filteredTemplates.length,
    displayedCount: displayedTemplates.length,
    hasMore: displayedTemplates.length < filteredTemplates.length,
    filterState,
    setSearch,
    setCategory,
    setComplexity,
    loadMore,
    resetFilters,
    categoryCounts,
  };
}
