/**
 * FormPreview Component
 * Live form preview for NetPad documentation
 *
 * Usage:
 * ```jsx
 * import { FormPreview } from '@site/src/components/FormPreview';
 *
 * <FormPreview
 *   fields={[
 *     { type: 'short_text', path: 'name', label: 'Your Name', required: true },
 *     { type: 'email', path: 'email', label: 'Email', required: true },
 *   ]}
 *   hint="Try entering an invalid email to see validation"
 * />
 * ```
 */

export { FormPreview, default } from './FormPreview';
export { FormRenderer } from './FormRenderer';
export { FormPreviewConfig } from './FormPreviewConfig';
export { FormPreviewToolbar } from './FormPreviewToolbar';
export { FormPreviewCanvas } from './FormPreviewCanvas';

// Hooks
export { useFormState } from './hooks/useFormState';

// Fields
export {
  getFieldComponent,
  isFieldTypeSupported,
  getSupportedFieldTypes,
} from './fields';

// Types
export type {
  FormPreviewProps,
  FieldConfig,
  FieldType,
  FieldOption,
  FieldValidation,
  FormSettings,
  FormTheme,
  ConditionalRule,
  ComputedFieldConfig,
  Viewport,
  ConfigFormat,
  ValidationError,
} from './types';
