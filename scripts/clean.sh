#!/bin/bash

# Clean script for Frontal Design System monorepo
set -e

echo "🧹 Cleaning workspace..."

# Remove node_modules, dist, and cache directories
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
find . -name "dist" -type d -prune -exec rm -rf '{}' +
find . -name ".cache" -type d -prune -exec rm -rf '{}' +
find . -name ".turbo" -type d -prune -exec rm -rf '{}' +

echo "✨ Workspace cleaned!"
