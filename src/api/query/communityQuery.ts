import { fetchCommunityData } from '@api/community';
import { useQuery } from '@tanstack/react-query';

const COMMUNITY_QUERY_KEYS = {
  community: ['Community'],
};

export const useCommunityQuery = () => {
  return useQuery({
    queryKey: COMMUNITY_QUERY_KEYS.community,
    queryFn: fetchCommunityData,
    staleTime: 1000 * 5, // 5초
    gcTime: 1000 * 30, // 30초
  });
};
