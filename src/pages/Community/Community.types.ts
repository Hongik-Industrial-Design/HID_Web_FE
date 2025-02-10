export interface NewsEventCardInfo {
  id: number;
  deadline: string;
  title: string;
  category: string;
  imgURL: string;
}

type Author = 'TA' | 'Council';
export interface NoticePostInfo {
  id: number;
  title: string;
  important: boolean;
  credit: {
    postDate: string;
    author: Author;
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

export interface NewsEventCardProps {
  route: string;
  imageURL: string;
  deadline: string;
  title: string;
  category: string;
}
