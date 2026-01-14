import type { IconMetadata } from "./types";

/**
 * Get icon metadata from component name and path
 */
export function getIconMetadata(
  componentName: string,
  path: string
): IconMetadata {
  const parts = path.split("/");
  const category = parts.length > 1 ? (parts[0] ?? "Other") : "Other";
  const filename = parts[parts.length - 1] ?? componentName;

  return {
    name: componentName,
    category,
    filename,
  };
}

/**
 * Group icons by category
 */
export function groupIconsByCategory(
  icons: IconMetadata[]
): Record<string, IconMetadata[]> {
  return icons.reduce(
    (acc, icon) => {
      const category = icon.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      const categoryArray = acc[category];
      if (categoryArray) {
        categoryArray.push(icon);
      }
      return acc;
    },
    {} as Record<string, IconMetadata[]>
  );
}

/**
 * Search icons by name or category
 */
export function searchIcons(
  icons: IconMetadata[],
  query: string
): IconMetadata[] {
  const lowerQuery = query.toLowerCase();
  return icons.filter(
    (icon) =>
      icon.name.toLowerCase().includes(lowerQuery) ||
      icon.category.toLowerCase().includes(lowerQuery) ||
      icon.filename.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get all categories from icons
 */
export function getCategories(icons: IconMetadata[]): string[] {
  return Array.from(new Set(icons.map((icon) => icon.category))).sort();
}
