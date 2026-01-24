/**
 * NumberField Component
 * Renders a numeric input field
 */

import React from 'react';
import { TextField, FormHelperText, Box } from '@mui/material';
import type { FieldConfig } from '../types';

interface NumberFieldProps {
  field: FieldConfig;
  value: number | string;
  error?: string;
  touched?: boolean;
  onChange: (value: number | string) => void;
  onBlur: () => void;
}

export function NumberField({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: NumberFieldProps) {
  const showError = touched && !!error;

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        size="small"
        type="number"
        label={field.label}
        value={value ?? ''}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val === '' ? '' : Number(val));
        }}
        onBlur={onBlur}
        placeholder={field.placeholder}
        required={field.required}
        disabled={field.disabled}
        error={showError}
        inputProps={{
          min: field.min ?? field.validation?.min,
          max: field.max ?? field.validation?.max,
          step: field.step ?? 1,
        }}
      />
      {field.helpText && !showError && (
        <FormHelperText>{field.helpText}</FormHelperText>
      )}
      {showError && <FormHelperText error>{error}</FormHelperText>}
    </Box>
  );
}

export default NumberField;
