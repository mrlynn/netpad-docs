/**
 * FormPreviewConfig Component
 * Displays the form configuration with syntax highlighting and copy functionality
 */

import React, { useState, useMemo } from 'react';
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Tooltip,
  Snackbar,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { Highlight, themes } from 'prism-react-renderer';
import { serialize } from './utils/configSerializer';
import type { FieldConfig, ConditionalRule, ComputedFieldConfig, FormSettings, ConfigFormat } from './types';

interface FormPreviewConfigProps {
  fields: FieldConfig[];
  conditionalLogic?: ConditionalRule[];
  computedFields?: ComputedFieldConfig[];
  settings?: FormSettings;
  formats?: ConfigFormat[];
  onCopy?: (format: string, config: string) => void;
}

export function FormPreviewConfig({
  fields,
  conditionalLogic,
  computedFields,
  settings,
  formats = ['typescript', 'json'],
  onCopy,
}: FormPreviewConfigProps) {
  const [format, setFormat] = useState<ConfigFormat>(formats[0] || 'typescript');
  const [copied, setCopied] = useState(false);

  const configCode = useMemo(() => {
    return serialize(
      { fields, conditionalLogic, computedFields, settings },
      format
    );
  }, [fields, conditionalLogic, computedFields, settings, format]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(configCode);
      setCopied(true);
      onCopy?.(format, configCode);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const language = format === 'json' ? 'json' : 'typescript';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Toolbar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.5,
          py: 0.5,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        {formats.length > 1 ? (
          <ToggleButtonGroup
            size="small"
            value={format}
            exclusive
            onChange={(_, value) => value && setFormat(value)}
          >
            {formats.includes('typescript') && (
              <ToggleButton value="typescript" sx={{ px: 1.5, py: 0.25, textTransform: 'none' }}>
                TypeScript
              </ToggleButton>
            )}
            {formats.includes('json') && (
              <ToggleButton value="json" sx={{ px: 1.5, py: 0.25, textTransform: 'none' }}>
                JSON
              </ToggleButton>
            )}
          </ToggleButtonGroup>
        ) : (
          <Box sx={{ fontSize: '0.875rem', fontWeight: 500, color: 'text.secondary' }}>
            {format === 'typescript' ? 'TypeScript' : 'JSON'}
          </Box>
        )}

        <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'}>
          <IconButton size="small" onClick={handleCopy}>
            {copied ? (
              <CheckIcon fontSize="small" color="success" />
            ) : (
              <ContentCopyIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Code display */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          bgcolor: '#1e1e1e',
          '& pre': {
            m: 0,
            p: 1.5,
            fontFamily: 'monospace',
            fontSize: '0.8125rem',
            lineHeight: 1.5,
            overflow: 'auto',
          },
        }}
      >
        <Highlight
          theme={themes.vsDark}
          code={configCode}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, background: 'transparent' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '2em',
                      marginRight: '1em',
                      opacity: 0.5,
                      userSelect: 'none',
                    }}
                  >
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        message="Configuration copied to clipboard"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}

export default FormPreviewConfig;
