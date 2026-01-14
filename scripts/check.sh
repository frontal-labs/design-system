#!/bin/bash

# Workspace health check script
set -e

echo "🔍 Running workspace checks..."

echo "📋 Linting..."
bun run lint

echo "🧪 Type checking..."
bun run type-check

echo "✅ All checks passed!"
