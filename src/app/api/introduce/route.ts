import { Introduce } from '@/models/introduce';

export function GET() {
  const introduce: Introduce = {
    intro: '사용자의 입장에서 고민하고, 끊임없이 학습하는',
    title: '프론트엔드 개발자 박철우입니다.',
    description: `지금까지 다양한 서비스를 초기 설계부터 개발, 운영까지 해 본 경험과 팀리딩 경험을 가지고 있으며,
현재에 만족하지 않고 지속적으로 새로운 기술과 지식을 습득하고, 더 나은 개발자가 되기 위해 항상 고민을 하고 노력하고 있습니다.
그리고 다른 직군과 원할한 커뮤니케이션과 앞으로 더 성장하기 위해 기획과 UI/UX, 그리고 GA같은 데이터에도 관심을 가지고 학습을 하려고 노력하고 있습니다.`,
    email: 'dev.cheolubak@gmail.com',
    blog: 'dev-bak.tistory.com',
    git: 'https://github.com/cheolubak',
  };

  return Response.json(introduce);
}
