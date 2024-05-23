import React, { ComponentProps, FC } from 'react';
import { twclsx } from '@/utils/twclsx';

interface ExperiencesProps extends ComponentProps<'ul'> {}

interface ExperienceProps extends ComponentProps<'li'> {}

interface ExperienceComponent extends FC<ExperiencesProps> {
  Item: FC<ExperienceProps>;
}

const Experiences: ExperienceComponent = ({ ...props }: ExperiencesProps) => {
  return (
    <ul
      {...props}
      className={twclsx('flex', 'flex-col', 'gap-[36px]', 'mb-[48px]')}
    />
  );
};

export default Experiences;

Experiences.Item = function Experience({ ...props }: ExperienceProps) {
  return (
    <li
      {...props}
      className={twclsx(
        'flex',
        'flex-col',
        'lg:flex-row',
        'justify-start',
        'items-start',
        'gap-[24px]',
      )}
    />
  );
};
