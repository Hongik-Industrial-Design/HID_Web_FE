import { exhibitionAPI } from '@lib/axios';
import { validateResponse } from '@utils/validateResponse';
import {
  StudentExhibitionPreview,
  StudentExhibitionPreviewSchema,
} from '@schemas/exhibition';

export const fetchStudentExhibitionPreview = async (
  year: string,
  club: string
): Promise<StudentExhibitionPreview> => {
  const params = {
    year: year,
    club: club,
  };

  const response = await exhibitionAPI.get('/exhibits/previews/clubs', {
    params,
  });
  console.log('학생 전시 Preview 데이터: ', response.data);

  return validateResponse(StudentExhibitionPreviewSchema, response.data.data);
};
