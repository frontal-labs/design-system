# Custom Templates

`@frontal/generators` uses [Handlebars](https://handlebarsjs.com/) for code generation. This guide explains how to customize or add new templates.

## Directory Structure

Templates are currently embedded within the generator classes in `src/generators/`. To move them to external files:

1. Create a `templates/` directory in the package root.
2. Use the `TemplateEngine` in `src/base/template.ts` to load and render these files.

## Custom Helpers

The `TemplateEngine` provides several custom helpers:

- `lowerCase`: Converts string to all lowercase.
- `upperCase`: Converts string to all uppercase.
- `camelCase`: Converts string to camelCase.
- `pascalCase`: Converts string to PascalCase.
- `snakeCase`: Converts string to snake_case.
- `kebabCase`: Converts string to kebab-case.
- `json`: Stringifies an object to JSON.

## Example Usage

```handlebars
// {{pascalCase name}}.ts
export class {{pascalCase name}} {
  constructor(public readonly id: string) {}
}
```
