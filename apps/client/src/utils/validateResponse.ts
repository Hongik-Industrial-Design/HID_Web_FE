import { ZodSchema } from 'zod';

export const validateResponse = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    console.error('API 응답 데이터 검증 실패: ', parsed.error);
    throw new Error('API 응답 데이터가 예상한 형식과 다릅니다.');
  }

  return parsed.data;
};
