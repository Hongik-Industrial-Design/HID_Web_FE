import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { useParams } from 'react-router';

import { ExhibitionDetail } from '@schemas/exhibition';

import Breadscrumb from '@components/Breadscrumb/Breadscrumb';
import Keyword from '@components/Keyword/Keyword';
import GoToList from '@components/GoToList/GoToList';
// import NextPrevious from '@components/NextPrevious/NextPrevious';
import YoutubeEmbed from '@components/YoutubeEmbed/YoutubeEmbed';
import { BehanceLogo, InstagramLogo } from '@icons/SocialIcon';

import * as S from './HeroSection.styled';

interface HeroSectionProps {
  artworkInfos: ExhibitionDetail;
}

type SocialIconHovered = {
  Behance: boolean;
  Instagram: boolean;
};

const HeroSection = ({ artworkInfos }: HeroSectionProps): JSX.Element => {
  // 추후에 서버로부터 받아온 데이터로 변경 필요
  const KEYWORD_LIST = ['Service', 'Product', 'Future'];

  const { year } = useParams();
  const exhibitionYear = year ?? '2023';

  const [goToListHovered, setGoToListHovered] = useState<boolean>(false);
  const [isSocialIconHovered, setIsSocialIconHovered] =
    useState<SocialIconHovered>({
      Behance: false,
      Instagram: false,
    });

  const handleGoToListEnter = () => setGoToListHovered(true);
  const handleGoToListLeave = () => setGoToListHovered(false);

  const handleSocialIconEnter = (service: keyof typeof isSocialIconHovered) => {
    setIsSocialIconHovered((prev) => ({ ...prev, [service]: true }));
  };

  const handleSocialIconLeave = (service: keyof typeof isSocialIconHovered) => {
    setIsSocialIconHovered((prev) => ({ ...prev, [service]: false }));
  };

  const youtubeUrl = artworkInfos.videoUrl ?? '';

  return (
    <S.YoutubeEmbedWrapper $isVideoUrlExist={!!youtubeUrl}>
      <S.HeroSectionContainer>
        {/* Thumbnail */}
        <S.ThumbnailContainer>
          <S.PrimaryThumbnailFrame>
            <S.PrimaryThumbnail
              src={artworkInfos.mainImgUrl}
              alt={artworkInfos.titleKo}
            />
          </S.PrimaryThumbnailFrame>
        </S.ThumbnailContainer>

        {/* Content Area */}
        <S.ContentArea>
          <Breadscrumb
            paths={[
              {
                content: 'Student Exhibition',
                path: `/student/${year}`,
              },
              { content: exhibitionYear, path: `/student/${year}` },
            ]}
            currentPage="View Detail"
          />
          {/* Header */}
          <S.ContentHeader>
            <S.ArtworkTitle>{artworkInfos.titleEn}</S.ArtworkTitle>
            <S.ArtworkSubTitle>{artworkInfos.subTitleEn}</S.ArtworkSubTitle>
            <S.AuthorContainer>
              {artworkInfos.artists?.map((artist, index) => (
                <S.AuthorUnit key={artist.id}>
                  <S.AuthorName>{artist.nameEn}</S.AuthorName>
                  {index !== artworkInfos.artists.length - 1 && ( // 마지막 사람 뒤에만 Divider 렌더링 X
                    <S.AuthorDivider />
                  )}
                </S.AuthorUnit>
              ))}
            </S.AuthorContainer>
          </S.ContentHeader>

          {/* Description */}
          <S.ArtworkDescriptionSection>
            <S.DescriptionEnglish>
              {artworkInfos.descriptionEn}
            </S.DescriptionEnglish>
            <S.DescriptionKorean>
              {artworkInfos.descriptionKo}
            </S.DescriptionKorean>
          </S.ArtworkDescriptionSection>

          {/* 서버에서 데이터가 넘어오지 않음 (BE에 요청 필요) */}
          {/* Keyword */}
          <S.KeywordContainer>
            {KEYWORD_LIST.map((keyword, index) => (
              <Keyword key={index} keyword={keyword} />
            ))}
          </S.KeywordContainer>

          {/* Footer */}
          <S.ContentFooter>
            {/* Social Icon */}
            <S.SocialIconList>
              <S.SocialIconItem>
                <S.SocialIconLink
                  href={artworkInfos.behanceUrl ?? ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleSocialIconEnter.bind(null, 'Behance')}
                  onMouseLeave={handleSocialIconLeave.bind(null, 'Behance')}
                >
                  <BehanceLogo $isHovered={isSocialIconHovered.Behance} />
                </S.SocialIconLink>
              </S.SocialIconItem>

              <S.SocialIconItem>
                <S.SocialIconLink
                  href={artworkInfos.instagramUrl ?? ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleSocialIconEnter.bind(null, 'Instagram')}
                  onMouseLeave={handleSocialIconLeave.bind(null, 'Instagram')}
                >
                  <InstagramLogo $isHovered={isSocialIconHovered.Instagram} />
                </S.SocialIconLink>
              </S.SocialIconItem>
            </S.SocialIconList>

            {/* Routing Area */}
            <S.RoutingArea>
              <GoToList
                route={`/student/${year}`}
                isHovered={goToListHovered}
                onMouseEnter={handleGoToListEnter}
                onMouseLeave={handleGoToListLeave}
              />

              {/* 버튼 클릭 시 params 값 1 증가/감소 로직 필요 */}
              {/* <NextPrevious currentPage={currentPage} totalPages={totalPages} /> */}
            </S.RoutingArea>
          </S.ContentFooter>
        </S.ContentArea>
      </S.HeroSectionContainer>
      {/* Youtube Embed */}
      {youtubeUrl && <YoutubeEmbed youtubeUrl={youtubeUrl} />}
    </S.YoutubeEmbedWrapper>
  );
};

export default HeroSection;
