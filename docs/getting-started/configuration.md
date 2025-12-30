# Configuration

NetPad requires several environment variables to function properly. This guide covers all configuration options.

## Required Environment Variables

### Database Configuration

```bash
# MongoDB connection for platform database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DATABASE=form_builder_platform
```

### Security & Encryption

```bash
# Session encryption (32+ character secret)
SESSION_SECRET=your-32-character-secret-key-here

# Vault encryption key (base64-encoded 32-byte key)
VAULT_ENCRYPTION_KEY=base64-encoded-32-byte-key
```

Generate encryption keys:
```bash
# Generate SESSION_SECRET
openssl rand -base64 32

# Generate VAULT_ENCRYPTION_KEY
openssl rand -base64 32
```

### Application URL

```bash
# Your application's public URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## Optional Environment Variables

### OAuth Authentication

```bash
# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Email Configuration (Magic Links)

```bash
# SMTP settings for magic link emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@yourdomain.com
```

### WebAuthn (Passkeys)

```bash
# WebAuthn configuration
WEBAUTHN_RP_ID=yourdomain.com
WEBAUTHN_RP_NAME=NetPad
```

### AI Features (Optional)

```bash
# OpenAI API key for AI-powered features
OPENAI_API_KEY=sk-...
```

### Stripe (Billing - Optional)

```bash
# Stripe configuration for subscriptions
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
```

### File Storage

```bash
# Vercel Blob Storage for file uploads
BLOB_READ_WRITE_TOKEN=vercel_blob_...
```

### MongoDB Atlas API (Auto-Provisioning)

```bash
# MongoDB Atlas API credentials for auto-provisioning
ATLAS_PUBLIC_KEY=your-atlas-public-key
ATLAS_PRIVATE_KEY=your-atlas-private-key
ATLAS_GROUP_ID=your-atlas-group-id
```

### Cloudflare Turnstile (Bot Protection)

```bash
# Turnstile CAPTCHA
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key
```

## Environment File Setup

### Local Development

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add all required variables
4. Redeploy your application

### Production (Self-Hosted)

Set environment variables in your deployment environment:

**Using PM2**:
```bash
# Create ecosystem.config.js
module.exports = {
  apps: [{
    name: 'netpad',
    script: 'npm',
    args: 'start',
    env: {
      MONGODB_URI: 'mongodb+srv://...',
      SESSION_SECRET: '...',
      // ... other variables
    }
  }]
}
```

**Using Docker** (future):
```bash
# Use docker-compose.yml or docker run with -e flags
docker run -e MONGODB_URI=... -e SESSION_SECRET=... ...
```

## Configuration Validation

NetPad will validate required environment variables on startup. Missing required variables will cause the application to fail with clear error messages.

## Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Use strong, random secrets** for encryption keys
3. **Rotate keys periodically** in production
4. **Use environment-specific values** (dev, staging, production)
5. **Restrict access** to environment variables in your deployment platform

## Testing Your Configuration

After setting up environment variables:

1. Start the application: `npm run dev`
2. Check the console for any configuration errors
3. Test authentication (magic link, OAuth, passkeys)
4. Test MongoDB connection
5. Create a test form and verify it works

## Troubleshooting

**"Missing required environment variable"**:
- Check that all required variables are set
- Verify variable names match exactly (case-sensitive)
- Restart the application after adding variables

**"Encryption key invalid"**:
- Ensure `VAULT_ENCRYPTION_KEY` is base64-encoded
- Verify the key is exactly 32 bytes when decoded
- Generate a new key if needed

**"MongoDB connection failed"**:
- Verify `MONGODB_URI` is correct
- Check network access to MongoDB
- Verify database user permissions

## Next Steps

- [Installation Guide](./installation.md) - Complete installation
- [Quick Start Guide](./quickstart.md) - Create your first form
- [Deployment Guide](../deployment/overview.md) - Production deployment
