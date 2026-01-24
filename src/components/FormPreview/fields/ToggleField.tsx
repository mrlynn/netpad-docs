/**
 * ToggleField Component
 * Renders a boolean toggle/switch field
 */

import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Switch,
  FormHelperText,
  Box,
} from '@mui/material';
import type { FieldConfig } from '../types';

interface ToggleFieldProps {
  field: FieldConfig;
  value: boolean;
  error?: string;
  touched?: boolean;
  onChange: (value: boolean) => void;
  onBlur: () => void;
}

export function ToggleField({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: ToggleFieldProps) {
  const showError = touched && !!error;

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl error={showError}>
        <FormControlLabel
          control={
            <Switch
              checked={value || false}
              onChange={(e) => onChange(e.target.checked)}
              onBlur={onBlur}
              disabled={field.disabled}
              size="small"
            />
          }
          label={
            <Box component="span">
              {field.label}
              {field.required && (
                <Box component="span" sx={{ color: 'error.main', ml: 0.5 }}>
                  *
                </Box>
              )}
            </Box>
          }
        />
        {field.helpText && !showError && (
          <FormHelperText sx={{ mt: -0.5 }}>{field.helpText}</FormHelperText>
        )}
        {showError && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
}

export default ToggleField;
