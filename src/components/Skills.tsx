import React, { ComponentProps, FC } from 'react';
import { twclsx } from '@/utils/twclsx';

interface SkillsProps extends ComponentProps<'ul'> {}

interface SkillProps extends ComponentProps<'li'> {}

interface SkillTitleProps extends ComponentProps<'strong'> {}

interface SkillRateProps extends ComponentProps<'span'> {
  percent: number;
}

interface SkillComponent extends React.FC<SkillsProps> {
  Item: FC<SkillProps>;
  Title: FC<SkillTitleProps>;
  Rate: FC<SkillRateProps>;
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
        'lg:items-center',
        'gap-[8px]',
        'lg:gap-[12px]',
      )}
    />
  );
};

Skills.Title = function SkillTitle({ ...props }: SkillTitleProps) {
  return (
    <strong
      {...props}
      className={twclsx(
        'text-bold',
        'text-dark-75',
        'w-[160px]',
        'min-w-[160px]',
        'max-w-[160px]',
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
