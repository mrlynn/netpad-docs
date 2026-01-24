/**
 * TemplateBrowser Component Types
 * Type definitions for the template gallery and browser components
 */

// Template categories
export type TemplateCategory =
  | 'business'
  | 'hr'
  | 'healthcare'
  | 'finance'
  | 'education'
  | 'events'
  | 'feedback'
  | 'support'
  | 'ecommerce'
  | 'real-estate'
  | 'legal'
  | 'nonprofit'
  | 'marketing'
  | 'operations';

// Template complexity levels
export type TemplateComplexity = 'simple' | 'moderate' | 'advanced';

// Form types
export type FormType = 'form' | 'survey' | 'wizard';

// Field summary for template display
export interface TemplateField {
  path: string;
  label: string;
  type: string;
  required?: boolean;
}

// Template metadata
export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  complexity: TemplateComplexity;
  formType: FormType;
  fieldCount: number;
  estimatedTime: string;
  featured?: boolean;
  tags?: string[];
}

// Full template with fields and config
export interface Template extends TemplateMetadata {
  fields: TemplateField[];
  config: Record<string, unknown>;
}

// Category metadata for display
export interface CategoryMeta {
  label: string;
  icon: string;
  color: string;
  description: string;
}

// TemplateBrowser component props
export interface TemplateBrowserProps {
  // Filtering
  category?: TemplateCategory;
  categories?: TemplateCategory[];
  complexity?: TemplateComplexity;
  formType?: FormType;
  initialSearch?: string;

  // Display
  limit?: number;
  showSearch?: boolean;
  showCategoryTabs?: boolean;
  showHeader?: boolean;
  compact?: boolean;
  defaultExpanded?: string;

  // Behavior
  netpadBaseUrl?: string;
  defaultConfigFormat?: 'typescript' | 'json';
  onTemplateSelect?: (templateId: string) => void;
  onConfigCopy?: (templateId: string, format: string) => void;
}

// TemplateCard component props
export interface TemplateCardProps {
  template: Template;
  expanded?: boolean;
  onToggle?: () => void;
  showConfig?: boolean;
  configFormat?: 'typescript' | 'json';
  compact?: boolean;
  netpadBaseUrl?: string;
  onConfigCopy?: (templateId: string, format: string) => void;
}

// Filter state
export interface FilterState {
  search: string;
  category: TemplateCategory | 'all';
  complexity: TemplateComplexity | 'all';
}

// Config format type
export type ConfigFormat = 'typescript' | 'json';
