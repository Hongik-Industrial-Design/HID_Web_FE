import { JSX } from 'react/jsx-runtime';

import { openNewTab } from '@utils/openNewTab';

import FooterLogo from '@assets/svgs/logos/footer-logo.svg';

import * as S from './Footer.styled';

const Footer = (): JSX.Element => {
  return (
    <S.FooterContainer>
      <S.InfoSection>
        <S.FooterLogo src={FooterLogo} alt="footer-logo" />
        <S.Infos>
          <span>
            04066 <br /> Wausan-ro 94, Mapo-gu, Seoul, Republic of Korea
          </span>
          <span className="contact">
            T. 02-320-1215 <br /> F. 02-324-4265
          </span>
          <span className="copyright">
            Copyright ⓒ by Hongik Industrial Design. All right reserved.
          </span>
        </S.Infos>
      </S.InfoSection>
      <S.SocialIconSection>
        <S.FacebookIcon
          onClick={() =>
            openNewTab('https://www.facebook.com/groups/hiid2012/?locale=ko_KR')
          }
        />
        <S.InstagramIcon
          onClick={() =>
            openNewTab('https://www.instagram.com/durundurun_hid/')
          }
        />
        <S.MailIcon
          onClick={() => openNewTab('mailto: hongikhid@hongik.ac.kr')}
        />
      </S.SocialIconSection>
    </S.FooterContainer>
  );
};

export default Footer;
