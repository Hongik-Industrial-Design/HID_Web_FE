import * as S from './Footer.styled';

import FooterLogo from '@assets/icons/svgs/logos/footer-logo.svg';
import FacebookLogo from '@assets/icons/svgs/social-icons/Facebook.svg';
import InstagramLogo from '@assets/icons/svgs/social-icons/Instagram.svg';
import MailLogo from '@assets/icons/svgs/social-icons/Mail.svg';

const Footer = () => {
  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <S.FooterContainer>
      <S.ContactInfos>
        <img src={FooterLogo} alt="footer-logo" style={{ flexShrink: 0 }} />
        <S.Infos>
          <div className="address">
            04066 94 <br /> Wausan-ro Mapo-gu Seoul Republic of Korea
          </div>
          <div className="contact">
            T. 02-320-1215 <br /> F. 02-324-4265
          </div>
          <div className="copyright">
            Copyright ⓒ by Hongik Industrial Design. All right reserved.
          </div>
        </S.Infos>
      </S.ContactInfos>
      <S.SocialIconContainer>
        <S.FacebookIcon
          src={FacebookLogo}
          alt="Facebook-logo"
          onClick={() =>
            openNewTab('https://www.facebook.com/groups/hiid2012/?locale=ko_KR')
          }
        />
        <S.InstagramIcon
          src={InstagramLogo}
          alt="Instagram-logo"
          onClick={() =>
            openNewTab('https://www.instagram.com/sandidandi_hid/')
          }
        />
        <S.MailIcon
          src={MailLogo}
          alt="Mail-logo"
          onClick={() => openNewTab('mailto: webmaster@hongik.ac.kr')}
        />
      </S.SocialIconContainer>
    </S.FooterContainer>
  );
};

export default Footer;
