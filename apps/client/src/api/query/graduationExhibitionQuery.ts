import { useQuery } from '@tanstack/react-query';

import { fetchGraduationBannerVideo } from '@api/exhibition';

const GRADUATION_QUERY_KEYS = {
  bannerVideo: (year: number) => ['Graduation', year],
};

export const useGraduationBannerVideoQuery = (year: number) => {
  return useQuery({
    queryKey: GRADUATION_QUERY_KEYS.bannerVideo(year),
    queryFn: () => fetchGraduationBannerVideo(year),
    staleTime: 1000 * 10, // 10초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};
