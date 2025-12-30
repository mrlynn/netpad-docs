# Installation

NetPad is a Next.js application that can be deployed to Vercel or self-hosted. This guide covers both deployment options.

## Prerequisites

- Node.js 18 or higher
- MongoDB connection (Atlas, self-hosted, or cloud)
- npm or yarn package manager

## Quick Setup (Vercel - Recommended)

The fastest way to get NetPad running is to deploy to Vercel:

1. **Fork or Clone the Repository**:
   ```bash
   git clone https://github.com/mrlynn/netpad-v3
   cd netpad-v3
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file with the required variables (see [Configuration](./configuration.md) for details)

4. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Configure environment variables in Vercel dashboard
   - Deploy automatically on push

## Local Development Setup

For local development:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mrlynn/netpad-v3
   cd netpad-v3
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Generate Encryption Keys**:
   ```bash
   # Generate SESSION_SECRET
   openssl rand -base64 32
   
   # Generate VAULT_ENCRYPTION_KEY
   openssl rand -base64 32
   ```

5. **Set Up MongoDB**:
   - Create a MongoDB database named `form_builder_platform`
   - Organization databases will be created automatically as `org_{orgId}`

6. **Run Development Server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## Self-Hosted Deployment

For self-hosted deployments:

1. **Build the Application**:
   ```bash
   npm install
   npm run build
   ```

2. **Set Environment Variables**:
   Configure all required environment variables (see [Configuration](./configuration.md))

3. **Start the Application**:
   ```bash
   npm start
   ```

4. **Use a Process Manager** (Recommended):
   ```bash
   # Using PM2
   pm2 start npm --name "netpad" -- start
   ```

5. **Configure Reverse Proxy** (nginx example):
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

## Docker Deployment (Future)

Docker deployment support is planned for a future release. See [Deployment Guide](../deployment/docker.md) for details.

## Verification

After installation, verify your setup:

1. Visit your NetPad URL
2. Sign up for an account
3. Create your first form
4. Connect to a MongoDB instance

## Troubleshooting

Common installation issues:

- **Connection Errors**: Verify `MONGODB_URI` is correct
- **Encryption Errors**: Ensure `VAULT_ENCRYPTION_KEY` is properly set
- **Build Errors**: Clear `.next` folder and rebuild
- **Port Conflicts**: Change port with `PORT=3001 npm run dev`

For more help, see [Troubleshooting](../advanced/troubleshooting.md) or open an issue on GitHub.

## Next Steps

- [Configuration Guide](./configuration.md) - Configure your environment
- [Quick Start Guide](./quickstart.md) - Create your first form
- [Deployment Guide](../deployment/overview.md) - Production deployment
