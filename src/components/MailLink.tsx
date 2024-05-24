import React, { ComponentProps } from 'react';
import Link, { LinkProps } from 'next/link';
import { twclsx } from '@/utils/twclsx';
import { LuSend } from 'react-icons/lu';

interface MailLinkProps extends Omit<ComponentProps<'a'>, 'href'>, LinkProps {}

function MailLink({ children, ...props }: MailLinkProps) {
  return (
    <Link
      {...props}
      className={twclsx(
        'text-link',
        'text-secondary-75',
        'inline-flex',
        'justify-start',
        'items-center',
        'gap-[8px]',
        'underline',
      )}
    >
      {children}
      <LuSend />
    </Link>
  );
}

export default MailLink;
