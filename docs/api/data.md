# Data API

Endpoints for managing data in MongoDB collections.

## List Documents

```http
GET /api/data/:connectionId/:database/:collection
```

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Documents per page (default: 20)
- `sort` - Sort field
- `order` - Sort order (asc/desc)
- `filter` - JSON filter object

**Response:**
```json
{
  "success": true,
  "data": {
    "documents": [...],
    "total": 100,
    "page": 1,
    "pages": 5
  }
}
```

## Get Document

```http
GET /api/data/:connectionId/:database/:collection/:documentId
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "field": "value"
  }
}
```

## Create Document

```http
POST /api/data/:connectionId/:database/:collection
```

**Body:**
```json
{
  "field": "value",
  "nested": { "key": "value" }
}
```

## Update Document

```http
PUT /api/data/:connectionId/:database/:collection/:documentId
```

**Body:**
```json
{
  "field": "updated value"
}
```

## Delete Document

```http
DELETE /api/data/:connectionId/:database/:collection/:documentId
```

## Bulk Operations

### Bulk Insert

```http
POST /api/data/:connectionId/:database/:collection/bulk
```

**Body:**
```json
{
  "documents": [
    { "field": "value1" },
    { "field": "value2" }
  ]
}
```

### Bulk Delete

```http
DELETE /api/data/:connectionId/:database/:collection/bulk
```

**Body:**
```json
{
  "ids": ["id1", "id2", "id3"]
}
```

## Aggregation

```http
POST /api/data/:connectionId/:database/:collection/aggregate
```

**Body:**
```json
{
  "pipeline": [
    { "$match": { "status": "active" } },
    { "$group": { "_id": "$category", "count": { "$sum": 1 } } }
  ]
}
```

## Related

- [API Overview](./overview.md)
- [Data Explorer](../data-explorer/overview.md)
