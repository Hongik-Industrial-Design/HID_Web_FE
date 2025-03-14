import { ArtistsFormData, DetailInfoFormData } from '@schemas/registerSchema';

type ExhibitionFormData = {
  detailInfo: DetailInfoFormData;
  imageFiles: File[];
  artists: ArtistsFormData;
  thumbnail: File;
};

export const createExhibitionFormData = ({
  detailInfo,
  imageFiles,
  artists,
  thumbnail,
}: ExhibitionFormData): FormData => {
  const ExhibitionRegisterFormData = new FormData();

  // 🔹 전시 기본 정보
  const details = {
    type: detailInfo?.exhibitType,
    year: detailInfo?.year,
    major: detailInfo?.exhibitType === 'GRADUATION' ? detailInfo?.major : null,
    club: detailInfo?.exhibitType === 'CLUB' ? detailInfo?.club : null,
    titleEn: detailInfo?.title,
    titleKo: detailInfo?.title,
    subTitleEn: detailInfo?.subTitle,
    subTitleKo: detailInfo?.subTitle,
    descriptionEn: detailInfo?.description_en,
    descriptionKo: detailInfo?.description_ko,
    behanceUrl: detailInfo?.behanceUrl,
    instagramUrl: detailInfo?.instagramUrl,
    videoUrl: detailInfo?.videoUrl,
  };

  // // 🔹 선택적 필드 추가
  // if (detailInfo?.behanceUrl) details.behanceUrl = detailInfo.behanceUrl;
  // if (detailInfo?.instagramUrl) details.instagramUrl = detailInfo.instagramUrl;

  // details 객체의 각 필드를 개별적으로 추가
  Object.entries(details).forEach(([key, value]) => {
    if (value) {
      ExhibitionRegisterFormData.append(`details.${key}`, value);
    }
  });

  // 🔹 대표 이미지 추가
  ExhibitionRegisterFormData.append('mainImgFile', thumbnail);

  // 🔹 상세 이미지 추가
  imageFiles.slice(1).forEach((image, index) => {
    ExhibitionRegisterFormData.append(`detailImgs[${index}].file`, image);
    ExhibitionRegisterFormData.append(
      `detailImgs[${index}].position`,
      String(index + 1)
    );
  });

  // 🔹 참여 작가 정보 추가
  artists?.forEach((artist, index) => {
    ExhibitionRegisterFormData.append(
      `artists[${index}].profileImgFile`,
      artist.profileImgFile
    );
    ExhibitionRegisterFormData.append(
      `artists[${index}].nameKo`,
      artist.nameKo
    );
    ExhibitionRegisterFormData.append(
      `artists[${index}].nameEn`,
      artist.nameEn
    );
    ExhibitionRegisterFormData.append(`artists[${index}].role`, artist.role);
    ExhibitionRegisterFormData.append(`artists[${index}].email`, artist.email);

    if (artist.instagramUrl) {
      ExhibitionRegisterFormData.append(
        `artists[${index}].instagramUrl`,
        artist.instagramUrl
      );
    }
    if (artist.behanceUrl) {
      ExhibitionRegisterFormData.append(
        `artists[${index}].behanceUrl`,
        artist.behanceUrl
      );
    }
    if (artist.linkedinUrl) {
      ExhibitionRegisterFormData.append(
        `artists[${index}].linkedinUrl`,
        artist.linkedinUrl
      );
    }
  });

  return ExhibitionRegisterFormData;
};
