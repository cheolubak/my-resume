import React, { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twclsx } from '@/utils/twclsx';

const label = cva(
  ['text-white', 'inline-flex', 'justify-center', 'items-center'],
  {
    variants: {
      size: {
        sm: ['text-pretitle', 'px-[6px]', 'h-[24px]', 'rounded-md'],
        md: ['text-small', 'px-[8px]', 'h-[30px]', 'rounded-lg'],
        lg: ['text-button', 'px-[10px]', 'h-[30px]', 'rounded-2xl'],
      },
      theme: {
        dark: 'bg-dark-75',
        primary: 'bg-primary-75',
        secondary: 'bg-secondary-75',
      },
    },
    defaultVariants: {
      size: 'md',
      theme: 'primary',
    },
  },
);

interface LabelProps
  extends ComponentProps<'span'>,
    VariantProps<typeof label> {}

function Label({ className, ...props }: LabelProps) {
  return (
    <span
      {...props}
      className={twclsx(label({ ...props }), className)}
    />
  );
}

export default Label;
