import { Introduce } from '@/models/introduce';

export function GET() {
  const introduce: Introduce = {
    intro: '사용자의 입장에서 고민하고, 끊임없이 학습하는',
    title: '프론트엔드 개발자 박철우입니다.',
    description:
      '지금까지 "남성 패션 커머스", "설문조사", "온라인 강의 플랫폼", "지도 기반의 부동산"과 같이 다양한 서비스 경험과 팀리딩 경험을 가지고 있으며,\n현재에 안주하지 않고 지속적으로 새로운 개발 지식을 습득하고, 더 나은 방향으로 개발하기 위해서 항상 고민을 하고 있습니다.\n그리고 다른 직군과 원할한 커뮤니케이션을 위해 기획 용어 및 UI/UX와 GA같은 데이터에도 관심을 가지고 학습을 하려고 노력하고 있습니다.',
    email: 'dev.cheolubak@gmail.com',
    blog: 'dev-bak.tistory.com',
    git: 'https://github.com/cheolubak',
  };

  return Response.json(introduce);
}
