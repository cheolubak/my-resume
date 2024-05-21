import { nanoid } from 'nanoid';
import { Skill } from '@/models/skill';

export function GET() {
  const skills: Skill[] = [
    { title: 'Typescript', level: 4, id: nanoid(10) },
    { title: 'React.js', level: 4, id: nanoid(10) },
    { title: 'Next.js', level: 4, id: nanoid(10) },
    { title: 'Recoil', level: 4, id: nanoid(10) },
    { title: 'React Query', level: 3, id: nanoid(10) },
    { title: 'SWR', level: 3, id: nanoid(10) },
    { title: 'Tailwindcss', level: 3, id: nanoid(10) },
    { title: 'Styled Component', level: 4, id: nanoid(10) },
    { title: 'Jest', level: 3, id: nanoid(10) },
  ];

  return Response.json(skills);
}
