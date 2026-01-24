/**
 * FormPreview Component Types
 * Defines all TypeScript interfaces for the Live Form Preview component
 */

// Field Types supported by NetPad
export type FieldType =
  // Text fields
  | 'short_text'
  | 'long_text'
  | 'email'
  | 'phone'
  | 'number'
  | 'currency'
  | 'url'
  // Selection fields
  | 'dropdown'
  | 'multi_select'
  | 'radio'
  | 'checkbox'
  | 'toggle'
  // Date/Time fields
  | 'date'
  | 'time'
  | 'datetime'
  // Interactive fields
  | 'rating'
  | 'slider'
  | 'scale'
  | 'ranking'
  | 'matrix'
  // Media fields
  | 'file_upload'
  | 'signature'
  | 'color'
  // Composite fields
  | 'address'
  // Layout fields
  | 'section'
  | 'divider'
  | 'heading'
  | 'html'
  // Utility fields
  | 'hidden'
  | 'computed';

// Option for dropdown, radio, checkbox fields
export interface FieldOption {
  label: string;
  value: string;
}

// Validation configuration
export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  customMessage?: string;
}

// Base field configuration
export interface FieldConfig {
  // Required
  type: FieldType;
  path: string;
  label: string;

  // Common optional
  required?: boolean;
  placeholder?: string;
  helpText?: string;
  defaultValue?: any;
  disabled?: boolean;
  hidden?: boolean;
  width?: 'full' | 'half' | 'third' | 'quarter';

  // Validation
  validation?: FieldValidation;

  // Type-specific options
  options?: FieldOption[];
  rows?: number; // for long_text
  accept?: string[]; // for file_upload
  maxRating?: number; // for rating
  icon?: 'star' | 'heart' | 'thumb'; // for rating
  min?: number; // for slider, number
  max?: number; // for slider, number
  step?: number; // for slider, number
  currency?: string; // for currency
  scaleLabels?: { start: string; end: string }; // for scale
  matrixRows?: { label: string; value: string }[]; // for matrix
  matrixColumns?: { label: string; value: string }[]; // for matrix
  level?: 1 | 2 | 3 | 4 | 5 | 6; // for heading
  content?: string; // for html, heading
}

// Conditional logic types
export type ConditionalOperator =
  | 'equals'
  | 'not_equals'
  | 'contains'
  | 'greater_than'
  | 'less_than'
  | 'is_empty'
  | 'is_not_empty';

export interface Condition {
  field: string;
  operator: ConditionalOperator;
  value?: any;
}

export interface ConditionalRule {
  action: 'show' | 'hide' | 'require' | 'disable';
  targetField: string;
  logicType: 'all' | 'any';
  conditions: Condition[];
}

// Computed field configuration
export interface ComputedFieldConfig {
  targetField: string;
  formula: string;
  dependencies: string[];
  format?: 'number' | 'currency' | 'percentage';
}

// Form settings
export interface FormSettings {
  submitButtonText?: string;
  showSubmitButton?: boolean;
  layout?: 'single-column' | 'two-column';
}

// Theme configuration
export interface FormTheme {
  mode?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  borderRadius?: 'none' | 'sm' | 'md' | 'lg';
}

// Validation error
export interface ValidationError {
  field: string;
  message: string;
}

// Main component props
export interface FormPreviewProps {
  // Form configuration
  fields: FieldConfig[];
  template?: string;
  settings?: FormSettings;
  theme?: FormTheme;
  conditionalLogic?: ConditionalRule[];
  computedFields?: ComputedFieldConfig[];

  // Preview behavior
  initialValues?: Record<string, any>;
  defaultViewport?: 'mobile' | 'tablet' | 'desktop';
  showViewportSwitcher?: boolean;
  showConfigTab?: boolean;
  configFormats?: ('typescript' | 'json')[];
  showReset?: boolean;
  hint?: string;
  height?: number | 'auto';

  // Callbacks
  onValuesChange?: (values: Record<string, any>) => void;
  onValidationChange?: (isValid: boolean, errors: ValidationError[]) => void;
  onConfigCopy?: (format: string, config: string) => void;
}

// Form state
export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

// Viewport type
export type Viewport = 'mobile' | 'tablet' | 'desktop';

// Config format type
export type ConfigFormat = 'typescript' | 'json';
