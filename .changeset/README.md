# Changesets

This directory contains changeset files that describe changes to packages in this monorepo.

## What is a changeset?

A changeset is a description of changes you've made to a package. It includes:
- The type of change (patch, minor, or major)
- A summary of what changed
- Which packages are affected

## How to create a changeset

1. Run `pnpm changeset` in the root of the monorepo
2. Select the packages that have changed
3. Select the type of change (patch, minor, or major)
4. Write a summary of the changes
5. The changeset file will be created in `.changeset/`

## Versioning

When you're ready to release:
1. Run `pnpm version-packages` to update package versions based on changesets
2. Run `pnpm release` to publish the packages

## More Information

See the [Changesets documentation](https://github.com/changesets/changesets) for more details.

