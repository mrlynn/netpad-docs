/**
 * EmailField Component
 * Renders an email input field with validation
 */

import React from 'react';
import { TextField, FormHelperText, Box, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import type { FieldConfig } from '../types';

interface EmailFieldProps {
  field: FieldConfig;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export function EmailField({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: EmailFieldProps) {
  const showError = touched && !!error;

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        size="small"
        type="email"
        label={field.label}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={field.placeholder || 'email@example.com'}
        required={field.required}
        disabled={field.disabled}
        error={showError}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon fontSize="small" sx={{ opacity: 0.5 }} />
            </InputAdornment>
          ),
        }}
      />
      {field.helpText && !showError && (
        <FormHelperText>{field.helpText}</FormHelperText>
      )}
      {showError && <FormHelperText error>{error}</FormHelperText>}
    </Box>
  );
}

export default EmailField;
