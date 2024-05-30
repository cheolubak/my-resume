import { twclsx } from '@/utils/twclsx';
import fetchApi from '@/utils/fetchApi';
import { Introduce } from '@/models/introduce';
import { isFetchApiError } from '@/utils/fetchApiError';
import { Skill } from '@/models/skill';
import { Experience } from '@/models/experience';
import { revalidateTag } from 'next/cache';
import { betweenDates, getRangeDates } from '@/utils/dateHelper';
import Label from '@/components/Label';
import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';
import SubTitle from '@/components/SubTitle';
import Contacts from '@/components/Contacts';
import OpenLink from '@/components/OpenLink';
import MailLink from '@/components/MailLink';
import Skills from '@/components/Skills';
import Experiences from '@/components/Experiences';
import Company from '@/components/Company';
import Service from '@/components/Service';
import { Typography } from '@mui/material';
import { Email, GitHub } from '@mui/icons-material';

export default async function Home() {
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
        <Typography
          className={twclsx('font-bold', 'text-blue-600')}
          component='h2'
          variant='h4'
          mb={1}
        >
          {introduce.intro}
        </Typography>
      )}
      {introduce?.title && (
        <Typography
          className={twclsx('font-bold', 'text-gray-800')}
          component='h1'
          variant='h2'
          mb={2}
        >
          {introduce.title}
        </Typography>
      )}
      {introduce?.description && (
        <Typography
          className={twclsx('font-medium', 'text-gray-700')}
          variant='h6'
          component='p'
          mb={8}
        >
          {introduce.description}
        </Typography>
      )}
      <Typography
        className={twclsx('font-bold', 'text-gray-600')}
        component='h3'
        variant='h4'
        mb={3}
      >
        Contact.
      </Typography>
      <Contacts>
        {introduce?.email && (
          <Contacts.Item>
            <Contacts.Title>
              <Email fontSize='medium' />
              <Typography
                variant='body1'
                component='strong'
              >
                Email.
              </Typography>
            </Contacts.Title>
            <MailLink href={`mailto:${introduce.email}`}>
              <Typography
                variant='button'
                component='a'
              >
                {introduce.email}
              </Typography>
            </MailLink>
          </Contacts.Item>
        )}
        {introduce?.git && (
          <Contacts.Item>
            <Contacts.Title>
              <GitHub fontSize='medium' />
              <Typography
                variant='body1'
                component='strong'
              >
                Git.
              </Typography>
            </Contacts.Title>
            <OpenLink
              href={introduce.git}
              target='_blank'
            >
              <Typography
                variant='button'
                component='a'
              >
                {introduce.git}
              </Typography>
            </OpenLink>
          </Contacts.Item>
        )}
        {introduce?.blog && (
          <Contacts.Item>
            <Contacts.Title>
              <SiTistory size={24} />
              <Typography
                variant='body1'
                component='strong'
              >
                Blog.
              </Typography>
            </Contacts.Title>
            <OpenLink
              href={introduce.blog}
              target='_blank'
            >
              <Typography
                variant='button'
                component='a'
              >
                {introduce.blog}
              </Typography>
            </OpenLink>
          </Contacts.Item>
        )}
      </Contacts>
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
      <SubTitle>이런 스킬을 가지고 있습니다.</SubTitle>
      <Skills>
        {skills.map((skill) => (
          <Skills.Item key={skill.id}>
            <Skills.Title>{skill.title}</Skills.Title>
            <Skills.Content>
              {Array.isArray(skill.description) ? (
                skill.description.map((desc, idx) => (
                  <Skills.Description key={`${skill.id}-${idx}`}>
                    · {desc}
                  </Skills.Description>
                ))
              ) : (
                <Skills.Description>· {skill.description}</Skills.Description>
              )}
            </Skills.Content>
          </Skills.Item>
        ))}
      </Skills>
    </main>
  );
}
