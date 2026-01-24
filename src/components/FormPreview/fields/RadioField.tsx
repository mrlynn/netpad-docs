/**
 * RadioField Component
 * Renders a radio button group field
 */

import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Box,
} from '@mui/material';
import type { FieldConfig } from '../types';

interface RadioFieldProps {
  field: FieldConfig;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
}

export function RadioField({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: RadioFieldProps) {
  const showError = touched && !!error;

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl error={showError} required={field.required}>
        <FormLabel id={`${field.path}-label`}>{field.label}</FormLabel>
        <RadioGroup
          aria-labelledby={`${field.path}-label`}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        >
          {field.options?.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio size="small" />}
              label={option.label}
              disabled={field.disabled}
            />
          ))}
        </RadioGroup>
        {field.helpText && !showError && (
          <FormHelperText>{field.helpText}</FormHelperText>
        )}
        {showError && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
}

export default RadioField;
