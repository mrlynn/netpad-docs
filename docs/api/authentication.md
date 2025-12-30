# Authentication API

API endpoints for authentication and session management.

## Get Session

Get current session information.

```http
GET /api/auth/session
```

**Response**:
```json
{
  "user": {
    "userId": "user_123",
    "email": "user@example.com",
    "organizations": [...]
  }
}
```

## Magic Link Authentication

### Send Magic Link

Send a passwordless magic link email.

```http
POST /api/auth/magic-link/send
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Magic link sent to email"
}
```

### Verify Magic Link

Verify magic link token and establish session.

```http
POST /api/auth/magic-link/verify
Content-Type: application/json

{
  "token": "magic_link_token"
}
```

**Response**:
```json
{
  "success": true,
  "user": {
    "userId": "user_123",
    "email": "user@example.com"
  }
}
```

## OAuth Authentication

### Initiate OAuth Flow

Start OAuth authentication with a provider (Google, GitHub).

```http
GET /api/auth/oauth/[provider]
```

**Supported Providers**:
- `google` - Google OAuth
- `github` - GitHub OAuth

**Response**: Redirects to provider's authorization page

### OAuth Callback

OAuth callback handler (called by provider).

```http
GET /api/auth/oauth/callback/[provider]?code=...&state=...
```

**Response**: Redirects to application with session established

## Passkey Authentication

### Get Registration Options

Get passkey registration options for the user.

```http
POST /api/auth/passkey/register-options
Content-Type: application/json

{
  "userId": "user_123"
}
```

**Response**:
```json
{
  "challenge": "...",
  "rp": {
    "name": "NetPad",
    "id": "netpad.io"
  },
  "user": {
    "id": "...",
    "name": "user@example.com",
    "displayName": "User Name"
  },
  "pubKeyCredParams": [...]
}
```

### Complete Registration

Complete passkey registration.

```http
POST /api/auth/passkey/register
Content-Type: application/json

{
  "credential": {...}
}
```

### Get Login Options

Get passkey login options.

```http
POST /api/auth/passkey/login-options
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### Complete Login

Complete passkey login.

```http
POST /api/auth/passkey/login
Content-Type: application/json

{
  "credential": {...}
}
```

## API Keys (Future Feature)

API key authentication for server-to-server integrations is planned for a future release.

## Authentication Methods

NetPad supports multiple authentication methods:

- **Magic Links**: Passwordless email authentication
- **Passkeys**: WebAuthn/FIDO2 biometric authentication
- **OAuth**: Google, GitHub, and other providers

See [Platform Authentication](../platform/authentication.md) for user-facing authentication documentation.

## Security Best Practices

1. **Use HTTPS**: Always use secure connections
2. **Secure Cookies**: Sessions use HTTP-only, secure cookies
3. **Token Expiration**: Magic link tokens expire after use
4. **CSRF Protection**: OAuth flows include state validation

## Rate Limiting

Authentication endpoints have specific rate limits:

| Endpoint | Limit |
|----------|-------|
| `/api/auth/magic-link/send` | 5 requests/hour per email |
| `/api/auth/magic-link/verify` | 10 requests/hour per IP |
| `/api/auth/passkey/login-options` | 20 requests/hour per IP |

Rate limit information is included in response headers:
```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 3
X-RateLimit-Reset: 1640995200
```

## Related

- [API Overview](./overview.md)
- [Platform Authentication](../platform/authentication.md)
