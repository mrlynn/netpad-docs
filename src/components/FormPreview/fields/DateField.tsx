/**
 * DateField Component
 * Renders a date picker field using native HTML date input
 */

import React from 'react';
import { TextField, FormHelperText, Box, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import type { FieldConfig } from '../types';

interface DateFieldProps {
  field: FieldConfig;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export function DateField({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: DateFieldProps) {
  const showError = touched && !!error;

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        size="small"
        type="date"
        label={field.label}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={field.required}
        disabled={field.disabled}
        error={showError}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarTodayIcon fontSize="small" sx={{ opacity: 0.5 }} />
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

export default DateField;
