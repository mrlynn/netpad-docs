import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

// Define types locally to avoid importing from the package at compile time
// These mirror the types from @netpad/workflow-renderer
interface WorkflowNode {
  id: string;
  type: string;
  position?: { x: number; y: number };
  data: {
    label: string;
    description?: string;
    config?: Record<string, unknown>;
  };
}

interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle?: string;
  targetHandle?: string;
  type?: string;
  data?: { label?: string };
}

interface WorkflowDefinition {
  id?: string;
  name?: string;
  description?: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

interface WorkflowViewerProps {
  /** The workflow definition to render */
  workflow: WorkflowDefinition;

  /** Height of the viewer (default: 500) */
  height?: string | number;

  /** Optional title displayed above the workflow */
  title?: string;

  /** Optional description displayed below the title */
  description?: string;

  /** Show minimap (default: true) */
  minimap?: boolean;

  /** Show zoom/pan controls (default: true) */
  controls?: boolean;

  /** Layout direction (default: 'TB' for top-to-bottom) */
  layoutDirection?: 'TB' | 'BT' | 'LR' | 'RL';

  /** Enable auto-layout with Dagre (default: true) */
  autoLayout?: boolean;

  /** Fit view to show all nodes on load (default: true) */
  fitView?: boolean;
}

function WorkflowViewerInner({
  workflow,
  height = 500,
  title,
  description,
  minimap = true,
  controls = true,
  layoutDirection = 'TB',
  autoLayout = true,
  fitView = true,
}: WorkflowViewerProps) {
  const { colorMode } = useColorMode();

  // Dynamically import the renderer to avoid SSR issues and webpack resolution problems
  const [Renderer, setRenderer] = React.useState<{
    WorkflowRenderer: React.ComponentType<any>;
    darkTheme: any;
    lightTheme: any;
  } | null>(null);

  React.useEffect(() => {
    // Use require to avoid webpack static analysis of the import
    // This ensures the module is only loaded at runtime in the browser
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const mod = require('@netpad/workflow-renderer');
      setRenderer({
        WorkflowRenderer: mod.WorkflowRenderer,
        darkTheme: mod.darkTheme,
        lightTheme: mod.lightTheme,
      });
    } catch (err) {
      console.error('Failed to load workflow-renderer:', err);
    }
  }, []);

  if (!Renderer) {
    return (
      <div className={styles.container} style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading workflow...</span>
        </div>
      </div>
    );
  }

  const { WorkflowRenderer, darkTheme, lightTheme } = Renderer;
  const theme = colorMode === 'dark' ? darkTheme : lightTheme;

  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      <div
        className={styles.container}
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        <WorkflowRenderer
          workflow={workflow}
          height="100%"
          width="100%"
          theme={theme}
          showMinimap={minimap}
          showControls={controls}
          autoLayout={autoLayout}
          layoutDirection={layoutDirection}
          fitView={fitView}
        />
      </div>
    </div>
  );
}

/**
 * WorkflowViewer - Renders a NetPad workflow using the native @netpad/workflow-renderer
 *
 * This component is a wrapper that handles:
 * - Browser-only rendering (avoids SSR issues with ReactFlow)
 * - Automatic dark/light theme switching based on Docusaurus color mode
 * - Loading state while the renderer initializes
 *
 * @example
 * ```mdx
 * import WorkflowViewer from '@site/src/components/WorkflowViewer';
 *
 * <WorkflowViewer
 *   title="My Workflow"
 *   description="This workflow handles form submissions"
 *   height={600}
 *   workflow={{
 *     id: 'my-workflow',
 *     name: 'My Workflow',
 *     nodes: [...],
 *     edges: [...],
 *   }}
 * />
 * ```
 */
export default function WorkflowViewer(props: WorkflowViewerProps) {
  return (
    <BrowserOnly fallback={
      <div className={styles.container} style={{ height: typeof props.height === 'number' ? `${props.height}px` : props.height || '500px' }}>
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading workflow...</span>
        </div>
      </div>
    }>
      {() => <WorkflowViewerInner {...props} />}
    </BrowserOnly>
  );
}
