import React, { ComponentProps, FC } from 'react';
import { twclsx } from '@/utils/twclsx';

interface ContactsProps extends ComponentProps<'ul'> {}

interface ContactProps extends ComponentProps<'li'> {}

interface ContactTitleProps extends ComponentProps<'span'> {}

interface ContactComponent extends FC<ContactsProps> {
  Item: FC<ContactProps>;
  Title: FC<ContactTitleProps>;
}

const Contacts: ContactComponent = ({ ...props }: ContactsProps) => {
  return (
    <ul
      {...props}
      className={twclsx('flex', 'flex-col', 'gap-[12px]', 'mb-[48px]')}
    />
  );
};

export default Contacts;

Contacts.Item = function Contact({ ...props }: ContactProps) {
  return (
    <li
      {...props}
      className={twclsx('flex', 'justify-start', 'items-center')}
    />
  );
};

Contacts.Title = function ContactTitle({ ...props }: ContactTitleProps) {
  return (
    <span
      {...props}
      className={twclsx(
        'w-[100px]',
        'inline-flex',
        'justify-start',
        'items-center',
        'gap-[8px]',
        'text-bold',
      )}
    />
  );
};
