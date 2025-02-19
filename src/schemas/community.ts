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
