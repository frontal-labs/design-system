# Use Bun official image
FROM oven/bun:1.3.3 AS base
WORKDIR /app

# Install dependencies stage
FROM base AS install
# Copy root package files for workspace setup
COPY package.json bun.lock ./
# Copy all workspace package.json files (needed for workspace dependencies)
# Using find to copy all package.json files in workspace directories
COPY apps ./apps
COPY packages ./packages
COPY internal ./internal
# Install all dependencies
RUN bun install --frozen-lockfile

# Build stage
FROM base AS build
COPY --from=install /app/node_modules ./node_modules
# Copy workspace packages source
COPY packages ./packages
COPY internal ./internal
# Copy storybook app
COPY apps/storybook ./apps/storybook
# Copy shared config files
COPY tsconfig.json ./
COPY turbo.json ./
# Build storybook
WORKDIR /app/apps/storybook
RUN bun run build

# Development stage
FROM base AS development
COPY --from=install /app/node_modules ./node_modules
COPY packages ./packages
COPY internal ./internal
COPY apps/storybook ./apps/storybook
COPY tsconfig.json ./
COPY turbo.json ./

WORKDIR /app/apps/storybook
EXPOSE 6006
CMD ["bun", "run", "dev"]

# Production stage
FROM base AS release
COPY --from=build /app/apps/storybook/storybook-static ./storybook-static

WORKDIR /app
EXPOSE 6006

# Serve the static storybook build using bunx serve
CMD ["bunx", "serve", "storybook-static", "-p", "6006", "-l", "0.0.0.0"]

