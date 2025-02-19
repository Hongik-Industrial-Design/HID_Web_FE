import { communityAPI } from '@lib/axios';
import { CommunitySchema } from '@schemas/community';
import { validateResponse } from '@utils/validateResponse';

export const fetchCommunityData = async () => {
  const response = await communityAPI.get('/community');

  // 추후 status code에 따른 에러 처리 필요

  return validateResponse(CommunitySchema, response.data);
};
