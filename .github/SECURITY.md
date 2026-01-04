# Security Policy

## Supported Versions

We actively support security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **GitHub Security Advisories** (Preferred)
   - Go to https://github.com/frontal-labs/design-system/security/advisories/new
   - Click "Report a vulnerability"
   - Fill out the form with details about the vulnerability

2. **Email**
   - Email: maintainer@frontal.dev
   - Include as much detail as possible about the vulnerability
   - Include steps to reproduce if applicable

## What to Include

When reporting a vulnerability, please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)
- Any additional context

## Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Resolution**: Depends on severity and complexity

## Security Best Practices

We follow these security best practices:

- Regular dependency updates via Dependabot
- Automated security scanning in CI/CD
- CodeQL analysis for code security
- Secret scanning for exposed credentials
- Regular security audits
- Security-focused code reviews

## Security Updates

Security updates are released as soon as possible after a vulnerability is confirmed and a fix is available. We will:

1. Acknowledge receipt of the vulnerability report
2. Confirm the vulnerability and assess its impact
3. Develop and test a fix
4. Release the fix in a security update
5. Publish a security advisory (if applicable)

## Scope

This security policy applies to:

- All code in this repository
- Dependencies and third-party packages
- Infrastructure and deployment configurations
- CI/CD pipelines

## Out of Scope

The following are considered out of scope:

- Social engineering attacks
- Physical security issues
- Denial of service attacks
- Issues requiring physical access to devices
- Issues in third-party services we use

## Recognition

We appreciate responsible disclosure and may recognize security researchers who help us improve our security.

## Additional Resources

- [Security Documentation](https://github.com/frontal-labs/design-system/security)

