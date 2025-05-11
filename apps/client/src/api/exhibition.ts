import { HWISO_API } from '@lib/axios';
import { validateResponse } from '@utils/validateResponse';

import { EXHIBITION_SEARCH_TYPE } from '@constants/searchType';
import { EXHIBIT_TYPE } from '@client-types/exhibition.types';

import * as Schemas from '@schemas/exhibition';

// 전시 Preview 조회 API 함수
export const fetchExhibitionPreview = async (
  exhibitType: EXHIBIT_TYPE,
  year: string,
  club: string
): Promise<Schemas.ExhibitionPreview> => {
  const params = {
    exhibitType: exhibitType,
    year: year,
    term: club,
  };

  const response = await HWISO_API.get('/exhibits/previews', {
    params,
  });
  // console.log('전시 Preview 데이터: ', response.data.data);

  return validateResponse(Schemas.ExhibitionPreviewSchema, response.data.data);
};

// 졸업 전시 페이지 데이터 조회
export const fetchGraduationBannerVideo = async (year: number) => {
  const response = await HWISO_API.get(`/contents/main-video/${year}`);

  // console.log('졸업 전시 배너 영상: ', response.data);

  return validateResponse(Schemas.GraduationBannerVideoSchema, response.data);
};

export const fetchExhibitionDetail = async (exhibitId: number) => {
  const response = await HWISO_API.get(`/exhibits/${exhibitId}`);

  console.log('전시 상세 데이터: ', response.data);

  return validateResponse(Schemas.ExhibitionDetailSchema, response.data);
};

export const searchArtwork = async (
  exhibitType: EXHIBIT_TYPE,
  year: string,
  query: string,
  searchType: EXHIBITION_SEARCH_TYPE
) => {
  const params = {
    exhibitType: exhibitType,
    year: year,
    searchType: searchType,
    searchTerm: query,
  };

  const response = await HWISO_API.get('/exhibits/search', {
    params,
  });
  console.log('검색 결과: ', response.data);

  return validateResponse(Schemas.ExhibitionPreviewSchema, response.data);
};
