# Brand Standards

This guide outlines the NetPad brand standards including logos, colors, typography, and usage guidelines. Follow these standards to maintain consistency across all NetPad materials.

## Logo

### Primary Logo

The NetPad logo consists of the logomark (icon) and wordmark (text). Use the full logo when space permits.

![NetPad Logo](/img/logo.png)

### Logo Variations

| Variation | Use Case |
|-----------|----------|
| Full Logo | Marketing materials, headers, presentations |
| Logomark Only | Favicons, app icons, small spaces |
| Wordmark Only | Text-heavy contexts where icon isn't needed |

### Logo Clear Space

Maintain clear space around the logo equal to the height of the "N" in NetPad. This ensures the logo remains legible and impactful.

### Logo Don'ts

- Don't stretch or distort the logo
- Don't change the logo colors outside approved palette
- Don't add effects (shadows, gradients, outlines)
- Don't rotate the logo
- Don't place on busy backgrounds without sufficient contrast
- Don't recreate or modify the logomark

## Colors

### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **NetPad Blue** | `#3b82f6` | rgb(59, 130, 246) | Primary brand color, CTAs, links |
| **NetPad Dark** | `#1e293b` | rgb(30, 41, 59) | Dark backgrounds, text |
| **NetPad White** | `#ffffff` | rgb(255, 255, 255) | Light backgrounds, text on dark |

### Secondary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Success Green** | `#22c55e` | rgb(34, 197, 94) | Success states, confirmations |
| **Warning Amber** | `#f59e0b` | rgb(245, 158, 11) | Warnings, cautions |
| **Error Red** | `#ef4444` | rgb(239, 68, 68) | Errors, destructive actions |
| **Info Blue** | `#0ea5e9` | rgb(14, 165, 233) | Informational messages |

### Neutral Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Gray 50** | `#f8fafc` | Light backgrounds |
| **Gray 100** | `#f1f5f9` | Subtle backgrounds |
| **Gray 200** | `#e2e8f0` | Borders, dividers |
| **Gray 300** | `#cbd5e1` | Disabled states |
| **Gray 400** | `#94a3b8` | Placeholder text |
| **Gray 500** | `#64748b` | Secondary text |
| **Gray 600** | `#475569` | Body text |
| **Gray 700** | `#334155` | Headings |
| **Gray 800** | `#1e293b` | Primary text |
| **Gray 900** | `#0f172a` | Darkest text |

### Color Usage Guidelines

- Use **NetPad Blue** for primary actions and interactive elements
- Use **NetPad Dark** for text and dark mode backgrounds
- Ensure sufficient contrast ratios (WCAG AA minimum)
- Use semantic colors consistently (green for success, red for errors)

## Typography

### Font Family

NetPad uses **Inter** as the primary typeface for its clean, modern appearance and excellent readability across all sizes.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
```

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Emphasized text, labels |
| Semibold | 600 | Subheadings, buttons |
| Bold | 700 | Headings, important text |

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 36px / 2.25rem | Bold (700) | 1.2 |
| H2 | 30px / 1.875rem | Bold (700) | 1.25 |
| H3 | 24px / 1.5rem | Semibold (600) | 1.3 |
| H4 | 20px / 1.25rem | Semibold (600) | 1.4 |
| H5 | 18px / 1.125rem | Medium (500) | 1.4 |
| Body | 16px / 1rem | Regular (400) | 1.6 |
| Small | 14px / 0.875rem | Regular (400) | 1.5 |
| Caption | 12px / 0.75rem | Regular (400) | 1.4 |

### Code Typography

For code blocks and inline code, use a monospace font:

```css
font-family: 'Fira Code', 'JetBrains Mono', 'SF Mono', Consolas, monospace;
```

## Voice & Tone

### Brand Voice

NetPad's voice is:

- **Clear** - We explain complex concepts simply
- **Helpful** - We guide users to success
- **Professional** - We're reliable and trustworthy
- **Approachable** - We're friendly, not formal

### Writing Guidelines

1. **Be concise** - Get to the point quickly
2. **Use active voice** - "Click the button" not "The button should be clicked"
3. **Address users directly** - Use "you" and "your"
4. **Avoid jargon** - Explain technical terms when necessary
5. **Be positive** - Focus on what users can do, not limitations

### Tone by Context

| Context | Tone |
|---------|------|
| Documentation | Helpful, instructional |
| Error messages | Clear, actionable, not blaming |
| Success messages | Celebratory, confirming |
| Marketing | Confident, benefit-focused |
| Support | Empathetic, solution-oriented |

## Iconography

### Icon Style

NetPad uses outline-style icons with consistent stroke widths:

- **Stroke width**: 1.5px - 2px
- **Size**: 16px, 20px, 24px standard sizes
- **Style**: Rounded corners, consistent weight
- **Color**: Inherit from text color or use brand colors

### Recommended Icon Libraries

- [Heroicons](https://heroicons.com/) (primary)
- [Lucide](https://lucide.dev/)
- [Phosphor Icons](https://phosphoricons.com/)

## UI Components

### Buttons

| Type | Background | Text | Usage |
|------|------------|------|-------|
| Primary | NetPad Blue | White | Main actions, CTAs |
| Secondary | Transparent | NetPad Blue | Secondary actions |
| Outline | Transparent + Border | Gray 700 | Tertiary actions |
| Danger | Error Red | White | Destructive actions |
| Ghost | Transparent | Gray 600 | Subtle actions |

### Button Sizing

| Size | Padding | Font Size | Height |
|------|---------|-----------|--------|
| Small | 8px 12px | 14px | 32px |
| Medium | 10px 16px | 16px | 40px |
| Large | 12px 24px | 18px | 48px |

### Border Radius

- **Small**: 4px (inputs, small elements)
- **Medium**: 6px (buttons, cards)
- **Large**: 8px (modals, panels)
- **Full**: 9999px (pills, avatars)

### Shadows

```css
/* Subtle */
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

/* Small */
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

/* Medium */
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Large */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

/* XL */
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

## Spacing

Use a consistent 4px base unit for spacing:

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight spacing |
| space-2 | 8px | Related elements |
| space-3 | 12px | Default padding |
| space-4 | 16px | Section spacing |
| space-5 | 20px | Component gaps |
| space-6 | 24px | Large gaps |
| space-8 | 32px | Section separation |
| space-10 | 40px | Major sections |
| space-12 | 48px | Page sections |
| space-16 | 64px | Hero spacing |

## Dark Mode

NetPad supports both light and dark color modes. Design with both in mind:

### Dark Mode Colors

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | Gray 50 | Gray 900 |
| Surface | White | Gray 800 |
| Text Primary | Gray 900 | Gray 100 |
| Text Secondary | Gray 600 | Gray 400 |
| Border | Gray 200 | Gray 700 |
| Primary | NetPad Blue | NetPad Blue |

### Dark Mode Guidelines

- Maintain consistent contrast ratios
- Don't simply invert colors
- Use slightly desaturated colors in dark mode
- Test all components in both modes

## Accessibility

### Color Contrast

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### Focus States

All interactive elements must have visible focus states:

```css
:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

### Motion

- Respect `prefers-reduced-motion` preference
- Keep animations under 300ms
- Avoid flashing or strobing effects

## Assets & Downloads

### Logo Files

Logo files are available in the following formats:
- PNG (for web and presentations)
- SVG (for scalable graphics)
- Favicon (ICO, various sizes)

### Brand Kit

Contact the NetPad team for access to the complete brand kit including:
- Logo variations
- Color swatches
- Typography specimens
- Icon set
- Presentation templates

## Questions?

For brand-related questions or asset requests, please contact the NetPad team or open an issue on GitHub.

## Next Steps

- [Adding Images](./adding-images.md) - Guidelines for images in documentation
- [Contributing](../development/contributing.md) - Contribute to NetPad
