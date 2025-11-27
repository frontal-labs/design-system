import { z } from 'zod';
import { type Registry, registryItemSchema } from '@/lib/schema';
import { blocks } from '@/registry/registry-blocks';
import { charts } from '@/registry/registry-charts';
import { examples } from '@/registry/registry-examples';
import { hooks } from '@/registry/registry-hooks';
import { internal } from '@/registry/registry-internal';
import { lib } from '@/registry/registry-lib';
import { themes } from '@/registry/registry-themes';
import { ui } from '@/registry/registry-ui';

const DEPRECATED_ITEMS = [
  'toast',
  'toast-demo',
  'toast-destructive',
  'toast-simple',
  'toast-with-action',
  'toast-with-title',
];

// Shared between index and style for backward compatibility.
const FRONTAL_STYLE = {
  type: 'registry:style',
  dependencies: ['class-variance-authority', 'lucide-react'],
  devDependencies: ['tw-animate-css'],
  registryDependencies: ['utils'],
  cssVars: {},
  files: [],
};

export const registry = {
  name: 'frontal/design-system',
  homepage: 'https://frontal.dev',
  items: z.array(registryItemSchema).parse(
    [
      {
        name: 'index',
        ...FRONTAL_STYLE,
      },
      {
        name: 'style',
        ...FRONTAL_STYLE,
      },
      ...ui,
      ...blocks,
      ...charts,
      ...lib,
      ...hooks,
      ...themes,
      ...examples,
      ...internal,
    ]
      .filter((item) => {
        return !DEPRECATED_ITEMS.includes(item.name);
      })
      .map((item) => {
        if (item.name === 'accordion' && 'tailwind' in item) {
          item.tailwind = undefined;
        }

        return item;
      }),
  ),
} satisfies Registry;
