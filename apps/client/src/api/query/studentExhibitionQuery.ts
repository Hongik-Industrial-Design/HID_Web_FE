import { useQuery } from '@tanstack/react-query';

import { EXHIBIT_TYPE } from '@client-types/exhibition.types';
import { EXHIBITION_SEARCH_TYPE } from '@constants/searchType';

import {
  fetchExhibitionDetail,
  fetchExhibitionPreview,
  searchArtwork,
} from '@api/exhibition';

const EXHIBITION_QUERY_KEYS = {
  preview: (exhibitType: EXHIBIT_TYPE, year: string, club: string) => [
    exhibitType,
    year,
    club,
  ],
  detail: (year: string, exhibitId: number) => ['Student', year, exhibitId],
  search: (
    exhibitType: EXHIBIT_TYPE,
    year: string,
    query: string,
    searchType: EXHIBITION_SEARCH_TYPE
  ) => [exhibitType, year, query, searchType],
};

// 학생 전시 프리뷰 조회 API
export const useExhbitionPreviewQuery = (
  exhibitType: EXHIBIT_TYPE,
  year: string,
  club: string
) => {
  return useQuery({
    queryKey: EXHIBITION_QUERY_KEYS.preview(exhibitType, year, club), // queryFn에서 사용된 인자들이 queryKey에 포함되어야 함 (@tanstack/query/exhaustive-deps 참고)
    queryFn: () => fetchExhibitionPreview(exhibitType, year, club),
    staleTime: 1000 * 10, // 10초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};

// 학생 전시 상세 조회 API (***이것만 추후 졸업전시랑 통합***)
export const useStudentExhibitionDetailQuery = (
  year: string,
  exhibitId: number
) => {
  return useQuery({
    queryKey: EXHIBITION_QUERY_KEYS.detail(year, exhibitId),
    queryFn: () => fetchExhibitionDetail(exhibitId),
    staleTime: 1000 * 3, // 3초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};

export const useSearchArtworkQuery = (
  exhibitType: EXHIBIT_TYPE,
  year: string,
  query: string,
  searchType: EXHIBITION_SEARCH_TYPE,
  enabled: boolean
) => {
  return useQuery({
    queryKey: EXHIBITION_QUERY_KEYS.search(
      exhibitType,
      year,
      query,
      searchType
    ),
    queryFn: () => searchArtwork(exhibitType, year, query, searchType),
    enabled,
    staleTime: 1000 * 10, // 10초 (Testing)
    gcTime: 1000 * 60, // 1분 (Testing)
  });
};
