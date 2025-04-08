import { z } from 'zod';

export const CommunitySchema = z.object({
  notices: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      author: z.string(),
      createdDate: z.string().date(),
      attachmentUrls: z.array(z.string()),
      important: z.boolean(),
    })
  ),
  newsEvents: z.array(
    z.object({
      id: z.number(),
      thumbnailUrl: z.string().url(),
      createdDate: z.string().date(),
      title: z.string(),
      category: z.string(),
    })
  ),
});

// 공지사항 목록 조회 API 응답 스키마
export const NoticeListSchema = z.object({
  content: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      author: z.string(),
      createdDate: z.string().date(),
      attachmentUrls: z.array(z.string()),
      important: z.boolean(),
    })
  ),
  pageInfo: z.object({
    currentPage: z.number(),
    totalPages: z.number(),
    totalElements: z.number(),
    last: z.boolean(),
    first: z.boolean(),
  }),
});

// News & Event 카드 목록 조회 API 응답 스키마 (content 필드만 형식 다름)
export const NewsEventListSchema = z.object({
  content: z.array(
    z.object({
      id: z.number(),
      thumbnailUrl: z.string().url(),
      createdDate: z.string().date(),
      title: z.string(),
      category: z.string(),
    })
  ),
  pageInfo: z.object({
    currentPage: z.number(),
    totalPages: z.number(),
    totalElements: z.number(),
    last: z.boolean(),
    first: z.boolean(),
  }),
});
