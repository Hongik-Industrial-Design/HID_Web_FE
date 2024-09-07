import { useState } from "react";

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

import tinyImage1 from "@assets/detail-images/tiny-1.jpg";
import tinyImage2 from "@assets/detail-images/tiny-2.jpg";
import tinyImage3 from "@assets/detail-images/tiny-3.jpg";
import primaryImage from "@assets/detail-images/primary.jpg";

import Mail from "@assets/Social-Icons/Mail_transparent.svg";
import Instagram from "@assets/Social-Icons/instagram_transparent.svg";
import Behance from "@assets/Social-Icons/behance_transparent.svg";
import Linkedin from "@assets/Social-Icons/linkedin_transparent.svg";
import GoToList from "@components/GoToList/GoToList";
import NextPrevious from "@components/NextPrevious/NextPrevious";
import Breadscrumb from "@components/Breadscrumb/Breadscrumb";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // const enterButton = () => {
  //   setIsHovered(true);
  // };

  // const leaveButton = () => {
  //   setIsHovered(false);
  // };

  return (
    <>
      <HeroSectionContainer>
        <Breadscrumb />
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
            <div className="title">Retro Gaming Legends</div>
            <div className="type">Iconic Handheld Console Collection</div>
            <div className="author">
              Alex Kim <span className="divider">|</span> Jordan Park
            </div>
          </ContentHeader>
          <ContentDescription>
            <div>
              This collection of iconic handheld gaming consoles is designed for
              retro gaming enthusiasts and collectors. The devices, including
              the Game Boy Color and other vintage consoles, are perfect for
              those looking to relive the golden age of portable gaming. They
              serve not only as functional devices for playing classic games but
              also as decorative pieces that embody the charm and creativity of
              early gaming technology.
            </div>
            <div>
              이 레트로 게임 콘솔 컬렉션은 과거 휴대용 게임기의 황금기를 다시
              경험하고 싶은 게이머와 수집가들을 위해 설계되었습니다. Game Boy
              Color를 비롯한 여러 빈티지 콘솔은 그 자체로 클래식 게임을 즐길 수
              있을 뿐만 아니라, 독창적이고 매력적인 디자인으로 인테리어
              장식용으로도 손색이 없습니다.
            </div>
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
