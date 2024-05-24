import React, { ComponentProps } from 'react';
import Link, { LinkProps } from 'next/link';
import { twclsx } from '@/utils/twclsx';
import { FiExternalLink } from 'react-icons/fi';

interface OpenLinkProps extends Omit<ComponentProps<'a'>, 'href'>, LinkProps {}

function OpenLink({ children, className, ...props }: OpenLinkProps) {
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
        className,
      )}
    >
      {children}
      <FiExternalLink />
    </Link>
  );
}

export default OpenLink;
