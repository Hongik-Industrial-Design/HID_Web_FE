import styled, { css } from 'styled-components';

import Behance from '@assets/svgs/social-icons/Behance_transparent.svg?react';
import Instagram from '@assets/svgs/social-icons/Instagram_transparent.svg?react';

type SocialIconTransientProps = {
  $isHovered: boolean;
};

const HeroSectionSocialIcon = css`
  width: 70%;
  height: fit-content;
`;

export const BehanceLogo = styled(Behance)<SocialIconTransientProps>`
  ${HeroSectionSocialIcon}

  path {
    ${({ $isHovered }) =>
      $isHovered &&
      css`
        fill: #1253f8;
        fill-opacity: 1;
      `}
  }
`;

export const InstagramLogo = styled(Instagram)<SocialIconTransientProps>`
  ${HeroSectionSocialIcon}
  width: 63%;

  path {
    ${({ $isHovered }) =>
      $isHovered &&
      css`
        fill: url(#gradient1);
        fill-opacity: 1;
      `}
  }
`;
