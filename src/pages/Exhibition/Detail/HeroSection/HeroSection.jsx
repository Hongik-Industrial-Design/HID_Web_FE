/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  ArtworkDescription,
  ArtworkSubTitle,
  ArtworkTitle,
  AuthorContainer,
  AuthorUnit,
  ContentArea,
  ContentFooter,
  ContentHeader,
  HeroSectionContainer,
  RoutingArea,
  SocialIcons,
  ThumbnailContainer,
  TinyThumbnailContainer,
} from "./HeroSection.styled";

import Breadscrumb from "@components/Breadscrumb/Breadscrumb";
import GoToList from "@components/GoToList/GoToList";
import NextPrevious from "@components/NextPrevious/NextPrevious";

const HeroSection = ({ fetchedData, totalPages, currentPage }) => {
  // const [artworkInfos, setArtworkInfos] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <HeroSectionContainer>
      <Breadscrumb
        paths={[
          {
            content: "Graduation Exhibition",
            path: "/graduation",
          },
          { content: "2024", path: "/graduation" },
        ]}
        currentPage="View Detail"
      />
      <ThumbnailContainer>
        <TinyThumbnailContainer>
          {fetchedData?.thumbnails?.tinyImages.map((tinyImage) => (
            <img
              key={tinyImage.id}
              src={`/Graduation-Exhibition/${currentPage}/${tinyImage.url}`}
              alt="tiny-image_1"
              className="secondary"
            />
          ))}
        </TinyThumbnailContainer>
        <img
          src={`/Graduation-Exhibition/${currentPage}/${fetchedData?.thumbnails?.primary.url}`}
          alt="primary-thumbnail"
          className="primary"
        />
      </ThumbnailContainer>
      <ContentArea>
        <ContentHeader>
          <ArtworkTitle>{fetchedData?.title}</ArtworkTitle>
          <ArtworkSubTitle>{fetchedData?.subtitle}</ArtworkSubTitle>
          <AuthorContainer>
            {fetchedData?.authors.map((author) => (
              <AuthorUnit key={author.id}>
                <p>{author.name}</p>
                <span className="divider" />
              </AuthorUnit>
            ))}
          </AuthorContainer>
        </ContentHeader>
        <ArtworkDescription>
          <div>{fetchedData?.description_en}</div>
          <div>{fetchedData?.description_ko}</div>
        </ArtworkDescription>
        <ContentFooter>
          <SocialIcons>
            {fetchedData?.social.map((sns) => (
              <img
                key={sns.id}
                src={`/Social-Icons/${sns.service}_transparent.svg`}
                className="icon"
                onClick={() => openNewTab(`${sns.link}`)}
              />
            ))}
          </SocialIcons>
          <RoutingArea>
            <GoToList isHovered={isHovered} setIsHovered={setIsHovered} />
            <NextPrevious currentPage={currentPage} totalPages={totalPages} />
          </RoutingArea>
        </ContentFooter>
      </ContentArea>
    </HeroSectionContainer>
  );
};

export default HeroSection;
