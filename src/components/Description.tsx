import React, { ComponentProps } from 'react';
import { twclsx } from '@/utils/twclsx';

interface DescriptionProps extends ComponentProps<'pre'> {}

function Description({ ...props }: DescriptionProps) {
  return (
    <pre
      {...props}
      className={twclsx(
        'text-body',
        'text-lightslate',
        'whitespace-pre-wrap',
        'mb-[48px]',
      )}
    />
  );
}

export default Description;
