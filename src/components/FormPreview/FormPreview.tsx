/**
 * FormPreview Component
 * Main container component that orchestrates the live form preview experience
 */

import React, { useState, useMemo } from 'react';
import { Box, Paper, Typography, Alert } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import FormPreviewToolbar from './FormPreviewToolbar';
import FormPreviewCanvas from './FormPreviewCanvas';
import FormPreviewConfig from './FormPreviewConfig';
import FormRenderer from './FormRenderer';
import { useFormState } from './hooks/useFormState';

import type { FormPreviewProps, Viewport, FieldConfig } from './types';

// Create MUI theme based on mode
function createFormTheme(mode: 'light' | 'dark', primaryColor?: string) {
  return createTheme({
    palette: {
      mode,
      primary: primaryColor
        ? {
            main: primaryColor,
          }
        : undefined,
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });
}

// Detect system preference for dark mode
function useSystemTheme(): 'light' | 'dark' {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'dark';
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return systemTheme;
}

export function FormPreview({
  // Form configuration
  fields,
  template,
  settings,
  theme: themeConfig,
  conditionalLogic,
  computedFields,

  // Preview behavior
  initialValues = {},
  defaultViewport = 'desktop',
  showViewportSwitcher = true,
  showConfigTab = true,
  configFormats = ['typescript', 'json'],
  showReset = true,
  hint,
  height = 'auto',

  // Callbacks
  onValuesChange,
  onValidationChange,
  onConfigCopy,
}: FormPreviewProps) {
  // State
  const [activeTab, setActiveTab] = useState<'preview' | 'config'>('preview');
  const [viewport, setViewport] = useState<Viewport>(defaultViewport);

  // Resolve theme mode
  const systemTheme = useSystemTheme();
  const themeMode: 'light' | 'dark' =
    themeConfig?.mode === 'auto'
      ? systemTheme
      : themeConfig?.mode || 'dark';

  // Create MUI theme
  const muiTheme = useMemo(
    () => createFormTheme(themeMode, themeConfig?.primaryColor),
    [themeMode, themeConfig?.primaryColor]
  );

  // Resolve fields from template or props
  // TODO: Implement template loading when @netpad/templates is available
  const resolvedFields: FieldConfig[] = useMemo(() => {
    if (template) {
      // Placeholder for template loading
      console.warn(`Template "${template}" loading not yet implemented`);
      return fields || [];
    }
    return fields || [];
  }, [fields, template]);

  // Form state management
  const {
    values,
    errors,
    touched,
    setValue,
    setTouched,
    reset,
  } = useFormState(resolvedFields, initialValues, onValuesChange, onValidationChange);

  // Apply conditional logic to determine visible fields
  // TODO: Implement conditional logic hook in Phase 3
  const visibleFields = useMemo(() => {
    // For now, show all fields that aren't explicitly hidden
    return resolvedFields
      .filter((f) => !f.hidden)
      .map((f) => f.path);
  }, [resolvedFields]);

  // Validate that we have fields to render
  if (!resolvedFields || resolvedFields.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Alert severity="warning">
          No fields configured. Please provide a `fields` array or a valid `template` name.
        </Alert>
      </Paper>
    );
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Paper
        elevation={0}
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: 'background.default',
        }}
      >
        {/* Toolbar */}
        <FormPreviewToolbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          viewport={viewport}
          onViewportChange={setViewport}
          showViewportSwitcher={showViewportSwitcher}
          showConfigTab={showConfigTab}
          showReset={showReset}
          onReset={reset}
        />

        {/* Content */}
        <Box sx={{ minHeight: 200 }}>
          {activeTab === 'preview' ? (
            <>
              <FormPreviewCanvas viewport={viewport} height={height}>
                <FormRenderer
                  fields={resolvedFields}
                  values={values}
                  errors={errors}
                  touched={touched}
                  settings={settings}
                  visibleFields={visibleFields}
                  onFieldChange={setValue}
                  onFieldBlur={setTouched}
                />
              </FormPreviewCanvas>

              {/* Hint text */}
              {hint && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1.5,
                    borderTop: 1,
                    borderColor: 'divider',
                    bgcolor: 'action.hover',
                  }}
                >
                  <InfoOutlinedIcon
                    fontSize="small"
                    sx={{ color: 'text.secondary' }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {hint}
                  </Typography>
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ height: height === 'auto' ? 400 : height }}>
              <FormPreviewConfig
                fields={resolvedFields}
                conditionalLogic={conditionalLogic}
                computedFields={computedFields}
                settings={settings}
                formats={configFormats}
                onCopy={onConfigCopy}
              />
            </Box>
          )}
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default FormPreview;
