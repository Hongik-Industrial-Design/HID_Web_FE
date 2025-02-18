// 학생 전시 상세 정보 API 응답 데이터 타입 정의
export interface ArtworkInfos {
  exhibitId: number;
  exhibitType: string;
  year: string;
  major: string | null;
  club: string;
  mainImgUrl: string;

  subImgs: {
    subImgUrl: string;
    position: number;
  }[];

  detailImgs: {
    detailImgUrl: string;
    position: number;
  }[];

  titleKo: string;
  titleEn: string;
  subTitleKo: string;
  subTitleEn: string;
  textKo: string;
  textEn: string;
  videoUrl: string | null;

  artists: {
    id: number;
    artistUUID: string;
    profileImgUrl: string;
    nameKo: string;
    nameEn: string;
    role: string;
    email: string;
    instagramUrl: string | null;
    behanceUrl: string | null;
    linkedinUrl: string | null;
  }[];
}

export interface AuthorInfos {
  id: number;
  name: string;
  specialty: string;
  profileImage: string;
  email: string;
}

export interface HeroSectionInfos {
  title: string;
  subtitle: string;
  authors: { id: number; name: string; specialty: string }[];
  description_en: string;
  description_ko: string;
  thumbnails: ThumbnailInfos;
  social: SocialInfos[];
  keywords?: string[];
}

export interface ThumbnailInfos {
  primary: { id: number; url: string };
  tinyImages: { id: number; url: string }[];
}

type SocialService = 'Behance' | 'Instagram';

export interface SocialInfos {
  id: number;
  service: SocialService;
  linkInfo: string;
}

export interface MediaInfos {
  videos: {
    id: number;
    url: string;
  }[];
  images: {
    id: number;
    url: string;
    caption: string;
  }[];
}
