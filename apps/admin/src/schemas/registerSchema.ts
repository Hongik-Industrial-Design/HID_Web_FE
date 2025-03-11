import { z } from 'zod';

export const detailInfoSchema = z.object({
  exhibitType: z.enum(['GRADUATION', 'CLUB']),
  year: z.string(),
  major: z.enum(['Smart Mobility', 'Spatial', 'Product', 'Interaction']),
  title: z.string(),
  subTitle: z.string(),
  description_ko: z.string(),
  description_en: z.string(),
  behanceUrl: z.string().url().optional(),
  linkedinUrl: z.string().url().optional(),
  videoUrl: z.string().url().optional(),
});

export const imageSchema = z.array(
  z.object({
    file: z.instanceof(File),
    position: z.number(),
  })
);

export const artistInfoField = z.object({
  id: z.number(),
  profileImgFile: z.instanceof(File),
  nameKo: z.string(),
  nameEn: z.string(),
  role: z.string(),
  email: z.string().email(),
  instagramUrl: z.string().url().optional(),
  linkedinUrl: z.string().url().optional(),
  behanceUrl: z.string().url().optional(),
});

export const artistSchema = z.array(artistInfoField);

// 🔹 타입 추출
export type DetailInfoFormData = z.infer<typeof detailInfoSchema>;

export type ImageFormData = z.infer<typeof imageSchema>;

export type ArtistInfoField = z.infer<typeof artistInfoField>;
export type ArtistsFormData = z.infer<typeof artistSchema>;
