import { useQuery } from '@tanstack/react-query';

import {
  fetchStudentExhibitionDetail,
  fetchStudentExhibitionPreview,
} from '@api/exhibition';

const STUDENT_QUERY_KEYS = {
  preview: (year: string, club: string) => ['Student', year, club],
  detail: (year: string, exhibitId: number) => ['Student', year, exhibitId],
};

export const useStudentExhbitionPreviewQuery = (year: string, club: string) => {
  return useQuery({
    queryKey: STUDENT_QUERY_KEYS.preview(year, club), // queryFn에서 사용된 인자들이 queryKey에 포함되어야 함 (@tanstack/query/exhaustive-deps 참고)
    queryFn: () => fetchStudentExhibitionPreview(year, club),
    staleTime: 1000 * 10, // 10초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};
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
