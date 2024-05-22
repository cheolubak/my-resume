import { twclsx } from '@/utils/twclsx';
import fetchApi from '@/utils/fetchApi';
import { Introduce } from '@/models/introduce';
import { isFetchApiError } from '@/utils/fetchApiError';
import { Skill } from '@/models/skill';
import { Experience } from '@/models/experience';
import { revalidateTag } from 'next/cache';
import { betweenDates, getRangeDates } from '@/utils/dateHelper';
import Label from '@/components/Label';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { LuSend } from 'react-icons/lu';
import SubTitle from '@/components/SubTitle';
import Description from '@/components/Description';
import Contacts from '@/components/Contacts';
import OpenLink from '@/components/OpenLink';
import MailLink from '@/components/MailLink';

export default async function Home() {
  console.log('process.env.NEXT_PUBLIC_URL', process.env.NEXT_PUBLIC_URL);
  console.log('process.env.NEXT_PUBLIC_GA_ID', process.env.NEXT_PUBLIC_GA_ID);

  revalidateTag('introduce');
  revalidateTag('skills');
  revalidateTag('experience');

  let introduce: Introduce | undefined;
  let skills: Skill[] = [];
  let experiences: Experience[] = [];

  try {
    const [introduceResponse, skillsResponse, experiencesResponse] =
      await Promise.allSettled([
        fetchApi.get<Introduce>('/api/introduce', {
          next: {
            tags: ['introduce'],
          },
        }),
        fetchApi.get<Skill[]>('/api/skills', {
          next: {
            tags: ['skills'],
          },
        }),
        fetchApi.get<Experience[]>('/api/experiences', {
          next: {
            tags: ['experience'],
          },
        }),
      ]);
    if (introduceResponse.status === 'fulfilled') {
      introduce = introduceResponse.value;
    } else {
      console.error(introduceResponse.reason);
    }
    if (skillsResponse.status === 'fulfilled') {
      skills = skillsResponse.value;
    } else {
      console.error(skillsResponse.reason);
    }
    if (experiencesResponse.status === 'fulfilled') {
      experiences = experiencesResponse.value;
    } else {
      console.error(experiencesResponse.reason);
    }
  } catch (err) {
    if (isFetchApiError(err)) {
      console.error(err.message);
    }
  }

  return (
    <main className={twclsx('p-[20px]')}>
      {introduce?.intro && (
        <h2 className={twclsx('text-h2', 'text-dark-100')}>
          {introduce.intro}
        </h2>
      )}
      {introduce?.title && (
        <h1 className={twclsx('text-h1', 'text-dark-100', 'mb-[12px]')}>
          {introduce.title}
        </h1>
      )}
      {introduce?.description && (
        <Description>{introduce.description}</Description>
      )}
      <SubTitle>Contact.</SubTitle>
      <Contacts>
        {introduce?.email && (
          <Contacts.Item>
            <Contacts.Title>
              <MdEmail size={24} />
              Email.
            </Contacts.Title>
            <MailLink href={`mailto:${introduce.email}`}>
              {introduce.email}
            </MailLink>
          </Contacts.Item>
        )}
        {introduce?.git && (
          <Contacts.Item>
            <Contacts.Title>
              <FaGithub size={24} />
              Git.
            </Contacts.Title>
            <OpenLink
              href={introduce.git}
              target='_blank'
            >
              {introduce.git}
            </OpenLink>
          </Contacts.Item>
        )}
        {introduce?.blog && (
          <Contacts.Item>
            <Contacts.Title>
              <SiTistory size={24} />
              Blog.
            </Contacts.Title>
            <OpenLink
              href={introduce.blog}
              target='_blank'
            >
              {introduce.blog}
            </OpenLink>
          </Contacts.Item>
        )}
      </Contacts>
      <h2 className={twclsx('text-h2', 'text-dark-100', 'mb-[12px]')}>
        이런 스킬을 가지고 있습니다.
      </h2>
      <ul className={twclsx('flex', ' flex-col', 'gap-[8px]', 'mb-[48px]')}>
        {skills.map((skill) => (
          <li
            className={twclsx(
              'flex',
              'justify-start',
              'items-center',
              'gap-[12px]',
            )}
            key={skill.id}
          >
            <strong
              className={twclsx(
                'text-bold',
                'text-dark-75',
                'w-[160px]',
                'min-w-[160px]',
                'max-w-[160px]',
                'whitespace-nowrap',
              )}
            >
              {skill.title}
            </strong>
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
                className={twclsx('bg-secondary-100', 'h-2')}
                style={{ width: `${(100 / 5) * skill.level}%` }}
              />
              <span className={twclsx('text-pretitle', 'text-lightslate')}>
                {20 * skill.level}%
              </span>
            </div>
          </li>
        ))}
      </ul>
      <h2 className={twclsx('text-h2', 'text-dark-100', 'mb-[12px]')}>
        이런 경험을 가지고 있습니다.
      </h2>
      <ul className={twclsx('flex', 'flex-col', 'gap-[24px]', 'mb-[48px]')}>
        {experiences.map((experience) => (
          <li
            key={experience.id}
            className={twclsx(
              'flex',
              'justify-start',
              'items-start',
              'gap-[24px]',
            )}
          >
            <div
              className={twclsx(
                'w-[200px]',
                'min-w-[200px]',
                'flex',
                'flex-col',
                'justify-start',
                'items-start',
                'gap-[4px]',
              )}
            >
              <h3 className={twclsx('text-h3', 'text-dark-100')}>
                {experience.name}
              </h3>
              <strong className={twclsx('text-bold', 'text-dark-75')}>
                {experience.position}
              </strong>
              <span className={twclsx('text-body', 'text-lightslate')}>
                {betweenDates(experience.start, experience.end)}
              </span>
              <Label
                size='sm'
                theme='secondary'
              >
                {getRangeDates(experience.start, experience.end)}
              </Label>
            </div>
            <div
              className={twclsx(
                'flex',
                'flex-col',
                'justify-start',
                'items-start',
                'gap-[4px]',
              )}
            >
              <span
                className={twclsx('text-body', 'text-lightslate', 'mb-[12px]')}
              >
                {experience.description}
              </span>
              {experience.serviceLink ? (
                <Link
                  className={twclsx(
                    'text-link',
                    'text-secondary-75',
                    'underline',
                    'mb-[12px]',
                  )}
                  href={experience.serviceLink}
                  target='_blank'
                >
                  서비스 보러가기
                </Link>
              ) : (
                <span
                  className={twclsx('text-link', 'text-dark-50', 'mb-[12px]')}
                >
                  서비스 종료
                </span>
              )}
              <ul
                className={twclsx(
                  'flex',
                  'flex-col',
                  'gap-[8px]',
                  'mb-[16px]',
                  'list-disc',
                )}
              >
                {experience.works.map((work) => (
                  <li key={work.id}>{work.title}</li>
                ))}
              </ul>

              <ul
                className={twclsx(
                  'flex',
                  'flex-wrap',
                  'justify-start',
                  'items-center',
                  'gap-2',
                )}
              >
                {experience.skills.map((skill) => (
                  <li key={skill.id}>
                    <Label theme='dark'>{skill.title}</Label>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
