# Security Overview

NetPad implements enterprise-grade security features to protect your data and applications.

## Security Features

### Authentication Security

- **Magic Links**: Time-limited, single-use tokens
- **Passkeys**: WebAuthn/FIDO2 biometric authentication
- **OAuth**: Secure OAuth 2.0 flows
- **Session Management**: Encrypted, secure sessions

### Data Security

- **Connection Vault**: AES-256-GCM encryption
- **Field-Level Encryption**: MongoDB Queryable Encryption
- **HTTPS Only**: All connections encrypted
- **Secure Cookies**: HTTP-only, secure flags

### Access Control

- **Role-Based Access**: Granular permissions
- **Form Access Control**: Public, authenticated, restricted
- **Organization Isolation**: Multi-tenant security

### Bot Protection

- **Turnstile CAPTCHA**: Cloudflare integration
- **Rate Limiting**: Prevent abuse
- **Configurable**: Enable per form

### Audit Logging

- **Platform Audit**: System-wide events
- **Organization Audit**: Org-specific events
- **Form Audit**: Form access tracking
- **Workflow Audit**: Execution logging

## Security Best Practices

1. **Use Strong Authentication**: Prefer passkeys or OAuth
2. **Enable MFA**: Add extra security layer
3. **Encrypt Sensitive Data**: Use field-level encryption
4. **Regular Updates**: Keep system updated
5. **Monitor Access**: Review audit logs regularly

## Compliance

NetPad supports:
- **GDPR**: Data protection compliance
- **CCPA**: California privacy compliance
- **SOC 2**: Security controls (if certified)

## Next Steps

- [Encryption](./encryption.md) - Learn about encryption
- [Access Control](./access-control.md) - Understand access control
- [Best Practices](./best-practices.md) - Security best practices
