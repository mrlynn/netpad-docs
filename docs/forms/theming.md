# Form Theming & Branding

Customize the appearance of your forms to match your brand identity with NetPad's comprehensive theming system.

## Overview

NetPad provides extensive theming options to ensure your forms look professional and align with your brand:

- **Header Styles**: Color, gradient, or image backgrounds
- **Color Schemes**: Primary, secondary, error, and success colors
- **Preset Themes**: Ready-to-use professional themes
- **Custom CSS**: Full styling control for advanced users
- **Dark Mode**: Built-in dark mode support
- **Logo & Branding**: Company logo, favicon, and custom fonts

## Header Styles

### Solid Color

Simple, clean header with a single color.

```javascript
{
  headerStyle: 'color',
  headerColor: '#1976d2'
}
```

### Gradient

Eye-catching gradient headers.

```javascript
{
  headerStyle: 'gradient',
  gradientStart: '#1976d2',
  gradientEnd: '#9c27b0',
  gradientDirection: 'to-right' // to-right, to-bottom, to-bottom-right
}
```

### Image Background

Custom image headers with optional overlay.

```javascript
{
  headerStyle: 'image',
  headerImage: '/images/header-bg.jpg',
  headerOverlay: true,
  headerOverlayColor: 'rgba(0, 0, 0, 0.5)'
}
```

## Color Schemes

Define your form's color palette:

| Color | Usage |
|-------|-------|
| **Primary** | Buttons, links, active states |
| **Secondary** | Alternative actions, highlights |
| **Error** | Validation errors, warnings |
| **Success** | Success messages, completed states |
| **Background** | Form background color |
| **Text** | Primary text color |
| **Text Secondary** | Help text, labels |

### Example Color Configuration

```javascript
{
  colors: {
    primary: '#1976d2',
    secondary: '#9c27b0',
    error: '#d32f2f',
    success: '#2e7d32',
    background: '#ffffff',
    text: '#333333',
    textSecondary: '#666666'
  }
}
```

## Preset Themes

NetPad includes 6 preset themes for quick styling:

| Theme | Description | Best For |
|-------|-------------|----------|
| **Professional** | Clean, corporate blue palette | Business forms, enterprise |
| **Creative** | Vibrant, artistic colors | Design, marketing |
| **Minimal** | Simple, subtle styling | Content-focused forms |
| **Bold** | High-contrast, striking | Attention-grabbing forms |
| **Nature** | Earth tones, organic feel | Environmental, wellness |
| **Tech** | Dark, modern aesthetic | Technology, startups |

### Applying a Preset Theme

1. Open your form in the Form Builder
2. Navigate to **Settings** > **Appearance**
3. Click **Themes** tab
4. Select a preset theme
5. Optionally customize the theme colors
6. Save changes

## Custom CSS

For advanced customization, add custom CSS:

```css
/* Custom form styling */
.netpad-form {
  font-family: 'Inter', sans-serif;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Custom field styling */
.netpad-field-input {
  border-radius: 8px;
  border-color: #e0e0e0;
}

.netpad-field-input:focus {
  border-color: #1976d2;
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
}

/* Custom button styling */
.netpad-submit-button {
  background: linear-gradient(135deg, #1976d2, #9c27b0);
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 600;
}
```

### CSS Classes Reference

| Class | Element |
|-------|---------|
| `.netpad-form` | Main form container |
| `.netpad-header` | Form header section |
| `.netpad-title` | Form title |
| `.netpad-description` | Form description |
| `.netpad-field` | Individual field wrapper |
| `.netpad-field-label` | Field label |
| `.netpad-field-input` | Field input element |
| `.netpad-field-help` | Help text |
| `.netpad-field-error` | Error message |
| `.netpad-submit-button` | Submit button |
| `.netpad-progress` | Multi-page progress indicator |

## Dark Mode

NetPad forms support dark mode automatically:

### Automatic Detection

Forms detect the user's system preference:

```javascript
{
  darkMode: 'auto' // auto, light, dark
}
```

### Dark Mode Colors

Configure specific colors for dark mode:

```javascript
{
  darkMode: {
    background: '#121212',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    inputBackground: '#1e1e1e',
    borderColor: '#333333'
  }
}
```

## Logo & Branding

### Form Logo

Add your company logo to form headers:

1. **Upload Logo**: Settings > Appearance > Logo
2. **Configure Position**: Left, center, or right
3. **Set Size**: Small, medium, or large
4. **Add Link**: Optionally link to your website

```javascript
{
  logo: {
    url: '/images/logo.png',
    position: 'left',
    size: 'medium',
    link: 'https://yourcompany.com'
  }
}
```

### Favicon

Custom favicon for published forms:

```javascript
{
  favicon: '/images/favicon.ico'
}
```

### Custom Fonts

Use custom fonts from Google Fonts or your own:

```javascript
{
  fonts: {
    heading: 'Montserrat',
    body: 'Open Sans',
    customUrl: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans:wght@400;600&display=swap'
  }
}
```

## Theme Configuration

### Complete Theme Object

```typescript
interface FormTheme {
  // Header
  headerStyle: 'color' | 'gradient' | 'image';
  headerColor?: string;
  gradientStart?: string;
  gradientEnd?: string;
  gradientDirection?: 'to-right' | 'to-bottom' | 'to-bottom-right';
  headerImage?: string;
  headerOverlay?: boolean;
  headerOverlayColor?: string;

  // Colors
  colors: {
    primary: string;
    secondary: string;
    error: string;
    success: string;
    background: string;
    text: string;
    textSecondary: string;
  };

  // Dark Mode
  darkMode: 'auto' | 'light' | 'dark';
  darkModeColors?: {
    background: string;
    text: string;
    textSecondary: string;
    inputBackground: string;
    borderColor: string;
  };

  // Branding
  logo?: {
    url: string;
    position: 'left' | 'center' | 'right';
    size: 'small' | 'medium' | 'large';
    link?: string;
  };
  favicon?: string;
  fonts?: {
    heading: string;
    body: string;
    customUrl?: string;
  };

  // Layout
  borderRadius: 'none' | 'small' | 'medium' | 'large';
  fieldSpacing: 'compact' | 'normal' | 'relaxed';
  maxWidth: string; // e.g., '640px', '100%'

  // Custom CSS
  customCSS?: string;
}
```

## Applying Themes

### Via Form Builder

1. Open form in Form Builder
2. Click **Settings** (gear icon)
3. Select **Appearance** tab
4. Configure theme options
5. Preview changes in real-time
6. Save form

### Via API

```http
PATCH /api/forms/{formId}?orgId={orgId}
Content-Type: application/json

{
  "theme": {
    "headerStyle": "gradient",
    "gradientStart": "#1976d2",
    "gradientEnd": "#9c27b0",
    "colors": {
      "primary": "#1976d2"
    }
  }
}
```

## Best Practices

1. **Consistent Branding**: Use your brand colors and fonts
2. **Accessibility**: Ensure sufficient color contrast (WCAG AA)
3. **Mobile-Friendly**: Test themes on mobile devices
4. **Dark Mode**: Always configure dark mode colors
5. **Performance**: Optimize logo images for web
6. **Test**: Preview before publishing

## Examples

### Corporate Form

```javascript
{
  headerStyle: 'color',
  headerColor: '#0d47a1',
  colors: {
    primary: '#0d47a1',
    secondary: '#1565c0'
  },
  borderRadius: 'small',
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  }
}
```

### Creative Form

```javascript
{
  headerStyle: 'gradient',
  gradientStart: '#ff6b6b',
  gradientEnd: '#feca57',
  gradientDirection: 'to-bottom-right',
  colors: {
    primary: '#ff6b6b',
    secondary: '#feca57'
  },
  borderRadius: 'large'
}
```

### Minimal Form

```javascript
{
  headerStyle: 'color',
  headerColor: '#ffffff',
  colors: {
    primary: '#333333',
    background: '#fafafa',
    text: '#333333'
  },
  borderRadius: 'none',
  fieldSpacing: 'relaxed'
}
```

## Next Steps

- [Publishing Forms](./publishing.md) - Publish your themed forms
- [Multi-Page Forms](./multi-page-forms.md) - Theme multi-step forms
- [Brand Standards](../guides/brand-standards.md) - Brand guidelines
