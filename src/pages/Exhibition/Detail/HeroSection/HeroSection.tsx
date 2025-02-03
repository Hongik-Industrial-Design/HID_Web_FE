import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { HeroSectionInfos } from '../Artwork.types';

import Breadscrumb from '@components/Breadscrumb/Breadscrumb';
import SocialIcon from '@components/SocialIcon/SocialIcon';
import GoToList from '@components/GoToList/GoToList';
import NextPrevious from '@components/NextPrevious/NextPrevious';

import * as S from './HeroSection.styled';

interface HeroSectionProps {
  fetchedData?: HeroSectionInfos;
  totalPages: number;
  currentPage: number;
}

const HeroSection = ({
  fetchedData,
  totalPages,
  currentPage,
}: HeroSectionProps): JSX.Element => {
  const [gotToListHovered, setGoToListHovered] = useState<boolean>(false);

  const handleGoToListEnter = () => setGoToListHovered(true);
  const handleGoToListLeave = () => setGoToListHovered(false);

  return (
    <S.HeroSectionContainer>
      <Breadscrumb
        paths={[
          {
            content: 'Graduation Exhibition',
            path: '/graduation',
          },
          { content: '2024', path: '/graduation' },
        ]}
        currentPage="View Detail"
      />

      {/* Thumbnail */}
      <S.ThumbnailContainer>
        <S.TinyThumbnailList>
          {fetchedData?.thumbnails?.tinyImages.map((tinyImage) => (
            <S.TinyThumbnailItem key={tinyImage.id}>
              <S.TinyThumbnail
                src={`/Graduation-Exhibition/${currentPage}/${tinyImage.url}`}
                alt="tiny-thumbnail"
              />
            </S.TinyThumbnailItem>
          ))}
        </S.TinyThumbnailList>
        <S.PrimartThumbnailFrame>
          <S.PrimaryThumbnail
            src={`/Graduation-Exhibition/${currentPage}/${fetchedData?.thumbnails.primary.url}`}
            alt="primary-thumbnail"
          />
        </S.PrimartThumbnailFrame>
      </S.ThumbnailContainer>

      {/* Content Area */}
      <S.ContentArea>
        {/* Header */}
        <S.ContentHeader>
          <S.ArtworkTitle>{fetchedData?.title}</S.ArtworkTitle>
          <S.ArtworkSubTitle>{fetchedData?.subtitle}</S.ArtworkSubTitle>
          <S.AuthorContainer>
            {fetchedData?.authors.map((author, index) => (
              <S.AuthorUnit key={author.id}>
                <S.AuthorName>{author.name}</S.AuthorName>
                {index !== fetchedData.authors.length - 1 && ( // 마지막 사람 뒤에만 Divider 렌더링 X
                  <S.AuthorDivider />
                )}
              </S.AuthorUnit>
            ))}
          </S.AuthorContainer>
        </S.ContentHeader>

        {/* Description */}
        <S.ArtworkDescriptionSection>
          <S.DescriptionEnglish>
            {fetchedData?.description_en}
          </S.DescriptionEnglish>
          <S.DescriptionKorean>
            {fetchedData?.description_ko}
          </S.DescriptionKorean>
        </S.ArtworkDescriptionSection>

        {/* Footer */}
        <S.ContentFooter>
          <S.SocialIconList>
            {fetchedData?.social.map((sns) => (
              <S.SocialIconItem key={sns.id}>
                <S.SocialIconLink
                  href={sns.linkInfo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon service={sns.service} />
                </S.SocialIconLink>
              </S.SocialIconItem>
            ))}
          </S.SocialIconList>
          <S.RoutingArea>
            <GoToList
              isHovered={gotToListHovered}
              onMouseEnter={handleGoToListEnter}
              onMouseLeave={handleGoToListLeave}
            />
            <NextPrevious currentPage={currentPage} totalPages={totalPages} />
          </S.RoutingArea>
        </S.ContentFooter>
      </S.ContentArea>
    </S.HeroSectionContainer>
  );
};

export default HeroSection;
