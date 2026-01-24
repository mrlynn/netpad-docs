/**
 * FormRenderer Component
 * Renders the actual form fields based on configuration
 */

import React from 'react';
import { Box, Button, Stack, Typography, Alert } from '@mui/material';
import { getFieldComponent, isFieldTypeSupported } from './fields';
import type { FieldConfig, FormSettings } from './types';

interface FormRendererProps {
  fields: FieldConfig[];
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  settings?: FormSettings;
  visibleFields?: string[]; // For conditional logic - fields to show
  onFieldChange: (path: string, value: any) => void;
  onFieldBlur: (path: string) => void;
}

// Map width values to MUI grid fractions
const widthToFlex: Record<string, string> = {
  full: '100%',
  half: 'calc(50% - 8px)',
  third: 'calc(33.333% - 8px)',
  quarter: 'calc(25% - 8px)',
};

export function FormRenderer({
  fields,
  values,
  errors,
  touched,
  settings = {},
  visibleFields,
  onFieldChange,
  onFieldBlur,
}: FormRendererProps) {
  const {
    submitButtonText = 'Submit',
    showSubmitButton = true,
    layout = 'single-column',
  } = settings;

  // Filter visible fields if conditional logic is active
  const displayFields = visibleFields
    ? fields.filter((f) => visibleFields.includes(f.path) || !f.hidden)
    : fields.filter((f) => !f.hidden);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In preview mode, we just prevent the form submission
    // In a real implementation, this would trigger validation and submission
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          ...(layout === 'two-column' && {
            '& > *': {
              flex: '1 1 calc(50% - 8px)',
              minWidth: 200,
            },
          }),
        }}
      >
        {displayFields.map((field) => {
          // Skip hidden fields in rendering
          if (field.type === 'hidden') {
            return null;
          }

          // Check if field type is supported
          if (!isFieldTypeSupported(field.type)) {
            return (
              <Box
                key={field.path}
                sx={{
                  width: layout === 'single-column' ? '100%' : widthToFlex[field.width || 'full'],
                }}
              >
                <Alert severity="info" sx={{ py: 0.5 }}>
                  <Typography variant="body2">
                    Field type "{field.type}" preview coming soon
                  </Typography>
                </Alert>
              </Box>
            );
          }

          const FieldComponent = getFieldComponent(field.type);
          if (!FieldComponent) return null;

          const fieldWidth =
            layout === 'single-column'
              ? '100%'
              : widthToFlex[field.width || 'full'];

          return (
            <Box
              key={field.path}
              sx={{
                width: fieldWidth,
                flexShrink: 0,
              }}
            >
              <FieldComponent
                field={field}
                value={values[field.path]}
                error={errors[field.path]}
                touched={touched[field.path]}
                onChange={(value) => onFieldChange(field.path, value)}
                onBlur={() => onFieldBlur(field.path)}
              />
            </Box>
          );
        })}
      </Box>

      {showSubmitButton && (
        <Box sx={{ mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth={layout === 'single-column'}
          >
            {submitButtonText}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default FormRenderer;
