# Deploy NetPad to Vercel

## Deploy Your Own NetPad Instance

NetPad can be self-hosted on Vercel with your own MongoDB Atlas database. This gives you complete control over your data, custom domain support, and the ability to customize your instance.

### Key Benefits

- Full data ownership and control
- Custom domain support
- Use your existing MongoDB Atlas cluster
- Free tier available (Vercel Hobby + MongoDB M0)
- Automatic SSL and CDN

---

## Quick Start - One-Click Deploy

The fastest way to deploy NetPad:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmrlynn%2Fnetpad-v3&env=MONGODB_URI,SESSION_SECRET,VAULT_ENCRYPTION_KEY&envDescription=Required%20environment%20variables%20for%20NetPad&envLink=https%3A%2F%2Fgithub.com%2Fmrlynn%2Fnetpad-v3%2Fblob%2Fmain%2Fdocs%2FDEPLOY.md&project-name=my-netpad&repository-name=my-netpad&demo-title=NetPad&demo-description=MongoDB-connected%20forms%2C%20workflows%2C%20and%20data%20explorer&demo-url=https%3A%2F%2Fnetpad.io)

### What happens when you click:

1. Vercel forks the NetPad repository to your GitHub account
2. You're prompted to configure required environment variables
3. Vercel builds and deploys your instance
4. Your NetPad instance is live in ~2-3 minutes

---

## Prerequisites

Before deploying, you'll need:

| Requirement | Description | Link |
|-------------|-------------|------|
| Vercel Account | Free or paid account | [Sign up](https://vercel.com/signup) |
| GitHub Account | To fork and manage your instance | [Sign up](https://github.com/signup) |
| MongoDB Atlas Account | For your database | [Sign up](https://www.mongodb.com/cloud/atlas/register) |

---

## Environment Variables

### Required Variables

These must be configured for NetPad to function:

| Variable | Description | How to Generate |
|----------|-------------|-----------------|
| `MONGODB_URI` | MongoDB connection string | See [MongoDB Atlas Setup](#setting-up-mongodb-atlas) below |
| `SESSION_SECRET` | Secret for session encryption (min 32 characters) | Run: `openssl rand -hex 32` |
| `VAULT_ENCRYPTION_KEY` | Base64 key for vault encryption (32 bytes) | Run: `openssl rand -base64 32` |

### Recommended Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_DATABASE` | Database name for NetPad data | `forms` |
| `NEXT_PUBLIC_APP_URL` | Public URL of your deployment | `${VERCEL_URL}` (auto-detected) |
| `APP_URL` | Server-side URL for callbacks | `${VERCEL_URL}` (auto-detected) |

### Optional Variables - Features

| Variable | Description | Enables |
|----------|-------------|---------|
| `OPENAI_API_KEY` | OpenAI API key | AI form/workflow generation |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob storage token | File uploads in forms |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | Google login |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret | Google login |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID | GitHub login |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth secret | GitHub login |
| `SMTP_HOST` | SMTP server hostname | Magic link email login |
| `SMTP_PORT` | SMTP server port | Magic link email login |
| `SMTP_USER` | SMTP username | Magic link email login |
| `SMTP_PASS` | SMTP password | Magic link email login |
| `FROM_EMAIL` | Sender email address | Magic link email login |

### Optional Variables - Billing

| Variable | Description |
|----------|-------------|
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |

---

## Setting Up MongoDB Atlas

### Step 1: Create a Free Cluster

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new project or use an existing one
3. Click **"Build a Database"**
4. Select **M0 (Free)** for testing, or **M2/M5** for production
5. Choose a cloud provider (AWS recommended) and region close to your Vercel deployment region

### Step 2: Create a Database User

1. Navigate to **Security → Database Access**
2. Click **"Add New Database User"**
3. Select **Password authentication**
4. Enter a username (e.g., `netpad-user`)
5. Click **"Autogenerate Secure Password"** and save it securely
6. Set privileges to **"Read and write to any database"**
7. Click **"Add User"**

### Step 3: Configure Network Access

1. Navigate to **Security → Network Access**
2. Click **"Add IP Address"**
3. For quick setup: Click **"Allow Access from Anywhere"** (`0.0.0.0/0`)

:::note
For production, consider using Vercel's IP ranges or MongoDB Atlas Private Endpoints
:::

4. Click **"Confirm"**

### Step 4: Get Your Connection String

1. Navigate to **Databases → Connect**
2. Click **"Connect your application"**
3. Select **Driver: Node.js** and **Version: 5.5 or later**
4. Copy the connection string
5. Replace `<password>` with your database user's password
6. Add your database name before the `?`:

```
mongodb+srv://username:password@cluster.mongodb.net/forms?retryWrites=true&w=majority
```

---

## Manual Deployment Steps

If you prefer to deploy manually instead of using the one-click button:

### Step 1: Fork the Repository

1. Go to [github.com/mrlynn/netpad-v3](https://github.com/mrlynn/netpad-v3)
2. Click **"Fork"** in the top right
3. This creates your own copy of NetPad that you can customize

### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import"** next to your forked repository
3. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: Leave empty
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: Leave empty (default)

### Step 3: Add Environment Variables

In the Vercel project configuration:

1. Expand **"Environment Variables"**
2. Add each required variable:
   - `MONGODB_URI` = your connection string
   - `SESSION_SECRET` = your generated secret
   - `VAULT_ENCRYPTION_KEY` = your generated key
3. Add any optional variables for features you want

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (~2-3 minutes)
3. Click **"Visit"** to see your deployment

### Step 5: Verify

Check the health endpoint:

```
https://your-app.vercel.app/api/v1/health
```

Expected response:

```json
{
  "status": "healthy",
  "api": { "status": "operational", "responseTimeMs": 10 },
  "database": { "status": "connected", "responseTimeMs": 50 }
}
```

---

## Post-Deployment Configuration

### Setting Up OAuth Login

#### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID
3. Set authorized redirect URI: `https://your-app.vercel.app/api/auth/google/callback`
4. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to Vercel

#### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set callback URL: `https://your-app.vercel.app/api/auth/github/callback`
4. Add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` to Vercel

### Setting Up Magic Link Email

1. Choose an SMTP provider (SendGrid, Postmark, AWS SES, etc.)
2. Add the SMTP environment variables
3. Redeploy to apply changes

### Setting Up AI Features

1. Get an API key from [OpenAI Platform](https://platform.openai.com)
2. Add `OPENAI_API_KEY` to Vercel
3. Redeploy to enable AI form/workflow generation

### Setting Up File Uploads

1. In Vercel Dashboard, go to **Storage → Create Database → Blob**
2. Create a new Blob store
3. Copy the `BLOB_READ_WRITE_TOKEN`
4. Add it to your environment variables

---

## Custom Domain Setup

1. Go to your Vercel project → **Settings → Domains**
2. Add your custom domain (e.g., `forms.yourcompany.com`)
3. Configure DNS as instructed by Vercel
4. Update environment variables:

```
NEXT_PUBLIC_APP_URL=https://forms.yourcompany.com
APP_URL=https://forms.yourcompany.com
```

5. Update OAuth callback URLs if using Google/GitHub login

---

## Keeping Your Instance Updated

### Automatic Updates (Recommended)

Set up GitHub Actions to sync with the main NetPad repository:

1. In your forked repo, go to **Settings → Actions → General**
2. Enable workflows
3. Updates will be merged automatically (or create PRs for review)

### Manual Updates

```bash
# Add upstream remote
git remote add upstream https://github.com/mrlynn/netpad-v3.git

# Fetch updates
git fetch upstream

# Merge updates
git merge upstream/main

# Push to your fork (triggers Vercel redeploy)
git push
```

---

## Troubleshooting

### "Database connection failed"

- Verify `MONGODB_URI` is correct and includes the password
- Check MongoDB Atlas Network Access allows your IP (or `0.0.0.0/0`)
- Ensure the database user has correct permissions
- Try the connection string in MongoDB Compass to verify

### "Session error" or "Authentication failed"

- Ensure `SESSION_SECRET` is at least 32 characters
- Don't share secrets between different deployments
- Regenerate and redeploy if you suspect compromise

### "Vault encryption failed"

- `VAULT_ENCRYPTION_KEY` must be valid base64
- Must decode to exactly 32 bytes
- Generate fresh: `openssl rand -base64 32`

### "OAuth callback failed"

- Verify callback URLs match your deployment domain exactly
- Check for trailing slashes in URLs
- Ensure client ID and secret are correct

### Build fails

- Check build logs in Vercel dashboard
- Ensure Node.js version 18+ is being used
- Verify all required environment variables are set

### Workflows not running

- Vercel Cron requires Pro plan or higher
- Check `/api/workflows/process` endpoint is accessible
- Verify no errors in Vercel Functions logs

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Your Vercel Deployment                    │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  Next.js    │  │ Vercel Cron │  │   Vercel Blob       │ │
│  │  App        │  │ (workflows) │  │   (file storage)    │ │
│  │  (Edge/     │  │             │  │                     │ │
│  │  Serverless)│  │ Every min   │  │   Optional          │ │
│  └──────┬──────┘  └──────┬──────┘  └─────────────────────┘ │
│         │                │                                   │
│         └────────┬───────┘                                   │
│                  │                                           │
└──────────────────┼───────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────┐
│              Your MongoDB Atlas Cluster                      │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Database: forms                                         ││
│  │  ├── users           (user accounts)                    ││
│  │  ├── organizations   (teams/workspaces)                 ││
│  │  ├── forms           (form definitions)                 ││
│  │  ├── form_responses  (submissions)                      ││
│  │  ├── workflows       (automation definitions)           ││
│  │  ├── workflow_jobs   (execution history)                ││
│  │  └── connection_vaults (encrypted connections)          ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

---

## Frequently Asked Questions

**Q: Is self-hosting free?**
A: Yes! Vercel's Hobby plan and MongoDB Atlas M0 are both free. You only pay if you need more resources.

**Q: Can I use my existing MongoDB cluster?**
A: Absolutely. Just use your existing connection string in `MONGODB_URI`.

**Q: Will my data sync with netpad.io?**
A: No. Self-hosted instances are completely independent. Your data stays in your own database.

**Q: Can I customize the code?**
A: Yes! Fork the repository and make any changes you need. It's open source under MIT license.

**Q: How do I backup my data?**
A: Use MongoDB Atlas's built-in backup features, or use `mongodump` for manual backups.

**Q: Can I migrate from netpad.io to self-hosted?**
A: Yes. Export your forms and data from netpad.io and import to your self-hosted instance.

---

## Getting Help

- **Documentation**: [docs.netpad.io](https://docs.netpad.io)
- **GitHub Issues**: [github.com/mrlynn/netpad-v3/issues](https://github.com/mrlynn/netpad-v3/issues)
- **Community Discord**: [Join our Discord](https://discord.gg/netpad)

---

## Next Steps

- [Self-Hosted Deployment](./self-hosted.md) - Alternative deployment options
- [Docker Deployment](./docker.md) - Container-based deployment
- [Configuration](../getting-started/configuration.md) - Detailed configuration options
