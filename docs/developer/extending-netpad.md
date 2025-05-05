# Extending NetPad: Adding New Shape Types

NetPad is designed to be extensible. You can add new shape types to the editor by following these steps:

## 1. Define the Shape Type
Add a new entry to `ShapeTypes` in `src/models/Shape.js`:
```js
export const ShapeTypes = {
  ...
  HEXAGON: 'hexagon',
  // ...
};
```

## 2. Register the Shape
Add a new entry to `shapeRegistry` in `src/models/Shape.js` with default properties:
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

## 3. Update Shape Creation
Update `getNewShape` in `Canvas.js` to support the new type:
```js
case ShapeTypes.HEXAGON:
case 'hexagon':
  return createShape(ShapeTypes.HEXAGON, { id, x, y });
```

## 4. Rendering Logic
In `Canvas.js`, add a rendering block for the new shape in the main render loop:
- Use SVG primitives (e.g., `<polygon>`, `<ellipse>`, `<rect>`, `<path>`) to draw the shape.
- Render the label, connectors, and resize handles as for other shapes.

## 5. Connectors
Update `getConnectors` in `Canvas.js` to return connector points for the new shape:
- For polygons, calculate connector points at logical positions (e.g., vertices, midpoints).
- Example for hexagon:
```js
else if (shape.type === 'hexagon') {
  // Calculate 6 connector points
  return { ... };
}
```

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