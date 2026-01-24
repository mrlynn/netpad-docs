import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// Import custom components
import SpotlightCard from '@site/src/components/SpotlightCard';
import WorkflowEmbed from '@site/src/components/WorkflowEmbed';
import WorkflowViewer from '@site/src/components/WorkflowViewer';
import NetPadMongoControlPlane from '@site/src/components/NetPadMongoControlPlane';
import DocImage from '@site/src/components/DocImage';
import { FormPreview } from '@site/src/components/FormPreview';
import { TemplateBrowser, TemplateCard } from '@site/src/components/TemplateBrowser';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add custom components
  SpotlightCard,
  WorkflowEmbed,    // iframe-based embedding (legacy)
  WorkflowViewer,   // native React component (recommended)
  NetPadMongoControlPlane,
  DocImage,
  FormPreview,
  TemplateBrowser,
  TemplateCard,
};
