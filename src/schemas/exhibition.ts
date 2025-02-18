import { z } from 'zod';

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
