export interface HeroSectionInfos {
  title: string;
  subtitle: string;
  authors: { id: number; name: string; specialty: string }[];
  description_en: string;
  description_ko: string;
  thumbnails: ThumbnailInfos;
  social: SocialInfos[];
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

export interface AuthorInfos {
  id: number;
  name: string;
  specialty: string;
  profileImage: string;
}

export interface ArtworkInfo {
  id: number;
  heroSection: HeroSectionInfos;
  media: MediaInfos;
  authorInfos: AuthorInfos[];
}
