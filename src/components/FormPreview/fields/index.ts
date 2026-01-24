/**
 * Field Components Registry
 * Exports all field components and provides a field renderer lookup
 */

import React from 'react';
import type { FieldConfig, FieldType } from '../types';

// Import field components
import ShortTextField from './ShortTextField';
import LongTextField from './LongTextField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import NumberField from './NumberField';
import DropdownField from './DropdownField';
import RadioField from './RadioField';
import CheckboxField from './CheckboxField';
import DateField from './DateField';
import ToggleField from './ToggleField';

// Field component props interface
export interface FieldComponentProps {
  field: FieldConfig;
  value: any;
  error?: string;
  touched?: boolean;
  onChange: (value: any) => void;
  onBlur: () => void;
}

// Field component type
export type FieldComponent = React.ComponentType<FieldComponentProps>;

// Registry of field components by type
const fieldRegistry: Partial<Record<FieldType, FieldComponent>> = {
  short_text: ShortTextField,
  long_text: LongTextField,
  email: EmailField,
  phone: PhoneField,
  number: NumberField,
  dropdown: DropdownField,
  radio: RadioField,
  checkbox: CheckboxField,
  date: DateField,
  toggle: ToggleField,
};

/**
 * Get the field component for a given field type
 */
export function getFieldComponent(type: FieldType): FieldComponent | null {
  return fieldRegistry[type] || null;
}

/**
 * Check if a field type is supported
 */
export function isFieldTypeSupported(type: FieldType): boolean {
  return type in fieldRegistry;
}

/**
 * Get list of all supported field types
 */
export function getSupportedFieldTypes(): FieldType[] {
  return Object.keys(fieldRegistry) as FieldType[];
}

// Export individual components
export {
  ShortTextField,
  LongTextField,
  EmailField,
  PhoneField,
  NumberField,
  DropdownField,
  RadioField,
  CheckboxField,
  DateField,
  ToggleField,
};
