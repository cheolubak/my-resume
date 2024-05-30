import { nanoid } from 'nanoid';
import { Skill } from '@/models/skill';

export function GET() {
  const skills: Skill[] = [
    {
      title: 'Communications',
      id: nanoid(10),
      description: [
        '커뮤니케이션은 많을수록 좋다고 생각합니다.',
        '적극적으로 생각을 표현하려고 노력합니다.',
        '다른 사람의 의견을 적극적으로 수용하고 저의 의견을 명확하게 전달하려고 노력합니다.',
      ],
    },
    {
      title: 'Web',
      id: nanoid(10),
      description: [
        'SEO 최적화를 위해 Sitemap과 Robots.txt, metadata, 상황에 맞게 Semantic Markup를 적용하려고 노력합니다.',
      ],
    },
    {
      title: 'Typescript',
      id: nanoid(10),
      description: [
        '제네릭 타입, 유니온 타입, 튜플 등을 상황에 맞게 사용하여 개발할 수 있습니다.',
      ],
    },
    {
      title: 'React',
      id: nanoid(10),
      description: [
        '커스텀 훅을 이용해 공통 비즈니스 로직을 모듈화할 수 있습니다.',
        '상황에 맞게 useCallback, useMemo, memo 등을 사용하여 메모리제이션 할수 있습니다.',
        'Storybook을 사용하여 컴포넌트 주도 개발을 할수 있습니다.',
        '테스트 코드를 작성하여 테스트를 할수 있습니다.',
      ],
    },
    {
      title: 'Data',
      id: nanoid(10),
      description: [
        'Google Analytics에 다양한 이벤트와 전자상거래 이벤트를 적용한 경험이 있습니다.',
      ],
    },
    {
      title: 'Figma',
      id: nanoid(10),
      description: [
        'Variant를 통해 상황에 맞는 컴포넌트를 만들 수 있습니다.',
        'Auto Layout을 이해하고 상황에 맞게 사용할 수 있습니다.',
      ],
    },
  ];

  return Response.json(skills);
}
