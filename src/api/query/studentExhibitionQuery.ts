import { fetchStudentExhibitionPreview } from '@api/exhibition';
import { useQuery } from '@tanstack/react-query';

const STUDENT_QUERY_KEYS = {
  preview: (year: string) => ['Student', year],
  detail: (year: string, exhibitId: number) => ['Student', year, exhibitId],
};

export const useStudentExhbitionPreviewQuery = (year: string, club: string) => {
  return useQuery({
    queryKey: STUDENT_QUERY_KEYS.preview(year),
    queryFn: () => fetchStudentExhibitionPreview(year, club),
    staleTime: 1000 * 10, // 10초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};
