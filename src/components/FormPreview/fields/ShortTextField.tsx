/**
 * ShortTextField Component
 * Renders a single-line text input field
 */

import React from 'react';
import { TextField, FormHelperText, Box } from '@mui/material';
import type { FieldConfig } from '../types';

interface ShortTextFieldProps {
  field: FieldConfig;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export function ShortTextField({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: ShortTextFieldProps) {
  const showError = touched && !!error;

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        size="small"
        label={field.label}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={field.placeholder}
        required={field.required}
        disabled={field.disabled}
        error={showError}
        inputProps={{
          maxLength: field.validation?.maxLength,
        }}
      />
      {field.helpText && !showError && (
        <FormHelperText>{field.helpText}</FormHelperText>
      )}
      {showError && <FormHelperText error>{error}</FormHelperText>}
    </Box>
  );
}

export default ShortTextField;
