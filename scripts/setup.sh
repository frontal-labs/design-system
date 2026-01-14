#!/bin/bash

# Setup script for Frontal Design System monorepo
set -e

echo "🚀 Starting setup..."

# Check for Bun
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Please install it from https://bun.sh"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Initialize husky
echo "🐶 Initializing Husky..."
bun run husky

echo "✅ Setup complete!"
