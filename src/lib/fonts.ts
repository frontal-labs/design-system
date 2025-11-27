import { Figtree, Roboto_Mono } from 'next/font/google';
import { cn } from './utils';

const Sans = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  adjustFontFallback: false,
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Inter',
    'Segoe UI',
    'Roboto',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const MonoSans = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  adjustFontFallback: false,
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Courier New',
    'monospace',
  ],
  weight: ['400', '700'],
});

/**
 * Fonts for the Frontal UI
 */
export const fonts = cn(
  Sans.variable,
  MonoSans.variable,
  'touch-manipulation font-sans leading-normal antialiased',
);
