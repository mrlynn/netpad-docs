# .github/workflows/deploy.yml

```yml
name: Deploy Docusaurus to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build Docusaurus site
        run: |
          export NODE_OPTIONS=--max_old_space_size=4096
          npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          cname: docs.netpad.io 
```

# .gitignore

```
# Dependencies
/node_modules

# Production
/build

# Generated files
.docusaurus
.cache-loader

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

# .vscode/settings.json

```json
{
    "git.ignoreLimitWarning": true
}
```

# blog/2019-05-28-first-blog-post.md

```md
---
slug: first-blog-post
title: First Blog Post
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---

Lorem ipsum dolor sit amet...

<!-- truncate -->

...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

```

# blog/2019-05-29-long-blog-post.md

```md
---
slug: long-blog-post
title: Long Blog Post
authors: yangshun
tags: [hello, docusaurus]
---

This is the summary of a very long blog post,

Use a `<!--` `truncate` `-->` comment to limit blog post size in the list view.

<!-- truncate -->

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

```

# blog/2021-08-01-mdx-blog-post.mdx

```mdx
---
slug: mdx-blog-post
title: MDX Blog Post
authors: [slorber]
tags: [docusaurus]
---

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

:::

{/* truncate */}

For example, use JSX to create an interactive button:

\`\`\`js
<button onClick={() => alert('button clicked!')}>Click me!</button>
\`\`\`

<button onClick={() => alert('button clicked!')}>Click me!</button>

```

# blog/2021-08-26-welcome/docusaurus-plushie-banner.jpeg

This is a binary file of the type: Image

# blog/2021-08-26-welcome/index.md

```md
---
slug: welcome
title: Welcome
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
---

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Here are a few tips you might find useful.

<!-- truncate -->

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.

```

# blog/authors.yml

```yml
yangshun:
  name: Yangshun Tay
  title: Front End Engineer @ Facebook
  url: https://github.com/yangshun
  image_url: https://github.com/yangshun.png
  page: true
  socials:
    x: yangshunz
    github: yangshun

slorber:
  name: Sébastien Lorber
  title: Docusaurus maintainer
  url: https://sebastienlorber.com
  image_url: https://github.com/slorber.png
  page:
    # customize the url of the author page at /blog/authors/<permalink>
    permalink: '/all-sebastien-lorber-articles'
  socials:
    x: sebastienlorber
    linkedin: sebastienlorber
    github: slorber
    newsletter: https://thisweekinreact.com

```

# blog/tags.yml

```yml
facebook:
  label: Facebook
  permalink: /facebook
  description: Facebook tag description

hello:
  label: Hello
  permalink: /hello
  description: Hello tag description

docusaurus:
  label: Docusaurus
  permalink: /docusaurus
  description: Docusaurus tag description

hola:
  label: Hola
  permalink: /hola
  description: Hola tag description

```

# CNAME

```
docs.netpad.io 
```

# docs/advanced/api.md

```md
# API Documentation

API access for NetPad is planned for future releases. Stay tuned for updates and documentation on how to integrate NetPad with your own tools and workflows. 
```

# docs/advanced/customization.md

```md
# Customization

NetPad will support advanced customization options in future releases, including:
- User preferences (theme, settings, etc.)
- Custom shape palettes
- Editor layout adjustments

Check back for updates as these features are released! 
```

# docs/advanced/troubleshooting.md

```md
# Troubleshooting

If you encounter issues while using NetPad, try the following steps:

- Refresh the page or restart your browser
- Check your internet connection
- Make sure you are using a supported browser
- Sign out and sign back in if authentication issues occur

For persistent problems, contact support or check the FAQ for solutions. 
```

# docs/developer/data-model.md

```md
# Data Model: MongoDB Persistence

NetPad uses MongoDB Atlas for cloud persistence of diagrams, shapes, and user data. All MongoDB access is handled via `connectDB` from `@/lib/mongodb`.

## Diagram Document Structure
A typical diagram document in MongoDB includes:

\`\`\`json
{
  "_id": ObjectId,
  "userId": "user@example.com" | null, // null for anonymous
  "title": "Network Diagram",
  "createdAt": ISODate,
  "updatedAt": ISODate,
  "shapes": [ ... ], // Array of shape objects
  "connections": [ ... ], // Array of connector objects
  // ...other metadata
}
\`\`\`

## Shape Object Structure
Each shape in the `shapes` array should have:
- `id`: Unique identifier
- `type`: Shape type (e.g., rectangle, circle, hexagon, etc.)
- `x`, `y`: Position
- `width`, `height`: Dimensions
- `label`: Text label
- `fill`: Fill color
- `stroke`: Stroke color
- `strokeWidth`: Stroke width
- Shape-specific properties (e.g., points for polygons)

## Connector Object Structure
Each connector in the `connections` array should have:
- `id`: Unique identifier
- `from`: Shape id and connector point
- `to`: Shape id and connector point
- `type`: Connector type (e.g., straight, elbow)
- `label`: Optional label

## Best Practices
- All shape and diagram properties must be serializable to MongoDB.
- Use Mongoose models for validation and schema enforcement.
- Support both anonymous and authenticated users (use `userId` or `sessionId`).
- Store timestamps for auditing and sorting.

For more details, see the code in `src/models/Shape.js` and related files. 
```

# docs/developer/extending-netpad.md

```md
# Extending NetPad: Adding New Shape Types

NetPad is designed to be extensible. You can add new shape types to the editor by following these steps:

## 1. Define the Shape Type
Add a new entry to `ShapeTypes` in `src/models/Shape.js`:
\`\`\`js
export const ShapeTypes = {
  ...
  HEXAGON: 'hexagon',
  // ...
};
\`\`\`

## 2. Register the Shape
Add a new entry to `shapeRegistry` in `src/models/Shape.js` with default properties:
\`\`\`js
[ShapeTypes.HEXAGON]: {
  displayName: 'Hexagon',
  defaultProps: {
    ...BaseShapeDefaults,
    type: ShapeTypes.HEXAGON,
    width: 100,
    height: 80,
    label: 'Hexagon',
    fill: '#e0e0e0',
    stroke: '#333',
    strokeWidth: 2,
  },
},
\`\`\`

## 3. Update Shape Creation
Update `getNewShape` in `Canvas.js` to support the new type:
\`\`\`js
case ShapeTypes.HEXAGON:
case 'hexagon':
  return createShape(ShapeTypes.HEXAGON, { id, x, y });
\`\`\`

## 4. Rendering Logic
In `Canvas.js`, add a rendering block for the new shape in the main render loop:
- Use SVG primitives (e.g., `<polygon>`, `<ellipse>`, `<rect>`, `<path>`) to draw the shape.
- Render the label, connectors, and resize handles as for other shapes.

## 5. Connectors
Update `getConnectors` in `Canvas.js` to return connector points for the new shape:
- For polygons, calculate connector points at logical positions (e.g., vertices, midpoints).
- Example for hexagon:
\`\`\`js
else if (shape.type === 'hexagon') {
  // Calculate 6 connector points
  return { ... };
}
\`\`\`

## 6. Bounding Box
Update `shapeBounds` in `Canvas.js` to return the correct bounding box for the new shape. This is used for selection and marquee logic.

## 7. Properties Panel
If the shape has unique properties, update `PropertiesPanel.js` to allow editing them.

## 8. Palette
Add the new shape to `ShapePalette.js` with an icon and label.

## 9. Behaviors
Ensure the shape supports selection, dragging, resizing, connectors, copy/paste, and export. Test group selection, marquee, and property editing for the new shape.

## 10. Testing
Test the new shape in the editor for all behaviors: creation, selection, connectors, resizing, copy/paste, export, and persistence.

### Best Practices
- All shapes should have `id`, `type`, `x`, `y`, `width`, `height`, `label`, `fill`, `stroke`, `strokeWidth`, and any shape-specific properties.
- Define logical connector points for each shape.
- Use modular rendering logic and helper functions for connectors.
- Ensure all shape properties are serializable to MongoDB Atlas. 
```

# docs/getting-started/faq.md

```md
# Frequently Asked Questions (FAQ)

**Q: Do I need to create an account to use NetPad?**
A: No, you can use NetPad anonymously, but creating an account unlocks more features like saving diagrams to your profile.

**Q: How do I share a diagram?**
A: Each diagram has a unique reference link you can share with others.

**Q: Can I export my diagrams?**
A: Yes, you can export diagrams as SVG or PNG files.

**Q: What authentication methods are supported?**
A: Email/password, Google, and GitHub.

*More questions coming soon!* 
```

# docs/getting-started/installation.md

```md
# Installation

NetPad is a cloud-based application and does not require installation for end users. Simply visit the NetPad website to get started.

## For Developers

If you wish to contribute or run NetPad locally, please refer to the project README for setup instructions. (Add details here if local setup is supported.) 
```

# docs/getting-started/introduction.md

```md
# Introduction

Welcome to **NetPad** — the modern, collaborative SVG diagram editor. NetPad is built with React, Material UI, and MongoDB Atlas, and is designed for real-time diagram editing, sharing, and cloud persistence.

NetPad supports:
- Real-time diagram editing
- User authentication (email/password, Google, GitHub)
- Anonymous and authenticated user flows
- Templates gallery and instantiation
- SVG/PNG export
- Shape palette and extensible shape model
- Diagram sharing via unique references
- User profile and preferences
- Cloud persistence of diagrams 
```

# docs/getting-started/quick-start.md

```md
# Quick Start

Get started with NetPad in just a few steps:

## 1. Sign Up or Sign In
- Register with your email, Google, or GitHub account.
- Or, use NetPad anonymously (limited features).

## 2. Create Your First Diagram
- Click 'New Diagram' on the dashboard or landing page.
- Use the drag-and-drop editor to add shapes, connectors, and text.
- Save your diagram to the cloud (requires sign-in for persistent storage).

## 3. Use Templates
- Browse the Templates Gallery.
- Click "Use This Template" to start editing a pre-made diagram.
- Customize and save as your own.

## 4. Share and Export
- Share diagrams via unique reference links.
- Export diagrams as SVG or PNG for use elsewhere. 
```

# docs/legal/privacy-policy.md

```md
# Privacy Policy

Your privacy is important to us. This section will outline how NetPad collects, uses, and protects your data.

*Full privacy policy coming soon.* 
```

# docs/legal/terms-of-service.md

```md
# Terms of Service

By using NetPad, you agree to our terms of service. Please review this section for details on your rights and responsibilities as a user.

*Full terms of service coming soon.* 
```

# docs/tutorial-extras/img/docsVersionDropdown.png

This is a binary file of the type: Image

# docs/tutorial-extras/img/localeDropdown.png

This is a binary file of the type: Image

# docs/user-guide/collaboration.md

```md
# Collaboration

NetPad enables real-time collaboration for teams and individuals.

## Real-Time Editing
- Multiple users can edit the same diagram simultaneously.
- Changes are synced instantly across all participants.

## Sharing
- Share diagrams using unique reference links.
- Control who can view or edit your diagrams (future: permissions management).

Collaborate seamlessly with your team, wherever you are! 
```

# docs/user-guide/editor.md

```md
# Editor Guide

The NetPad editor provides a powerful, intuitive interface for creating and editing diagrams.

## Features
- Drag-and-drop canvas
- Shape palette (add rectangles, circles, connectors, and more)
- Properties panel for customizing shapes
- In-place text editing
- Grouping and resizing
- SVG/PNG export
- Undo/redo and keyboard shortcuts

Explore the editor to discover all available tools and options! 
```

# docs/user-guide/export-share.md

```md
# Exporting & Sharing

NetPad makes it easy to share your work and export diagrams for use elsewhere.

## Export Options
- Export diagrams as SVG or PNG files
- Download for use in presentations, documents, or other tools

## Sharing
- Each diagram has a unique reference link
- Share the link to allow others to view or edit (if permissions allow)

Collaborate and distribute your diagrams with ease! 
```

# docs/user-guide/integrations.md

```md
# Integrations

NetPad is designed to integrate with other tools and platforms.

## Current and Planned Integrations
- Embed diagrams in other websites or wikis (coming soon)
- API access for automation and custom workflows (planned)
- Export diagrams for use in presentations, documents, and more

Stay tuned for updates as we expand integration options! 
```

# docs/user-guide/templates.md

```md
# Templates

NetPad offers a gallery of ready-made diagram templates to help you get started quickly.

## Using Templates
- Browse the Templates Gallery from the dashboard or editor.
- Click "Use This Template" to load it into the editor.
- Customize the template as needed and save it as your own diagram.

Templates make it easy to jump-start your diagramming process! 
```

# documentation.md

```md
# NetPad Documentation Blueprint

This document is intended for a documentation expert to build a complete Docusaurus-based documentation site for NetPad, a modern SVG diagram editor. It outlines the app's features, user flows, and provides a suggested documentation structure.

---

## Project Overview

**NetPad** is a modern, collaborative SVG diagram editor built with React, Material UI, and MongoDB Atlas. It supports:
- Real-time diagram editing
- User authentication (email/password, Google, GitHub)
- Anonymous and authenticated user flows
- Templates gallery and instantiation
- SVG/PNG export
- Shape palette and extensible shape model
- Diagram sharing via unique references
- User profile and preferences
- Cloud persistence of diagrams

---

## Key Features

- **Landing Page**: Marketing, product intro, and quick access to editor/templates.
- **Editor**: Drag-and-drop canvas, shape palette, properties panel, in-place text editing, grouping, resizing, connectors, SVG/PNG export.
- **Authentication**: Sign in/up with email/password, Google, or GitHub. User profile and session management.
- **Templates Gallery**: Browse and instantiate ready-made diagram templates.
- **Diagram Reference System**: Each diagram has a unique, human-friendly reference for sharing and embedding.
- **User Preferences/Profile**: View and manage user info, see all diagrams created by the user.
- **Footer**: Navigation, legal, and branding links.

---

## User Flows

### 1. Anonymous User
- Can create and edit diagrams (persisted by sessionId)
- Can use templates
- Cannot see diagrams in profile (no profile)

### 2. Authenticated User
- Registers or signs in (email/password, Google, GitHub)
- Can create, edit, and save diagrams (persisted by userEmail)
- Can see all their diagrams in the profile/preferences page
- Can use templates and instantiate them into the editor
- Can update preferences (future: theme, etc.)

### 3. Template Instantiation
- User browses templates gallery
- Clicks "Use This Template"
- Editor is populated with template shapes/connections
- User can edit and save as their own diagram

### 4. Diagram Sharing
- Each diagram has a unique reference (e.g., `/editor/[reference]`)
- Users can share this link for others to view/edit (if permissions allow)

---

## Suggested Docusaurus Structure

\`\`\`
/docs
  introduction.md
  getting-started.md
  authentication.md
  editor.md
  shapes.md
  templates.md
  sharing.md
  profile.md
  preferences.md
  faq.md
  troubleshooting.md
  legal/
    privacy-policy.md
    terms-of-service.md
  contact.md
\`\`\`

### **Page/Section Descriptions**

- **introduction.md**: What is NetPad? Key features, philosophy, and use cases.
- **getting-started.md**: How to sign up, sign in, and create your first diagram.
- **authentication.md**: Details on supported auth methods, password reset, and account management.
- **editor.md**: Full walkthrough of the editor UI, canvas, shape palette, properties panel, and export features.
- **shapes.md**: Supported shapes, connectors, grouping, resizing, and extensibility.
- **templates.md**: Using the templates gallery, instantiating templates, and customizing them.
- **sharing.md**: How to share diagrams, use references, and embed diagrams elsewhere.
- **profile.md**: Managing your account, viewing your diagrams, and user dashboard features.
- **preferences.md**: Customizing your experience (theme, settings, etc.).
- **faq.md**: Common questions and answers.
- **troubleshooting.md**: How to resolve common issues, error messages, and support contact.
- **legal/privacy-policy.md**: Privacy policy for NetPad users.
- **legal/terms-of-service.md**: Terms of service for NetPad users.
- **contact.md**: How to contact support or the team.

---

## Additional Notes for the Documentation Expert

- Use plenty of screenshots and diagrams to illustrate features and flows.
- Include step-by-step guides for all major user actions (sign up, create diagram, use template, share, etc.).
- Highlight differences between anonymous and authenticated user experiences.
- Document keyboard shortcuts and accessibility features if available.
- Provide a clear changelog and versioning section if the app will be updated frequently.
- Ensure all legal and privacy documents are clear and accessible from the footer.
- Use a friendly, approachable tone suitable for both new and experienced users.

---

## Contact for Further Questions

- **Product Owner:** Michael Lynn ([mlynn.org](https://mlynn.org))
- **GitHub Repo:** _[add link here if public]_

---

This blueprint should give a documentation expert everything needed to build a comprehensive, user-friendly Docusaurus documentation site for NetPad. 
```

# docusaurus.config.js

```js
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NetPad',
  tagline: 'Draw. Collaborate. Integrate.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.netpad.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mrlynn', // Usually your GitHub org/user name.
  projectName: 'netpad', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'NetPad',
        logo: {
          alt: 'NetPad Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          // Optionally keep the blog link if you have a blog
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/introduction',
              },
            ],
          },
          // Optionally add more links here as needed
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NetPad. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

```

# NetPad-Documentation-Blueprint.md

```md
# NetPad Documentation Blueprint

This document is intended for a documentation expert to build a complete Docusaurus-based documentation site for NetPad, a modern SVG diagram editor. It outlines the app's features, user flows, and provides a suggested documentation structure.

---

## Project Overview

**NetPad** is a modern, collaborative SVG diagram editor built with React, Material UI, and MongoDB Atlas. It supports:
- Real-time diagram editing
- User authentication (email/password, Google, GitHub)
- Anonymous and authenticated user flows
- Templates gallery and instantiation
- SVG/PNG export
- Shape palette and extensible shape model
- Diagram sharing via unique references
- User profile and preferences
- Cloud persistence of diagrams

---

## Key Features

- **Landing Page**: Marketing, product intro, and quick access to editor/templates.
- **Editor**: Drag-and-drop canvas, shape palette, properties panel, in-place text editing, grouping, resizing, connectors, SVG/PNG export.
- **Authentication**: Sign in/up with email/password, Google, or GitHub. User profile and session management.
- **Templates Gallery**: Browse and instantiate ready-made diagram templates.
- **Diagram Reference System**: Each diagram has a unique, human-friendly reference for sharing and embedding.
- **User Preferences/Profile**: View and manage user info, see all diagrams created by the user.
- **Footer**: Navigation, legal, and branding links.

---

## User Flows

### 1. Anonymous User
- Can create and edit diagrams (persisted by sessionId)
- Can use templates
- Cannot see diagrams in profile (no profile)

### 2. Authenticated User
- Registers or signs in (email/password, Google, GitHub)
- Can create, edit, and save diagrams (persisted by userEmail)
- Can see all their diagrams in the profile/preferences page
- Can use templates and instantiate them into the editor
- Can update preferences (future: theme, etc.)

### 3. Template Instantiation
- User browses templates gallery
- Clicks "Use This Template"
- Editor is populated with template shapes/connections
- User can edit and save as their own diagram

### 4. Diagram Sharing
- Each diagram has a unique reference (e.g., `/editor/[reference]`)
- Users can share this link for others to view/edit (if permissions allow)

---

## Suggested Docusaurus Structure

\`\`\`
/docs
  introduction.md
  getting-started.md
  authentication.md
  editor.md
  shapes.md
  templates.md
  sharing.md
  profile.md
  preferences.md
  faq.md
  troubleshooting.md
  legal/
    privacy-policy.md
    terms-of-service.md
  contact.md
\`\`\`

### **Page/Section Descriptions**

- **introduction.md**: What is NetPad? Key features, philosophy, and use cases.
- **getting-started.md**: How to sign up, sign in, and create your first diagram.
- **authentication.md**: Details on supported auth methods, password reset, and account management.
- **editor.md**: Full walkthrough of the editor UI, canvas, shape palette, properties panel, and export features.
- **shapes.md**: Supported shapes, connectors, grouping, resizing, and extensibility.
- **templates.md**: Using the templates gallery, instantiating templates, and customizing them.
- **sharing.md**: How to share diagrams, use references, and embed diagrams elsewhere.
- **profile.md**: Managing your account, viewing your diagrams, and user dashboard features.
- **preferences.md**: Customizing your experience (theme, settings, etc.).
- **faq.md**: Common questions and answers.
- **troubleshooting.md**: How to resolve common issues, error messages, and support contact.
- **legal/privacy-policy.md**: Privacy policy for NetPad users.
- **legal/terms-of-service.md**: Terms of service for NetPad users.
- **contact.md**: How to contact support or the team.

---

## Additional Notes for the Documentation Expert

- Use plenty of screenshots and diagrams to illustrate features and flows.
- Include step-by-step guides for all major user actions (sign up, create diagram, use template, share, etc.).
- Highlight differences between anonymous and authenticated user experiences.
- Document keyboard shortcuts and accessibility features if available.
- Provide a clear changelog and versioning section if the app will be updated frequently.
- Ensure all legal and privacy documents are clear and accessible from the footer.
- Use a friendly, approachable tone suitable for both new and experienced users.

---

## Contact for Further Questions

- **Product Owner:** Michael Lynn ([mlynn.org](https://mlynn.org))
- **GitHub Repo:** _[add link here if public]_

---

This blueprint should give a documentation expert everything needed to build a comprehensive, user-friendly Docusaurus documentation site for NetPad. 
```

# package.json

```json
{
  "name": "docs-netpad-io",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  },
  "dependencies": {
    "@docusaurus/core": "3.7.0",
    "@docusaurus/preset-classic": "3.7.0",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mdx-js/react": "^3.0.0",
    "@mui/icons-material": "^7.0.2",
    "@mui/material": "^7.0.2",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "3.7.0",
    "@docusaurus/types": "3.7.0"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  "engines": {
    "node": ">=18.0"
  }
}

```

# PLANS.md

```md
# Network/Architecture Diagram Editor - Project Plan

## Vision
A web-based, Photoshop-like tool for creating, editing, and saving network and architecture diagrams. Built with Next.js (App Router), Material UI, and MongoDB Atlas.

---

## Current State (as of June 2024)
- **Authentication**: NextAuth.js with Credentials, Google, GitHub; Mongoose User model
- **Editor**: Modern SVG-based editor with drag-and-drop, shape palette, properties panel, in-place text editing, grouping, resizing, connectors, and SVG/PNG export
- **Shapes**: Supports rectangle, circle, ellipse, diamond, parallelogram, cylinder (database), icon, text, embed, line; all with connection handles and editable properties
- **Multi-select & Grouping**: Marquee (lasso) selection, group drag, group property editing
- **Templates**: Gallery and instantiation, with localStorage transfer to editor
- **Persistence**: Diagrams saved to MongoDB Atlas, supporting anonymous and authenticated users
- **Diagram Reference & Sharing**: Reference-based routing, share/copy link UI, shortlink sharing, and viewer page
- **Export**: SVG/PNG export omits background grid for transparency
- **Copy/Paste**: Cmd/Ctrl+C and Cmd/Ctrl+V for shapes and internal connections
- **New Diagram**: Toolbar button to clear canvas and start from scratch
- **Profile/Preferences**: User info, preferences, and list of user diagrams
- **Footer & Navigation**: Responsive footer with navigation and credits
- **Robust error handling and debug output for selection, export, and shape interaction**

---

## How to Add a New Shape Type

To add a new shape type (e.g., hexagon, cloud, custom icon), follow these steps to ensure consistency in properties, connectors, and behaviors:

### 1. **Define the Shape Type**
- Add a new entry to `ShapeTypes` in `src/models/Shape.js`:
  \`\`\`js
  export const ShapeTypes = {
    ...
    HEXAGON: 'hexagon',
    // ...
  };
  \`\`\`

### 2. **Register the Shape**
- Add a new entry to `shapeRegistry` in `src/models/Shape.js` with default properties:
  \`\`\`js
  [ShapeTypes.HEXAGON]: {
    displayName: 'Hexagon',
    defaultProps: {
      ...BaseShapeDefaults,
      type: ShapeTypes.HEXAGON,
      width: 100,
      height: 80,
      label: 'Hexagon',
      fill: '#e0e0e0',
      stroke: '#333',
      strokeWidth: 2,
    },
  },
  \`\`\`

### 3. **Update Shape Creation**
- Update `getNewShape` in `Canvas.js` to support the new type:
  \`\`\`js
  case ShapeTypes.HEXAGON:
  case 'hexagon':
    return createShape(ShapeTypes.HEXAGON, { id, x, y });
  \`\`\`

### 4. **Rendering Logic**
- In `Canvas.js`, add a rendering block for the new shape in the main render loop:
  - Use SVG primitives (e.g., `<polygon>`, `<ellipse>`, `<rect>`, `<path>`) to draw the shape.
  - Render the label, connectors, and resize handles as for other shapes.

### 5. **Connectors**
- Update `getConnectors` in `Canvas.js` to return connector points for the new shape:
  - For polygons, calculate connector points at logical positions (e.g., vertices, midpoints).
  - Example for hexagon:
    \`\`\`js
    else if (shape.type === 'hexagon') {
      // Calculate 6 connector points
      return { ... };
    }
    \`\`\`

### 6. **Bounding Box**
- Update `shapeBounds` in `Canvas.js` to return the correct bounding box for the new shape. This is used for selection and marquee logic.

### 7. **Properties Panel**
- If the shape has unique properties, update `PropertiesPanel.js` to allow editing them.

### 8. **Palette**
- Add the new shape to `ShapePalette.js` with an icon and label.

### 9. **Behaviors**
- Ensure the shape supports selection, dragging, resizing, connectors, copy/paste, and export.
- Test group selection, marquee, and property editing for the new shape.

### 10. **Testing**
- Test the new shape in the editor for all behaviors: creation, selection, connectors, resizing, copy/paste, export, and persistence.

#### **Best Practices for Consistency**
- **Properties**: All shapes should have `id`, `type`, `x`, `y`, `width`, `height`, `label`, `fill`, `stroke`, `strokeWidth`, and any shape-specific properties.
- **Connectors**: Define logical connector points for each shape. For polygons, use vertices or midpoints as appropriate.
- **Behaviors**: Ensure all shapes support selection, dragging, resizing, connectors, copy/paste, and export. Test group and marquee selection.
- **Rendering**: Use SVG primitives and keep rendering logic modular. Consider extracting connector rendering to a helper function to avoid regressions.
- **Persistence**: All shape properties should be serializable to MongoDB Atlas.

---

## Next Steps (TODO)
- [ ] Finalize tabbed interface for multiple open diagrams
- [ ] Improve embedded diagram UX (open/create in new tab)
- [ ] Add more shape templates and icons
- [ ] Refactor connector rendering to a helper for consistency
- [ ] Add system clipboard integration for copy/paste
- [ ] Add undo/redo functionality
- [ ] Improve accessibility and keyboard navigation
- [ ] Add more robust error handling and user feedback

---

## Notes
- All MongoDB access will use `connectDB` from `@/lib/mongodb`
- All UI components will use Material UI
- All persistence will be in MongoDB Atlas 
```

# README.md

```md
# NetPad Documentation

Welcome to the official documentation repository for **NetPad**, a modern, collaborative SVG diagram editor.

## 📚 Live Documentation

- **Docs Site:** [https://docs.netpad.io](https://docs.netpad.io)

## 🚀 Project Overview

NetPad is a web-based, real-time diagram editor built with React, Material UI, and MongoDB Atlas. This repository contains all user and developer documentation for NetPad, including guides, API references, and developer notes.

## ✨ Features
- Real-time collaborative editing
- Cloud diagram storage (MongoDB Atlas)
- SVG/PNG export
- Templates gallery
- User authentication (email, Google, GitHub)
- Extensible shape palette
- Developer guides for extending NetPad

## 📁 Documentation Structure
- **Getting Started**: Introduction, installation, quick start, FAQ
- **User Guide**: Editor, collaboration, templates, integrations, export/share
- **Advanced**: API, customization, troubleshooting
- **Developer Guide**: Extending NetPad, data model
- **Legal**: Privacy policy, terms of service

## 🛠️ Local Development

1. **Clone the repo:**
   \`\`\`sh
   git clone https://github.com/mrlynn/netpad-docs.git
   cd netpad-docs
   \`\`\`
2. **Install dependencies:**
   \`\`\`sh
   npm install
   \`\`\`
3. **Start the local dev server:**
   \`\`\`sh
   npm run start
   \`\`\`
4. **Build for production:**
   \`\`\`sh
   npm run build
   \`\`\`

## 🌐 Deployment (GitHub Pages)
- The site is automatically deployed to [https://docs.netpad.io](https://docs.netpad.io) via GitHub Actions on every push to `main`.
- The custom domain is set via the `CNAME` file.
- See `.github/workflows/deploy.yml` for deployment details.

## 🤝 Contributing

Contributions are welcome! To propose changes:
1. Fork this repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

Please follow the existing documentation structure and style.

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

**Product Owner:** [Michael Lynn](https://mlynn.org)

```

# sidebars.js

```js
// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/faq',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/editor',
        'user-guide/collaboration',
        'user-guide/templates',
        'user-guide/integrations',
        'user-guide/export-share',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/api',
        'advanced/customization',
        'advanced/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/privacy-policy',
        'legal/terms-of-service',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'developer/extending-netpad',
        'developer/data-model',
      ],
    },
  ],
};

export default sidebars;

```

# src/components/HomepageFeatures/index.js

```js
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupsIcon from '@mui/icons-material/Groups';
import ImageIcon from '@mui/icons-material/Image';

const FeatureList = [
  {
    title: 'Real-time Collaboration',
    Icon: GroupsIcon,
    description: (
      <>
        Collaborate with your team in real time. Multiple users can edit diagrams simultaneously, with instant updates for everyone.
      </>
    ),
  },
  {
    title: 'Cloud Diagram Storage',
    Icon: CloudIcon,
    description: (
      <>
        All your diagrams are securely saved in the cloud. Access your work from anywhere, on any device, with MongoDB Atlas-powered persistence.
      </>
    ),
  },
  {
    title: 'Easy SVG/PNG Export',
    Icon: ImageIcon,
    description: (
      <>
        Export your diagrams as SVG or PNG with a single click. Share, embed, or use your visuals in presentations and documents effortlessly.
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon style={{ fontSize: 64, color: '#4FC3F7' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

```

# src/components/HomepageFeatures/styles.module.css

```css
.features {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
}

.featureSvg {
  height: 200px;
  width: 200px;
}

```

# src/css/custom.css

```css
/**
 * Any CSS included here will be global. The classic template
 * bundles Infima by default. Infima is a CSS framework designed to
 * work well for content-centric websites.
 */

/* You can override the default Infima variables here. */
:root {
  --ifm-color-primary: #4FC3F7;
  --ifm-color-primary-dark: #42a5d4;
  --ifm-color-primary-darker: #3996be;
  --ifm-color-primary-darkest: #2c7693;
  --ifm-color-primary-light: #6fd4ff;
  --ifm-color-primary-lighter: #8fe0ff;
  --ifm-color-primary-lightest: #b3ecff;
  --ifm-background-color: #121212;
  --ifm-navbar-background-color: #121212;
  --ifm-footer-background-color: #121212;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(79, 195, 247, 0.1);
}

/* For readability concerns, you should choose a lighter palette in dark mode. */
[data-theme='dark'] {
  --ifm-color-primary: #4FC3F7;
  --ifm-color-primary-dark: #42a5d4;
  --ifm-color-primary-darker: #3996be;
  --ifm-color-primary-darkest: #2c7693;
  --ifm-color-primary-light: #6fd4ff;
  --ifm-color-primary-lighter: #8fe0ff;
  --ifm-color-primary-lightest: #b3ecff;
  --ifm-background-color: #121212;
  --ifm-navbar-background-color: #121212;
  --ifm-footer-background-color: #121212;
  --docusaurus-highlighted-code-line-bg: rgba(79, 195, 247, 0.2);
}

```

# src/pages/index.js

```js
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

```

# src/pages/index.module.css

```css
/**
 * CSS files with the .module.css suffix will be treated as CSS modules
 * and scoped locally.
 */

.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: #23272f;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem;
  }
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

```

# src/pages/markdown-page.md

```md
---
title: Markdown page example
---

# Markdown page example

You don't need React to write simple standalone pages.

```

# static/.nojekyll

```

```

# static/img/docusaurus-social-card.jpg

This is a binary file of the type: Image

# static/img/docusaurus.png

This is a binary file of the type: Image

# static/img/favicon.ico

This is a binary file of the type: Binary

# static/img/logo.png

This is a binary file of the type: Image

# static/img/logo.svg

This is a file of the type: SVG Image

# static/img/undraw_docusaurus_mountain.svg

This is a file of the type: SVG Image

# static/img/undraw_docusaurus_react.svg

This is a file of the type: SVG Image

# static/img/undraw_docusaurus_tree.svg

This is a file of the type: SVG Image

