// 학생 전시 Category 타입 정의
export type studentClub =
  | 'ALL'
  | 'Casttec'
  | 'DBZC'
  | 'Studio i'
  | 'Interaction';

// 전시 API 응답 데이터 필드 형식 정의 (졸업, 학생 전시 공통)
export interface PieceProps {
  exhibitId: number;
  title: string;
  subTitle: string;
  imageURL: string;
}

export interface OverlayProps {
  title: string;
  subTitle: string;
  isPieceHovered: boolean;
}
