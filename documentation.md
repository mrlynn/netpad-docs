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

```
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
```

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