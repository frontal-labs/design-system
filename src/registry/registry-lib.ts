import type { Registry } from '@/lib/schema';

export const lib: Registry['items'] = [
  {
    name: 'utils',
    type: 'registry:lib',
    dependencies: ['clsx', 'tailwind-merge'],
    files: [
      {
        path: 'lib/utils.ts',
        type: 'registry:lib',
      },
    ],
  },
  {
    name: 'fonts',
    type: 'registry:lib',
    dependencies: ['next/font/google'],
    files: [
      {
        path: 'lib/fonts.ts',
        type: 'registry:lib',
      },
    ],
  },
];
