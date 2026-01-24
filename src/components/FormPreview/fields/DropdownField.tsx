/**
 * DropdownField Component
 * Renders a single-select dropdown field
 */

import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from '@mui/material';
import type { FieldConfig } from '../types';

interface DropdownFieldProps {
  field: FieldConfig;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export function DropdownField({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: DropdownFieldProps) {
  const showError = touched && !!error;
  const labelId = `${field.path}-label`;

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth size="small" error={showError} required={field.required}>
        <InputLabel id={labelId}>{field.label}</InputLabel>
        <Select
          labelId={labelId}
          value={value || ''}
          label={field.label}
          onChange={(e) => onChange(e.target.value as string)}
          onBlur={onBlur}
          disabled={field.disabled}
          MenuProps={{
            // Disable portal to keep menu within ThemeProvider context
            disablePortal: true,
            // Ensure menu styling works in dark mode
            PaperProps: {
              sx: {
                bgcolor: 'background.paper',
              },
            },
          }}
        >
          {!field.required && (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
          {field.options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {field.helpText && !showError && (
          <FormHelperText>{field.helpText}</FormHelperText>
        )}
        {showError && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
}

export default DropdownField;
