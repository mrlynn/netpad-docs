# Vercel Deployment

Deploy NetPad to Vercel for the easiest deployment experience.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- MongoDB connection string

## Deployment Steps

### 1. Connect Repository

1. **Go to Vercel**: https://vercel.com
2. **Import Project**: Click "Import Project"
3. **Select Repository**: Choose NetPad repository
4. **Configure**: Set project name

### 2. Configure Environment Variables

Add all required environment variables:
- `MONGODB_URI`
- `SESSION_SECRET`
- `VAULT_ENCRYPTION_KEY`
- `NEXT_PUBLIC_APP_URL`
- And others (see [Configuration](../getting-started/configuration.md))

### 3. Build Settings

Vercel auto-detects Next.js:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. Deploy

1. **Click Deploy**: Start deployment
2. **Wait for Build**: Monitor build progress
3. **Deployment Complete**: Get deployment URL

## Automatic Deployments

### On Push to Main

- **Automatic**: Deploys on every push
- **Preview**: Preview deployments for PRs
- **Production**: Main branch → production

### Custom Domains

1. **Add Domain**: In Vercel project settings
2. **Configure DNS**: Add DNS records
3. **SSL**: Automatic SSL certificate

## Environment Variables

### Production

Set in Vercel dashboard:
- **Settings** → **Environment Variables**
- **Add Variable**: Name and value
- **Environment**: Production, Preview, Development

### Secrets

For sensitive values:
- Use Vercel's secret management
- Never commit to repository
- Rotate regularly

## Monitoring

### Vercel Analytics

- **Deployment Logs**: View build logs
- **Function Logs**: View API logs
- **Analytics**: Performance metrics

### Error Tracking

- **Error Logs**: View errors
- **Function Logs**: API errors
- **Build Logs**: Build errors

## Best Practices

1. **Use Environment Variables**: Never hardcode secrets
2. **Monitor Deployments**: Watch for errors
3. **Test Before Deploy**: Test locally first
4. **Use Preview Deployments**: Test PRs before merge

## Troubleshooting

**Build Fails**:
- Check build logs
- Verify environment variables
- Check Node.js version

**Deployment Errors**:
- Review function logs
- Check MongoDB connection
- Verify environment variables

## Next Steps

- [Configuration](../getting-started/configuration.md) - Configure environment
- [Self-Hosted Deployment](./self-hosted.md) - Alternative deployment
