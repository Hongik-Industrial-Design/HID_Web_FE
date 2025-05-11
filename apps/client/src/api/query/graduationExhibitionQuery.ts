import { useQuery } from '@tanstack/react-query';

import { EXHIBIT_TYPE } from '@client-types/exhibition.types';

import {
  fetchExhibitionDetail,
  fetchGraduationBannerVideo,
} from '@api/exhibition';

const GRADUATION_QUERY_KEYS = {
  bannerVideo: (year: number) => ['Graduation', year],
  preview: (exhibitType: EXHIBIT_TYPE, year: string, club: string) => [
    exhibitType,
    year,
    club,
  ],
  detail: (exhibitId: number) => ['Graduation', exhibitId],
};

// 졸업 전시 배너 영상 조회 API
export const useGraduationBannerVideoQuery = (year: number) => {
  return useQuery({
    queryKey: GRADUATION_QUERY_KEYS.bannerVideo(year),
    queryFn: () => fetchGraduationBannerVideo(year),
    staleTime: 1000 * 10, // 10초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};

// 졸업 전시 상세 데이터 조회 API
// 학생 전시 상세 조회 API
export const useGraduationExhibitionDetailQuery = (exhibitId: number) => {
  return useQuery({
    queryKey: GRADUATION_QUERY_KEYS.detail(exhibitId),
    queryFn: () => fetchExhibitionDetail(exhibitId),
    staleTime: 1000 * 3, // 3초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};
