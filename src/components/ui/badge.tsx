import { cn } from '@frontal/design-system/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'bg-input text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        blue: 'bg-blue-100 text-blue-800 border-blue-200',
        cyan: 'bg-cyan-600/50 text-cyan-900 border-cyan-700',
        yellow: 'bg-yellow-600/50 text-yellow-900 border-yellow-700',
        brown: 'bg-brown-600/50 text-brown-900 border-brown-700',
        green: 'bg-green-600/50 text-green-900 border-green-700',
        teal: 'bg-teal-600/50 text-teal-900 border-teal-700',
        pink: 'bg-pink-600/50 text-pink-900 border-pink-700',
        purple: 'bg-purple-600/50 text-purple-900 border-purple-700',
        orange: 'bg-orange-600/50 text-orange-900 border-orange-700',
        red: 'bg-red-600/50 text-red-900 border-red-700',
      },
      size: {
        default: 'h-5 px-2 py-0.5 text-xs',
        sm: 'h-4 px-1.5 py-0.5 text-xs',
        lg: 'h-6 px-2.5 py-0.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}
