import { z } from 'zod';

export const NoticePreview = z.object({
  id: z.number(),
  title: z.string(),
  author: z.enum(['TA', 'Council', 'Recruit', 'Award', 'Seminar']),
  createdDate: z.string().date(),
  hasAttachment: z.boolean(),
  important: z.boolean(),
});

export const NewsEventPreview = z.object({
  id: z.number(),
  thumbnailUrl: z.string(),
  createdDate: z.string().date(),
  title: z.string(),
  category: z.enum(['Recruit', 'Award', 'Seminar']),
});

export const CommunitySchema = z.object({
  notices: z.array(NoticePreview),
  newsEvents: z.array(NewsEventPreview),
});

export type NoticePreview = z.infer<typeof NoticePreview>;
export type NewsEventPreview = z.infer<typeof NewsEventPreview>;
export type CommunityPreview = z.infer<typeof CommunitySchema>;

// 공지사항 목록 조회 API 응답 스키마
export const NoticeContent = z.object({
  id: z.number(),
  title: z.string(),
  author: z.enum(['TA', 'Council', 'Recruit', 'Award', 'Seminar']),
  createdDate: z.string().date(),
  hasAttachment: z.boolean(),
  important: z.boolean(),
});

export const CommunityPageInfo = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
  totalElements: z.number(),
  last: z.boolean(),
  first: z.boolean(),
});

export const NoticeListSchema = z.object({
  content: z.array(NoticeContent),
  pageInfo: CommunityPageInfo,
});

export type NoticeContent = z.infer<typeof NoticeContent>;
export type NoticeList = z.infer<typeof NoticeListSchema>;

// News & Event 카드 목록 조회 API 응답 스키마 (content 필드만 형식 다름)
export const NewsEventContent = z.object({
  id: z.number(),
  thumbnailUrl: z.string().url(),
  createdDate: z.string().date(),
  title: z.string(),
  category: z.enum(['Recruit', 'Award', 'Seminar']),
});

export const NewsEventListSchema = z.object({
  content: z.array(NewsEventContent),
  pageInfo: CommunityPageInfo,
});

export type NewsEventContent = z.infer<typeof NewsEventContent>;
export type NewsEventList = z.infer<typeof NewsEventListSchema>;
