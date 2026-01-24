/**
 * useFormState Hook
 * Manages form values, validation, and touched state
 */

import { useState, useCallback, useEffect } from 'react';
import type { FieldConfig, FormState, ValidationError } from '../types';

// Validation functions for different field types
const validators: Record<string, (value: any, field: FieldConfig) => string | null> = {
  email: (value, field) => {
    if (!value && !field.required) return null;
    if (!value && field.required) return 'This field is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return null;
  },

  phone: (value, field) => {
    if (!value && !field.required) return null;
    if (!value && field.required) return 'This field is required';
    const phoneRegex = /^[\d\s\-+()]{7,}$/;
    if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
    return null;
  },

  url: (value, field) => {
    if (!value && !field.required) return null;
    if (!value && field.required) return 'This field is required';
    try {
      new URL(value);
      return null;
    } catch {
      return 'Please enter a valid URL';
    }
  },

  number: (value, field) => {
    if (value === '' || value === null || value === undefined) {
      return field.required ? 'This field is required' : null;
    }
    const num = Number(value);
    if (isNaN(num)) return 'Please enter a valid number';
    if (field.validation?.min !== undefined && num < field.validation.min) {
      return `Value must be at least ${field.validation.min}`;
    }
    if (field.validation?.max !== undefined && num > field.validation.max) {
      return `Value must be at most ${field.validation.max}`;
    }
    return null;
  },

  currency: (value, field) => {
    return validators.number(value, field);
  },

  short_text: (value, field) => {
    if (!value && field.required) return 'This field is required';
    if (!value) return null;
    if (field.validation?.minLength && value.length < field.validation.minLength) {
      return `Must be at least ${field.validation.minLength} characters`;
    }
    if (field.validation?.maxLength && value.length > field.validation.maxLength) {
      return `Must be at most ${field.validation.maxLength} characters`;
    }
    if (field.validation?.pattern) {
      const regex = new RegExp(field.validation.pattern);
      if (!regex.test(value)) {
        return field.validation.customMessage || 'Invalid format';
      }
    }
    return null;
  },

  long_text: (value, field) => {
    return validators.short_text(value, field);
  },

  dropdown: (value, field) => {
    if (!value && field.required) return 'Please select an option';
    return null;
  },

  multi_select: (value, field) => {
    if ((!value || value.length === 0) && field.required) {
      return 'Please select at least one option';
    }
    return null;
  },

  radio: (value, field) => {
    if (!value && field.required) return 'Please select an option';
    return null;
  },

  checkbox: (value, field) => {
    if ((!value || value.length === 0) && field.required) {
      return 'Please select at least one option';
    }
    return null;
  },

  toggle: (value, field) => {
    if (value !== true && field.required) return 'This field is required';
    return null;
  },

  date: (value, field) => {
    if (!value && field.required) return 'Please select a date';
    return null;
  },

  time: (value, field) => {
    if (!value && field.required) return 'Please select a time';
    return null;
  },

  datetime: (value, field) => {
    if (!value && field.required) return 'Please select a date and time';
    return null;
  },

  rating: (value, field) => {
    if ((!value || value === 0) && field.required) return 'Please provide a rating';
    return null;
  },

  slider: (value, field) => {
    if (value === undefined && field.required) return 'This field is required';
    return null;
  },

  file_upload: (value, field) => {
    if (!value && field.required) return 'Please upload a file';
    return null;
  },

  color: (value, field) => {
    if (!value && field.required) return 'Please select a color';
    return null;
  },
};

// Default validator for fields without specific validation
const defaultValidator = (value: any, field: FieldConfig): string | null => {
  if (!value && field.required) return 'This field is required';
  return null;
};

export function useFormState(
  fields: FieldConfig[],
  initialValues: Record<string, any> = {},
  onValuesChange?: (values: Record<string, any>) => void,
  onValidationChange?: (isValid: boolean, errors: ValidationError[]) => void
) {
  // Initialize state with default values from fields
  const getInitialValues = useCallback(() => {
    const values: Record<string, any> = {};
    fields.forEach((field) => {
      if (initialValues[field.path] !== undefined) {
        values[field.path] = initialValues[field.path];
      } else if (field.defaultValue !== undefined) {
        values[field.path] = field.defaultValue;
      } else {
        // Set appropriate default based on field type
        switch (field.type) {
          case 'checkbox':
          case 'multi_select':
            values[field.path] = [];
            break;
          case 'toggle':
            values[field.path] = false;
            break;
          case 'number':
          case 'currency':
          case 'rating':
          case 'slider':
            values[field.path] = field.min ?? 0;
            break;
          default:
            values[field.path] = '';
        }
      }
    });
    return values;
  }, [fields, initialValues]);

  const [state, setState] = useState<FormState>(() => ({
    values: getInitialValues(),
    errors: {},
    touched: {},
  }));

  // Validate a single field
  const validateField = useCallback(
    (path: string, value: any): string | null => {
      const field = fields.find((f) => f.path === path);
      if (!field) return null;

      const validator = validators[field.type] || defaultValidator;
      return validator(value, field);
    },
    [fields]
  );

  // Validate all fields
  const validateAll = useCallback((): Record<string, string> => {
    const errors: Record<string, string> = {};
    fields.forEach((field) => {
      const error = validateField(field.path, state.values[field.path]);
      if (error) {
        errors[field.path] = error;
      }
    });
    return errors;
  }, [fields, state.values, validateField]);

  // Update a single field value
  const setValue = useCallback(
    (path: string, value: any) => {
      setState((prev) => {
        const newValues = { ...prev.values, [path]: value };
        const error = validateField(path, value);
        const newErrors = { ...prev.errors };

        if (error) {
          newErrors[path] = error;
        } else {
          delete newErrors[path];
        }

        return {
          values: newValues,
          errors: newErrors,
          touched: { ...prev.touched, [path]: true },
        };
      });
    },
    [validateField]
  );

  // Set touched state for a field
  const setTouched = useCallback((path: string) => {
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [path]: true },
    }));
  }, []);

  // Reset form to initial values
  const reset = useCallback(() => {
    setState({
      values: getInitialValues(),
      errors: {},
      touched: {},
    });
  }, [getInitialValues]);

  // Check if form is valid
  const isValid = useCallback((): boolean => {
    const errors = validateAll();
    return Object.keys(errors).length === 0;
  }, [validateAll]);

  // Get validation errors as array
  const getErrors = useCallback((): ValidationError[] => {
    return Object.entries(state.errors).map(([field, message]) => ({
      field,
      message,
    }));
  }, [state.errors]);

  // Notify parent of value changes
  useEffect(() => {
    onValuesChange?.(state.values);
  }, [state.values, onValuesChange]);

  // Notify parent of validation changes
  useEffect(() => {
    onValidationChange?.(isValid(), getErrors());
  }, [state.errors, isValid, getErrors, onValidationChange]);

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    setValue,
    setTouched,
    validateField,
    validateAll,
    reset,
    isValid,
    getErrors,
  };
}

export default useFormState;
