# Image Checklist for Documentation

Use this checklist when adding screenshots to documentation.

## Before Taking Screenshot

- [ ] Clear browser cache and close unnecessary tabs
- [ ] Use consistent browser/OS theme
- [ ] Remove sensitive data (emails, API keys, etc.)
- [ ] Use realistic but generic data
- [ ] Ensure UI is in expected state (no errors)

## Screenshot Guidelines

- [ ] Use consistent window size (1200-1600px width)
- [ ] Include relevant UI elements
- [ ] Crop to focus on important areas
- [ ] Use high DPI/retina resolution
- [ ] Save as PNG format

## After Taking Screenshot

- [ ] Resize to appropriate dimensions (1200-1600px width)
- [ ] Compress image (use ImageOptim, TinyPNG, etc.)
- [ ] Use descriptive filename (kebab-case)
- [ ] Place in correct directory (`/static/img/docs/[feature]/`)
- [ ] Add to git (or Git LFS for large files)

## Adding to Documentation

- [ ] Add image reference in markdown
- [ ] Include descriptive alt text
- [ ] Add caption if helpful
- [ ] Test image displays correctly
- [ ] Verify image looks good in light/dark mode

## Image Naming Examples

✅ Good:
- `form-builder-interface.png`
- `workflow-editor-canvas.png`
- `field-properties-panel.png`
- `mongodb-connection-dialog.png`

❌ Bad:
- `screenshot1.png`
- `image.png`
- `form.png`
- `Screen Shot 2024-01-15.png`

## Quick Reference

### Markdown Syntax
```markdown
![Alt text](/img/docs/forms/form-builder.png)
```

### With Caption
```html
<div style={{textAlign: 'center'}}>
  <img 
    src="/img/docs/forms/form-builder.png" 
    alt="Form Builder Interface"
    width="1000"
  />
  <p><em>Form Builder Interface</em></p>
</div>
```

## Tools

- **Screenshot**: Cmd+Shift+4 (macOS), Windows+Shift+S
- **Resize**: Preview (macOS), GIMP, ImageMagick
- **Compress**: ImageOptim, TinyPNG, Squoosh
- **Annotate**: Annotely, Markup, Skitch
