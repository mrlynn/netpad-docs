# Deployment Overview

NetPad can be deployed to various platforms. Choose the deployment method that best fits your needs.

## Deployment Options

### Vercel (Recommended)

Easiest deployment option:
- **One-Click Deploy**: Connect GitHub repo
- **Automatic Deployments**: Deploy on push
- **Global CDN**: Fast worldwide
- **Free Tier**: Generous free tier

See [Vercel Deployment](./vercel.md) for details.

### Self-Hosted

Full control over deployment with RAG for all tiers:
- **Your Infrastructure**: Deploy on your servers
- **Custom Configuration**: Full control
- **Data Residency**: Keep data on-premises
- **RAG for All Tiers**: Use Atlas Local for RAG without M10+ upgrade
- **Cost Optimization**: No mandatory paid cluster for advanced features

See [Self-Hosted Deployment](./self-hosted.md) for details.

### Docker (Future)

Containerized deployment:
- **Docker Images**: Pre-built images
- **Easy Scaling**: Scale with containers
- **Consistent Environment**: Same everywhere

See [Docker Deployment](./docker.md) for details.

## Prerequisites

All deployments require:
- **Node.js 18+**: Runtime environment
- **MongoDB**: Database connection
- **Environment Variables**: Configuration
- **HTTPS**: SSL certificate (production)

## Choosing a Deployment Method

**Choose Vercel if**:
- Want easiest setup
- Don't need on-premises
- Want automatic deployments

**Choose Self-Hosted if**:
- Need on-premises deployment
- Have existing infrastructure
- Need custom configuration
- Want RAG features without M10+ cluster upgrade
- Need cost-effective deployment with all features

**Choose Docker if**:
- Using container orchestration
- Need easy scaling
- Want consistent environments

## Next Steps

- [Vercel Deployment](./vercel.md) - Deploy to Vercel
- [Self-Hosted Deployment](./self-hosted.md) - Self-host setup
- [Docker Deployment](./docker.md) - Docker setup
