import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// Import custom components
import SpotlightCard from '@site/src/components/SpotlightCard';
import WorkflowEmbed from '@site/src/components/WorkflowEmbed';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add custom components
  SpotlightCard,
  WorkflowEmbed,
};
