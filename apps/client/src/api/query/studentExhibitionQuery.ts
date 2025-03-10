import { useQuery } from '@tanstack/react-query';

import { EXHIBIT_TYPE } from '@constants/exhibitionCategory';

import {
  fetchStudentExhibitionDetail,
  fetchExhibitionPreview,
} from '@api/exhibition';

const STUDENT_QUERY_KEYS = {
  preview: (exhibitType: EXHIBIT_TYPE, year: string, club: string) => [
    exhibitType,
    year,
    club,
  ],
  detail: (year: string, exhibitId: number) => ['Student', year, exhibitId],
};

// 학생 전시 프리뷰 조회 API
export const useStudentExhbitionPreviewQuery = (
  exhibitType: EXHIBIT_TYPE,
  year: string,
  club: string
) => {
  return useQuery({
    queryKey: STUDENT_QUERY_KEYS.preview(exhibitType, year, club), // queryFn에서 사용된 인자들이 queryKey에 포함되어야 함 (@tanstack/query/exhaustive-deps 참고)
    queryFn: () => fetchExhibitionPreview(exhibitType, year, club),
    staleTime: 1000 * 10, // 10초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};

// 학생 전시 상세 조회 API
export const useStudentExhibitionDetailQuery = (
  year: string,
  exhibitId: number
) => {
  return useQuery({
    queryKey: STUDENT_QUERY_KEYS.detail(year, exhibitId),
    queryFn: () => fetchStudentExhibitionDetail(exhibitId),
    staleTime: 1000 * 3, // 3초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};
