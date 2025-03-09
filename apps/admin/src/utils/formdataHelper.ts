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
  const graduationExhibitionFormData = new FormData();

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
  graduationExhibitionFormData.append('details', JSON.stringify(details));

  // 🔹 대표 이미지 추가
  graduationExhibitionFormData.append('mainImgFile', thumbnail);

  // 🔹 상세 이미지 추가
  imageFiles.slice(1).forEach((image, index) => {
    graduationExhibitionFormData.append(`detailImgs[${index}][file]`, image);
    graduationExhibitionFormData.append(
      `detailImgs[${index}][position]`,
      String(index + 1)
    );
  });

  // 🔹 참여 작가 정보 추가
  artists?.forEach((artist, index) => {
    graduationExhibitionFormData.append(
      `artists[${index}][profileImgFile]`,
      artist.profileImgFile
    );
    graduationExhibitionFormData.append(
      `artists[${index}][nameKo]`,
      artist.nameKo
    );
    graduationExhibitionFormData.append(
      `artists[${index}][nameEn]`,
      artist.nameEn
    );
    graduationExhibitionFormData.append(`artists[${index}][role]`, artist.role);
    graduationExhibitionFormData.append(
      `artists[${index}][email]`,
      artist.email
    );

    if (artist.instagramUrl) {
      graduationExhibitionFormData.append(
        `artists[${index}][instagramUrl]`,
        artist.instagramUrl
      );
    }
    if (artist.behanceUrl) {
      graduationExhibitionFormData.append(
        `artists[${index}][behanceUrl]`,
        artist.behanceUrl
      );
    }
    if (artist.linkedinUrl) {
      graduationExhibitionFormData.append(
        `artists[${index}][linkedinUrl]`,
        artist.linkedinUrl
      );
    }
  });

  return graduationExhibitionFormData;
};
