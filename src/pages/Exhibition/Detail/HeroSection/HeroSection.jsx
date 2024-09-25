import { useEffect, useState } from "react";
import axios from "axios";

import {
  ContentArea,
  ContentDescription,
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

import tinyImage1 from "@assets/detail-images/tiny-1.jpg";
import tinyImage2 from "@assets/detail-images/tiny-2.jpg";
import tinyImage3 from "@assets/detail-images/tiny-3.jpg";
import primaryImage from "@assets/detail-images/primary.jpg";

import Mail from "@assets/Social-Icons/Mail_transparent.svg";
import Instagram from "@assets/Social-Icons/instagram_transparent.svg";
import Behance from "@assets/Social-Icons/behance_transparent.svg";
import Linkedin from "@assets/Social-Icons/linkedin_transparent.svg";

const HeroSection = () => {
  const [artworkInfos, setArtworkInfos] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Fetching Personal Artwork Information
  useEffect(() => {
    const fetchArtworkInfos = async () => {
      try {
        const response = await axios.get("/data/artwork.json");
        const personalArtworkInfos = response.data;

        console.log(personalArtworkInfos);

        setArtworkInfos(personalArtworkInfos);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchArtworkInfos();
  }, []);

  return (
    <>
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
            <img src={tinyImage1} alt="tiny-image_1" className="secondary" />
            <img src={tinyImage2} alt="tiny-image_2" className="secondary" />
            <img src={tinyImage3} alt="tiny-image_3" className="secondary" />
          </TinyThumbnailContainer>
          <img src={primaryImage} alt="primary-thumbnail" className="primary" />
        </ThumbnailContainer>
        <ContentArea>
          <ContentHeader>
            <div className="title">{artworkInfos.title}</div>
            <div className="type">{artworkInfos.subtitle}</div>
            <div className="author">
              Alex Kim <span className="divider">|</span> Jordan Park
            </div>
          </ContentHeader>
          <ContentDescription>
            <div>{artworkInfos.description_en}</div>
            <div>{artworkInfos.description_ko}</div>
          </ContentDescription>
          <ContentFooter>
            <SocialIcons>
              <img
                src={Mail}
                alt="Mail-Icon"
                className="icon"
                onClick={() => openNewTab("mailto: keaikim77@gmail.com")}
              />
              <img
                src={Instagram}
                alt="Instagram-Icon"
                className="icon"
                onClick={() => openNewTab("https://www.instagram.com/")}
              />
              <img
                src={Behance}
                alt="Behance-Icon"
                className="icon"
                onClick={() => openNewTab("https://www.behance.net/")}
              />
              <img
                src={Linkedin}
                alt="Linkedin-Icon"
                className="icon"
                onClick={() => {
                  openNewTab(
                    "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  );
                }}
              />
            </SocialIcons>
            <RoutingArea>
              <GoToList isHovered={isHovered} setIsHovered={setIsHovered} />
              <NextPrevious />
            </RoutingArea>
          </ContentFooter>
        </ContentArea>
      </HeroSectionContainer>
    </>
  );
};

export default HeroSection;
