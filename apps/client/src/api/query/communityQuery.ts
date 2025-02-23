import {
  fetchCommunityData,
  fetchNewsEventList,
  fetchNoticeList,
} from '@api/community';
import { useQuery } from '@tanstack/react-query';

const COMMUNITY_QUERY_KEYS = {
  community: ['Community'],
  noticeList: (page: number, size: number) => ['NoticeList', page, size],
  newsEventList: (page: number, size: number) => ['NewsEventList', page, size],
};

export const useCommunityQuery = () => {
  return useQuery({
    queryKey: COMMUNITY_QUERY_KEYS.community,
    queryFn: fetchCommunityData,
    staleTime: 1000 * 5, // 5초
    gcTime: 1000 * 30, // 30초
  });
};

// 공지사항 목록 조회 API Query Hook
export const useNoticeListQuery = (page: number, size: number) => {
  return useQuery({
    queryKey: COMMUNITY_QUERY_KEYS.noticeList(page, size),
    queryFn: () => fetchNoticeList(page, size),
    staleTime: 1000 * 5, // 5초
    gcTime: 1000 * 30, // 30초
  });
};

// News & Event 카드 목록 조회 API Query Hook
export const useNewsEventListQuery = (page: number, size: number) => {
  return useQuery({
    queryKey: COMMUNITY_QUERY_KEYS.newsEventList(page, size),
    queryFn: () => fetchNewsEventList(page, size),
    staleTime: 1000 * 5, // 5초
    gcTime: 1000 * 30, // 30초
  });
};
