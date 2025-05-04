import { JSX } from 'react/jsx-runtime';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Flip, ToastContainer } from 'react-toastify';

import { useExhibitionRegisterMutation } from '@api/mutation/exhibitionMutation';

import { createExhibitionFormData } from '@utils/formdataHelper';
import { showAlertAndScroll } from '@utils/scroll';
import { handleImageDrop } from '@utils/imageDrop';

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
  STUDENT_EXHIBITION_CLUB_LIST,
  STUDENT_EXHIBITION_CLUB,
} from '@constants/Exhibition';

import { BehanceLogo, InstagramLogo } from '@icons/SocialLogo';
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
import FullScreenOverlayLoading from '@components/Loading/FullScreenOverlay/FullScreenOverlayLoading';

import * as S from './ExhibitionRegister.styled';

type ExhibitionRegisterProps = {
  exhibitionType: EXHIBITION_TYPE;
};

const ExhibitionRegister = ({
  exhibitionType,
}: ExhibitionRegisterProps): JSX.Element => {
  const navigate = useNavigate();

  // 졸업 전시와 학생 전시 구분 플래그
  const isGraduationExhibition = exhibitionType === 'GRADUATION';

  // 전시 설명 글자수 관리 ref
  const koreanDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const englishDescriptionRef = useRef<HTMLTextAreaElement>(null);

  // 📍 전시 정보 관련
  const [detailInfo, setDetailInfo] = useState<DetailInfoFormData>({
    exhibitType: isGraduationExhibition
      ? (EXHIBITION_TYPE_LIST.graduation as EXHIBITION_TYPE)
      : (EXHIBITION_TYPE_LIST.student as EXHIBITION_TYPE),
    year: GRADUATION_EXHIBITION_YEAR_LIST[0],
    major: GRADUATION_EXHIBITION_MAJOR_LIST[0] as GRADUATION_EXHIBITION_MAJOR,
    club: STUDENT_EXHIBITION_CLUB_LIST[0] as STUDENT_EXHIBITION_CLUB,
    title: '',
    subTitle: '',
    description_ko: '',
    description_en: '',
    behanceUrl: 'https://www.behance.net/search/projects/hongik%20university',
    instagramUrl: 'https://www.instagram.com/hongik.id.degreeshow/',
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
  const [isImageDragging, setIsImageDragging] = useState<boolean>(false);

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

  // 이미지 드래그 앤 드롭 이벤트 핸들러
  const handleImageDragEnter = () => setIsImageDragging(true);
  const handleImageDragLeave = () => setIsImageDragging(false);

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

  const handleArtistCardDelete = useCallback((id: number) => {
    setArtists((prevArtists) =>
      prevArtists.filter((artist) => artist.id !== id)
    );
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

  // 전시 등록 Mutation
  const registerMutation = useExhibitionRegisterMutation({
    exhibitionType: exhibitionType,
    exhibitTitle: detailInfo.title,
    onSuccess: () => {
      navigate('success');
    },
    onError: (error) => {
      console.error('전시 등록 실패: ', error);
      alert('전시 등록 실패...');
    },
  });

  const handleExhibitionRegisterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      e.preventDefault();

      // 필수 입력 필드 검사 (Toast UI 알림 표시)
      if (!detailInfo.title) {
        showAlertAndScroll('title', '전시 제목을 입력해주세요.');
        return;
      } else if (!detailInfo.subTitle) {
        showAlertAndScroll('subTitle', '전시 부제목(Subtitle)을 입력해주세요.');
        return;
      } else if (!detailInfo.description_en) {
        showAlertAndScroll(
          'description-en',
          '전시 설명(English)을 입력해주세요.'
        );
        return;
      } else if (!detailInfo.description_ko) {
        showAlertAndScroll(
          'description-ko',
          '전시 설명(Korean)을 입력해주세요.'
        );
        return;
      } else if (!detailInfo.behanceUrl) {
        showAlertAndScroll('behance-url', 'Behance 링크를 입력해주세요.');
        return;
      } else if (!detailInfo.instagramUrl) {
        showAlertAndScroll('instagram-url', 'Instagram 링크를 입력해주세요.');
        return;
      } else if (!imageFiles.length) {
        showAlertAndScroll('image-section', '전시 상세 이미지를 추가해주세요.');
        return;
      } else if (!thumbnail) {
        showAlertAndScroll(
          'image-preview-list',
          '썸네일 이미지를 선택해주세요.'
        );
        return;
      } else if (!artists.length) {
        showAlertAndScroll(
          'artist-section',
          '작가(Artist) 정보를 추가해주세요.'
        );
        return;
      }

      // 전시 등록 FormData 생성
      const exhibitionFormData = createExhibitionFormData({
        detailInfo,
        imageFiles,
        thumbnail,
        artists,
      });

      registerMutation.mutate(exhibitionFormData);
    } catch (error) {
      console.error('전시 등록 실패: ', error);
    }
  };

  return (
    <>
      {registerMutation.isPending && <FullScreenOverlayLoading />}
      <S.ExhibitionRegisterForm onSubmit={handleExhibitionRegisterSubmit}>
        <S.ArtworkInfoTitle>
          {isGraduationExhibition ? 'Graduation' : 'Student'} Artwork
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
                <S.DetailInfoInputLabel>
                  {isGraduationExhibition ? 'Major' : 'Club'}
                </S.DetailInfoInputLabel>
                <MajorRadioButtonGroup
                  radioListType={isGraduationExhibition ? 'major' : 'club'}
                  majorList={
                    isGraduationExhibition
                      ? GRADUATION_EXHIBITION_MAJOR_LIST
                      : STUDENT_EXHIBITION_CLUB_LIST
                  }
                  selectedMajor={
                    isGraduationExhibition ? detailInfo.major : detailInfo.club
                  }
                  handleMajorClick={handleDetailInfoChange}
                />
              </S.DetailInfoUnit>
              {/* Title */}
              <S.DetailInfoUnit id="title">
                <S.DetailInfoInputLabel>Title</S.DetailInfoInputLabel>
                <ExhibitionTextInput
                  placeholder="Enter Artwork Title."
                  field="title"
                  value={detailInfo.title}
                  handleTextChange={handleDetailInfoChange}
                />
              </S.DetailInfoUnit>
              {/* SubTitle */}
              <S.DetailInfoUnit id="subTitle">
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
              <S.DescriptionUnit id="description-en">
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
                <S.LanguageDescriptionContainer id="description-ko">
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
                <S.SocialLinkForm id="behance-url">
                  <BehanceLogo />
                  <ExhibitionTextInput
                    placeholder="Enter Behance Link."
                    field="behanceUrl"
                    value={detailInfo.behanceUrl}
                    handleTextChange={handleDetailInfoChange}
                  />
                </S.SocialLinkForm>

                {/* Instagram */}
                <S.SocialLinkForm id="instagram-url">
                  <InstagramLogo />
                  <ExhibitionTextInput
                    placeholder="Enter Instagram Link."
                    field="instagramUrl"
                    value={detailInfo.instagramUrl}
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
        <S.ExhibitonImageSection id="image-section">
          <S.DetailInfoTitle>
            Images<span>.</span>
          </S.DetailInfoTitle>
          <S.ImagePreviewScrollContainer
            id="image-preview-list"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) =>
              handleImageDrop(e, setImageFiles, setIsImageDragging)
            }
            onDragEnter={handleImageDragEnter}
            onDragLeave={handleImageDragLeave}
            $isImageDragging={isImageDragging}
          >
            <S.ImagePreviewContainer>
              {imageFiles
                .slice() // 원본 배열을 변경하지 않도록 복사본을 만듦
                .sort((a, b) =>
                  a === thumbnail ? -1 : b === thumbnail ? 1 : 0
                ) // thumbnail을 첫 번째로 정렬
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
        <S.ParticipantSection id="artist-section">
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
                handleArtistCardDelete={handleArtistCardDelete}
                setArtists={setArtists}
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

        {/* Toast Container */}
        <ToastContainer autoClose={2000} transition={Flip} hideProgressBar />
      </S.ExhibitionRegisterForm>
    </>
  );
};

export default ExhibitionRegister;
