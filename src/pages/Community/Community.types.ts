export type NoticeAuthor = 'TA' | 'Council';
export type NewsEventType = 'Recruit' | 'Award' | 'Alumni';

export interface NoticePostInfo {
  id: number;
  title: string;
  important: boolean;
  credit: {
    postDate: string;
    author: NoticeAuthor;
    attatchment: {
      url: string;
      name: string;
    };
  };
}

export interface NoticeInfos {
  posts: NoticePostInfo[];
  totalPages: number;
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

export interface NewsEventCardInfo {
  id: number;
  deadline: string;
  title: string;
  category: NewsEventType;
  imgURL: string;
}

export interface NewsEventCardProps {
  route: string;
  imageURL: string;
  deadline: string;
  title: string;
  category: NewsEventType;
}
