import { z } from 'zod';

// 졸업 전시 배너 영상 조회 Schema
export const GraduationBannerVideoSchema = z.object({
  year: z.number(),
  videoUrl: z.string().url(),
});

// 전시 Preview Schema
export const ExhibitionPreviewSchema = z.array(
  z.object({
    exhibitId: z.number(),
    type: z.enum(['GRADUATION', 'CLUB']),
    year: z.string(),
    major: z.nullable(z.string()),
    club: z.nullable(z.string()),
    mainImgUrl: z.string().url(),
    titleKo: z.nullable(z.string()),
    titleEn: z.nullable(z.string()),
    subTitleKo: z.nullable(z.string()),
    subTitleEn: z.nullable(z.string()),
  })
);

export type ExhibitionPreview = z.infer<typeof ExhibitionPreviewSchema>;

// 전시 상세 정보 Schema
export const ArtistSchema = z.object({
  id: z.number(),
  artistUUID: z.string().uuid(),
  profileImgUrl: z.string().url(),
  nameKo: z.string(),
  nameEn: z.string(),
  role: z.string(),
  email: z.string().email(),
  instagramUrl: z.string().url().nullable(),
  behanceUrl: z.string().url().nullable(),
  linkedinUrl: z.string().url().nullable(),
});

export type Artist = z.infer<typeof ArtistSchema>;

export const ExhibitionDetailSchema = z.object({
  exhibitId: z.number(),
  exhibitType: z.enum(['GRADUATION', 'CLUB']),
  year: z.string(),
  major: z.nullable(z.string()),
  club: z.nullable(z.string()),
  mainImgUrl: z.string().url(),
  detailImgs: z.array(
    z.object({
      detailImgUrl: z.string().url(),
      position: z.number(),
    })
  ),
  titleKo: z.string(),
  titleEn: z.string(),
  subTitleKo: z.string(),
  subTitleEn: z.string(),
  descriptionKo: z.string(),
  descriptionEn: z.string(),
  videoUrl: z.string().url(),
  artists: z.array(ArtistSchema),
});

export type ExhibitionDetail = z.infer<typeof ExhibitionDetailSchema>;

// 학생 전시 상세 Schema
export const StudentExhibitionDetailSchema = z.object({
  exhibitId: z.number(),
  exhibitType: z.string(),
  year: z.string(),
  major: z.nullable(z.string()),
  club: z.string(),
  mainImgUrl: z.string().url(),
  subImgs: z.array(
    z.object({
      subImgUrl: z.string().url(),
      position: z.number(),
    })
  ),
  detailImgs: z.array(
    z.object({
      detailImgUrl: z.string().url(),
      position: z.number(),
    })
  ),
  titleKo: z.string(),
  titleEn: z.string(),
  subTitleKo: z.string(),
  subTitleEn: z.string(),
  textKo: z.string(),
  textEn: z.string(),
  videoUrl: z.nullable(z.string().url()),
  artists: z.array(
    z.object({
      id: z.number(),
      artistUUID: z.string().uuid(),
      profileImgUrl: z.string().url(),
      nameKo: z.string(),
      nameEn: z.string(),
      role: z.string(),
      email: z.string().email(),
      instagramUrl: z.nullable(z.string().url()),
      behanceUrl: z.nullable(z.string().url()),
      linkedinUrl: z.nullable(z.string().url()),
    })
  ),
});

export type StudentExhibitionDetail = z.infer<
  typeof StudentExhibitionDetailSchema
>;
