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
import Skills from '@/components/Skills';
import Experiences from '@/components/Experiences';
import Company from '@/components/Company';
import Service from '@/components/Service';

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
    <main className={twclsx('p-[36px]')}>
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
      <SubTitle>이런 스킬을 가지고 있습니다.</SubTitle>
      <Skills>
        {skills.map((skill) => (
          <Skills.Item key={skill.id}>
            <Skills.Title>{skill.title}</Skills.Title>
            <Skills.Rate percent={skill.level * 20} />
          </Skills.Item>
        ))}
      </Skills>
      <SubTitle>이런 경험을 가지고 있습니다.</SubTitle>
      <Experiences>
        {experiences.map((experience) => (
          <Experiences.Item key={experience.id}>
            <Company>
              <Company.Name>{experience.name}</Company.Name>
              <Company.Position>{experience.position}</Company.Position>
              <Company.Date>
                {betweenDates(experience.start, experience.end)}
              </Company.Date>
              <Label
                size='sm'
                theme='secondary'
              >
                {getRangeDates(experience.start, experience.end)}
              </Label>
            </Company>
            <Service>
              <Service.Description>
                {experience.description}
              </Service.Description>
              {experience.serviceLink ? (
                <OpenLink
                  href={experience.serviceLink}
                  target='_blank'
                  className={twclsx('mb-[12px]')}
                >
                  서비스 보러가기
                </OpenLink>
              ) : (
                <Service.Over>서비스 종료</Service.Over>
              )}
              <Service.List>
                {experience.works.map((work) => (
                  <Service.Item key={work.id}>
                    {work.title}
                    {work.description && (
                      <span className={twclsx('text-small', 'text-lightslate')}>
                        • {work.description}
                      </span>
                    )}
                  </Service.Item>
                ))}
              </Service.List>

              <Service.Skills>
                {experience.skills.map((skill) => (
                  <Service.Skill
                    key={skill.id}
                    title={skill.title}
                  />
                ))}
              </Service.Skills>
            </Service>
          </Experiences.Item>
        ))}
      </Experiences>
    </main>
  );
}
