import { openNewTab } from '@utils/openNewTab';

import * as S from './Footer.styled';

import FooterLogo from '@assets/icons/svgs/logos/footer-logo.svg';

const Footer = () => {
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
          onClick={() =>
            openNewTab('https://www.facebook.com/groups/hiid2012/?locale=ko_KR')
          }
        />
        <S.InstagramIcon
          onClick={() =>
            openNewTab('https://www.instagram.com/sandidandi_hid/')
          }
        />
        <S.MailIcon
          onClick={() => openNewTab('mailto: webmaster@hongik.ac.kr')}
        />
      </S.SocialIconContainer>
    </S.FooterContainer>
  );
};

export default Footer;
