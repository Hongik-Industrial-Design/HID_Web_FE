import { exhibitionAPI } from '@lib/axios';
import { validateResponse } from '@utils/validateResponse';

import * as Schemas from '@schemas/exhibition';

export const fetchStudentExhibitionPreview = async (
  year: string,
  club: string
): Promise<Schemas.StudentExhibitionPreview> => {
  const params = {
    year: year,
    club: club,
  };

  const response = await exhibitionAPI.get('/exhibits/previews/clubs', {
    params,
  });
  console.log('학생 전시 Preview 데이터: ', response.data);

  return validateResponse(
    Schemas.StudentExhibitionPreviewSchema,
    response.data.data
  );
};

export const fetchStudentExhibitionDetail = async (
  exhibitId: number
): Promise<Schemas.StudentExhibitionDetail> => {
  const response = await exhibitionAPI.get(`/exhibits/${exhibitId}`);
  console.log('학생 전시 Detail 데이터: ', response.data);

  return validateResponse(
    Schemas.StudentExhibitionDetailSchema,
    response.data.data
  );
};
