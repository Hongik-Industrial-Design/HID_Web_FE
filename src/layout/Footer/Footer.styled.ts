import styled, { css } from 'styled-components';

import facebookLogo from '@assets/icons/svgs/social-icons/Facebook.svg?react';
import instagramLogo from '@assets/icons/svgs/social-icons/Instagram.svg?react';
import mailLogo from '@assets/icons/svgs/social-icons/Mail.svg?react';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 9.6rem 15.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;

  border-top: 2px solid ${({ theme }) => theme.colors.HID_Grayscale[50]};
  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;

export const InfoSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 8rem;
`;

export const FooterLogo = styled.img`
  width: 240px;
  height: fit-content;

  user-select: none;
`;

export const Infos = styled.div`
  width: fit-content;
  min-width: 365px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    ${({ theme }) => theme.fontStyles.Caption1}
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.HID_Grayscale[400]};

    user-select: text;
  }
  .contact {
    font-weight: 400;
  }

  .copyright {
    font-weight: 300;
  }
`;

export const SocialIconSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const SocialIconStyles = css`
  width: 4.8rem;
  height: 4.8rem;

  cursor: pointer;

  &:hover {
    transform: scale(1.1) translateY(-2px);
  }
  transition: transform 0.15s ease-out;
`;

export const FacebookIcon = styled(facebookLogo)`
  ${SocialIconStyles}
`;

export const InstagramIcon = styled(instagramLogo)`
  ${SocialIconStyles}
`;

export const MailIcon = styled(mailLogo)`
  ${SocialIconStyles}
`;
