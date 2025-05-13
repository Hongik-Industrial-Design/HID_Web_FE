import { HWISO_API } from '@lib/axios';

// 전시 등록 API
export const registerExhibition = async (exhibitionFormData: FormData) => {
  try {
    const response = await HWISO_API.post(
      '/exhibits/admin',
      exhibitionFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.status === 200) {
      // console.log('전시 작품 등록 API 요청 성공: ', response.data);
      return response.data;
    }
  } catch (error) {
    console.error('전시 작품 등록 실패: ', error);
  }
};
