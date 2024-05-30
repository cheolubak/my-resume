import React, { ComponentProps, FC } from 'react';
import { twclsx } from '@/utils/twclsx';

interface CompanyInfoProps extends ComponentProps<'div'> {}

interface CompanyNameProps extends ComponentProps<'h3'> {}

interface CompanyPositionProps extends ComponentProps<'strong'> {}

interface CompanyDateProps extends ComponentProps<'span'> {}

interface CompanyComponent extends FC<CompanyInfoProps> {
  Name: FC<CompanyNameProps>;
  Position: FC<CompanyPositionProps>;
  Date: FC<CompanyDateProps>;
}

const Company: CompanyComponent = ({ ...props }: CompanyInfoProps) => {
  return (
    <div
      {...props}
      className={twclsx(
        'w-full',
        'lg:w-[220px]',
        'lg:min-w-[220px]',
        'flex',
        'flex-row',
        'flex-wrap',
        'lg:flex-col',
        'justify-start',
        'items-start',
        'gap-x-[12px]',
        'gap-y-[8px]',
        'lg:gap-[4px]',
        'sticky',
        'top-0',
        'pt-[24px]',
        'bg-white',
      )}
    />
  );
};

export default Company;

Company.Name = function CompanyName({ children, ...props }: CompanyNameProps) {
  return (
    <h3
      {...props}
      className={twclsx('text-h3', 'text-dark-100', 'w-full', 'relative')}
    >
      {children}
      <div
        className={twclsx(
          'w-full',
          'h-3',
          'bg-primary-25',
          'absolute',
          'bottom-0',
        )}
      />
    </h3>
  );
};

Company.Position = function CompanyPosition({
  ...props
}: CompanyPositionProps) {
  return (
    <strong
      {...props}
      className={twclsx(
        'text-bold',
        'text-dark-75',
        'whitespace-nowrap',
        'lg:whitespace-pre-wrap',
      )}
    />
  );
};

Company.Date = function CompanyDate({ ...props }: CompanyDateProps) {
  return (
    <span
      {...props}
      className={twclsx(
        'text-body',
        'text-lightslate',
        'whitespace-nowrap',
        'lg:whitespace-pre-wrap',
      )}
    />
  );
};
