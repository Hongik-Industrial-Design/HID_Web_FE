import { useState } from 'react';

import { openNewTab } from '@utils/openNewTab';

import Breadscrumb from '@components/Breadscrumb/Breadscrumb';
import GoToList from '@components/GoToList/GoToList';
import NextPrevious from '@components/NextPrevious/NextPrevious';

import * as S from './HeroSection.styled';

const HeroSection = ({ fetchedData, totalPages, currentPage }) => {
  // const [artworkInfos, setArtworkInfos] = useState([]);
  const [gotToListHovered, setGoToListHovered] = useState(false);

  const handleGoToListEnter = () => {
    setGoToListHovered(true);
  };

  const handleGoToListLeave = () => {
    setGoToListHovered(false);
  };

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
      <S.ThumbnailContainer>
        <S.TinyThumbnailContainer>
          {fetchedData?.thumbnails?.tinyImages.map((tinyImage) => (
            <img
              key={tinyImage.id}
              src={`/Graduation-Exhibition/${currentPage}/${tinyImage.url}`}
              alt="tiny-image_1"
              className="secondary"
            />
          ))}
        </S.TinyThumbnailContainer>
        <img
          src={`/Graduation-Exhibition/${currentPage}/${fetchedData?.thumbnails?.primary.url}`}
          alt="primary-thumbnail"
          className="primary"
        />
      </S.ThumbnailContainer>
      <S.ContentArea>
        <S.ContentHeader>
          <S.ArtworkTitle>{fetchedData?.title}</S.ArtworkTitle>
          <S.ArtworkSubTitle>{fetchedData?.subtitle}</S.ArtworkSubTitle>
          <S.AuthorContainer>
            {fetchedData?.authors.map((author) => (
              <S.AuthorUnit key={author.id}>
                <p>{author.name}</p>
                <span className="divider" />
              </S.AuthorUnit>
            ))}
          </S.AuthorContainer>
        </S.ContentHeader>
        <S.ArtworkDescription>
          <div>{fetchedData?.description_en}</div>
          <div>{fetchedData?.description_ko}</div>
        </S.ArtworkDescription>
        <S.ContentFooter>
          <S.SocialIcons>
            {fetchedData?.social.map((sns) => (
              <img
                key={sns.id}
                src={`/Social-Icons/${sns.service}_transparent.svg`}
                className="icon"
                onClick={() => openNewTab(`${sns.linkInfo}`)}
              />
            ))}
          </S.SocialIcons>
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
