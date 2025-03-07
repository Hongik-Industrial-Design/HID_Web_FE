import { JSX } from 'react/jsx-runtime';
import { useCallback, useState } from 'react';

import { ArtistInfo, ExhibitionDetailInfo } from './ExhibitionRegister.types';

import { GRADUATION_EXHIBITION_MAJOR_LIST } from '@constants/Exhibition';

import { BehanceLogo, LinkedinLogo } from '@icons/SocialLogo';
import MajorRadioButtonGroup from '@components/Button/MajorRadio/MajorRadioButtonGroup';
import ExhibitionTextInput from '@components/Input/Exhibition/ExhibitionTextInput';
import DescriptionInput from '@components/Input/Description/DescriptionInput';
import YoutubeCircleLogo from '@components/YoutubeCircleLogo/YoutubeCircleLogo';
import ImagePreview from '@components/AddImageBox/Preview/ImagePreview';
import AddElementBox from '@components/AddImageBox/AddImageBox';
import ArtistInfoCard from '@components/ArtistInfoCard/ArtistInfoCard';
import AddParticipantBox from '@components/AddParticipantBox/AddParticipantBox';
import SaveCancelButton from '@components/Button/SaveCancel/SaveCancelButton';

import * as S from './ExhibitionRegister.styled';

const ExhibitionRegister = (): JSX.Element => {
  const majorList = GRADUATION_EXHIBITION_MAJOR_LIST;

  const [selectedMajor, setSelectedMajor] = useState<string>(majorList[0]);

  const handleMajorClick = useCallback((major: string) => {
    setSelectedMajor(major);
  }, []);

  // 전시 이미지 추가 관련
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      console.log('Files: ', files);

      if (files) {
        // 여러개의 이미지를 한번에 추가할 수 있도록 설정
        const newImages = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );

        setImages((prevImages) => [...prevImages, ...newImages]);
      }
    },
    []
  );

  const handleImageDelete = useCallback((imageUrl: string) => {
    setImages((prevImages) => prevImages.filter((image) => image !== imageUrl));
  }, []);

  // 참여 작가 정보 관련
  const [artists, setArtists] = useState<ArtistInfo[]>([]);

  // Artist Card 추가
  const addArtistCard = useCallback(() => {
    setArtists([
      ...artists,
      {
        id: artists.length + 1,
        profileImage: '',
        name: '',
        major: '',
        email: '',
      },
    ]);
  }, [artists]);

  const handleArtistProfileChange = (
    id: number,
    field: keyof ArtistInfo,
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
      const file = e.target.files?.[0];

      if (file) {
        const newImage = URL.createObjectURL(file);

        setArtists((prevArtists) =>
          prevArtists.map((artist) =>
            artist.id === id ? { ...artist, profileImage: newImage } : artist
          )
        );
      }
    },
    []
  );

  const [detailInfo, setDetailInfo] = useState<ExhibitionDetailInfo>({
    exhibitType: 'GRADUATION',
    year: '2024',
    major: selectedMajor,
    title: '',
    subTitle: '',
    description_ko: '',
    description_en: '',
    behanceUrl: '',
    linkedinUrl: '',
    youtubeUrl: '',
  });

  const handleDetailInfoChange = (
    field: keyof ExhibitionDetailInfo,
    value: string
  ) => {
    setDetailInfo((prevDetailInfo) => ({
      ...prevDetailInfo,
      [field]: value,
    }));
  };

  // 전시 정보 저장 FormData
  const graduationExhibitionFormData = new FormData();

  graduationExhibitionFormData.append('exhibitType', detailInfo.exhibitType);
  graduationExhibitionFormData.append('year', detailInfo.year); //  임시로 2024로 설정
  graduationExhibitionFormData.append('major', detailInfo.major);
  graduationExhibitionFormData.append('title', detailInfo.title);
  graduationExhibitionFormData.append('subTitle', detailInfo.subTitle);
  graduationExhibitionFormData.append('textEn', detailInfo.description_en);
  graduationExhibitionFormData.append('textKo', detailInfo.description_ko);
  graduationExhibitionFormData.append('behanceUrl', detailInfo.behanceUrl);
  graduationExhibitionFormData.append('linkedinUrl', detailInfo.linkedinUrl);
  graduationExhibitionFormData.append('videoUrl', detailInfo.youtubeUrl);

  return (
    <S.ExhibitionRegisterContainer>
      <S.ArtworkInfoTitle>
        Artwork Information<span>.</span>
      </S.ArtworkInfoTitle>

      {/* Major, Title, SubTitle, Description */}
      <S.DetailInfoSection>
        <S.DetailInfoTitle>
          Detail Infos<span>.</span>
        </S.DetailInfoTitle>

        <S.DetailInfoContainer>
          <S.MajorTitleSection>
            {/* Major */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Major</S.DetailInfoInputLabel>
              <MajorRadioButtonGroup
                majorList={majorList}
                selectedMajor={selectedMajor}
                handleMajorClick={handleMajorClick}
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
                language="English"
                field="description_en"
                value={detailInfo.description_en}
                handleTextChange={handleDetailInfoChange}
              />
            </S.DescriptionUnit>
            <S.DescriptionUnit>
              <S.LanguageDescriptionContainer>
                <S.LanguageDescriptionLabel>KOR</S.LanguageDescriptionLabel>
                <S.DescriptionDivider />
              </S.LanguageDescriptionContainer>
              <DescriptionInput
                language="Korean"
                field="description_ko"
                value={detailInfo.description_ko}
                handleTextChange={handleDetailInfoChange}
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
            field="youtubeUrl"
            value={detailInfo.youtubeUrl}
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
            {images.map((image) => (
              <ImagePreview
                key={image}
                image={image}
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
        <SaveCancelButton buttonType="save" />
        <SaveCancelButton buttonType="cancel" />
      </S.SaveCancelButtonSection>
    </S.ExhibitionRegisterContainer>
  );
};

export default ExhibitionRegister;
