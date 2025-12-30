# Authentication

NetPad API authentication methods and security.

## Session Authentication

The primary authentication method uses browser sessions:

```javascript
// Login to establish session
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'yourpassword'
  }),
  credentials: 'include'
});
```

## API Keys (Coming Soon)

API key authentication for server-to-server integrations:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://yourdomain.com/api/forms
```

## OAuth Providers

NetPad supports OAuth authentication:

- **Google**: Sign in with Google
- **GitHub**: Sign in with GitHub
- **Microsoft**: Sign in with Microsoft (Azure AD)

## Security Best Practices

1. **Use HTTPS**: Always use secure connections
2. **Rotate Keys**: Regularly rotate API keys
3. **Least Privilege**: Grant minimal required permissions
4. **Monitor Usage**: Track API usage for anomalies

## Rate Limits

Authentication endpoints have specific rate limits:

| Endpoint | Limit |
|----------|-------|
| `/api/auth/login` | 10 requests/minute |
| `/api/auth/register` | 5 requests/minute |
| `/api/auth/forgot-password` | 3 requests/minute |

## Related

- [API Overview](./overview.md)
- [Platform Authentication](../platform/authentication.md)
