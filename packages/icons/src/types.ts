import type { ComponentType, SVGProps } from "react";

/**
 * Base props for all icon components
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon in pixels or as a string (e.g., "24px", "1rem")
   * @default 24
   */
  size?: number | string;
  /**
   * Color of the icon
   * @default "currentColor"
   */
  color?: string;
}

/**
 * Icon metadata
 */
export interface IconMetadata {
  /**
   * Component name of the icon
   */
  name: string;
  /**
   * Category/folder the icon belongs to
   */
  category: string;
  /**
   * Original filename of the SVG
   */
  filename: string;
}

/**
 * Icon component type
 */
export type IconComponent = ComponentType<IconProps>;
