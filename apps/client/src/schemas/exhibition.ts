import { z } from 'zod';

// 학생 전시 Preview Schema
export const StudentExhibitionPreviewSchema = z.array(
  z.object({
    exhibitId: z.number(),
    club: z.string(),
    mainImgUrl: z.string().url(),
    titleKo: z.string(),
    titleEn: z.string(),
    subTitleKo: z.string(),
    subTitleEn: z.string(),
  })
);

export type StudentExhibitionPreview = z.infer<
  typeof StudentExhibitionPreviewSchema
>;

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
