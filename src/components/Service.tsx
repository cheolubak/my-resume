import React, { ComponentProps, FC } from 'react';
import { twclsx } from '@/utils/twclsx';
import Label from '@/components/Label';

interface ServiceProps extends ComponentProps<'div'> {}

interface ServiceDescriptionProps extends ComponentProps<'p'> {}

interface ServiceItemListProps extends ComponentProps<'ul'> {}

interface ServiceItemProps extends ComponentProps<'li'> {}

interface ServiceOverProps extends ComponentProps<'span'> {}

interface ServiceSkillsProps extends ComponentProps<'ul'> {}

interface ServiceSkillProps extends ComponentProps<'li'> {
  title: string;
}

interface ServiceComponent extends FC<ServiceProps> {
  Description: FC<ServiceDescriptionProps>;
  List: FC<ServiceItemListProps>;
  Item: FC<ServiceItemProps>;
  Over: FC<ServiceOverProps>;
  Skills: FC<ServiceSkillsProps>;
  Skill: FC<ServiceSkillProps>;
}

const Service: ServiceComponent = ({ ...props }: ServiceProps) => {
  return (
    <div
      {...props}
      className={twclsx(
        'flex',
        'flex-col',
        'justify-start',
        'items-start',
        'gap-[4px]',
      )}
    />
  );
};

export default Service;

Service.Description = function ServiceDescription({
  ...props
}: ServiceDescriptionProps) {
  return (
    <p
      {...props}
      className={twclsx('text-body', 'text-lightslate', 'mb-[12px]')}
    />
  );
};

Service.List = function ServiceItemList({ ...props }: ServiceItemListProps) {
  return (
    <ul
      {...props}
      className={twclsx(
        'flex',
        'flex-col',
        'gap-[12px]',
        'mb-[16px]',
        'list-disc',
      )}
    />
  );
};

Service.Item = function ServiceItem({ ...props }: ServiceItemProps) {
  return (
    <li
      {...props}
      className={twclsx(
        'text-body',
        'text-dark-75',
        'flex',
        'flex-col',
        'justify-start',
        'items-stretch',
        'gap-[8px]',
      )}
    />
  );
};

Service.Over = function ServiceOver({ ...props }: ServiceOverProps) {
  return (
    <span
      {...props}
      className={twclsx('block', 'text-link', 'text-dark-50', 'mb-[12px]')}
    />
  );
};

Service.Skills = function ServiceSkills({ ...props }: ServiceSkillsProps) {
  return (
    <ul
      {...props}
      className={twclsx(
        'flex',
        'flex-wrap',
        'justify-start',
        'items-center',
        'gap-2',
      )}
    />
  );
};

Service.Skill = function ServiceSkill({ title, ...props }: ServiceSkillProps) {
  return (
    <li {...props}>
      <Label theme='dark'>{title}</Label>
    </li>
  );
};
