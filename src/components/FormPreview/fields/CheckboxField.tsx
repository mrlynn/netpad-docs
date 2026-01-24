/**
 * CheckboxField Component
 * Renders a checkbox group field for multiple selections
 */

import React from 'react';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Box,
} from '@mui/material';
import type { FieldConfig } from '../types';

interface CheckboxFieldProps {
  field: FieldConfig;
  value: string[];
  error?: string;
  touched?: boolean;
  onChange: (value: string[]) => void;
  onBlur: () => void;
}

export function CheckboxField({
  field,
  value = [],
  error,
  touched,
  onChange,
  onBlur,
}: CheckboxFieldProps) {
  const showError = touched && !!error;

  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange([...value, optionValue]);
    } else {
      onChange(value.filter((v) => v !== optionValue));
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl error={showError} required={field.required}>
        <FormLabel id={`${field.path}-label`}>{field.label}</FormLabel>
        <FormGroup aria-labelledby={`${field.path}-label`} onBlur={onBlur}>
          {field.options?.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  size="small"
                  checked={value.includes(option.value)}
                  onChange={(e) => handleChange(option.value, e.target.checked)}
                  disabled={field.disabled}
                />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
        {field.helpText && !showError && (
          <FormHelperText>{field.helpText}</FormHelperText>
        )}
        {showError && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Box>
  );
}

export default CheckboxField;
