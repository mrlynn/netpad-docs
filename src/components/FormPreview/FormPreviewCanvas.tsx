/**
 * FormPreviewCanvas Component
 * Responsive container that simulates different viewport sizes
 */

import React from 'react';
import { Box, Paper } from '@mui/material';
import type { Viewport } from './types';

interface FormPreviewCanvasProps {
  viewport: Viewport;
  children: React.ReactNode;
  height?: number | 'auto';
}

const viewportWidths: Record<Viewport, number | '100%'> = {
  mobile: 375,
  tablet: 768,
  desktop: '100%',
};

export function FormPreviewCanvas({
  viewport,
  children,
  height = 'auto',
}: FormPreviewCanvasProps) {
  const width = viewportWidths[viewport];
  const isConstrained = typeof width === 'number';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        p: 2,
        bgcolor: 'action.hover',
        minHeight: 200,
        height: height === 'auto' ? 'auto' : height,
        maxHeight: 600,
        overflow: 'auto',
      }}
    >
      <Paper
        elevation={isConstrained ? 3 : 0}
        sx={{
          width: width,
          maxWidth: '100%',
          minHeight: 100,
          bgcolor: 'background.paper',
          borderRadius: isConstrained ? 2 : 0,
          overflow: 'hidden',
          transition: 'width 0.3s ease',
        }}
      >
        <Box sx={{ p: 2 }}>{children}</Box>
      </Paper>
    </Box>
  );
}

export default FormPreviewCanvas;
