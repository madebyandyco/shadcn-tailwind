import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-800 duration-500',
  {
    variants: {
      variant: {
        default: 'bg-zinc-900 text-zinc-100 hover:bg-zinc-900/80 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-100/80 ease-out',
        destructive: 'bg-red-500 text-zinc-100 hover:bg-red-500/80 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/80 ease-out',
        special: 'text-black bg-[#e4ff02] hover:bg-zinc-800 hover:text-[#e4ff02] ease-out',
        outline:
          'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 ease-out',
        secondary: 'bg-zinc-200 text-zinc-900 hover:bg-zinc-200/70 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-800/70 ease-out',
        ghost: 'hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 ease-out',
        link: 'text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100 ease-out',
        brutal:
          'focus-visible:ring-none !ease-none before:!ease-none relative -left-1 -top-1 inline-flex !rounded-none border-4 border-black bg-white px-8 text-base font-bold uppercase text-black transition-all !duration-300 before:absolute before:left-1 before:top-1 before:-z-10 before:h-[calc(100%+8px)] before:w-[calc(100%+8px)] before:border-none before:bg-black before:transition-all before:duration-300 hover:left-1 hover:top-1 before:hover:-left-1 before:hover:-top-1 hover:before:-z-10',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
