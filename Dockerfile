# Use Bun official image
FROM oven/bun:1.3.3 AS base
WORKDIR /app

# Install dependencies
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
FROM base AS prerelease
COPY --from=install /app/node_modules ./node_modules
COPY . .

# Build the project
FROM base AS build
COPY --from=prerelease /app .
RUN bun run build

# Production image
FROM base AS release
COPY --from=install /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
CMD ["bun", "run", "dev"]

