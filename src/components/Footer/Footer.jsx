import {
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
  return (
    <>
      <FooterContainer>
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
        <SocialIconContainer>
          <SocialIcon src={FacebookLogo} alt="Facebook-logo" />
          <SocialIcon src={InstagramLogo} alt="Instagram-logo" />
          <SocialIcon src={MailLogo} alt="Mail-logo" />
        </SocialIconContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
