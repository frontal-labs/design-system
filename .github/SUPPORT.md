# Support

## Getting Help

We're here to help! Here are the best ways to get support:

### Documentation

- **Getting Started**: Check [docs/GETTING-STARTED.md](docs/GETTING-STARTED.md)
- **Contributing**: See [CONTRIBUTING.md](../CONTRIBUTING.md)
- **Architecture**: Review [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **Troubleshooting**: Check [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)

### Discussions

- **General Questions**: Use [GitHub Discussions](https://github.com/frontal-labs/design-system/discussions)
- **Q&A**: Check existing discussions for answers
- **Ideas**: Share and discuss ideas with the community

### Issues

- **Bug Reports**: Open an issue with the bug label
- **Feature Requests**: Open an issue with the enhancement label
- **Questions**: Open an issue with the question label

### Security

- **Security Issues**: See [SECURITY.md](SECURITY.md)
- **Vulnerabilities**: Report via [GitHub Security Advisories](https://github.com/frontal-labs/design-system/security/advisories/new)

## Common Issues

### Setup Problems

**Issue**: Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
bun install
```

**Issue**: Bun not found
```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash
```

**Issue**: Python dependencies failing
```bash
# Ensure Poetry is installed
pip install poetry
poetry install
```

### Build Problems

**Issue**: Build failures
```bash
# Clean and rebuild
bun run clean
bun run build
```

**Issue**: Type errors
```bash
# Check TypeScript configuration
bunx tsc --noEmit
```

### Testing Problems

**Issue**: Tests failing
```bash
# Run tests with verbose output
bun test --verbose
```

## Community Resources

- **Email**: maintainer@frontal.dev

## Response Times

- **Critical Issues**: Within 24 hours
- **General Questions**: Within 48 hours
- **Feature Requests**: Reviewed weekly
- **Documentation**: Updated as needed

## Contributing

If you'd like to help improve our documentation or add examples:

1. Fork the repository
2. Make your changes
3. Submit a pull request

See [CONTRIBUTING.md](../CONTRIBUTING.md) for more details.

## Additional Resources

- [Development Guide](docs/DEVELOPMENT.md)
- [Architecture Documentation](docs/ARCHITECTURE.md)

