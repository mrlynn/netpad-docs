/**
 * TemplateBrowser Component Exports
 */

export { TemplateBrowser } from './TemplateBrowser';
export { TemplateCard } from './TemplateCard';
export { TemplateGrid } from './TemplateGrid';
export { TemplateBrowserFilters } from './TemplateBrowserFilters';

// Types
export type {
  TemplateBrowserProps,
  TemplateCardProps,
  Template,
  TemplateMetadata,
  TemplateField,
  TemplateCategory,
  TemplateComplexity,
  FormType,
  ConfigFormat,
  FilterState,
  CategoryMeta,
} from './types';

// Utils
export { categoryMeta, getCategoryMeta, getAllCategories } from './utils/categoryMeta';
export { serialize, serializeToJson, serializeToTypeScript } from './utils/configSerializer';

// Data
export {
  templates,
  getTemplateById,
  getTemplatesByCategory,
  getFeaturedTemplates,
  getTemplateCount,
  getCategoryCounts,
} from './data/templates';

// Hooks
export { useTemplates } from './hooks/useTemplates';
