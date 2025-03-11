import { JSX } from 'react/jsx-runtime';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { registerExhibition } from '@api/exhibition';

import {
  ArtistInfoField,
  ArtistsFormData,
  DetailInfoFormData,
} from '@schemas/registerSchema';

import {
  EXHIBITION_TYPE_LIST,
  GRADUATION_EXHIBITION_MAJOR_LIST,
  EXHIBITION_TYPE,
  GRADUATION_EXHIBITION_MAJOR,
  DESCRIPTION_MAX_LENGTH,
  GRADUATION_EXHIBITION_YEAR_LIST,
} from '@constants/Exhibition';

import { BehanceLogo, LinkedinLogo } from '@icons/SocialLogo';
import YearSelector from '@components/YearSelector/YearSelector';
import MajorRadioButtonGroup from '@components/Button/MajorRadio/MajorRadioButtonGroup';
import ExhibitionTextInput from '@components/Input/Exhibition/ExhibitionTextInput';
import DescriptionInput from '@components/Input/Description/DescriptionInput';
import YoutubeCircleLogo from '@components/YoutubeCircleLogo/YoutubeCircleLogo';
import ImagePreview from '@components/AddImageBox/Preview/ImagePreview';
import AddElementBox from '@components/AddImageBox/AddImageBox';
import ArtistInfoCard from '@components/ArtistInfoCard/ArtistInfoCard';
import AddParticipantBox from '@components/AddParticipantBox/AddParticipantBox';
import SaveCancelButton from '@components/Button/SaveCancel/SaveCancelButton';

import { createGraduationExhibitionFormData } from '@utils/formdataHelper';

import * as S from './ExhibitionRegister.styled';

type ExhibitionRegisterProps = {
  exhibitionType: EXHIBITION_TYPE;
};

const ExhibitionRegister = ({
  exhibitionType,
}: ExhibitionRegisterProps): JSX.Element => {
  const navigate = useNavigate();

  // 전시 설명 글자수 관리 ref
  const koreanDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const englishDescriptionRef = useRef<HTMLTextAreaElement>(null);

  // 📍 전시 정보 관련
  const [detailInfo, setDetailInfo] = useState<DetailInfoFormData>({
    exhibitType: EXHIBITION_TYPE_LIST.graduation as EXHIBITION_TYPE,
    year: GRADUATION_EXHIBITION_YEAR_LIST[0],
    major: GRADUATION_EXHIBITION_MAJOR_LIST[0] as GRADUATION_EXHIBITION_MAJOR,
    title: '',
    subTitle: '',
    description_ko: '',
    description_en: '',
    behanceUrl: '',
    linkedinUrl: '',
    videoUrl: '',
  });

  const handleDetailInfoChange = (
    field: keyof DetailInfoFormData,
    value: string
  ) => {
    setDetailInfo((prevDetailInfo) => ({
      ...prevDetailInfo,
      [field]: value,
    }));
  };

  // 📍 전시 이미지 썸네일 및 상세 이미지 상태 관리
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // 여러개의 이미지를 한번에 추가할 수 있도록 설정
      const files = e.target.files;

      if (files) {
        // 이미지 File 객체 저장
        const newImageFiles = Array.from(files);
        setImageFiles((prevFiles) => [...prevFiles, ...newImageFiles]);
      }
    },
    []
  );

  // 대표 이미지에 대한 별도의 상태 관리
  const [thumbnail, setThumbnail] = useState<File>(new File([], ''));

  useEffect(() => {
    if (imageFiles.length > 0 && thumbnail.size === 0) {
      setThumbnail(imageFiles[0]); // 최초 한 번만 thumbnail을 설정
    }
  }, [imageFiles, thumbnail]); // images가 변경될 때 한 번만 실행

  const handleThumbnailCheck = (imageFile: File) => setThumbnail(imageFile);

  // 이미지 삭제 관련 (대표 이미지 삭제 시 대표 이미지 선택 해제 기능 포함)
  const handleImageDelete = useCallback(
    (imageFile: File) => {
      setImageFiles((prevFiles) =>
        prevFiles.filter((file) => file !== imageFile)
      );

      if (thumbnail === imageFile) {
        setThumbnail(imageFiles[1]);
      }
    },
    [thumbnail, imageFiles]
  );

  // 작품 참여 작가 정보 상태 관리
  const [artists, setArtists] = useState<ArtistsFormData>([]);

  // Artist Card 추가
  const addArtistCard = useCallback(() => {
    setArtists((prevArtists) => [
      ...prevArtists, // 기존 배열 유지
      {
        id: prevArtists.length + 1, // 새 아이디 생성
        profileImgFile: new File([], ''), // 빈 파일 객체
        nameKo: '',
        nameEn: '',
        role: '',
        email: '',
        instagramUrl: '',
        linkedinUrl: '',
        behanceUrl: '',
      },
    ]);
  }, []);

  const handleArtistProfileChange = (
    id: number,
    field: keyof ArtistInfoField,
    value: string
  ) => {
    setArtists((prevArtists) =>
      prevArtists.map((artist) =>
        artist.id === id ? { ...artist, [field]: value } : artist
      )
    );
  };

  const handleArtistProfileImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
      const newImageFile = e.target.files?.[0];

      if (newImageFile) {
        setArtists((prevArtists) =>
          prevArtists.map((artist) =>
            artist.id === id
              ? { ...artist, profileImgFile: newImageFile }
              : artist
          )
        );
      }
    },
    []
  );

  const handleExhibitionRegister = async (): Promise<void> => {
    try {
      // 상태 값이 올바르게 존재하는지 확인
      if (!detailInfo || !imageFiles || !thumbnail || !artists) {
        console.error('필수 데이터가 로딩되지 않았습니다.');
        alert('필수 데이터가 존재하지 않습니다.');
      }

      // 전시 등록 FormData 생성
      const exhibitionFormData = createGraduationExhibitionFormData({
        detailInfo,
        imageFiles,
        thumbnail,
        artists,
      });

      // FormData 확인 (디버깅용)
      for (const [key, value] of exhibitionFormData.entries()) {
        console.log(`${key}:`, value);
      }

      const registerResponse = await registerExhibition(exhibitionFormData);

      if (registerResponse) {
        alert('전시 등록 성공');
        navigate('/graduation');
      } else {
        alert('전시 등록 실패');
      }
    } catch (error) {
      console.error('전시 등록 실패: ', error);
    }
  };

  return (
    <S.ExhibitionRegisterContainer>
      <S.ArtworkInfoTitle>
        {exhibitionType === 'GRADUATION' ? 'Graduation' : 'Student'} Artwork
        <span>.</span>
      </S.ArtworkInfoTitle>

      {/* Major, Title, SubTitle, Description */}
      <S.DetailInfoSection>
        <S.DetailInfoTitle>
          Detail Infos<span>.</span>
        </S.DetailInfoTitle>

        <S.DetailInfoContainer>
          <S.MajorTitleSection>
            {/* Year */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Year</S.DetailInfoInputLabel>
              <YearSelector
                selectedExhibitonYear={detailInfo.year}
                handleExhibitionYearChange={handleDetailInfoChange}
              />
            </S.DetailInfoUnit>

            {/* Major */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Major</S.DetailInfoInputLabel>
              <MajorRadioButtonGroup
                majorList={GRADUATION_EXHIBITION_MAJOR_LIST}
                selectedMajor={detailInfo.major}
                handleMajorClick={handleDetailInfoChange}
              />
            </S.DetailInfoUnit>
            {/* Title */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Title</S.DetailInfoInputLabel>
              <ExhibitionTextInput
                placeholder="Enter Artwork Title."
                field="title"
                value={detailInfo.title}
                handleTextChange={handleDetailInfoChange}
              />
            </S.DetailInfoUnit>
            {/* SubTitle */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Subtitle</S.DetailInfoInputLabel>
              <ExhibitionTextInput
                placeholder="Enter Artwork Subtitle."
                field="subTitle"
                value={detailInfo.subTitle}
                handleTextChange={handleDetailInfoChange}
              />
            </S.DetailInfoUnit>
          </S.MajorTitleSection>

          {/* Description */}
          <S.DescriptionSection>
            <S.DescriptionLabel>Description (ENG/KOR)</S.DescriptionLabel>
            <S.DescriptionUnit>
              <S.LanguageDescriptionContainer>
                <S.LanguageDescriptionLabel>ENG</S.LanguageDescriptionLabel>
                <S.DescriptionDivider />
              </S.LanguageDescriptionContainer>
              <DescriptionInput
                inputRef={englishDescriptionRef}
                language="English"
                field="description_en"
                value={detailInfo.description_en}
                handleTextChange={handleDetailInfoChange}
                maxLength={DESCRIPTION_MAX_LENGTH.English}
              />
            </S.DescriptionUnit>
            <S.DescriptionUnit>
              <S.LanguageDescriptionContainer>
                <S.LanguageDescriptionLabel>KOR</S.LanguageDescriptionLabel>
                <S.DescriptionDivider />
              </S.LanguageDescriptionContainer>
              <DescriptionInput
                inputRef={koreanDescriptionRef}
                language="Korean"
                field="description_ko"
                value={detailInfo.description_ko}
                handleTextChange={handleDetailInfoChange}
                maxLength={DESCRIPTION_MAX_LENGTH.Korean}
              />
            </S.DescriptionUnit>
          </S.DescriptionSection>

          {/* SNS Link */}
          <S.SocialLinkSection>
            <S.DetailInfoInputLabel>SNS Link</S.DetailInfoInputLabel>
            <S.SocialLinkContainer>
              {/* Behance */}
              <S.SocialLinkForm>
                <BehanceLogo />
                <ExhibitionTextInput
                  placeholder="Enter Behance Link."
                  field="behanceUrl"
                  value={detailInfo.behanceUrl}
                  handleTextChange={handleDetailInfoChange}
                />
              </S.SocialLinkForm>
              {/* Linkedin */}
              <S.SocialLinkForm>
                <LinkedinLogo />
                <ExhibitionTextInput
                  placeholder="Enter Linkedin Link."
                  field="linkedinUrl"
                  value={detailInfo.linkedinUrl}
                  handleTextChange={handleDetailInfoChange}
                />
              </S.SocialLinkForm>
            </S.SocialLinkContainer>
          </S.SocialLinkSection>
        </S.DetailInfoContainer>
      </S.DetailInfoSection>

      {/* Videos */}
      <S.ExhibitionVideoSection>
        <S.DetailInfoTitle>
          Video<span>.</span>
        </S.DetailInfoTitle>
        <S.VideoLinkContainer>
          <YoutubeCircleLogo />
          <ExhibitionTextInput
            placeholder="Enter Youtube Link."
            field="videoUrl"
            value={detailInfo.videoUrl}
            handleTextChange={handleDetailInfoChange}
          />
        </S.VideoLinkContainer>
      </S.ExhibitionVideoSection>

      {/* Image */}
      <S.ExhibitonImageSection>
        <S.DetailInfoTitle>
          Images<span>.</span>
        </S.DetailInfoTitle>
        <S.ImagePreviewScrollContainer>
          <S.ImagePreviewContainer>
            {imageFiles
              .slice() // 원본 배열을 변경하지 않도록 복사본을 만듦
              .sort((a, b) => (a === thumbnail ? -1 : b === thumbnail ? 1 : 0)) // thumbnail을 첫 번째로 정렬
              .map((image, index) => (
                <ImagePreview
                  key={index}
                  imageUrl={URL.createObjectURL(image)}
                  image={image}
                  isThumbnailChecked={image === thumbnail}
                  handleThumbnailCheck={handleThumbnailCheck}
                  handleImageDelete={() => handleImageDelete(image)}
                />
              ))}
            <AddElementBox handleImageUpload={handleImageUpload} />
          </S.ImagePreviewContainer>
        </S.ImagePreviewScrollContainer>
      </S.ExhibitonImageSection>

      {/* Participants */}
      <S.ParticipantSection>
        <S.DetailInfoTitle>
          Participants<span>.</span>
        </S.DetailInfoTitle>
        <S.ParticipantList>
          {artists.map((artist) => (
            <ArtistInfoCard
              key={artist.id}
              artistInfo={artist}
              handleArtistProfileChange={handleArtistProfileChange}
              handleProfileImageUpload={handleArtistProfileImageUpload}
            />
          ))}
          <AddParticipantBox addArtistCard={addArtistCard} />
        </S.ParticipantList>
      </S.ParticipantSection>

      {/* Save & Cancel Button */}
      <S.SaveCancelButtonSection>
        <SaveCancelButton
          buttonType="save"
          handleButtonClick={handleExhibitionRegister}
        />
        <SaveCancelButton buttonType="cancel" />
      </S.SaveCancelButtonSection>
    </S.ExhibitionRegisterContainer>
  );
};

export default ExhibitionRegister;
