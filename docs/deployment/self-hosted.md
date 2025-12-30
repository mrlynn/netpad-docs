# Self-Hosted Deployment

Deploy NetPad on your own infrastructure for full control.

## Prerequisites

- Server with Node.js 18+
- MongoDB connection
- Domain name (optional)
- SSL certificate (for production)

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
MONGODB_URI=mongodb+srv://...
SESSION_SECRET=...
VAULT_ENCRYPTION_KEY=...
NEXT_PUBLIC_APP_URL=https://yourdomain.com
# ... other variables
```

### 3. Start Application

```bash
npm start
```

Application runs on port 3000 (or PORT environment variable).

### 4. Use Process Manager (PM2)

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

### 5. Configure Reverse Proxy (nginx)

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

## Troubleshooting

**Application Won't Start**:
- Check Node.js version
- Verify environment variables
- Check MongoDB connection

**Performance Issues**:
- Monitor resources
- Check MongoDB performance
- Optimize configuration

## Next Steps

- [Configuration](../getting-started/configuration.md) - Configure environment
- [Docker Deployment](./docker.md) - Container deployment
