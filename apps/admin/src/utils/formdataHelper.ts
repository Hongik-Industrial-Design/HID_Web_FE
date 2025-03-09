import { ArtistsFormData, DetailInfoFormData } from '@schemas/registerSchema';

type ExhibitionFormData = {
  detailInfo: DetailInfoFormData;
  imageFiles: File[];
  artists: ArtistsFormData;
  thumbnail: File;
};

export const createGraduationExhibitionFormData = ({
  detailInfo,
  imageFiles,
  artists,
  thumbnail,
}: ExhibitionFormData): FormData => {
  const formData = new FormData();

  // 🔹 전시 기본 정보
  const details = {
    exhibitType: detailInfo?.exhibitType,
    year: detailInfo?.year,
    major: detailInfo?.major,
    titleEn: detailInfo?.title,
    titleKo: detailInfo?.title,
    subTitleEn: detailInfo?.subTitle,
    subTitleKo: detailInfo?.subTitle,
    textEn: detailInfo?.description_en,
    textKo: detailInfo?.description_ko,
    videoUrl: detailInfo?.videoUrl,
  };

  // // 🔹 선택적 필드 추가
  // if (detailInfo?.behanceUrl) details.behanceUrl = detailInfo.behanceUrl;
  // if (detailInfo?.linkedinUrl) details.linkedinUrl = detailInfo.linkedinUrl;

  // JSON으로 변환 후 추가
  formData.append('details', JSON.stringify(details));

  // 🔹 대표 이미지 추가
  if (thumbnail) {
    formData.append('mainImgFile', thumbnail);
  }

  // 🔹 상세 이미지 추가
  imageFiles?.slice(1).forEach((image, index) => {
    formData.append(`detailImgs[${index}][file]`, image);
    formData.append(`detailImgs[${index}][position]`, String(index + 1));
  });

  // 🔹 참여 작가 정보 추가
  artists?.forEach((artist, index) => {
    formData.append(`artist[${index}][profileImgFile]`, artist.profileImgFile);
    formData.append(`artist[${index}][nameKo]`, artist.nameKo);
    formData.append(`artist[${index}][nameEn]`, artist.nameEn);
    formData.append(`artist[${index}][role]`, artist.role);
    formData.append(`artist[${index}][email]`, artist.email);

    if (artist.instagramUrl) {
      formData.append(`artist[${index}][instagramUrl]`, artist.instagramUrl);
    }
    if (artist.behanceUrl) {
      formData.append(`artist[${index}][behanceUrl]`, artist.behanceUrl);
    }
    if (artist.linkedinUrl) {
      formData.append(`artist[${index}][linkedinUrl]`, artist.linkedinUrl);
    }
  });

  return formData;
};
