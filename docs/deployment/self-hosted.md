# Self-Hosted Deployment

Deploy NetPad on your own infrastructure for full control and access to all features including RAG (Knowledge-Guided Conversational Forms) without requiring an M10+ Atlas cluster upgrade.

## Why Self-Host?

Self-hosted deployment provides several advantages:

- **Full Control**: Deploy on your own infrastructure
- **Data Residency**: Keep data on-premises or in your own cloud
- **RAG for All Tiers**: Access RAG features without M10+ cluster upgrade
- **Cost Optimization**: Use Atlas Local instead of paid Atlas clusters
- **Custom Configuration**: Full control over all settings

## Deployment Modes

NetPad supports two deployment modes:

| Mode | Environment Variable | RAG Requirements | Best For |
|------|---------------------|------------------|----------|
| **Cloud** | `NETPAD_DEPLOYMENT_MODE=cloud` | Team/Enterprise + M10+ cluster | Production SaaS (netpad.io) |
| **Self-Hosted** | `NETPAD_DEPLOYMENT_MODE=self-hosted` | Any tier + Atlas Local | Private instances, development |

## Prerequisites

- Server with Node.js 18+
- MongoDB connection (Atlas or Atlas Local)
- Domain name (optional)
- SSL certificate (for production)
- Docker (if using Atlas Local for RAG)

## Deployment Steps

### 1. Build Application

```bash
git clone https://github.com/mrlynn/netpad-v3
cd netpad-v3
npm install
npm run build
```

### 2. Set Environment Variables

Create `.env` file:
```bash
# Database connection
MONGODB_URI=mongodb+srv://...

# Deployment mode - set to 'self-hosted' for RAG on all tiers
NETPAD_DEPLOYMENT_MODE=self-hosted

# Security
SESSION_SECRET=...
VAULT_ENCRYPTION_KEY=...

# Application URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# OpenAI API key (required for RAG embeddings)
OPENAI_API_KEY=sk-...

# ... other variables
```

### 3. Setup Atlas Local (Optional - for RAG features)

If you want to use RAG features without an M10+ Atlas cluster, set up Atlas Local:

**Option 1: Using Atlas CLI**
```bash
# Install Atlas CLI
brew install mongodb-atlas

# Setup local deployment
atlas deployments setup local --type local
```

**Option 2: Using Docker**
```bash
# Run Atlas Local container
docker run -d \
  --name atlas-local \
  -p 27017:27017 \
  mongodb/mongodb-atlas-local:latest
```

Update your `.env` to use the local connection:
```bash
# For Atlas Local
MONGODB_URI=mongodb://localhost:27017

# Ensure self-hosted mode is enabled
NETPAD_DEPLOYMENT_MODE=self-hosted
```

Atlas Local includes Vector Search support, enabling RAG features without any additional setup.

### 4. Start Application

```bash
npm start
```

Application runs on port 3000 (or PORT environment variable).

### 5. Use Process Manager (PM2)

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "netpad" -- start

# Save PM2 configuration
pm2 save

# Setup startup script
pm2 startup
```

### 6. Configure Reverse Proxy (nginx)

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

### 6. Setup SSL (Let's Encrypt)

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com
```

## System Requirements

- **CPU**: 1+ cores
- **RAM**: 512MB+ (1GB recommended)
- **Storage**: 1GB+ for application
- **Network**: Internet connection for MongoDB

## Maintenance

### Updating Application

```bash
git pull
npm install
npm run build
pm2 restart netpad
```

### Monitoring

- **PM2**: `pm2 status`, `pm2 logs`
- **System**: Monitor CPU, RAM, disk
- **Application**: Check application logs

## Security

1. **Firewall**: Restrict access
2. **SSL**: Use HTTPS
3. **Updates**: Keep updated
4. **Backups**: Regular backups

## RAG Features in Self-Hosted Mode

Self-hosted deployments unlock RAG (Knowledge-Guided Conversational Forms) for all subscription tiers:

### Feature Availability

| Feature | Cloud Mode | Self-Hosted Mode |
|---------|------------|------------------|
| Basic Conversational Forms | All tiers | All tiers |
| RAG Document Upload | Team/Enterprise only | **All tiers** |
| Vector Search | Team/Enterprise + M10+ | **All tiers + Atlas Local** |
| Source Citations | Team/Enterprise only | **All tiers** |
| Knowledge-Guided Responses | Team/Enterprise only | **All tiers** |

### Using RAG in Self-Hosted Mode

1. **Enable Self-Hosted Mode**:
   ```bash
   NETPAD_DEPLOYMENT_MODE=self-hosted
   ```

2. **Setup Atlas Local** (see Step 3 above)

3. **Configure OpenAI API Key**:
   ```bash
   OPENAI_API_KEY=sk-your-api-key
   ```

4. **Use RAG Features**:
   - Upload documents (PDF, DOCX, TXT up to 5MB)
   - Enable RAG in conversational form settings
   - Configure retrieval parameters
   - AI responses include source citations

### Atlas Local vs Atlas M10+

| Feature | Atlas Local | Atlas M10+ |
|---------|-------------|------------|
| Vector Search | Yes | Yes |
| Cost | Free (Docker) | Paid (starts ~$60/month) |
| SLA | None | 99.95% uptime |
| Production Ready | Development/Small workloads | Enterprise production |
| Scaling | Manual | Automatic |

**Recommendation**: Use Atlas Local for development and small deployments. Use Atlas M10+ for production workloads requiring SLA guarantees.

## Troubleshooting

**Application Won't Start**:
- Check Node.js version
- Verify environment variables
- Check MongoDB connection

**Performance Issues**:
- Monitor resources
- Check MongoDB performance
- Optimize configuration

**RAG Not Working**:
- Verify `NETPAD_DEPLOYMENT_MODE=self-hosted` is set
- Check Atlas Local is running: `docker ps | grep atlas-local`
- Verify OpenAI API key is valid
- Check MongoDB connection string points to Atlas Local

**Vector Search Errors**:
- Ensure Atlas Local container is running
- Check container logs: `docker logs atlas-local`
- Verify port 27017 is not in use by another process

## Next Steps

- [Configuration](../getting-started/configuration.md) - Configure environment
- [Docker Deployment](./docker.md) - Container deployment
- [RAG Documentation](../ai/rag-knowledge-guided.md) - Learn about RAG features
