# Workflow Embedding

NetPad supports embedding workflows in external sites for documentation, tutorials, and sharing workflow designs. Workflows can be embedded in **read-only viewer mode** for visualization.

## Live Demo

Here's an embedded workflow viewer:

<WorkflowEmbed
  workflowSlug="it-helpdesk-router"
  theme="auto"
  height="700px"
/>

:::info Prerequisites for Demo
For this demo to work, you need:
1. NetPad running locally at `http://localhost:3000`
2. A workflow with slug `it-helpdesk-router`
3. **"Allow public viewing"** enabled in the workflow's Embed settings

If you see "Workflow not found", ensure these requirements are met.
:::



## Embedding in Docusaurus/MDX

Use the `WorkflowEmbed` component directly in your MDX files:

```mdx
<WorkflowEmbed
  workflowSlug="your-workflow-slug"
  theme="auto"
  height="500px"
/>
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `workflowSlug` | string | required | The workflow slug to embed |
| `theme` | string | `'auto'` | `'light'`, `'dark'`, or `'auto'` |
| `hideHeader` | boolean | `false` | Hide the header bar |
| `hideBranding` | boolean | `false` | Hide NetPad branding |
| `height` | string | `'500px'` | Container height |
| `baseUrl` | string | `'http://localhost:3000'` | NetPad base URL |

### Examples

**Dark theme with hidden header:**

<WorkflowEmbed
  workflowSlug="it-helpdesk-router"
  theme="dark"
  hideHeader={true}
  height="400px"
/>

```mdx
<WorkflowEmbed
  workflowSlug="it-helpdesk-router"
  theme="dark"
  hideHeader={true}
  height="400px"
/>
```

## Embedding in Other Sites

### Method 1: Data Attributes (Auto-Initialization)

The simplest way to embed a workflow viewer in non-React sites:

```html
<script src="https://www.netpad.io/workflow-embed.js"></script>
<div
  data-netpad-workflow-viewer="your-workflow-slug"
  data-theme="dark"
  data-hide-header="true"
  data-hide-branding="true"
  style="height: 500px;"
></div>
```

### Method 2: JavaScript SDK

For more control, use the JavaScript API:

```html
<div id="workflow-container"></div>

<script src="https://www.netpad.io/workflow-embed.js"></script>
<script>
  NetPad.embedViewer('workflow-container', 'your-workflow-slug', {
    theme: 'auto',
    hideHeader: false,
    hideBranding: false,
    height: '600px',
    metadata: true,
    onLoad: function() {
      console.log('Workflow viewer loaded');
    },
    onError: function(error) {
      console.error('Error loading workflow:', error);
    }
  });
</script>
```


### Method 3: iframe

Direct iframe embedding:

```html
<iframe
  src="https://www.netpad.io/workflows/view/your-workflow-slug?embedded=true&theme=dark&hideHeader=true"
  width="100%"
  height="600"
  frameborder="0"
  style="border-radius: 8px;"
></iframe>
```

## Configuration Options

### Data Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-netpad-workflow-viewer` | workflow slug | The workflow to embed |
| `data-theme` | `light`, `dark`, `auto` | Color theme |
| `data-hide-header` | `true`, `false` | Hide the header bar |
| `data-hide-branding` | `true`, `false` | Hide NetPad branding |

### JavaScript SDK Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | `'auto'` | `'light'`, `'dark'`, or `'auto'` |
| `hideHeader` | boolean | `false` | Hide header bar |
| `hideBranding` | boolean | `false` | Hide NetPad branding |
| `height` | string | `'400px'` | Container height |
| `width` | string | `'100%'` | Container width |
| `metadata` | boolean | `false` | Include metadata (stats, variables) |
| `onLoad` | function | - | Callback when loaded |
| `onError` | function | - | Error callback |

### URL Parameters (iframe)

| Parameter | Values | Description |
|-----------|--------|-------------|
| `embedded` | `true` | Enable embedded mode |
| `theme` | `light`, `dark`, `auto` | Color theme |
| `hideHeader` | `true` | Hide header bar |
| `hideBranding` | `true` | Hide NetPad branding |
| `metadata` | `true` | Include metadata |

## SDK Return Object

The `embedViewer` function returns an object with control methods:

```javascript
const embed = NetPad.embedViewer('container', 'workflow-slug', options);

// Get the iframe element
console.log(embed.iframe);

// Reload the viewer
embed.reload();

// Remove the embed
embed.destroy();
```

## Enabling Public Viewing

Before a workflow can be embedded, you must enable public viewing:

1. Open the workflow in the editor
2. Click the **Settings** (gear icon)
3. Go to the **Embed** tab
4. Enable **"Allow public viewing (read-only)"**
5. Save settings

## Security Notes

- Embedded workflows are **read-only** - users cannot edit or execute them
- Only workflows with `allowPublicViewing` enabled can be embedded
- Sensitive data (connection strings, API keys) is never exposed
- No authentication required for viewing

## Use Cases

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>

<SpotlightCard>

### Documentation
Embed workflow diagrams in your documentation to show users how automations work.

</SpotlightCard>

<SpotlightCard>

### Tutorials
Include interactive workflow examples in blog posts and tutorials.

</SpotlightCard>

<SpotlightCard>

### Sharing
Share workflow designs with stakeholders who don't need execution access.

</SpotlightCard>

<SpotlightCard>

### Portfolios
Showcase your workflow designs in portfolios or case studies.

</SpotlightCard>

</div>

## Comparison: Viewer vs Execution

| Feature | Viewer Embed | Execution Embed |
|---------|--------------|-----------------|
| Purpose | Documentation | Automation |
| Read-Only | Yes | No |
| Can Execute | No | Yes |
| Shows Structure | Yes | No |
| Shows Status | No | Yes |
| Requires Token | No | Optional |

## Next Steps

- [Creating Workflows](./creating-workflows.md) - Learn to build workflows
- [Node Types](./node-types.md) - Explore available nodes
- [Workflow Execution](./execution.md) - Run and monitor workflows
