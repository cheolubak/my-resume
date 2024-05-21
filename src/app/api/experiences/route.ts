import { Experience } from '@/models/experience';
import { nanoid } from 'nanoid';

export function GET() {
  const experiences: Experience[] = [
    {
      start: '2023-01-18',
      name: '주식회사 밸류맵',
      position: '프론트엔드 파트장',
      serviceLink: 'https://www.valueupmap.com',
      id: nanoid(10),
      skills: [
        { id: nanoid(10), title: 'React.js' },
        { id: nanoid(10), title: 'Next.js' },
        { id: nanoid(10), title: 'Recoil' },
        { id: nanoid(10), title: 'Tailwindcss' },
        { id: nanoid(10), title: 'Storybook' },
        { id: nanoid(10), title: 'Typescript' },
        { id: nanoid(10), title: 'Jenkins' },
        { id: nanoid(10), title: 'Github Action' },
        { id: nanoid(10), title: 'Flutter' },
        { id: nanoid(10), title: 'Rivepod' },
        { id: nanoid(10), title: 'Get' },
        { id: nanoid(10), title: 'Dio' },
        { id: nanoid(10), title: 'Sqflite' },
      ],
      works: [
        { id: nanoid(10), title: '디자인시스템 구축' },
        {
          id: nanoid(10),
          title: '코드컨벤션 정리(ESLint, Prettier, Husky, CommitLint 사용)',
        },
        { id: nanoid(10), title: '밸류맵 웹 프로젝트 리뉴얼' },
        { id: nanoid(10), title: '밸류맵 앱 프로젝트 리뉴얼' },
        { id: nanoid(10), title: 'SEO 최적화 작업' },
      ],
      description: '지도 기반 토지/건물 부동산 거래 플랫폼 개발',
    },
    {
      start: '2020-11-01',
      end: '2022-11-31',
      name: '주식회사 세상을 바꾸는시간 15분',
      position: '풀스택 개발자',
      serviceLink: 'https://www.sebasiland.com',
      id: nanoid(10),
      skills: [
        { id: nanoid(10), title: 'Angular' },
        { id: nanoid(10), title: 'React.js' },
        { id: nanoid(10), title: 'Next.js' },
        { id: nanoid(10), title: 'Recoil' },
        { id: nanoid(10), title: 'Emotion' },
        { id: nanoid(10), title: 'Storybook' },
        { id: nanoid(10), title: 'Typescript' },
        { id: nanoid(10), title: 'Github Action' },
        { id: nanoid(10), title: 'SpringBoot' },
        { id: nanoid(10), title: 'JPA' },
        { id: nanoid(10), title: 'AWS' },
      ],
      works: [
        { id: nanoid(10), title: '디자인시스템 구축' },
        {
          id: nanoid(10),
          title: '티처들이 사용하는 세바시랜드 스튜디오 개발',
        },
        { id: nanoid(10), title: '러너들이 강의를 듣는 세바시랜드 개발' },
        {
          id: nanoid(10),
          title:
            '세바시랜드 주요지표 대시보드 및 정산, 관리를 하는 백오피스 개발',
        },
        {
          id: nanoid(10),
          title: '세바시랜드 REST API 설계 및 개발',
        },
      ],
      description: '온라인 강의 플랫폼 개발',
    },
    {
      start: '2018-05-01',
      end: '2020-04-30',
      name: '아이엠에이치씨(IMHC)',
      position: '풀스택 개발자',
      id: nanoid(10),
      skills: [
        { id: nanoid(10), title: 'Angular' },
        { id: nanoid(10), title: 'Firebase' },
        { id: nanoid(10), title: 'Storybook' },
        { id: nanoid(10), title: 'Typescript' },
        { id: nanoid(10), title: 'Jenkins' },
        { id: nanoid(10), title: 'Firebase' },
      ],
      works: [
        {
          id: nanoid(10),
          title:
            '설문 집행하는 사용자들이 설문을 등록하고 통계를 볼수 있는 플럼보드 웹 개발',
        },
        {
          id: nanoid(10),
          title: '플럼보드 지표 및 지출, 정산 등을 확인하는 백오피스 개발',
        },
        {
          id: nanoid(10),
          title:
            'Firebase Cloud Function을 이용하여 플럼보드에서 사용하는 API 개발',
        },
      ],
      description: '설문조사 플랫폼 개발',
    },
    {
      start: '2015-11-01',
      end: '2018-02-28',
      name: '(주)맵씨닷컴',
      position: '풀스택 개발자',
      id: nanoid(10),
      skills: [
        { id: nanoid(10), title: 'PHP' },
        { id: nanoid(10), title: 'Angular' },
        { id: nanoid(10), title: 'Node.js' },
        { id: nanoid(10), title: 'SpringBoot' },
        { id: nanoid(10), title: 'Mybatis' },
        { id: nanoid(10), title: 'AWS' },
      ],
      works: [
        {
          id: nanoid(10),
          title: '맵씨닷컴 커머스 웹 개발',
        },
        {
          id: nanoid(10),
          title: '맵씨닷컴 주문 및 정산, 기능 관리를 하는 백오피스 개발',
        },
        {
          id: nanoid(10),
          title: '맵씨닷컴 서비스 REST API 설계 및 개발',
        },
        {
          id: nanoid(10),
          title: '남성 패션 상담 COSMO 웹 서비스 개발',
        },
        {
          id: nanoid(10),
          title: 'COSMO 서비스 REST API 설계 및 개발',
        },
      ],
      description: '남성 패션 커머스 & 상담 플랫폼 개발',
    },
    {
      start: '2012-11-01',
      end: '2015-10-31',
      name: '(주)디지엔터테인먼트',
      position: '소프트웨어 개발자',
      serviceLink: 'http://www.dgient.com/DG/DGHome/Kor/Product/Main.jsp#art',
      id: nanoid(10),
      skills: [
        { id: nanoid(10), title: 'C++' },
        { id: nanoid(10), title: 'OpenGL ES' },
        { id: nanoid(10), title: 'DirectX' },
        { id: nanoid(10), title: 'Kinect' },
        { id: nanoid(10), title: 'OpenCV' },
        { id: nanoid(10), title: 'OpenNI' },
        { id: nanoid(10), title: 'Flash' },
      ],
      works: [
        {
          id: nanoid(10),
          title: 'Sports World 유지보수',
        },
        {
          id: nanoid(10),
          title: '움직이는 모두의 갤러리 개발',
        },
        {
          id: nanoid(10),
          title: '스케치 아쿠아리움 개발 참여',
        },
        {
          id: nanoid(10),
          title: '러닝어드벤처 맵 제작을 위한 프로그램 개발',
        },
        {
          id: nanoid(10),
          title: '스페이스볼 게임 개발 참여',
        },
      ],
      description: '윈도우 소프트웨어 개발',
    },
  ];

  return Response.json(experiences);
}
