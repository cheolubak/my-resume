import React, { ComponentProps } from 'react';
import { twclsx } from '@/utils/twclsx';

interface SubTitleProps extends ComponentProps<'h2'> {}

function SubTitle({ ...props }: SubTitleProps) {
  return (
    <h2
      {...props}
      className={twclsx('text-h3', 'mb-[12px]')}
    />
  );
}

export default SubTitle;
