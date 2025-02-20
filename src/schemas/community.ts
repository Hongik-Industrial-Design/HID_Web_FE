import { z } from 'zod';

export const CommunitySchema = z.object({
  notices: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      author: z.string(),
      createdDate: z.string().date(),
      attachmentUrls: z.array(z.string().url()),
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
      attachmentUrls: z.array(z.string().url()),
      important: z.boolean(),
    })
  ),
  // 불필요한 페이지네이션 데이터가 너무 많음,,
  pageable: z.object({
    pageNumber: z.number(),
    pageSize: z.number(),
    sort: z.object({
      empty: z.boolean(),
      sorted: z.boolean(),
      unsorted: z.boolean(),
    }),
    offset: z.number(),
    paged: z.boolean(),
    unpaged: z.boolean(),
  }),
  last: z.boolean(),
  totalPages: z.number(),
  totalElements: z.number(),
  size: z.number(),
  number: z.number(),
  sort: z.object({
    empty: z.boolean(),
    sorted: z.boolean(),
    unsorted: z.boolean(),
  }),
  numberOfElements: z.number(),
  first: z.boolean(),
  empty: z.boolean(),
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
  // 불필요한 페이지네이션 데이터가 너무 많음,,
  pageable: z.object({
    pageNumber: z.number(),
    pageSize: z.number(),
    sort: z.object({
      empty: z.boolean(),
      sorted: z.boolean(),
      unsorted: z.boolean(),
    }),
    offset: z.number(),
    paged: z.boolean(),
    unpaged: z.boolean(),
  }),
  last: z.boolean(),
  totalPages: z.number(),
  totalElements: z.number(),
  size: z.number(),
  number: z.number(),
  sort: z.object({
    empty: z.boolean(),
    sorted: z.boolean(),
    unsorted: z.boolean(),
  }),
  numberOfElements: z.number(),
  first: z.boolean(),
  empty: z.boolean(),
});
