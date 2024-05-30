import React, { ComponentProps, FC } from 'react';
import { twclsx } from '@/utils/twclsx';

interface SkillsProps extends ComponentProps<'ul'> {}

interface SkillProps extends ComponentProps<'li'> {}

interface SkillTitleProps extends ComponentProps<'strong'> {}

interface SkillRateProps extends ComponentProps<'span'> {
  percent: number;
}

interface SkillDescriptionProps extends ComponentProps<'p'> {}

interface SkillContentProps extends ComponentProps<'div'> {}

interface SkillComponent extends React.FC<SkillsProps> {
  Item: FC<SkillProps>;
  Title: FC<SkillTitleProps>;
  Rate: FC<SkillRateProps>;
  Description: FC<SkillDescriptionProps>;
  Content: FC<SkillContentProps>;
}

const Skills: SkillComponent = ({ ...props }: SkillsProps) => {
  return (
    <ul
      {...props}
      className={twclsx('flex', ' flex-col', 'gap-[16px]', 'mb-[48px]')}
    />
  );
};

export default Skills;

Skills.Item = function Skill({ ...props }: SkillProps) {
  return (
    <li
      {...props}
      className={twclsx(
        'flex',
        'flex-col',
        'lg:flex-row',
        'justify-start',
        'items-stretch',
        'lg:items-start',
        'gap-[8px]',
        'lg:gap-[12px]',
        'sticky',
        'top-[24px]',
        'bg-white',
        'min-h-[150px]',
      )}
    />
  );
};

Skills.Title = function SkillTitle({ ...props }: SkillTitleProps) {
  return (
    <strong
      {...props}
      className={twclsx(
        'text-subtitle',
        'text-dark-75',
        'w-[220px]',
        'min-w-[220px]',
        'max-w-[220px]',
        'whitespace-nowrap',
      )}
    />
  );
};

Skills.Rate = function SkillRate({ percent, ...props }: SkillRateProps) {
  return (
    <div
      className={twclsx(
        'w-full',
        'flex',
        'justify-start',
        'items-center',
        'gap-[8px]',
      )}
    >
      <div
        className={twclsx(
          percent >= 80 ? 'bg-primary-75' : 'bg-secondary-50',
          'h-3',
        )}
        style={{ width: `${percent}%` }}
      />
      <span className={twclsx('text-pretitle', 'text-lightslate')}>
        {percent >= 80 && '🔥 '}
        {percent}%
      </span>
    </div>
  );
};

Skills.Description = function SkillDescription({
  ...props
}: SkillDescriptionProps) {
  return (
    <p
      {...props}
      className={twclsx('text-body', 'text-dark-75')}
    />
  );
};

Skills.Content = function SkillContent({ ...props }: SkillContentProps) {
  return (
    <div
      {...props}
      className={twclsx(
        'flex',
        'flex-col',
        'justify-start',
        'items-stretch',
        'gap-2',
      )}
    />
  );
};
