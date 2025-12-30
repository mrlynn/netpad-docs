# Docker Deployment

Deploy NetPad using Docker containers for consistent, scalable deployments.

## Prerequisites

- Docker installed
- Docker Compose (optional, for multi-container setup)
- MongoDB connection

## Quick Start

### Using Docker Compose

1. **Create docker-compose.yml**:
```yaml
version: '3.8'
services:
  netpad:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=mongodb+srv://...
      - SESSION_SECRET=...
      - VAULT_ENCRYPTION_KEY=...
      - NEXT_PUBLIC_APP_URL=http://localhost:3000
    restart: unless-stopped
```

2. **Start Services**:
```bash
docker-compose up -d
```

### Using Docker Directly

1. **Build Image**:
```bash
docker build -t netpad .
```

2. **Run Container**:
```bash
docker run -d \
  -p 3000:3000 \
  -e MONGODB_URI=mongodb+srv://... \
  -e SESSION_SECRET=... \
  -e VAULT_ENCRYPTION_KEY=... \
  -e NEXT_PUBLIC_APP_URL=http://localhost:3000 \
  --name netpad \
  netpad
```

## Dockerfile

Example Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## Environment Variables

Set via:
- **docker-compose.yml**: In `environment` section
- **docker run**: Using `-e` flags
- **.env file**: Using `--env-file` flag

## Volumes

Persist data:
```yaml
volumes:
  - ./data:/app/data
```

## Networking

Connect to MongoDB:
- **External MongoDB**: Use connection string
- **Docker Network**: Connect to MongoDB container

## Scaling

Scale with Docker Swarm or Kubernetes:
```bash
docker service scale netpad=3
```

## Best Practices

1. **Use Multi-Stage Builds**: Reduce image size
2. **Health Checks**: Add health check endpoints
3. **Logging**: Configure log drivers
4. **Security**: Run as non-root user

## Troubleshooting

**Container Won't Start**:
- Check environment variables
- Verify MongoDB connection
- Check container logs: `docker logs netpad`

**Performance Issues**:
- Allocate sufficient resources
- Use resource limits
- Monitor container metrics

## Next Steps

- [Self-Hosted Deployment](./self-hosted.md) - Alternative deployment
- [Configuration](../getting-started/configuration.md) - Environment setup
