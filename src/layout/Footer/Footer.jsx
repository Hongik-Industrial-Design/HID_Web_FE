import {
  ContactInfos,
  FooterContainer,
  Infos,
  SocialIcon,
  SocialIconContainer,
} from "./Footer.styled";

import FooterLogo from "@assets/footer-logo.svg";
import FacebookLogo from "@assets/Social-Icons/Facebook.svg";
import InstagramLogo from "@assets/Social-Icons/Instagram.svg";
import MailLogo from "@assets/Social-Icons/Mail.svg";

const Footer = () => {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <FooterContainer>
        <ContactInfos>
          <img src={FooterLogo} alt="footer-logo" style={{ flexShrink: 0 }} />
          <Infos>
            <div className="address">
              04066 94 <br /> Wausan-ro Mapo-gu Seoul Republic of Korea
            </div>
            <div className="contact">
              T. 02-320-1215 <br /> F. 02-324-4265
            </div>
            <div className="copyright">
              Copyright ⓒ by Hongik Industrial Design. All right reserved.
            </div>
          </Infos>
        </ContactInfos>
        <SocialIconContainer>
          <SocialIcon
            src={FacebookLogo}
            alt="Facebook-logo"
            onClick={() =>
              openNewTab(
                "https://www.facebook.com/groups/hiid2012/?locale=ko_KR"
              )
            }
          />
          <SocialIcon
            src={InstagramLogo}
            alt="Instagram-logo"
            onClick={() =>
              openNewTab("https://www.instagram.com/sandidandi_hid/")
            }
          />
          <SocialIcon
            src={MailLogo}
            alt="Mail-logo"
            onClick={() => openNewTab("mailto: webmaster@hongik.ac.kr")}
          />
        </SocialIconContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
