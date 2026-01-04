# Docker Setup for Storybook

This directory contains Docker configuration files for running Storybook in a containerized environment.

## Files

- `Dockerfile` - Multi-stage Dockerfile with development and production targets
- `docker-compose.yml` - Docker Compose configuration for easy development
- `.dockerignore` - Files and directories to exclude from Docker builds

## Usage

### Development Mode

Run Storybook in development mode with hot reload:

```bash
docker-compose up
```

This will:

- Build the Docker image using the `development` target
- Start Storybook on port 6006
- Mount the source code for live reloading
- Exclude node_modules from volume mounts for better performance

Access Storybook at: <http://localhost:6006>

### Production Build

Build and run the production version:

```bash
# Build the production image
docker build -f Dockerfile --target release -t storybook:latest ../..

# Run the production container
docker run -p 6006:6006 storybook:latest
```

The production build:

- Builds the static Storybook files
- Serves them using a lightweight HTTP server
- Optimized for smaller image size

### Building from the Storybook Directory

If you're in the `apps/storybook` directory:

```bash
# Development
docker-compose up

# Production
docker build -f Dockerfile --target release -t storybook:latest ../..
docker run -p 6006:6006 storybook:latest
```

## Docker Compose Commands

- `docker-compose up` - Start the service
- `docker-compose up -d` - Start in detached mode
- `docker-compose down` - Stop and remove containers
- `docker-compose build` - Rebuild the image
- `docker-compose logs -f` - View logs

## Notes

- The Dockerfile uses Bun as the runtime (matching the project's package manager)
- The build context is set to the monorepo root (`../..`) to access workspace dependencies
- Development mode includes volume mounts for live code changes
- Production mode serves pre-built static files for optimal performance
