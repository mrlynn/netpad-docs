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
  ```js
  export const ShapeTypes = {
    ...
    HEXAGON: 'hexagon',
    // ...
  };
  ```

### 2. **Register the Shape**
- Add a new entry to `shapeRegistry` in `src/models/Shape.js` with default properties:
  ```js
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
  ```

### 3. **Update Shape Creation**
- Update `getNewShape` in `Canvas.js` to support the new type:
  ```js
  case ShapeTypes.HEXAGON:
  case 'hexagon':
    return createShape(ShapeTypes.HEXAGON, { id, x, y });
  ```

### 4. **Rendering Logic**
- In `Canvas.js`, add a rendering block for the new shape in the main render loop:
  - Use SVG primitives (e.g., `<polygon>`, `<ellipse>`, `<rect>`, `<path>`) to draw the shape.
  - Render the label, connectors, and resize handles as for other shapes.

### 5. **Connectors**
- Update `getConnectors` in `Canvas.js` to return connector points for the new shape:
  - For polygons, calculate connector points at logical positions (e.g., vertices, midpoints).
  - Example for hexagon:
    ```js
    else if (shape.type === 'hexagon') {
      // Calculate 6 connector points
      return { ... };
    }
    ```

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