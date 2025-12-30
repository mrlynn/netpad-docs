# Encryption

NetPad implements multiple layers of encryption to protect your data.

## Connection Vault Encryption

### How It Works

Connection strings are encrypted using AES-256-GCM:
- **Encryption**: Before storage
- **Decryption**: On-demand when needed
- **Key Management**: Encryption keys never stored in database
- **Algorithm**: AES-256-GCM (strong encryption)

### Configuration

Set encryption key in environment:
```bash
VAULT_ENCRYPTION_KEY=base64-encoded-32-byte-key
```

Generate key:
```bash
openssl rand -base64 32
```

### Security

- **Keys Never Exposed**: Keys only in environment
- **Encrypted at Rest**: All connection strings encrypted
- **Access Control**: Role-based access to connections

## Field-Level Encryption

### MongoDB Queryable Encryption

Support for MongoDB Queryable Encryption:
- **Per-Field**: Encrypt specific fields
- **Queryable**: Can query encrypted fields
- **Automatic**: Encryption/decryption automatic
- **Transparent**: Works seamlessly

### Configuration

1. **Enable Encryption**: In form settings
2. **Select Fields**: Choose fields to encrypt
3. **Configure**: Set encryption options
4. **Save**: Encryption enabled

### Use Cases

- **PII Data**: Personal identifiable information
- **Sensitive Data**: Financial, medical data
- **Compliance**: Meet regulatory requirements

## Data in Transit

### HTTPS

All connections use HTTPS:
- **TLS/SSL**: Encrypted connections
- **Certificate**: Valid SSL certificate required
- **Forced**: HTTP redirects to HTTPS

### MongoDB Connections

- **TLS**: MongoDB connections use TLS
- **Certificate Validation**: Verify certificates
- **Encrypted**: All data encrypted in transit

## Best Practices

1. **Rotate Keys**: Regularly rotate encryption keys
2. **Secure Storage**: Protect encryption keys
3. **Monitor Access**: Track who accesses encrypted data
4. **Compliance**: Follow encryption requirements

## Next Steps

- [Access Control](./access-control.md) - Understand access control
- [Best Practices](./best-practices.md) - Security best practices
