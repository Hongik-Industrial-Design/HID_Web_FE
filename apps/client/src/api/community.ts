import { JUNBO_API } from '@lib/axios';
import {
  CommunitySchema,
  NewsEventListSchema,
  NoticeListSchema,
} from '@schemas/community';
import { validateResponse } from '@utils/validateResponse';

export const fetchCommunityData = async () => {
  const response = await JUNBO_API.get('/community');

  // 추후 status code에 따른 에러 처리 필요

  return validateResponse(CommunitySchema, response.data);
};

export const fetchNoticeList = async (page: number, size: number) => {
  // size는 별도로 전송하지 않고, 10으로 고정해도 될듯함
  const noticeParams = {
    params: { page: page, size: size },
  };

  try {
    const response = await JUNBO_API.get('/notices', noticeParams);

    return validateResponse(NoticeListSchema, response.data);
  } catch (error) {
    console.error('공지사항 목록 조회 API 요청 실패: ', error);
  }
};

// News & Event 카드 목록 조회 API
export const fetchNewsEventList = async (page: number, size: number) => {
  const newsEventParams = {
    params: { page: page, size: size },
  };

  try {
    const response = await JUNBO_API.get('/newsEvent', newsEventParams);

    // 추후 status code에 따른 에러 처리 필요

    return validateResponse(NewsEventListSchema, response.data);
  } catch (error) {
    console.error('News & Event 카드 목록 조회 API 요청 실패: ', error);
  }
};
