/**
 * FormPreviewToolbar Component
 * Toolbar with tabs (Preview/Config), viewport switcher, and reset button
 */

import React from 'react';
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Tooltip,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import type { Viewport } from './types';

type TabValue = 'preview' | 'config';

interface FormPreviewToolbarProps {
  activeTab: TabValue;
  onTabChange: (tab: TabValue) => void;
  viewport: Viewport;
  onViewportChange: (viewport: Viewport) => void;
  showViewportSwitcher: boolean;
  showConfigTab: boolean;
  showReset: boolean;
  onReset: () => void;
}

export function FormPreviewToolbar({
  activeTab,
  onTabChange,
  viewport,
  onViewportChange,
  showViewportSwitcher,
  showConfigTab,
  showReset,
  onReset,
}: FormPreviewToolbarProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1.5,
        py: 0.75,
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
      }}
    >
      {/* Left: Tab switcher */}
      <ToggleButtonGroup
        size="small"
        value={activeTab}
        exclusive
        onChange={(_, value) => value && onTabChange(value)}
      >
        <ToggleButton value="preview" sx={{ px: 2, py: 0.5, textTransform: 'none' }}>
          Preview
        </ToggleButton>
        {showConfigTab && (
          <ToggleButton value="config" sx={{ px: 2, py: 0.5, textTransform: 'none' }}>
            Config
          </ToggleButton>
        )}
      </ToggleButtonGroup>

      {/* Right: Viewport switcher and reset */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {showViewportSwitcher && activeTab === 'preview' && (
          <ToggleButtonGroup
            size="small"
            value={viewport}
            exclusive
            onChange={(_, value) => value && onViewportChange(value)}
          >
            <ToggleButton value="mobile" sx={{ px: 1 }}>
              <Tooltip title="Mobile">
                <SmartphoneIcon fontSize="small" />
              </Tooltip>
            </ToggleButton>
            <ToggleButton value="tablet" sx={{ px: 1 }}>
              <Tooltip title="Tablet">
                <TabletIcon fontSize="small" />
              </Tooltip>
            </ToggleButton>
            <ToggleButton value="desktop" sx={{ px: 1 }}>
              <Tooltip title="Desktop">
                <DesktopWindowsIcon fontSize="small" />
              </Tooltip>
            </ToggleButton>
          </ToggleButtonGroup>
        )}

        {showReset && activeTab === 'preview' && (
          <Tooltip title="Reset form">
            <IconButton size="small" onClick={onReset}>
              <RefreshIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
}

export default FormPreviewToolbar;
