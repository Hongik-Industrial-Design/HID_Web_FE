import styled, { css } from 'styled-components';

import facebookLogo from '@assets/svgs/social-icons/Facebook.svg?react';
import instagramLogo from '@assets/svgs/social-icons/Instagram.svg?react';
import mailLogo from '@assets/svgs/social-icons/Mail.svg?react';

export const FooterContainer = styled.footer`
  width: 100%;
  height: clamp(24rem, 20vw, 30rem);
  padding: 0 15.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;

  border-top: 2px solid ${({ theme }) => theme.colors.HID_Grayscale[50]};
  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  @media (max-width: 1200px) {
    padding: 0 9.6rem;
  }

  @media (max-width: 768px) {
    height: fit-content;
    padding: 4.8rem 9.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.8rem;
  }

  @media (max-width: 480px) {
    padding: 5.6rem 6.4rem;
    gap: 2.8rem;
  }
`;

export const InfoSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: clamp(4rem, 6vw, 8rem);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3.2rem;
  }
`;

export const FooterLogo = styled.img`
  width: clamp(200px, 12vw, 240px);
  height: fit-content;

  user-select: none;

  @media (max-width: 1200px) {
    width: clamp(120px, 18vw, 200px);
  }

  @media (max-width: 768px) {
    width: clamp(100px, 16vw, 120px);
  }
`;

export const Infos = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    ${({ theme }) => theme.fontStyles.Caption1}
    font-size: clamp(1rem, 1vw, 1.2rem);
    color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
    white-space: nowrap;

    user-select: text;

    @media (max-width: 768px) {
      white-space: normal;
    }
  }
  .contact {
    font-weight: 400;
  }

  .copyright {
    font-weight: 300;
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

export const SocialIconSection = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    gap: clamp(0.8rem, 2vw, 1.2rem);
  }
`;

const SocialIconStyles = css`
  width: clamp(4rem, 4vw, 4.8rem);
  height: clamp(4rem, 4vw, 4.8rem);

  cursor: pointer;

  &:hover {
    transform: scale(1.1) translateY(-2px);
  }
  transition: transform 0.15s ease-out;

  @media (max-width: 768px) {
    width: clamp(3.2rem, 6vw, 3.6rem);
    height: clamp(3.2rem, 6vw, 3.6rem);
  }
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
