# Data Model: MongoDB Persistence

NetPad uses MongoDB Atlas for cloud persistence of diagrams, shapes, and user data. All MongoDB access is handled via `connectDB` from `@/lib/mongodb`.

## Diagram Document Structure
A typical diagram document in MongoDB includes:

```json
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
```

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