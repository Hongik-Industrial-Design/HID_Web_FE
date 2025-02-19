export type NoticeAuthor = 'TA' | 'Council';
export type NewsEventType = 'Recruit' | 'Award' | 'Alumni';

// 공지사항 API 응답 데이터 타입 정의
export interface NoticePostInfo {
  id: number;
  title: string;
  author: NoticeAuthor;
  createdDate: string;
  attachmentUrls: string[];
  important: boolean;
}

// 뉴스/이벤트 API 응답 데이터 타입 정의
export interface NewsEventCardInfo {
  id: number;
  thumbnailUrl: string;
  createdDate: string;
  title: string;
  category: NewsEventType;
}

export interface NewsEventListInfo {
  cardInfos: NewsEventCardInfo[];
  totalPages: number;
  pageSize: number;
}
