# Marketplace API

The Marketplace API provides endpoints for browsing, publishing, and managing applications in the NetPad marketplace.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/marketplace` | Browse marketplace listings |
| **GET** | `/api/marketplace/:id` | Get listing details |
| **POST** | `/api/marketplace/publish` | Publish an application |
| **PUT** | `/api/marketplace/:id` | Update a listing |
| **DELETE** | `/api/marketplace/:id` | Remove a listing |
| **POST** | `/api/marketplace/:id/install` | Install an application |
| **GET** | `/api/marketplace/categories` | List categories |
| **GET** | `/api/marketplace/featured` | Get featured listings |
| **GET** | `/api/marketplace/popular` | Get popular listings |
| **POST** | `/api/marketplace/:id/review` | Submit a review |
| **GET** | `/api/marketplace/:id/reviews` | Get reviews |

## Browse Marketplace

```http
GET /api/marketplace
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default: 1) |
| `pageSize` | number | Items per page (default: 20) |
| `search` | string | Search by name or description |
| `category` | string | Filter by category |
| `sortBy` | string | Sort by: `popular`, `recent`, `name` |
| `priceType` | string | Filter: `free`, `paid`, `all` |

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/marketplace?category=forms&sortBy=popular" \
  -H "Authorization: Bearer np_live_your_api_key"
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "mkt_abc123",
      "name": "Customer Feedback Form",
      "description": "Collect customer feedback with built-in analytics",
      "category": "forms",
      "author": {
        "name": "NetPad Team",
        "verified": true
      },
      "stats": {
        "installs": 1250,
        "rating": 4.8,
        "reviews": 45
      },
      "pricing": {
        "type": "free"
      },
      "version": "2.1.0",
      "updatedAt": "2024-01-18T10:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "pageSize": 20,
    "totalPages": 8
  }
}
```

## Get Listing Details

```http
GET /api/marketplace/:id
```

**Example Request:**

```bash
curl -X GET "https://your-domain.com/api/marketplace/mkt_abc123" \
  -H "Authorization: Bearer np_live_your_api_key"
```

## Publish Application

```http
POST /api/marketplace/publish
```

**Request Body:**

```json
{
  "applicationId": "app_xyz789",
  "name": "My Application",
  "description": "Full description of your application",
  "shortDescription": "Brief summary",
  "category": "workflows",
  "tags": ["automation", "productivity"],
  "pricing": {
    "type": "free"
  },
  "screenshots": [
    "https://example.com/screenshot1.png"
  ],
  "documentation": "https://docs.example.com/my-app"
}
```

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/marketplace/publish" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{"applicationId": "app_xyz789", "name": "My App", "category": "workflows"}'
```

## Install Application

```http
POST /api/marketplace/:id/install
```

**Request Body:**

```json
{
  "targetOrganization": "org_123",
  "version": "latest"
}
```

**Example Request:**

```bash
curl -X POST "https://your-domain.com/api/marketplace/mkt_abc123/install" \
  -H "Authorization: Bearer np_live_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{"targetOrganization": "org_123"}'
```

## Categories

```http
GET /api/marketplace/categories
```

**Example Response:**

```json
{
  "success": true,
  "data": [
    { "id": "forms", "name": "Forms", "count": 45 },
    { "id": "workflows", "name": "Workflows", "count": 32 },
    { "id": "integrations", "name": "Integrations", "count": 28 },
    { "id": "dashboards", "name": "Dashboards", "count": 15 },
    { "id": "templates", "name": "Templates", "count": 60 }
  ]
}
```

## Featured & Popular

### Featured Listings

```http
GET /api/marketplace/featured
```

### Popular Listings

```http
GET /api/marketplace/popular
```

## Reviews

### Submit Review

```http
POST /api/marketplace/:id/review
```

**Request Body:**

```json
{
  "rating": 5,
  "title": "Great application!",
  "body": "This has saved us hours of work every week."
}
```

### Get Reviews

```http
GET /api/marketplace/:id/reviews
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number |
| `sortBy` | string | Sort by: `recent`, `helpful`, `rating` |

## npm Integration

For npm package integration, see the [npm Integration](./marketplace-npm.md) documentation.
