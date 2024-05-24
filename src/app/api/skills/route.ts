import { nanoid } from 'nanoid';
import { Skill } from '@/models/skill';

export function GET() {
  const skills: Skill[] = [
    {
      title: 'Typescript',
      level: 4,
      id: nanoid(10),
      description:
        '프로덕션 레벨에서 개발이 가능합니다.\n상황에 맞게 타입을 정의하고 제네릭 타입 등을 이용해서 타입 안정성을 높일 수 있습니다.',
    },
    {
      title: 'React.js',
      level: 4,
      id: nanoid(10),
      description:
        '프로덕션 레벨에서 개발이 가능합니다.\n비지니스에 맞게 컴포넌트를 설계하고 상태관리를 할 수 있습니다.',
    },
    {
      title: 'Next.js',
      level: 4,
      id: nanoid(10),
      description:
        '프로덕션 레벨에서 개발이 가능합니다.\nSSR에 대해서 이해를 하고 있고, 상황에 맞게 그룹 혹은 병렬 라우트를 통해 구현을 할 수 있습니다.',
    },
    {
      title: 'Recoil',
      level: 4,
      id: nanoid(10),
      description:
        '프로덕션 레벨에서 개발이 가능합니다.\nAtom과 Selector를 상황에 맞게 세분화하여 사용할 수 있습니다.',
    },
    {
      title: 'Tailwindcss',
      level: 3,
      id: nanoid(10),
      description: '조금 아쉬울 수 있지만 프로덕션 레벨에서 개발이 가능합니다.',
    },
    {
      title: 'Styled Component',
      level: 4,
      id: nanoid(10),
      description: '프로덕션 레벨에서 개발이 가능합니다.',
    },
    {
      title: 'Jest',
      level: 3,
      id: nanoid(10),
      description: '조금 아쉬울 수 있지만 프로덕션 레벨에서 개발이 가능합니다.',
    },
    {
      title: 'Figma',
      level: 3,
      id: nanoid(10),
      description:
        'Variant를 통해 상황에 맞는 컴포넌트를 만들 수 있습니다.\nAuto Layout을 이해하고 상황에 맞게 사용할 수 있습니다.',
    },
  ];

  return Response.json(skills);
}
